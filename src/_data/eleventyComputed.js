// Seiten mit `pageKey` im Frontmatter beziehen ihre Texte aus content/pages/<pageKey>.yaml.
// `copy` enthält dann den kompletten Seiteninhalt; copy.meta (title, description, subtitle)
// wird in layouts/base.njk bzw. layouts/page.njk auf pageTitle/description/subtitle abgebildet.
// Seiten ohne pageKey (Blog, Tools, Bonus …) bleiben unverändert.
module.exports = {
  copy: (data) => {
    if (!data.pageKey) return undefined;
    const copy = data.pages && data.pages[data.pageKey];
    if (!copy) throw new Error(`Seitentext fehlt: content/pages/${data.pageKey}.yaml`);
    return copy;
  },
};
