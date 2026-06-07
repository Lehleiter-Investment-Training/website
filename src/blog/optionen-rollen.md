---
layout: layouts/blog-post.njk
pageTitle: "Optionen rollen: Positionen anpassen statt schließen"
subtitle: "Wie Sie eine bestehende Optionsposition in die Zukunft oder auf einen neuen Strike verschieben – und wann das sinnvoll ist."
description: "Optionen rollen einfach erklärt: was Rollen bedeutet, wann es sinnvoll ist, Roll für Credit oder Debit, ein Beispiel sowie Chancen und Risiken."
date: 2026-06-14
category: "Strategie"
tags: ["Strategie", "Positionsmanagement"]
permalink: /optionen-rollen.html
summary: "Beim Rollen schließen Sie eine bestehende Option und eröffnen gleichzeitig eine neue – meist mit späterem Verfall und/oder anderem Strike. So passen Sie eine Position an, statt sie einfach glattzustellen, etwa um mehr Zeit zu gewinnen oder eine drohende Zuteilung zu vermeiden."
faq:
  - q: "Was bedeutet es, eine Option zu rollen?"
    a: "Rollen heißt, eine bestehende Optionsposition zu schließen und gleichzeitig eine neue zu eröffnen – in der Regel mit einem späteren Verfallstag und/oder einem anderen Strike. Beide Schritte werden meist als eine kombinierte Order ausgeführt."
  - q: "Wann sollte man eine Option rollen?"
    a: "Typische Anlässe sind: kurz vor dem Verfall mehr Zeit gewinnen, eine drohende Zuteilung beim Stillhalter vermeiden oder zusätzliche Prämie vereinnahmen. Rollen sollte aber bewusst geschehen – nicht nur, um das Eingestehen eines Verlusts hinauszuzögern."
  - q: "Was ist ein Roll für Credit?"
    a: "Bringt die neu verkaufte Option mehr Prämie ein, als der Rückkauf der alten kostet, entsteht ein Netto-Guthaben (Credit). Kostet der Rückkauf mehr als die neue Prämie einbringt, ist es ein Roll für Debit, bei dem Sie unterm Strich draufzahlen."
---

<p>„Eine Option rollen" klingt nach Fortgeschrittenen-Vokabular, beschreibt aber einen einfachen Vorgang: Sie <strong>schließen eine bestehende Position und eröffnen gleichzeitig eine neue</strong>. Damit passen Sie eine Optionsposition an die veränderte Lage an, statt sie einfach glattzustellen. In diesem Artikel erfahren Sie, was Rollen genau bedeutet, wann es sinnvoll ist und worauf Sie achten sollten.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken bis hin zum Totalverlust des eingesetzten Kapitals. Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. Konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#was-ist">Was bedeutet „Rollen"?</a></li>
        <li><a href="#arten">Die wichtigsten Roll-Arten</a></li>
        <li><a href="#wann">Wann das Rollen sinnvoll ist</a></li>
        <li><a href="#beispiel">Ein Rechenbeispiel</a></li>
        <li><a href="#risiken">Chancen, Risiken und ein Warnhinweis</a></li>
    </ol>
</div>

<figure class="blog-figure">
    <img src="/blog/figures/optionen-rollen.svg" alt="Rollen einer Option: die bestehende Option zurückkaufen (schließen) und eine neue Option mit späterem Verfall und/oder neuem Strike verkaufen." width="680" height="400" loading="lazy">
    <figcaption>Rollen bedeutet: bestehende Option schließen und in einem Schritt eine neue mit späterem Verfall und/oder neuem Strike eröffnen.</figcaption>
</figure>

<h3 id="was-ist">Was bedeutet „Rollen"?</h3>

<p>Beim Rollen führen Sie zwei Transaktionen praktisch gleichzeitig aus: Sie kaufen die bestehende Option zurück (schließen sie) und verkaufen – als <span class="key-term">Stillhalter</span> – eine neue Option auf denselben Basiswert. Die neue Option hat einen späteren <span class="key-term">Expiration Date</span> und oft einen veränderten <span class="key-term">Strike-Preis</span>. Viele Broker bieten dafür eine kombinierte „Roll"-Order an, sodass beide Beine in einem Schritt ausgeführt werden.</p>

<p>Die Differenz der beiden Prämien ist entscheidend: Bringt die neue Option mehr <span class="key-term">Premium</span> ein, als der Rückkauf der alten kostet, rollen Sie „für Credit" (Netto-Guthaben). Andernfalls rollen Sie „für Debit" und zahlen unterm Strich drauf.</p>

<h3 id="arten">Die wichtigsten Roll-Arten</h3>

<ul>
    <li><strong>Rollen in der Zeit (Roll out):</strong> gleicher Strike, aber späterer Verfall. Sie verschaffen sich mehr Zeit.</li>
    <li><strong>Rollen nach oben/unten (Roll up / Roll down):</strong> gleicher Verfall, aber höherer bzw. niedrigerer Strike.</li>
    <li><strong>Diagonales Rollen (Roll out &amp; up/down):</strong> die Kombination – späterer Verfall <em>und</em> neuer Strike. In der Praxis am häufigsten.</li>
</ul>

<div class="tip-box">
    <h4>Gut zu wissen</h4>
    <p>Ein <span class="key-term">Covered Call</span>, dessen Aktie über den Strike gestiegen ist, lässt sich „nach oben und hinten" rollen, um die Aktie zu behalten und gleichzeitig erneut Prämie zu vereinnahmen. Ein <span class="key-term">Cash-Secured Put</span> lässt sich „nach unten und hinten" rollen, um eine drohende Zuteilung hinauszuzögern.</p>
</div>

<h3 id="wann">Wann das Rollen sinnvoll ist</h3>

<p>Stillhalter rollen vor allem aus diesen Gründen:</p>
<ul>
    <li><strong>Mehr Zeit gewinnen:</strong> Kurz vor dem Verfall ist vom <span class="key-term">Zeitwert</span> kaum noch etwas übrig – ein Roll in einen späteren Verfall verkauft erneut Zeitwert.</li>
    <li><strong>Zuteilung vermeiden:</strong> Droht beim Short Call oder Short Put ein <span class="key-term">Assignment</span>, kann ein Roll die Position aus dem Geld zurückverschieben. Hintergründe dazu im Artikel <a href="/assignment-und-ausuebung.html">Assignment und Ausübung</a>.</li>
    <li><strong>Zusätzliche Prämie:</strong> Ein Roll für Credit erhöht die insgesamt vereinnahmte Prämie.</li>
</ul>

<p>Warum der Zeitwert zum Verfall hin so stark abnimmt, lesen Sie im Beitrag <a href="/theta-zeitwertverfall.html">Theta &amp; Zeitwertverfall</a>.</p>

<h3 id="beispiel">Ein Rechenbeispiel</h3>

<p>Die folgenden Zahlen sind rein illustrativ.</p>

<table class="data-table">
    <thead>
        <tr>
            <th>Schritt</th>
            <th>Aktion</th>
            <th>Geldfluss</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Alte Option schließen</strong></td>
            <td>Short Call (Strike 100, baldiger Verfall) zurückkaufen</td>
            <td>−1,80&nbsp;€ je Aktie</td>
        </tr>
        <tr>
            <td><strong>Neue Option eröffnen</strong></td>
            <td>Short Call (Strike 105, späterer Verfall) verkaufen</td>
            <td>+2,40&nbsp;€ je Aktie</td>
        </tr>
        <tr>
            <td><strong>Ergebnis</strong></td>
            <td>Roll für Credit</td>
            <td>Netto +0,60&nbsp;€ je Aktie</td>
        </tr>
    </tbody>
</table>

<p>In diesem Beispiel vereinnahmen Sie zusätzlich 0,60&nbsp;€ je Aktie und heben gleichzeitig den Strike von 100 auf 105 an – Sie geben Ihrer Position also mehr Luft nach oben <span class="key-term">Out-of-the-Money (OTM)</span> und mehr Zeit.</p>

<h3 id="risiken">Chancen, Risiken und ein Warnhinweis</h3>

<div class="strategy-box">
    <h4>Chancen</h4>
    <p>Rollen ist ein flexibles Werkzeug des Positionsmanagements: Sie reagieren auf Kursbewegungen, ohne die Grundidee aufzugeben, und können zusätzliche Prämie einnehmen. Gerade bei Strategien wie Covered Call und Cash-Secured Put gehört es zum Standard-Repertoire.</p>
</div>

<div class="warning-box">
    <h4>Warnhinweis: kein Allheilmittel</h4>
    <p>Rollen kann dazu verleiten, einen Verlust immer weiter in die Zukunft zu schieben, statt ihn zu akzeptieren. Wer eine verlierende Position fortlaufend rollt, bindet Kapital und vergrößert mitunter das Gesamtrisiko. Definieren Sie deshalb vorab, wann Sie rollen – und wann Sie eine Position lieber schließen. Mehr dazu im Beitrag <a href="/risikomanagement-optionshandel.html">Risikomanagement im Optionshandel</a>.</p>
</div>

<h3>Fazit</h3>

<p>Das Rollen ist eine der nützlichsten Routinen für Stillhalter: Es verbindet das Schließen einer bestehenden mit dem Eröffnen einer neuen Option und verschafft so Zeit, Spielraum oder zusätzliche Prämie. Entscheidend ist, bewusst und regelbasiert zu rollen – idealerweise für Credit und nicht bloß, um einen Verlust zu verdrängen. Wer <a href="/covered-call-strategie.html">Covered Calls</a> und <a href="/cash-secured-put.html">Cash-Secured Puts</a> einsetzt, sollte das Rollen sicher beherrschen. Alle Fachbegriffe finden Sie im <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3>Quellen &amp; weiterführende Literatur</h3>
<ul>
    <li><a href="https://www.optionseducation.org" target="_blank" rel="noopener">The Options Industry Council (OIC) – Options Education</a></li>
    <li><a href="https://www.cboe.com" target="_blank" rel="noopener">Cboe Global Markets – Options Education</a></li>
    <li>John C. Hull: „Options, Futures, and Other Derivatives", Pearson.</li>
</ul>
