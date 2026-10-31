/**
 * Regressions-Check für Template-Refactorings.
 * Vergleicht zwei Build-Ausgaben (z. B. Baseline-Kopie und aktuelles _site) inhaltlich:
 *   1. Routen: jede HTML-/XML-Datei muss in beiden Bäumen existieren.
 *   2. JSON-LD: Anzahl und Inhalt aller Blöcke (geparst, Schlüssel sortiert).
 *   3. Sichtbarer Text: Tags → Leerzeichen, Entities dekodiert, Whitespace kollabiert.
 *   4. Attribute: sortierte Werte von href/src/srcset/action/content/alt.
 * Markup- und Whitespace-Unterschiede werden bewusst ignoriert.
 *
 * Aufruf:  npm run diff-site -- <vorher> [nachher=_site]
 * Exit-Code 1 bei inhaltlichen Abweichungen.
 */
const fs = require("fs");
const path = require("path");

const [before, after = "_site"] = process.argv.slice(2);
if (!before) {
  console.error("Aufruf: node scripts/diff-site-text.js <vorher> [nachher=_site]");
  process.exit(2);
}

function walk(dir, base = dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, base, acc);
    else if (/\.(html|xml)$/.test(e.name)) acc.push(path.relative(base, full).split(path.sep).join("/"));
  }
  return acc;
}

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", rarr: "→", larr: "←", middot: "·", ndash: "–", mdash: "—", hellip: "…", euro: "€", bdquo: "„", ldquo: "“", rdquo: "”", copy: "©" };
function decode(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, n) => (n.toLowerCase() in ENTITIES ? ENTITIES[n.toLowerCase()] : m));
}

function sortKeys(v) {
  if (Array.isArray(v)) return v.map(sortKeys);
  if (v && typeof v === "object") return Object.fromEntries(Object.keys(v).sort().map((k) => [k, sortKeys(v[k])]));
  return v;
}

function extract(html) {
  // Sitemap: Reihenfolge der <url>-Einträge hängt vom Dateidatum ab und ist nicht inhaltlich.
  if (/<urlset[\s>]/.test(html)) {
    const urls = [...html.matchAll(/<url>[\s\S]*?<\/url>/g)].map((m) => m[0].replace(/\s+/g, " ")).sort();
    return { jsonld: [], attrs: [], text: urls.join(" ") };
  }
  const jsonld = [];
  for (const m of html.matchAll(/<script[^>]*type="?application\/ld\+json"?[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      jsonld.push(JSON.stringify(sortKeys(JSON.parse(m[1]))));
    } catch (e) {
      jsonld.push("PARSE-FEHLER: " + e.message);
    }
  }
  const attrs = [];
  for (const m of html.matchAll(/\s(href|src|srcset|action|content|alt)=("([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    attrs.push(`${m[1]}=${decode(m[3] ?? m[4] ?? m[5] ?? "")}`);
  }
  attrs.sort();
  const text = decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(/<[^>]+>/g, " ")
  )
    .replace(/\s+/g, " ")
    .trim();
  return { jsonld, attrs, text };
}

// Minimaler Wort-Diff: erste abweichende Stelle mit Kontext ausgeben.
function firstDiff(a, b) {
  const wa = a.split(" "), wb = b.split(" ");
  let i = 0;
  while (i < wa.length && i < wb.length && wa[i] === wb[i]) i++;
  let ja = wa.length - 1, jb = wb.length - 1;
  while (ja >= i && jb >= i && wa[ja] === wb[jb]) { ja--; jb--; }
  const ctx = wa.slice(Math.max(0, i - 6), i).join(" ");
  return `…${ctx}\n      − ${wa.slice(i, ja + 1).join(" ").slice(0, 400)}\n      + ${wb.slice(i, jb + 1).join(" ").slice(0, 400)}`;
}

const fa = new Set(walk(before)), fb = new Set(walk(after));
let problems = 0;
const report = (msg) => { console.error(msg); problems++; };

for (const f of fa) if (!fb.has(f)) report(`✗ Route fehlt: ${f}`);
for (const f of fb) if (!fa.has(f)) report(`✗ Neue Route: ${f}`);

for (const f of [...fa].filter((x) => fb.has(x)).sort()) {
  const A = extract(fs.readFileSync(path.join(before, f), "utf8"));
  const B = extract(fs.readFileSync(path.join(after, f), "utf8"));
  if (A.text !== B.text) report(`✗ ${f}: sichtbarer Text weicht ab\n      ${firstDiff(A.text, B.text)}`);
  if (A.jsonld.join("\n") !== B.jsonld.join("\n")) {
    report(`✗ ${f}: JSON-LD weicht ab (${A.jsonld.length} → ${B.jsonld.length} Blöcke)`);
    for (let i = 0; i < Math.max(A.jsonld.length, B.jsonld.length); i++) {
      if (A.jsonld[i] !== B.jsonld[i]) console.error(`      − ${(A.jsonld[i] || "").slice(0, 300)}\n      + ${(B.jsonld[i] || "").slice(0, 300)}`);
    }
  }
  if (A.attrs.join("\n") !== B.attrs.join("\n")) {
    const sa = new Set(A.attrs), sb = new Set(B.attrs);
    const minus = A.attrs.filter((x) => !sb.has(x)), plus = B.attrs.filter((x) => !sa.has(x));
    report(`✗ ${f}: Attribute weichen ab\n      − ${minus.slice(0, 5).join(" | ")}\n      + ${plus.slice(0, 5).join(" | ")}`);
  }
}

console.log(`${fa.size} Dateien verglichen.`);
if (problems) {
  console.error(`\n❌ ${problems} inhaltliche Abweichung(en).`);
  process.exit(1);
}
console.log("✅ Keine inhaltlichen Abweichungen.");
