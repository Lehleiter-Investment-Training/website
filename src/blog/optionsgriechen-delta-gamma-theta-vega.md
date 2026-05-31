---
layout: layouts/blog-post.njk
pageTitle: "Die Optionsgriechen: Delta, Gamma, Theta & Vega verstehen"
subtitle: "Warum der Preis einer Option mehr ist als nur der Abstand zum Strike – und wie Sie die vier wichtigsten Sensitivitätskennzahlen für bessere Handelsentscheidungen nutzen."
description: "Optionsgriechen verständlich erklärt: Delta, Gamma, Theta und Vega – Bedeutung, Zusammenspiel und praktischer Nutzen für Einsteiger im Optionshandel."
date: 2025-10-13
category: "Grundlagen"
tags: ["Grundlagen", "Griechen"]
permalink: /optionsgriechen-delta-gamma-theta-vega.html
summary: "Die Optionsgriechen Delta, Gamma, Theta und Vega messen, wie empfindlich eine Option auf Veränderungen von Kurs, Volatilität und Zeit reagiert. Wer sie versteht, kann Risiken besser einschätzen und Positionen gezielter aufbauen."
faq:
  - q: "Was sind die Optionsgriechen?"
    a: "Die Optionsgriechen sind Sensitivitätskennzahlen, die angeben, wie stark sich der Preis einer Option bei Veränderungen des Basiswertkurses (Delta, Gamma), des Zeitablaufs (Theta) oder der impliziten Volatilität (Vega) verändert."
  - q: "Was sagt das Delta einer Option aus?"
    a: "Das Delta gibt an, um wie viel Euro (oder eine andere Währungseinheit) sich der Optionspreis verändert, wenn der Basiswert um einen Euro steigt. Bei einer Call-Option liegt das Delta zwischen 0 und 1, bei einer Put-Option zwischen -1 und 0."
  - q: "Warum verliert eine Option mit der Zeit an Wert?"
    a: "Der Zeitwertverfall, gemessen durch Theta, sorgt dafür, dass der Zeitwert einer Option mit jeder verstrichenen Einheit abnimmt. Je näher der Verfalltag rückt, desto schneller sinkt in der Regel der Zeitwert – das benachteiligt Käufer und begünstigt Verkäufer von Optionen."
---

<p>Wer mit Optionen handelt, wird früher oder später auf die <span class="key-term">Optionsgriechen</span> stoßen – ein Satz von Kennzahlen, der beschreibt, wie sensibel der Preis einer Option auf verschiedene Markteinflüsse reagiert. Delta, Gamma, Theta und Vega sind keine Zauberwerkzeuge, aber sie helfen dabei, das Verhalten einer Option besser vorherzusehen und Risiken klarer zu benennen. In diesem Artikel erfahren Sie, was jeder dieser griechischen Buchstaben bedeutet, wie sie zusammenhängen und warum sie für jeden Optionshändler relevant sind.</p>

<div class="disclaimer-box">
    <h4>Risikohinweis</h4>
    <p><strong>Dieser Artikel dient ausschließlich Bildungszwecken und stellt keine Anlageberatung dar.</strong> Der Handel mit Optionen birgt erhebliche Risiken bis hin zum Totalverlust des eingesetzten Kapitals. Die hier vorgestellten Konzepte sind theoretische Kennzahlen aus Preismodellen – sie garantieren keine Gewinne und spiegeln vergangene Ergebnisse nicht für die Zukunft wider. Konsultieren Sie vor Anlageentscheidungen einen qualifizierten Finanzberater.</p>
</div>

<div class="table-of-contents">
    <h3>Inhaltsverzeichnis:</h3>
    <ol>
        <li><a href="#was-sind-griechen">Was sind die Optionsgriechen?</a></li>
        <li><a href="#delta">Delta – die Kurssensitivität</a></li>
        <li><a href="#gamma">Gamma – die Veränderung des Deltas</a></li>
        <li><a href="#theta">Theta – der Zeitwertverfall</a></li>
        <li><a href="#vega">Vega – die Volatilitätssensitivität</a></li>
        <li><a href="#rho">Rho – der Einfluss des Zinssatzes</a></li>
        <li><a href="#zusammenspiel">Das Zusammenspiel der Griechen</a></li>
        <li><a href="#uebersicht">Übersichtstabelle</a></li>
        <li><a href="#fazit">Fazit</a></li>
    </ol>
</div>

<h3 id="was-sind-griechen">Was sind die Optionsgriechen?</h3>

<p>Optionspreise werden wesentlich durch das sogenannte <span class="key-term">Black-Scholes-Modell</span> und verwandte Bewertungsmodelle beschrieben. Diese Modelle zeigen, dass der Preis einer Option von mehreren Faktoren gleichzeitig abhängt: dem aktuellen Kurs des Basiswerts, dem Ausübungspreis (Strike), der Restlaufzeit, der <span class="key-term">impliziten Volatilität</span> sowie dem risikofreien Zinssatz. Die <span class="key-term">Greeks</span> – wie die Optionsgriechen auf Englisch heißen – messen jeweils die Empfindlichkeit des Optionspreises gegenüber einer dieser Variablen, während alle anderen konstant gehalten werden. Sie sind damit mathematische Ableitungen des Optionspreises nach den jeweiligen Einflussfaktoren.</p>

<p>Wichtig: Die Griechen sind keine festen Eigenschaften einer Option – sie verändern sich kontinuierlich mit dem Marktgeschehen. Ein Delta, das Sie heute ablesen, kann morgen bereits einen anderen Wert haben.</p>

<h3 id="delta">Delta – die Kurssensitivität</h3>

<p>Das <span class="key-term">Delta</span> ist der bekannteste und am häufigsten verwendete griechische Buchstabe im Optionshandel. Es gibt an, um wie viel sich der theoretische Preis einer Option verändert, wenn der Kurs des Basiswerts um eine Einheit (typischerweise einen Euro oder Dollar) steigt.</p>

<ul>
    <li><strong>Call-Optionen</strong> haben ein Delta zwischen 0 und +1. Steigt der Basiswert, steigt auch der Call-Preis.</li>
    <li><strong>Put-Optionen</strong> haben ein Delta zwischen -1 und 0. Steigt der Basiswert, fällt der Put-Preis.</li>
</ul>

<div class="strategy-box">
    <h4>Fiktives Rechenbeispiel (zur Veranschaulichung)</h4>
    <p>Angenommen, eine Call-Option hat ein Delta von 0,50 und kostet aktuell 3,00&nbsp;€. Steigt der Basiswert um 1,00&nbsp;€, würde der Optionspreis – bei isolierter Betrachtung des Deltas – auf etwa 3,50&nbsp;€ ansteigen. Fällt der Basiswert um 1,00&nbsp;€, würde der Preis entsprechend auf ca. 2,50&nbsp;€ sinken. Dies ist ein vereinfachtes Modellbeispiel; in der Praxis verändern sich mehrere Faktoren gleichzeitig.</p>
</div>

<p>Eine besondere Eigenschaft des Deltas: Eine <strong>At-the-Money-Option</strong> (Basiswert und Strike nahezu gleich) hat üblicherweise ein Delta nahe 0,50. Eine tief im Geld liegende Option nähert sich einem Delta von 1,0 (Call) bzw. -1,0 (Put), während eine weit aus dem Geld liegende Option gegen 0 tendiert. Damit lässt sich das Delta näherungsweise auch als Wahrscheinlichkeit interpretieren, dass die Option bei Verfall im Geld liegt – auch wenn diese Interpretation modelltheoretische Einschränkungen hat.</p>

<p>Für Stillhalter (Optionsverkäufer) ist das Delta ein zentrales Instrument zur Steuerung der Richtungsabhängigkeit einer Position, auch bekannt als „direktionales Exposure".</p>

<h3 id="gamma">Gamma – die Veränderung des Deltas</h3>

<p>Das <span class="key-term">Gamma</span> beschreibt, wie schnell sich das Delta selbst verändert, wenn der Basiswert um eine Einheit steigt. Es ist damit die zweite Ableitung des Optionspreises nach dem Basiswertkurs.</p>

<p>Gamma ist immer positiv – sowohl für Calls als auch für Puts. Käufer von Optionen profitieren von einem hohen Gamma (ihre Deltas verändern sich zu ihren Gunsten, wenn sich der Kurs bewegt). Verkäufer von Optionen tragen das Gammarisiko: Bewegt sich der Markt stark, kann eine kurze Position schnell aus dem Gleichgewicht geraten.</p>

<div class="tip-box">
    <h4>Wann ist Gamma besonders hoch?</h4>
    <p>Das Gamma erreicht seine höchsten Werte bei At-the-Money-Optionen kurz vor dem Verfall. In diesen Situationen kann schon eine kleine Kursbewegung das Delta erheblich verschieben – was sowohl Chancen als auch Risiken stark vergrößert. Erfahrene Händler achten in der Verfallswoche besonders auf ihr Gamma-Exposure.</p>
</div>

<h3 id="theta">Theta – der Zeitwertverfall</h3>

<p>Theta misst, um wie viel der Optionspreis täglich sinkt, wenn alles andere gleich bleibt. Es ist der <span class="key-term">Zeitwert</span>verfall in Zahlen. Theta ist für Optionskäufer negativ – die Zeit arbeitet gegen sie. Für Optionsverkäufer (Stillhalter) hingegen ist Theta positiv: Der täglich schwindende Zeitwert kommt ihnen zugute.</p>

<p>Der Zeitwertverfall verläuft nicht linear. Er beschleunigt sich in der Regel, je näher der Verfalltag rückt – insbesondere bei At-the-Money-Optionen. Out-of-the-Money-Optionen verlieren ebenfalls an Zeitwert, wenngleich ihr absoluter Preis ohnehin niedrig ist.</p>

<div class="callout">
    <strong>Praxis-Hinweis:</strong> Strategien wie der Covered Call oder der Cash-Secured Put setzen bewusst auf positives Theta: Der Stillhalter vereinnahmt die Prämie und profitiert davon, dass der Zeitwert täglich abnimmt. Mehr dazu im Artikel <a href="/theta-zeitwertverfall.html">Theta – Zeitwertverfall verstehen</a>.
</div>

<h3 id="vega">Vega – die Volatilitätssensitivität</h3>

<p>Vega gibt an, wie stark sich der Optionspreis verändert, wenn die implizite Volatilität um einen Prozentpunkt steigt. Technisch gesehen ist Vega kein griechischer Buchstabe (er existiert im Alphabet nicht), hat sich aber als Bezeichnung in der Praxis vollständig etabliert.</p>

<p>Sowohl Calls als auch Puts haben ein positives Vega: Steigt die implizite Volatilität, werden Optionen teurer – unabhängig von der Richtung. Das liegt daran, dass größere erwartete Schwankungen die Wahrscheinlichkeit erhöhen, dass eine Option im Geld verfällt. Käufer von Optionen wünschen sich daher steigende Volatilität (positives Vega-Exposure), Verkäufer dagegen fallende Volatilität.</p>

<p>Wie die implizite Volatilität entsteht, gemessen und interpretiert wird, erfahren Sie im vertiefenden Artikel <a href="/volatilitaet-verstehen.html">Volatilität verstehen</a>.</p>

<div class="strategy-box">
    <h4>Vega und Marktphasen</h4>
    <p>In Phasen erhöhter Unsicherheit – etwa rund um wichtige Wirtschaftsdaten oder geopolitische Ereignisse – steigt die implizite Volatilität typischerweise an. Das verteuert Optionen für Käufer, erhöht aber gleichzeitig die Prämieneinnahmen für Stillhalter. Nach dem Ereignis fällt die implizite Volatilität häufig wieder – ein Effekt, der als „Volatilitätskompression" oder „Vega Crush" bezeichnet wird und Käufer selbst bei korrekter Richtungsprognose empfindlich treffen kann.</p>
</div>

<h3 id="rho">Rho – der Einfluss des Zinssatzes</h3>

<p>Rho misst die Sensitivität des Optionspreises gegenüber Veränderungen des risikofreien Zinssatzes. Call-Optionen haben ein positives Rho (steigende Zinsen erhöhen ihren Wert leicht), Put-Optionen ein negatives Rho. In der Praxis ist Rho für kurzlaufende Optionen meist vernachlässigbar. Bei sehr langen Laufzeiten (LEAPS) kann es jedoch eine größere Rolle spielen. Für die meisten Einsteiger stehen Delta, Gamma, Theta und Vega klar im Vordergrund.</p>

<h3 id="zusammenspiel">Das Zusammenspiel der Griechen</h3>

<p>Die Griechen wirken nie isoliert. Eine Position kann beispielsweise ein hohes positives Theta (profitiert vom Zeitwertverfall) haben, gleichzeitig aber ein erhebliches negatives Gamma-Exposure tragen (bei starken Kursbewegungen wächst der Verlust schnell). Das ist etwa bei Short-Optionen nahe dem Geld typisch. Ein ausgewogenes Verständnis aller Kennzahlen ist daher wichtiger als die Fokussierung auf einen einzigen Wert.</p>

<p>Für ein strukturiertes <a href="/risikomanagement-optionshandel.html">Risikomanagement im Optionshandel</a> empfiehlt es sich, das Gesamtportfolio regelmäßig auf seine Griechen-Exposition zu prüfen – insbesondere Delta (Richtungsrisiko), Theta (Zeitrisiko) und Vega (Volatilitätsrisiko).</p>

<h3 id="uebersicht">Übersichtstabelle der wichtigsten Optionsgriechen</h3>

<table class="data-table">
    <thead>
        <tr>
            <th>Griechisch</th>
            <th>Misst</th>
            <th>Wertebereich (Call)</th>
            <th>Positive Wirkung für</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Delta (Δ)</strong></td>
            <td>Kursänderung des Basiswerts um 1 Einheit</td>
            <td>0 bis +1</td>
            <td>Call-Käufer bei steigendem Kurs</td>
        </tr>
        <tr>
            <td><strong>Gamma (Γ)</strong></td>
            <td>Veränderung des Deltas um 1 Einheit Kursbewegung</td>
            <td>immer positiv</td>
            <td>Optionskäufer bei starken Bewegungen</td>
        </tr>
        <tr>
            <td><strong>Theta (Θ)</strong></td>
            <td>Täglicher Zeitwertverlust</td>
            <td>negativ (für Käufer)</td>
            <td>Optionsverkäufer (Stillhalter)</td>
        </tr>
        <tr>
            <td><strong>Vega (ν)</strong></td>
            <td>Preisänderung bei 1 % mehr impliziter Volatilität</td>
            <td>immer positiv</td>
            <td>Optionskäufer bei steigender Volatilität</td>
        </tr>
        <tr>
            <td><strong>Rho (ρ)</strong></td>
            <td>Preisänderung bei 1 % höherem Zinssatz</td>
            <td>positiv</td>
            <td>Call-Käufer bei steigenden Zinsen</td>
        </tr>
    </tbody>
</table>

<h3 id="fazit">Fazit</h3>

<p>Die Optionsgriechen sind das Werkzeugset, das aus dem bloßen Preis einer Option ein vielschichtiges Risikoprofil macht. Delta zeigt das Richtungsrisiko, Gamma die Beschleunigung dieses Risikos, Theta den täglichen Zeitkostenfaktor und Vega die Abhängigkeit von der Markterwartung. Rho spielt für die meisten Standardsituationen eine untergeordnete Rolle. Wer diese Kennzahlen lesen und einordnen kann, trifft fundiertere Entscheidungen – und erkennt frühzeitig, wenn eine Position aus dem Gleichgewicht gerät. Alle hier verwendeten Fachbegriffe finden Sie gebündelt im <a href="/glossar.html">Optionen-Glossar</a>.</p>

<h3>Quellen &amp; weiterführende Literatur</h3>
<ul>
    <li><a href="https://www.optionseducation.org" target="_blank" rel="noopener">The Options Industry Council (OIC) – Options Education</a></li>
    <li><a href="https://www.cboe.com" target="_blank" rel="noopener">Cboe Global Markets – Options Education</a></li>
    <li>John C. Hull: „Options, Futures, and Other Derivatives", Pearson.</li>
</ul>
