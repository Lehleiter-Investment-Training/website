/**
 * Erzeugt präzise, schwarz-weiße Konzept-Illustrationen je Blogartikel (Buchqualität).
 * Ausgabe: src/blog/figures/<slug>.svg   ·   Aufruf: npm run figures
 *
 * Designprinzipien:
 *  - Echtes Koordinatensystem (Datenwert -> Pixel) für exakte Diagramme.
 *  - Payoffs aus den realen Beispielzahlen des Artikels berechnet (mathematisch korrekt).
 *  - Numerische Achsen-Ticks IMMER außerhalb der Zeichenfläche -> Linien & Schrift
 *    überlappen nie. In-Plot-Text nur in nachweislich freien Zonen.
 *  - Glatte Kurven (Catmull-Rom-Bézier) für konzeptionelle Grafiken.
 */
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "../src/blog/figures");
fs.mkdirSync(OUT, { recursive: true });

const W = 720, H = 440;
const INK = "#1a1a1a", GRY = "#9aa0a6", LGRY = "#cdd2d8";
const FF = `font-family="Inter, 'Helvetica Neue', Arial, sans-serif"`;
const L = 92, R = 668, T = 44, B = 360;          // Plotbereich

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const open = () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" ${FF}><rect width="${W}" height="${H}" fill="#ffffff"/>`;
const close = () => `</svg>`;
const txt = (x, y, t, anchor = "start", size = 13, fill = INK, weight = 400) =>
  `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-weight="${weight}" text-anchor="${anchor}">${esc(t)}</text>`;
const line = (x1, y1, x2, y2, w = 1.4, col = INK, dash = "") =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ""}/>`;
const poly = (pts, w = 2.6, col = INK, dash = "") =>
  `<polyline points="${pts.map((p) => p.map((n) => (+n).toFixed(1)).join(",")).join(" ")}" fill="none" stroke="${col}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ""} stroke-linejoin="round" stroke-linecap="round"/>`;
const odot = (x, y, r = 4.2) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#ffffff" stroke="${INK}" stroke-width="2"/>`;
const rectO = (x, y, w, h, sw = 1.8) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${INK}" stroke-width="${sw}" rx="9"/>`;

// Catmull-Rom -> glatter Bézier-Pfad
function smooth(pts) {
  if (pts.length < 3) return `<path d="M${pts.map((p) => p.join(",")).join(" L")}" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round"/>`;
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || pts[i + 1];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return `<path d="${d}" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>`;
}

// Achsen/Koordinatensystem. Gibt Skalenfunktionen + SVG zurück.
function plot({ xr, yr, xticks = [], yticks = [], xTitle, yTitle, zero = true }) {
  const sx = (v) => L + (v - xr[0]) / (xr[1] - xr[0]) * (R - L);
  const sy = (v) => B - (v - yr[0]) / (yr[1] - yr[0]) * (B - T);
  let s = "";
  if (zero && yr[0] < 0 && yr[1] > 0) s += line(L, sy(0), R + 4, sy(0), 1, LGRY); // Nulllinie
  // Achsen + Pfeile
  s += line(L, T - 10, L, B, 1.4) + line(L, B, R + 14, B, 1.4);
  s += `<path d="M${L},${T - 14} l-4.5,9 h9 z" fill="${INK}"/>` + `<path d="M${R + 18},${B} l-9,-4.5 v9 z" fill="${INK}"/>`;
  for (const t of xticks) { const x = sx(t.v); s += line(x, B, x, B + 6, 1.4) + txt(x, B + 22, t.label, "middle", 12, "#333"); }
  for (const t of yticks) { const y = sy(t.v); s += line(L - 6, y, L, y, 1.4) + txt(L - 10, y + 4, t.label, "end", 12, "#333"); }
  if (xTitle) s += txt((L + R) / 2, H - 12, xTitle + " →", "middle", 12.5, "#555");
  if (yTitle) s += txt(22, (T + B) / 2, yTitle, "middle", 12.5, "#555") .replace("<text ", `<text transform="rotate(-90 22 ${(T + B) / 2})" `);
  return { sx, sy, s };
}
function write(slug, body) { fs.writeFileSync(path.join(OUT, slug + ".svg"), open() + body + close()); }
const figures = {};

/* ===== PAYOFF-DIAGRAMME (aus den Artikel-Beispielzahlen berechnet) ===== */

// Covered Call: Kauf 50, Strike 55, Prämie 1,50  -> P/L = min(S,55) - 50 + 1,5
figures["covered-call-strategie"] = () => {
  const { sx, sy, s } = plot({
    xr: [42, 64], yr: [-8, 9], xTitle: "Aktienkurs bei Verfall (€)", yTitle: "Gewinn / Verlust (€)",
    xticks: [{ v: 48.5, label: "48,50" }, { v: 55, label: "55" }],
    yticks: [{ v: -6, label: "−6" }, { v: 0, label: "0" }, { v: 6.5, label: "+6,50" }],
  });
  return s +
    line(sx(55), sy(6.5), sx(55), B, 1, INK, "5 4") +
    poly([[sx(42), sy(-6.5)], [sx(55), sy(6.5)], [sx(64), sy(6.5)]]) +
    odot(sx(48.5), sy(0)) +
    txt(sx(60), sy(8), "begrenzter Gewinn", "middle", 12.5) +
    txt(sx(55), T - 2, "Strike", "middle", 12, "#555");
};

// Cash Secured Put: Strike 95, Prämie 2  -> S>=95: +2 ; S<95: S-93
figures["cash-secured-put"] = () => {
  const { sx, sy, s } = plot({
    xr: [80, 106], yr: [-15, 5], xTitle: "Aktienkurs bei Verfall (€)", yTitle: "Gewinn / Verlust (€)",
    xticks: [{ v: 93, label: "93" }, { v: 95, label: "95" }],
    yticks: [{ v: -12, label: "−12" }, { v: 0, label: "0" }, { v: 2, label: "+2" }],
  });
  return s +
    line(sx(95), sy(2), sx(95), B, 1, INK, "5 4") +
    poly([[sx(80), sy(-13)], [sx(95), sy(2)], [sx(106), sy(2)]]) +
    odot(sx(93), sy(0)) +
    txt(sx(101), sy(3.6), "max. Gewinn (Prämie)", "middle", 12.5) +
    txt(sx(95), T - 2, "Strike", "middle", 12, "#555") +
    txt(sx(86), sy(-12), "Verlust bei Zuteilung", "middle", 12.5);
};

// Long Call: Strike 100, Prämie 5  -> max(0,S-100) - 5
figures["optionsstrategien-einsteiger"] = () => {
  const { sx, sy, s } = plot({
    xr: [90, 120], yr: [-9, 14], xTitle: "Aktienkurs bei Verfall (€)", yTitle: "Gewinn / Verlust (€)",
    xticks: [{ v: 100, label: "100" }, { v: 105, label: "105" }],
    yticks: [{ v: -5, label: "−5" }, { v: 0, label: "0" }, { v: 10, label: "+10" }],
  });
  return s +
    line(sx(100), sy(-5), sx(100), B, 1, INK, "5 4") +
    poly([[sx(90), sy(-5)], [sx(100), sy(-5)], [sx(119), sy(14)]]) +
    odot(sx(105), sy(0)) +
    txt(sx(110), sy(12.5), "unbegrenztes Potenzial", "middle", 12.5) +
    txt(sx(100), T - 2, "Strike", "middle", 12, "#555") +
    txt(sx(96.5), sy(-6.8), "max. Verlust = Prämie", "middle", 12.5);
};

// Bull Call Spread: Kauf 100 @4, Verkauf 110 @1,50 ; Debit 2,50
figures["credit-spread-vs-debit-spread"] = () => {
  const { sx, sy, s } = plot({
    xr: [92, 118], yr: [-5, 9], xTitle: "Aktienkurs bei Verfall (€)", yTitle: "Gewinn / Verlust (€)",
    xticks: [{ v: 100, label: "100" }, { v: 102.5, label: "102,50" }, { v: 110, label: "110" }],
    yticks: [{ v: -2.5, label: "−2,50" }, { v: 0, label: "0" }, { v: 7.5, label: "+7,50" }],
  });
  return s +
    line(sx(100), sy(-2.5), sx(100), B, 1, INK, "5 4") +
    line(sx(110), sy(7.5), sx(110), B, 1, INK, "5 4") +
    poly([[sx(92), sy(-2.5)], [sx(100), sy(-2.5)], [sx(110), sy(7.5)], [sx(118), sy(7.5)]]) +
    odot(sx(102.5), sy(0)) +
    txt(sx(114), sy(8.4), "max. Gewinn", "middle", 12.5) +
    txt(sx(96), sy(-3.6), "max. Verlust", "middle", 12.5);
};

// Iron Condor: Put-Spread 90/85, Call-Spread 110/115, Net Credit 1,50
figures["iron-condor-strategie"] = () => {
  const { sx, sy, s } = plot({
    xr: [82, 118], yr: [-4.5, 3], xTitle: "Aktienkurs bei Verfall (€)", yTitle: "Gewinn / Verlust (€)",
    xticks: [{ v: 90, label: "90" }, { v: 110, label: "110" }],
    yticks: [{ v: -3.5, label: "−3,50" }, { v: 0, label: "0" }, { v: 1.5, label: "+1,50" }],
  });
  return s +
    line(sx(90), sy(1.5), sx(90), B, 1, INK, "5 4") +
    line(sx(110), sy(1.5), sx(110), B, 1, INK, "5 4") +
    poly([[sx(82), sy(-3.5)], [sx(85), sy(-3.5)], [sx(90), sy(1.5)], [sx(110), sy(1.5)], [sx(115), sy(-3.5)], [sx(118), sy(-3.5)]]) +
    odot(sx(88.5), sy(0)) + odot(sx(111.5), sy(0)) +
    txt(sx(100), sy(2.4), "Gewinnzone", "middle", 12.5);
};

// Ungedeckter Short Call: Strike 100, Prämie 3  -> 3 - max(0,S-100)
figures["anfaengerfehler-optionshandel"] = () => {
  const { sx, sy, s } = plot({
    xr: [90, 130], yr: [-22, 7], xTitle: "Aktienkurs bei Verfall (€)", yTitle: "Gewinn / Verlust (€)",
    xticks: [{ v: 100, label: "100" }, { v: 103, label: "103" }],
    yticks: [{ v: 3, label: "+3" }, { v: 0, label: "0" }, { v: -18, label: "−18" }],
  });
  return s +
    line(sx(100), sy(3), sx(100), B, 1, INK, "5 4") +
    poly([[sx(90), sy(3)], [sx(100), sy(3)], [sx(125), sy(-22)]]) +
    `<path d="M${sx(125)},${sy(-22)} l-2,-11 l11,5 z" fill="${INK}"/>` +
    odot(sx(103), sy(0)) +
    txt(sx(95), sy(5), "Prämie", "middle", 12.5) +
    txt(sx(118), sy(-4), "unbegrenztes Verlustrisiko", "middle", 12.5);
};

// Protective Put: Aktie ab 100, Put-Strike 95, Prämie 3 -> max(S,95) - 100 - 3
figures["protective-put"] = () => {
  const { sx, sy, s } = plot({
    xr: [80, 114], yr: [-12, 10], xTitle: "Aktienkurs bei Verfall (€)", yTitle: "Gewinn / Verlust (€)",
    xticks: [{ v: 95, label: "95" }, { v: 100, label: "100" }, { v: 103, label: "103" }],
    yticks: [{ v: -8, label: "−8" }, { v: 0, label: "0" }, { v: 8, label: "+8" }],
  });
  return s +
    line(sx(95), sy(-8), sx(95), B, 1, INK, "5 4") +
    poly([[sx(80), sy(-8)], [sx(95), sy(-8)], [sx(111), sy(8)]]) +
    odot(sx(103), sy(0)) +
    txt(sx(106), sy(9.2), "Gewinn nach oben offen", "middle", 12.5) +
    txt(sx(95), T - 2, "Put-Strike", "middle", 12, "#555") +
    txt(sx(86), sy(-6.4), "Verlust begrenzt", "middle", 12.5);
};

// Long Straddle: Call+Put Strike 100, Prämiensumme 8 -> |S-100| - 8
figures["straddle-strangle"] = () => {
  const { sx, sy, s } = plot({
    xr: [82, 118], yr: [-10, 12], xTitle: "Aktienkurs bei Verfall (€)", yTitle: "Gewinn / Verlust (€)",
    xticks: [{ v: 92, label: "92" }, { v: 100, label: "100" }, { v: 108, label: "108" }],
    yticks: [{ v: -8, label: "−8" }, { v: 0, label: "0" }, { v: 10, label: "+10" }],
  });
  return s +
    line(sx(100), sy(-8), sx(100), B, 1, INK, "5 4") +
    poly([[sx(82), sy(10)], [sx(100), sy(-8)], [sx(118), sy(10)]]) +
    odot(sx(92), sy(0)) + odot(sx(108), sy(0)) +
    txt(sx(100), T - 2, "Strike", "middle", 12, "#555") +
    txt(sx(100), sy(-9.2), "max. Verlust = Prämien", "middle", 12.5);
};

/* ===== KONZEPTIONELLE DIAGRAMME (glatte Kurven) ===== */

// Optionen-Steuern: Aufteilung des Kapitalgewinns in Nettoertrag und Steuer
figures["optionen-steuern-deutschland"] = () => {
  const x = 120, y = 170, w = 480, h = 120;
  const net = w * 0.736, tax = w - net;
  return txt(120, 120, "Aufteilung eines Kapitalgewinns (vereinfacht)", "start", 15, INK, 600) +
    `<rect x="${x}" y="${y}" width="${net}" height="${h}" fill="none" stroke="${INK}" stroke-width="1.8"/>` +
    `<rect x="${x + net}" y="${y}" width="${tax}" height="${h}" fill="${INK}"/>` +
    txt(x + net / 2, y + h / 2 + 5, "Nettoertrag", "middle", 15) +
    txt(x + net / 2, y + h + 26, "≈ 73,6 %", "middle", 13, "#333") +
    line(x + net, y + h + 6, x + net, y + h + 34, 1.2) +
    txt(x + net + tax / 2, y - 14, "Steuer", "middle", 13) +
    txt(x + net + tax + 4, y + h + 26, "Abgeltungsteuer + Soli ≈ 26,4 %", "end", 13, "#333");
};

// Theta: Zeitwert ~ sqrt(Restlaufzeit). x: 9 Monate (links) -> Verfall (rechts)
figures["theta-zeitwertverfall"] = () => {
  const { sx, sy, s } = plot({
    xr: [9, 0], yr: [0, 6], xTitle: "Restlaufzeit (Monate)", yTitle: "Zeitwert (€)", zero: false,
    xticks: [{ v: 9, label: "9" }, { v: 6, label: "6" }, { v: 3, label: "3" }, { v: 0, label: "Verfall" }],
    yticks: [{ v: 0, label: "0" }, { v: 3, label: "3" }, { v: 6, label: "6" }],
  });
  const pts = []; for (let mo = 9; mo >= 0; mo -= 0.2) pts.push([sx(mo), sy(6 * Math.sqrt(mo / 9))]);
  return s + smooth(pts) +
    txt(sx(4.5), sy(5.5), "beschleunigter Verfall zum Laufzeitende", "middle", 12.5);
};

// Delta (Call) als logistische S-Kurve
figures["optionsgriechen-delta-gamma-theta-vega"] = () => {
  const { sx, sy, s } = plot({
    xr: [78, 122], yr: [0, 1], xTitle: "Aktienkurs (€)", yTitle: "Delta des Calls", zero: false,
    xticks: [{ v: 90, label: "90" }, { v: 100, label: "100" }, { v: 110, label: "110" }],
    yticks: [{ v: 0, label: "0" }, { v: 0.5, label: "0,5" }, { v: 1, label: "1,0" }],
  });
  const pts = []; for (let x = 78; x <= 122; x += 0.5) pts.push([sx(x), sy(1 / (1 + Math.exp(-(x - 100) / 4)))]);
  return s + line(sx(100), sy(0), sx(100), sy(1), 1, INK, "5 4") + smooth(pts) +
    odot(sx(100), sy(0.5)) +
    txt(sx(100), T - 2, "Strike (ATM)", "middle", 12, "#555");
};

// Put-Call-Parität: Portfolio-Äquivalenz + Formel
figures["put-call-parity"] = () => {
  const boxH = 150, top = 96, bw = 232;
  const half = (cx, l1, l2) =>
    rectO(cx - bw / 2, top, bw, boxH) +
    line(cx - bw / 2, top + boxH / 2, cx + bw / 2, top + boxH / 2, 1, LGRY) +
    txt(cx, top + 46, l1, "middle", 16) + txt(cx, top + 121, l2, "middle", 15);
  return half(190, "Call (C)", "Barwert von K") +
    txt(360, top + boxH / 2 + 14, "=", "middle", 44) +
    half(530, "Put (P)", "Aktie (S)") +
    txt(190, top + boxH + 30, "Portfolio A", "middle", 13, "#555") +
    txt(530, top + boxH + 30, "Portfolio B", "middle", 13, "#555") +
    txt(360, 360, "C + K · e", "middle", 18) +
    `<text x="${360 + 47}" y="${360 - 9}" font-size="12" fill="${INK}">−rT</text>` +
    `<text x="${360 + 72}" y="360" font-size="18" fill="${INK}">= P + S</text>`;
};

// Volatilität: zwei Normalverteilungen (schmal vs. breit), korrekt skaliert
figures["volatilitaet-verstehen"] = () => {
  const { sx, sy, s } = plot({
    xr: [60, 140], yr: [0, 1], xTitle: "möglicher Kurs bei Verfall (€)", yTitle: "Wahrscheinlichkeit", zero: false,
    xticks: [{ v: 100, label: "100" }], yticks: [],
  });
  // einfache, klar skalierte Glocken (Höhe ~ 1/sigma, auf Plot normiert)
  const gauss = (sig, scale) => { const p = []; for (let x = 60; x <= 140; x += 0.8) p.push([sx(x), sy(scale * Math.exp(-((x - 100) ** 2) / (2 * sig * sig)))]); return p; };
  return s + smooth(gauss(20, 0.42)) + smooth(gauss(7, 0.92)) +
    txt(sx(100), sy(0.99), "geringe Volatilität", "middle", 12.5) +
    txt(sx(128), sy(0.30), "hohe Volatilität", "middle", 12.5);
};

// Volatilitätszyklus (Ruhe -> Spitze -> Beruhigung), glatt
figures["volatilitaet-renditen"] = () => {
  const { sx, sy, s } = plot({
    xr: [0, 10], yr: [0, 10], xTitle: "Zeit", yTitle: "Volatilität", zero: false, xticks: [], yticks: [],
  });
  const f = (x) => 2 + 7 * Math.exp(-((x - 3.4) ** 2) / 0.5) + 1.2 * Math.exp(-((x - 6.5) ** 2) / 2);
  const p = []; for (let x = 0; x <= 10; x += 0.1) p.push([sx(x), sy(f(x))]);
  return s + smooth(p) +
    txt(sx(3.4), sy(9.6), "Volatilitätsspitze", "middle", 12.5) +
    txt(sx(1), sy(3.1), "ruhige Phase", "middle", 12) +
    txt(sx(8.7), sy(2.7), "Beruhigung", "middle", 12);
};

// VIX invers zum Markt (Markt durchgezogen, VIX gestrichelt)
figures["vix-angstindex-erklaert"] = () => {
  const { sx, sy, s } = plot({
    xr: [0, 10], yr: [0, 10], xTitle: "Zeit", yTitle: "Niveau (indexiert)", zero: false, xticks: [], yticks: [],
  });
  const mkt = (x) => 7 - 3.2 * Math.exp(-((x - 5) ** 2) / 1.1);
  const vix = (x) => 3 + 4.8 * Math.exp(-((x - 5) ** 2) / 1.1);
  const pm = [], pv = []; for (let x = 0; x <= 10; x += 0.1) { pm.push([sx(x), sy(mkt(x))]); pv.push([sx(x), sy(vix(x))]); }
  return s + smooth(pm) + smooth(pv).replace('stroke-width="2.6"', 'stroke-width="2.4" stroke-dasharray="7 5"') +
    txt(sx(9.6), sy(mkt(9.6)) - 10, "Markt", "end", 12.5) +
    txt(sx(5), sy(vix(5)) - 12, "VIX", "middle", 12.5);
};

// IV Rank: aktuelle IV in der 52-Wochen-Spanne
figures["iv-rank-perzentil"] = () => {
  const y = 210, x0 = 150, x1 = 570, cur = x0 + (x1 - x0) * 0.62;
  return line(x0, y, x1, y, 2.2) +
    line(x0, y - 16, x0, y + 16, 2.2) + line(x1, y - 16, x1, y + 16, 2.2) +
    line(x0, y, cur, y, 7) +
    `<path d="M${cur},${y - 15} l-9,-17 h18 z" fill="${INK}"/>` +
    txt(x0, y + 40, "52-Wochen-Tief", "middle", 12.5, "#333") +
    txt(x1, y + 40, "52-Wochen-Hoch", "middle", 12.5, "#333") +
    txt(cur, y - 40, "aktuelle IV", "middle", 13) +
    txt((x0 + cur) / 2, y - 16, "IV Rank ≈ 62", "middle", 12.5, "#333");
};

// Hebel: Kapitaleinsatz vs. kontrollierte Position (mit Werten)
figures["marginhandel-verstehen"] = () => {
  const x0 = 150, unit = 22, y1 = 150, y2 = 250, h = 52;
  return txt(150, 110, "Hebelwirkung (Beispiel)", "start", 15, INK, 600) +
    `<rect x="${x0}" y="${y1}" width="${2 * unit}" height="${h}" fill="${INK}"/>` +
    txt(x0 + 2 * unit + 14, y1 + 32, "eingesetztes Kapital: 2.000 €", "start", 13) +
    `<rect x="${x0}" y="${y2}" width="${20 * unit}" height="${h}" fill="none" stroke="${INK}" stroke-width="1.8"/>` +
    `<rect x="${x0}" y="${y2}" width="${2 * unit}" height="${h}" fill="${INK}"/>` +
    txt(x0 + 20 * unit, y2 + h + 24, "kontrollierte Position: 20.000 € (Hebel 10×)", "end", 13);
};

// Position Sizing: kleiner Risikoanteil je Trade
figures["risikomanagement-optionshandel"] = () => {
  const x = 150, y = 150, w = 430, h = 120, risk = w * 0.02;
  return txt(150, 116, "Position Sizing", "start", 15, INK, 600) +
    rectO(x, y, w, h) +
    `<rect x="${x}" y="${y}" width="${risk}" height="${h}" fill="${INK}"/>` +
    txt(x + risk + w / 2, y + h / 2 + 5, "Gesamtkapital", "middle", 14) +
    line(x + risk, y + h + 6, x + risk, y + h + 30, 1.2) +
    txt(x + risk + 8, y + h + 40, "1–2 % Risiko je Trade", "start", 13);
};

// Psychologie: Emotionszyklus (glatt)
figures["psychologie-optionshandel"] = () => {
  const { sx, sy, s } = plot({
    xr: [0, 10], yr: [0, 10], xTitle: "Zeit / Kursverlauf", yTitle: "Emotion", zero: false, xticks: [], yticks: [],
  });
  const f = (x) => 5 + 3.6 * Math.exp(-((x - 3) ** 2) / 1.3) - 3.8 * Math.exp(-((x - 6.8) ** 2) / 1.0);
  const p = []; for (let x = 0; x <= 10; x += 0.1) p.push([sx(x), sy(f(x))]);
  return s + smooth(p) +
    txt(sx(3), sy(f(3)) - 14, "Euphorie", "middle", 12.5) +
    txt(sx(6.8), sy(f(6.8)) + 22, "Kapitulation", "middle", 12.5);
};

// Assignment-Ablauf (Käufer -> Stillhalter)
figures["assignment-und-ausuebung"] = () => {
  const bw = 244, bh = 100, top = 176, ax = 360;
  return txt(360, 96, "Option ist im Geld (ITM)", "middle", 14, INK, 600) +
    rectO(64, top, bw, bh) +
    txt(64 + bw / 2, top + 42, "Käufer übt aus", "middle", 15) +
    txt(64 + bw / 2, top + 70, "(Exercise)", "middle", 12.5, "#555") +
    line(64 + bw + 4, top + bh / 2, 64 + bw + 48, top + bh / 2, 2.4) +
    `<path d="M${64 + bw + 52},${top + bh / 2} l-13,-7 v14 z" fill="${INK}"/>` +
    txt(ax, top - 16, "je 100 Aktien / Kontrakt", "middle", 12, "#555") +
    rectO(W - 64 - bw, top, bw, bh) +
    txt(W - 64 - bw / 2, top + 42, "Stillhalter erhält", "middle", 15) +
    txt(W - 64 - bw / 2, top + 70, "Zuteilung (Assignment)", "middle", 12.5, "#555");
};

// Wheel-Strategie: vierstufiger Kreislauf (CSP -> Zuteilung -> Covered Call -> Abruf)
figures["wheel-strategie"] = () => {
  const cx = 410, w = 330, h = 50, x = cx - w / 2;
  const ys = [56, 146, 236, 326];
  const labels = [
    "1 · Cash-Secured Put verkaufen",
    "2 · Aktien per Zuteilung kaufen",
    "3 · Covered Call verkaufen",
    "4 · Aktien werden abgerufen",
  ];
  let s = "";
  ys.forEach((y, i) => { s += rectO(x, y, w, h) + txt(cx, y + 31, labels[i], "middle", 14, INK, 600); });
  for (let i = 0; i < 3; i++) {
    const y2 = ys[i + 1];
    s += line(cx, ys[i] + h, cx, y2 - 10, 2.2) + `<path d="M${cx},${y2} l-6,-11 h12 z" fill="${INK}"/>`;
  }
  const yTop = ys[0] + h / 2, yBot = ys[3] + h / 2;
  s += `<path d="M${x},${yBot} C150,${yBot} 150,${yTop} ${x},${yTop}" fill="none" stroke="${GRY}" stroke-width="2.4"/>`;
  s += `<path d="M${x},${yTop} l-12,-6 v12 z" fill="${GRY}"/>`;
  s += txt(126, (yTop + yBot) / 2, "Zyklus wiederholt sich", "middle", 12.5, "#555")
    .replace("<text ", `<text transform="rotate(-90 126 ${(yTop + yBot) / 2})" `);
  return s;
};

// Optionen rollen: Schließen der bestehenden + Eröffnen einer neuen Option
figures["optionen-rollen"] = () => {
  const bw = 252, bh = 104, top = 168;
  return txt(360, 92, "Rollen = Schließen + neu eröffnen", "middle", 15, INK, 600) +
    rectO(56, top, bw, bh) +
    txt(56 + bw / 2, top + 44, "Bestehende Option", "middle", 15) +
    txt(56 + bw / 2, top + 72, "zurückkaufen (schließen)", "middle", 12.5, "#555") +
    line(56 + bw + 4, top + bh / 2, 56 + bw + 48, top + bh / 2, 2.4) +
    `<path d="M${56 + bw + 52},${top + bh / 2} l-13,-7 v14 z" fill="${INK}"/>` +
    rectO(W - 56 - bw, top, bw, bh) +
    txt(W - 56 - bw / 2, top + 38, "Neue Option verkaufen", "middle", 15) +
    txt(W - 56 - bw / 2, top + 64, "späterer Verfall", "middle", 12.5, "#555") +
    txt(W - 56 - bw / 2, top + 86, "und/oder neuer Strike", "middle", 12.5, "#555");
};

for (const [slug, fn] of Object.entries(figures)) write(slug, fn());
console.log("Figuren erzeugt:", Object.keys(figures).length);
