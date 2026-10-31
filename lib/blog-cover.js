// Parametrisches Blog-Titelbild: erzeugt aus Titel + Kategorie ein konsistentes
// 16:9-SVG (Navy/Gold-Branding, je Kategorie ein Akzent) als Data-URI.
// So brauchen neue Artikel kein eigenes Bild mehr – nur ein optionales `category`.
const BLOG_CATEGORY_COLORS = {
  "grundlagen": "#58503D",
  "volatilität": "#245858", "volatilitaet": "#245858",
  "risiko": "#1B6B6B", "risikomanagement": "#1B6B6B",
  "psychologie": "#454A5B",
  "strategie": "#1B6B6B", "strategien": "#1B6B6B",
  "steuern": "#525764",
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
function blogCover(title, category) {
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
  const catText = esc(String(category || ""));
  const pillW = category ? Math.round(catText.length * 11 + 36) : 0;
  const badge = category
    ? `<rect x="56" y="54" width="${pillW}" height="34" rx="17" fill="${accent}"/>` +
      `<text x="${56 + pillW / 2}" y="77" text-anchor="middle" font-family="Calibri, sans-serif" font-size="16" letter-spacing="2" font-weight="700" fill="#ffffff">${catText}</text>`
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
    `<text x="58" y="${H - 50}" font-family="Calibri, sans-serif" font-size="19" letter-spacing="1" font-weight="700" fill="${GOLD}">just OPTIONS</text>` +
    `</svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

module.exports = { blogCover };
