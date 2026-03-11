# Just Options - Buchwebseite

Offizielle Website zum Buch **"Just Options: Optionen strategisch nutzen"** von Markus Lehleiter.

## Projektübersicht

Diese Website dient als Marketingplattform und Ressourcenzentrum für das Buch über Optionshandel. Sie bietet:

- Buchvorstellung und Kaufmöglichkeiten
- Umfangreichen Blog mit Fachartikeln
- Interaktives Quiz zum Optionswissen
- Exklusives Bonusmaterial für Buchkäufer
- Newsletter-Anmeldung

## Projektstruktur

```
buchwebseite-main/
├── index.html                      # Hauptseite mit Buchvorstellung
├── blog.html                       # Blog-Übersicht
├── styles.css                      # Zentrales Stylesheet
├── sitemap.xml                     # XML-Sitemap für SEO
├── robots.txt                      # Robots-Anweisungen
│
├── Blog-Artikel/
│   ├── optionsstrategien-einsteiger.html
│   ├── risikomanagement-optionshandel.html
│   ├── volatilitaet-renditen.html
│   ├── volatilitaet-verstehen.html
│   ├── vix-angstindex-erklaert.html
│   ├── psychologie-optionshandel.html
│   ├── marginhandel-verstehen.html
│   ├── anfaengerfehler-optionshandel.html
│   └── iv-rank-perzentil.html
│
├── Blog-Grafiken (SVG)/
│   ├── optionsstrategien-einsteiger.svg
│   ├── risikomanagement-optionshandel.svg
│   ├── volatilitaet-renditen.svg
│   ├── volatilitaet-verstehen.svg
│   ├── vix-angstindex-erklaert.svg
│   ├── psychologie-optionshandel.svg
│   ├── marginhandel-verstehen.svg
│   ├── anfaengerfehler-optionshandel.svg
│   └── iv-rank-perzentil.svg
│
├── Interaktive Inhalte/
│   ├── quiz.html                   # Basis-Quiz (20 Fragen)
│   ├── boersenquiz.html            # Erweitertes Quiz (100 Fragen)
│   └── handelsplan.html            # Interaktiver Handelsplan-Generator
│
├── Bonus-Bereich/
│   ├── Bonus.html                  # Passwortgeschützte Bonus-Seite
│   └── Bonus/                      # Bonus-Materialien
│       ├── Glossar.html            # Interaktives Options-Glossar
│       ├── 01_Anleitung Watchliste.docx
│       ├── 01_Watchliste_liquide.xlsx
│       ├── 02_Beispiel Handelsplan.docx
│       ├── 03_ChatGPT Prompt zum Abgleich mit Handelsplan.docx
│       ├── 05_Strategieüberblick.pdf
│       ├── 06_Tool-Liste.xlsx
│       ├── 07_Optionen und Bitcoin.pdf
│       └── 08_Aktienanalyse mit KI.pdf
│
├── Rechtliches/
│   ├── impressum.html              # Impressum
│   └── datenschutz.html            # Datenschutzerklärung
│
├── Assets/
│   ├── Logo.jpg                    # Website-Logo
│   ├── Favicon.jpg                 # Browser-Favicon
│   ├── Buch.jpg                    # Buchcover (klein)
│   ├── Buchcover.png               # Buchcover (groß)
│   └── Autor.jpg                   # Autorenfoto
│
├── Scripts/
│   └── cookie-consent.js           # Cookie-Consent-Funktionalität
│
└── Sonstiges/
    ├── .github/                    # GitHub-Konfiguration
    └── blogideas/                  # Blog-Ideen und Entwürfe
```

## Blog-Artikel

Die Website enthält 9 SEO-optimierte Fachartikel zum Thema Optionshandel:

| Artikel | Thema | Dateiname |
|---------|-------|-----------|
| Optionsstrategien für Einsteiger | Grundlegende Strategien (CSP, CC, Spreads) | `optionsstrategien-einsteiger.html` |
| Risikomanagement | 10 Strategien zum Kapitalschutz | `risikomanagement-optionshandel.html` |
| Volatilität für Renditen | Strategien für Hoch-/Niedrigvolatilität | `volatilitaet-renditen.html` |
| Volatilität verstehen | Grundlagen der Volatilität | `volatilitaet-verstehen.html` |
| VIX erklärt | Der Angstindex und seine Nutzung | `vix-angstindex-erklaert.html` |
| Psychologie im Trading | Emotionale Fallen vermeiden | `psychologie-optionshandel.html` |
| Marginhandel | Chancen und Risiken des Hebelhandels | `marginhandel-verstehen.html` |
| Anfängerfehler | Typische Fehler und wie man sie vermeidet | `anfaengerfehler-optionshandel.html` |
| IV-Rank & IV-Perzentil | Volatilitätsindikatoren richtig nutzen | `iv-rank-perzentil.html` |

### Interne Verlinkung

Alle Blog-Artikel sind SEO-optimiert miteinander verlinkt. Die Links erscheinen kontextbezogen im Fließtext und sind visuell durch Unterstreichung und Farbe hervorgehoben.

## Technische Details

### Verwendete Technologien

- **HTML5** - Semantisches Markup
- **CSS3** - Custom Properties, Flexbox, Grid
- **Vanilla JavaScript** - Keine Framework-Abhängigkeiten
- **Google Fonts** - Roboto Schriftfamilie
- **Font Awesome 6.5** - Icons

### CSS-Architektur

Die `styles.css` ist modular aufgebaut:

1. CSS Variables (Custom Properties)
2. Reset & Base Styles
3. Typography
4. Layout Components
5. Navigation
6. Hero Section
7. Content Sections
8. Blog Styles
9. Interactive Elements (Quiz, Forms)
10. Footer
11. Responsive Breakpoints
12. Print Styles

### Responsive Design

Die Website ist vollständig responsive mit Breakpoints bei:
- 1200px (Large Desktop)
- 992px (Desktop)
- 768px (Tablet)
- 576px (Mobile)
- 480px (Small Mobile)

### SEO-Optimierungen

- Semantische HTML-Struktur
- Meta-Descriptions für alle Seiten
- SEO-freundliche URLs (sprechende Dateinamen)
- XML-Sitemap
- Interne Verlinkungsstruktur
- Alt-Texte für Bilder
- Strukturierte Überschriften-Hierarchie

## Deployment

Die Website ist als statische HTML-Seite konzipiert und kann auf jedem Webserver gehostet werden:

### Empfohlene Hosting-Optionen

1. **GitHub Pages** - Kostenlos, direkt aus dem Repository
2. **Netlify** - Kostenlos, mit automatischem HTTPS
3. **Vercel** - Kostenlos, schnelles CDN
4. **Traditionelles Webhosting** - Apache/Nginx

### Domain

Die Website ist unter `https://www.just-options.de` erreichbar.

## Lokale Entwicklung

```bash
# Repository klonen
git clone [repository-url]

# In das Verzeichnis wechseln
cd buchwebseite-main

# Lokalen Server starten (Python)
python -m http.server 8000

# Oder mit Node.js (npx)
npx serve
```

Die Website ist dann unter `http://localhost:8000` erreichbar.

## Passwortgeschützter Bereich

Der Bonus-Bereich (`Bonus.html`) ist passwortgeschützt. Das Passwort wird im Buch auf Seite 68 genannt (erstes Wort).

**Hinweis:** Der Passwortschutz erfolgt clientseitig via JavaScript und bietet keinen echten Sicherheitsschutz. Er dient lediglich als Zugangshürde für Nicht-Buchkäufer.

## Newsletter-Integration

Die Newsletter-Anmeldung ist mit **Keila** (Self-hosted Newsletter-Tool) integriert:

- Formular-Action: `https://app.keila.io/forms/nfrm_N4RJKg35`
- Felder: E-Mail, Vorname, Nachname

## Cookie-Consent

Die Website verwendet ein eigenes Cookie-Consent-System (`cookie-consent.js`):

- Notwendige Cookies (immer aktiv)
- Analyse-Cookies (optional)
- Marketing-Cookies (optional)

## Wartung und Updates

### Blog-Artikel hinzufügen

1. HTML-Datei mit SEO-freundlichem Namen erstellen
2. SVG-Grafik im gleichen Namensschema erstellen
3. Eintrag in `blog.html` hinzufügen
4. Eintrag in `sitemap.xml` hinzufügen
5. Interne Verlinkung zu bestehenden Artikeln prüfen

### Rezensionen aktualisieren

Neue Amazon-Rezensionen können in `index.html` im Bereich `#reviews` hinzugefügt werden. Das Slider-Karussell passt sich automatisch an.

## Lizenz

Alle Rechte vorbehalten. (c) 2025 Lehleiter Investment Training.

## Kontakt

- **Website:** https://www.just-options.de
- **LinkedIn:** https://www.linkedin.com/in/lehleiter/
- **Instagram:** https://www.instagram.com/just_options.de/
- **Telegram:** https://t.me/just_options_com

---

*Diese README wurde zuletzt am 25. Dezember 2025 aktualisiert.*
