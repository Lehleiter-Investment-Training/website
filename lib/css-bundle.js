// Build-Helfer: globales CSS-Bundle inkl. lokal erzeugtem Font-Awesome-Icon-CSS
// sowie Minifizierung der Seiten-CSS/-JS nach dem Build.
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const CleanCSS = require("clean-css");
const { minify: minifyJs } = require("terser");

const ROOT = path.join(__dirname, "..");

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
const FA_PKG = path.join(ROOT, "node_modules/@fortawesome/fontawesome-free");
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
  const files = walkFiles(path.join(ROOT, "src"), [".njk", ".html", ".js"], []);
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
  const cssDir = path.join(ROOT, "src/assets/css");
  const concatenated = GLOBAL_CSS
    .map((f) => fs.readFileSync(path.join(cssDir, f), "utf8"))
    .join("\n") + "\n" + buildIconCss();
  const minified = new CleanCSS({ level: 2 }).minify(concatenated).styles;
  const hash = crypto.createHash("md5").update(minified).digest("hex").slice(0, 8);
  return { content: minified, fileName: `app.${hash}.css` };
}

// Nach dem Build: Bundle schreiben, globale Einzeldateien entfernen,
// übrige CSS- und JS-Dateien minifizieren.
async function postBuildMinify(outputDir, cssBundle) {
  const cssOut = path.join(outputDir, "assets/css");
  const jsOut = path.join(outputDir, "assets/js");

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
}

module.exports = { GLOBAL_CSS, buildCssBundle, postBuildMinify };
