// Allgemeine Template-Filter (Datum, Cache-Busting).
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const SRC = path.join(__dirname, "..", "src");

// Deutsches Datumsformat, z. B. „20. November 2024"
function dateFormat(date) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

// ISO-Datum (YYYY-MM-DD) für schema.org
function isoDate(date) {
  if (!date) return "";
  return new Date(date).toISOString().split("T")[0];
}

// Cache-Busting für seitenspezifische Assets (extraCss/extraJs): hängt einen
// Inhalts-Hash der Quelldatei als ?v=… an. Diese Dateien werden – anders als das
// gehashte Global-Bundle – unter konstantem Dateinamen ausgeliefert; ohne Busting
// liefern Browser/CDN nach inhaltlichen Änderungen veraltete Versionen aus.
function cacheBust(urlPath) {
  try {
    const rel = String(urlPath).replace(/^\//, "").split("?")[0];
    const file = path.join(SRC, rel);
    const hash = crypto.createHash("md5").update(fs.readFileSync(file)).digest("hex").slice(0, 8);
    return `${urlPath}?v=${hash}`;
  } catch (e) {
    return urlPath; // externe/fehlende Pfade unverändert lassen
  }
}

module.exports = { dateFormat, isoDate, cacheBust };
