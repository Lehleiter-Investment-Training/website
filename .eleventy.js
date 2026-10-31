// Eleventy-Konfiguration: verdrahtet Build-Helfer aus lib/ (Code) mit den Inhalten
// aus content/ (über src/_data/*.js) und den Templates in src/.
const path = require("path");
const htmlmin = require("html-minifier-terser");
const Image = require("@11ty/eleventy-img");
// RSS-Plugin v3 ist ESM und exportiert die Helfer als einzelne Funktionen.
const {
  dateToRfc3339,
  getNewestCollectionItemDate,
  absoluteUrl,
  convertHtmlToAbsoluteUrls,
} = require("@11ty/eleventy-plugin-rss");
const { buildCssBundle, postBuildMinify } = require("./lib/css-bundle");
const { blogCover } = require("./lib/blog-cover");
const { dateFormat, isoDate, cacheBust } = require("./lib/filters");

// Bundle einmalig beim Laden der Config erzeugen (globales CSS + Icon-CSS, minifiziert, gehasht)
const cssBundle = buildCssBundle();

module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData("currentYear", new Date().getFullYear());
  // RSS/Atom-Feed-Helfer für src/feed.njk registrieren (Plugin v3 = ESM, daher
  // werden die Filter einzeln eingehängt statt über addPlugin).
  eleventyConfig.addFilter("dateToRfc3339", dateToRfc3339);
  eleventyConfig.addFilter("getNewestCollectionItemDate", getNewestCollectionItemDate);
  eleventyConfig.addFilter("absoluteUrl", absoluteUrl);
  eleventyConfig.addNunjucksAsyncFilter("htmlToAbsoluteUrls", (htmlContent, base, callback) => {
    Promise.resolve(convertHtmlToAbsoluteUrls(htmlContent, base))
      .then((result) => callback(null, result))
      .catch((err) => callback(err));
  });

  // Pfad zum gehashten CSS-Bundle in Templates verfügbar machen
  eleventyConfig.addGlobalData("cssBundle", `/assets/css/${cssBundle.fileName}`);

  eleventyConfig.addFilter("cacheBust", cacheBust);

  // Blog collection sorted by date (newest first).
  // Akzeptiert .njk UND .md, damit Artikel maschinell als Markdown erzeugt werden können.
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.{njk,md}")
      .filter(item => item.url !== "/blog.html")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  eleventyConfig.addFilter("dateFormat", dateFormat); // deutsches Datumsformat
  eleventyConfig.addFilter("isoDate", isoDate);       // ISO-Datum für schema.org

  // Parametrisches Blog-Titelbild (16:9-SVG als Data-URI) aus Titel + Kategorie
  eleventyConfig.addFilter("blogCover", blogCover);

  // Responsive-Image-Shortcode (WebP + Fallback, automatische width/height).
  // widths optional überschreibbar, z. B. [96, 192] für kleine Avatare.
  eleventyConfig.addAsyncShortcode("image", async function(src, alt, sizes, loading, className, widths) {
    const metadata = await Image(path.join(__dirname, "src", src), {
      widths: widths || [600, 1000, 1500],
      formats: ["webp", "jpeg"],
      outputDir: path.join(__dirname, "_site/assets/images/optimized"),
      urlPath: "/assets/images/optimized/",
      sharpJpegOptions: { quality: 80, mozjpeg: true },
      sharpWebpOptions: { quality: 78 },
    });
    const isEager = loading === "eager";
    return Image.generateHTML(metadata, {
      alt: alt || "",
      sizes: sizes || "100vw",
      loading: isEager ? "eager" : "lazy",
      decoding: "async",
      ...(className ? { class: className } : {}),
      ...(isEager ? { fetchpriority: "high" } : {}),
    });
  });

  // Passthrough file copies
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/data");
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/blog/figures");
  eleventyConfig.addPassthroughCopy("src/bonus/downloads");
  eleventyConfig.addPassthroughCopy("src/workbook/downloads");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/llms.txt");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/_headers");

  // Passthrough for legacy PDFs
  eleventyConfig.addPassthroughCopy({
    "src/assets/downloads/*.pdf": "/"
  });

  // Watch targets
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("content/"); // redaktionelle YAML-Inhalte

  // Glossar-Verlinkung: markierte Fachbegriffe (<span class="key-term">) in
  // Blog-Artikeln zu internen Links auf das Glossar machen (Topical Authority + GEO).
  // Läuft vor dem Minify und nur auf Blog-Artikelseiten (nicht auf dem Index).
  eleventyConfig.addTransform("glossaryLinks", function(content) {
    const inputPath = this.page.inputPath || "";
    const isBlogPost = inputPath.includes("/blog/") && !/\/index\.\w+$/.test(inputPath);
    if (!isBlogPost || !(this.page.outputPath || "").endsWith(".html")) return content;
    return content.replace(
      /<span class="key-term">([\s\S]*?)<\/span>/g,
      '<a href="/glossar.html" class="key-term" title="Im Glossar nachschlagen">$1</a>'
    );
  });

  // HTML minifizieren (inkl. inline JS/CSS und JSON-LD-Whitespace)
  eleventyConfig.addTransform("htmlmin", async function(content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      return htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
        sortAttributes: true,
        sortClassName: true,
        continueOnParseError: true,
      });
    }
    return content;
  });

  // Nach dem Build: CSS-Bundle schreiben, übrige CSS- und JS-Dateien minifizieren
  eleventyConfig.on("eleventy.after", async ({ dir }) => {
    try {
      await postBuildMinify(dir.output, cssBundle);
    } catch (error) {
      console.error("❌ Post-Build-Minifizierung fehlgeschlagen:", error);
      throw error;
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
