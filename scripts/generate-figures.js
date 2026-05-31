/**
 * Erzeugt schlichte schwarz-weiße Konzept-Illustrationen je Blogartikel.
 * Ausgabe: src/blog/figures/<slug>.svg  (eingebunden via <figure class="blog-figure">).
 * Aufruf:  npm run figures
 *
 * Designregeln (WICHTIG):
 *  - reine s/w-Linienzeichnung, keine Farbflächen.
 *  - Beschriftungen liegen ausschließlich in definierten freien Zonen
 *    (Ränder/Ecken, unter der x-Achse) → Linien und Schrift überlappen NIE.
 */
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "../src/blog/figures");
fs.mkdirSync(OUT, { recursive: true });

const W = 680, H = 400;
const INK = "#1a1a1a", GRY = "#9aa0a6";
const F = `font-family="Inter, Arial, sans-serif"`;
// Plotbereich
const L = 92, R = 612, T = 54, B = 322;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function open() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" ${F}>` +
         `<rect width="${W}" height="${H}" fill="#ffffff"/>`;
}
// Achsenkreuz mit Pfeilen + Achsentiteln (Titel in den Rändern → kein Overlap)
function axes(xTitle, yTitle) {
  return (
    `<line x1="${L}" y1="${T - 8}" x2="${L}" y2="${B}" stroke="${INK}" stroke-width="1.5"/>` +
    `<line x1="${L}" y1="${B}" x2="${R + 12}" y2="${B}" stroke="${INK}" stroke-width="1.5"/>` +
    `<path d="M${L},${T - 12} l-5,10 h10 z" fill="${INK}"/>` +
    `<path d="M${R + 16},${B} l-10,-5 v10 z" fill="${INK}"/>` +
    `<text x="${(L + R) / 2}" y="${H - 12}" font-size="13" fill="#555" text-anchor="middle">${esc(xTitle)} &#8594;</text>` +
    `<text x="24" y="${(T + B) / 2}" font-size="13" fill="#555" text-anchor="middle" transform="rotate(-90 24 ${(T + B) / 2})">${esc(yTitle)}</text>`
  );
}
const dash = (x1, y1, x2, y2, col = INK) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="1" stroke-dasharray="5 4"/>`;
const curve = (pts) =>
  `<polyline points="${pts.map((p) => p.join(",")).join(" ")}" fill="none" stroke="${INK}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`;
const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="4.5" fill="${INK}"/>`;
const label = (x, y, t, anchor = "start", size = 13) =>
  `<text x="${x}" y="${y}" font-size="${size}" fill="${INK}" text-anchor="${anchor}">${esc(t)}</text>`;
const tickLabel = (x, t) => label(x, B + 20, t, "middle", 12.5); // unter x-Achse → frei
const close = () => `</svg>`;

function write(slug, body) {
  fs.writeFileSync(path.join(OUT, slug + ".svg"), open() + body + close());
}

// ---- Payoff-Hilfsfunktion: zeichnet Knicklinie + sichere Beschriftung ----
// zero = y-Wert der Gewinnschwelle (0-Linie)
function payoffBase(zeroY) {
  return dash(L, zeroY, R, zeroY, GRY) + label(L + 4, zeroY - 6, "0", "start", 12);
}

/* ============================ FIGUREN ============================ */
const figures = {};

// Covered Call: steigend bis Strike, dann gedeckelt
figures["covered-call-strategie"] = () => {
  const zero = 226;
  return axes("Aktienkurs bei Verfall", "Gewinn / Verlust") + payoffBase(zero) +
    dash(404, 132, 404, B) + tickLabel(404, "Strike") +
    curve([[L, 300], [404, 132], [R, 132]]) +
    dot(229, zero) + label(229, zero + 22, "Break-even", "middle", 12.5) +
    label(R, 122, "begrenzter Gewinn", "end") +
    label(150, 316, "Verlustzone", "middle");
};

// Cash Secured Put: gedeckelter Gewinn (Prämie), dann fallend unter Strike
figures["cash-secured-put"] = () => {
  const zero = 150;
  return axes("Aktienkurs bei Verfall", "Gewinn / Verlust") + payoffBase(zero) +
    dash(300, 122, 300, B) + tickLabel(300, "Strike") +
    curve([[L, 300], [300, 122], [R, 122]]) +
    label(R, 112, "max. Gewinn (Prämie)", "end") +
    label(150, 316, "Verlust bei Zuteilung", "middle");
};

// Optionsstrategien (Long Call): Verlust begrenzt (unter 0), dann steigend
figures["optionsstrategien-einsteiger"] = () => {
  const zero = 235, lossY = 272;
  return axes("Aktienkurs bei Verfall", "Gewinn / Verlust") + payoffBase(zero) +
    dash(300, lossY, 300, B) + tickLabel(300, "Strike") +
    curve([[L, lossY], [300, lossY], [R, 92]]) +
    dot(364, zero) + label(364, zero + 24, "Break-even", "middle", 12.5) +
    label(R, 86, "unbegrenztes Potenzial", "end") +
    label(150, 296, "max. Verlust = Prämie", "middle", 12.5);
};

// Credit/Debit Spread (Bull Call Spread): begrenzt unten und oben
figures["credit-spread-vs-debit-spread"] = () => {
  const zero = 226;
  return axes("Aktienkurs bei Verfall", "Gewinn / Verlust") + payoffBase(zero) +
    dash(250, 286, 250, B) + tickLabel(250, "Long-Strike") +
    dash(440, 132, 440, B) + tickLabel(440, "Short-Strike") +
    curve([[L, 286], [250, 286], [440, 132], [R, 132]]) +
    label(R, 122, "max. Gewinn", "end") +
    label(L + 10, 304, "max. Verlust", "start", 12.5);
};

// Iron Condor: Zeltform – flacher Gewinn in der Mitte, begrenzte Verluste außen
figures["iron-condor-strategie"] = () => {
  const zero = 240;
  return axes("Aktienkurs bei Verfall", "Gewinn / Verlust") + payoffBase(zero) +
    curve([[L, 300], [200, 300], [290, 150], [430, 150], [520, 300], [R, 300]]) +
    dash(290, 150, 290, B) + dash(430, 150, 430, B) +
    tickLabel(290, "Put-Spread") + tickLabel(430, "Call-Spread") +
    label(360, 138, "Gewinnzone", "middle") +
    label(L + 8, 290, "Verlust", "start", 12.5) +
    label(R, 290, "Verlust", "end", 12.5);
};
// Hilfen für konzeptionelle Figuren
const dcurve = (pts) =>
  `<polyline points="${pts.map((p) => p.join(",")).join(" ")}" fill="none" stroke="${INK}" stroke-width="2.5" stroke-dasharray="7 5" stroke-linejoin="round" stroke-linecap="round"/>`;
const rectO = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${INK}" stroke-width="2" rx="8"/>`;
function bell(cx, peakY, hw, baseY) {
  const pts = [];
  for (let i = -30; i <= 30; i++) { const k = i / 10; const x = cx + (k / 3) * hw; const g = Math.exp(-0.5 * k * k); pts.push([Math.round(x), Math.round(baseY - (baseY - peakY) * g)]); }
  return pts;
}

// Theta: Zeitwert verfällt nichtlinear (beschleunigt zum Verfall)
figures["theta-zeitwertverfall"] = () =>
  axes("Zeit bis Verfall", "Zeitwert") +
  dash(596, 92, 596, B, GRY) + tickLabel(596, "Verfall") +
  curve([[L, 92], [200, 110], [300, 138], [390, 184], [470, 244], [540, 300], [596, B]]) +
  label(360, 120, "beschleunigter Verfall", "middle");

// Optionsgriechen: Delta als S-Kurve (Call, 0 → 1)
figures["optionsgriechen-delta-gamma-theta-vega"] = () =>
  axes("Aktienkurs", "Delta des Calls") +
  label(L + 8, T + 6, "1,0", "start", 12) + label(L + 8, B - 4, "0", "start", 12) +
  dash(352, T - 8, 352, B, GRY) + tickLabel(352, "Strike (ATM)") +
  curve([[L, 308], [210, 300], [285, 276], [330, 210], [375, 130], [455, 102], [R, 94]]) +
  label(R, 86, "tief im Geld: Δ → 1", "end", 12.5) +
  label(L + 12, 286, "weit aus dem Geld: Δ → 0", "start", 12.5);

// Put-Call-Parität: Äquivalenz zweier Portfolios
figures["put-call-parity"] = () => {
  const boxText = (cx, top, l1, l2) =>
    rectO(cx - 115, top, 230, 150) +
    `<line x1="${cx - 115}" y1="${top + 75}" x2="${cx + 115}" y2="${top + 75}" stroke="${INK}" stroke-width="1" stroke-dasharray="4 4"/>` +
    label(cx, top + 46, l1, "middle", 15) + label(cx, top + 121, l2, "middle", 14);
  return boxText(185, 120, "Call (C)", "Barwert von K") +
    label(340, 205, "=", "middle", 46) +
    boxText(495, 120, "Put (P)", "Aktie (S)") +
    label(185, 300, "Portfolio A", "middle", 13) +
    label(495, 300, "Portfolio B", "middle", 13);
};

// Volatilität verstehen: zwei Glockenkurven (niedrige vs. hohe Vol)
figures["volatilitaet-verstehen"] = () =>
  axes("möglicher Kurs bei Verfall", "Wahrscheinlichkeit") +
  curve(bell(352, 96, 95, B)) +
  dcurve(bell(352, 210, 215, B)) +
  label(352, 86, "geringe Volatilität", "middle", 12.5) +
  label(R, 250, "hohe Volatilität", "end", 12.5);

// Volatilität & Renditen: Vol-Zyklus (Ruhe → Spitze → Beruhigung)
figures["volatilitaet-renditen"] = () =>
  axes("Zeit", "Volatilität") +
  curve([[L, 286], [210, 284], [262, 270], [300, 110], [356, 168], [430, 250], [520, 282], [R, 284]]) +
  label(300, 98, "Volatilitätsspitze", "middle") +
  label(160, 272, "ruhige Phase", "middle", 12.5) +
  label(560, 268, "Beruhigung", "middle", 12.5);

// VIX: invers zum Markt (Markt = durchgezogen, VIX = gestrichelt)
figures["vix-angstindex-erklaert"] = () =>
  axes("Zeit", "Niveau") +
  curve([[L, 150], [230, 158], [330, 256], [430, 188], [R, 146]]) +
  dcurve([[L, 296], [230, 288], [330, 150], [430, 244], [R, 298]]) +
  label(R, 136, "Markt (S&P 500)", "end", 12.5) +
  label(330, 138, "VIX", "middle", 13);

// IV Rank/Perzentil: 52-Wochen-Spanne mit aktueller IV
figures["iv-rank-perzentil"] = () => {
  const y = 200, x0 = 130, x1 = 560, cur = 430;
  return `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="${INK}" stroke-width="2"/>` +
    `<line x1="${x0}" y1="${y - 16}" x2="${x0}" y2="${y + 16}" stroke="${INK}" stroke-width="2"/>` +
    `<line x1="${x1}" y1="${y - 16}" x2="${x1}" y2="${y + 16}" stroke="${INK}" stroke-width="2"/>` +
    `<line x1="${x0}" y1="${y}" x2="${cur}" y2="${y}" stroke="${INK}" stroke-width="8"/>` +
    `<path d="M${cur},${y - 14} l-9,-16 h18 z" fill="${INK}"/>` +
    label(x0, y + 38, "52-Wochen-Tief", "middle", 12.5) +
    label(x1, y + 38, "52-Wochen-Hoch", "middle", 12.5) +
    label(cur, y - 36, "aktuelle IV", "middle", 13) +
    label((x0 + cur) / 2, y - 18, "IV Rank", "middle", 12.5);
};

// Marginhandel: Hebel – Kapital vs. kontrollierte Position
figures["marginhandel-verstehen"] = () =>
  `<rect x="150" y="138" width="120" height="44" fill="none" stroke="${INK}" stroke-width="2"/>` +
  label(286, 165, "eingesetztes Kapital / Margin", "start", 13) +
  `<rect x="150" y="228" width="404" height="44" fill="none" stroke="${INK}" stroke-width="2"/>` +
  `<line x1="270" y1="228" x2="270" y2="272" stroke="${GRY}" stroke-width="1" stroke-dasharray="4 4"/>` +
  label(150, 118, "Hebelwirkung", "start", 14) +
  label(354, 300, "kontrollierte Position (deutlich größer)", "middle", 13);

// Risikomanagement: Position Sizing (1–2 % je Trade)
figures["risikomanagement-optionshandel"] = () =>
  rectO(140, 130, 410, 120) +
  `<rect x="142" y="132" width="20" height="116" fill="${INK}"/>` +
  label(345, 196, "Gesamtkapital", "middle", 14) +
  `<line x1="152" y1="250" x2="152" y2="290" stroke="${INK}" stroke-width="1"/>` +
  label(160, 308, "1–2 % Risiko je Trade", "start", 13);

// Psychologie: Emotionszyklus (Euphorie → Kapitulation)
figures["psychologie-optionshandel"] = () =>
  axes("Zeit / Kursverlauf", "Emotion") +
  curve([[L, 240], [175, 196], [275, 116], [370, 178], [465, 292], [560, 250]]) +
  label(275, 104, "Euphorie", "middle") +
  label(465, 312, "Kapitulation", "middle", 12.5);

// Anfängerfehler: ungedeckter Short Call – unbegrenztes Verlustrisiko
figures["anfaengerfehler-optionshandel"] = () => {
  const zero = 160;
  return axes("Aktienkurs bei Verfall", "Gewinn / Verlust") + payoffBase(zero) +
    dash(330, zero, 330, B, GRY) + tickLabel(330, "Strike") +
    curve([[L, zero], [330, zero], [R, 312]]) +
    label(190, zero - 12, "Prämie", "middle", 12.5) +
    label(R, 150, "unbegrenztes Verlustrisiko", "end");
};

// Assignment & Ausübung: Ablauf Käufer -> Stillhalter
figures["assignment-und-ausuebung"] = () =>
  label(340, 96, "Option ist im Geld (ITM)", "middle", 14) +
  rectO(64, 168, 236, 96) +
  label(182, 206, "Käufer übt aus", "middle", 15) +
  label(182, 234, "(Exercise)", "middle", 12.5) +
  `<line x1="312" y1="216" x2="366" y2="216" stroke="${INK}" stroke-width="2.5"/>` +
  `<path d="M380,216 l-14,-7 v14 z" fill="${INK}"/>` +
  label(340, 150, "je 100 Aktien pro Kontrakt", "middle", 12) +
  rectO(380, 168, 236, 96) +
  label(498, 206, "Stillhalter erhält", "middle", 15) +
  label(498, 234, "Zuteilung (Assignment)", "middle", 12.5);

for (const [slug, fn] of Object.entries(figures)) write(slug, fn());
console.log("Figuren erzeugt:", Object.keys(figures).length);
