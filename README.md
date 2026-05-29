# Just Options – Buchwebseite

Offizielle Website zum Buch **„Optionen strategisch nutzen"** von Markus Lehleiter.
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

### Build-Pipeline (in `.eleventy.js`)

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

## Projektstruktur

```
src/
├── index.njk                 # Startseite
├── _data/                    # Globale Daten (site.json, navigation.json)
├── _includes/
│   ├── layouts/              # base, page, blog-post
│   └── partials/             # head, nav, footer, cookie-consent, …
├── assets/
│   ├── css/                  # Modulare Stylesheets (global + seitenspezifisch)
│   ├── js/                   # main.js, quiz.js, boersenquiz.js, slider.js, …
│   ├── images/               # Logo, Cover, Autorfoto, Favicon
│   └── downloads/            # Lead-Magnet-PDFs
├── blog/                     # Blog-Artikel (.njk) + images/ (SVG)
├── tools/                    # quiz, boersenquiz, handelsplan
├── bonus/                    # Bonus-Bereich + downloads/
├── workbook/                 # Workbook-Bonusseite + downloads/
├── pages/                    # impressum, datenschutz, danke
├── landing/                  # Landingpages
├── sitemap.njk               # XML-Sitemap
├── robots.txt
├── _headers                  # Security-/Cache-Header (Netlify/Cloudflare)
└── CNAME
```

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

Anmeldung via **Brevo** (Formular-Action in `src/_data/site.json` → `brevoFormAction`).
Das Formular wird über ein verstecktes iframe abgeschickt; danach Weiterleitung auf
`/Danke.html` (siehe `assets/js/main.js`).

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

**Blog-Artikel hinzufügen:** Neue `.njk`-Datei in `src/blog/` (Layout
`layouts/blog-post.njk`, mit `date`, `pageTitle`, `description`, `tags`). Die
Blog-Collection und Sitemap aktualisieren sich automatisch.

**Rezensionen aktualisieren:** Im `#reviews`-Bereich von `index.njk`; bei Änderung
auch die `review`-/`aggregateRating`-Angaben im JSON-LD anpassen.

## Lizenz

Alle Rechte vorbehalten. © 2025 Lehleiter Investment Training.

## Kontakt

- Website: https://www.just-options.de
- LinkedIn: https://www.linkedin.com/in/lehleiter/
- Instagram: https://www.instagram.com/just_options.de/
- Telegram: https://t.me/just_options_com
