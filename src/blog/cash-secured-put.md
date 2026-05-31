---
layout: layouts/blog-post.njk
pageTitle: "Cash Secured Put: Aktien günstiger einkaufen"
subtitle: "Wie Sie als Stillhalter eine Prämie kassieren und gleichzeitig die Chance nutzen, eine Aktie unter dem aktuellen Marktpreis zu erwerben."
description: "Cash Secured Put einfach erklärt: Funktionsweise, Rechenbeispiel mit Szenarien, Chancen und Risiken sowie Hinweise zur Strike-Wahl – für Einsteiger verständlich."
date: 2025-11-17
category: "Strategie"
tags: ["Strategie", "Einnahmen"]
permalink: /cash-secured-put.html
summary: "Beim Cash Secured Put verkaufen Sie eine Put-Option und hinterlegen gleichzeitig das nötige Kapital, um die Aktie bei Ausübung kaufen zu können. Die Strategie erzeugt Prämieneinnahmen und ermöglicht es, eine gewünschte Aktie zu einem selbst gewählten, günstigeren Kurs ins Depot zu holen."
faq:
  - q: "Was ist ein Cash Secured Put?"
    a: "Ein Cash Secured Put ist der Verkauf einer Put-Option, bei dem der Verkäufer gleichzeitig die volle Kaufsumme als Sicherheit hinterlegt. Er erhält eine Prämie und verpflichtet sich, die Aktie zum vereinbarten Strike-Preis zu kaufen, falls der Käufer sein Recht ausübt."
  - q: "Welche Risiken hat ein Cash Secured Put?"
    a: "Das Hauptrisiko liegt in der Kapitalbindung und im potenziellen Kursverlust: Fällt die Aktie deutlich unter den Strike, müssen Sie sie dennoch zum Strike kaufen. Der tatsächliche Einstand liegt zwar um die Prämie niedriger, ein erheblicher Buchverlust bleibt aber möglich."
  - q: "Wie hängt der Cash Secured Put mit der Wheel-Strategie zusammen?"
    a: "Der Cash Secured Put bildet die erste Phase der Wheel-Strategie. Nach einem Assignment – also dem Kauf der Aktie – können Anleger auf die erworbene Position Covered Calls schreiben und so weiter Prämien einnehmen, bis die Aktie wieder abgerufen wird."
---

<p>Der <span class="key-term">Cash-Secured Put</span> gehört zu den beliebtesten Einstiegsstrategien im Optionshandel: Sie verkaufen eine <span class="key-term">Put-Option</span> auf eine Aktie, die Sie ohnehin kaufen möchten – und erhalten dafür eine Prämie, während Sie gleichzeitig die Chance erhalten, die Aktie zu einem selbst gewählten, günstigeren Kurs ins Depot zu holen. In diesem Artikel erfahren Sie, wie die Strategie funktioniert, wo ihre Chancen und Grenzen liegen und wie Sie den richtigen Strike wählen.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken, einschließlich des Verlustes des eingesetzten Kapitals. Vergangene Ergebnisse bieten keine Garantie für künftige Gewinne. Bitte konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#was-ist">Was ist ein Cash Secured Put?</a></li>
        <li><a href="#beispiel">Ein fiktives Rechenbeispiel</a></li>
        <li><a href="#chancen-risiken">Chancen und Risiken</a></li>
        <li><a href="#strike">Den richtigen Strike wählen</a></li>
        <li><a href="#eignung">Für wen sich die Strategie eignet</a></li>
        <li><a href="#fazit">Fazit</a></li>
    </ol>
</div>

<h3 id="was-ist">Was ist ein Cash Secured Put?</h3>

<p>Beim Cash Secured Put nehmen Sie die Rolle des <span class="key-term">Stillhalter</span>s ein: Sie verkaufen eine Put-Option auf eine Aktie und verpflichten sich damit, diese Aktie zum vereinbarten <span class="key-term">Strike-Preis</span> zu kaufen, falls der Käufer der Option sein Recht ausübt. „Cash Secured" bedeutet, dass Sie die gesamte Kaufsumme – also Strike-Preis multipliziert mit 100 Aktien pro Kontrakt – tatsächlich als Kapital bereithalten. Dieses Kapital gilt als Sicherheitsleistung und darf nicht anderweitig investiert sein.</p>

<p>Im Gegenzug erhalten Sie sofort die <span class="key-term">Premium</span> (Optionsprämie) gutgeschrieben. Diese Prämie gehört Ihnen in jedem Fall, unabhängig davon, ob die Option am Ende ausgeübt wird oder nicht.</p>

<p>Wird die Option ausgeübt – man spricht von <span class="key-term">Assignment</span> (Zuteilung) –, kaufen Sie die Aktien zum Strike-Preis. Ihr effektiver Einstandspreis liegt dann um die bereits erhaltene Prämie unter dem Strike. Verfällt die Option hingegen wertlos, behalten Sie die Prämie und können den Vorgang mit einem neuen Kontrakt wiederholen.</p>

<div class="tip-box">
    <h4>Abgrenzung zum ungedeckten Put</h4>
    <p>Der entscheidende Unterschied zum „naked Put" liegt in der Kapitalreservierung. Beim Cash Secured Put halten Sie die volle Kaufsumme als Liquidität vor – Sie können also jederzeit liefern. Dadurch ist das Risikoprofil wesentlich transparenter und für viele Broker-Konten ohne besondere Optionsfreigabe handelbar.</p>
</div>

<h3 id="beispiel">Ein fiktives Rechenbeispiel</h3>

<p>Die folgenden Zahlen sind rein illustrativ und dienen ausschließlich dem Lernzweck. Sie stellen keine Prognose oder Empfehlung dar.</p>

<p>Angenommen, eine Aktie notiert bei 100&nbsp;€. Sie möchten sie ohnehin kaufen, halten aber einen Einstiegskurs von 95&nbsp;€ für attraktiv. Sie verkaufen einen Put mit einem Strike von 95&nbsp;€ (<span class="key-term">Out-of-the-Money (OTM)</span>, da unter dem aktuellen Kurs) und einer Laufzeit von vier Wochen. Dafür erhalten Sie eine Prämie von 2,00&nbsp;€ je Aktie, also 200&nbsp;€ pro Kontrakt. Sie hinterlegen gleichzeitig 9.500&nbsp;€ (= 95&nbsp;€ × 100) als Sicherheit.</p>

<table class="data-table">
    <thead>
        <tr>
            <th>Szenario bei Verfall</th>
            <th>Was passiert</th>
            <th>Ergebnis (fiktiv)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Kurs über 95&nbsp;€</strong></td>
            <td>Option verfällt wertlos, kein Assignment</td>
            <td>Prämie 200&nbsp;€ bleibt als Ertrag; Kapital wird freigegeben</td>
        </tr>
        <tr>
            <td><strong>Kurs genau 95&nbsp;€</strong></td>
            <td>Option am Geld, Assignment möglich</td>
            <td>Aktie zum Strike 95&nbsp;€ erworben; effektiver Einstand 93&nbsp;€ (Strike minus Prämie)</td>
        </tr>
        <tr>
            <td><strong>Kurs unter 95&nbsp;€ (z.&nbsp;B. 80&nbsp;€)</strong></td>
            <td>Assignment; Aktie muss zu 95&nbsp;€ gekauft werden</td>
            <td>Buchverlust von 15&nbsp;€ je Aktie, gemindert durch Prämie 2&nbsp;€; effektiver Verlust 13&nbsp;€ je Aktie</td>
        </tr>
    </tbody>
</table>

<p>Das dritte Szenario zeigt das Kernrisiko: Bricht der Kurs stark ein, sind Sie verpflichtet, die Aktie deutlich über dem Marktpreis zu kaufen. Die Prämie mildert den Verlust, kann ihn aber nicht ausgleichen. Mehr zur Thematik der Ausübung finden Sie im Artikel <a href="/assignment-und-ausuebung.html">Assignment und Ausübung</a>.</p>

<h3 id="chancen-risiken">Chancen und Risiken</h3>

<div class="strategy-box">
    <h4>Chancen</h4>
    <ul>
        <li>Sofortige Prämieneinnahme, die den effektiven Einstandspreis senkt.</li>
        <li>Möglichkeit, eine gewünschte Aktie zu einem selbst definierten Wunschkurs zu erwerben.</li>
        <li>In Seitwärtsphasen und bei leicht steigenden Märkten verfällt die Option wertlos – die Prämie bleibt vollständig.</li>
        <li>Das hinterlegte Kapital lässt sich häufig in kurzlaufenden Geldmarktinstrumenten parken und erzielt dort eine Grundrendite (je nach Marktumfeld und Broker-Konditionen variierend).</li>
    </ul>
</div>

<div class="strategy-box">
    <h4>Risiken</h4>
    <ul>
        <li><strong>Kapitalbindung:</strong> Der hinterlegte Betrag steht während der Laufzeit nicht für andere Investments zur Verfügung.</li>
        <li><strong>Kursverlustrisiko:</strong> Fällt die Aktie deutlich unter den Strike, übernehmen Sie Aktien mit erheblichem Buchverlust.</li>
        <li><strong>Begrenztes Aufwärtspotenzial:</strong> Steigt die Aktie stark, profitieren Sie nicht – Sie erhalten lediglich die Prämie.</li>
        <li><strong>Frühzeitige Ausübung:</strong> Bei amerikanischen Optionen kann der Käufer die Option jederzeit vor Verfall ausüben.</li>
    </ul>
</div>

<div class="warning-box">
    <h4>Wichtig: Kapitalbindung nicht unterschätzen</h4>
    <p>Die volle Absicherung des Strikes bindet erhebliches Kapital. Bei einem Strike von 95&nbsp;€ und einem Kontrakt über 100 Aktien sind es 9.500&nbsp;€ – für eine einzige Position. Planen Sie Ihre Positionsgrößen sorgfältig, um nicht in Liquiditätsengpässe zu geraten. Ein strukturiertes <a href="/risikomanagement-optionshandel.html">Risikomanagement</a> ist deshalb unerlässlich.</p>
</div>

<h3 id="strike">Den richtigen Strike wählen</h3>

<p>Die Strike-Wahl bestimmt das Verhältnis von Prämie, Zuteilungswahrscheinlichkeit und dem angestrebten Einstandspreis:</p>

<ul>
    <li><strong>Weit Out-of-the-Money (OTM):</strong> Der Strike liegt deutlich unter dem aktuellen Kurs. Die Prämie fällt geringer aus, dafür ist die Wahrscheinlichkeit einer Zuteilung niedriger. Geeignet, wenn Sie die Aktie zwar gerne günstiger kaufen würden, aber kein Assignment erzwingen wollen.</li>
    <li><strong>Nahe am Geld (At-the-Money, ATM):</strong> Höhere Prämie, aber die Zuteilungswahrscheinlichkeit steigt spürbar. Sinnvoll, wenn Sie die Aktie wirklich kaufen möchten und die Prämie möglichst hoch sein soll.</li>
    <li><strong>In-the-Money (ITM):</strong> Der Strike liegt über dem aktuellen Kurs. Die Prämie ist am höchsten, eine Zuteilung aber sehr wahrscheinlich. Praktisch entspricht dies einem direkten Aktienkauf mit Prämienrabatt.</li>
</ul>

<p>Als Orientierungshilfe dient das Delta der Option: Es lässt sich näherungsweise als Wahrscheinlichkeit lesen, mit der die Option im Geld verfällt. Viele Stillhalter wählen Strikes mit einem Delta zwischen −0,20 und −0,35, also eine moderate Zuteilungswahrscheinlichkeit. Diese Daumenregel ersetzt jedoch keine individuelle Analyse des Basiswerts und des Marktumfelds.</p>

<div class="callout">
    <strong>Praxis-Hinweis:</strong> Verkaufen Sie Cash Secured Puts nur auf Aktien, die Sie tatsächlich bereit wären zu kaufen und zu halten. Sollte es zum Assignment kommen, befinden sich die Aktien dauerhaft in Ihrem Depot – ein Zuteilungsszenario sollte deshalb bewusst einkalkuliert sein, nicht überraschen.
</div>

<p>Wie bei jedem Optionskontrakt spielen auch Laufzeit und Implizite Volatilität eine wichtige Rolle. Längere Laufzeiten bringen in der Regel höhere Prämien, binden das Kapital aber auch länger. Phasen erhöhter Volatilität lassen die Prämien ansteigen – sie spiegeln allerdings gleichzeitig ein größeres Schwankungsrisiko wider. Alle hier verwendeten Fachbegriffe finden Sie gesammelt im <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3 id="eignung">Für wen sich die Strategie eignet</h3>

<p>Der Cash Secured Put dürfte für Anleger interessant sein, die:</p>

<ul>
    <li>eine bestimmte Aktie gezielt beobachten und bei einem günstigeren Kurs kaufen möchten,</li>
    <li>bereit sind, das erforderliche Kapital tatsächlich zu reservieren,</li>
    <li>eine neutrale bis leicht bullische Erwartung für den Basiswert haben,</li>
    <li>und das Assignment-Risiko bewusst als Teil ihrer Strategie akzeptieren.</li>
</ul>

<p>Weniger geeignet ist die Strategie, wenn das Kapital kurzfristig anderweitig benötigt wird, wenn ein stark fallendes Marktumfeld erwartet wird oder wenn das Ziel ausschließlich Prämieneinnahmen ohne Aktienübernahme ist – in dem Fall wäre ein zeitlich eng begrenzter OTM-Put mit gründlichem Risikomanagement besser zu begründen.</p>

<p>Anleger, die den Cash Secured Put mit dem <a href="/covered-call-strategie.html">Covered Call</a> kombinieren, haben die Grundbausteine der sogenannten Wheel-Strategie in der Hand: Nach einem Assignment werden auf die erhaltenen Aktien Covered Calls geschrieben, bis diese wieder abgerufen werden – und der Zyklus beginnt von vorne.</p>

<h3 id="fazit">Fazit</h3>

<p>Der Cash Secured Put ist eine strukturierte Möglichkeit, Prämieneinnahmen zu erzielen und gleichzeitig eine gewünschte Aktie zu einem selbst gewählten Preis zu kaufen. Das Konzept ist lehrbuchartig einfach – der entscheidende Erfolgsfaktor liegt jedoch in der disziplinierten Strike-Wahl, der bewussten Kapitalplanung und der Bereitschaft, bei einem Assignment tatsächlich Aktionär zu werden. Wer beide Strategien meisterhaft beherrscht, hat mit dem Cash Secured Put und dem <a href="/covered-call-strategie.html">Covered Call</a> die vollständige Wheel-Strategie in der Hand. Vertiefen Sie Ihr Wissen zu Ausübung und Zuteilung im Artikel <a href="/assignment-und-ausuebung.html">Assignment und Ausübung</a> sowie zu übergreifenden Schutzmaßnahmen im Beitrag zum <a href="/risikomanagement-optionshandel.html">Risikomanagement im Optionshandel</a>.</p>

<h3>Quellen &amp; weiterführende Literatur</h3>
<ul>
    <li><a href="https://www.optionseducation.org" target="_blank" rel="noopener">The Options Industry Council (OIC) – Options Education</a></li>
    <li><a href="https://www.cboe.com" target="_blank" rel="noopener">Cboe Global Markets – Options Education</a></li>
    <li>John C. Hull: „Options, Futures, and Other Derivatives", Pearson.</li>
</ul>
