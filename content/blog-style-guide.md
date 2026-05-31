# Blog Style-Guide – just-options.de

Verbindliche Vorgaben für neue Blogartikel (manuell oder automatisiert erstellt).
Ziel: konsistente Qualität, starke SEO/GEO-Signale, rechtlich sauberer YMYL-Content.

## Sprache & Ton
- **Deutsch**, Anrede **„Sie"** im Artikeltext (wie in den Bestandsartikeln).
- Fachkundig, aber für Einsteiger verständlich. Erklären statt behaupten.
- Aktiv formulieren, kurze Absätze, klare Zwischenüberschriften.

## YMYL / Recht (zwingend)
Optionshandel ist ein „Your Money or Your Life"-Thema. Daher:
- **Keine Anlageberatung, keine Kauf-/Verkaufsempfehlungen, keine Renditeversprechen.**
- Nur **bildende** Inhalte. Konjunktiv bei Einschätzungen.
- **Keine erfundenen Zahlen/Statistiken.** Konkrete Werte nur, wenn allgemein
  belegbar (z. B. „VIX über 30 gilt als erhöht"). Im Zweifel qualitativ bleiben.
- Jeder Artikel enthält die **Risikohinweis-Box** (siehe Struktur).

## Frontmatter-Schema (für `.md`-Artikel)
```yaml
---
layout: layouts/blog-post.njk
pageTitle: "Konkreter, keyword-starker Titel (50–60 Zeichen)"
subtitle: "Ein Satz, der neugierig macht."
description: "Meta-Description, 140–160 Zeichen, mit Ziel-Keyword."
date: JJJJ-MM-TT            # Erstellungsdatum
category: "Strategie"       # Grundlagen|Volatilität|Risiko|Psychologie|Strategie|Steuern
tags: ["Tag1", "Tag2"]      # 2–3 Tags; steuern 'Related Posts'
permalink: /slug.html       # = topics.yaml slug + .html
summary: "Direkte Kernantwort in 1–2 Sätzen (extrahierbar für Suchmaschinen/LLMs)."
faq:
  - q: "Echte Nutzerfrage?"
    a: "1–3 Sätze, reiner Text, faktentreu aus dem Artikel."
  - q: "…?"
    a: "…"
  - q: "…?"
    a: "…"
---
```
**Kein `image`-Feld nötig** – ohne Bild erzeugt der `blogCover`-Filter automatisch
ein Titelbild aus Titel + Kategorie.

### Frontmatter-Regeln (kritisch)
- Der Block beginnt und endet mit `---` (genau **zwei** Zäune). Den schließenden
  `---` niemals vergessen → sonst YAML-Build-Fehler (siehe `tasks/lessons.md`).
- Alle Strings in `"…"`; innere Anführungszeichen als `\"` escapen.
- `faq`-Antworten einzeilig, **ohne** HTML/Markdown (sie landen 1:1 im FAQPage-Schema).

## Artikel-Aufbau (Body, HTML wie in Bestandsartikeln)
1. Einleitungsabsatz (Problem/Versprechen, Ziel-Keyword früh).
2. **Risikohinweis-Box:** `<div class="disclaimer-box"><h4>Risikohinweis</h4><p>…</p></div>`
3. **Inhaltsverzeichnis:** `<div class="table-of-contents">` mit Anker-Links.
4. Hauptteil: `<h3 id="…">`-Abschnitte; nutze `<table class="data-table">`,
   sowie `strategy-box` / `tip-box` / `warning-box` / `callout` für Hervorhebungen.
5. **Fachbegriffe markieren:** ersten Treffer eines Glossarbegriffs als
   `<span class="key-term">Begriff</span>` auszeichnen → wird automatisch zum
   Glossar verlinkt. Begriffe siehe `src/_data/glossar.js`.
6. **Interne Links:** 2–4 Verweise auf passende Bestandsartikel (`/slug.html`)
   und ggf. auf `/glossar.html`.
7. **Konzept-Illustration (Pflicht):** eine schlichte **schwarz-weiße** Illustration,
   die ein Kernkonzept des Artikels veranschaulicht, eingebunden im Text (nach dem
   Inhaltsverzeichnis):
   `<figure class="blog-figure"><img src="/blog/figures/<slug>.svg" alt="…"><figcaption>…</figcaption></figure>`
   Die SVG-Datei liegt unter `src/blog/figures/<slug>.svg` und wird von
   `scripts/generate-figures.js` erzeugt (`npm run figures`). **Regeln:** reine
   s/w-Linienzeichnung, Beschriftungen in freien Zonen – **Linien und Schrift dürfen
   sich nie überlappen**.
8. Fazit-Abschnitt (`<h3>Fazit</h3>` … mit internem Link).
9. **Quellen-Sektion (Pflicht):** `<h3>Quellen &amp; weiterführende Literatur</h3><ul>…</ul>`
   mit 2–4 Einträgen. **Nur hochwertige, belegbare Quellen** zitieren – bevorzugt aus
   dieser Whitelist; keine erfundenen Quellen/Deep-Links:
   - The Options Industry Council (OIC) – https://www.optionseducation.org
   - Options Clearing Corporation (OCC) – „Characteristics and Risks of Standardized Options" – https://www.theocc.com
   - Cboe Global Markets – https://www.cboe.com
   - Eurex (Deutsche Börse Group) – https://www.eurex.com
   - John C. Hull: „Options, Futures, and Other Derivatives", Pearson.
   - Für Verhaltensthemen: Daniel Kahneman: „Schnelles Denken, langsames Denken".
   - Für die Put-Call-Parität: Stoll (1969), The Journal of Finance.

(`summary` und `faq` stehen in der Frontmatter. **Kein `image`-Feld** – das farbige
**Vorschaubild** im Blog-Index wird automatisch aus `category` erzeugt. Die **s/w-Konzept-
Illustration im Artikel** ist eine eigene Datei unter `src/blog/figures/<slug>.svg`.)

## Konsistenz (verbindlich)
Alle Artikel müssen **untereinander konsistent** sein. Pflicht in **jedem** Artikel:
Anrede „Sie", Risikohinweis-Box, Inhaltsverzeichnis, `<h3 id>`-Abschnitte,
**eine s/w-Konzept-Illustration** (`.blog-figure`), mind. 3 `key-term`-Markierungen,
≥ 2 interne Links, Fazit-Abschnitt, Quellen-Sektion, sowie die Frontmatter-Felder
`category`, `summary` und 3× `faq`. Eine gültige `category` steuert das farbige
Vorschaubild im Index. Alle diese Regeln prüft `npm run validate-blog` automatisch.

## Länge & SEO
- Ziellänge **1.000–1.500 Wörter**.
- Genau **eine** `<h1>` kommt aus dem Layout (pageTitle) – im Body mit `<h2>/<h3>` arbeiten.
- Ziel-Keyword in Titel, Description, erstem Absatz und mindestens einer Zwischenüberschrift.

## Qualitäts-Checkliste vor PR
- [ ] Frontmatter vollständig (inkl. `category`, `summary`, 3× `faq`), zwei `---`-Zäune.
- [ ] Risikohinweis-Box, Inhaltsverzeichnis, Fazit **und Quellen-Sektion** vorhanden.
- [ ] Durchgängig „Sie"; keine informelle Anrede.
- [ ] `summary` + FAQ faktentreu; Quellen nur aus der Whitelist.
- [ ] ≥ 2 interne Links, ≥ 3 `key-term`-Markierungen.
- [ ] `npm run validate-blog` ist grün (prüft Konsistenz automatisch).
