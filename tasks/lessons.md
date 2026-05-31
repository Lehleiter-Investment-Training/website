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
