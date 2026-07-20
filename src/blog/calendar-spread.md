---
layout: layouts/blog-post.njk
pageTitle: "Calendar Spread: Mit unterschiedlichen Laufzeiten handeln"
subtitle: "Wie Sie mit gleichem Strike und zwei Laufzeiten den schnelleren Zeitwertverfall der kurzen Option nutzen."
description: "Calendar Spread erklärt: Verkauf einer kurzen und Kauf einer langen Option mit gleichem Strike, warum er vom Zeitwertverfall profitiert und wann er passt."
date: 2026-07-04
category: "Strategie"
tags: ["Strategie", "Volatilität"]
permalink: /calendar-spread.html
summary: "Bei einem Calendar Spread verkaufen Sie eine kurzlaufende und kaufen eine langlaufende Option mit gleichem Strike. Weil die kurze Option ihren Zeitwert schneller verliert, ist dieser Unterschied die zentrale Ertragsquelle – vor allem in ruhigen Märkten nahe dem Strike."
faq:
  - q: "Was ist ein Calendar Spread?"
    a: "Ein Calendar Spread kombiniert den Verkauf einer kurzlaufenden und den Kauf einer langlaufenden Option gleichen Typs mit identischem Strike-Preis. Er profitiert davon, dass die verkaufte kurze Option ihren Zeitwert schneller verliert als die gekaufte lange Option."
  - q: "In welchem Marktumfeld funktioniert ein Calendar Spread am besten?"
    a: "Tendenziell in ruhigen Märkten, in denen der Kurs nahe am gewählten Strike bleibt. Dann verfällt die kurze Option weitgehend wertlos, während die lange Option noch Zeitwert behält."
  - q: "Welche Rolle spielt die implizite Volatilität?"
    a: "Die langlaufende Option reagiert stärker auf Volatilitätsänderungen. Steigende implizite Volatilität ist für einen Calendar Spread tendenziell vorteilhaft, fallende Volatilität wirkt eher nachteilig."
---

<p>Ein <strong>Calendar Spread</strong> – auch Zeit-Spread oder horizontaler Spread genannt – gehört zu den Optionsstrategien, die nicht auf eine große Kursbewegung setzen, sondern auf den Faktor Zeit. Sie verkaufen dabei eine kurzlaufende und kaufen gleichzeitig eine langlaufende Option gleichen Typs mit demselben <span class="key-term">Strike-Preis</span>. In diesem Artikel erfahren Sie, wie ein Calendar Spread funktioniert, warum er vom schnelleren Zeitwertverfall der kurzen Option profitiert und in welchem Marktumfeld – ruhig und nahe am Strike – er seine Stärken ausspielt.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken bis hin zum Totalverlust des eingesetzten Kapitals. Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. Konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#was-ist">Was ist ein Calendar Spread?</a></li>
        <li><a href="#aufbau">Aufbau: gleicher Strike, zwei Laufzeiten</a></li>
        <li><a href="#theta">Warum Theta die Hauptrolle spielt</a></li>
        <li><a href="#volatilitaet">Die Rolle der impliziten Volatilität</a></li>
        <li><a href="#beispiel">Ein fiktives Rechenbeispiel</a></li>
        <li><a href="#marktumfeld">In welchem Marktumfeld er glänzt</a></li>
        <li><a href="#risiken">Chancen und Risiken</a></li>
        <li><a href="#fazit">Fazit</a></li>
    </ol>
</div>

<figure class="blog-figure">
    <img src="/blog/figures/calendar-spread.svg" alt="Zeitwertverfall zweier Optionen mit gleichem Strike: die kurze Laufzeit verliert schneller an Wert als die lange." width="680" height="400" loading="lazy">
    <figcaption>Die verkaufte kurze Option verliert ihren Zeitwert schneller als die gekaufte lange Option – dieser Unterschied ist der Kern des Calendar Spreads.</figcaption>
</figure>

<h3 id="was-ist">Was ist ein Calendar Spread?</h3>

<p>Ein Calendar Spread besteht aus zwei Optionen desselben Typs (beide Calls oder beide Puts) auf denselben Basiswert mit identischem Strike – aber unterschiedlichen Verfallsterminen. Sie verkaufen die kurzlaufende Option und kaufen die langlaufende. Weil sich die beiden Kontrakte in einer Optionskette nach Laufzeit nebeneinander anordnen lassen, spricht man auch von einem „horizontalen" Spread.</p>

<p>Im Unterschied zum <span class="key-term">Vertical Spread</span>, der zwei verschiedene Strikes bei gleicher Laufzeit kombiniert, variiert der Calendar Spread also nicht den Strike, sondern die Zeit. Da die langlaufende Option teurer ist als die kurzlaufende, zahlen Sie beim Eröffnen in der Regel einen Nettobetrag (Nettodebit). Dieser Debit ist zugleich der maximale Verlust, den die Position im ungünstigen Fall erleiden kann.</p>

<h3 id="aufbau">Aufbau: gleicher Strike, zwei Laufzeiten</h3>

<p>Der Reiz der Strategie liegt in der unterschiedlichen Geschwindigkeit, mit der die beiden Optionen an Wert verlieren. Beide Optionen bestehen zu einem großen Teil aus <span class="key-term">Zeitwert</span> – jenem Teil des Optionspreises, der über den inneren Wert hinausgeht und mit fortschreitender Laufzeit schwindet. Entscheidend ist: Der Zeitwert einer Option nimmt nicht linear ab, sondern beschleunigt sich, je näher der Verfall rückt.</p>

<div class="tip-box">
    <h4>Gut zu wissen</h4>
    <p>Ziel eines klassischen Calendar Spreads ist es, die verkaufte kurze Option möglichst wertlos verfallen zu lassen, während die gekaufte lange Option noch einen Großteil ihres Zeitwerts behält. Der Kurs des Basiswerts sollte dafür nahe am gewählten Strike bleiben.</p>
</div>

<h3 id="theta">Warum Theta die Hauptrolle spielt</h3>

<p>Der Motor des Calendar Spreads ist der <span class="key-term">Time Decay</span> – der Zeitwertverfall, gemessen durch die Kennzahl <span class="key-term">Theta</span>. Theta gibt an, wie viel Wert eine Option pro Tag allein durch das Verstreichen der Zeit verliert. Weil sich dieser Verfall zum Verfallstag hin beschleunigt, verliert die kurzlaufende (verkaufte) Option deutlich schneller an Zeitwert als die langlaufende (gekaufte) Option.</p>

<p>Als Verkäufer der kurzen Option profitieren Sie von deren schnellem Verfall, während die lange Option, die Sie halten, ihren Zeitwert langsamer abbaut. Bleibt der Kurs in der Nähe des Strikes, arbeitet dieser Theta-Unterschied für Sie: Sie könnten die verfallene kurze Option günstig zurückkaufen oder verfallen lassen und behielten eine Long-Option mit noch spürbarem Restwert. Vertiefende Grundlagen zum Zeitwertverfall lesen Sie im Beitrag <a href="/theta-zeitwertverfall.html">Theta und Zeitwertverfall</a>.</p>

<div class="warning-box">
    <h4>Wichtig</h4>
    <p>Der Theta-Vorteil verkehrt sich ins Gegenteil, wenn sich der Kurs weit vom Strike entfernt. Läuft der Basiswert stark in eine Richtung, verlieren beide Optionen an Zeitwert und der erhoffte Unterschied verschwindet – die Position gerät dann in der Regel in den Verlust.</p>
</div>

<h3 id="volatilitaet">Die Rolle der impliziten Volatilität</h3>

<p>Neben der Zeit spielt die <span class="key-term">Implizite Volatilität</span> eine zentrale Rolle. Sie bildet die vom Markt erwartete künftige Schwankungsbreite ab und beeinflusst die Höhe der Optionsprämien. Für einen Calendar Spread ist wichtig: Die langlaufende Option reagiert stärker auf Änderungen der Volatilität als die kurzlaufende, weil sie mehr Zeitwert enthält.</p>

<p>Steigt die implizite Volatilität, gewinnt die lange Option tendenziell stärker an Wert als die kurze – das käme der Position zugute. Fällt die Volatilität dagegen, wirkt das eher nachteilig. Ein Calendar Spread ist damit nicht nur eine Wette auf ruhige Kurse, sondern auch auf ein stabiles bis leicht steigendes Volatilitätsniveau. Wie Volatilität Optionspreise formt, erklärt der Artikel <a href="/volatilitaet-verstehen.html">Volatilität verstehen</a>.</p>

<h3 id="beispiel">Ein fiktives Rechenbeispiel</h3>

<p>Angenommen, eine Aktie notiert bei 100&nbsp;€. Sie verkaufen einen Call mit Strike 100&nbsp;€ und rund 30 Tagen Laufzeit für 2,00&nbsp;€ und kaufen gleichzeitig einen Call mit Strike 100&nbsp;€ und rund 60 Tagen Laufzeit für 3,20&nbsp;€. Der Nettodebit beträgt 1,20&nbsp;€ je Aktie, also 120&nbsp;€ pro Kontrakt. Dieser Betrag ist zugleich Ihr maximaler Verlust. Die folgenden Zahlen sind fiktiv und dienen nur der Veranschaulichung.</p>

<table class="data-table">
    <thead>
        <tr>
            <th>Kurs bei Verfall der kurzen Option</th>
            <th>Was passiert</th>
            <th>Tendenz für die Position</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Nahe 100&nbsp;€</strong></td>
            <td>Kurzer Call verfällt (fast) wertlos, langer Call behält Zeitwert</td>
            <td>Günstigstes Szenario – größter Ertrag</td>
        </tr>
        <tr>
            <td><strong>Deutlich unter 100&nbsp;€</strong></td>
            <td>Beide Calls verlieren an Wert, auch die lange Option ist kaum noch etwas wert</td>
            <td>Verlust bis maximal zum gezahlten Debit</td>
        </tr>
        <tr>
            <td><strong>Deutlich über 100&nbsp;€</strong></td>
            <td>Beide Calls tief im Geld, ihre Werte gleichen sich zunehmend an</td>
            <td>Ertrag schmilzt, Verlust bis maximal zum Debit</td>
        </tr>
    </tbody>
</table>

<p>Der größte Ertrag entsteht, wenn der Kurs bei Verfall der kurzen Option möglichst genau am Strike von 100&nbsp;€ liegt. Dann verfällt die verkaufte Option nahezu wertlos, und die verbleibende lange Option lässt sich mit Restwert veräußern – oder als Grundlage für einen neuen kurzen Verkauf im Folgemonat nutzen.</p>

<h3 id="marktumfeld">In welchem Marktumfeld er glänzt</h3>

<p>Ein Calendar Spread spielt seine Stärken in einem ruhigen Marktumfeld aus, in dem sich der Kurs seitwärts und nahe am gewählten Strike bewegt. Wählen Sie den Strike ungefähr auf Höhe des aktuellen Kurses, richten Sie die Position neutral aus. Ein Strike oberhalb oder unterhalb des Kurses verleiht ihr eine leicht gerichtete Ausrichtung, weil der maximale Ertrag dort erreicht wird, wo der Kurs bei Verfall auf den Strike trifft.</p>

<div class="strategy-box">
    <h4>Ein Calendar Spread könnte passen, wenn …</h4>
    <ul>
        <li>Sie kurzfristig eine ruhige, seitwärts gerichtete Kursentwicklung nahe dem Strike erwarten.</li>
        <li>Sie damit rechnen, dass die implizite Volatilität stabil bleibt oder leicht steigt.</li>
        <li>Sie den beschleunigten Zeitwertverfall der kurzen Laufzeit gezielt für sich arbeiten lassen möchten.</li>
        <li>Sie ein von vornherein begrenztes und bekanntes Verlustrisiko bevorzugen.</li>
    </ul>
</div>

<h3 id="risiken">Chancen und Risiken</h3>

<div class="strategy-box">
    <h4>Chancen</h4>
    <p>Das Verlustrisiko ist auf den gezahlten Nettodebit begrenzt und von Beginn an bekannt. Bleibt der Kurs nahe am Strike, nutzt die Strategie den schnelleren Zeitwertverfall der kurzen Option, und ein steigendes Volatilitätsniveau kann zusätzlich helfen. Der Kapitaleinsatz fällt geringer aus als beim Kauf einer einzelnen langlaufenden Option.</p>
</div>

<div class="strategy-box">
    <h4>Risiken</h4>
    <p>Bewegt sich der Kurs deutlich vom Strike weg, geht der Zeitwertvorteil verloren und die Position rutscht in den Verlust. Auch fallende implizite Volatilität wirkt nachteilig, weil sie die lange Option stärker belastet. Hinzu kommt: Bei amerikanischen Optionen besteht das Risiko einer vorzeitigen Zuteilung der kurzen Option, die zusätzliche Verwaltung erfordern kann.</p>
</div>

<div class="callout">
    <strong>Definiertes Risiko, bewegliche Bausteine:</strong> Anders als bei einem <a href="/credit-spread-vs-debit-spread.html">vertikalen Credit- oder Debit-Spread</a> hängt der Erfolg eines Calendar Spreads nicht nur von der Kursrichtung ab, sondern maßgeblich vom Zusammenspiel aus Zeit und Volatilität.
</div>

<h3 id="fazit">Fazit</h3>

<p>Der Calendar Spread ist eine Strategie für Anleger, die auf ruhige Kurse nahe einem bestimmten Strike setzen und den unterschiedlichen Zeitwertverfall zweier Laufzeiten nutzen möchten. Seine Ertragsquelle ist nicht eine große Kursbewegung, sondern das schnellere Schwinden des Zeitwerts der kurzen Option – flankiert von der impliziten Volatilität, die auf die lange Option stärker wirkt. Das Verlustrisiko bleibt auf den gezahlten Debit begrenzt, der maximale Ertrag stellt sich jedoch nur ein, wenn Kurs und Strike bei Verfall der kurzen Option nahe beieinanderliegen. Wie bei jeder Optionsstrategie gilt: Verstehen Sie das Zusammenspiel der Einflussfaktoren, bevor Sie eine Position eröffnen. Eine Erklärung aller hier verwendeten Fachbegriffe finden Sie im <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3>Quellen &amp; weiterführende Literatur</h3>
<ul>
    <li><a href="https://www.optionseducation.org" target="_blank" rel="noopener">The Options Industry Council (OIC) – Options Education</a></li>
    <li><a href="https://www.cboe.com" target="_blank" rel="noopener">Cboe Global Markets – Options Education</a></li>
    <li>John C. Hull: „Options, Futures, and Other Derivatives", Pearson.</li>
</ul>
</content>
</invoke>
