# just-options.de – Anforderungen und Weiterentwicklung

Stand: 01.11.2026 (aus Portfolio-Audit `C:\Code\_audit\portfolio-audit.md`) · Kontext: just OPTIONS · Status: produktiv

## 1. Zweck
Marken-Hub von just OPTIONS: Buch + Workbook, Lernweg, Blog (SEO/GEO), Tools, KI-Kurs-Einstieg. Eleventy-Site auf Netlify mit CI.

## 2. Stack und Befehle
Stack: Eleventy 11ty, Nunjucks, CSS, sharp (Bilder), GitHub Actions

| Zweck | Befehl |
|---|---|
| Lokal starten | `npm run serve` |
| Build | `npm run build` |
| Lint/Typecheck | `npm run validate-blog` |
| Tests | `npm run diff-site` |
| Vor Abschluss | `npm run validate-blog && npm run build` |

Umgebungsvariablen: – (hCaptcha-Sitekey ist öffentlich)

## 3. Struktur
- src/ – Templates, _includes/layouts
- content/ – pages/*.yaml, Blog
- lib/, scripts/ – og-image, figures, validate-blog
- docs/blog-automation.md, docs/brand-system.md
- ops/, tasks/

## 4. Anforderungen (verbindlich)
- R1 Jede Seite hat Titel/Description aus `content/pages/<key>.yaml`.
- R2 Blog-Artikel bestehen `validate-blog` (Frontmatter, Links, Bilder).
- R3 Brand: Navy/Gold/Teal, Fraunces/Inter laut docs/brand-system.md; generisches Maskulinum.
- R4 Keine Anlageberatung; Hinweise laut Impressum/Disclaimer auf jeder Tool-Seite.

## 5. Sicherheitsstand
- 0 Vulns; CSP in `src/_headers`

## 6. Weiterentwicklung (Top 3, nach Impact/Aufwand)

| # | Vorhaben | Aufwand | Impact |
|---|---|---|---|
| 1 | „Setup der Woche“ aus Dealdetector-JSON statisch generieren (Newsletter/GEO) | M | 4 |
| 2 | Link-Check und Lighthouse in CI | S | 3 |
| 3 | Börsenabi und KI-Kurs als durchgehender Lernweg | M | 4 |

## 7. Verbote
- Keine Inline-Skripte, die die CSP brechen

## 8. Definition of Done
- Akzeptanzkriterien der Spec erfüllt und getestet
- Verify-Befehl aus Abschnitt 2 grün
- Deploy-Preview geprüft (falls Netlify)
- README/AGENTS.md/.env.example aktualisiert, falls betroffen
- Keine Secrets, keine personenbezogenen Daten im Commit
