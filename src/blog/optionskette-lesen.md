---
layout: layouts/blog-post.njk
pageTitle: "Die Optionskette lesen: Aufbau der Options-Chain verstehen"
subtitle: "Wie Sie sich in der Tabelle aus Strikes, Kursen und Kennzahlen zurechtfinden – und die für Ihre Zwecke passende Option erkennen."
description: "Optionskette lesen leicht gemacht: Aufbau der Options-Chain und was Strike, Bid, Ask, Open Interest und Volumen bedeuten – so finden Sie die passende Option."
date: 2026-06-22
category: "Grundlagen"
tags: ["Grundlagen", "Handel"]
permalink: /optionskette-lesen.html
summary: "Eine Optionskette listet alle handelbaren Optionen auf einen Basiswert nach Verfall und Strike auf – mit Calls und Puts, Bid, Ask sowie Kennzahlen wie Open Interest und Volumen. Wer diese Spalten liest, kann Optionen gezielter vergleichen."
faq:
  - q: "Was ist eine Optionskette?"
    a: "Eine Optionskette ist eine tabellarische Übersicht aller handelbaren Optionen auf einen Basiswert, geordnet nach Verfallsdatum und Ausübungspreis, mit Calls auf der einen und Puts auf der anderen Seite."
  - q: "Was bedeuten Bid und Ask in der Optionskette?"
    a: "Der Bid ist der Preis, zu dem Käufer kaufen möchten, der Ask der Preis, zu dem Verkäufer verkaufen möchten. Die Differenz heißt Spread und gilt als Hinweis auf die Liquidität der Option."
  - q: "Was ist der Unterschied zwischen Open Interest und Volumen?"
    a: "Open Interest zeigt die Zahl aller offenen Kontrakte einer Optionsserie, das Volumen die Zahl der an einem Handelstag gehandelten Kontrakte. Hohe Werte deuten in der Regel auf eine liquidere Option hin."
---

<p>Die Optionskette – im Englischen „Options-Chain" – ist die zentrale Informationsquelle, wenn Sie eine konkrete Option auswählen möchten. Auf den ersten Blick wirkt sie wie eine unübersichtliche Zahlenwand: Dutzende Zeilen, viele Spalten, Kurse, die sich ständig ändern. Sobald Sie jedoch die Logik hinter dem Aufbau verstehen, lässt sich die Tabelle Zeile für Zeile entschlüsseln. In diesem Artikel erfahren Sie, wie eine Optionskette strukturiert ist, was Strike, Bid, Ask, Open Interest und Volumen bedeuten und wie Sie sich zu einer passenden Option vorarbeiten.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken bis hin zum Totalverlust des eingesetzten Kapitals. Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. Konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#was-ist">Was ist eine Optionskette?</a></li>
        <li><a href="#aufbau">Der Aufbau der Options-Chain</a></li>
        <li><a href="#strike-moneyness">Strike-Preis und Moneyness</a></li>
        <li><a href="#bid-ask">Bid, Ask und der Spread</a></li>
        <li><a href="#oi-volumen">Open Interest und Volumen</a></li>
        <li><a href="#auswahl">Die passende Option finden</a></li>
        <li><a href="#fazit">Fazit</a></li>
    </ol>
</div>

<figure class="blog-figure">
    <img src="/blog/figures/optionskette-lesen.svg" alt="Schematischer Aufbau einer Optionskette: Calls links, Puts rechts, Strikes in der Mitte." width="680" height="400" loading="lazy">
    <figcaption>Schematischer Aufbau einer Optionskette: Calls und Puts gruppieren sich um die Strike-Spalte in der Mitte.</figcaption>
</figure>

<h3 id="was-ist">Was ist eine Optionskette?</h3>

<p>Eine Optionskette ist die vollständige Auflistung aller Optionen, die derzeit auf einen bestimmten Basiswert (etwa eine Aktie oder einen Index) gehandelt werden. Jede Handelsplattform stellt sie in ähnlicher Form dar: gegliedert nach Verfallsdatum und innerhalb eines Verfalls sortiert nach Ausübungspreis. Zu jedem Ausübungspreis gibt es eine Kaufoption und eine Verkaufsoption, jeweils mit aktuellen Preisen und ergänzenden Kennzahlen.</p>

<p>Der Sinn dieser Darstellung ist der direkte Vergleich. Statt jede Option einzeln aufzurufen, sehen Sie auf einen Blick, wie sich Preise und Liquidität über die verschiedenen Ausübungspreise verteilen. Genau das macht die Optionskette zum wichtigsten Werkzeug bei der Auswahl – vorausgesetzt, Sie können die Spalten korrekt einordnen.</p>

<h3 id="aufbau">Der Aufbau der Options-Chain</h3>

<p>Die meisten Optionsketten folgen einem gemeinsamen Grundmuster. In der Mitte steht die Spalte mit den Ausübungspreisen. Links davon finden Sie die <span class="key-term">Call-Option</span>en (Kaufoptionen), rechts die <span class="key-term">Put-Option</span>en (Verkaufsoptionen). Für beide Seiten werden dieselben Kennzahlen ausgewiesen, sodass Sie Calls und Puts direkt gegenüberstellen können.</p>

<p>Vor der eigentlichen Tabelle wählen Sie zunächst den Verfallstermin aus. Ein Basiswert hat üblicherweise mehrere Verfallsdaten – von wenigen Tagen bis zu mehreren Monaten oder Jahren in der Zukunft. Jedes Verfallsdatum besitzt eine eigene Optionskette. Innerhalb eines Verfalls stehen die niedrigen Ausübungspreise meist oben und die hohen unten. Der aktuelle Kurs des Basiswerts liegt irgendwo in der Mitte – häufig hebt die Plattform die Zeile in dieser Umgebung optisch hervor.</p>

<div class="tip-box">
    <h4>Gut zu wissen</h4>
    <p>Ein Standard-Optionskontrakt bezieht sich in der Regel auf 100 Einheiten des Basiswerts. Ein in der Kette angezeigter Preis von 2,50 entspricht also 250 pro Kontrakt. Diese Kontraktgröße sollten Sie stets mitdenken, wenn Sie Prämien und Risiken einschätzen.</p>
</div>

<h3 id="strike-moneyness">Strike-Preis und Moneyness</h3>

<p>Der <span class="key-term">Strike-Preis</span> (Ausübungspreis) ist der Preis, zu dem der Basiswert im Fall einer Ausübung gekauft oder verkauft wird. Er ist der Dreh- und Angelpunkt der Optionskette, denn er bestimmt gemeinsam mit dem aktuellen Kurs die sogenannte <span class="key-term">Moneyness</span> – also die Frage, ob eine Option „im Geld" oder „aus dem Geld" liegt.</p>

<p>Für Calls gilt: Liegt der Strike unter dem aktuellen Kurs, ist die Option <span class="key-term">In-the-Money (ITM)</span>, besitzt also inneren Wert. Liegt der Strike über dem Kurs, ist sie <span class="key-term">Out-of-the-Money (OTM)</span>. Bei Puts ist es genau umgekehrt. Diese Einordnung hilft, die Zeilen der Optionskette schnell zu sortieren: Oberhalb des aktuellen Kurses und unterhalb davon verschiebt sich der Charakter der Optionen systematisch.</p>

<p>Warum das wichtig ist: Der Preis einer Option setzt sich aus innerem Wert und Zeitwert zusammen. Eine tief im Geld liegende Option ist teurer, reagiert aber fast eins zu eins auf Kursbewegungen. Eine weit aus dem Geld liegende Option ist billig, verfällt aber wertlos, wenn die erwartete Bewegung ausbleibt. Die Moneyness ist damit der erste Filter bei der Auswahl.</p>

<h3 id="bid-ask">Bid, Ask und der Spread</h3>

<p>Zu jeder Option zeigt die Kette zwei zentrale Preise. Der <span class="key-term">Bid</span> (Geldkurs) ist der Preis, zu dem Marktteilnehmer die Option kaufen möchten – ihn erhalten Sie also beim Verkauf. Der <span class="key-term">Ask</span> (Briefkurs) ist der Preis, zu dem Marktteilnehmer verkaufen möchten – ihn zahlen Sie beim Kauf. Der zuletzt gehandelte Kurs kann davon abweichen und liegt oft dazwischen.</p>

<p>Die Differenz zwischen Bid und Ask heißt Spread. Sie ist ein wichtiger, oft unterschätzter Kostenfaktor: Wer sofort kauft und wieder verkauft, verliert den Spread als implizite Handelskosten. Ein enger Spread deutet in der Regel auf eine liquide, aktiv gehandelte Option hin, ein breiter Spread auf geringe Liquidität. Als Anhaltspunkt kann der Mittelwert aus Bid und Ask dienen; die tatsächlich gezahlte oder erhaltene <span class="key-term">Premium</span> hängt jedoch von der konkreten Orderausführung ab.</p>

<div class="callout">
    <strong>Praxis-Hinweis:</strong> Gerade bei breiten Spreads kann eine Limit-Order sinnvoll sein, statt „bestens" zum Ask zu kaufen. Wie stark Optionspreise generell auf Schwankungen reagieren, lesen Sie vertiefend im Beitrag <a href="/volatilitaet-verstehen.html">Volatilität verstehen</a>.
</div>

<h3 id="oi-volumen">Open Interest und Volumen</h3>

<p>Zwei weitere Spalten helfen dabei, die Liquidität einer Option einzuschätzen. Das <span class="key-term">Open Interest</span> gibt die Anzahl aller offenen Kontrakte einer bestimmten Optionsserie an – also der Kontrakte, die eröffnet, aber noch nicht geschlossen oder ausgeübt wurden. Das Volumen dagegen zählt, wie viele Kontrakte an einem einzelnen Handelstag umgesetzt wurden.</p>

<p>Beide Kennzahlen ergänzen sich. Ein hohes Open Interest signalisiert dauerhaftes Marktinteresse an einer Serie, während ein hohes Volumen die aktuelle Handelsaktivität abbildet. Optionen mit niedrigen Werten in beiden Spalten lassen sich häufig nur zu ungünstigen Preisen handeln, weil kaum Gegenparteien vorhanden sind. Die folgende Beispielzeile zeigt, wie sich diese Angaben in der Optionskette lesen lassen.</p>

<table class="data-table">
    <thead>
        <tr>
            <th>Strike (Call)</th>
            <th>Bid</th>
            <th>Ask</th>
            <th>Open Interest</th>
            <th>Volumen</th>
            <th>Moneyness</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>95 €</strong></td>
            <td>6,80 €</td>
            <td>7,00 €</td>
            <td>3.200</td>
            <td>540</td>
            <td>ITM</td>
        </tr>
        <tr>
            <td><strong>100 €</strong></td>
            <td>3,10 €</td>
            <td>3,25 €</td>
            <td>8.500</td>
            <td>1.900</td>
            <td>ATM</td>
        </tr>
        <tr>
            <td><strong>105 €</strong></td>
            <td>1,15 €</td>
            <td>1,25 €</td>
            <td>5.400</td>
            <td>1.100</td>
            <td>OTM</td>
        </tr>
    </tbody>
</table>

<p>Angenommen, der Basiswert notiert in diesem fiktiven Beispiel bei rund 100&nbsp;€. Dann ist der 95er-Call im Geld, der 100er-Call ungefähr am Geld und der 105er-Call aus dem Geld. Man erkennt: Je tiefer eine Option im Geld liegt, desto höher ist ihr Preis. Der 100er-Strike weist zugleich den engsten Spread sowie das höchste Open Interest und Volumen auf – ein typisches Muster, da Optionen nahe am Geld meist am aktivsten gehandelt werden. Alle Werte sind frei gewählte Beispielwerte zur Veranschaulichung.</p>

<h3 id="auswahl">Die passende Option finden</h3>

<p>Aus den bisherigen Bausteinen ergibt sich ein strukturiertes Vorgehen, mit dem Sie sich durch die Optionskette arbeiten können:</p>

<ul>
    <li><strong>Verfall wählen:</strong> Zunächst legen Sie den Zeithorizont fest. Kürzere Laufzeiten reagieren empfindlicher auf den Zeitwertverfall, längere Laufzeiten sind teurer, geben der Erwartung aber mehr Zeit.</li>
    <li><strong>Moneyness eingrenzen:</strong> Anschließend entscheiden Sie, ob eine Option im, am oder aus dem Geld zu Ihrem Vorhaben passt. Das bestimmt das Verhältnis von Preis und Reaktionsstärke.</li>
    <li><strong>Liquidität prüfen:</strong> Erst dann lohnt der Blick auf Spread, Open Interest und Volumen, um Optionen mit ungünstiger Handelbarkeit auszusortieren.</li>
</ul>

<p>Als zusätzliche Orientierung dient das <span class="key-term">Delta</span>, das viele Plattformen ebenfalls in der Optionskette anzeigen. Es lässt sich näherungsweise als Wahrscheinlichkeit interpretieren, mit der eine Option im Geld verfällt, und verknüpft damit Strike-Wahl und Risikoeinschätzung. Wie das Delta und die übrigen Kennzahlen zusammenwirken, erläutert der Beitrag <a href="/optionsgriechen-delta-gamma-theta-vega.html">Die Optionsgriechen verstehen</a> im Detail.</p>

<div class="warning-box">
    <h4>Häufige Stolperfalle</h4>
    <p>Ein niedriger Optionspreis bedeutet nicht automatisch „günstig". Weit aus dem Geld liegende Optionen sind oft billig, weil ihre Chance auf einen Wert bei Verfall gering ist. Der Preis in der Optionskette spiegelt stets die vom Markt eingeschätzten Wahrscheinlichkeiten wider – ein niedriger Preis ist meist ein Hinweis auf ein geringeres Eintrittsrisiko, keine Schnäppchengelegenheit.</p>
</div>

<p>Welche Konstellation aus Verfall, Strike und Liquidität sinnvoll ist, hängt von der jeweiligen Strategie ab. Einen Überblick, wie sich einzelne Optionen zu vollständigen Ansätzen zusammensetzen lassen, bietet der Artikel <a href="/optionsstrategien-einsteiger.html">Optionsstrategien für Einsteiger</a>.</p>

<h3 id="fazit">Fazit</h3>

<p>Die Optionskette ist kein Zahlenchaos, sondern eine klar geordnete Landkarte des Optionsmarkts für einen Basiswert. Wer die Struktur kennt – Calls links, Puts rechts, Strikes in der Mitte – und die Spalten Bid, Ask, Open Interest und Volumen richtig deutet, kann Optionen systematisch vergleichen und die Handelbarkeit einschätzen. Die Kette liefert dabei Fakten, keine Empfehlungen: Sie zeigt Preise und Liquidität, die Einordnung bleibt Aufgabe eines durchdachten Vorgehens. Eine Übersicht aller hier verwendeten Fachbegriffe finden Sie im <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3>Quellen &amp; weiterführende Literatur</h3>
<ul>
    <li><a href="https://www.optionseducation.org" target="_blank" rel="noopener">The Options Industry Council (OIC) – Options Education</a></li>
    <li><a href="https://www.cboe.com" target="_blank" rel="noopener">Cboe Global Markets – Options Education</a></li>
    <li>John C. Hull: „Options, Futures, and Other Derivatives", Pearson.</li>
</ul>
