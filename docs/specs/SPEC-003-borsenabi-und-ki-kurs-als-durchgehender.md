# SPEC-003: Börsenabi und KI-Kurs als durchgehender Lernweg

Repo: `JO/01_JO_Website` · Branch: `feat/borsenabi-und-ki-kurs-als-durc` · Größe: M · Impact: 4/5 · Status: **offen** · Quelle: Portfolio-Audit 01.11.2026

## Problem (Nutzersicht)
<!-- TODO Markus: 2–3 Sätze. Was ist heute das Problem, für wen? -->

## Ziel / Nicht-Ziel
- Ziel: Börsenabi und KI-Kurs als durchgehender Lernweg
- Nicht-Ziel: <!-- TODO: was bewusst ausgeklammert wird -->

## Akzeptanzkriterien (prüfbar)
- [ ] <!-- TODO: je Zeile ein ohne Interpretation prüfbares Kriterium -->
- [ ] Verify-Befehl grün: `npm run validate-blog && npm run build`
- [ ] Betroffene Anforderungen aus docs/REQUIREMENTS.md bleiben erfüllt

## Betroffene Dateien / Module (Vermutung)
<!-- Codex: vor Beginn ermitteln und hier eintragen -->

## Daten und Sicherheit
- Neue Daten? personenbezogen? Auth-Änderung? <!-- TODO -->
- Verbote aus docs/REQUIREMENTS.md gelten:
  - Keine Inline-Skripte, die die CSP brechen

## Tests, die grün sein müssen
- Bestehende Suite (siehe Abschnitt 2 in docs/REQUIREMENTS.md)
- Neue Tests für jedes Akzeptanzkriterium

## Definition of Done
- Alle Akzeptanzkriterien abgehakt · Verify grün · Deploy-Preview geprüft · README/AGENTS.md/.env.example aktualisiert · Abschluss-Bericht nach globalem Format

## Arbeitsanweisung für Codex
Lies `AGENTS.md` und `docs/REQUIREMENTS.md`. Fülle zuerst „Betroffene Dateien“ aus. Sind Problem oder Akzeptanzkriterien noch TODO, stoppe und frage nach, statt zu raten. Dann: Tests zuerst, Code danach, `npm run validate-blog && npm run build` ausführen, Bericht.
