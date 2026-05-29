/**
 * Erzeugt das Open-Graph-Sharing-Bild (1200x630) aus dem Buchcover + Branding.
 * Reproduzierbar – bei Cover-/Text-Änderung einfach erneut ausführen:
 *   node scripts/generate-og-image.js
 * Ausgabe: src/assets/images/og-default.jpg
 */
const path = require("path");
const sharp = require("sharp");

const W = 1200;
const H = 630;
const NAVY = "#1A1F36";
const NAVY_LIGHT = "#2A2F46";
const GOLD = "#C8973E";
const WHITE = "#ffffff";
const GRAY = "#C9CCD6";

const COVER = path.join(__dirname, "../src/assets/images/buchcover.png");
const OUT = path.join(__dirname, "../src/assets/images/og-default.jpg");

// Cover-Maße im Bild
const coverH = 500;
const coverW = Math.round((1500 / 2250) * coverH); // 333
const coverTop = Math.round((H - coverH) / 2); // 65
const coverLeft = W - 70 - coverW;

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// 5-Punkt-Stern als Polygon-Punkte (font-unabhängig)
function star(cx, cy, outer, inner) {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return `<polygon points="${pts.join(" ")}" fill="${GOLD}"/>`;
}

let stars = "";
for (let i = 0; i < 5; i++) stars += star(80 + i * 40, 468, 15, 6.5);

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${NAVY}"/>
      <stop offset="1" stop-color="${NAVY_LIGHT}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <!-- linker Gold-Akzentbalken -->
  <rect x="0" y="0" width="10" height="${H}" fill="${GOLD}"/>
  <!-- Cover-Rahmen (Gold) -->
  <rect x="${coverLeft - 6}" y="${coverTop - 6}" width="${coverW + 12}" height="${coverH + 12}" fill="${GOLD}" rx="4"/>

  <text x="70" y="120" font-family="Calibri, 'Segoe UI', Arial, sans-serif" font-size="24" letter-spacing="4" font-weight="700" fill="${GOLD}">JUST OPTIONS</text>

  <text x="68" y="210" font-family="Georgia, 'Times New Roman', serif" font-size="62" font-weight="700" fill="${WHITE}">Optionen</text>
  <text x="68" y="280" font-family="Georgia, 'Times New Roman', serif" font-size="62" font-weight="700" fill="${WHITE}">strategisch nutzen</text>

  <rect x="70" y="312" width="90" height="5" fill="${GOLD}"/>

  <text x="70" y="362" font-family="Calibri, 'Segoe UI', Arial, sans-serif" font-size="25" fill="${GRAY}">Clever investieren, Zusatzerträge generieren,</text>
  <text x="70" y="397" font-family="Calibri, 'Segoe UI', Arial, sans-serif" font-size="25" fill="${GRAY}">Risiken absichern.</text>

  ${stars}
  <text x="290" y="477" font-family="Calibri, 'Segoe UI', Arial, sans-serif" font-size="24" font-weight="700" fill="${WHITE}">4,9 / 5 &#183; 17 Rezensionen</text>

  <text x="70" y="545" font-family="Georgia, 'Times New Roman', serif" font-size="28" fill="${WHITE}">von Markus Lehleiter &#183; <tspan fill="${GOLD}">CFA, FRM</tspan></text>
</svg>`;

(async () => {
  const cover = await sharp(COVER).resize(coverW, coverH, { fit: "fill" }).toBuffer();
  await sharp(Buffer.from(svg))
    .composite([{ input: cover, left: coverLeft, top: coverTop }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(OUT);
  console.log("OG-Bild erzeugt:", OUT);
})().catch((e) => { console.error(e); process.exit(1); });
