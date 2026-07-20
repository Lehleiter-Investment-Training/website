---
layout: layouts/blog-post.njk
pageTitle: "Butterfly Spread: Definiertes Risiko im Seitwärtsmarkt"
subtitle: "Wie Sie mit drei Strikes eine schmale Gewinnzone rund um einen erwarteten Kurs aufbauen – bei von Anfang an begrenztem Risiko."
description: "Butterfly Spread erklärt: Aufbau aus drei Strikes, wo maximaler Gewinn und Verlust liegen und für welche Markterwartung sich die neutrale Strategie eignet."
date: 2026-07-08
category: "Strategie"
tags: ["Strategie", "Neutral"]
permalink: /butterfly-spread.html
summary: "Ein Butterfly Spread kombiniert drei Strikes (1 Kauf unten, 2 Verkauf Mitte, 1 Kauf oben mit gleichem Abstand) zu einer neutralen Position: Der maximale Gewinn entsteht, wenn der Kurs bei Verfall am mittleren Strike liegt, der maximale Verlust ist auf die gezahlte Prämie begrenzt."
faq:
  - q: "Was ist ein Butterfly Spread?"
    a: "Ein Butterfly Spread ist eine neutrale Optionsstrategie aus drei Strikes mit gleichem Abstand: Man kauft eine Option am unteren Strike, verkauft zwei am mittleren und kauft eine am oberen Strike. Die Position wird meist gegen Zahlung einer Nettoprämie eröffnet."
  - q: "Wo liegen maximaler Gewinn und maximaler Verlust beim Butterfly Spread?"
    a: "Der maximale Gewinn entsteht, wenn der Kurs bei Verfall genau am mittleren Strike liegt; er entspricht dem Strike-Abstand abzüglich der gezahlten Prämie. Der maximale Verlust ist auf die gezahlte Nettoprämie begrenzt und tritt ein, wenn der Kurs weit unter den unteren oder über den oberen Strike läuft."
  - q: "Für welche Markterwartung eignet sich ein Butterfly Spread?"
    a: "Der Butterfly Spread passt zu einer neutralen Erwartung mit geringer erwarteter Bewegung, wenn der Kurs bis zum Verfall nahe am mittleren Strike vermutet wird. Bei starken Kursbewegungen in eine Richtung ist er in der Regel weniger geeignet."
---

<p>Der <span class="key-term">Butterfly Spread</span> ist eine neutrale Optionsstrategie für Marktphasen, in denen Sie nur eine geringe Kursbewegung erwarten und der Basiswert bis zum Verfall in der Nähe eines bestimmten Kursniveaus bleiben soll. Er wird aus drei Strikes mit gleichem Abstand aufgebaut und bietet ein von Anfang an klar definiertes Risiko. In diesem Artikel erfahren Sie, wie ein Butterfly Spread konstruiert wird, wo maximaler Gewinn und maximaler Verlust liegen und für welche Markterwartung er sich eignen könnte.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken bis hin zum Totalverlust des eingesetzten Kapitals. Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. Konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#aufbau">Aufbau des Butterfly Spread</a></li>
        <li><a href="#legs">Die drei Legs im Detail</a></li>
        <li><a href="#gewinn-verlust">Maximaler Gewinn und maximaler Verlust</a></li>
        <li><a href="#beispiel">Rechenbeispiel bei Verfall</a></li>
        <li><a href="#markterwartung">Passende Markterwartung</a></li>
        <li><a href="#abgrenzung">Abgrenzung zu verwandten Strategien</a></li>
        <li><a href="#risiken">Risiken und Positionsmanagement</a></li>
        <li><a href="#fazit">Fazit</a></li>
    </ol>
</div>

<figure class="blog-figure">
    <img src="/blog/figures/butterfly-spread.svg" alt="Auszahlungsprofil eines Long Call Butterfly bei Verfall: Gewinnspitze am mittleren Strike, begrenzter Verlust außen." width="680" height="400" loading="lazy">
    <figcaption>Auszahlungsprofil eines Long Call Butterfly bei Verfall: Gewinnspitze am mittleren Strike, begrenzter Verlust an beiden Enden.</figcaption>
</figure>

<h3 id="aufbau">Aufbau des Butterfly Spread</h3>

<p>Ein klassischer Long Call Butterfly Spread besteht aus vier Optionskontrakten an drei verschiedenen <span class="key-term">Strike-Preis</span>en, alle mit demselben Verfallsdatum und auf denselben Basiswert. Die Grundidee lautet: Sie kaufen eine Option am unteren Strike, verkaufen zwei Optionen am mittleren Strike und kaufen eine Option am oberen Strike. Entscheidend ist, dass die Abstände zwischen den drei Strikes gleich groß sind – der mittlere Strike liegt also genau in der Mitte.</p>

<p>Weil Sie in der Mitte zwei Optionen verkaufen und außen jeweils eine kaufen, ist die Position insgesamt ausgewogen: Sie halten ebenso viele gekaufte wie verkaufte Kontrakte. In der Regel entsteht dabei eine Netto-Belastung – Sie zahlen eine <span class="key-term">Premium</span> (Nettoprämie), um die Struktur zu eröffnen. Genau diese gezahlte Prämie ist der Betrag, den Sie im schlechtesten Fall verlieren können.</p>

<h3 id="legs">Die drei Legs im Detail</h3>

<p>Die einzelnen Bestandteile einer Optionskombination werden als Legs (Beine) bezeichnet. Die folgende Übersicht zeigt den Aufbau eines Long Call Butterfly. Die Strike-Werte sind ein <strong>frei gewähltes, fiktives Beispiel</strong> zur Veranschaulichung.</p>

<table class="data-table">
    <thead>
        <tr>
            <th>Leg</th>
            <th>Aktion</th>
            <th>Strike (fiktives Beispiel)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Unterer Flügel</strong></td>
            <td>Kauf 1 Call</td>
            <td>95&nbsp;€</td>
        </tr>
        <tr>
            <td><strong>Körper (Mitte)</strong></td>
            <td>Verkauf 2 Calls</td>
            <td>100&nbsp;€</td>
        </tr>
        <tr>
            <td><strong>Oberer Flügel</strong></td>
            <td>Kauf 1 Call</td>
            <td>105&nbsp;€</td>
        </tr>
    </tbody>
</table>

<p>Die beiden gekauften Optionen an den äußeren Strikes – die „Flügel" – begrenzen das Risiko der beiden verkauften Optionen im „Körper" nach beiden Seiten. Deshalb ist der maximale Verlust bekannt, noch bevor Sie die Position eröffnen. Ein Butterfly lässt sich übrigens auch spiegelbildlich mit Puts aufbauen; das Auszahlungsprofil bei Verfall ist bei gleichen Strikes vergleichbar.</p>

<h3 id="gewinn-verlust">Maximaler Gewinn und maximaler Verlust</h3>

<p>Das <span class="key-term">Risk/Reward</span>-Profil eines Butterfly Spread lässt sich klar benennen:</p>

<ul>
    <li><strong>Maximaler Gewinn:</strong> Er entsteht, wenn der Kurs bei Verfall genau am mittleren Strike liegt. Rechnerisch entspricht er dem Abstand zwischen unterem und mittlerem Strike abzüglich der gezahlten Nettoprämie.</li>
    <li><strong>Maximaler Verlust:</strong> Er ist auf die gezahlte Nettoprämie begrenzt und tritt ein, wenn der Kurs bei Verfall unter den unteren oder über den oberen Strike fällt. Ein darüber hinausgehendes Risiko besteht bei dieser Struktur nicht.</li>
    <li><strong>Break-even-Punkte:</strong> Es gibt zwei. Der untere ergibt sich aus dem unteren Strike zuzüglich der Prämie, der obere aus dem oberen Strike abzüglich der Prämie. Zwischen diesen beiden Punkten liegt die Gewinnzone.</li>
</ul>

<p>Charakteristisch ist die schmale, spitze Gewinnzone: Der volle Gewinn wird nur erreicht, wenn der Kurs sehr nahe am mittleren Strike landet. Je weiter er sich davon entfernt, desto geringer fällt das Ergebnis aus – bis an den Flügeln nur noch die gezahlte Prämie als Verlust verbleibt.</p>

<h3 id="beispiel">Rechenbeispiel bei Verfall</h3>

<p>Das folgende Beispiel ist <strong>rein fiktiv und dient ausschließlich der Veranschaulichung</strong>. Angenommen, Sie kaufen einen 95er Call, verkaufen zwei 100er Calls und kaufen einen 105er Call. Angenommen weiter, Sie zahlen dafür eine Nettoprämie von 1,50&nbsp;€ je Aktie, also 150&nbsp;€ für den gesamten Butterfly (ein Kontrakt bezieht sich üblicherweise auf 100 Aktien).</p>

<table class="data-table">
    <thead>
        <tr>
            <th>Kurs bei Verfall</th>
            <th>Was passiert</th>
            <th>Ergebnis (fiktiv)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>unter 95&nbsp;€</strong></td>
            <td>Alle Calls verfallen wertlos</td>
            <td>Verlust = gezahlte Prämie 150&nbsp;€</td>
        </tr>
        <tr>
            <td><strong>genau 100&nbsp;€</strong></td>
            <td>Nur der 95er Call ist im Geld, die Mitte verfällt am Strike</td>
            <td>Maximaler Gewinn 350&nbsp;€ (5&nbsp;€ − 1,50&nbsp;€)</td>
        </tr>
        <tr>
            <td><strong>über 105&nbsp;€</strong></td>
            <td>Gewinne und Verluste der Legs heben sich auf</td>
            <td>Verlust = gezahlte Prämie 150&nbsp;€</td>
        </tr>
    </tbody>
</table>

<p>In diesem fiktiven Beispiel läge der untere Break-even bei 96,50&nbsp;€ (95 + 1,50) und der obere bei 103,50&nbsp;€ (105 − 1,50). Die Position wäre also profitabel, solange der Kurs am Verfallstag zwischen diesen beiden Werten läge, mit dem höchsten Gewinn exakt bei 100&nbsp;€.</p>

<div class="strategy-box">
    <h4>Warum die Struktur so günstig sein kann</h4>
    <p>Da Sie in der Mitte zwei Optionen verkaufen, finanzieren deren vereinnahmte Prämien einen großen Teil der beiden gekauften Flügel. Der Netto-Kapitaleinsatz und damit der maximale Verlust fallen daher oft klein aus – im Verhältnis dazu kann der maximale Gewinn ein Vielfaches betragen. Dieses attraktive Verhältnis erkauft man sich mit einer geringen Trefferwahrscheinlichkeit, weil die Gewinnzone eng ist.</p>
</div>

<h3 id="markterwartung">Passende Markterwartung</h3>

<p>Der Butterfly Spread ist eine <strong>neutrale Strategie</strong>. Wer ihn einsetzt, rechnet damit, dass sich der Basiswert bis zum Verfall nur wenig bewegt und in der Nähe des mittleren Strikes bleibt. Der mittlere Strike wird deshalb typischerweise dort gewählt, wo der Kurs am Verfallstag vermutet wird – häufig nahe am aktuellen Kursniveau.</p>

<p>Ein zusätzlicher Aspekt ist die Volatilität. Da die Struktur netto eine Prämie kostet, könnte ein Einstieg bei niedrigerer impliziter Volatilität vorteilhaft sein, weil die Optionen dann tendenziell günstiger sind. Wie stark Optionspreise auf Volatilität reagieren, wird ausführlich im Beitrag zum <a href="/credit-spread-vs-debit-spread.html">Unterschied zwischen Credit- und Debit-Spreads</a> beleuchtet.</p>

<div class="tip-box">
    <h4>Gut zu wissen</h4>
    <p>Der Zeitwertverfall (Theta) wirkt beim Long Butterfly gegen Ende der Laufzeit tendenziell zugunsten der Position, sofern der Kurs nahe am mittleren Strike notiert. Verändert sich der Kurs kaum, gewinnt die spitze Gewinnzone in den letzten Tagen vor Verfall an Kontur – ein Grund, warum manche Händler diese Struktur eher kurz vor dem Verfall betrachten.</p>
</div>

<h3 id="abgrenzung">Abgrenzung zu verwandten Strategien</h3>

<p>Ein Butterfly Spread lässt sich als Kombination zweier gegenläufiger <span class="key-term">Vertical Spread</span>s verstehen: eines Bull Call Spreads (Kauf 95, Verkauf 100) und eines Bear Call Spreads (Verkauf 100, Kauf 105). Beide teilen sich den mittleren Strike. Diese Verwandtschaft erklärt, warum das Verlustrisiko klar definiert ist.</p>

<p>Eng verwandt ist der <span class="key-term">Iron Condor</span>: Auch er ist eine neutrale Strategie mit definiertem Risiko, nutzt aber vier verschiedene Strikes und bietet dadurch eine <em>breitere</em>, dafür flachere Gewinnzone. Der Butterfly setzt dagegen auf eine <em>punktgenaue</em> Erwartung. Details dazu finden Sie im Artikel <a href="/iron-condor-strategie.html">Iron Condor: Mit Seitwärtsmärkten Geld verdienen</a>. Das genaue Gegenstück zur neutralen Ausrichtung wäre eine Wette auf große Bewegung, wie sie im Beitrag zu <a href="/straddle-strangle.html">Straddle und Strangle</a> beschrieben wird.</p>

<h3 id="risiken">Risiken und Positionsmanagement</h3>

<div class="warning-box">
    <h4>Wichtige Punkte im Überblick</h4>
    <p>Obwohl der maximale Verlust auf die gezahlte Prämie begrenzt ist, sollten Sie einige Besonderheiten beachten: Die Gewinnzone ist eng, sodass schon eine moderate Kursbewegung den vollen Gewinn verhindern kann. Zudem bestehen mehrere Legs, was Handelskosten und den Bid-Ask-Spread stärker ins Gewicht fallen lässt.</p>
</div>

<ul>
    <li><strong>Enge Trefferzone:</strong> Der volle Gewinn setzt voraus, dass der Kurs bei Verfall sehr nahe am mittleren Strike liegt. Das ist anspruchsvoll und gelingt eher selten punktgenau.</li>
    <li><strong>Mehrere Legs:</strong> Vier Kontrakte bedeuten mehrfache Gebühren und Spreads. Eine Ausführung als kombinierte Order kann helfen, ungewollte Teilausführungen zu vermeiden.</li>
    <li><strong>Zuteilungsrisiko:</strong> Bei amerikanischen Optionen können die verkauften Optionen im Körper vorzeitig zugeteilt werden, wenn sie ins Geld laufen. Ein frühzeitiges Beobachten der Position könnte daher sinnvoll sein.</li>
    <li><strong>Vorzeitiges Glattstellen:</strong> Viele Händler schließen einen Butterfly bereits vor Verfall, sobald ein zufriedenstellender Teil des möglichen Gewinns erreicht ist, statt auf die punktgenaue Landung am mittleren Strike zu spekulieren.</li>
</ul>

<p>Eine Übersicht aller hier verwendeten Fachbegriffe sowie weiterführende Erklärungen finden Sie im <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3 id="fazit">Fazit</h3>

<p>Der Butterfly Spread ist eine neutrale Strategie mit klarer Struktur: definiertes, meist geringes Risiko in Höhe der gezahlten Prämie und ein vergleichsweise hoher möglicher Gewinn, der jedoch nur in einer engen Zone rund um den mittleren Strike erreicht wird. Er eignet sich in erster Linie für die Erwartung, dass sich ein Basiswert bis zum Verfall kaum bewegt. Wer eine breitere Gewinnzone bevorzugt, findet im <a href="/iron-condor-strategie.html">Iron Condor</a> eine verwandte Alternative. Wie bei jeder Optionsstrategie gilt: Machen Sie sich mit dem Auszahlungsprofil und den Verpflichtungen vertraut, bevor Sie eine Position eröffnen.</p>

<h3>Quellen &amp; weiterführende Literatur</h3>
<ul>
    <li><a href="https://www.optionseducation.org" target="_blank" rel="noopener">The Options Industry Council (OIC) – Options Education</a></li>
    <li><a href="https://www.cboe.com" target="_blank" rel="noopener">Cboe Global Markets – Options Education</a></li>
    <li>John C. Hull: „Options, Futures, and Other Derivatives", Pearson.</li>
</ul>
