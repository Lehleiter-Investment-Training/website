const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const CleanCSS = require("clean-css");
const { minify: minifyJs } = require("terser");
const htmlmin = require("html-minifier-terser");
const Image = require("@11ty/eleventy-img");
// RSS-Plugin v3 ist ESM und exportiert die Helfer als einzelne Funktionen.
const {
  dateToRfc3339,
  getNewestCollectionItemDate,
  absoluteUrl,
  convertHtmlToAbsoluteUrls,
} = require("@11ty/eleventy-plugin-rss");

// Globale CSS-Dateien, die auf jeder Seite benötigt werden -> ein gebündeltes File
const GLOBAL_CSS = [
  "fonts.css",
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

  // Blog collection sorted by date (newest first).
  // Akzeptiert .njk UND .md, damit Artikel maschinell als Markdown erzeugt werden können.
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.{njk,md}")
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

  // Parametrisches Blog-Titelbild: erzeugt aus Titel + Kategorie ein konsistentes
  // 16:9-SVG (Navy/Gold-Branding, je Kategorie ein Akzent) als Data-URI.
  // So brauchen neue Artikel kein eigenes Bild mehr – nur ein optionales `category`.
  const BLOG_CATEGORY_COLORS = {
    "grundlagen": "#C8973E",
    "volatilität": "#3a7ca5", "volatilitaet": "#3a7ca5",
    "risiko": "#c0622d", "risikomanagement": "#c0622d",
    "psychologie": "#7a5ea8",
    "strategie": "#2e8b6b", "strategien": "#2e8b6b",
    "steuern": "#4a6b8a",
  };
  // Kategorie-Illustration: dezentes themenpassendes Motiv (Akzentfarbe, niedrige
  // Deckkraft) auf der rechten Seite – macht aus dem Titelbild eine echte Illustration,
  // ohne die Lesbarkeit des Titels zu beeinträchtigen.
  function blogMotif(key, accent) {
    const o = (op) => `fill="${accent}" fill-opacity="${op}"`;
    const s = (op, w) => `fill="none" stroke="${accent}" stroke-opacity="${op}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;
    switch (key) {
      case "volatilität": case "volatilitaet": // Schwankungswelle mit wachsender Amplitude
        return `<polyline points="470,300 510,300 540,255 575,330 605,205 640,320 675,175 710,310 760,250" ${s(0.20, 11)}/>`;
      case "strategie": case "strategien": // Payoff-Knick (Long-Call-Auszahlung)
        return `<line x1="470" y1="330" x2="770" y2="330" ${s(0.10, 5)}/><polyline points="470,300 620,300 760,150" ${s(0.20, 11)}/>`;
      case "risiko": case "risikomanagement": // Schutzschild
        return `<path d="M620,108 L712,140 L712,250 Q712,322 620,362 Q528,322 528,250 L528,140 Z" ${o(0.14)}/>`;
      case "grundlagen": // gestapelte Fundament-Blöcke
        return `<rect x="556" y="300" width="190" height="26" rx="6" ${o(0.16)}/>` +
               `<rect x="576" y="262" width="150" height="26" rx="6" ${o(0.12)}/>` +
               `<rect x="596" y="224" width="110" height="26" rx="6" ${o(0.09)}/>`;
      case "psychologie": // abstrakter „Geist": konzentrische Kreise
        return `<circle cx="645" cy="215" r="82" ${o(0.10)}/><circle cx="645" cy="215" r="50" ${s(0.18, 9)}/><circle cx="645" cy="215" r="14" ${o(0.20)}/>`;
      case "steuern": // Prozentzeichen
        return `<line x1="585" y1="305" x2="705" y2="165" ${s(0.18, 12)}/><circle cx="592" cy="188" r="22" ${s(0.18, 10)}/><circle cx="698" cy="282" r="22" ${s(0.18, 10)}/>`;
      default: // neutrale Kreise (Marken-Look)
        return `<circle cx="715" cy="70" r="135" ${o(0.13)}/><circle cx="800" cy="330" r="95" ${o(0.08)}/>`;
    }
  }
  eleventyConfig.addFilter("blogCover", function(title, category) {
    const GOLD = "#C8973E";
    const accent = BLOG_CATEGORY_COLORS[String(category || "").trim().toLowerCase()] || GOLD;
    const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const W = 800, H = 450;
    // Titel in max. 4 Zeilen umbrechen (Wortgrenzen)
    const words = String(title || "").split(/\s+/).filter(Boolean);
    const lines = [];
    let cur = "";
    for (const w of words) {
      if ((cur + " " + w).trim().length > 22 && cur) { lines.push(cur); cur = w; }
      else cur = (cur + " " + w).trim();
    }
    if (cur) lines.push(cur);
    const shown = lines.slice(0, 4);
    const lh = 54;
    const startY = Math.round(255 - ((shown.length - 1) * lh) / 2);
    const tspans = shown
      .map((l, i) => `<tspan x="58" y="${startY + i * lh}">${esc(l)}</tspan>`)
      .join("");
    // Kategorie-Badge (Pille) oben links – im Stil der bestehenden Karten
    const catText = esc(String(category || "").toUpperCase());
    const pillW = category ? Math.round(catText.length * 11 + 36) : 0;
    const badge = category
      ? `<rect x="56" y="54" width="${pillW}" height="34" rx="17" fill="${accent}"/>` +
        `<text x="${56 + pillW / 2}" y="77" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="16" letter-spacing="2" font-weight="700" fill="#ffffff">${catText}</text>`
      : "";
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">` +
      `<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">` +
      `<stop offset="0" stop-color="#1A1F36"/><stop offset="1" stop-color="#2A2F46"/></linearGradient></defs>` +
      `<rect width="${W}" height="${H}" fill="url(#bg)"/>` +
      // themenpassendes Kategorie-Motiv (dezenter Hintergrund)
      blogMotif(String(category || "").trim().toLowerCase(), accent) +
      badge +
      `<text font-family="Georgia, serif" font-size="44" font-weight="700" fill="#ffffff">${tspans}</text>` +
      `<rect x="58" y="${H - 86}" width="44" height="4" fill="${GOLD}"/>` +
      `<text x="58" y="${H - 50}" font-family="Inter, Arial, sans-serif" font-size="19" letter-spacing="3" font-weight="700" fill="${GOLD}">JUST OPTIONS</text>` +
      `</svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  });

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
        if (out.errors && out.errors.length) {
          throw new Error(`CSS-Minify-Fehler in ${file}: ${out.errors.join("; ")}`);
        }
        if (out.styles) fs.writeFileSync(p, out.styles);
      }

      // 4) JS-Dateien in-place minifizieren
      for (const file of fs.readdirSync(jsOut)) {
        if (!file.endsWith(".js")) continue;
        const p = path.join(jsOut, file);
        const result = await minifyJs(fs.readFileSync(p, "utf8"));
        if (result.code) fs.writeFileSync(p, result.code);
      }
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
