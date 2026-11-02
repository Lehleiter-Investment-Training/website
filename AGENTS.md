# AGENTS.md – just-options.de

> Arbeitsregeln für Codex/Claude. Globale Regeln: `~/.codex/AGENTS.md` (Vorlage in `C:\Code\_audit\templates\AGENTS.global.md`). Anforderungen und Roadmap: `docs/REQUIREMENTS.md`. Stand 01.11.2026.

## Zuerst lesen
- `docs/REQUIREMENTS.md` (Zweck, Anforderungen, Verbote, Definition of Done)
- `docs/specs/` – ein Vorhaben pro Datei, Reihenfolge = Priorität. Status im Kopf der Spec pflegen.
- `CLAUDE.md` – bestehende Projektregeln, gelten unverändert
- `README.md`

## Zweck
Marken-Hub von just OPTIONS: Buch + Workbook, Lernweg, Blog (SEO/GEO), Tools, KI-Kurs-Einstieg. Eleventy-Site auf Netlify mit CI.

## Stack
Eleventy 11ty, Nunjucks, CSS, sharp (Bilder), GitHub Actions

## Befehle
| Zweck | Befehl |
|---|---|
| Lokal starten | `npm run serve` |
| Build | `npm run build` |
| Lint/Typecheck | `npm run validate-blog` |
| Tests | `npm run diff-site` |
| Vor Abschluss | `npm run validate-blog && npm run build` |

## Struktur
- src/ – Templates, _includes/layouts
- content/ – pages/*.yaml, Blog
- lib/, scripts/ – og-image, figures, validate-blog
- docs/blog-automation.md, docs/brand-system.md
- ops/, tasks/

## Konventionen
- Arbeit nur auf `feat/…`-Branch des aktuellen Threads; Merge per PR.
- Erst Tests für die Akzeptanzkriterien, dann Code. Verify-Befehl muss grün sein.
- Neue Env-Variablen sofort in `.env.example` eintragen.
- Deutsch in UI-Texten: generisches Maskulinum, keine Doppelnennungen, keine Gendersternchen, keine Partizipformen.
- Abschluss-Bericht nach globalem Format (Ergebnis, Geändert, Akzeptanzkriterien, Checks, Annahmen).

## Verbote
- Keine Inline-Skripte, die die CSP brechen
- Keine `.env*`-Dateien lesen oder ausgeben (außer `.env.example`).
- Keine Migrationen gegen Produktionsdatenbanken; keine Force-Pushes.

## Definition of Done
- siehe `docs/REQUIREMENTS.md` Abschnitt 8
