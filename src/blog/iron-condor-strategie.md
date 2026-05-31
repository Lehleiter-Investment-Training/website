---
layout: layouts/blog-post.njk
pageTitle: "Iron Condor: Mit Seitwärtsmärkten Geld verdienen"
subtitle: "Wie Sie in ruhigen Märkten von stagnierendem Kursen profitieren können – mit klar begrenztem Risiko."
description: "Iron Condor verständlich erklärt: Aufbau aus vier Optionen, Gewinn- und Verlustprofil, Rechenbeispiel sowie Einsatz und Risiken der neutralen Strategie."
date: 2026-03-16
category: "Strategie"
tags: ["Strategie", "Neutral"]
permalink: /iron-condor-strategie.html
summary: "Ein Iron Condor kombiniert einen Bull Put Spread und einen Bear Call Spread, sodass der Händler eine Nettoprämie vereinnahmt, die er behält, wenn der Kurs bis zum Verfall in einer definierten Spanne bleibt. Das maximale Risiko ist von Anfang an begrenzt."
faq:
  - q: "Was ist ein Iron Condor?"
    a: "Ein Iron Condor ist eine Optionsstrategie aus vier Positionen: ein Bull Put Spread unterhalb des aktuellen Kurses und ein Bear Call Spread oberhalb. Der Händler vereinnahmt eine Nettoprämie und profitiert, wenn der Basiswert bis zum Verfall innerhalb der definierten Kursspanne bleibt."
  - q: "Wie hoch ist der maximale Gewinn und Verlust beim Iron Condor?"
    a: "Der maximale Gewinn entspricht der vereinnahmten Nettoprämie. Der maximale Verlust ist begrenzt und ergibt sich aus der Breite des verlierenden Spreads abzüglich der erhaltenen Prämie. Ein unbegrenztes Verlustrisiko besteht nicht."
  - q: "Wann eignet sich ein Iron Condor?"
    a: "Der Iron Condor eignet sich, wenn ein Händler eine neutrale Marktmeinung hat und mit einem Seitwärtsverlauf des Basiswerts rechnet. Hohe implizite Volatilität kann attraktivere Prämien ermöglichen, erhöht aber zugleich die Wahrscheinlichkeit größerer Kursbewegungen."
---

<p>Der <span class="key-term">Iron Condor</span> gehört zu den beliebtesten neutralen Optionsstrategien überhaupt – denn er erlaubt es Händlern, in Seitwärtsmärkten eine <span class="key-term">Premium</span> zu vereinnahmen, ohne auf steigende oder fallende Kurse setzen zu müssen. In diesem Artikel erfahren Sie, wie der Iron Condor aufgebaut ist, wie Gewinn und Verlust entstehen und worauf Sie bei Einsatz und Verwaltung dieser Strategie achten sollten.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken bis hin zum Totalverlust des eingesetzten Kapitals. Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. Konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#aufbau">Aufbau des Iron Condor</a></li>
        <li><a href="#marktmeinung">Marktmeinung und Einsatzgebiet</a></li>
        <li><a href="#gewinn">Wie der Gewinn entsteht</a></li>
        <li><a href="#profil">Gewinn, Verlust und Break-even-Punkte</a></li>
        <li><a href="#volatilitaet">Einfluss der impliziten Volatilität</a></li>
        <li><a href="#risiken">Risiken und Positionsmanagement</a></li>
        <li><a href="#fazit">Fazit</a></li>
    </ol>
</div>

<figure class="blog-figure">
    <img src="/blog/figures/iron-condor-strategie.svg" alt="Auszahlungsprofil des Iron Condor: Gewinnzone zwischen den verkauften Strikes, begrenzte Verluste außen." width="680" height="400" loading="lazy">
    <figcaption>Auszahlungsprofil des Iron Condor: Gewinnzone zwischen den verkauften Strikes, begrenzte Verluste außen.</figcaption>
</figure>

<h3 id="aufbau">Aufbau des Iron Condor</h3>

<p>Ein Iron Condor setzt sich aus genau vier Optionspositionen zusammen: zwei Calls und zwei Puts auf denselben Basiswert mit identischem Verfallsdatum. Konkret handelt es sich um die Kombination zweier <span class="key-term">Vertical Spread</span>s:</p>

<ul>
    <li><strong>Bull Put Spread (unterhalb des aktuellen Kurses):</strong> Sie verkaufen einen Put mit einem höheren <span class="key-term">Strike-Preis</span> und kaufen gleichzeitig einen Put mit einem niedrigeren Strike. Beide Strikes liegen <span class="key-term">Out-of-the-Money (OTM)</span>, also unterhalb des aktuellen Kurses. Dieser Spread bringt eine Nettoprämie ein.</li>
    <li><strong>Bear Call Spread (oberhalb des aktuellen Kurses):</strong> Sie verkaufen einen Call mit einem niedrigeren Strike und kaufen einen Call mit einem höheren Strike. Auch diese beiden Strikes liegen OTM, diesmal oberhalb des Kurses. Auch hier vereinnahmen Sie eine Nettoprämie.</li>
</ul>

<p>Im Ergebnis halten Sie vier Optionen gleichzeitig: einen verkauften Put, einen gekauften Put (mit niedrigerem Strike), einen verkauften Call und einen gekauften Call (mit höherem Strike). Die gekauften Positionen – die sogenannten „Flügel" – begrenzen das Risiko nach unten bzw. oben. Deshalb ist der maximale Verlust stets bekannt, bevor Sie die Position eröffnen.</p>

<div class="callout">
    <strong>Praxis-Hinweis:</strong> Üblicherweise wird ein Iron Condor so konstruiert, dass die Abstände zwischen dem verkauften und dem gekauften Strike auf beiden Seiten gleich groß sind. Dies vereinfacht die Risikoberechnung erheblich.
</div>

<h3 id="marktmeinung">Marktmeinung und Einsatzgebiet</h3>

<p>Der Iron Condor ist eine <strong>neutrale Strategie</strong>. Sie setzen weder auf steigende noch auf fallende Kurse – Sie setzen darauf, dass der Basiswert bis zum Verfall <em>in einer Spanne</em> bleibt. Das macht die Strategie besonders geeignet für Marktphasen, in denen größere Bewegungen wenig wahrscheinlich erscheinen: etwa in stabilen Seitwärtsphasen, nach dem Abklingen von Volatilitätsspitzen oder in Zeiträumen ohne bedeutende Ereignisse wie Quartalsergebnisse oder Notenbankentscheide.</p>

<p>Händler, die den Iron Condor einsetzen, gehen davon aus, dass der Kurs des Basiswerts bis zum Verfall zwischen den beiden verkauften Strikes bleibt. Je weiter der aktuelle Kurs von den Strikes entfernt ist, desto größer ist der Puffer – aber desto geringer fällt in der Regel die vereinnahmte Nettoprämie aus.</p>

<h3 id="gewinn">Wie der Gewinn entsteht</h3>

<p>Als Verkäufer beider Spreads vereinnahmen Sie beim Eingehen der Position eine <strong>Nettoprämie</strong> (auch Net Credit genannt). Diese Prämie besteht überwiegend aus dem <span class="key-term">Zeitwert</span> der verkauften Optionen. Zeitwert ist jener Teil des Optionspreises, der ausschließlich auf die verbleibende Laufzeit zurückzuführen ist – er sinkt mit jedem Tag, der vergeht, auch wenn sich der Kurs des Basiswerts gar nicht bewegt.</p>

<p>Dieser Zeitwertverfall – in der Fachsprache <span class="key-term">Theta</span> – arbeitet bei einer Short-Optionsstrategie wie dem Iron Condor für den Händler: Solange der Kurs in der Gewinnzone bleibt, steigt der Wert der Position tendenziell täglich an. Verfallen alle vier Optionen am Laufzeitende wertlos, behält der Händler die gesamte vereinnahmte Nettoprämie als maximalen Gewinn.</p>

<p>Der Zusammenhang zwischen Prämien und Volatilität wird ausführlich im Artikel <a href="/volatilitaet-verstehen.html">Volatilität verstehen</a> erläutert. Den Unterschied zwischen Credit Spreads wie dem Iron Condor und Debit Spreads erklärt der Beitrag <a href="/credit-spread-vs-debit-spread.html">Credit Spread vs. Debit Spread</a>.</p>

<h3 id="profil">Gewinn, Verlust und Break-even-Punkte</h3>

<p>Das Risikoprofil des Iron Condor lässt sich klar benennen:</p>

<ul>
    <li><strong>Maximaler Gewinn:</strong> Die gesamte vereinnahmte Nettoprämie – erzielt, wenn alle vier Optionen wertlos verfallen, d.&nbsp;h. wenn der Kurs bei Verfall zwischen den beiden verkauften Strikes liegt.</li>
    <li><strong>Maximaler Verlust:</strong> Die Breite des verlierenden Spreads (Differenz der Strikes auf der betreffenden Seite) abzüglich der erhaltenen Nettoprämie. Das Risiko ist auf diesen Betrag begrenzt.</li>
    <li><strong>Break-even-Punkte:</strong> Der obere Break-even ergibt sich aus dem verkauften Call-Strike zuzüglich der Nettoprämie; der untere aus dem verkauften Put-Strike abzüglich der Nettoprämie.</li>
</ul>

<p>Das folgende Beispiel ist <strong>rein fiktiv und dient ausschließlich der Veranschaulichung</strong>:</p>

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
            <td>Verkaufter Put-Strike</td>
            <td>90&nbsp;€ (OTM)</td>
        </tr>
        <tr>
            <td>Gekaufter Put-Strike (Schutz)</td>
            <td>85&nbsp;€</td>
        </tr>
        <tr>
            <td>Verkaufter Call-Strike</td>
            <td>110&nbsp;€ (OTM)</td>
        </tr>
        <tr>
            <td>Gekaufter Call-Strike (Schutz)</td>
            <td>115&nbsp;€</td>
        </tr>
        <tr>
            <td>Vereinnahmte Nettoprämie (gesamt, pro Kontrakt à 100 Stück)</td>
            <td>150&nbsp;€</td>
        </tr>
        <tr>
            <td>Maximaler Gewinn</td>
            <td>150&nbsp;€ (Nettoprämie, bei Verfall zwischen 90 und 110&nbsp;€)</td>
        </tr>
        <tr>
            <td>Maximaler Verlust</td>
            <td>350&nbsp;€ (Spreadbreite 500&nbsp;€ – Prämie 150&nbsp;€)</td>
        </tr>
        <tr>
            <td>Unterer Break-even</td>
            <td>88,50&nbsp;€ (90 – 1,50)</td>
        </tr>
        <tr>
            <td>Oberer Break-even</td>
            <td>111,50&nbsp;€ (110 + 1,50)</td>
        </tr>
    </tbody>
</table>

<p>In diesem fiktiven Beispiel verläuft die Position profitabel, solange der Kurs am Verfallstag zwischen 88,50&nbsp;€ und 111,50&nbsp;€ liegt. Außerhalb dieser Spanne entstehen Verluste; der maximale Verlust ist auf 350&nbsp;€ pro Kontrakt begrenzt.</p>

<h3 id="volatilitaet">Einfluss der impliziten Volatilität</h3>

<p>Die <span class="key-term">Implizite Volatilität</span> (IV) hat einen zentralen Einfluss auf den Iron Condor. Hohe IV bedeutet, dass der Markt große Kursschwankungen erwartet – und dafür höhere Optionspreise zahlt. Für den Iron-Condor-Händler ergeben sich daraus höhere vereinnahmbare Prämien.</p>

<div class="tip-box">
    <h4>Gut zu wissen</h4>
    <p>Viele erfahrene Händler bevorzugen den Einstieg in einen Iron Condor in Phasen hoher impliziter Volatilität, weil die vereinnahmten Prämien dann größer sind und eine breitere Gewinnzone ermöglichen. Allerdings signalisiert hohe IV auch, dass der Markt größere Bewegungen erwartet – was das Risiko erhöht, dass der Kurs aus der Gewinnzone ausbricht.</p>
</div>

<p>Fällt die implizite Volatilität nach dem Eingehen der Position (ein Phänomen, das als „Volatilitätskompression" bezeichnet wird), sinken die Optionspreise – was den Wert der Short-Positionen verringert und der bestehenden Position zugutekommt. Steigt die IV hingegen nach dem Einstieg, steigen die Optionspreise, was zu einem unrealisierten Verlust führt, auch wenn sich der Kurs kaum bewegt hat.</p>

<h3 id="risiken">Risiken und Positionsmanagement</h3>

<div class="warning-box">
    <h4>Wichtige Risiken im Überblick</h4>
    <p>Obwohl das Verlustrisiko beim Iron Condor begrenzt ist, sollten folgende Punkte beachtet werden: Ein starker Ausbruch des Kurses über einen der verkauften Strikes führt zu Verlusten. Diese können das Mehrfache der vereinnahmten Prämie betragen, sind aber durch die gekauften Flügel gedeckelt.</p>
</div>

<p>Zu den wesentlichen Risiken und Aspekten des Positionsmanagements zählen:</p>

<ul>
    <li><strong>Kursausbruch:</strong> Bewegt sich der Basiswert stark in eine Richtung, kann der Verlust die gesamte vereinnahmte Prämie übersteigen. Je früher ein solcher Ausbruch erkannt und reagiert wird, desto geringer ist in der Regel der Schaden.</li>
    <li><strong>Vorzeitiges Schließen (Glattstellung):</strong> Viele Händler schließen einen Iron Condor, sobald ein bestimmter Prozentsatz der maximalen Prämie vereinnahmt wurde (z.&nbsp;B. 50&nbsp;%), um Restrisiken zu vermeiden. Dies ist eine gängige Risikomanagementpraxis.</li>
    <li><strong>Anpassen der Position:</strong> Nähert sich der Kurs einem der verkauften Strikes, kann die betreffende Seite des Condors angepasst werden – beispielsweise durch Rollen des Spreads auf einen weiter entfernten Strike. Solche Maßnahmen erfordern Erfahrung und können Kosten verursachen.</li>
    <li><strong>Maximales Verlustlimit:</strong> Viele erfahrene Händler legen vorab ein Verlustlimit fest (z.&nbsp;B. das Ein- bis Zweifache der vereinnahmten Prämie), bei dessen Erreichen die Position unabhängig von der eigenen Markteinschätzung geschlossen wird.</li>
</ul>

<p>Eine Übersicht aller hier verwendeten Fachbegriffe sowie weiterführende Erklärungen finden Sie im <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3 id="fazit">Fazit</h3>

<p>Der Iron Condor ist eine der am meisten genutzten neutralen Optionsstrategien und bietet eine klare Struktur: definiertes Risiko, begrenzter Gewinn in Form der vereinnahmten Nettoprämie und ein Profitieren vom Zeitwertverfall in ruhigen Märkten. Er ist für Händler geeignet, die eine neutrale Marktmeinung haben und bereit sind, aktiv auf Positionsveränderungen zu reagieren. Für Einsteiger empfiehlt es sich, die Mechanik zunächst auf Papier oder mit kleinen Kontraktgrößen zu üben, bevor größere Positionen eingegangen werden. Ergänzend lohnt sich die Lektüre des Artikels <a href="/credit-spread-vs-debit-spread.html">Credit Spread vs. Debit Spread</a>, der die Grundbausteine des Iron Condor im Vergleich beleuchtet.</p>

<h3>Quellen &amp; weiterführende Literatur</h3>
<ul>
    <li><a href="https://www.optionseducation.org" target="_blank" rel="noopener">The Options Industry Council (OIC) – Options Education</a></li>
    <li><a href="https://www.cboe.com" target="_blank" rel="noopener">Cboe Global Markets – Options Education</a></li>
    <li>John C. Hull: „Options, Futures, and Other Derivatives", Pearson.</li>
</ul>
