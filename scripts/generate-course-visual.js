/**
 * Erzeugt ein "Cover"-Visual für den KI-Kurs (1000x1500, 2:3 wie das Buchcover),
 * damit Buch und Kurs auf der Startseite gleichwertig wirken.
 *   node scripts/generate-course-visual.js
 * Ausgabe: src/assets/images/kurs-cover.png
 */
const path = require("path");
const sharp = require("sharp");

const W = 1000, H = 1500;
const NAVY = "#1a2744", NAVY_DEEP = "#131c33", GOLD = "#c9a84c", TEAL = "#34b3a3", WHITE = "#ffffff";
const OUT = path.join(__dirname, "../src/assets/images/kurs-cover.png");

// Neuronales-Netz-Motiv (font-unabhängig): Knoten + Verbindungen
const nodes = [
  [500, 760], [350, 860], [650, 860], [300, 1010], [500, 1000],
  [700, 1010], [410, 1130], [590, 1130], [500, 920],
];
const edges = [[0,1],[0,2],[0,8],[8,3],[8,4],[8,5],[1,3],[2,5],[4,6],[4,7],[3,6],[5,7],[1,4],[2,4]];
let lines = "";
for (const [a,b] of edges) {
  lines += `<line x1="${nodes[a][0]}" y1="${nodes[a][1]}" x2="${nodes[b][0]}" y2="${nodes[b][1]}" stroke="${TEAL}" stroke-width="2.5" stroke-opacity="0.55"/>`;
}
let dots = "";
nodes.forEach((n, i) => {
  const r = i === 0 ? 16 : (i === 8 ? 13 : 10);
  const fill = i === 0 ? GOLD : TEAL;
  dots += `<circle cx="${n[0]}" cy="${n[1]}" r="${r}" fill="${fill}"/>`;
  if (i === 0) dots += `<circle cx="${n[0]}" cy="${n[1]}" r="30" fill="none" stroke="${GOLD}" stroke-width="2" stroke-opacity="0.4"/>`;
});

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.6" y2="1">
      <stop offset="0" stop-color="${NAVY}"/>
      <stop offset="1" stop-color="${NAVY_DEEP}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="28" y="28" width="${W-56}" height="${H-56}" rx="20" fill="none" stroke="${GOLD}" stroke-width="3" stroke-opacity="0.5"/>

  <text x="500" y="170" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" font-weight="700" letter-spacing="8" fill="${GOLD}">JUST OPTIONS</text>

  <text x="500" y="430" text-anchor="middle" font-family="Arial, sans-serif" font-size="170" font-weight="900" letter-spacing="2" fill="${GOLD}">KI-KURS</text>

  <text x="500" y="540" text-anchor="middle" font-family="Arial, sans-serif" font-size="46" font-weight="700" fill="${WHITE}">Smartere Finanzentscheidungen</text>
  <text x="500" y="600" text-anchor="middle" font-family="Arial, sans-serif" font-size="46" font-weight="700" fill="${WHITE}">mit KI</text>

  ${lines}
  ${dots}

  <rect x="290" y="1250" width="420" height="78" rx="39" fill="${GOLD}"/>
  <text x="500" y="1301" text-anchor="middle" font-family="Arial, sans-serif" font-size="38" font-weight="700" fill="${NAVY}">Lifetime-Zugang</text>

  <text x="500" y="1410" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="400" fill="#94a3b8">Portfolioanalyse · Szenarien · Research</text>
</svg>`;

sharp(Buffer.from(svg)).png().toFile(OUT)
  .then(() => console.log("Kurs-Visual erzeugt:", OUT))
  .catch((e) => { console.error(e); process.exit(1); });
