# Blog skalieren & verbessern – Phase 1 (Fundament)

Ziel: Den Blog so vorbereiten, dass neue Artikel ohne Design-Aufwand und maschinell
erzeugbar sind, und die Auffindbarkeit für SEO + GEO (LLM-Crawler) erhöhen.

## Entscheidungen (mit Nutzer abgestimmt)
- Veröffentlichung der wöchentlichen Artikel: **Draft-PR + Review** (Human-in-the-Loop).
- Generierung später über **geplante Claude-Code-Session (Web-Trigger/Co-Work)**, kein API-Key.
- Start mit **Phase 1**.

## Phase-1-Aufgaben
- [ ] **Markdown-Support** für Blog-Artikel (`src/blog/*.md` zusätzlich zu `.njk`)
      → Collection-Glob + Blog-Index berücksichtigen `.md`.
- [ ] **Atom-Feed** `/feed.xml` via `@11ty/eleventy-plugin-rss`
      → Voller Artikelinhalt mit absoluten URLs (gut für GEO-Crawler).
      → `<link rel="alternate" type="application/atom+xml">` in `<head>`.
      → In `llms.txt` verlinken.
- [ ] **Parametrische Grafik**: Filter `blogCover(title, category)` erzeugt ein
      konsistentes 16:9-SVG (Navy/Gold + Kategorie-Farbe + Titel) als Data-URI.
      → Blog-Index nutzt es als Fallback, wenn kein `image` gesetzt ist.
      → Neue Artikel brauchen damit **kein** Bild mehr, nur ein `category`-Feld.
- [ ] **Schema-Fallback**: `BlogPosting`-`image` fällt für bildlose Artikel auf das
      Site-OG-Bild zurück (statt zu fehlen).

## Verifikation
- [ ] `npx @11ty/eleventy` baut fehlerfrei.
- [ ] `_site/feed.xml` ist valides Atom (Einträge, absolute Links, Datum).
- [ ] Test-`.md`-Artikel rendert über `blog-post.njk` (temporär, danach entfernt).
- [ ] Blog-Index zeigt für bildlose Artikel die generierte Grafik.
- [ ] Bestehende 9 Artikel unverändert (keine visuelle Regression).

## Review
Umgesetzt und verifiziert (`npx @11ty/eleventy` baut fehlerfrei, 25 Dateien):
- **Markdown-Support**: Collection-Glob `src/blog/*.{njk,md}`. Temporärer `.md`-Testartikel
  rendert über `blog-post.njk` inkl. BlogPosting-Schema; danach entfernt.
- **Atom-Feed** `/feed.xml`: 9 Einträge, von `xmllint` als wohlgeformt bestätigt,
  Volltext mit `htmlToAbsoluteUrls` (relative → absolute Links verifiziert),
  RFC-3339-Daten. `<link rel="alternate" ...>` in jedem `<head>`, in `llms.txt` verlinkt.
- **Parametrische Grafik** `blogCover`-Filter: valides 16:9-SVG als Data-URI,
  Kategorie-Akzentfarbe, Titel-Wortumbruch (max. 4 Zeilen). Bestehende 9 Artikel
  behalten ihre eigenen SVGs (keine Regression).
- **Schema-Fallback**: `BlogPosting.image` fällt für bildlose Artikel auf das OG-Bild.

Plugin-Hinweis: `@11ty/eleventy-plugin-rss` v3 ist ESM; Filter werden einzeln
registriert (`dateToRfc3339`, `getNewestCollectionItemDate`, `absoluteUrl`,
`htmlToAbsoluteUrls` als Async-Wrapper um `convertHtmlToAbsoluteUrls`).

Offen für Folge-PRs: Phase 2 (FAQ-Schema, Summary-Box, Glossar-Verlinkung, E-E-A-T),
Phase 3 (Topic-Backlog, Playbook, wöchentlicher Claude-Code-Trigger).
