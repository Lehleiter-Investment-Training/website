# Lessons

## Subagenten + YAML-Frontmatter (2026-05-31)
**Problem:** Ein Subagent sollte `summary`/`faq` in die Frontmatter von 9 `.njk`-Artikeln
einfügen und hat dabei in allen 9 Dateien den **schließenden `---`-Zaun entfernt**.
Folge: Eleventy-Build bricht mit `YAMLException: bad indentation of a mapping entry`,
weil der HTML-Body als YAML geparst wird. Der Subagent meldete den Fehler fälschlich
als "transient".

**Regel:** Nach jedem (Subagent-)Edit an Frontmatter:
1. Fence-Anzahl prüfen: jede Datei muss genau zwei `^---$`-Zeilen haben
   (`grep -c '^---$' datei` == 2).
2. Vollen Build laufen lassen (`npx @11ty/eleventy`) und auf YAML-/Build-Fehler prüfen.
3. Alle erzeugten JSON-LD-Blöcke per `JSON.parse` validieren.
Subagent-Selbstberichten über "Build grün" nicht blind vertrauen – unabhängig
nachverifizieren (race conditions zwischen parallelen Builds möglich).

## Einheitliche Anrede „Sie" (2026-05-31)
**Problem:** Einzelne UI-Texte waren im informellen „du" formuliert, obwohl die
gesamte Website siezt (z. B. „Das könnte dich auch interessieren", Brevo-Formular-
Meldungen, JS-Validierungstexte der Landingpage).

**Regel:** Neue/​geänderte nutzerseitige Texte konsequent im **„Sie"** formulieren
(Ausnahme: das bewusst locker gehaltene Börsen-Quiz für Jugendliche). Prüfung:
`grep -rniE '\\b(du|dich|dir|dein|deine)\\b' src/ --include='*.njk' --include='*.md' --include='*.html' --include='*.js'`
(boersenquiz.js ausgenommen) muss leer sein. Auch versteckte/eingebettete Texte
(Brevo-Panels mit display:none, JS-Strings) nicht vergessen.

## Inhalt/Code-Trennung mit Eleventy (2026-11-01)
**Problem 1:** Ein globales `src/_data/eleventyComputed.js`, das `pageTitle`/`description`
überschreibt, leert diese Felder auf ALLEN Seiten ohne `pageKey`. Ein Rückgabewert
`undefined` lässt den Frontmatter-Wert NICHT stehen, und `data.pageTitle` ist im
Computed-Kontext nicht der Frontmatter-Wert.
**Regel:** Globale Computed-Daten nur für NEUE Schlüssel (`copy`) verwenden. Bestehende
Felder in den Layouts auflösen (`{% set pageTitle = copy.meta.title %}` direkt in
`base.njk`/`page.njk` – ein `{% include %}` kann keine Variablen des Aufrufers setzen).

**Problem 2:** Refactorings „sehen gleich aus", sind es aber nicht immer.
**Regel:** Vor Template-Umbauten Baseline-Build außerhalb des Repos sichern und nach
jedem Schritt `npm run diff-site -- <Baseline>` laufen lassen. Der Vergleich ersetzt
jedes Tag durch ein Leerzeichen und dekodiert Entities; reine Markup-/Whitespace-
Änderungen bleiben so unsichtbar, Textverluste, vergessenes `| safe` oder geänderte
Links/JSON-LD fallen sofort auf. Für reine Code-Moves `diff -rq` (byte-identisch).

**Weitere Fallstricke:**
- YAML: ISBN/Datum quoten, sonst Zahl/Date-Objekt im Template.
- Nunjucks-Makros: kein `{% image %}` darin (asynchroner Shortcode); für Bausteine mit
  Bildern ein `{% include %}` mit vorher gesetzten Variablen verwenden.
- Lange Bash-Heredocs mit typografischen Anführungszeichen („…") können im Bash-Tool
  am Parser scheitern → Dateien mit dem Write-Tool anlegen.
