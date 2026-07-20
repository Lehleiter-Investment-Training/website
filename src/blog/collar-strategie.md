---
layout: layouts/blog-post.njk
pageTitle: "Die Collar-Strategie: Aktien kostengünstig absichern"
subtitle: "Wie Sie mit einem gekauften Put und einem verkauften Call eine Aktienposition günstig – teils kostenneutral – nach unten absichern."
description: "Collar Strategie einfach erklärt: eine Aktienposition mit gekauftem Put und verkauftem Call günstig, teils kostenneutral nach unten absichern."
date: 2026-06-30
category: "Strategie"
tags: ["Strategie", "Absicherung"]
permalink: /collar-strategie.html
summary: "Ein Collar kombiniert den Kauf eines Puts mit dem Verkauf eines Calls auf eine bestehende Aktienposition. Die Call-Prämie finanziert den schützenden Put ganz oder teilweise, sodass die Absicherung nach unten günstig oder sogar kostenneutral wird – im Gegenzug ist das Gewinnpotenzial nach oben gedeckelt."
faq:
  - q: "Was ist die Collar-Strategie?"
    a: "Die Collar-Strategie kombiniert eine bestehende Aktienposition mit dem Kauf einer Put-Option zur Absicherung nach unten und dem Verkauf einer Call-Option, deren Prämie den Put finanziert. Sowohl Verlust als auch Gewinn sind dadurch begrenzt."
  - q: "Ist ein Collar kostenlos?"
    a: "Nicht zwingend. Deckt die eingenommene Call-Prämie die gezahlte Put-Prämie exakt, spricht man von einem Zero-Cost Collar. Meist verbleiben geringe Nettokosten oder ein kleiner Nettoerlös, hinzu kommen Transaktionskosten."
  - q: "Was ist der Nachteil eines Collars?"
    a: "Der verkaufte Call deckelt das Gewinnpotenzial nach oben. Steigt die Aktie über den Call-Strike, werden die Aktien abgerufen und Anleger verpassen weitere Kursgewinne. Der günstige Schutz wird also mit begrenzten Chancen erkauft."
---

<p>Die <span class="key-term">Collar</span> Strategie verbindet zwei bekannte Optionsbausteine zu einer kostengünstigen Absicherung: Sie kaufen einen schützenden Put und verkaufen zugleich einen Call, dessen Prämie den Put ganz oder teilweise finanziert. So begrenzen Sie den möglichen Verlust einer bestehenden Aktienposition nach unten – und zahlen dafür mit gedeckelten Gewinnchancen nach oben. Dieser Artikel zeigt, wie die Collar Strategie aufgebaut ist, wie ihr Auszahlungsprofil aussieht und wann sie sich eignen kann.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken bis hin zum Totalverlust des eingesetzten Kapitals. Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. Konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#was-ist">Was ist die Collar Strategie?</a></li>
        <li><a href="#aufbau">Aufbau: Put kaufen, Call verkaufen</a></li>
        <li><a href="#beispiel">Ein Rechenbeispiel mit drei Szenarien</a></li>
        <li><a href="#kosten">Kostenneutral absichern: der Zero-Cost Collar</a></li>
        <li><a href="#chancen-grenzen">Chancen und Grenzen</a></li>
        <li><a href="#strike-laufzeit">Strike-Wahl und Laufzeit</a></li>
        <li><a href="#eignung">Für wen sich die Strategie eignet</a></li>
    </ol>
</div>

<figure class="blog-figure">
    <img src="/blog/figures/collar-strategie.svg" alt="Auszahlungsprofil eines Collars bei Verfall: Verlust nach unten begrenzt, Gewinn nach oben gedeckelt, dazwischen freie Kursbewegung." width="680" height="400" loading="lazy">
    <figcaption>Auszahlungsprofil eines Collars bei Verfall: Der Verlust ist nach unten begrenzt und der Gewinn nach oben gedeckelt – zwischen den beiden Strikes bewegt sich die Position frei.</figcaption>
</figure>

<h3 id="was-ist">Was ist die Collar Strategie?</h3>

<p>Ein Collar ist eine Absicherungsstrategie für eine Aktie, die Sie bereits besitzen. Der Name („Kragen") beschreibt das Prinzip treffend: Die Position wird sowohl nach unten als auch nach oben eingefasst. Nach unten schützt ein gekaufter Put, nach oben begrenzt ein verkaufter Call das Ergebnis. Zwischen diesen beiden Grenzen kann sich der Kurs frei bewegen.</p>

<p>Der Reiz der Strategie liegt in ihrer Finanzierung: Während ein reiner Protective Put laufend Prämie kostet, nehmen Sie beim Collar durch den verkauften Call selbst Prämie ein. Diese Einnahme senkt die Kosten der Absicherung – im Idealfall bis auf null. Der Collar ist damit ein klassischer <span class="key-term">Hedge</span>, der bewusst auf einen Teil der Aufwärtschance verzichtet, um den Schutz nach unten günstiger zu machen.</p>

<h3 id="aufbau">Aufbau: Put kaufen, Call verkaufen</h3>

<p>Ein Collar besteht aus drei Teilen. Erstens halten Sie die Aktie bereits im Depot – üblicherweise bezieht sich je ein Optionskontrakt auf 100 Aktien. Zweitens kaufen Sie eine <span class="key-term">Put-Option</span> mit einem Strike unterhalb des aktuellen Kurses; sie gibt Ihnen das Recht, die Aktien zum festgelegten <span class="key-term">Strike-Preis</span> zu verkaufen, und begrenzt so den Verlust nach unten. Drittens verkaufen Sie eine Call-Option mit einem Strike oberhalb des aktuellen Kurses; diesen einnahmenorientierten Baustein kennen viele Anleger als <span class="key-term">Covered Call</span>.</p>

<p>Die beim Call vereinnahmte <span class="key-term">Premium</span> (Optionsprämie) dient dazu, den Kauf des Puts zu bezahlen. Genau hier liegt der Unterschied zum einzelnen Schutzbaustein: Wie ein reiner Absicherungs-Put funktioniert, lesen Sie im Artikel <a href="/protective-put.html">Protective Put</a>; die einnahmenorientierte Gegenseite erläutert der Beitrag <a href="/covered-call-strategie.html">Covered Call</a>. Der Collar setzt beide zusammen und nutzt die Einnahme des Calls, um den Schutz des Puts zu verbilligen.</p>

<h3 id="beispiel">Ein Rechenbeispiel mit drei Szenarien</h3>

<p>Das folgende Beispiel ist <strong>rein fiktiv und dient ausschließlich der Veranschaulichung</strong>. Angenommen, Sie halten 100 Aktien zu einem Kurs von 50&nbsp;€. Sie kaufen einen Put mit Strike 45&nbsp;€ für eine Prämie von 2,00&nbsp;€ je Aktie und verkaufen einen Call mit Strike 55&nbsp;€ für eine Prämie von 1,80&nbsp;€ je Aktie. Die Nettokosten der Absicherung betragen damit 0,20&nbsp;€ je Aktie (2,00&nbsp;€ − 1,80&nbsp;€).</p>

<table class="data-table">
    <thead>
        <tr>
            <th>Szenario bei Verfall</th>
            <th>Was passiert</th>
            <th>Ergebnis (fiktives Beispiel)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Kurs unter 45&nbsp;€ (unter Put-Strike)</strong></td>
            <td>Der Put greift, Sie verkaufen zu 45&nbsp;€; der Call verfällt wertlos</td>
            <td>Verlust auf ca. 5,20&nbsp;€ je Aktie begrenzt (50 − 45 + 0,20)</td>
        </tr>
        <tr>
            <td><strong>Kurs zwischen 45&nbsp;€ und 55&nbsp;€</strong></td>
            <td>Beide Optionen verfallen wertlos, die Aktie bleibt im Depot</td>
            <td>Kursveränderung abzüglich 0,20&nbsp;€ Nettokosten</td>
        </tr>
        <tr>
            <td><strong>Kurs über 55&nbsp;€ (über Call-Strike)</strong></td>
            <td>Die Aktien werden zu 55&nbsp;€ abgerufen; der Put verfällt wertlos</td>
            <td>Gewinn auf ca. 4,80&nbsp;€ je Aktie gedeckelt (55 − 50 − 0,20)</td>
        </tr>
    </tbody>
</table>

<p>In diesem Beispiel ist der Verlust selbst bei einem starken Kurssturz auf rund 5,20&nbsp;€ je Aktie begrenzt, während der Gewinn bei etwa 4,80&nbsp;€ je Aktie gedeckelt bleibt. Der Collar formt aus einer offenen Aktienposition also ein klar umrissenes Rechteck aus möglichem Gewinn und möglichem Verlust.</p>

<h3 id="kosten">Kostenneutral absichern: der Zero-Cost Collar</h3>

<p>Werden die Strikes so gewählt, dass die eingenommene Call-Prämie die gezahlte Put-Prämie genau ausgleicht, entsteht ein sogenannter <strong>Zero-Cost Collar</strong> – die Absicherung kostet dann per Saldo (vor Transaktionskosten) nichts. In der Praxis lässt sich diese Punktlandung selten exakt erreichen; meist verbleiben geringe Nettokosten oder ein kleiner Nettoerlös.</p>

<div class="tip-box">
    <h4>Gut zu wissen</h4>
    <p>„Kostenneutral" bezieht sich nur auf den Saldo der beiden Prämien. Ein Preis wird dennoch bezahlt – nämlich in Form des aufgegebenen Aufwärtspotenzials oberhalb des Call-Strikes. Der Collar verschiebt die Kosten der Absicherung somit von einer direkten Prämienzahlung hin zu einer begrenzten Gewinnchance.</p>
</div>

<h3 id="chancen-grenzen">Chancen und Grenzen</h3>

<div class="strategy-box">
    <h4>Chancen</h4>
    <p>Der Collar begrenzt den Verlust einer Aktienposition zuverlässig nach unten und ist dabei deutlich günstiger als ein alleiniger Protective Put, weil die Call-Prämie einen Teil der Kosten trägt. Für Anleger, die einen Gewinn absichern oder eine Position ruhig durch eine unsichere Phase führen möchten, kann das ein planbares Risikoprofil schaffen.</p>
</div>

<div class="strategy-box">
    <h4>Grenzen</h4>
    <p>Der Preis für den günstigen Schutz ist das gedeckelte Aufwärtspotenzial: Steigt die Aktie über den Call-Strike, werden die Aktien abgerufen und ein weiterer Kursanstieg entgeht Ihnen. Zudem können Transaktionskosten und – bei amerikanischen Optionen – eine vorzeitige Zuteilung des Calls das Ergebnis beeinflussen.</p>
</div>

<div class="callout">
    <strong>Praxis-Hinweis:</strong> Ein Collar ist keine dauerhafte „Gratis-Versicherung". Er tauscht Aufwärtschance gegen Abwärtsschutz. Wer mit deutlich steigenden Kursen rechnet, beschneidet mit dem verkauften Call sein Gewinnpotenzial unnötig.
</div>

<h3 id="strike-laufzeit">Strike-Wahl und Laufzeit</h3>

<p>Die Wahl der beiden Strikes bestimmt Kosten und Profil des Collars:</p>

<ul>
    <li><strong>Put-Strike näher am Kurs:</strong> mehr Schutz und ein geringerer möglicher Verlust, dafür eine höhere Put-Prämie – die Absicherung wird teurer.</li>
    <li><strong>Call-Strike näher am Kurs:</strong> höhere Call-Einnahme, wodurch der Put leichter finanziert wird, aber ein enger gedeckeltes Gewinnpotenzial.</li>
    <li><strong>Beide Strikes weiter entfernt:</strong> mehr Bewegungsspielraum für die Aktie, dafür weniger Schutz und eine geringere Prämieneinnahme.</li>
</ul>

<p>Auch die Laufzeit ist eine bewusste Entscheidung: Längere Laufzeiten sichern über einen größeren Zeitraum ab, binden die Position aber länger in das enge Kursfenster. Kürzere Laufzeiten sind flexibler, erfordern jedoch häufigeres Erneuern beider Optionsbeine. Wie sich ein solcher Schutz sinnvoll in das Gesamtbild einordnet, behandelt der Artikel <a href="/risikomanagement-optionshandel.html">Risikomanagement im Optionshandel</a>.</p>

<div class="warning-box">
    <h4>Wichtig zu bedenken</h4>
    <p>Ein Collar reduziert das Risiko, macht die Position aber nicht risikofrei. Zwischen den beiden Strikes trägt Ihre Aktie weiterhin Kursschwankungen, und der Schutz greift erst unterhalb des Put-Strikes. Die genaue Ausgestaltung sollte zu den eigenen Zielen und zur Risikotragfähigkeit passen.</p>
</div>

<h3 id="eignung">Für wen sich die Strategie eignet</h3>

<p>Ein Collar kann für Anleger interessant sein, die eine Aktie halten möchten, einen aufgelaufenen Gewinn jedoch gegen Rückschläge absichern wollen – etwa vor einem unsicheren Ereignis. Die Strategie passt eher zu einer neutralen bis leicht positiven Erwartung: Wer mit stark steigenden Kursen rechnet, gibt durch den verkauften Call zu viel Aufwärtspotenzial auf. Wer dagegen eine Position ohnehin nur bis zu einem bestimmten Zielkurs halten will, für den fügt sich der gedeckelte Gewinn oft gut in den Plan.</p>

<h3>Fazit</h3>

<p>Die Collar-Strategie ist ein durchdachter Kompromiss: Sie sichert eine bestehende Aktienposition kostengünstig – teils kostenneutral – nach unten ab, indem die Prämie eines verkauften Calls den schützenden Put finanziert. Der Preis dafür ist ein nach oben gedeckeltes Gewinnpotenzial. Damit steht der Collar zwischen dem reinen Schutz eines <a href="/protective-put.html">Protective Put</a> und der Einnahmenlogik eines <a href="/covered-call-strategie.html">Covered Call</a>. Wie bei jeder Strategie gilt: Verstehen Sie das eingegangene Chance-Risiko-Verhältnis, bevor Sie eine Position eröffnen, und betten Sie die Absicherung in ein durchdachtes <a href="/risikomanagement-optionshandel.html">Risikomanagement</a> ein. Eine Erläuterung aller Fachbegriffe finden Sie im <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3>Quellen &amp; weiterführende Literatur</h3>
<ul>
    <li><a href="https://www.optionseducation.org" target="_blank" rel="noopener">The Options Industry Council (OIC) – Options Education</a></li>
    <li><a href="https://www.cboe.com" target="_blank" rel="noopener">Cboe Global Markets – Options Education</a></li>
    <li>John C. Hull: „Options, Futures, and Other Derivatives", Pearson.</li>
</ul>
