---
layout: layouts/blog-post.njk
pageTitle: "Protective Put: Aktien gegen Kursverluste absichern"
subtitle: "Wie eine gekaufte Put-Option als Versicherung für Ihr Aktiendepot wirkt – mit klar begrenztem Verlust."
description: "Protective Put verständlich erklärt: Aufbau, Auszahlungsprofil, Kosten der Absicherung und Einsatz dieser Hedging-Strategie für bestehende Aktienpositionen."
date: 2026-06-28
category: "Strategie"
tags: ["Strategie", "Absicherung"]
permalink: /protective-put.html
summary: "Ein Protective Put kombiniert eine bestehende Aktienposition mit dem Kauf einer Put-Option. Der Put wirkt wie eine Versicherung: Er begrenzt den möglichen Verlust nach unten, während das Gewinnpotenzial der Aktie nach oben – abzüglich der gezahlten Prämie – erhalten bleibt."
faq:
  - q: "Was ist ein Protective Put?"
    a: "Ein Protective Put ist eine Absicherungsstrategie, bei der ein Anleger zu einer bestehenden Aktienposition eine Put-Option kauft. Der Put gibt das Recht, die Aktien zum Strike-Preis zu verkaufen, und begrenzt so den möglichen Verlust nach unten."
  - q: "Was kostet ein Protective Put?"
    a: "Die Kosten entsprechen der gezahlten Optionsprämie. Sie hängen vom gewählten Strike, der Restlaufzeit und der impliziten Volatilität ab. Die Prämie ist der Preis für die Absicherung und reduziert die Nettorendite der Aktienposition."
  - q: "Wann ist ein Protective Put sinnvoll?"
    a: "Ein Protective Put kann sinnvoll sein, wenn ein Anleger eine Aktie weiter halten möchte, sich aber kurzfristig vor einem möglichen Kursrückgang schützen will – etwa vor unsicheren Ereignissen. Die Absicherung kostet jedoch Prämie und schmälert die Rendite."
---

<p>Wer Aktien besitzt, kennt das Dilemma: Man möchte an steigenden Kursen teilhaben, fürchtet aber einen plötzlichen Einbruch. Genau hier setzt der <span class="key-term">Protective Put</span> an – eine Absicherungsstrategie, die wie eine Versicherung für Ihr Depot funktioniert. In diesem Artikel erfahren Sie, wie ein Protective Put aufgebaut ist, wie sein Auszahlungsprofil aussieht und wann sich die Kosten der Absicherung lohnen können.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken bis hin zum Totalverlust des eingesetzten Kapitals. Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. Konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#aufbau">Aufbau des Protective Put</a></li>
        <li><a href="#funktion">Wie die Absicherung funktioniert</a></li>
        <li><a href="#profil">Auszahlungsprofil und Break-even</a></li>
        <li><a href="#kosten">Die Kosten der Versicherung</a></li>
        <li><a href="#strike">Strike-Wahl und Laufzeit</a></li>
        <li><a href="#abgrenzung">Abgrenzung zu anderen Strategien</a></li>
        <li><a href="#fazit">Fazit</a></li>
    </ol>
</div>

<figure class="blog-figure">
    <img src="/blog/figures/protective-put.svg" alt="Auszahlungsprofil des Protective Put: nach unten begrenzter Verlust, nach oben offenes Gewinnpotenzial." width="680" height="400" loading="lazy">
    <figcaption>Auszahlungsprofil des Protective Put: Unterhalb des Strikes ist der Verlust begrenzt, nach oben bleibt das Gewinnpotenzial – vermindert um die gezahlte Prämie – erhalten.</figcaption>
</figure>

<h3 id="aufbau">Aufbau des Protective Put</h3>

<p>Ein Protective Put besteht aus genau zwei Bausteinen: Sie <strong>besitzen die Aktie</strong> (oder kaufen sie gleichzeitig) und <strong>kaufen zusätzlich eine <span class="key-term">Put-Option</span></strong> auf denselben Basiswert. Üblicherweise sichert ein Kontrakt 100 Aktien ab.</p>

<p>Der Put gibt Ihnen das Recht, die Aktien zum festgelegten <span class="key-term">Strike-Preis</span> zu verkaufen – unabhängig davon, wie tief der Marktkurs fällt. Damit ist Ihr Verlust nach unten begrenzt. Dieses Prinzip macht den Protective Put zu einer der intuitivsten Absicherungsstrategien überhaupt: Sie zahlen eine Prämie und erhalten dafür Schutz, ganz ähnlich wie bei einer Versicherungspolice.</p>

<h3 id="funktion">Wie die Absicherung funktioniert</h3>

<p>Fällt der Aktienkurs unter den Strike-Preis, gewinnt der Put an Wert und gleicht die Verluste der Aktie weitgehend aus. Steigt der Kurs hingegen, verfällt der Put am Ende wertlos – Sie verlieren nur die gezahlte Prämie, partizipieren aber voll an der Kurssteigerung.</p>

<div class="callout">
    <strong>Versicherungsanalogie:</strong> Ein Protective Put verhält sich wie eine Hausratversicherung. Sie zahlen einen Beitrag (die Prämie), den Sie nicht zurückbekommen, wenn nichts passiert. Tritt der Schadensfall ein (Kurssturz), greift der Schutz und begrenzt Ihren Verlust.
</div>

<h3 id="profil">Auszahlungsprofil und Break-even</h3>

<p>Das Risikoprofil lässt sich klar benennen. Das folgende Beispiel ist <strong>rein fiktiv und dient ausschließlich der Veranschaulichung</strong>:</p>

<table class="data-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Wert (fiktives Beispiel)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Kaufkurs der Aktie</td>
            <td>100&nbsp;€</td>
        </tr>
        <tr>
            <td>Strike des gekauften Puts</td>
            <td>95&nbsp;€</td>
        </tr>
        <tr>
            <td>Gezahlte Prämie</td>
            <td>3&nbsp;€ pro Aktie</td>
        </tr>
        <tr>
            <td>Maximaler Verlust</td>
            <td>8&nbsp;€ pro Aktie (100 − 95 + 3)</td>
        </tr>
        <tr>
            <td>Break-even</td>
            <td>103&nbsp;€ (Kaufkurs + Prämie)</td>
        </tr>
        <tr>
            <td>Gewinnpotenzial</td>
            <td>nach oben offen (abzüglich Prämie)</td>
        </tr>
    </tbody>
</table>

<p>In diesem Beispiel ist Ihr Verlust auf 8&nbsp;€ pro Aktie begrenzt, egal wie weit der Kurs fällt – selbst bei einem Sturz auf null. Nach oben bleibt das Potenzial offen: Ab einem Kurs von 103&nbsp;€ (Kaufkurs plus Prämie) erwirtschaftet die abgesicherte Position einen Gewinn.</p>

<h3 id="kosten">Die Kosten der Versicherung</h3>

<p>Der Schutz ist nicht umsonst. Die Prämie reduziert Ihre Rendite – in ruhigen Marktphasen, in denen der Kursrückgang ausbleibt, ist sie schlicht ein Kostenfaktor. Wie hoch die Prämie ausfällt, hängt maßgeblich von der <span class="key-term">Impliziten Volatilität</span> ab: Je höher die erwartete Schwankungsbreite, desto teurer die Absicherung.</p>

<div class="warning-box">
    <h4>Wichtig zu bedenken</h4>
    <p>Eine dauerhafte Vollabsicherung über Protective Puts kann auf Dauer teuer werden und die Rendite spürbar schmälern. Viele Anleger setzen die Strategie daher gezielt ein – etwa vor unsicheren Ereignissen – und nicht durchgängig.</p>
</div>

<h3 id="strike">Strike-Wahl und Laufzeit</h3>

<p>Die Wahl des Strikes bestimmt das Verhältnis von Schutz und Kosten:</p>

<ul>
    <li><strong>Strike nahe am Kurs (ATM):</strong> hoher Schutz, aber teure Prämie. Der mögliche Verlust ist gering.</li>
    <li><strong>Strike deutlich unter dem Kurs (OTM):</strong> günstigere Prämie, aber ein größerer „Selbstbehalt", bevor der Schutz greift.</li>
</ul>

<p>Auch die Laufzeit spielt eine Rolle: Längere Laufzeiten kosten mehr Prämie, müssen dafür aber seltener erneuert werden. Kürzere Laufzeiten sind günstiger, erfordern jedoch häufigeres <a href="/optionen-rollen.html">Rollen</a> der Absicherung. Grundlagen zur Bewertung von Optionen und zum Einfluss der Volatilität finden Sie im Artikel <a href="/volatilitaet-verstehen.html">Volatilität verstehen</a>.</p>

<h3 id="abgrenzung">Abgrenzung zu anderen Strategien</h3>

<p>Der Protective Put wird häufig mit dem <a href="/covered-call-strategie.html">Covered Call</a> verwechselt – beide kombinieren Aktien mit Optionen, verfolgen aber gegensätzliche Ziele. Der Covered Call erzeugt <em>Einnahmen</em>, deckelt dafür aber den Gewinn nach oben. Der Protective Put kostet <em>Prämie</em> und bietet dafür Schutz nach unten.</p>

<p>Kombiniert man beide – also Aktienbesitz, gekaufter Put <em>und</em> verkaufter Call – entsteht ein sogenannter <span class="key-term">Collar</span>, bei dem die Prämie aus dem Call die Kosten des Puts teilweise oder ganz finanziert. Eine Erläuterung aller Fachbegriffe finden Sie im <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3 id="fazit">Fazit</h3>

<p>Der Protective Put ist eine der klarsten Absicherungsstrategien im Optionshandel: Er begrenzt den Verlust einer Aktienposition nach unten, lässt das Gewinnpotenzial nach oben aber weitgehend intakt. Der Preis dafür ist die gezahlte Prämie, die in ruhigen Märkten als Kostenfaktor wirkt. Damit eignet sich die Strategie vor allem für Anleger, die eine Aktie langfristig halten, sich aber gegen kurzfristige Rückschläge absichern möchten. Wer die Strike-Wahl und Laufzeit bewusst steuert, kann Schutz und Kosten in ein sinnvolles Verhältnis bringen. Ergänzend lohnt sich der Artikel <a href="/covered-call-strategie.html">Covered Call</a>, der die einnahmenorientierte Gegenstrategie beleuchtet.</p>

<h3>Quellen &amp; weiterführende Literatur</h3>
<ul>
    <li><a href="https://www.optionseducation.org" target="_blank" rel="noopener">The Options Industry Council (OIC) – Options Education</a></li>
    <li><a href="https://www.cboe.com" target="_blank" rel="noopener">Cboe Global Markets – Options Education</a></li>
    <li>John C. Hull: „Options, Futures, and Other Derivatives", Pearson.</li>
</ul>
