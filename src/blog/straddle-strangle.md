---
layout: layouts/blog-post.njk
pageTitle: "Straddle & Strangle: Auf große Bewegungen setzen"
subtitle: "Wie Sie mit gekauften Optionen von starken Kursbewegungen profitieren – unabhängig von der Richtung."
description: "Straddle und Strangle verständlich erklärt: Aufbau, Auszahlungsprofil, Break-even-Punkte und die Rolle der impliziten Volatilität bei diesen Volatilitätsstrategien."
date: 2026-05-10
category: "Strategie"
tags: ["Strategie", "Volatilität"]
permalink: /straddle-strangle.html
summary: "Ein Long Straddle kombiniert den Kauf eines Calls und eines Puts mit identischem Strike, ein Long Strangle nutzt unterschiedliche Strikes. Beide Strategien profitieren von starken Kursbewegungen in beliebiger Richtung, verlieren aber an Wert, wenn der Kurs ruhig bleibt oder die implizite Volatilität fällt."
faq:
  - q: "Was ist der Unterschied zwischen Straddle und Strangle?"
    a: "Bei einem Straddle haben der gekaufte Call und Put denselben Strike-Preis, meist am Geld. Bei einem Strangle liegen die Strikes auseinander, typischerweise beide aus dem Geld. Der Strangle ist günstiger, benötigt aber eine größere Kursbewegung, um profitabel zu werden."
  - q: "Wann ist ein Long Straddle sinnvoll?"
    a: "Ein Long Straddle kann sinnvoll sein, wenn ein Anleger eine starke Kursbewegung erwartet, deren Richtung aber unklar ist – etwa vor wichtigen Ereignissen. Voraussetzung ist, dass die Bewegung groß genug ausfällt, um die gezahlten Prämien zu übertreffen."
  - q: "Welches Risiko hat ein gekaufter Straddle?"
    a: "Der maximale Verlust eines Long Straddle ist auf die Summe der beiden gezahlten Prämien begrenzt. Er tritt ein, wenn der Kurs bei Verfall genau am Strike liegt und beide Optionen wertlos verfallen. Ein Rückgang der impliziten Volatilität erhöht das Verlustrisiko."
---

<p>Manchmal ist klar, dass sich ein Kurs stark bewegen wird – nur nicht, in welche Richtung. Genau für diese Situation gibt es zwei verwandte Volatilitätsstrategien: den <span class="key-term">Straddle</span> und den <span class="key-term">Strangle</span>. Beide setzen auf Bewegung statt auf Richtung. In diesem Artikel erfahren Sie, wie sie aufgebaut sind, wie ihr Auszahlungsprofil aussieht und welche Rolle die implizite Volatilität dabei spielt.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken bis hin zum Totalverlust des eingesetzten Kapitals. Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. Konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#straddle">Der Long Straddle</a></li>
        <li><a href="#strangle">Der Long Strangle</a></li>
        <li><a href="#profil">Auszahlungsprofil und Break-even</a></li>
        <li><a href="#volatilitaet">Die Rolle der impliziten Volatilität</a></li>
        <li><a href="#vergleich">Straddle oder Strangle?</a></li>
        <li><a href="#risiken">Risiken und Einsatz</a></li>
        <li><a href="#fazit">Fazit</a></li>
    </ol>
</div>

<figure class="blog-figure">
    <img src="/blog/figures/straddle-strangle.svg" alt="Auszahlungsprofil des Long Straddle: V-förmiges Profil mit zwei Break-even-Punkten und begrenztem Verlust am Strike." width="680" height="400" loading="lazy">
    <figcaption>Auszahlungsprofil des Long Straddle: ein V-förmiges Profil mit zwei Break-even-Punkten. Der maximale Verlust tritt ein, wenn der Kurs bei Verfall am Strike liegt.</figcaption>
</figure>

<h3 id="straddle">Der Long Straddle</h3>

<p>Ein <strong>Long Straddle</strong> entsteht, wenn Sie gleichzeitig einen <span class="key-term">Call-Option</span> und einen Put mit <strong>identischem Strike-Preis</strong> und gleichem Verfallsdatum kaufen. In der Regel wählt man dafür einen Strike nahe am aktuellen Kurs (am Geld). Sie zahlen für beide Optionen eine Prämie und besitzen damit das Recht, sowohl von einem starken Anstieg als auch von einem starken Rückgang zu profitieren.</p>

<p>Die Strategie ist <strong>richtungsneutral</strong>: Es ist Ihnen gleichgültig, ob der Kurs steigt oder fällt – wichtig ist nur, dass er sich <em>weit genug</em> bewegt, um die Summe beider Prämien zu übertreffen.</p>

<h3 id="strangle">Der Long Strangle</h3>

<p>Der <strong>Long Strangle</strong> folgt demselben Grundgedanken, nutzt aber <strong>unterschiedliche Strikes</strong>: Sie kaufen einen Call mit einem Strike oberhalb des Kurses und einen Put mit einem Strike unterhalb des Kurses – beide also aus dem Geld (OTM).</p>

<div class="tip-box">
    <h4>Gut zu wissen</h4>
    <p>Weil OTM-Optionen günstiger sind als Optionen am Geld, kostet ein Strangle weniger Prämie als ein vergleichbarer Straddle. Der Preis dafür: Der Kurs muss sich <strong>stärker</strong> bewegen, bevor die Position in die Gewinnzone läuft.</p>
</div>

<h3 id="profil">Auszahlungsprofil und Break-even</h3>

<p>Das folgende Beispiel für einen Long Straddle ist <strong>rein fiktiv und dient ausschließlich der Veranschaulichung</strong>:</p>

<table class="data-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Wert (fiktives Beispiel)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Aktueller Kurs des Basiswerts</td>
            <td>100&nbsp;€</td>
        </tr>
        <tr>
            <td>Strike von Call und Put</td>
            <td>100&nbsp;€ (ATM)</td>
        </tr>
        <tr>
            <td>Prämie Call + Prämie Put</td>
            <td>4&nbsp;€ + 4&nbsp;€ = 8&nbsp;€</td>
        </tr>
        <tr>
            <td>Maximaler Verlust</td>
            <td>8&nbsp;€ (Summe der Prämien)</td>
        </tr>
        <tr>
            <td>Unterer Break-even</td>
            <td>92&nbsp;€ (Strike − Prämiensumme)</td>
        </tr>
        <tr>
            <td>Oberer Break-even</td>
            <td>108&nbsp;€ (Strike + Prämiensumme)</td>
        </tr>
    </tbody>
</table>

<p>Die Position wird profitabel, sobald der Kurs unter 92&nbsp;€ fällt oder über 108&nbsp;€ steigt. Zwischen diesen beiden Break-even-Punkten entsteht ein Verlust, der bei genau 100&nbsp;€ sein Maximum von 8&nbsp;€ erreicht – dann verfallen beide Optionen wertlos. Nach oben ist der Gewinn theoretisch unbegrenzt, nach unten bis auf einen Kurs von null begrenzt.</p>

<h3 id="volatilitaet">Die Rolle der impliziten Volatilität</h3>

<p>Straddle und Strangle sind in erster Linie Wetten auf <span class="key-term">Volatilität</span>. Da Sie beide Optionen kaufen, profitieren Sie nicht nur von der tatsächlichen Kursbewegung, sondern auch von einem Anstieg der <strong>impliziten Volatilität</strong>: Steigt die erwartete Schwankungsbreite, werden Ihre Optionen wertvoller.</p>

<div class="warning-box">
    <h4>Vorsicht vor dem Volatilitäts-Crush</h4>
    <p>Vor planbaren Ereignissen wie Quartalszahlen ist die implizite Volatilität oft hoch – die Optionen sind dann teuer. Nach dem Ereignis fällt die Volatilität häufig schlagartig (ein „Volatilitäts-Crush"). Dieser Rückgang kann die Position belasten, selbst wenn sich der Kurs bewegt. Mehr dazu im Artikel <a href="/iv-rank-perzentil.html">IV Rank und Perzentil</a>.</p>
</div>

<h3 id="vergleich">Straddle oder Strangle?</h3>

<table class="data-table">
    <thead>
        <tr>
            <th>Merkmal</th>
            <th>Long Straddle</th>
            <th>Long Strangle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Strikes</td>
            <td>identisch (meist ATM)</td>
            <td>unterschiedlich (beide OTM)</td>
        </tr>
        <tr>
            <td>Kosten</td>
            <td>höher</td>
            <td>niedriger</td>
        </tr>
        <tr>
            <td>Benötigte Bewegung</td>
            <td>geringer</td>
            <td>größer</td>
        </tr>
        <tr>
            <td>Maximaler Verlust</td>
            <td>Prämiensumme</td>
            <td>Prämiensumme</td>
        </tr>
    </tbody>
</table>

<h3 id="risiken">Risiken und Einsatz</h3>

<p>Der größte Gegner beider Strategien ist die Zeit. Da Sie Optionen <em>kaufen</em>, arbeitet der <span class="key-term">Zeitwert</span>verfall gegen Sie: Mit jedem Tag ohne ausreichende Bewegung verlieren die Optionen an Wert. Bleibt der erwartete Ausbruch aus, droht der vollständige Verlust der gezahlten Prämien.</p>

<p>Typische Einsatzfelder sind Phasen erwarteter Unsicherheit, in denen eine große Bewegung wahrscheinlich, ihre Richtung aber offen ist. Entscheidend ist, die Strategie nicht einzusetzen, wenn die implizite Volatilität bereits sehr hoch ist – dann ist der Einstieg teuer und das Risiko eines Volatilitäts-Crushes groß. Eine Übersicht aller Fachbegriffe bietet das <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3 id="fazit">Fazit</h3>

<p>Straddle und Strangle sind die klassischen Strategien für Anleger, die auf Bewegung statt auf Richtung setzen. Der Straddle nutzt identische Strikes und wird schon bei kleineren Bewegungen profitabel, kostet aber mehr Prämie. Der Strangle ist günstiger, verlangt dafür eine größere Kursbewegung. Beide Strategien profitieren von steigender impliziter Volatilität, leiden aber unter Zeitwertverfall und einem Volatilitäts-Crush. Sie eignen sich daher vor allem für Situationen mit erwarteter, aber richtungsunsicherer Bewegung – und erfordern ein gutes Gespür für das Volatilitätsniveau. Wer die Grundlagen dazu vertiefen möchte, findet sie im Artikel <a href="/volatilitaet-verstehen.html">Volatilität verstehen</a>.</p>

<h3>Quellen &amp; weiterführende Literatur</h3>
<ul>
    <li><a href="https://www.optionseducation.org" target="_blank" rel="noopener">The Options Industry Council (OIC) – Options Education</a></li>
    <li><a href="https://www.cboe.com" target="_blank" rel="noopener">Cboe Global Markets – Options Education</a></li>
    <li>John C. Hull: „Options, Futures, and Other Derivatives", Pearson.</li>
</ul>
