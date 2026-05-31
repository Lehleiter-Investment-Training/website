---
layout: layouts/blog-post.njk
pageTitle: "Credit Spread vs. Debit Spread: Der Unterschied"
subtitle: "Prämie kassieren oder zahlen – welche Spread-Variante passt zu Ihrer Markterwartung?"
description: "Credit Spread vs. Debit Spread kompakt erklärt: Funktionsweise, Beispiele, Chancen und Risiken – damit Sie die richtige Spread-Strategie wählen."
date: 2026-02-16
category: "Strategie"
tags: ["Strategie", "Spreads"]
permalink: /credit-spread-vs-debit-spread.html
summary: "Bei einem Debit Spread zahlen Sie eine Nettoprämie und erwerben ein Recht mit begrenztem Gewinnpotenzial; beim Credit Spread vereinnahmen Sie eine Nettoprämie und gehen eine begrenzte Verpflichtung ein. Beide Strukturen bieten definiertes Risiko und definierten maximalen Gewinn."
faq:
  - q: "Was ist der Hauptunterschied zwischen Credit Spread und Debit Spread?"
    a: "Beim Debit Spread zahlen Sie netto eine Prämie, um von einer Kursbewegung in eine bestimmte Richtung zu profitieren. Beim Credit Spread vereinnahmen Sie netto eine Prämie und profitieren davon, dass sich der Markt innerhalb eines bestimmten Bereichs bewegt oder sich gegen die Richtung der verkauften Option entwickelt."
  - q: "Welche Spread-Strategie ist für Einsteiger besser geeignet?"
    a: "Beide Strukturen eignen sich für Einsteiger, weil das maximale Verlustrisiko von vornherein begrenzt ist. Debit Spreads sind oft einfacher zu verstehen, weil Sie ähnlich einer Long-Option auf eine Kursbewegung setzen. Credit Spreads erfordern ein gutes Verständnis des Zeitwertverfalls und der impliziten Volatilität."
  - q: "Kann ich mit einem Credit Spread mehr verlieren als eingesetzt?"
    a: "Nein. Der maximale Verlust eines Credit Spreads ist auf die Differenz der Strike-Preise abzüglich der vereinnahmten Prämie begrenzt und wird beim Eröffnen der Position berechnet. Es handelt sich um ein klar definiertes Risikoprofil – ein wesentlicher Vorteil gegenüber dem ungedeckten Optionsverkauf."
---

<p>Der Begriff <span class="key-term">Credit Spread</span> taucht in vielen Einführungen zum Optionshandel auf – doch der Unterschied zum <span class="key-term">Debit Spread</span> ist nicht immer auf den ersten Blick klar. Beide Strukturen gehören zur Familie der <span class="key-term">Vertical Spread</span>s: Sie kombinieren zwei Optionen desselben Typs (Call oder Put) auf denselben Basiswert mit denselben Verfallsdaten, aber unterschiedlichen <span class="key-term">Strike-Preis</span>en. Was sie trennt, ist die Richtung des Geldstroms – und damit das gesamte Risiko-Rendite-Profil.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken bis hin zum Totalverlust des eingesetzten Kapitals. Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. Konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#vertical-spreads">Was ist ein vertikaler Spread?</a></li>
        <li><a href="#debit-spread">Debit Spread: Prämie zahlen, Richtung handeln</a></li>
        <li><a href="#credit-spread">Credit Spread: Prämie vereinnahmen, Zeitwert nutzen</a></li>
        <li><a href="#gegenueberstellung">Gegenüberstellung: Credit vs. Debit</a></li>
        <li><a href="#wann-was">Wann eignet sich welche Variante?</a></li>
        <li><a href="#fazit">Fazit</a></li>
    </ol>
</div>

<h3 id="vertical-spreads">Was ist ein vertikaler Spread?</h3>

<p>Ein vertikaler Spread besteht aus dem gleichzeitigen Kauf und Verkauf zweier Optionen gleichen Typs (beide Calls oder beide Puts) auf denselben Basiswert mit demselben Verfalldatum, aber unterschiedlichen Strike-Preisen. Das Wort „vertikal" bezieht sich auf die Darstellung in einer Optionskette, in der höhere Strikes senkrecht übereinander angeordnet sind.</p>

<p>Das Kernmerkmal aller vertikalen Spreads: Sowohl der maximale Gewinn als auch der maximale Verlust sind von Beginn an klar definiert. Diese Eigenschaft macht sie zu einem beliebten Werkzeug für Händlerinnen und Händler, die ihr Risiko präzise steuern möchten. Eine Einführung in weitere Grundstrategien finden Sie im Artikel <a href="/optionsstrategien-einsteiger.html">Optionsstrategien für Einsteiger</a>.</p>

<div class="tip-box">
    <h4>Gut zu wissen</h4>
    <p>Vertikale Spreads gehören zu den kapitaleffizientesten Optionsstrategien für gerichtete Handelsentscheidungen, weil die gekaufte Option den maximalen Verlust begrenzt – ohne zusätzlichen Kapitalaufwand für eine volle Long-Position.</p>
</div>

<h3 id="debit-spread">Debit Spread: Prämie zahlen, Richtung handeln</h3>

<p>Beim Debit Spread kaufen Sie eine Option mit einem Strike näher am aktuellen Kurs und verkaufen gleichzeitig eine Option mit einem weiter entfernten Strike. Die gekaufte Option ist teurer als die verkaufte – Sie zahlen also netto eine <span class="key-term">Premium</span> (Nettodebit). Der Erlös aus dem Verkauf der zweiten Option verbilligt den Einstieg, begrenzt aber gleichzeitig den maximalen Gewinn.</p>

<p>Die beiden häufigsten Varianten sind:</p>

<ul>
    <li><strong><span class="key-term">Bull Call Spread</span>:</strong> Kauf eines Calls mit niedrigerem Strike, Verkauf eines Calls mit höherem Strike. Profitiert von steigenden Kursen. Der maximale Gewinn ergibt sich aus der Differenz der Strikes abzüglich des gezahlten Debits.</li>
    <li><strong><span class="key-term">Bear Put Spread</span>:</strong> Kauf eines Puts mit höherem Strike, Verkauf eines Puts mit niedrigerem Strike. Profitiert von fallenden Kursen. Auch hier ist der maximale Gewinn auf die Strike-Differenz minus Debit begrenzt.</li>
</ul>

<h4>Fiktives Rechenbeispiel – Bull Call Spread</h4>

<p>Angenommen, eine Aktie notiert bei 100&nbsp;€. Sie kaufen einen Call mit Strike 100&nbsp;€ für 4,00&nbsp;€ und verkaufen gleichzeitig einen Call mit Strike 110&nbsp;€ für 1,50&nbsp;€. Der Nettodebit beträgt 2,50&nbsp;€ je Aktie (= 250&nbsp;€ pro Kontrakt). Der maximale Verlust ist auf diesen Debit begrenzt; der maximale Gewinn beträgt 10,00&nbsp;€ − 2,50&nbsp;€ = 7,50&nbsp;€ je Aktie (750&nbsp;€), wenn die Aktie bei Verfall über 110&nbsp;€ notiert. Diese Zahlen dienen ausschließlich der Veranschaulichung.</p>

<p>Für einen Debit Spread spricht die Marktbewegung: Steigt (oder fällt) der Kurs stark genug in die erwartete Richtung, ist der maximale Gewinn realisierbar. Der Zeitwertverfall wirkt hier – anders als beim Credit Spread – tendenziell gegen Sie, weil die teurere Long-Option schneller an Zeitwert verliert als die günstigere Short-Option.</p>

<h3 id="credit-spread">Credit Spread: Prämie vereinnahmen, Zeitwert nutzen</h3>

<p>Beim Credit Spread verkaufen Sie die teurere Option (näher am Geld) und kaufen gleichzeitig die günstigere Option (weiter aus dem Geld) als Absicherung. Die eingenommene Prämie ist höher als die gezahlte – Sie erhalten also netto einen Kredit (Nettokreditprämie). Der Kauf der weiteren Option begrenzt den maximalen Verlust.</p>

<p>Die gebräuchlichsten Varianten sind:</p>

<ul>
    <li><strong>Bull Put Spread:</strong> Verkauf eines Puts mit höherem Strike, Kauf eines Puts mit niedrigerem Strike. Profitiert davon, dass der Kurs seitwärts läuft oder steigt. Der maximale Gewinn ist die vereinnahmte Nettoprämie.</li>
    <li><strong>Bear Call Spread:</strong> Verkauf eines Calls mit niedrigerem Strike, Kauf eines Calls mit höherem Strike. Profitiert davon, dass der Kurs seitwärts läuft oder fällt.</li>
</ul>

<h4>Fiktives Rechenbeispiel – Bull Put Spread</h4>

<p>Die Aktie notiert bei 100&nbsp;€. Sie verkaufen einen Put mit Strike 95&nbsp;€ für 2,00&nbsp;€ und kaufen einen Put mit Strike 90&nbsp;€ für 0,70&nbsp;€. Die Nettoprämie beträgt 1,30&nbsp;€ (= 130&nbsp;€ pro Kontrakt) – das ist zugleich der maximale Gewinn. Der maximale Verlust berechnet sich als Strike-Differenz (5,00&nbsp;€) minus Nettoprämie (1,30&nbsp;€) = 3,70&nbsp;€ (370&nbsp;€). Die Zahlen sind fiktiv und dienen nur der Veranschaulichung.</p>

<p>Für den Credit Spread arbeitet der <span class="key-term">Zeitwert</span>verfall: Mit dem Ablauf der Restlaufzeit verlieren beide Optionen an Zeitwert, die verkaufte Option jedoch mehr als die gekaufte – das kommt dem Verkäufer zugute. Gleichzeitig profitiert der Credit Spread von sinkender <span class="key-term">Implizite Volatilität</span>, weil niedrigere Volatilität die Optionsprämien drückt und das Rückkaufen der Position vergünstigt.</p>

<div class="warning-box">
    <h4>Wichtig</h4>
    <p>Obwohl Credit Spreads ein begrenztes Risikoprofil haben, können Verluste deutlich größer sein als die vereinnahmte Prämie. Das Verhältnis von Gewinnpotenzial zu Verlustrisiko sollte stets bewusst geplant werden.</p>
</div>

<h3 id="gegenueberstellung">Gegenüberstellung: Credit vs. Debit Spread</h3>

<table class="data-table">
    <thead>
        <tr>
            <th>Merkmal</th>
            <th>Debit Spread</th>
            <th>Credit Spread</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Prämienfluss</strong></td>
            <td>Nettodebit (Sie zahlen)</td>
            <td>Nettokredit (Sie erhalten)</td>
        </tr>
        <tr>
            <td><strong>Marktmeinung</strong></td>
            <td>Gerichtete Erwartung (steigend oder fallend)</td>
            <td>Neutrale bis leicht gerichtete Erwartung; Kurs soll Strike nicht überschreiten</td>
        </tr>
        <tr>
            <td><strong>Maximaler Gewinn</strong></td>
            <td>Strike-Differenz minus gezahlte Prämie</td>
            <td>Vereinnahmte Nettoprämie</td>
        </tr>
        <tr>
            <td><strong>Maximaler Verlust</strong></td>
            <td>Gezahlte Nettoprämie (Debit)</td>
            <td>Strike-Differenz minus vereinnahmte Prämie</td>
        </tr>
        <tr>
            <td><strong>Kapitalbindung</strong></td>
            <td>Debit wird sofort belastet</td>
            <td>Marginanforderung in Höhe des max. Verlusts wird hinterlegt</td>
        </tr>
        <tr>
            <td><strong>Zeitwertverfall (Theta)</strong></td>
            <td>Wirkt tendenziell gegen den Käufer</td>
            <td>Wirkt tendenziell für den Verkäufer</td>
        </tr>
        <tr>
            <td><strong>Implizite Volatilität (Vega)</strong></td>
            <td>Steigende IV tendenziell vorteilhaft</td>
            <td>Sinkende IV tendenziell vorteilhaft</td>
        </tr>
        <tr>
            <td><strong>Beispielstrategien</strong></td>
            <td>Bull Call Spread, Bear Put Spread</td>
            <td>Bull Put Spread, Bear Call Spread</td>
        </tr>
    </tbody>
</table>

<div class="callout">
    <strong>Beide Varianten bieten definiertes Risiko:</strong> Weder beim Debit Spread noch beim Credit Spread können Sie mehr verlieren als den beim Eröffnen der Position berechneten Maximalbetrag. Das unterscheidet Spreads vom ungedeckten Optionsverkauf.
</div>

<h3 id="wann-was">Wann eignet sich welche Variante?</h3>

<p>Die Wahl zwischen Debit und Credit Spread hängt in erster Linie von Ihrer Markterwartung und dem Volatilitätsumfeld ab.</p>

<div class="strategy-box">
    <h4>Debit Spread könnte passen, wenn …</h4>
    <ul>
        <li>Sie eine klare, gerichtete Markterwartung haben (deutlich steigend oder deutlich fallend).</li>
        <li>Die implizite Volatilität aktuell niedrig ist – Optionen sind dann günstiger, der Debit geringer.</li>
        <li>Sie ein begrenztes Kapital einsetzen möchten, das klar nach unten begrenzt ist.</li>
    </ul>
</div>

<div class="strategy-box">
    <h4>Credit Spread könnte passen, wenn …</h4>
    <ul>
        <li>Sie eine neutrale bis leicht gerichtete Erwartung haben und eher damit rechnen, dass ein bestimmter Strike-Bereich nicht erreicht wird.</li>
        <li>Die implizite Volatilität erhöht ist – höhere Prämien verbessern das Kredit-Einnahme-Potenzial.</li>
        <li>Sie den Zeitwertverfall aktiv für sich arbeiten lassen möchten.</li>
    </ul>
</div>

<p>Credit Spreads lassen sich auch zu komplexeren Strukturen kombinieren: Wer gleichzeitig einen Bull Put Spread und einen Bear Call Spread auf denselben Basiswert eröffnet, erhält einen <a href="/iron-condor-strategie.html">Iron Condor</a> – eine Strategie, die in Seitwärtsphasen besonders gefragt ist. Eine Erklärung aller hier verwendeten Fachbegriffe finden Sie im <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3 id="fazit">Fazit</h3>

<p>Credit Spread und Debit Spread sind zwei Seiten derselben Medaille: Beide sind vertikale Spreads mit klar definiertem Risiko und definiertem maximalen Gewinn – sie unterscheiden sich jedoch fundamental in der Richtung des Prämienstroms und darin, welche Marktkräfte für oder gegen Sie arbeiten. Der Debit Spread setzt auf eine ausgeprägte Kursbewegung; der Credit Spread setzt darauf, dass eine bestimmte Kursschwelle nicht erreicht wird, und lässt den Zeitwertverfall für sich arbeiten. Welche Variante sinnvoller erscheint, hängt von Ihrer konkreten Markterwartung, dem Volatilitätsniveau und Ihrer Risikopräferenz ab – nicht von einer pauschalen Überlegenheit einer Struktur. Grundlagen zu weiteren Einsteigerstrategien finden Sie im Beitrag <a href="/optionsstrategien-einsteiger.html">Optionsstrategien für Einsteiger</a>.</p>

<h3>Quellen &amp; weiterführende Literatur</h3>
<ul>
    <li><a href="https://www.optionseducation.org" target="_blank" rel="noopener">The Options Industry Council (OIC) – Options Education</a></li>
    <li><a href="https://www.cboe.com" target="_blank" rel="noopener">Cboe Global Markets – Options Education</a></li>
    <li>John C. Hull: „Options, Futures, and Other Derivatives", Pearson.</li>
</ul>
