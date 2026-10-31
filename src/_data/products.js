// Produktdaten (Preis, ISBN, Seiten, Termine, Links) – Quelle: content/products.yaml
module.exports = () => require("../../lib/content").loadYaml("products.yaml");
