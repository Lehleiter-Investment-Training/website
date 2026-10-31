// Lädt redaktionelle Inhalte aus content/ (YAML) für die Eleventy-Datenkaskade.
// Inhalt (content/) bleibt so getrennt vom Code (src/, lib/).
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const CONTENT_DIR = path.join(__dirname, "..", "content");

function loadYaml(rel) {
  const file = path.join(CONTENT_DIR, rel);
  try {
    return yaml.load(fs.readFileSync(file, "utf8"));
  } catch (e) {
    throw new Error(`Inhaltsdatei content/${rel} konnte nicht geladen werden: ${e.message}`);
  }
}

// Alle YAML-Dateien eines Ordners als Objekt, Schlüssel = Dateiname ohne Endung.
function loadYamlDir(rel) {
  const out = {};
  for (const f of fs.readdirSync(path.join(CONTENT_DIR, rel)).sort()) {
    if (/\.ya?ml$/.test(f)) out[f.replace(/\.ya?ml$/, "")] = loadYaml(`${rel}/${f}`);
  }
  return out;
}

module.exports = { CONTENT_DIR, loadYaml, loadYamlDir };
