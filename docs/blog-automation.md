# Wöchentliche Blog-Automatik – Playbook

Dieses Dokument ist die **Arbeitsanweisung für eine geplante Claude-Code-Session**,
die einmal pro Woche **einen** neuen Blogartikel als **Draft-PR** erstellt.
Es braucht **keinen API-Key** – die Intelligenz ist die Claude-Code-Session selbst.

Ablauf in einem Satz: Nächstes offenes Thema nehmen → Artikel als Markdown schreiben →
lokal validieren → Thema als erledigt markieren → eigener Branch + Draft-PR. **Der
Mensch reviewt und merged** (Human-in-the-Loop, wichtig für YMYL-Qualität).

---

## A) Einmalige Einrichtung des wöchentlichen Triggers

Es gibt zwei Wege. **Empfohlen: Variante 1 (GitHub Action)** – läuft vollständig in
GitHub, kein manuelles Starten nötig.

### Variante 1 – GitHub Action (empfohlen)
Der Workflow `.github/workflows/weekly-blog.yml` triggert montags 06:00 UTC (und
on demand über den Actions-Tab) eine Claude-Code-Session, die dieses Playbook ausführt.
**Einmalige Einrichtung:**
1. Lokal einen Token erzeugen: `claude setup-token` (mit Claude Pro/Max-Abo – **kein
   API-Key/keine nutzungsbasierten Kosten**). Alternativ einen Anthropic-API-Key nutzen.
2. In GitHub: **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `CLAUDE_CODE_OAUTH_TOKEN`, Wert: der Token aus Schritt 1.
   - (Bei API-Key-Variante stattdessen `ANTHROPIC_API_KEY` setzen und im Workflow die
     entsprechende auskommentierte Zeile aktivieren.)
3. Fertig. Test: **Actions-Tab → „Weekly Blog Automation" → Run workflow**.

### Variante 2 – Claude Code on the web (Schedule-Trigger)
Falls du ohne GitHub-Secret arbeiten willst: einen **wöchentlichen Trigger in Claude
Code on the web** anlegen, der jede Woche eine **frische Session** startet
(der ephemere Container eignet sich nicht für Dauerläufer wie `/loop`):

1. Auf https://claude.com/code (Web) das Repo `Lehleiter-Investment-Training/website` öffnen.
2. Einen **geplanten Trigger** (Schedule) anlegen, z. B. **montags 06:00**.
3. Als Umgebung eine mit Schreibrechten/GitHub-Anbindung wählen (wie für PRs üblich).
4. Als **Prompt** exakt eintragen:
   > Folge der Anweisung in `docs/blog-automation.md` und erstelle den nächsten Blogartikel als Draft-PR.
5. Speichern. Optional: dieselbe Session auf die PR-Aktivität subscriben lassen.

Doku zu Umgebungen/Triggern: https://code.claude.com/docs/en/claude-code-on-the-web

> Alternativ lässt sich derselbe Prompt manuell oder über Co-Work nach Zeitplan starten.

---

## B) Was die Session pro Lauf tut (Schritt für Schritt)

1. **Branch aktualisieren:** auf `main` basieren (`git fetch origin main`,
   frischen Branch erstellen: `blog/<slug>` ).
2. **Thema wählen:** `content/topics.yaml` lesen, den **obersten** Eintrag mit
   `status: todo` nehmen. Gibt es keinen → **abbrechen** und in der Session melden,
   dass der Backlog leer ist (keinen PR erstellen).
3. **Kontext laden:**
   - `content/blog-style-guide.md` (Ton, Struktur, YMYL-Regeln, Frontmatter-Schema),
   - `content/article-template.md` (Gerüst),
   - 1–2 thematisch nahe Bestandsartikel in `src/blog/` als Vorbild,
   - `src/_data/glossar.js` für `key-term`-Begriffe.
4. **Artikel schreiben:** `src/blog/<slug>.md` gemäß Style-Guide.
   - Vollständige Frontmatter inkl. `summary` und 3× `faq` (faktentreu!).
   - **Kein `image`-Feld** – das Titelbild wird aus `category` generiert.
   - 1.000–1.500 Wörter, Risikohinweis-Box, Inhaltsverzeichnis, ≥ 2 interne Links,
     ≥ 3 `key-term`-Markierungen.
5. **Backlog pflegen:** im gewählten `topics.yaml`-Eintrag `status: done` setzen und
   `published: <heutiges ISO-Datum>` ergänzen.
6. **Validieren (Pflicht):** `npm run validate-blog` ausführen.
   - Prüft Frontmatter-Zäune, Build und alle JSON-LD-Blöcke (inkl. FAQPage).
   - **Rot? → reparieren, bis grün.** Niemals einen roten Stand committen.
7. **Commit & Draft-PR:**
   - Commit-Message: `Blog: <Titel>` (knapp, aussagekräftig).
   - Push auf `blog/<slug>`, dann **Draft-PR** gegen `main`.
   - PR-Body: 2–3 Sätze Worum-geht's + ausdrücklicher Hinweis „Fachlich
     gegenlesen (FAQ/Aussagen), dann mergen."
8. **Stoppen.** Nicht selbst mergen. Der Mensch entscheidet im Review.

---

## C) Qualitäts- & Sicherheitsregeln
- **Keine Anlageberatung / keine Renditeversprechen / keine erfundenen Zahlen.**
- Pro Lauf **genau ein** Artikel.
- Bestehende Artikel **nicht** verändern.
- Bei Unklarheiten/leerem Backlog: melden statt raten.
- Der schließende `---`-Frontmatter-Zaun ist Pflicht (sonst Build-Fehler).

## D) Schnelltest ohne Trigger (für den Menschen)
```bash
git checkout -b blog/test-thema main
# Artikel src/blog/<slug>.md anlegen (content/article-template.md als Basis)
npm run validate-blog
```
