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
7. Fazit-Absatz.
(`summary` und `faq` stehen in der Frontmatter, nicht im Body – das Layout rendert sie.)

## Länge & SEO
- Ziellänge **1.000–1.500 Wörter**.
- Genau **eine** `<h1>` kommt aus dem Layout (pageTitle) – im Body mit `<h2>/<h3>` arbeiten.
- Ziel-Keyword in Titel, Description, erstem Absatz und mindestens einer Zwischenüberschrift.

## Qualitäts-Checkliste vor PR
- [ ] Frontmatter vollständig, zwei `---`-Zäune, valides YAML.
- [ ] Risikohinweis-Box vorhanden.
- [ ] `summary` + 3 FAQ faktentreu.
- [ ] ≥ 2 interne Links, ≥ 3 `key-term`-Markierungen.
- [ ] `npm run validate-blog` ist grün.
