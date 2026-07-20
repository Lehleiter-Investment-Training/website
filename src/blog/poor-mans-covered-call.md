---
layout: layouts/blog-post.njk
pageTitle: "Poor Man's Covered Call: Der kapitaleffiziente Covered Call"
subtitle: "Wie eine langlaufende LEAPS-Option die Aktienposition ersetzt – und was das gegenüber dem klassischen Covered Call verändert."
description: "Poor Man's Covered Call einfach erklärt: Wie eine LEAPS-Option die Aktie ersetzt, welche Chancen und Risiken der kapitaleffiziente Covered Call bietet."
date: 2026-06-26
category: "Strategie"
tags: ["Strategie", "Einnahmen"]
permalink: /poor-mans-covered-call.html
summary: "Beim Poor Man's Covered Call ersetzen Sie die 100 Aktien durch einen langlaufenden, tief im Geld liegenden LEAPS-Call und verkaufen wiederholt kurzlaufende Calls dagegen. Das senkt den Kapitaleinsatz deutlich, bringt aber Zeitwertverfall, entgangene Dividenden und Hebelrisiken mit sich."
faq:
  - q: "Was ist ein Poor Man's Covered Call?"
    a: "Ein Poor Man's Covered Call ist ein Diagonal Call Spread: Sie kaufen einen langlaufenden, tief im Geld liegenden LEAPS-Call als Aktienersatz und verkaufen wiederholt kurzlaufende Calls mit höherem Strike dagegen, um Prämien zu vereinnahmen."
  - q: "Worin unterscheidet sich der Poor Man's Covered Call vom klassischen Covered Call?"
    a: "Statt 100 echter Aktien dient ein LEAPS-Call als Basis, wodurch deutlich weniger Kapital gebunden wird. Im Gegenzug verfällt der Zeitwert des LEAPS, es fließen keine Dividenden und der Hebel verstärkt Gewinne wie Verluste."
  - q: "Welche Risiken hat der Poor Man's Covered Call?"
    a: "Der LEAPS verliert über die Zeit an Zeitwert, ein starker Kursrückgang kann den Hebel gegen die Position wirken lassen, und ein tief ins Geld gelaufener kurzer Call kann eine Zuteilung auslösen, die aktiv gemanagt werden muss."
---

<p>Der <strong>Poor Man's Covered Call</strong> verspricht das Erfolgsprinzip des klassischen Covered Call – laufende Prämieneinnahmen –, aber mit einem deutlich geringeren Kapitaleinsatz. Der Trick: Statt 100 echter Aktien dient eine langlaufende Option als Basis. In diesem Artikel erfahren Sie, wie der Poor Man's Covered Call funktioniert, warum eine LEAPS-Option die Aktienposition ersetzt und welche Chancen und Risiken das gegenüber dem klassischen Ansatz mit sich bringt.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken bis hin zum Totalverlust des eingesetzten Kapitals. Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. Konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#was-ist">Was ist ein Poor Man's Covered Call?</a></li>
        <li><a href="#leaps">Die LEAPS-Option als Aktienersatz</a></li>
        <li><a href="#vergleich">Kapitaleinsatz im Vergleich</a></li>
        <li><a href="#chancen-risiken">Chancen und Risiken</a></li>
        <li><a href="#auswahl">Worauf es bei der Auswahl ankommt</a></li>
        <li><a href="#eignung">Für wen sich die Strategie eignet</a></li>
    </ol>
</div>

<figure class="blog-figure">
    <img src="/blog/figures/poor-mans-covered-call.svg" alt="Aufbau des Poor Man's Covered Call: langlaufender, tief im Geld liegender LEAPS-Call als Basis, dagegen wiederholt verkaufte kurzlaufende Calls mit höherem Strike." width="680" height="400" loading="lazy">
    <figcaption>Aufbau des Poor Man's Covered Call: ein langlaufender, tief im Geld liegender LEAPS-Call ersetzt die Aktie, kurzlaufende Calls werden wiederholt dagegen verkauft.</figcaption>
</figure>

<h3 id="was-ist">Was ist ein Poor Man's Covered Call?</h3>

<p>Der Poor Man's Covered Call ist fachlich ein <strong>Diagonal Call Spread</strong>: eine Kombination aus zwei <span class="key-term">Call-Option</span>en mit unterschiedlichem Verfall und unterschiedlichem Strike. Sie kaufen einen langlaufenden, tief im Geld liegenden Call und verkaufen dagegen wiederholt einen kurzlaufenden Call mit höherem Strike. Der Name spielt darauf an, dass Sie den Effekt eines <span class="key-term">Covered Call</span> nachbilden, ohne die 100 Aktien tatsächlich kaufen zu müssen.</p>

<p>Beim klassischen Covered Call halten Sie die Aktie und verkaufen einen Call darauf. Beim Poor Man's Covered Call übernimmt der langlaufende Call die Rolle der Aktie. Da er nur einen Bruchteil des Aktienwerts kostet, binden Sie deutlich weniger Kapital – der Preis dafür sind zusätzliche Eigenheiten, die eine echte Aktienposition nicht kennt.</p>

<h3 id="leaps">Die LEAPS-Option als Aktienersatz</h3>

<p>Als Basis dient typischerweise ein <span class="key-term">LEAPS</span>-Call – eine Option mit einer Laufzeit von mehr als einem Jahr. Damit dieser Call sich möglichst wie die Aktie selbst verhält, wählt man ihn tief <span class="key-term">In-the-Money (ITM)</span>, also mit einem <span class="key-term">Strike-Preis</span> deutlich unter dem aktuellen Kurs.</p>

<p>Der Grund liegt im <span class="key-term">Delta</span>: Ein tief im Geld liegender Call hat ein Delta nahe 1, oft im Bereich von etwa 0,80 bis 0,90. Das bedeutet, dass er nahezu im Gleichschritt mit der Aktie steigt und fällt. Zugleich besteht ein solcher Call überwiegend aus innerem Wert und nur zu einem kleinen Teil aus <span class="key-term">Zeitwert</span>, der bis zum Verfall verloren geht. Genau dieser geringe Zeitwertanteil bei hohem Delta macht den LEAPS zu einem brauchbaren, kapitalschonenden Aktienersatz.</p>

<p>Weil der Call nur einen Teil des Aktienpreises kostet, entsteht ein Hebel: Die eingesetzte Summe steuert einen größeren Gegenwert. Diese <span class="key-term">Leverage</span> verstärkt Gewinne – aber ebenso Verluste. Mehr zum Wertverfall über die Zeit lesen Sie im Beitrag <a href="/theta-zeitwertverfall.html">Theta und Zeitwertverfall</a>.</p>

<h3 id="vergleich">Kapitaleinsatz im Vergleich</h3>

<p>Die folgenden Zahlen sind rein illustrativ und dienen ausschließlich dem Lernzweck. Angenommen, eine Aktie notiert bei 100&nbsp;€. Für den klassischen Covered Call kauften Sie 100 Aktien für rund 10.000&nbsp;€. Für den Poor Man's Covered Call kauften Sie stattdessen einen LEAPS-Call mit Strike 80&nbsp;€ und rund einem Jahr Laufzeit, der in diesem Beispiel etwa 25&nbsp;€ je Aktie – also 2.500&nbsp;€ – kostet. In beiden Fällen verkaufen Sie anschließend einen kurzlaufenden Call mit Strike 105&nbsp;€.</p>

<table class="data-table">
    <thead>
        <tr>
            <th>Merkmal</th>
            <th>Klassischer Covered Call</th>
            <th>Poor Man's Covered Call</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Basis</strong></td>
            <td>100 echte Aktien</td>
            <td>Langlaufender ITM-Call (LEAPS)</td>
        </tr>
        <tr>
            <td><strong>Kapitaleinsatz (Beispiel)</strong></td>
            <td>ca. 10.000&nbsp;€</td>
            <td>ca. 2.500&nbsp;€</td>
        </tr>
        <tr>
            <td><strong>Dividenden</strong></td>
            <td>fließen Ihnen zu</td>
            <td>fließen Ihnen nicht zu</td>
        </tr>
        <tr>
            <td><strong>Zeitwertverfall der Basis</strong></td>
            <td>keiner (Aktie verfällt nicht)</td>
            <td>LEAPS verliert laufend Zeitwert</td>
        </tr>
        <tr>
            <td><strong>Maximales Abwärtsrisiko</strong></td>
            <td>Kursverfall bis auf 0&nbsp;€ (abzügl. Prämien)</td>
            <td>Verlust des LEAPS-Einsatzes (abzügl. Prämien)</td>
        </tr>
    </tbody>
</table>

<p>Im Beispiel binden Sie also nur rund ein Viertel des Kapitals. Diese Effizienz ist der Hauptreiz der Strategie – sie ist zugleich die Quelle der zusätzlichen Risiken, die im nächsten Abschnitt folgen.</p>

<h3 id="chancen-risiken">Chancen und Risiken</h3>

<div class="strategy-box">
    <h4>Chancen</h4>
    <p>Der geringere Kapitaleinsatz erhöht die Kapitaleffizienz: Bezogen auf das eingesetzte Kapital können die vereinnahmten Prämien der kurzen Calls stärker ins Gewicht fallen als beim klassischen Covered Call. Wie dort profitieren Sie in ruhigen und leicht steigenden Märkten vom Zeitwertverfall der verkauften Optionen, der dem Verkäufer zugutekommt.</p>
</div>

<div class="warning-box">
    <h4>Risiken</h4>
    <p>Der Hebel wirkt in beide Richtungen: Fällt der Kurs deutlich, verliert der LEAPS prozentual stärker an Wert als die Aktie – im Extremfall bis zum Totalverlust des eingesetzten Betrags. Anders als die Aktie verfällt der LEAPS zudem, sein Zeitwert schwindet mit der Zeit. Auch Dividenden entgehen Ihnen, da Sie die Aktie nicht besitzen. Ein durchdachtes Risikomanagement ist deshalb unverzichtbar.</p>
</div>

<div class="tip-box">
    <h4>Gut zu wissen</h4>
    <p>Läuft der kurze Call tief ins Geld, kann es zu einer vorzeitigen Zuteilung kommen. Sie müssten dann liefern – ohne die Aktien zu besitzen. In der Praxis würde man den kurzen Call in einem solchen Fall meist vorher schließen oder rollen, statt den LEAPS auszuüben. Da es sich strukturell um einen Debit-Spread handelt, kann der Vergleich <a href="/credit-spread-vs-debit-spread.html">Credit Spread vs. Debit Spread</a> das Chancen-Risiko-Profil weiter einordnen.</p>
</div>

<h3 id="auswahl">Worauf es bei der Auswahl ankommt</h3>

<p>Zwei Stellschrauben prägen den Poor Man's Covered Call besonders:</p>

<ul>
    <li><strong>Der lange LEAPS:</strong> je tiefer im Geld und je höher das Delta, desto näher verhält sich der Call an der Aktie und desto geringer ist der Zeitwertanteil, der verfallen kann. Das erhöht allerdings den Kapitaleinsatz.</li>
    <li><strong>Der kurze Call:</strong> Er wird kurzlaufend und über dem aktuellen Kurs verkauft. Als Orientierung gilt, dass der vereinnahmte Prämienstrom den laufenden Zeitwertverlust des LEAPS über die Zeit ausgleichen sollte.</li>
</ul>

<div class="callout">
    <strong>Praxis-Hinweis:</strong> Ein häufig genannter Grundsatz lautet, den Strike des kurzen Calls nicht unterhalb der Summe aus LEAPS-Strike und gezahltem Nettobetrag zu wählen. Andernfalls könnte eine Zuteilung dazu führen, dass die Position rechnerisch unter ihren Kosten geschlossen wird.
</div>

<h3 id="eignung">Für wen sich die Strategie eignet</h3>

<p>Der Poor Man's Covered Call setzt tendenziell mehr Erfahrung voraus als der klassische Covered Call, weil zwei Laufzeiten, der Zeitwertverfall des LEAPS und die Zuteilungsmechanik zusammenspielen. Er könnte für Anleger interessant sein, die eine neutrale bis leicht steigende Erwartung haben und den Kapitaleinsatz einer vollen Aktienposition scheuen. Wer dagegen Wert auf Dividenden legt, eine echte Aktienposition langfristig halten möchte oder einen deutlichen Kursrückgang für möglich hält, dürfte mit dem klassischen Ansatz besser bedient sein.</p>

<h3>Fazit</h3>

<p>Der Poor Man's Covered Call bildet den bekannten <a href="/covered-call-strategie.html">Covered Call</a> mit einer LEAPS-Option statt echter Aktien nach und senkt so den Kapitaleinsatz erheblich. Diese Effizienz erkauft man sich jedoch mit Zeitwertverfall des LEAPS, entgangenen Dividenden, einem Hebel in beide Richtungen und einer anspruchsvolleren Verwaltung des kurzen Calls. Wer die zugrunde liegende Mechanik – Delta, Zeitwert und Zuteilung – verstanden hat, kann die Strategie fundiert einordnen. Eine Übersicht aller hier verwendeten Fachbegriffe finden Sie im <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3>Quellen &amp; weiterführende Literatur</h3>
<ul>
    <li><a href="https://www.optionseducation.org" target="_blank" rel="noopener">The Options Industry Council (OIC) – Options Education</a></li>
    <li><a href="https://www.cboe.com" target="_blank" rel="noopener">Cboe Global Markets – Options Education</a></li>
    <li>John C. Hull: „Options, Futures, and Other Derivatives", Pearson.</li>
</ul>
