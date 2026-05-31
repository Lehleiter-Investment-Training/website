---
layout: layouts/blog-post.njk
pageTitle: "Put-Call-Parität: Der Zusammenhang von Puts und Calls"
subtitle: "Warum Call- und Put-Preise kein Zufall sind – und was Arbitrage damit zu tun hat."
description: "Put-Call-Parität verständlich erklärt: Formel, Variablen, Arbitrage-Logik und ein Rechenbeispiel für europäische Optionen ohne Dividenden."
date: 2026-04-13
category: "Grundlagen"
tags: ["Grundlagen", "Bewertung"]
permalink: /put-call-parity.html
summary: "Die Put-Call-Parität beschreibt eine mathematisch notwendige Gleichgewichtsbeziehung zwischen den Preisen europäischer Call- und Put-Optionen auf denselben Basiswert mit gleichem Strike und gleicher Laufzeit. Weicht der Markt davon ab, entstehen risikolose Arbitragegewinne – was die Beziehung in der Praxis stabil hält."
faq:
  - q: "Was besagt die Put-Call-Parität?"
    a: "Die Put-Call-Parität besagt, dass der Preis einer europäischen Call-Option plus dem Barwert des Strike-Preises stets gleich dem Preis einer europäischen Put-Option plus dem aktuellen Kurs des Basiswerts sein muss. Gilt diese Gleichung nicht, ermöglichen Arbitrageure risikolose Gewinne, bis der Markt wieder ins Gleichgewicht zurückkehrt."
  - q: "Gilt die Put-Call-Parität auch für amerikanische Optionen?"
    a: "Nein, nicht in dieser exakten Form. Bei amerikanischen Optionen besteht das Recht zur vorzeitigen Ausübung, was die Beziehung aufweicht. Für amerikanische Optionen gelten lediglich Ungleichungsschranken statt einer exakten Parität."
  - q: "Was sind synthetische Positionen im Zusammenhang mit der Put-Call-Parität?"
    a: "Aus der Put-Call-Parität folgt, dass man jede der vier Positionen – Long Call, Long Put, Long Basiswert, Long Bond – durch eine Kombination der drei anderen nachbilden kann. So entsteht zum Beispiel ein synthetischer Call aus einem Long Put, einer Long-Position im Basiswert und einem Short Bond (Kredit)."
---

<p>Die <span class="key-term">Put-Call-Parität</span> ist eine der grundlegenden Gleichgewichtsbeziehungen in der Optionspreistheorie und erklärt, warum die Preise von <span class="key-term">Call-Option</span>en und <span class="key-term">Put-Option</span>en auf denselben Basiswert niemals unabhängig voneinander sein können. Wer versteht, wie diese Beziehung funktioniert, gewinnt einen wichtigen Einblick in die innere Logik der Optionsbewertung – und in die Mechanik, die Marktpreise konsistent hält.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken bis hin zum Totalverlust des eingesetzten Kapitals. Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. Konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#grundidee">Die Grundidee</a></li>
        <li><a href="#formel">Die Formel und ihre Variablen</a></li>
        <li><a href="#arbitrage">Ökonomische Begründung: Arbitrage und synthetische Positionen</a></li>
        <li><a href="#beispiel">Ein fiktives Rechenbeispiel</a></li>
        <li><a href="#grenzen">Grenzen und Annahmen</a></li>
        <li><a href="#praxis">Praktische Bedeutung</a></li>
        <li><a href="#fazit">Fazit</a></li>
    </ol>
</div>

<h3 id="grundidee">Die Grundidee</h3>

<p>Stellen Sie sich zwei unterschiedliche Wege vor, um zum selben Ziel zu gelangen: Entweder Sie kaufen eine Aktie direkt und ergänzen sie um eine <span class="key-term">Put-Option</span> als Absicherung – oder Sie kaufen eine <span class="key-term">Call-Option</span> und legen gleichzeitig den Barwert des vereinbarten Kaufpreises risikolos an. Beide Kombinationen sollten am Laufzeitende exakt dasselbe Ergebnis liefern.</p>

<p>Genau das ist der Kern der Put-Call-Parität: Zwei Portfolios, die unter allen Marktbedingungen identische Auszahlungen erzeugen, müssen heute auch identische Preise haben. Wäre das nicht der Fall, könnten Marktteilnehmer das günstigere Portfolio kaufen, das teurere leerverkaufen und damit einen risikolosen Gewinn erzielen – eine klassische Arbitrage-Situation.</p>

<p>Das Konzept geht auf Hans R. Stoll zurück, der es 1969 formal hergeleitet hat, und bildet heute eine der Säulen moderner Bewertungsmodelle wie dem <span class="key-term">Black-Scholes-Modell</span>.</p>

<h3 id="formel">Die Formel und ihre Variablen</h3>

<p>Die Put-Call-Parität für europäische Optionen ohne Dividenden lautet:</p>

<p style="text-align:center; font-size:1.1em; margin: 1.5em 0;"><strong>C + K · e<sup>−rT</sup> = P + S</strong></p>

<p>Gleichwertig lässt sie sich auch so schreiben:</p>

<p style="text-align:center; font-size:1.1em; margin: 1.5em 0;"><strong>C − P = S − K · e<sup>−rT</sup></strong></p>

<p>Die zweite Form macht unmittelbar sichtbar, dass die Differenz zwischen Call- und Put-Preis dem aktuellen Aktienkurs abzüglich des Barwerts des Strikes entsprechen muss.</p>

<table class="data-table">
    <thead>
        <tr>
            <th>Variable</th>
            <th>Bedeutung</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>C</strong></td>
            <td>Aktueller Marktpreis der <span class="key-term">Call-Option</span></td>
        </tr>
        <tr>
            <td><strong>P</strong></td>
            <td>Aktueller Marktpreis der <span class="key-term">Put-Option</span></td>
        </tr>
        <tr>
            <td><strong>S</strong></td>
            <td>Aktueller Kurs des Basiswerts (z.&nbsp;B. Aktie)</td>
        </tr>
        <tr>
            <td><strong>K</strong></td>
            <td><span class="key-term">Strike-Preis</span> – der vereinbarte Ausübungspreis beider Optionen</td>
        </tr>
        <tr>
            <td><strong>r</strong></td>
            <td>Risikoloser Zinssatz (kontinuierlich verzinst)</td>
        </tr>
        <tr>
            <td><strong>T</strong></td>
            <td>Restlaufzeit in Jahren</td>
        </tr>
        <tr>
            <td><strong>e<sup>−rT</sup></strong></td>
            <td>Diskontierungsfaktor – berechnet den Barwert des Strike-Preises</td>
        </tr>
    </tbody>
</table>

<p>Der Ausdruck K&nbsp;·&nbsp;e<sup>−rT</sup> ist nichts anderes als der auf heute abgezinste Wert des Strikes: Wenn Sie den heutigen Barwert risikolos anlegen, erhalten Sie am Laufzeitende genau K zurück. Dabei gelten Call und Put mit identischem Strike, identischer Laufzeit und demselben Basiswert.</p>

<h3 id="arbitrage">Ökonomische Begründung: Arbitrage und synthetische Positionen</h3>

<p>Warum muss die Gleichung gelten? Die Antwort liegt in der Arbitrage-Freiheit effizienter Märkte. Betrachten Sie zwei Portfolios:</p>

<ul>
    <li><strong>Portfolio A:</strong> Long Call (Preis C) + risikolose Geldanlage in Höhe von K&nbsp;·&nbsp;e<sup>−rT</sup></li>
    <li><strong>Portfolio B:</strong> Long Put (Preis P) + Long Basiswert (Preis S)</li>
</ul>

<p>Analysiert man die Auszahlungen am Laufzeitende für jeden möglichen Schlusskurs S<sub>T</sub>, ergibt sich in beiden Fällen dasselbe Ergebnis: Liegt S<sub>T</sub> über dem Strike K, beträgt der Wert beider Portfolios S<sub>T</sub>. Liegt S<sub>T</sub> unter K, beträgt der Wert beider Portfolios K. Die Auszahlungsprofile sind identisch – also müssen die heutigen Preise identisch sein.</p>

<p>Wäre Portfolio A heute billiger als Portfolio B, kauften Arbitrageure A und verkauften B. Das Angebot und die Nachfrage würden die Preise so lange verschieben, bis die Parität wiederhergestellt ist. Dieser Mechanismus hält die Gleichung stabil.</p>

<p>Aus dieser Logik ergeben sich direkt die sogenannten <strong>synthetischen Positionen</strong>: Jede der vier Grundpositionen – Long Call, Long Put, Long Basiswert, Long Bond – lässt sich durch eine Kombination der drei anderen replizieren. So folgt zum Beispiel ein synthetischer Call:</p>

<p style="text-align:center; margin: 1em 0;"><strong>C = P + S − K · e<sup>−rT</sup></strong></p>

<p>Man kauft also einen Put, kauft den Basiswert und nimmt einen Kredit in Höhe von K&nbsp;·&nbsp;e<sup>−rT</sup> auf. Das ist praktisch relevant, wenn etwa ein bestimmter Call nicht liquide handelbar ist, der entsprechende Put aber schon.</p>

<div class="tip-box">
    <h4>Gut zu wissen</h4>
    <p>Synthetische Positionen werden von professionellen Marktteilnehmern aktiv genutzt – etwa um Arbitrage zu betreiben, Transaktionskosten zu sparen oder Positionen flexibel umzustrukturieren. Für Privatanleger sind sie vor allem als konzeptionelles Werkzeug zum Verständnis der Optionspreisbildung wertvoll. Mehr zu den Preiskomponenten von Optionen finden Sie im Artikel über <a href="/optionsgriechen-delta-gamma-theta-vega.html">Optionsgriechen (Delta, Gamma, Theta, Vega)</a>.</p>
</div>

<h3 id="beispiel">Ein fiktives Rechenbeispiel</h3>

<p>Die folgenden Zahlen sind frei gewählt und dienen ausschließlich der Veranschaulichung. Reale Marktpreise weichen davon ab.</p>

<table class="data-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Fiktiver Wert</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Aktienkurs S</td>
            <td>100,00 €</td>
        </tr>
        <tr>
            <td>Strike K</td>
            <td>100,00 €</td>
        </tr>
        <tr>
            <td>Restlaufzeit T</td>
            <td>0,5 Jahre (6 Monate)</td>
        </tr>
        <tr>
            <td>Risikoloser Zins r</td>
            <td>4,00 % p.&nbsp;a. (kontinuierlich)</td>
        </tr>
        <tr>
            <td>Barwert des Strikes K · e<sup>−rT</sup></td>
            <td>100 · e<sup>−0,04 · 0,5</sup> ≈ 98,02 €</td>
        </tr>
    </tbody>
</table>

<p>Die Parität verlangt: C + 98,02&nbsp;€ = P + 100,00&nbsp;€, also C − P = 1,98&nbsp;€.</p>

<p>Wenn in diesem fiktiven Beispiel der Call zu 5,00&nbsp;€ notiert, muss der Put gemäß Parität bei 5,00&nbsp;€ − 1,98&nbsp;€ = 3,02&nbsp;€ liegen. Würde der Put stattdessen zu 2,50&nbsp;€ gehandelt, wäre Portfolio B (Put + Aktie) im Vergleich zu Portfolio A unterbewertet. Ein Arbitrageur würde Portfolio B kaufen und Portfolio A verkaufen, bis die Preise wieder übereinstimmen.</p>

<div class="callout">
    <strong>Hinweis:</strong> Der <span class="key-term">Innere Wert</span> einer At-the-Money-Option (Strike gleich Aktienkurs) beträgt null. Die Preise in obigem Beispiel bestehen daher ausschließlich aus dem Zeitwert – dem Wert, den die verbleibende Restlaufzeit und die Unsicherheit über die zukünftige Kursentwicklung beisteuern.
</div>

<h3 id="grenzen">Grenzen und Annahmen</h3>

<p>Die Put-Call-Parität in der obigen Form gilt unter klar definierten Bedingungen. Es ist wichtig, diese Grenzen zu kennen:</p>

<ul>
    <li><strong><span class="key-term">European Style Option</span>:</strong> Die Formel gilt exakt nur für europäische Optionen, die ausschließlich am Verfallstag ausgeübt werden dürfen. Bei amerikanischen Optionen, die jederzeit ausgeübt werden können, gilt lediglich eine Ungleichungsschranke, da das Frühausübungsrecht einen zusätzlichen Wert besitzen kann.</li>
    <li><strong>Keine Dividenden:</strong> Das Modell setzt voraus, dass der Basiswert während der Laufzeit keine Ausschüttungen zahlt. Bei dividendenzahlenden Aktien muss die Formel um den Barwert der erwarteten Dividenden angepasst werden.</li>
    <li><strong>Friktionsloser Markt:</strong> Transaktionskosten, Steuern, Leerverkaufsbeschränkungen und Bid-Ask-Spreads können in der Praxis verhindern, dass kleine Abweichungen von der Parität profitabel arbitragiert werden können.</li>
    <li><strong>Konstanter risikoloser Zins:</strong> Die Formel unterstellt einen bekannten, während der Laufzeit unveränderlichen risikolosen Zinssatz.</li>
</ul>

<div class="warning-box">
    <h4>Wichtiger Hinweis</h4>
    <p>In der Praxis werden die Paritätsbedingungen für amerikanische Optionen häufig vereinfachend herangezogen, obwohl sie dort nicht exakt gelten. Wer die Put-Call-Parität auf amerikanische Optionen anwendet, sollte sich dieser Einschränkung bewusst sein.</p>
</div>

<h3 id="praxis">Praktische Bedeutung</h3>

<p>Auch wenn die Put-Call-Parität auf den ersten Blick eine theoretische Gleichung ist, hat sie unmittelbare praktische Konsequenzen:</p>

<p><strong>Konsistenz der Optionspreise:</strong> Market Maker und Handelssysteme nutzen die Put-Call-Parität kontinuierlich, um sicherzustellen, dass die notierten Preise für Calls und Puts konsistent sind. Eine Verletzung der Parität würde sofort Arbitrage-Aktivität auslösen. Das bedeutet: Wenn Sie in Ihrer Handelsplattform Optionskurse sehen, können Sie davon ausgehen, dass sie diese Beziehung im Wesentlichen einhalten.</p>

<p><strong>Synthetische Positionen konstruieren:</strong> Aus der Parität folgt, wie Sie jede Grundposition synthetisch nachbilden können. Diese Kenntnis ist nützlich, wenn Sie eine Position aufbauen möchten, die am Markt weniger liquide oder teurer ist, als ihre synthetische Alternative es wäre.</p>

<p><strong>Verständnis von Bewertungsmodellen:</strong> Das <span class="key-term">Black-Scholes-Modell</span> und alle modernen Bewertungsmodelle sind so konstruiert, dass sie die Put-Call-Parität automatisch erfüllen. Die Parität ist damit ein grundlegender Konsistenztest: Ein Bewertungsmodell, das sie verletzt, wäre schlicht falsch.</p>

<p><strong>Implizite Volatilität:</strong> Da Calls und Puts auf denselben Basiswert durch die Parität verknüpft sind, sollte die aus einem Call abgeleitete implizite Volatilität mit der aus dem entsprechenden Put abgeleiteten übereinstimmen. Abweichungen können auf Marktfriktionen oder besondere Nachfragesituationen hinweisen und werden von professionellen Händlern genau beobachtet. Eine vertiefte Einführung in die Optionspreiskomponenten bietet der Artikel zu den <a href="/optionsgriechen-delta-gamma-theta-vega.html">Optionsgriechen</a>; Definitionen aller Fachbegriffe finden Sie im <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3 id="fazit">Fazit</h3>

<p>Die Put-Call-Parität ist kein abstraktes mathematisches Konstrukt, sondern ein direkt aus der Arbitrage-Freiheit abgeleitetes Marktgesetz. Sie besagt, dass Call- und Put-Preise für denselben Basiswert, Strike und Laufzeit in einer exakt definierten Beziehung zueinander stehen müssen – für europäische Optionen ohne Dividenden in der Form C&nbsp;+&nbsp;K·e<sup>−rT</sup>&nbsp;=&nbsp;P&nbsp;+&nbsp;S. Wer dieses Fundament versteht, begreift, warum Optionspreise so sind wie sie sind, wie synthetische Positionen funktionieren und auf welchen Grundlagen Bewertungsmodelle wie das <span class="key-term">Black-Scholes-Modell</span> aufgebaut sind. Die Parität gilt streng nur unter idealisierten Annahmen – doch auch mit ihren Einschränkungen im Blick bleibt sie eines der nützlichsten Konzepte der Optionstheorie. Alle in diesem Artikel verwendeten Fachbegriffe finden Sie im <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3>Quellen &amp; weiterführende Literatur</h3>
<ul>
    <li>Hans R. Stoll (1969): „The Relationship Between Put and Call Option Prices", The Journal of Finance 24(5).</li>
    <li>John C. Hull: „Options, Futures, and Other Derivatives", Pearson.</li>
    <li><a href="https://www.optionseducation.org" target="_blank" rel="noopener">The Options Industry Council (OIC) – Options Education</a></li>
</ul>
