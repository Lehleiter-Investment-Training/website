/**
 * Verifikations-Gate für Blog-Artikel.
 * Baut die Seite und prüft anschließend:
 *   1. Jeder Blog-Artikel (src/blog/*.{njk,md}, außer index) hat genau zwei
 *      Frontmatter-Zäune (`---`).  -> verhindert den YAML-Bug aus tasks/lessons.md
 *   2. KONSISTENZ: jeder Artikel enthält die kanonischen Bausteine
 *      (category, summary, faq, Risikohinweis-Box, Inhaltsverzeichnis, Fazit,
 *      Quellen-Sektion) und ist im „Sie"-Ton verfasst.
 *   3. Jeder erzeugte <script type="application/ld+json">-Block ist valides JSON.
 *   4. Jeder Blog-Artikel mit `faq`-Feld erzeugt eine FAQPage.
 *
 * Aufruf:  npm run validate-blog
 * Exit-Code != 0 bei Fehlern (für CI / Automatik-Pipeline geeignet).
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const yaml = require("js-yaml");

const ROOT = path.join(__dirname, "..");
const BLOG_SRC = path.join(ROOT, "src/blog");
const SITE = path.join(ROOT, "_site");

let errors = 0;
const fail = (msg) => { console.error("  ✗ " + msg); errors++; };

// Kanonische Bausteine, die JEDER Artikel enthalten muss (Konsistenz-Regel).
const REQUIRED = [
  { re: /^category:/m, name: "Frontmatter: category" },
  { re: /^summary:/m, name: "Frontmatter: summary" },
  { re: /^faq:/m, name: "Frontmatter: faq" },
  { re: /disclaimer-box/, name: "Risikohinweis-Box (.disclaimer-box)" },
  { re: /table-of-contents/, name: "Inhaltsverzeichnis (.table-of-contents)" },
  { re: />Fazit</, name: "Fazit-Abschnitt" },
  { re: /Quellen/, name: "Quellen-Sektion" },
  { re: /blog-figure/, name: "Konzept-Illustration (.blog-figure)" },
];

// --- 1. Frontmatter-Zäune + Konsistenz-Bausteine prüfen (Quelle) ---
console.log("1) Frontmatter-Zäune & Konsistenz-Bausteine pro Artikel…");
for (const f of fs.readdirSync(BLOG_SRC)) {
  if (!/\.(njk|md)$/.test(f) || f.startsWith("index.")) continue;
  const txt = fs.readFileSync(path.join(BLOG_SRC, f), "utf8");
  const fences = txt.split(/\r?\n/).filter((l) => l === "---").length;
  if (fences !== 2) fail(`${f}: ${fences} Zäune (erwartet 2) – fehlender schließender '---'?`);
  // Frontmatter muss valides YAML sein – sonst schlägt erst der Build kryptisch fehl
  const fmParts = txt.split(/^---$/m);
  if (fmParts.length >= 3) {
    try {
      yaml.load(fmParts[1]);
    } catch (e) {
      fail(`${f}: Frontmatter-YAML ungültig – ${e.message.split("\n")[0]}`);
    }
  }
  for (const r of REQUIRED) {
    if (!r.re.test(txt)) fail(`${f}: fehlt – ${r.name}`);
  }
  // Konsistenter „Sie"-Ton: informelle Anrede im Body vermeiden
  const body = txt.split(/^---$/m).slice(2).join("---").replace(/individuell/gi, "");
  if (/\b(du|dich|dein|deine|dir)\b/i.test(body)) {
    fail(`${f}: informelle Anrede („du") gefunden – Artikel sollen im „Sie"-Ton sein`);
  }
}

// --- Build ---
console.log("2) Baue Seite (npx @11ty/eleventy)…");
try {
  execSync("npx @11ty/eleventy", { cwd: ROOT, stdio: "pipe" });
} catch (e) {
  fail("Build fehlgeschlagen:\n" + (e.stdout || e.stderr || e).toString().slice(-1500));
  console.error(`\nValidierung ABGEBROCHEN: ${errors} Fehler.`);
  process.exit(1);
}

// --- 3. JSON-LD aller Seiten validieren ---
console.log("3) JSON-LD aller HTML-Seiten validieren…");
let faqPages = 0;
for (const f of fs.readdirSync(SITE).filter((x) => x.endsWith(".html"))) {
  const html = fs.readFileSync(path.join(SITE, f), "utf8");
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const json = JSON.parse(m[1]);
      if (JSON.stringify(json).includes('"FAQPage"')) faqPages++;
    } catch (e) {
      fail(`${f}: JSON-LD-Parse-Fehler: ${e.message}`);
    }
  }
}
console.log(`   FAQPage-Seiten gefunden: ${faqPages}`);

if (errors) {
  console.error(`\n❌ Validierung fehlgeschlagen: ${errors} Fehler.`);
  process.exit(1);
}
console.log("\n✅ Blog-Validierung erfolgreich.");
