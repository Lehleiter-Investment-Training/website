# just OPTIONS – Optionslogik für Privatanleger

Marken-Hub mit Lernweg, Praxishandbuch, Workbook, KI-Kurs, Blog und Tools von Markus Lehleiter.
Erreichbar unter **https://www.just-options.de**.

## Projektübersicht

Marketing- und Ressourcen-Website zum Buch über Optionshandel:

- Buchvorstellung (Hauptbuch + Workbook) mit Amazon-Kaufmöglichkeit
- Blog mit SEO-optimierten Fachartikeln
- Interaktive Tools (Optionswissen-Quiz, Börsen-Quiz, Handelsplan-Generator, Glossar)
- Passwortgeschützter Bonus-Bereich für Buchkäufer
- Lead-Magnet / Newsletter-Anmeldung (Brevo)

## Technik-Stack

- **[Eleventy (11ty) v3](https://www.11ty.dev/)** – Static Site Generator
- **Nunjucks** (`.njk`) als Template-Sprache
- **HTML5 / CSS3** (Custom Properties, Flexbox, Grid) – modulare Stylesheets
- **Vanilla JavaScript** – keine Frontend-Frameworks
- **Font Awesome 6.5** – **lokal als Inline-SVG** eingebettet (kein CDN, kein Webfont, kein Drittanbieter)
- **Kein Analytics/Tracking, keine Cookies, keine Drittdienste** → kein Cookie-/Einwilligungs-Banner nötig

### Build-Pipeline (`.eleventy.js` verdrahtet die Helfer aus `lib/`)

- **CSS-Bundling**: 7 globale Stylesheets werden zu einem gehashten, minifizierten
  Bundle (`app.<hash>.css`) zusammengefasst (Cache-Busting). Seitenspezifisches CSS
  wird einzeln minifiziert.
- **JS-Minifizierung**: alle Dateien in `assets/js` via Terser.
- **HTML-Minifizierung**: via `html-minifier-terser` (inkl. Inline-JS/CSS).
- **Responsive Bilder**: `{% image %}`-Shortcode (`@11ty/eleventy-img`) erzeugt
  WebP + JPEG-Fallback in mehreren Breiten mit automatischen `width`/`height`.
- **Icons**: Der Build scannt den Quelltext nach verwendeten Font-Awesome-Klassen
  (`fas/far/fab fa-*`, auch in JS) und erzeugt aus den lokalen FA-6.5.1-SVGs ein
  CSS, das jedes Icon per `mask` (eingefärbt über `currentColor`) rendert. Markup
  (`<i class="fas fa-…">`) bleibt unverändert. Ein unbekannter Icon-Name lässt den
  Build absichtlich fehlschlagen (Alias-Auflösung über `metadata/icon-families.json`).

## Schichten: Inhalt, Code, Backend

Die Website ist in drei klar getrennte Schichten aufgeteilt. Texte und Produktdaten
lassen sich ändern, ohne HTML oder Build-Code anzufassen.

| Schicht | Ort | Enthält | Wer ändert |
|---|---|---|---|
| **Inhalt** | `content/` | Seitentexte (`pages/*.yaml`), Baustein-Texte (`partials/*.yaml`), Produktdaten (`products.yaml`), Autorendaten (`author.yaml`), Blog-Backlog und Redaktionsregeln | Redaktion |
| **Inhalt (Blog)** | `src/blog/*.md` | Blogartikel (bleiben im Eleventy-Input, siehe Blog-Automatik) | Redaktion / Automatik |
| **Code** | `src/` (Templates, CSS, JS, Assets), `lib/`, `.eleventy.js` | Darstellung und Build-Logik, keine Fließtexte | Entwicklung |
| **Backend / Betrieb** | `scripts/`, `.github/workflows/`, `ops/`, `docs/` | Generatoren, Validierung, Deployment, Blog-Automatik, Brevo-Vorlage, Dokumentation | Entwicklung / Automatik |

**Regeln**

- Preise, Seitenzahlen, ISBN, Erscheinungstermine und Kauflinks stehen **nur** in
  `content/products.yaml`. Sie fließen in Seiten, Danke-Seite, Quiz und Book-JSON-LD.
- Name, Credentials und Kurzbiografie des Autors stehen **nur** in `content/author.yaml`.
- Text-Felder in `content/` sind HTML-Fragmente: `<br>`, `<a>`, `<strong>`, `&amp;`
  sind erlaubt und werden unverändert ausgegeben. Deshalb nur eigene, geprüfte Inhalte
  dort ablegen. URLs und Bild-Alt-Texte werden escaped.
- ISBN und Datumswerte in YAML immer in Anführungszeichen setzen.
- `src/_data/site.json` enthält nur technische Konfiguration (Domain, Brevo-Endpunkt,
  Social-Links), `navigation.json` die Menüs.

**Neue Marketing-Seite anlegen:** `content/pages/<key>.yaml` mit `meta.title` und
`meta.description` schreiben, dann ein Template mit `pageKey: <key>` und `permalink`
im Frontmatter anlegen. Im Template steht der Inhalt als `copy` bereit; wiederkehrende
Bausteine liefert `src/_includes/macros/ui.njk`.

## Projektstruktur

```
content/                      # INHALT
├── pages/                    # eine YAML-Datei je Marketing-Seite (startseite, buch, …)
├── partials/                 # Texte für Starterkit-Block und Blog-CTA
├── products.yaml             # Buch, Workbook, KI-Kurs
├── author.yaml               # Autorendaten
├── topics.yaml               # Blog-Themen-Backlog (Automatik)
├── blog-style-guide.md       # Redaktionsregeln Blog
└── article-template.md       # Gerüst für neue Artikel
src/                          # CODE (Eleventy-Input)
├── _data/                    # site.json, navigation.json, pillars.json, glossar.js
│                             # + Loader für content/ (pages, products, author, partials)
├── _includes/
│   ├── layouts/              # base, page, blog-post
│   ├── partials/             # head, nav, footer, starterkit, product-hero, schema-book, …
│   └── macros/ui.njk         # wiederverwendbare Bausteine (FAQ, Karten, nächster Schritt)
├── assets/                   # css/, js/, images/, downloads/, data/ (Börsenquiz-Fragen)
├── blog/                     # Blog-Artikel (.md/.njk) + figures/ (SVG)
├── pages/                    # Marketing- und Rechtsseiten (rendern content/pages/*.yaml)
├── tools/                    # Quiz, Börsenquiz, Handelsplan (interaktiv)
├── bonus/, workbook/         # passwortgeschützte Bonusbereiche + downloads/
├── landing/                  # Landingpages
├── index.njk, glossar.njk, sitemap.njk, feed.njk, 404.njk
└── robots.txt, llms.txt, _headers, CNAME
lib/                          # CODE: Build-Helfer (CSS-Bundle, Blog-Cover, Filter, Content-Loader)
scripts/                      # BACKEND: Generatoren und Prüfungen (siehe unten)
ops/brevo/                    # BACKEND: Vorlage der Double-Opt-in-Mail (wird in Brevo gepflegt)
.github/workflows/            # BACKEND: Deployment, PR-Prüfung, wöchentliche Blog-Automatik
docs/                         # Markenregeln, Playbook der Blog-Automatik
```

### Scripts

| Befehl | Script | Zweck |
|---|---|---|
| `npm run validate-blog` | `scripts/validate-blog.js` | Pflicht-Gate (CI): Frontmatter, Bausteine, Build, JSON-LD |
| `npm run diff-site -- <vorher> [_site]` | `scripts/diff-site-text.js` | Regressionsprüfung: vergleicht zwei Builds auf sichtbaren Text, JSON-LD, Links und Routen |
| `npm run figures` | `scripts/generate-figures.js` | Schwarz-weiße Konzeptgrafiken für Blogartikel |
| `npm run og-image` | `scripts/generate-og-image.js` | Social-Sharing-Bild `og-default.jpg` |
| `node scripts/generate-course-visual.js` | `scripts/generate-course-visual.js` | Kursvisual `kurs-cover.png` |

**Refactoring sicher prüfen:** Vor der Änderung `npx @11ty/eleventy` ausführen und
`_site` außerhalb des Repos sichern, danach neu bauen und `npm run diff-site -- <Sicherung>`
aufrufen. Exit-Code 0 bedeutet: Inhalt, Links und strukturierte Daten unverändert.

> Hinweis: Auf **GitHub Pages** wird die Datei `_headers` ignoriert (Custom-Header
> werden dort nicht unterstützt). Die darin definierten Security-Header (CSP, HSTS,
> X-Frame-Options …) greifen erst bei einem Host wie **Netlify** oder **Cloudflare
> Pages**. Die `<meta http-equiv>`-Header im `<head>` sind für `X-Frame-Options`
> wirkungslos und dienen nur als Fallback für `X-Content-Type-Options`.

## Lokale Entwicklung

```bash
npm install        # Abhängigkeiten installieren
npm run serve      # Dev-Server mit Live-Reload (http://localhost:8080)
npm run build      # Produktions-Build nach _site/
npm run clean      # _site/ löschen
```

## Deployment

Automatisch via **GitHub Actions** (`.github/workflows/static.yml`) bei Push auf
`main`: `npm ci` → `npx @11ty/eleventy` → Deploy nach GitHub Pages.

## Newsletter / Lead-Magnet

Anmeldung via **Brevo** (Formular-Action in `src/_data/site.json` → `brevoFormAction`, Formulartexte in `content/partials/starterkit.yaml`, Vorlage der Bestätigungsmail in `ops/brevo/double-opt-in.html`).
Das Formular wird als normaler POST an Brevo gesendet. Die tatsächliche Provider-Antwort bleibt sichtbar. Eine zeitgesteuerte Erfolgsmeldung wird nicht verwendet. Echte Anmeldungen erfolgen weiterhin über Brevo mit Double-Opt-in.

## Passwortgeschützter Bonus-Bereich

Der Bonus-Bereich (`/Bonus.html`) ist clientseitig per JavaScript passwortgeschützt
(`assets/js/bonus.js`). Das Passwort steht im Buch.

**Wichtig – kein echter Zugriffsschutz:** Der Schutz ist rein clientseitig. Das
Passwort steht im Klartext im JS, und die Bonus-Dateien unter `bonus/downloads/`
sind per direkter URL abrufbar (statisches Hosting). Der Mechanismus ist nur eine
Zugangshürde, **keine** Sicherheitsmaßnahme. Für echten Schutz wäre serverseitige
Authentifizierung (signierte URLs / Login) nötig.

## Datenschutz: keine Drittdienste, kein Banner

Die Seite kommt **ohne Cookie-/Einwilligungs-Banner** aus, weil sie keine
einwilligungspflichtige Verarbeitung auslöst:

- **Kein Analytics/Tracking**, keine Cookies, kein localStorage-Tracking.
- **Font Awesome lokal** als Inline-SVG (kein CDN-Request, keine IP-Übertragung an
  Cloudflare). Damit entfällt der frühere „Google-Fonts"-Rechtsrisiko-Punkt.
- Newsletter (Brevo) wird ausschließlich **nutzerinitiiert beim Absenden** kontaktiert
  (Double-Opt-in), siehe `datenschutz.html` Abschnitt 5.
- Das Mobilmenü-Icon ist **CSS-gezeichnet** (unabhängig von Font Awesome).

`datenschutz.html` (Abschnitte 4 + 6) ist entsprechend formuliert: keine Cookies,
Icons lokal eingebettet, keine Drittübermittlung.

## Wartung

**Texte, Preise, FAQ ändern:** in der passenden Datei unter `content/` (siehe
„Schichten"). `npm run serve` lädt Änderungen an `content/` automatisch neu.

**Blog-Artikel hinzufügen:** Neue `.njk`-Datei in `src/blog/` (Layout
`layouts/blog-post.njk`, mit `date`, `pageTitle`, `description`, `tags`). Die
Blog-Collection und Sitemap aktualisieren sich automatisch.

**Bewertungen:** Zur aktuellen Amazon-Bewertung wird verlinkt; keine statischen Sterne oder Bewertungszahlen.

**Markenregeln:** Siehe `docs/brand-system.md`. Neue Artikel benötigen zusätzlich `pillar` und einen nutzenorientierten `subtitle`.

## Lizenz

Alle Rechte vorbehalten. © 2026 Lehleiter Investment Training.

## Kontakt

- Website: https://www.just-options.de
- LinkedIn: https://www.linkedin.com/in/lehleiter/
- Instagram: https://www.instagram.com/just_options.de/
- Telegram: https://t.me/just_options_com
