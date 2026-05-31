---
layout: layouts/blog-post.njk
pageTitle: "Covered Call: Zusatzerträge mit bestehenden Aktien"
subtitle: "Wie Sie mit Aktien, die Sie ohnehin besitzen, regelmäßige Prämieneinnahmen erzielen können."
description: "Covered Call einfach erklärt: Funktionsweise, ein Rechenbeispiel, Chancen und Risiken sowie die Wahl des richtigen Strikes – verständlich für Einsteiger."
date: 2026-05-31
category: "Strategie"
tags: ["Strategie", "Einnahmen"]
permalink: /covered-call-strategie.html
summary: "Bei einem Covered Call verkaufen Sie einen Call auf eine bereits im Depot gehaltene Aktie und erhalten dafür eine Prämie. Die Strategie erzeugt Zusatzerträge, begrenzt im Gegenzug aber das Gewinnpotenzial nach oben."
faq:
  - q: "Was ist ein Covered Call?"
    a: "Ein Covered Call ist der Verkauf einer Call-Option auf eine Aktie, die man bereits besitzt. Der Verkäufer erhält dafür eine Prämie und verpflichtet sich, die Aktie zum Strike-Preis zu liefern, falls die Option ausgeübt wird."
  - q: "Welche Risiken hat ein Covered Call?"
    a: "Das Aufwärtspotenzial ist auf den Strike-Preis plus Prämie begrenzt, während das Abwärtsrisiko der Aktie bestehen bleibt und nur um die erhaltene Prämie gemindert wird. Die Prämie bietet also einen kleinen Puffer, aber keinen echten Schutz vor größeren Kursverlusten."
  - q: "Für wen eignet sich die Covered-Call-Strategie?"
    a: "Sie passt zu Anlegern mit einer neutralen bis leicht steigenden Erwartung für eine Aktie, die sie ohnehin halten möchten. Wer mit stark steigenden Kursen rechnet, schränkt seine Gewinne durch den Covered Call ein."
---

<p>Der <span class="key-term">Covered Call</span> gehört zu den bekanntesten Einkommensstrategien im Optionshandel – und zu den wenigen, die sich auch für Einsteiger eignen. Die Grundidee: Sie verkaufen eine Kaufoption auf Aktien, die Sie ohnehin im Depot halten, und kassieren dafür eine Prämie. In diesem Artikel erfahren Sie, wie ein Covered Call funktioniert, wo seine Chancen und Grenzen liegen und worauf Sie bei der Auswahl achten sollten.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken bis hin zum Totalverlust des eingesetzten Kapitals. Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. Konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#was-ist">Was ist ein Covered Call?</a></li>
        <li><a href="#beispiel">Ein Rechenbeispiel</a></li>
        <li><a href="#chancen-risiken">Chancen und Risiken</a></li>
        <li><a href="#strike">Den richtigen Strike wählen</a></li>
        <li><a href="#eignung">Für wen sich die Strategie eignet</a></li>
    </ol>
</div>

<h3 id="was-ist">Was ist ein Covered Call?</h3>

<p>Bei einem Covered Call verkaufen Sie eine <span class="key-term">Call-Option</span> auf eine Aktie, die sich bereits in Ihrem Depot befindet. „Covered" (gedeckt) bedeutet genau das: Im Gegensatz zum Verkauf eines ungedeckten Calls liegt der Basiswert tatsächlich bei Ihnen – Sie könnten also jederzeit liefern. Als Verkäufer der Option nehmen Sie die Rolle des <span class="key-term">Stillhalter</span>s ein und erhalten dafür sofort eine <span class="key-term">Premium</span> (Optionsprämie) gutgeschrieben.</p>

<p>Im Gegenzug gehen Sie eine Verpflichtung ein: Steigt der Aktienkurs über den vereinbarten <span class="key-term">Strike-Preis</span>, kann der Käufer der Option sein Recht ausüben. In diesem Fall müssen Sie Ihre Aktien zum Strike verkaufen – man spricht von <span class="key-term">Assignment</span> (Zuteilung). Üblicherweise bezieht sich ein Optionskontrakt auf 100 Aktien.</p>

<h3 id="beispiel">Ein Rechenbeispiel</h3>

<p>Angenommen, Sie besitzen 100 Aktien eines Unternehmens, die aktuell bei 50&nbsp;€ notieren. Sie verkaufen einen Call mit einem Strike von 55&nbsp;€ und einer Laufzeit von einem Monat und erhalten dafür eine Prämie von 1,50&nbsp;€ je Aktie, also 150&nbsp;€ pro Kontrakt. Der gewählte Strike liegt <span class="key-term">Out-of-the-Money (OTM)</span>, also über dem aktuellen Kurs.</p>

<table class="data-table">
    <thead>
        <tr>
            <th>Szenario bei Verfall</th>
            <th>Was passiert</th>
            <th>Ergebnis</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Kurs unter 55&nbsp;€</strong></td>
            <td>Option verfällt wertlos, Sie behalten die Aktien</td>
            <td>Prämie 150&nbsp;€ bleibt als Ertrag</td>
        </tr>
        <tr>
            <td><strong>Kurs genau 55&nbsp;€</strong></td>
            <td>Option am Geld, Zuteilung möglich</td>
            <td>Prämie plus Kursgewinn bis 55&nbsp;€</td>
        </tr>
        <tr>
            <td><strong>Kurs über 55&nbsp;€</strong></td>
            <td>Aktien werden zu 55&nbsp;€ abgerufen</td>
            <td>Gewinn auf 55&nbsp;€ + Prämie begrenzt</td>
        </tr>
    </tbody>
</table>

<p>Bleibt der Kurs unter dem Strike, verfällt die Option wertlos und die Prämie ist Ihr Gewinn – Sie können den Vorgang im nächsten Monat wiederholen. Steigt der Kurs dagegen kräftig, verkaufen Sie Ihre Aktien zu 55&nbsp;€, auch wenn sie inzwischen mehr wert wären. Ihr maximaler Gewinn ergibt sich in diesem Fall aus dem Kursanstieg bis zum Strike (5&nbsp;€) plus der Prämie (1,50&nbsp;€).</p>

<h3 id="chancen-risiken">Chancen und Risiken</h3>

<div class="strategy-box">
    <h4>Chancen</h4>
    <p>Der Covered Call erzeugt laufende Einnahmen aus einem bestehenden Aktienbestand. Die vereinnahmte Prämie verbessert die Rendite in Seitwärts- und leicht steigenden Märkten und mindert den Einstandspreis Ihrer Position. Ein Teil der Erträge stammt dabei aus dem <span class="key-term">Zeitwert</span> der Option, der bis zum Verfall kontinuierlich abnimmt – zugunsten des Stillhalters.</p>
</div>

<div class="strategy-box">
    <h4>Risiken</h4>
    <p>Das Aufwärtspotenzial ist gedeckelt: Steigt die Aktie stark, entgeht Ihnen der Gewinn oberhalb des Strikes. Das Abwärtsrisiko der Aktie bleibt dagegen bestehen und wird lediglich um die Prämie reduziert. Der Covered Call ist also <strong>kein Absicherungsinstrument</strong> – fällt der Kurs deutlich, bietet die Prämie nur einen kleinen Puffer.</p>
</div>

<div class="tip-box">
    <h4>Gut zu wissen</h4>
    <p>Eine hohe <span class="key-term">Implizite Volatilität</span> lässt Optionsprämien steigen. Phasen erhöhter Unsicherheit können daher attraktivere Prämien bieten – allerdings spiegeln sie auch ein größeres erwartetes Schwankungsrisiko der Aktie wider.</p>
</div>

<h3 id="strike">Den richtigen Strike wählen</h3>

<p>Die Wahl des Strikes bestimmt das Verhältnis von Prämie und Wahrscheinlichkeit einer Zuteilung:</p>

<ul>
    <li><strong>Weiter <span class="key-term">Out-of-the-Money (OTM)</span>:</strong> geringere Prämie, dafür mehr Spielraum für Kursgewinne und eine niedrigere Wahrscheinlichkeit, dass die Aktien abgerufen werden.</li>
    <li><strong>Nahe am Geld (<span class="key-term">At-the-Money (ATM)</span>):</strong> höhere Prämie, aber das Aufwärtspotenzial ist eng begrenzt und die Zuteilungswahrscheinlichkeit steigt.</li>
    <li><strong><span class="key-term">In-the-Money (ITM)</span>:</strong> höchste Prämie und ein gewisser Abwärtspuffer, jedoch sehr wahrscheinliche Zuteilung.</li>
</ul>

<p>Eine Orientierung bietet das <span class="key-term">Delta</span> der Option: Es lässt sich näherungsweise als Wahrscheinlichkeit interpretieren, mit der die Option im Geld verfällt. Ein niedrigeres Delta steht somit tendenziell für eine geringere Zuteilungswahrscheinlichkeit. Wie stark Optionspreise auf Schwankungen reagieren, lesen Sie vertiefend im Artikel <a href="volatilitaet-verstehen.html">Volatilität verstehen</a>.</p>

<div class="callout">
    <strong>Praxis-Hinweis:</strong> Verkaufen Sie nur so viele Calls, wie Sie tatsächlich Aktien halten (je Kontrakt 100 Stück). Andernfalls wäre ein Teil der Position ungedeckt – mit deutlich höherem Risiko.
</div>

<h3 id="eignung">Für wen sich die Strategie eignet</h3>

<p>Der Covered Call passt zu Anlegern mit einer neutralen bis leicht bullischen Erwartung für eine Aktie, die sie ohnehin halten möchten. Wer dagegen mit stark steigenden Kursen rechnet, beschneidet sein Gewinnpotenzial unnötig. Und wer einen deutlichen Kursrückgang befürchtet, sollte bedenken, dass der Covered Call keinen echten Schutz bietet.</p>

<p>Eng verwandt ist der <span class="key-term">Cash-Secured Put</span>, bei dem Sie umgekehrt einen Put verkaufen, um eine Aktie günstiger einzusteigen. Werden beide Bausteine kombiniert und wiederholt, entsteht die <span class="key-term">Wheel-Strategie</span>. Grundlagen weiterer Einsteigerstrategien finden Sie im Beitrag <a href="optionsstrategien-einsteiger.html">Optionsstrategien für Einsteiger</a>.</p>

<h3>Fazit</h3>

<p>Der Covered Call ist eine zugängliche Möglichkeit, aus einem bestehenden Aktienbestand laufende Erträge zu erzielen. Er belohnt Geduld in ruhigen Märkten, deckelt aber den Gewinn bei starken Kursanstiegen und ersetzt kein <a href="risikomanagement-optionshandel.html">durchdachtes Risikomanagement</a>. Wie immer im Optionshandel gilt: Verstehen Sie die Verpflichtung, die Sie eingehen, bevor Sie eine Position eröffnen. Eine Übersicht aller hier verwendeten Fachbegriffe finden Sie im <a href="/glossar.html">Optionen-Glossar</a>.</p>
