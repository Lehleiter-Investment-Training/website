const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const CleanCSS = require("clean-css");
const { minify: minifyJs } = require("terser");
const htmlmin = require("html-minifier-terser");
const Image = require("@11ty/eleventy-img");

// Globale CSS-Dateien, die auf jeder Seite benötigt werden -> ein gebündeltes File
const GLOBAL_CSS = [
  "variables.css",
  "base.css",
  "nav.css",
  "components.css",
  "footer.css",
  "responsive.css",
];

// --- Font Awesome als lokales Inline-SVG-Icon-CSS (kein Drittanbieter, kein Webfont) ---
const FA_PKG = path.join(__dirname, "node_modules/@fortawesome/fontawesome-free");
const FA_SVG_DIR = path.join(FA_PKG, "svgs");
const FA_FOLDER = { fas: "solid", far: "regular", fab: "brands" };

// Alias-Auflösung: FA v6 hat viele Icons umbenannt (z. B. search -> magnifying-glass).
// Die alten Namen sind in der Metadaten-Datei als Aliase hinterlegt, die SVG-Dateien
// tragen jedoch nur den kanonischen Namen. Wir bauen eine Map aliasName -> kanonischer Name.
function buildAliasMap() {
  const meta = require(path.join(FA_PKG, "metadata/icon-families.json"));
  const map = {};
  for (const [canonical, def] of Object.entries(meta)) {
    const names = (def && def.aliases && def.aliases.names) || [];
    for (const alias of names) map[alias] = canonical;
  }
  return map;
}
const FA_ALIAS = buildAliasMap();

function walkFiles(dir, exts, acc) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(full, exts, acc);
    else if (exts.some((e) => entry.name.endsWith(e))) acc.push(full);
  }
  return acc;
}

// Scannt den Quelltext nach verwendeten Icons und erzeugt CSS, das jedes Icon
// per CSS-mask (eingefärbt über currentColor) rendert. Ein unbekanntes Icon lässt
// den Build absichtlich fehlschlagen.
function buildIconCss() {
  const files = walkFiles(path.join(__dirname, "src"), [".njk", ".html", ".js"], []);
  const re = /\b(fas|far|fab)\s+fa-([a-z0-9-]+)/g;
  const used = new Map(); // name -> folder
  for (const file of files) {
    const txt = fs.readFileSync(file, "utf8");
    let m;
    while ((m = re.exec(txt))) used.set(m[2], FA_FOLDER[m[1]]);
  }
  const base =
    ".fa,.fas,.far,.fab{display:inline-block;width:1em;height:1em;vertical-align:-.125em;" +
    "background-color:currentColor;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;" +
    "-webkit-mask-position:center;mask-position:center;-webkit-mask-size:contain;mask-size:contain}";
  const rules = [];
  for (const [name, folder] of used) {
    // Erst kanonischen Namen probieren, sonst über Alias-Map auflösen
    let svgPath = path.join(FA_SVG_DIR, folder, name + ".svg");
    if (!fs.existsSync(svgPath) && FA_ALIAS[name]) {
      svgPath = path.join(FA_SVG_DIR, folder, FA_ALIAS[name] + ".svg");
    }
    if (!fs.existsSync(svgPath)) {
      throw new Error(`Font-Awesome-Icon fehlt: ${folder}/${name}.svg (im Quelltext als fa-${name} verwendet)`);
    }
    const svg = fs.readFileSync(svgPath, "utf8").replace(/<!--[\s\S]*?-->/g, "").trim();
    const uri = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
    // CSS-Klasse bleibt der im HTML verwendete (Alias-)Name
    rules.push(`.fa-${name}{-webkit-mask-image:${uri};mask-image:${uri}}`);
  }
  return base + rules.join("");
}

// Bundle einmalig beim Laden der Config erzeugen (globales CSS + Icon-CSS, minifiziert, gehasht)
function buildCssBundle() {
  const cssDir = path.join(__dirname, "src/assets/css");
  const concatenated = GLOBAL_CSS
    .map((f) => fs.readFileSync(path.join(cssDir, f), "utf8"))
    .join("\n") + "\n" + buildIconCss();
  const minified = new CleanCSS({ level: 2 }).minify(concatenated).styles;
  const hash = crypto.createHash("md5").update(minified).digest("hex").slice(0, 8);
  return { content: minified, fileName: `app.${hash}.css` };
}
const cssBundle = buildCssBundle();

module.exports = function(eleventyConfig) {
  // Pfad zum gehashten CSS-Bundle in Templates verfügbar machen
  eleventyConfig.addGlobalData("cssBundle", `/assets/css/${cssBundle.fileName}`);

  // Blog collection sorted by date (newest first)
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.njk")
      .filter(item => item.url !== "/blog.html")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  // German date format filter
  eleventyConfig.addFilter("dateFormat", function(date) {
    if (!date) return "";
    return new Date(date).toLocaleDateString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  });

  // ISO date filter for schema.org
  eleventyConfig.addFilter("isoDate", function(date) {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  });

  // Responsive-Image-Shortcode (WebP + Fallback, automatische width/height)
  eleventyConfig.addAsyncShortcode("image", async function(src, alt, sizes, loading, className) {
    const metadata = await Image(path.join(__dirname, "src", src), {
      widths: [600, 1000, 1500],
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
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/blog/images");
  eleventyConfig.addPassthroughCopy("src/bonus/downloads");
  eleventyConfig.addPassthroughCopy("src/workbook/downloads");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/_headers");

  // Passthrough for legacy PDFs
  eleventyConfig.addPassthroughCopy({
    "src/assets/downloads/*.pdf": "/"
  });

  // Watch targets
  eleventyConfig.addWatchTarget("src/assets/css/");

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
    const cssOut = path.join(dir.output, "assets/css");
    const jsOut = path.join(dir.output, "assets/js");

    // 1) Gehashtes Global-Bundle schreiben
    fs.writeFileSync(path.join(cssOut, cssBundle.fileName), cssBundle.content);

    // 2) Globale Einzeldateien aus dem Output entfernen (stecken jetzt im Bundle)
    for (const file of GLOBAL_CSS) {
      const p = path.join(cssOut, file);
      if (fs.existsSync(p)) fs.unlinkSync(p);
    }

    // 3) Übrige (seitenspezifische) CSS-Dateien in-place minifizieren
    for (const file of fs.readdirSync(cssOut)) {
      if (!file.endsWith(".css") || file === cssBundle.fileName) continue;
      const p = path.join(cssOut, file);
      const out = new CleanCSS({ level: 2 }).minify(fs.readFileSync(p, "utf8"));
      if (out.styles) fs.writeFileSync(p, out.styles);
    }

    // 3) JS-Dateien in-place minifizieren
    for (const file of fs.readdirSync(jsOut)) {
      if (!file.endsWith(".js")) continue;
      const p = path.join(jsOut, file);
      const result = await minifyJs(fs.readFileSync(p, "utf8"));
      if (result.code) fs.writeFileSync(p, result.code);
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
