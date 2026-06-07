---
layout: layouts/blog-post.njk
pageTitle: "Die Wheel-Strategie: Prämien im Kreislauf vereinnahmen"
subtitle: "Wie Sie Cash-Secured Puts und Covered Calls zu einem wiederkehrenden Einkommens-Kreislauf verbinden."
description: "Die Wheel-Strategie einfach erklärt: der Kreislauf aus Cash-Secured Put, Zuteilung und Covered Call – mit Rechenbeispiel, Chancen, Risiken und Eignung."
date: 2026-06-07
category: "Strategie"
tags: ["Strategie", "Einnahmen"]
permalink: /wheel-strategie.html
summary: "Die Wheel-Strategie kombiniert Cash-Secured Puts und Covered Calls zu einem wiederkehrenden Kreislauf: Sie verkaufen Puts, bis Ihnen Aktien zugeteilt werden, schreiben darauf anschließend Calls, bis die Aktien wieder abgerufen werden – und beginnen von vorn."
faq:
  - q: "Was ist die Wheel-Strategie?"
    a: "Die Wheel-Strategie ist ein wiederkehrender Ablauf aus zwei Bausteinen: Zuerst verkaufen Sie Cash-Secured Puts, bis Ihnen Aktien zugeteilt werden. Auf diese Aktien schreiben Sie anschließend Covered Calls, bis sie wieder abgerufen werden. Danach beginnt der Kreislauf von vorn."
  - q: "Welches Risiko hat die Wheel-Strategie?"
    a: "Das Hauptrisiko ist ein deutlicher Kursrückgang der Aktie, während Sie sie nach einer Zuteilung halten. Die vereinnahmten Prämien senken den Einstand und mildern Verluste, bieten aber keinen echten Schutz vor größeren Kursverlusten."
  - q: "Für welche Aktien eignet sich die Wheel-Strategie?"
    a: "Sinnvoll ist die Strategie vor allem bei stabilen, liquiden Aktien, die Sie ohnehin längerfristig im Depot halten würden. Für hochspekulative oder sehr schwankungsanfällige Werte, die Sie nicht übernehmen möchten, ist sie weniger geeignet."
---

<p>Die <span class="key-term">Wheel-Strategie</span> (auf Deutsch „das Rad") verbindet zwei beliebte Einkommensstrategien zu einem fortlaufenden Kreislauf: den <span class="key-term">Cash-Secured Put</span> und den <span class="key-term">Covered Call</span>. Das Ziel ist, kontinuierlich Optionsprämien zu vereinnahmen – mal auf Aktien, die Sie kaufen möchten, mal auf Aktien, die Sie bereits besitzen. In diesem Artikel erfahren Sie, wie der Kreislauf funktioniert, wo seine Chancen und Grenzen liegen und für wen er sich eignet.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken bis hin zum Totalverlust des eingesetzten Kapitals. Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. Konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#was-ist">Was ist die Wheel-Strategie?</a></li>
        <li><a href="#phasen">Die vier Phasen des Kreislaufs</a></li>
        <li><a href="#beispiel">Ein Rechenbeispiel</a></li>
        <li><a href="#chancen-risiken">Chancen und Risiken</a></li>
        <li><a href="#eignung">Für wen sich die Strategie eignet</a></li>
    </ol>
</div>

<figure class="blog-figure">
    <img src="/blog/figures/wheel-strategie.svg" alt="Kreislauf der Wheel-Strategie: Cash-Secured Put verkaufen, Aktien per Zuteilung kaufen, Covered Call verkaufen, Aktien werden abgerufen – und wieder von vorn." width="680" height="400" loading="lazy">
    <figcaption>Der Kreislauf der Wheel-Strategie: vom Cash-Secured Put über die Zuteilung und den Covered Call bis zum Abruf – und wieder von vorn.</figcaption>
</figure>

<h3 id="was-ist">Was ist die Wheel-Strategie?</h3>

<p>Die Wheel-Strategie ist keine eigene Optionsart, sondern eine <strong>Kombination zweier Strategien in einer festen Abfolge</strong>. Als <span class="key-term">Stillhalter</span> verkaufen Sie zunächst Puts und vereinnahmen dafür eine <span class="key-term">Premium</span>. Werden Ihnen die Aktien zugeteilt, wechseln Sie nahtlos in die zweite Phase und verkaufen Calls auf genau diese Aktien. So entsteht ein Rad, das sich immer weiterdreht – daher der Name.</p>

<p>Der Reiz liegt darin, dass Sie in <em>jeder</em> Phase Prämien einnehmen: solange Sie noch keine Aktien besitzen über den <a href="/cash-secured-put.html">Cash-Secured Put</a>, und sobald Sie Aktien halten über den <a href="/covered-call-strategie.html">Covered Call</a>.</p>

<h3 id="phasen">Die vier Phasen des Kreislaufs</h3>

<p>Wie die Illustration oben zeigt, durchläuft die Wheel-Strategie vier Phasen:</p>

<div class="strategy-box">
    <h4>1. Cash-Secured Put verkaufen</h4>
    <p>Sie verkaufen eine <span class="key-term">Put-Option</span> auf eine Aktie, die Sie gerne besitzen würden, und hinterlegen die volle Kaufsumme als Sicherheit. Der gewählte <span class="key-term">Strike-Preis</span> liegt typischerweise <span class="key-term">Out-of-the-Money (OTM)</span>, also unter dem aktuellen Kurs. Bleibt der Kurs darüber, verfällt der Put wertlos und Sie behalten die Prämie – und können den Schritt wiederholen.</p>
</div>

<div class="strategy-box">
    <h4>2. Aktien per Zuteilung übernehmen</h4>
    <p>Fällt der Kurs unter den Strike, kommt es zum <span class="key-term">Assignment</span>: Sie kaufen die Aktien zum Strike-Preis. Ihr effektiver Einstand liegt um die vereinnahmte Prämie darunter. Mehr zum Ablauf der Zuteilung lesen Sie im Artikel <a href="/assignment-und-ausuebung.html">Assignment und Ausübung</a>.</p>
</div>

<div class="strategy-box">
    <h4>3. Covered Call verkaufen</h4>
    <p>Auf die nun gehaltenen Aktien verkaufen Sie eine <span class="key-term">Call-Option</span> mit einem Strike oberhalb Ihres Einstands. Wieder erhalten Sie eine Prämie. Bleibt der Kurs unter dem Strike, behalten Sie Aktien und Prämie und schreiben den nächsten Call.</p>
</div>

<div class="strategy-box">
    <h4>4. Aktien werden abgerufen</h4>
    <p>Steigt der Kurs über den Call-Strike, werden Ihre Aktien abgerufen (verkauft). Sie realisieren den Kursgewinn bis zum Strike plus alle vereinnahmten Prämien – und stehen wieder am Anfang, bereit für den nächsten Cash-Secured Put.</p>
</div>

<h3 id="beispiel">Ein Rechenbeispiel</h3>

<p>Die folgenden Zahlen sind rein illustrativ und dienen ausschließlich dem Lernzweck.</p>

<table class="data-table">
    <thead>
        <tr>
            <th>Schritt</th>
            <th>Aktion</th>
            <th>Prämie / Effekt</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Put verkaufen</strong></td>
            <td>Aktie bei 50&nbsp;€; Verkauf Put mit Strike 48&nbsp;€</td>
            <td>+1,20&nbsp;€ je Aktie Prämie</td>
        </tr>
        <tr>
            <td><strong>Zuteilung</strong></td>
            <td>Kurs fällt unter 48&nbsp;€ → Kauf zu 48&nbsp;€</td>
            <td>Effektiver Einstand 46,80&nbsp;€ (48 − 1,20)</td>
        </tr>
        <tr>
            <td><strong>Call verkaufen</strong></td>
            <td>Verkauf Call mit Strike 52&nbsp;€</td>
            <td>+1,10&nbsp;€ je Aktie Prämie</td>
        </tr>
        <tr>
            <td><strong>Abruf</strong></td>
            <td>Kurs steigt über 52&nbsp;€ → Verkauf zu 52&nbsp;€</td>
            <td>Kursgewinn 52 − 46,80 = 5,20&nbsp;€ + Prämien</td>
        </tr>
    </tbody>
</table>

<p>In diesem fiktiven Durchlauf summieren sich zwei Prämien und ein Kursgewinn. Entscheidend ist: Der Gewinn bleibt nach oben begrenzt (der Call deckelt ihn beim Strike), während das Abwärtsrisiko der gehaltenen Aktie bestehen bleibt.</p>

<h3 id="chancen-risiken">Chancen und Risiken</h3>

<div class="strategy-box">
    <h4>Chancen</h4>
    <p>Die Wheel-Strategie erzeugt in ruhigen und leicht steigenden Märkten regelmäßige Prämieneinnahmen. Sie kaufen Aktien tendenziell günstiger ein (zum Strike abzüglich Prämie) und verkaufen sie mit Aufschlag wieder. Ein Teil der Erträge stammt aus dem Zeitwertverfall der verkauften Optionen, der dem Stillhalter zugutekommt.</p>
</div>

<div class="warning-box">
    <h4>Risiken</h4>
    <p>Das größte Risiko ist ein <strong>deutlicher, anhaltender Kursrückgang</strong>, während Sie nach einer Zuteilung Aktien halten: Dann sitzen Sie auf Buchverlusten, die die Prämien nicht ausgleichen. Zudem ist der Gewinn nach oben gedeckelt – verpassen Sie eine starke Aufwärtsbewegung, kann eine einfache Aktienposition mehr eingebracht haben. Ein durchdachtes <a href="/risikomanagement-optionshandel.html">Risikomanagement</a> ist daher unverzichtbar.</p>
</div>

<h3 id="eignung">Für wen sich die Strategie eignet</h3>

<p>Die Wheel-Strategie passt zu Anlegern, die</p>
<ul>
    <li>Aktien handeln möchten, die sie ohnehin <strong>längerfristig halten</strong> würden,</li>
    <li>das nötige Kapital für eine mögliche Zuteilung dauerhaft bereithalten,</li>
    <li>eine neutrale bis leicht bullische Erwartung haben und</li>
    <li>regelmäßige Prämieneinnahmen einem unbegrenzten Aufwärtspotenzial vorziehen.</li>
</ul>

<p>Weniger geeignet ist sie für hochspekulative Werte, die Sie nicht ins Depot übernehmen möchten, oder wenn Sie auf eine große Kursbewegung setzen.</p>

<h3>Fazit</h3>

<p>Die Wheel-Strategie ist ein eleganter Weg, zwei Einsteigerstrategien zu einem fortlaufenden Einkommens-Kreislauf zu verbinden. Sie belohnt Geduld und die Bereitschaft, Aktien tatsächlich zu übernehmen – verlangt aber sorgfältige Auswahl der Basiswerte und konsequentes Risikomanagement. Wer den <a href="/cash-secured-put.html">Cash-Secured Put</a> und den <a href="/covered-call-strategie.html">Covered Call</a> einzeln verstanden hat, hält mit der Wheel-Strategie beides in einer runden Gesamtmechanik in der Hand. Alle Fachbegriffe finden Sie im <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3>Quellen &amp; weiterführende Literatur</h3>
<ul>
    <li><a href="https://www.optionseducation.org" target="_blank" rel="noopener">The Options Industry Council (OIC) – Options Education</a></li>
    <li><a href="https://www.cboe.com" target="_blank" rel="noopener">Cboe Global Markets – Options Education</a></li>
    <li>John C. Hull: „Options, Futures, and Other Derivatives", Pearson.</li>
</ul>
