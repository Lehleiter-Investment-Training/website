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

---

# Blog Phase 2 (GEO-Boost)

Ziel: Auf bestehenden + neuen Artikeln direkte Ranking-/GEO-Hebel aktivieren.

## Aufgaben
- [x] **FAQPage-Schema** + sichtbare FAQ-Sektion (opt-in via Frontmatter `faq`).
- [x] **„Antwort-zuerst"-Summary-Box** am Artikelanfang (opt-in via `summary`).
- [x] **Glossar-Verlinkung**: `key-term`-Spans in Blog-Artikeln werden per Transform
      zu internen Links auf `/glossar.html` (Topical Authority).
- [x] **E-E-A-T-Autorenbox** (`partials/author-box.njk`) auf allen Artikeln.
- [x] `summary` + 3× `faq` für die 9 Bestandsartikel (Subagent, faktentreu).

## Verifikation
- [x] Infra mit Testartikel geprüft: 4 JSON-LD-Blöcke valide (inkl. FAQPage),
      Summary-/FAQ-/Autoren-Box + Glossar-Link gerendert.
- [x] Bestandsartikel: Autoren-Box + Glossar-Links vorhanden, JSON-LD valide,
      keine Summary/FAQ solange nicht gesetzt (opt-in).
- [x] Nach Befüllung: alle 9 Artikel mit FAQPage (je 3 Fragen), Build fehlerfrei
      (25 Dateien), 0 JSON-LD-Parse-Fehler über alle Seiten.

## Review
Umgesetzt und verifiziert:
- blog-post.njk rendert optionale Summary-Box, optionale FAQ-Sektion (`<details>`)
  und FAQPage-JSON-LD; neue Autoren-Box auf allen Artikeln.
- Glossar-Transform verlinkt `key-term`-Spans in Blog-Artikeln auf `/glossar.html`
  (vor dem Minify, nur Artikelseiten; z. B. 4 Links im Volatilitäts-Artikel).
- CSS für answer-box, blog-faq/faq-item, author-box ergänzt; `a.key-term`-Stil.
- Alle 9 Bestandsartikel mit faktentreuem `summary` + 3 FAQ (Subagent).

Lesson: Subagenten, die Frontmatter editieren, können den schließenden `---`-Zaun
entfernen → Build-Fehler "bad indentation". Nach solchen Edits IMMER Fence-Anzahl
prüfen (`grep -c '^---$'` == 2) und vollen Build + JSON-LD-Validierung laufen lassen.
