# Markenstrategie 1.1 auf der Website

Grundlage: just OPTIONS Brand Strategy v1.1 vom 13. September 2026. Das Dokument dient als Markenreferenz; seine Roadmap, Newsletter-Aufträge und offenen Produktentscheidungen sind keine zusätzlichen Ausführungsaufträge.

## Umsetzung

- Marke und Site-Name: just OPTIONS; beschreibender Seitentitel mit Markensuffix.
- Navy #1A1F36, Gold #C8973E, Teal #1B6B6B, Graustufen. Cream #FEF3C7 für Hinweise. Keine zusätzlichen Schmuckfarben oder Emojis.
- Georgia Bold für Überschriften; Calibri für Fließtext. Generische Browser-Fallbacks greifen, wenn eine lokale Schrift fehlt. Keine neuen Font-Downloads.
- Website: Sie. Newsletter: bestehende Du-Ansprache, beim Formular angekündigt.
- Startseite: Lernweg 01 Fundament, 02 System, 03 Prozess. Sechs neue Ziele: /buch/, /praxis-workbook/, /ki-kurs/, /ueber/, /tools/, /aktienanleihen/.
- Bestehende Seiten und Downloads behalten ihre URLs. /workbook.html bleibt der Bonusbereich.
- Alle 30 Artikel sind einer Nutzen-Säule zugeordnet, haben einen Nutzen-Einstieg und einen gemeinsamen nächsten Lernschritt. Vorhandene fachliche Artikel und Quellen bleiben erhalten; es handelt sich nicht um eine vollständige fachliche Neuprüfung aller Alttexte.
- Vorhandene Logos, gedruckte Cover und Social-Preview-Bilder bleiben Originalassets. Eine neue Cover-Serie und Social-Grafiken wurden nicht erfunden.
- Brevo: identischer Formular-Endpunkt und Double-Opt-in, normale POST-Antwort statt fingierter Erfolgsmeldung nach Timeout. Keine Testanmeldungen versendet.
- Bewertungen verweisen auf Amazon; keine statischen Sterne oder ungeprüften Zähler. Keine unbestätigten E-Book-Termine.
- Die Aktienanleihen-Seite erläutert das Thema mit Primärquelle und kennzeichnet das Buch als geplant. Kein erfundener Titel, Preis, Umfang oder Termin.

## Pflege

Die gemeinsamen Tokens stehen in variables.css, die übergreifende Gestaltung in brand.css. Artikel verwenden pillar und subtitle. Änderungen an Produktpreisen müssen mit dem tatsächlichen Angebot übereinstimmen; der KI-Kurs verweist deshalb für den aktuellen Preis auf die Kursplattform. Das Footer-Jahr wird beim Build und im Browser aktualisiert.

## Prüfung am 13. September 2026

- `npm run validate-blog` erfolgreich: 30 Blogartikel mit FAQ-Schema.
- Statische Prüfung: 50 HTML-Seiten, 2.632 lokale Verweise, 142 gültige JSON-LD-Blöcke; sämtliche 46 bisherigen HTML-/XML-Routen vorhanden. Keine fehlenden lokalen Dateien oder Linkziele, doppelten IDs oder defekten Anker gefunden.
- Desktop-Ansichten geprüft; schmale Ansichten auf Überbreite und Bildfehler geprüft. Mobile Navigation inklusive Escape, Quiz-Antworten, Glossarsuche und Workbook-Rechner im Browser bedient.
- Formeln und Beschriftungen der Rechner auf Kontrast bzw. Zuordnung geprüft. Beispiel Long Put: Strike 100, Prämie 2,80, Kurs 95 ergibt Break-even 97,20 und Ergebnis 2,20 je Aktie zum Verfall.
- Kein Newsletterversand und keine Zahlung ausgelöst. Die Prüfung ersetzt keinen vollständigen Accessibility- oder fachlichen Audit der vorhandenen Inhalte.
