        // Quiz-Daten aus dem zweiten Dokument - GENAU 100 Fragen
        const quizData = [
            // BASICS (15 Fragen)
            {
                q: "Was ist eine Aktie eigentlich?",
                a: [
                    { text: "Ein kleiner Teil einer Firma, den du kaufen kannst", correct: true, explain: "Genau! Mit einer Aktie besitzt du tatsächlich ein winziges Stück vom Unternehmen. Cool, oder?" },
                    { text: "Ein spezieller Gutschein für Produkte der Firma", correct: false, explain: "Nein, das wäre ein Rabattcoupon. Eine Aktie macht dich zum Mini-Besitzer der Firma!" },
                    { text: "Ein Kredit, den du an die Firma vergibst", correct: false, explain: "Das wäre eine Anleihe. Bei Aktien bist du Miteigentümer, nicht Kreditgeber." },
                    { text: "Eine Art Lottoschein für schnelles Geld", correct: false, explain: "Aktien sind kein Glücksspiel! Der Wert hängt davon ab, wie gut die Firma läuft." }
                ],
                topic: "Basics 🎯",
                difficulty: 1
            },
            {
                q: "Stell dir vor, du kaufst eine Apple-Aktie. Was bist du dann?",
                a: [
                    { text: "Ein winzig kleiner Miteigentümer von Apple", correct: true, explain: "Yes! Du besitzt dann tatsächlich einen mikroskopisch kleinen Teil von Apple. Theoretisch könntest du sogar zur Hauptversammlung gehen!" },
                    { text: "Ein offizieller Mitarbeiter des Unternehmens", correct: false, explain: "Nope! Aktionäre arbeiten nicht automatisch bei der Firma." },
                    { text: "Ein VIP-Kunde mit speziellen Rabatten", correct: false, explain: "Leider nein. Du bekommst keine Rabatte nur weil du Aktien hast." },
                    { text: "Der neue Chef von Apple", correct: false, explain: "Haha, schön wär's! Dafür bräuchtest du Millionen von Aktien." }
                ],
                topic: "Basics 🎯",
                difficulty: 1
            },
            {
                q: "Was ist die Börse? Stell es dir vor wie...",
                a: [
                    { text: "Ein riesiger Marktplatz für Firmenanteile", correct: true, explain: "Perfekt! Die Börse ist wie eBay für Firmenanteile - nur viel größer und professioneller." },
                    { text: "Eine Bank, wo man Geld leihen kann", correct: false, explain: "Nein, das ist eine normale Bank. An der Börse werden Aktien gehandelt." },
                    { text: "Ein Laden, wo man Aktien druckt", correct: false, explain: "Aktien sind heute digital. Niemand druckt mehr Papier-Aktien." },
                    { text: "Ein Casino für reiche Leute", correct: false, explain: "Falsch! Die Börse ist kein Casino. Hier geht's um echte Firmen mit echten Produkten." }
                ],
                topic: "Basics 🎯",
                difficulty: 1
            },
            {
                q: "Wer bestimmt, wie viel eine Aktie kostet?",
                a: [
                    { text: "Alle Käufer und Verkäufer zusammen", correct: true, explain: "Richtig! Wenn viele kaufen wollen, steigt der Preis. Wenn viele verkaufen wollen, fällt er." },
                    { text: "Der Chef der Firma persönlich", correct: false, explain: "Nein, der CEO kann den Preis nicht festlegen. Das macht der Markt." },
                    { text: "Die Regierung legt die Preise fest", correct: false, explain: "Zum Glück nicht! In einer freien Wirtschaft bestimmt der Markt die Preise." },
                    { text: "Ein Computer bei Google", correct: false, explain: "Nein, obwohl Computer beim Handel helfen. Der Preis entsteht durch echte Kauf- und Verkaufsentscheidungen." }
                ],
                topic: "Basics 🎯",
                difficulty: 2
            },
            {
                q: "Was ist ein Depot?",
                a: [
                    { text: "Dein digitaler Tresor für Aktien und ETFs", correct: true, explain: "Genau! Im Depot werden deine gekauften Wertpapiere sicher aufbewahrt - alles digital." },
                    { text: "Ein spezielles Sparkonto mit hohen Zinsen", correct: false, explain: "Nein, im Depot liegen Aktien, kein Bargeld. Und die können im Wert schwanken!" },
                    { text: "Ein physischer Tresor bei der Bank", correct: false, explain: "Fast! Aber ein Depot ist digital, nicht physisch." },
                    { text: "Eine App zum Aktien gucken", correct: false, explain: "Eine App zeigt dir dein Depot, aber das Depot selbst ist der Aufbewahrungsort." }
                ],
                topic: "Basics 🎯",
                difficulty: 1
            },
            {
                q: "Was macht ein Broker für dich?",
                a: [
                    { text: "Er führt deine Kauf- und Verkaufsaufträge aus", correct: true, explain: "Richtig! Der Broker ist wie dein Zugang zur Börse. Ohne ihn kommst du da nicht rein." },
                    { text: "Er sagt dir, welche Aktien du kaufen sollst", correct: false, explain: "Nein, das wäre ein Anlageberater. Die meisten Broker führen nur aus, was du willst." },
                    { text: "Er verdoppelt automatisch dein Geld", correct: false, explain: "Schön wär's! Niemand kann das garantieren." },
                    { text: "Er druckt neue Aktien für dich", correct: false, explain: "Nein, Broker handeln nur mit existierenden Aktien." }
                ],
                topic: "Basics 🎯",
                difficulty: 2
            },
            {
                q: "Du willst bei Trade Republic ein Depot eröffnen. Was brauchst du als 14-Jähriger?",
                a: [
                    { text: "Die Erlaubnis und Unterschrift deiner Eltern", correct: true, explain: "Korrekt! Unter 18 brauchst du immer die Zustimmung deiner Eltern für ein Depot." },
                    { text: "Mindestens 1000€ Startkapital zum Einzahlen", correct: false, explain: "Falsch! Bei vielen Brokern kannst du schon mit 1€ anfangen." },
                    { text: "Einen offiziellen Börsenführerschein", correct: false, explain: "Den gibt's nicht! Aber dieses Quiz ist fast so gut 😉" },
                    { text: "Gar nichts, einfach App runterladen", correct: false, explain: "So einfach ist es leider nicht. Minderjährige brauchen immer die Eltern." }
                ],
                topic: "Basics 🎯",
                difficulty: 1
            },
            {
                q: "Was bedeutet 'Portfolio'?",
                a: [
                    { text: "Alle deine Aktien und ETFs zusammen", correct: true, explain: "Genau! Dein Portfolio ist deine gesamte Sammlung an Investments." },
                    { text: "Eine teure Aktentasche aus Leder", correct: false, explain: "Haha, nein! Obwohl das Wort tatsächlich 'Brieftasche' bedeutet." },
                    { text: "Die beste Aktie, die du besitzt", correct: false, explain: "Nein, das wäre nur ein Teil deines Portfolios." },
                    { text: "Ein Foto von deinem Depot", correct: false, explain: "Kreativ gedacht, aber nein! 😄" }
                ],
                topic: "Basics 🎯",
                difficulty: 1
            },
            {
                q: "Was ist der Unterschied zwischen Zocken und Investieren?",
                a: [
                    { text: "Investieren ist langfristig und durchdacht", correct: true, explain: "Perfekt! Investoren denken in Jahren, Zocker in Stunden oder Tagen." },
                    { text: "Gibt keinen, ist beides dasselbe", correct: false, explain: "Großer Fehler! Investieren basiert auf Analyse, Zocken auf Hoffnung." },
                    { text: "Zocken ist billiger als Investieren", correct: false, explain: "Im Gegenteil! Häufiges Handeln kostet viele Gebühren." },
                    { text: "Investieren ist nur was für alte Leute", correct: false, explain: "Quatsch! Je früher du anfängst, desto besser. Zeit ist dein größter Vorteil!" }
                ],
                topic: "Basics 🎯",
                difficulty: 2
            },
            {
                q: "Warum solltest du NIEMALS mit geliehenem Geld investieren?",
                a: [
                    { text: "Weil du die Schulden zurückzahlen musst, auch bei Verlust", correct: true, explain: "Exakt! Stell dir vor, du verlierst 50% und musst trotzdem 100% plus Zinsen zurückzahlen. Autsch!" },
                    { text: "Weil das gesetzlich verboten ist", correct: false, explain: "Es ist nicht illegal, aber extrem dumm und gefährlich." },
                    { text: "Weil Banken das grundsätzlich nicht erlauben", correct: false, explain: "Manche Banken bieten sogar Wertpapierkredite an. Finger weg davon!" },
                    { text: "Weil man dann keine Dividende bekommt", correct: false, explain: "Das stimmt nicht, aber die Schulden sind das echte Problem." }
                ],
                topic: "Basics 🎯",
                difficulty: 3
            },
            {
                q: "Was bedeutet 'Liquidität' einer Aktie?",
                a: [
                    { text: "Wie schnell und einfach du sie handeln kannst", correct: true, explain: "Genau! Apple-Aktien sind sehr liquide - immer Käufer da. Bei kleinen Aktien kann's schwierig werden." },
                    { text: "Wie viel die Aktie pro Stück kostet", correct: false, explain: "Nein, der Preis sagt nichts über die Liquidität. Auch teure Aktien können illiquide sein." },
                    { text: "Wie viel Bargeld die Firma auf dem Konto hat", correct: false, explain: "Das ist die Liquidität der Firma, nicht der Aktie. Zwei verschiedene Dinge!" },
                    { text: "Wie hoch die jährliche Dividende der Aktie ist", correct: false, explain: "Nein, Dividende und Liquidität sind unterschiedliche Konzepte." }
                ],
                topic: "Basics 🎯",
                difficulty: 2
            },
            {
                q: "Was ist ein 'Börsengang' (IPO)?",
                a: [
                    { text: "Wenn eine Firma zum ersten Mal Aktien verkauft", correct: true, explain: "Richtig! IPO = Initial Public Offering. Die Firma wird 'öffentlich' und jeder kann Anteile kaufen." },
                    { text: "Wenn eine Firma ihre Aktien von der Börse zurückkauft", correct: false, explain: "Das Gegenteil! Das wäre ein Delisting. Beim IPO geht die Firma an die Börse." },
                    { text: "Wenn eine Firma zum ersten Mal Dividende zahlt", correct: false, explain: "Nein, Dividenden und Börsengang sind verschiedene Dinge." },
                    { text: "Wenn die Börse morgens aufmacht", correct: false, explain: "Nein, das ist die Börseneröffnung, kein Börsengang." }
                ],
                topic: "Basics 🎯",
                difficulty: 2
            },
            {
                q: "Warum schwanken Aktienkurse?",
                a: [
                    { text: "Weil sich ständig ändert, wie viele kaufen oder verkaufen", correct: true, explain: "Genau! News, Stimmung, Wirtschaftslage - alles beeinflusst, ob Leute kaufen oder verkaufen." },
                    { text: "Weil jemand an der Börse würfelt", correct: false, explain: "Nein, es gibt immer Gründe - auch wenn sie manchmal verrückt sind." },
                    { text: "Damit es für Trader spannender wird", correct: false, explain: "Die Börse ist kein Unterhaltungsprogramm!" },
                    { text: "Wegen Sonnenstürmen und Mondphasen", correct: false, explain: "Nein, das hat mit Menschen und ihren Entscheidungen zu tun." }
                ],
                topic: "Basics 🎯",
                difficulty: 1
            },
            {
                q: "Was solltest du tun, BEVOR du deine erste Aktie kaufst?",
                a: [
                    { text: "Dich über die Firma informieren", correct: true, explain: "Super wichtig! Kaufe nur, was du verstehst. Was macht die Firma? Wie verdient sie Geld?" },
                    { text: "Einen Glücksbringer kaufen", correct: false, explain: "Aberglaube hilft nicht an der Börse!" },
                    { text: "Alle deine Freunde fragen", correct: false, explain: "Besser selbst recherchieren als auf andere hören." },
                    { text: "Beten, dass alles gut geht", correct: false, explain: "Wissen schlägt Hoffnung an der Börse!" }
                ],
                topic: "Basics 🎯",
                difficulty: 1
            },
            {
                q: "Ab welchem Alter darfst du offiziell Aktien besitzen?",
                a: [
                    { text: "Ab Geburt - deine Eltern können für dich anlegen", correct: true, explain: "Richtig! Viele Eltern legen schon für Babys Geld in Aktien an. Selbst handeln darfst du aber erst später." },
                    { text: "Ab 14 Jahren mit Taschengeldparagraph", correct: false, explain: "Du darfst sie besitzen, aber nicht selbstständig handeln." },
                    { text: "Erst ab 18 Jahren", correct: false, explain: "Selbstständig handeln ja, aber besitzen darfst du sie schon früher." },
                    { text: "Ab 21 Jahren", correct: false, explain: "Viel zu spät! Mit 18 bist du voll geschäftsfähig." }
                ],
                topic: "Basics 🎯",
                difficulty: 2
            },

            // PRODUKTE (15 Fragen)
            {
                q: "Was ist ein ETF? Denk an einen Obstkorb...",
                a: [
                    { text: "Statt einer Aktie kaufst du einen ganzen Korb voller Aktien", correct: true, explain: "Perfekte Analogie! Ein ETF ist wie ein Obstkorb - du bekommst viele verschiedene 'Früchte' auf einmal." },
                    { text: "Eine einzelne, besonders teure Aktie", correct: false, explain: "Nein, das Gegenteil! ETFs enthalten viele Aktien und sind oft günstiger." },
                    { text: "Ein Sparvertrag mit festen Zinsen", correct: false, explain: "Nein, ETFs schwanken im Wert wie Aktien auch." },
                    { text: "Eine Versicherung gegen Verluste", correct: false, explain: "Leider nein! ETFs können auch fallen, nur das Risiko ist besser verteilt." }
                ],
                topic: "Produkte 📊",
                difficulty: 1
            },
            {
                q: "Der MSCI World ETF enthält Aktien aus wie vielen Ländern ungefähr?",
                a: [
                    { text: "23 Industrieländer weltweit", correct: true, explain: "Richtig! Der MSCI World deckt die entwickelten Märkte ab, aber keine Schwellenländer." },
                    { text: "Alle 195 Länder der Welt", correct: false, explain: "Nein, 'World' ist etwas irreführend. Schwellenländer fehlen." },
                    { text: "Nur USA und Europa", correct: false, explain: "Mehr! Japan, Australien, Kanada und andere sind auch dabei." },
                    { text: "Nur die G7-Staaten", correct: false, explain: "Viel mehr! 23 Länder insgesamt." }
                ],
                topic: "Produkte 📊",
                difficulty: 3
            },
            {
                q: "Was ist eine Dividende? Stell dir vor, du besitzt einen kleinen Teil von Coca-Cola...",
                a: [
                    { text: "Coca-Cola schüttet einen Teil des Gewinns an dich aus", correct: true, explain: "Genau! Als Miteigentümer bekommst du einen winzigen Teil vom Gewinn - das ist die Dividende." },
                    { text: "Du bekommst jedes Jahr gratis Cola-Flaschen", correct: false, explain: "Haha, schön wär's! Du bekommst Geld, keine Produkte." },
                    { text: "Der Preis deiner Aktie steigt automatisch", correct: false, explain: "Nein, die Dividende ist eine Zahlung zusätzlich zum Aktienkurs." },
                    { text: "Du musst Geld an Coca-Cola zahlen", correct: false, explain: "Andersrum! Die Firma zahlt an dich." }
                ],
                topic: "Produkte 📊",
                difficulty: 1
            },
            {
                q: "Ein 'thesaurierender' ETF... was macht der mit deinen Dividenden?",
                a: [
                    { text: "Er reinvestiert sie automatisch für mehr Wachstum", correct: true, explain: "Richtig! 'Thesaurierend' = automatisches Reinvestieren. Perfekt für langfristigen Vermögensaufbau!" },
                    { text: "Er zahlt sie auf dein Konto aus", correct: false, explain: "Das macht ein 'ausschüttender' ETF, nicht ein thesaurierender." },
                    { text: "Er spendet sie an wohltätige Zwecke", correct: false, explain: "Nein, dein Geld bleibt dein Geld!" },
                    { text: "Er versteckt sie vor dem Finanzamt", correct: false, explain: "Nein! Alles läuft legal. Du musst trotzdem Steuern zahlen." }
                ],
                topic: "Produkte 📊",
                difficulty: 2
            },
            {
                q: "Was ist der DAX?",
                a: [
                    { text: "Die 40 größten deutschen Unternehmen in einem Index", correct: true, explain: "Korrekt! Der DAX zeigt, wie es den größten deutschen Firmen geht." },
                    { text: "Eine große deutsche Bank", correct: false, explain: "Nein, der DAX ist ein Index, keine Bank." },
                    { text: "Die Börse in Frankfurt", correct: false, explain: "Die Börse heißt 'Frankfurter Börse', der DAX ist nur eine Kennzahl dort." },
                    { text: "Ein Tier im Börsen-Zoo", correct: false, explain: "Haha, nein! Obwohl es Bullen und Bären an der Börse gibt 🐂🐻" }
                ],
                topic: "Produkte 📊",
                difficulty: 1
            },
            {
                q: "Apple, Microsoft, Amazon... in welchem Index findest du die alle?",
                a: [
                    { text: "S&P 500 und NASDAQ-100", correct: true, explain: "Richtig! Diese Tech-Giganten sind in beiden großen US-Indizes." },
                    { text: "Im deutschen DAX", correct: false, explain: "Nein, das sind amerikanische Firmen. Der DAX ist nur für deutsche." },
                    { text: "Im Bitcoin-Index", correct: false, explain: "Bitcoin ist eine Kryptowährung, kein Aktienindex." },
                    { text: "Im Euro Stoxx 50", correct: false, explain: "Nein, der ist für europäische Unternehmen." }
                ],
                topic: "Produkte 📊",
                difficulty: 2
            },
            {
                q: "Was ist der Vorteil von ETFs gegenüber einzelnen Aktien?",
                a: [
                    { text: "Das Risiko ist auf viele Firmen verteilt", correct: true, explain: "Genau! Wenn eine Firma pleite geht, tut's nicht so weh, weil du noch 500 andere im ETF hast." },
                    { text: "ETFs können niemals fallen", correct: false, explain: "Falsch! ETFs können fallen, nur meist weniger stark als Einzelaktien." },
                    { text: "Man wird damit schneller reich", correct: false, explain: "Nein, ETFs sind eher für geduldige Anleger." },
                    { text: "ETFs sind komplett kostenlos", correct: false, explain: "Fast! Sie sind günstig (oft 0,2% pro Jahr), aber nicht kostenlos." }
                ],
                topic: "Produkte 📊",
                difficulty: 2
            },
            {
                q: "Was sind 'Small Caps'?",
                a: [
                    { text: "Aktien von kleineren Unternehmen", correct: true, explain: "Richtig! 'Cap' kommt von Marktkapitalisierung. Small Caps = kleine Firmen." },
                    { text: "Billige Aktien unter einem Euro", correct: false, explain: "Nein! Der Preis sagt nichts über die Größe der Firma." },
                    { text: "Kleine Mützen für Trader", correct: false, explain: "Haha, netter Versuch! 😄" },
                    { text: "Aktien mit wenig Handelsvolumen", correct: false, explain: "Nein, es geht um die Unternehmensgröße." }
                ],
                topic: "Produkte 📊",
                difficulty: 2
            },
            {
                q: "Ein Kumpel erzählt dir von 'Penny Stocks' - Aktien für wenige Cent. Was solltest du wissen?",
                a: [
                    { text: "Extrem riskant! Oft Betrug oder Pleite-Kandidaten", correct: true, explain: "Absolut richtig! Penny Stocks sind wie Lotto spielen - meistens verlierst du alles." },
                    { text: "Super Chance! Aus 1 Cent können 100€ werden", correct: false, explain: "Theoretisch ja, praktisch gehen 99% pleite. Finger weg!" },
                    { text: "Die sichersten Aktien überhaupt", correct: false, explain: "Das Gegenteil! Die riskantesten Aktien, die es gibt." },
                    { text: "Perfekt für Anfänger, weil billig", correct: false, explain: "Gerade für Anfänger Gift! Lieber teure, solide Aktien oder ETFs." }
                ],
                topic: "Produkte 📊",
                difficulty: 3
            },
            {
                q: "Was ist eine Anleihe im Vergleich zur Aktie?",
                a: [
                    { text: "Du leihst einer Firma Geld und bekommst Zinsen", correct: true, explain: "Genau! Aktie = Eigentümer, Anleihe = Kreditgeber." },
                    { text: "Eine besonders sichere Art von Aktie", correct: false, explain: "Nein, es ist ein ganz anderes Produkt." },
                    { text: "Eine Aktie, die man anleinen muss", correct: false, explain: "Haha, nein! Hat nichts mit Hundeleine zu tun 🐕" },
                    { text: "Das gleiche wie eine Aktie", correct: false, explain: "Nein, fundamental verschieden!" }
                ],
                topic: "Produkte 📊",
                difficulty: 2
            },
            {
                q: "Was ist ein REIT?",
                a: [
                    { text: "Eine Aktie, mit der du in Immobilien investierst", correct: true, explain: "Richtig! Real Estate Investment Trust - du besitzt indirekt Häuser, Büros, Einkaufszentren." },
                    { text: "Ein Rechtschreibfehler von 'RIGHT'", correct: false, explain: "Nein, es ist eine echte Abkürzung!" },
                    { text: "Eine neue deutsche Bank", correct: false, explain: "Nein, REITs gibt's weltweit." },
                    { text: "Ein Videospiel über Börse", correct: false, explain: "Haha, nein! Obwohl das sicher spannend wäre." }
                ],
                topic: "Produkte 📊",
                difficulty: 3
            },
            {
                q: "Was ist der Unterschied zwischen einem ETF und einem aktiven Fonds?",
                a: [
                    { text: "ETF folgt Index automatisch, Fonds hat Manager", correct: true, explain: "Genau! Und deshalb sind ETFs viel günstiger - kein teurer Manager!" },
                    { text: "ETFs sind nur für Profis", correct: false, explain: "Umgekehrt! ETFs sind perfekt für Anfänger." },
                    { text: "Aktive Fonds sind immer besser", correct: false, explain: "Falsch! Die meisten aktiven Fonds sind schlechter als ETFs." },
                    { text: "Es gibt keinen Unterschied", correct: false, explain: "Doch! Großer Unterschied bei Kosten und Strategie." }
                ],
                topic: "Produkte 📊",
                difficulty: 2
            },
            {
                q: "Welche Gebühren zahlst du jährlich für einen ETF (TER)?",
                a: [
                    { text: "Meist zwischen 0,1% und 0,5% pro Jahr", correct: true, explain: "Richtig! Super günstig. Bei 1000€ Investment sind das nur 1-5€ pro Jahr!" },
                    { text: "10% vom Gewinn", correct: false, explain: "Nein, die Gebühr ist unabhängig vom Gewinn." },
                    { text: "50€ pauschal pro Jahr", correct: false, explain: "Nein, es ist ein Prozentsatz deines Investments." },
                    { text: "Gar nichts, ETFs sind gratis", correct: false, explain: "Schön wär's! Aber die Gebühren sind wirklich sehr niedrig." }
                ],
                topic: "Produkte 📊",
                difficulty: 2
            },
            {
                q: "Was passiert bei einem Aktiensplit?",
                a: [
                    { text: "Aus einer Aktie werden mehrere, Gesamtwert bleibt gleich", correct: true, explain: "Genau! Wie wenn du einen 20€-Schein in zwei 10€-Scheine wechselst." },
                    { text: "Die Firma geht pleite und wird aufgeteilt", correct: false, explain: "Nein! Im Gegenteil, oft ein Zeichen dass es gut läuft." },
                    { text: "Du verlierst die Hälfte deines Geldes", correct: false, explain: "Nein, dein Gesamtwert bleibt gleich!" },
                    { text: "Die Aktie wird physisch zerschnitten", correct: false, explain: "Nicht physisch! Alles passiert digital." }
                ],
                topic: "Produkte 📊",
                difficulty: 3
            },
            {
                q: "Warum solltest du als Anfänger mit ETFs starten statt mit Einzelaktien?",
                a: [
                    { text: "Automatische Risikostreuung und weniger Arbeit", correct: true, explain: "Perfekt! Ein ETF = hunderte Aktien. Viel sicherer und einfacher für den Start!" },
                    { text: "ETFs machen garantiert mehr Gewinn", correct: false, explain: "Nicht unbedingt mehr, aber stetiger." },
                    { text: "Einzelaktien sind für Anfänger verboten", correct: false, explain: "Nicht verboten, nur riskanter." },
                    { text: "ETFs sehen im Depot cooler aus", correct: false, explain: "😄 Design ist nicht der Grund!" }
                ],
                topic: "Produkte 📊",
                difficulty: 1
            },

            // MARKT & WIRTSCHAFT (15 Fragen)
            {
                q: "Die Inflation ist 5%. Was bedeutet das für dein Sparbuch mit 0,01% Zinsen?",
                a: [
                    { text: "Dein Geld verliert real an Wert", correct: true, explain: "Exakt! Bei 5% Inflation und 0,01% Zinsen verlierst du jedes Jahr fast 5% Kaufkraft. Autsch!" },
                    { text: "Super! Du bekommst 5% mehr Zinsen", correct: false, explain: "Nein, Inflation frisst dein Geld auf, sie gibt dir keins." },
                    { text: "Egal, Geld ist Geld", correct: false, explain: "Falsch! 100€ heute kaufen mehr als 100€ nächstes Jahr." },
                    { text: "Das Sparbuch wird teurer", correct: false, explain: "Nein, dein Geld darauf wird weniger wert." }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 2
            },
            {
                q: "Was ist ein 'Bullenmarkt'? 🐂",
                a: [
                    { text: "Die Kurse steigen über längere Zeit", correct: true, explain: "Richtig! Der Bulle stößt mit den Hörnern nach oben = steigende Kurse." },
                    { text: "Die Kurse fallen stark", correct: false, explain: "Das wäre ein Bärenmarkt 🐻" },
                    { text: "Nur Landwirtschafts-Aktien werden gehandelt", correct: false, explain: "Nein, hat nichts mit echten Bullen zu tun!" },
                    { text: "Die Börse ist geschlossen", correct: false, explain: "Nein, die Börse läuft normal weiter." }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 1
            },
            {
                q: "Warum können die Kurse an einem Tag 5% fallen, obwohl nichts Schlimmes passiert ist?",
                a: [
                    { text: "Panik und Herdenverhalten verstärken sich", correct: true, explain: "Genau! Manchmal reicht ein Funke und alle verkaufen gleichzeitig - ohne echten Grund." },
                    { text: "Das ist unmöglich ohne schlechte Nachrichten", correct: false, explain: "Doch! Die Börse ist oft irrational und übertreibt." },
                    { text: "Die Börse macht dann Mittagspause", correct: false, explain: "Nein, das hat andere Gründe." },
                    { text: "Jemand hat den falschen Knopf gedrückt", correct: false, explain: "So einfach ist es nicht, auch wenn es 'Flash Crashes' gibt." }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 3
            },
            {
                q: "Die Zentralbank erhöht die Zinsen. Was passiert oft mit Aktien?",
                a: [
                    { text: "Sie fallen, weil Sparen attraktiver wird", correct: true, explain: "Richtig! Höhere Zinsen = Festgeld wird attraktiver = Geld fließt aus Aktien ab." },
                    { text: "Sie steigen immer automatisch", correct: false, explain: "Nein, meist das Gegenteil!" },
                    { text: "Nichts, Zinsen sind egal für Aktien", correct: false, explain: "Zinsen sind super wichtig für die Börse!" },
                    { text: "Die Börse schließt dann sofort", correct: false, explain: "Nein, sie bleibt offen." }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 2
            },
            {
                q: "Was ist eine Rezession?",
                a: [
                    { text: "Die Wirtschaft schrumpft - weniger Jobs, weniger Konsum", correct: true, explain: "Genau! In einer Rezession läuft die Wirtschaft rückwärts. Nicht gut für Aktien." },
                    { text: "Alles wird automatisch billiger", correct: false, explain: "Nicht unbedingt! Manchmal gibt's sogar Inflation in der Rezession." },
                    { text: "Die Börse macht Urlaub", correct: false, explain: "Nein, die Börse läuft weiter - meist mit fallenden Kursen." },
                    { text: "Alle werden plötzlich reich", correct: false, explain: "Das Gegenteil! Viele verlieren in Rezessionen Geld und Jobs." }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 2
            },
            {
                q: "Tesla-Aktie steigt 20% an einem Tag! Was solltest du tun?",
                a: [
                    { text: "Erstmal cool bleiben und überlegen warum", correct: true, explain: "Perfekt! FOMO (Fear of Missing Out) ist dein Feind. Erst denken, dann handeln." },
                    { text: "SOFORT kaufen, bevor sie noch höher steigt!", correct: false, explain: "Klassischer Anfängerfehler! Nach 20% Plus ist das Risiko hoch." },
                    { text: "All-in mit deinem ganzen Geld!", correct: false, explain: "Niemals! Besonders nicht nach so einem Anstieg." },
                    { text: "Tesla shorten (auf fallende Kurse setzen)", correct: false, explain: "Viel zu riskant für Anfänger! Lass die Finger von Shorts." }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 2
            },
            {
                q: "Was ist Volatilität?",
                a: [
                    { text: "Wie stark eine Aktie rauf und runter schwankt", correct: true, explain: "Genau! Hohe Volatilität = wilde Achterbahnfahrt. Niedrige = ruhige Fahrt." },
                    { text: "Die Geschwindigkeit, mit der sich der Kurs in eine Richtung bewegt", correct: false, explain: "Fast! Aber Volatilität misst die Schwankung in beide Richtungen, nicht die Geschwindigkeit." },
                    { text: "Das durchschnittliche Handelsvolumen einer Aktie pro Tag", correct: false, explain: "Nein, Handelsvolumen und Volatilität sind verschiedene Dinge." },
                    { text: "Die Gebühren, die der Broker für den Handel berechnet", correct: false, explain: "Nein, Gebühren haben nichts mit Volatilität zu tun." }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 2
            },
            {
                q: "Deine Lieblingsaktie ist 50% gefallen. Was nun?",
                a: [
                    { text: "Prüfen: Warum ist sie gefallen? Firma noch gut?", correct: true, explain: "Kluge Herangehensweise! Manchmal sind Rücksetzer Kaufchancen, manchmal Warnsignale." },
                    { text: "Panik! Sofort alles verkaufen!", correct: false, explain: "Bloß nicht! Verluste realisierst du erst beim Verkauf." },
                    { text: "Alles nachkaufen - ist ja jetzt billig!", correct: false, explain: "Vorsicht! Billig kann noch billiger werden. Erst analysieren!" },
                    { text: "Die App löschen und vergessen", correct: false, explain: "Kopf in den Sand hilft nicht. Besser: Daraus lernen!" }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 3
            },
            {
                q: "Was ist ein 'Börsencrash'?",
                a: [
                    { text: "Viele Aktien fallen sehr stark in kurzer Zeit", correct: true, explain: "Richtig! Bei einem Crash fallen oft alle Aktien - egal wie gut die Firmen sind." },
                    { text: "Die Computer der Börse stürzen ab", correct: false, explain: "Nein, gemeint sind die Kurse, nicht die Technik." },
                    { text: "Ein neues Videospiel über Aktien", correct: false, explain: "Wäre sicher spannend, ist aber was anderes!" },
                    { text: "Wenn eine einzelne Aktie fällt", correct: false, explain: "Nein, ein Crash betrifft den ganzen Markt." }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 1
            },
            {
                q: "'Kaufen wenn die Kanonen donnern' - was meint diese alte Börsenweisheit?",
                a: [
                    { text: "In Krisen kaufen, wenn alle in Panik verkaufen", correct: true, explain: "Genau! Die besten Kaufzeitpunkte sind oft, wenn alle Angst haben. Aber nur mit Geld, das du nicht brauchst!" },
                    { text: "Nur Rüstungsaktien kaufen", correct: false, explain: "Nein, es geht um das Timing, nicht um Waffen-Aktien." },
                    { text: "Bei Krieg sofort alles verkaufen", correct: false, explain: "Das Gegenteil ist gemeint!" },
                    { text: "Nur kaufen, wenn es laut an der Börse ist", correct: false, explain: "Metaphorisch gemeint - es geht um Krisenzeiten." }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 3
            },
            {
                q: "Was bedeutet es, wenn der Markt 'überkauft' ist?",
                a: [
                    { text: "Zu viele haben gekauft, die Kurse sind sehr hoch", correct: true, explain: "Richtig! Wie eine überfüllte Party - irgendwann gehen die ersten nach Hause und es wird leer." },
                    { text: "Es gibt keine Aktien mehr zu kaufen", correct: false, explain: "Aktien gibt's immer, aber zu welchem Preis?" },
                    { text: "Die Börse hat zu viel eingekauft", correct: false, explain: "Die Börse selbst kauft nichts." },
                    { text: "Alle Aktien sind ausverkauft", correct: false, explain: "Aktien können nicht 'ausverkauft' sein." }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 3
            },
            {
                q: "Warum steigen Aktien langfristig meistens?",
                a: [
                    { text: "Weil die Wirtschaft wächst und Firmen mehr verdienen", correct: true, explain: "Genau! Bevölkerung wächst, Technologie verbessert sich, Firmen werden produktiver = Aktien steigen." },
                    { text: "Weil das gesetzlich so festgelegt ist", correct: false, explain: "Keine Garantie! Nur eine historische Tendenz." },
                    { text: "Weil Geld immer mehr wird", correct: false, explain: "Teilweise wahr (Inflation), aber nicht der Hauptgrund." },
                    { text: "Weil die Börse das so will", correct: false, explain: "Die Börse 'will' nichts, sie spiegelt die Wirtschaft." }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 2
            },
            {
                q: "Was ist der 'Zinseszinseffekt' und warum ist er dein bester Freund?",
                a: [
                    { text: "Deine Gewinne erwirtschaften selbst wieder Gewinne", correct: true, explain: "Jackpot! Nach 30 Jahren arbeitet dein Geld härter als du. Einstein nannte es das '8. Weltwunder'!" },
                    { text: "Die Bank zahlt dir doppelte Zinsen", correct: false, explain: "Nein, es geht um Zinsen auf Zinsen." },
                    { text: "Ein Fehler im System", correct: false, explain: "Kein Fehler, sondern Mathe-Magie!" },
                    { text: "Zinsen werden immer höher", correct: false, explain: "Nein, der Zinssatz bleibt gleich, aber die Basis wächst." }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 2
            },
            {
                q: "Welches Land hat die größte Börse der Welt?",
                a: [
                    { text: "USA (New York Stock Exchange)", correct: true, explain: "Richtig! Die NYSE ist gigantisch. Allein Apple ist mehr wert als der ganze deutsche DAX!" },
                    { text: "China mit der Shanghai Exchange", correct: false, explain: "Groß, aber noch nicht die Nummer 1." },
                    { text: "Deutschland mit der Frankfurter Börse", correct: false, explain: "Wichtig in Europa, aber weltweit eher klein." },
                    { text: "Schweiz mit der Züricher Börse", correct: false, explain: "Klein aber fein, nicht die größte." }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 2
            },
            {
                q: "Was passiert mit Aktien in einer Hyperinflation?",
                a: [
                    { text: "Sie steigen nominal stark, real verlieren sie aber oft", correct: true, explain: "Komplex! Die Kurse explodieren in wertloser Währung, aber real (Kaufkraft) sieht's anders aus." },
                    { text: "Sie werden automatisch wertlos", correct: false, explain: "Nein, Aktien sind Sachwerte und schützen teilweise." },
                    { text: "Nichts, Aktien sind immun gegen Inflation", correct: false, explain: "Falsch, alles wird von Hyperinflation beeinflusst." },
                    { text: "Die Börse schließt für immer", correct: false, explain: "Selbst in Krisen läuft die Börse meist weiter." }
                ],
                topic: "Markt & Wirtschaft 💹",
                difficulty: 3
            },

            // STRATEGIE (15 Fragen)
            {
                q: "Wie lange solltest du mindestens planen, dein Geld in Aktien zu lassen?",
                a: [
                    { text: "Mindestens 5-10 Jahre", correct: true, explain: "Perfekt! Zeit ist dein bester Freund an der Börse. Kurzfristig ist alles möglich, langfristig gewinnt Qualität." },
                    { text: "1-2 Wochen reichen aus", correct: false, explain: "Viel zu kurz! Das ist Zocken, nicht Investieren." },
                    { text: "Genau 1 Jahr", correct: false, explain: "Immer noch zu kurz. Die Börse braucht Zeit." },
                    { text: "Bis morgen", correct: false, explain: "Das ist Daytrading - super riskant und meist verlustreich!" }
                ],
                topic: "Strategie 🎯",
                difficulty: 1
            },
            {
                q: "Was bedeutet 'Diversifikation'? Denk an Eier und Körbe...",
                a: [
                    { text: "Nicht alle Eier in einen Korb = Geld verteilen", correct: true, explain: "Genau! Wenn ein Korb runterfällt, sind nicht alle Eier kaputt. Clever!" },
                    { text: "Alle Eier in den besten Korb legen", correct: false, explain: "Zu riskant! Was wenn der 'beste' Korb runterfällt?" },
                    { text: "Keine Eier kaufen", correct: false, explain: "Dann hast du gar keine Chance auf Rendite!" },
                    { text: "Die Eier täglich umpacken", correct: false, explain: "Zu viel Handel macht durch Gebühren arm!" }
                ],
                topic: "Strategie 🎯",
                difficulty: 1
            },
            {
                q: "Du hast 100€ zum Investieren. Wie teilst du es am besten auf?",
                a: [
                    { text: "Erstmal alles in einen breit gestreuten ETF", correct: true, explain: "Super Start! Mit 100€ macht ein World-ETF am meisten Sinn. Später kannst du diversifizieren." },
                    { text: "100€ in Tesla - to the moon! 🚀", correct: false, explain: "Zu riskant! Was wenn Tesla abstürzt?" },
                    { text: "10 verschiedene Aktien für je 10€", correct: false, explain: "Die Gebühren fressen dich auf! Bei 100€ reicht ein ETF." },
                    { text: "Alles in Dogecoin", correct: false, explain: "Crypto ist mega-riskant! Nicht für Anfänger mit wenig Geld." }
                ],
                topic: "Strategie 🎯",
                difficulty: 2
            },
            {
                q: "Was ist ein Sparplan und warum ist er so genial?",
                a: [
                    { text: "Du kaufst jeden Monat automatisch für einen festen Betrag", correct: true, explain: "Perfekt! Cost-Average-Effekt + Automatisierung = Vermögensaufbau im Schlaf!" },
                    { text: "Ein Plan, wie du weniger Geld ausgibst", correct: false, explain: "Das ist ein Haushaltsplan. Ein Sparplan investiert automatisch." },
                    { text: "Eine Liste deiner Lieblings-Aktien", correct: false, explain: "Nein, es ist ein automatischer Kauf-Auftrag." },
                    { text: "Eine Garantie, um schnell reich zu werden", correct: false, explain: "Falsch. Es ist eine solide, langfristige Strategie, aber keine Garantie und nicht schnell." }
                ],
                topic: "Strategie 🎯",
                difficulty: 1
            },
            {
                q: "Dein Portfolio ist 30% im Plus. Was machst du?",
                a: [
                    { text: "Freuen und weiter laufen lassen", correct: true, explain: "Richtig! 'Lass deine Gewinne laufen' ist eine goldene Regel. Verkaufen kannst du immer noch." },
                    { text: "SOFORT alles verkaufen - Gewinn mitnehmen!", correct: false, explain: "Warum? Gute Unternehmen können noch viel weiter steigen!" },
                    { text: "Alles nachkaufen - läuft ja gut!", correct: false, explain: "Vorsicht! Nach 30% Plus ist das Risiko höher." },
                    { text: "Kredite aufnehmen und mehr kaufen", correct: false, explain: "NIEMALS! Das kann dich ruinieren." }
                ],
                topic: "Strategie 🎯",
                difficulty: 2
            },
            {
                q: "Was ist 'HODL' in der Krypto/Aktien-Community?",
                a: [
                    { text: "Ein Tippfehler für 'Hold' = Halten, nicht verkaufen", correct: true, explain: "Genau! HODL entstand 2013 als Tippfehler in einem Bitcoin-Forum und wurde zur Philosophie. Manche deuten es auch als 'Hold On for Dear Life'!" },
                    { text: "Eine neue Kryptowährung", correct: false, explain: "Nein, es ist eine Strategie, keine Währung." },
                    { text: "Ein Broker aus Holland", correct: false, explain: "Nein, es bedeutet 'halten'." },
                    { text: "Ein spezieller Ordertyp bei Online-Brokern", correct: false, explain: "Nein, HODL ist kein technischer Ordertyp. Es bedeutet einfach: Halten und nicht verkaufen!" }
                ],
                topic: "Strategie 🎯",
                difficulty: 2
            },
            {
                q: "Warren Buffett sagt: 'Kaufe nur, was du verstehst.' Was meint er?",
                a: [
                    { text: "Investiere nicht in Firmen, deren Geschäft du nicht verstehst", correct: true, explain: "Goldene Regel! Wenn du nicht erklären kannst, womit die Firma Geld verdient, lass die Finger davon." },
                    { text: "Kaufe nur Aktien von Firmen, bei denen du arbeitest", correct: false, explain: "Zu eng gefasst! Du musst die Firma verstehen, nicht dort arbeiten." },
                    { text: "Lies jedes Handbuch, bevor du kaufst", correct: false, explain: "Nicht gemeint. Es geht ums Geschäftsmodell." },
                    { text: "Kaufe nur amerikanische Aktien", correct: false, explain: "Nein, Buffett meint das Geschäftsmodell, nicht die Herkunft." }
                ],
                topic: "Strategie 🎯",
                difficulty: 2
            },
            {
                q: "'Time in the market beats timing the market' - was bedeutet das?",
                a: [
                    { text: "Lange investiert sein ist besser als perfektes Timing suchen", correct: true, explain: "Absolut! Niemand kann konstant den besten Zeitpunkt treffen. Zeit im Markt gewinnt!" },
                    { text: "Du musst schnell sein beim Kaufen", correct: false, explain: "Nein, genau das Gegenteil!" },
                    { text: "Kaufe nur zu bestimmten Uhrzeiten", correct: false, explain: "Hat nichts mit der Uhrzeit zu tun." },
                    { text: "Die Börse schlägt immer die Zeit", correct: false, explain: "Nein, es geht um Geduld vs. Market-Timing." }
                ],
                topic: "Strategie 🎯",
                difficulty: 3
            },
            {
                q: "Du hast von einer 'todsicheren' Aktie gehört, die sich 'garantiert' verdoppelt. Was tust du?",
                a: [
                    { text: "Skeptisch sein! Es gibt keine Garantien an der Börse", correct: true, explain: "100% richtig! 'Todsicher' und 'Garantiert' sind rote Flaggen. Könnte Betrug sein!" },
                    { text: "All-in! Endlich reich werden!", correct: false, explain: "NEIN! Das ist der Weg in den Ruin." },
                    { text: "Erstmal 50% investieren", correct: false, explain: "Auch 50% von Betrug ist zu viel!" },
                    { text: "Freunde fragen, ob sie mitmachen", correct: false, explain: "Bloß nicht! Dann verliert ihr alle Geld." }
                ],
                topic: "Strategie 🎯",
                difficulty: 1
            },
            {
                q: "Was ist der größte Vorteil, den du als junger Mensch beim Investieren hast?",
                a: [
                    { text: "Zeit! Der Zinseszinseffekt hat Jahrzehnte um zu wirken", correct: true, explain: "Jackpot! Mit 14 hast du 50+ Jahre Zeit. Das ist deine Superpower! 🦸‍♂️" },
                    { text: "Du kennst dich mit Apps aus", correct: false, explain: "Hilft, aber Zeit ist viel wichtiger." },
                    { text: "Du hast keine Rechnungen zu zahlen", correct: false, explain: "Stimmt oft, aber Zeit ist der echte Vorteil." },
                    { text: "Du darfst mehr riskieren", correct: false, explain: "Nein! Jung sein heißt nicht, unvernünftig zu sein." }
                ],
                topic: "Strategie 🎯",
                difficulty: 2
            },
            {
                q: "Was ist 'Dollar Cost Averaging' (Durchschnittskosteneffekt)?",
                a: [
                    { text: "Regelmäßig kaufen glättet den Einstiegspreis", correct: true, explain: "Genau! Mal kaufst du teuer, mal billig - am Ende ein guter Durchschnitt. Perfekt für Sparpläne!" },
                    { text: "Nur kaufen wenn der Dollar steigt", correct: false, explain: "Nein, hat nichts mit dem Dollar zu tun." },
                    { text: "Immer den billigsten Preis erwischen", correct: false, explain: "Unmöglich! Darum geht's ja - Durchschnitt statt Timing." },
                    { text: "In Dollar statt Euro investieren", correct: false, explain: "Nein, funktioniert mit jeder Währung." }
                ],
                topic: "Strategie 🎯",
                difficulty: 2
            },
            {
                q: "Was solltest du VOR dem Investieren aufbauen?",
                a: [
                    { text: "Einen Notgroschen (3-6 Monate Ausgaben)", correct: true, explain: "Super wichtig! Damit musst du nie in schlechten Zeiten verkaufen. Sicherheit first!" },
                    { text: "Eine Million Follower", correct: false, explain: "Follower bringen keine Rendite!" },
                    { text: "Muskeln im Fitnessstudio", correct: false, explain: "Gesund, aber nicht börsenrelevant 😄" },
                    { text: "Eine Sammlung von Börsenbüchern", correct: false, explain: "Lesen hilft, aber der Notgroschen ist wichtiger." }
                ],
                topic: "Strategie 🎯",
                difficulty: 2
            },
            {
                q: "Was ist besser: 10 Aktien à 100€ oder 100 Aktien à 10€?",
                a: [
                    { text: "Egal! Es kommt auf den Gesamtwert an", correct: true, explain: "Richtig! 1000€ sind 1000€. Der Stückpreis ist psychologisch, nicht finanziell wichtig." },
                    { text: "100 Aktien sind immer besser", correct: false, explain: "Falsch! Die Anzahl sagt nichts über den Wert." },
                    { text: "10 teure Aktien sind wertvoller", correct: false, explain: "Nicht automatisch! Der Gesamtwert zählt." },
                    { text: "Kommt auf die Farbe des Charts an", correct: false, explain: "Die Farbe ist völlig egal! 😄" }
                ],
                topic: "Strategie 🎯",
                difficulty: 3
            },
            {
                q: "Wie viel Gewinn aus Aktien darfst du pro Jahr steuerfrei behalten (Sparerpauschbetrag)?",
                a: [
                    { text: "1.000€ pro Person (Stand 2024)", correct: true, explain: "Richtig! Bis 1.000€ Kapitalerträge zahlst du keine Steuern. Freistellungsauftrag beim Broker nicht vergessen!" },
                    { text: "Es gibt keinen Freibetrag - alles wird besteuert", correct: false, explain: "Doch! Der Sparerpauschbetrag liegt bei 1.000€ pro Person." },
                    { text: "Unbegrenzt, Aktiengewinne sind generell steuerfrei", correct: false, explain: "Schön wär's! Nur die ersten 1.000€ sind frei, darüber zahlt man Abgeltungssteuer." },
                    { text: "10.000€ pro Person und Jahr", correct: false, explain: "Leider nicht so viel! Es sind 1.000€ pro Person." }
                ],
                topic: "Strategie 🎯",
                difficulty: 2
            },
            {
                q: "Was ist 'Rebalancing' und warum ist es wichtig?",
                a: [
                    { text: "Portfolio wieder auf ursprüngliche Gewichtung bringen", correct: true, explain: "Richtig! Wenn Tech von 20% auf 40% steigt, verkaufst du etwas und kaufst andere Sektoren. Risiko-Management!" },
                    { text: "Verlustpositionen verkaufen und nur Gewinner behalten", correct: false, explain: "Nein! Beim Rebalancing geht es um Gewichtung, nicht um Gewinner/Verlierer aussortieren." },
                    { text: "Täglich alle Positionen wechseln", correct: false, explain: "Viel zu oft! Rebalancing macht man ein- bis zweimal im Jahr." },
                    { text: "Sein ganzes Portfolio verkaufen und komplett neu zusammenstellen", correct: false, explain: "Nein, man passt nur die Gewichtung an, nicht das ganze Portfolio." }
                ],
                topic: "Strategie 🎯",
                difficulty: 3
            },

            // PSYCHOLOGIE (10 Fragen)
            {
                q: "Deine Aktie fällt 20%. Dein Bauch sagt 'VERKAUFEN!'. Was sagt dein Kopf?",
                a: [
                    { text: "Erst mal durchatmen und analysieren warum", correct: true, explain: "Perfekt! Emotionen sind der größte Feind des Anlegers. Erst denken, dann handeln!" },
                    { text: "Der Bauch hat immer recht!", correct: false, explain: "Fatal! Der Bauch wird von Angst gesteuert, nicht von Logik." },
                    { text: "Sofort nachkaufen!", correct: false, explain: "Auch nicht klug ohne Analyse. Vielleicht fällt sie aus gutem Grund." },
                    { text: "Augen zu und durch", correct: false, explain: "Ignorieren ist auch keine Strategie. Analysieren ist besser!" }
                ],
                topic: "Psychologie 🧠",
                difficulty: 2
            },
            {
                q: "Was ist FOMO und warum ist es gefährlich?",
                a: [
                    { text: "'Fear Of Missing Out' - Angst, Gewinne zu verpassen", correct: true, explain: "Genau! FOMO lässt dich überteuert kaufen. Die Party ist meist vorbei, wenn alle dabei sind." },
                    { text: "Ein neuer Broker aus Amerika", correct: false, explain: "Nein, es ist ein Gefühl, das dich arm machen kann." },
                    { text: "'First One Makes Profit' - der Erste gewinnt", correct: false, explain: "Falsche Abkürzung und falsches Konzept." },
                    { text: "Nicht gefährlich, sondern gut", correct: false, explain: "FOMO ist einer der größten Fehler, die du machen kannst!" }
                ],
                topic: "Psychologie 🧠",
                difficulty: 1
            },
            {
                q: "Alle reden über GameStop/AMC/die neue heiße Aktie. Was machst du?",
                a: [
                    { text: "Cool bleiben. Wenn alle reden, ist es meist zu spät", correct: true, explain: "Weise Entscheidung! Die besten Investments findet man, bevor der Hype beginnt." },
                    { text: "SOFORT kaufen bevor es zu spät ist!!!", correct: false, explain: "Klassische FOMO-Falle! Du kaufst am Höhepunkt." },
                    { text: "Alles was du hast reinwerfen", correct: false, explain: "Selbstmord-Mission! Hypes enden oft im Crash." },
                    { text: "Einen Kredit aufnehmen zum Investieren", correct: false, explain: "Der schlimmste Fehler überhaupt!" }
                ],
                topic: "Psychologie 🧠",
                difficulty: 2
            },
            {
                q: "Du hast 1000€ in Aktien verloren. Wie gehst du damit um?",
                a: [
                    { text: "Analysieren was schief lief, daraus lernen", correct: true, explain: "Perfekte Einstellung! Verluste sind Lektionen. Jeder erfolgreiche Investor hat mal verloren." },
                    { text: "Nie wieder Aktien! Alles Betrug!", correct: false, explain: "Überreaktion! Ein Fehler macht nicht das ganze System schlecht." },
                    { text: "Doppelt so viel investieren um es zurückzuholen", correct: false, explain: "Gefährlich! 'Revenge Trading' führt meist zu noch mehr Verlusten." },
                    { text: "Allen erzählen und andere warnen", correct: false, explain: "Besser erstmal selbst verstehen, was falsch lief." }
                ],
                topic: "Psychologie 🧠",
                difficulty: 3
            },
            {
                q: "Warum verlieren so viele Leute Geld an der Börse?",
                a: [
                    { text: "Sie lassen sich von Emotionen leiten statt von Fakten", correct: true, explain: "Bingo! Angst und Gier sind die größten Portfoliokiller. Bleib rational!" },
                    { text: "Die Börse ist manipuliert", correct: false, explain: "Die Börse ist reguliert. Fehler liegen meist beim Anleger." },
                    { text: "Nur Profis können gewinnen", correct: false, explain: "Unsinn! Mit ETFs und Geduld kann jeder gewinnen." },
                    { text: "Aktien sind generell schlecht", correct: false, explain: "Aktien sind super - wenn man es richtig macht!" }
                ],
                topic: "Psychologie 🧠",
                difficulty: 2
            },
            {
                q: "Der 'Confirmation Bias' - du suchst nur Infos, die deine Meinung bestätigen. Gefährlich?",
                a: [
                    { text: "Sehr gefährlich! Man sollte immer Gegenmeinungen prüfen", correct: true, explain: "Absolut! Wenn du nur positive News über deine Aktie liest, verpasst du wichtige Warnsignale." },
                    { text: "Gut so! Positive Gedanken ziehen Gewinne an", correct: false, explain: "Magisches Denken funktioniert nicht an der Börse!" },
                    { text: "Egal, Hauptsache man fühlt sich gut", correct: false, explain: "Gefühle machen nicht reich, Fakten schon." },
                    { text: "Was ist das überhaupt?", correct: false, explain: "Ein wichtiges psychologisches Konzept, das du kennen solltest!" }
                ],
                topic: "Psychologie 🧠",
                difficulty: 3
            },
            {
                q: "Du hast eine Aktie für 100€ gekauft, jetzt ist sie bei 50€. 'Ich verkaufe erst bei 100€ wieder!' - klug?",
                a: [
                    { text: "Nein! Das ist der 'Anker-Effekt'. Entscheide basierend auf Zukunft", correct: true, explain: "Genau! Die Aktie 'weiß' nicht, was du gezahlt hast. Entscheide basierend auf der Zukunft, nicht der Vergangenheit." },
                    { text: "Ja! Niemals mit Verlust verkaufen", correct: false, explain: "Manchmal ist ein kleiner Verlust besser als ein großer!" },
                    { text: "Kommt drauf an wie lange man wartet", correct: false, explain: "Die Zeit allein macht schlechte Aktien nicht gut." },
                    { text: "Bei 50€ nachkaufen bis der Schnitt stimmt", correct: false, explain: "Gefährlich! Schlechtem Geld kein gutes hinterherwerfen." }
                ],
                topic: "Psychologie 🧠",
                difficulty: 3
            },
            {
                q: "Dein bester Freund gibt dir einen 'heißen Tipp'. Was machst du?",
                a: [
                    { text: "Bedanken, aber selbst recherchieren", correct: true, explain: "Perfekt! Freundschaft und Geld sollte man trennen. Mach deine eigenen Hausaufgaben!" },
                    { text: "Sofort kaufen - Freunde lügen nicht!", correct: false, explain: "Auch Freunde können sich irren oder schlechte Infos haben." },
                    { text: "Ihn fragen, ob er selbst investiert hat", correct: false, explain: "Hilft etwas, aber eigene Recherche ist wichtiger." },
                    { text: "Allen anderen den Tipp weitergeben", correct: false, explain: "Bloß nicht! Du könntest andere in Verluste führen." }
                ],
                topic: "Psychologie 🧠",
                difficulty: 2
            },
            {
                q: "Was ist das 'Spielkasino-Gefühl' beim Trading und warum ist es gefährlich?",
                a: [
                    { text: "Der Kick vom schnellen Gewinnen/Verlieren macht süchtig", correct: true, explain: "Exakt! Trading kann wie Zocken wirken. Das Gehirn will mehr davon - sehr gefährlich!" },
                    { text: "Gibt es nicht, Börse ist seriös", correct: false, explain: "Doch! Viele werden trading-süchtig wie beim Glücksspiel." },
                    { text: "Ist gut, macht mehr Spaß", correct: false, explain: "Spaß ist okay, Sucht ist gefährlich!" },
                    { text: "Nur bei Krypto, nicht bei Aktien", correct: false, explain: "Kann bei allem passieren, wenn man zu viel handelt." }
                ],
                topic: "Psychologie 🧠",
                difficulty: 2
            },
            {
                q: "'Buy the rumor, sell the news' - was bedeutet diese Trader-Weisheit?",
                a: [
                    { text: "Kurse steigen oft vor guten News und fallen danach", correct: true, explain: "Genau! Die Erwartung treibt Kurse hoch, die Nachricht ist dann oft schon 'eingepreist'." },
                    { text: "Kaufe nur bei Gerüchten", correct: false, explain: "Nein, es erklärt nur ein Marktphänomen." },
                    { text: "Verkaufe immer wenn News kommen", correct: false, explain: "Nicht immer! Manchmal steigen Kurse weiter." },
                    { text: "Glaube keinen Nachrichten", correct: false, explain: "News sind wichtig, aber ihr Timing-Effekt ist gemeint." }
                ],
                topic: "Psychologie 🧠",
                difficulty: 3
            },
            {
                q: "Was ist der 'Dispositionseffekt' und warum ist er schlecht für dein Portfolio?",
                a: [
                    { text: "Gewinner zu früh verkaufen, Verlierer zu lange halten", correct: true, explain: "Genau! Wir freuen uns über kleine Gewinne und hoffen bei Verlusten auf Erholung. Meist die falsche Strategie!" },
                    { text: "Zu viel auf einmal zu kaufen", correct: false, explain: "Das ist ein anderer Fehler, nicht der Dispositionseffekt." },
                    { text: "Nur Aktien zu kaufen, die im Angebot sind", correct: false, explain: "Nein, es geht um das Verkaufsverhalten." },
                    { text: "Immer das Gegenteil vom Markt zu machen", correct: false, explain: "Das wäre konträres Investieren, nicht der Dispositionseffekt." }
                ],
                topic: "Psychologie 🧠",
                difficulty: 3
            },
            {
                q: "Warum ist 'Rache-Trading' nach einem Verlust so gefährlich?",
                a: [
                    { text: "Emotionen übernehmen und führen zu noch größeren Verlusten", correct: true, explain: "Richtig! Du willst unbedingt zurückgewinnen und gehst zu hohe Risiken ein. Klassische Abwärtsspirale!" },
                    { text: "Es kostet Extra-Gebühren", correct: false, explain: "Gebühren sind nicht das Hauptproblem." },
                    { text: "Der Broker sperrt dich dann", correct: false, explain: "Nein, der Broker verdient sogar daran." },
                    { text: "Es ist nicht gefährlich", correct: false, explain: "Sehr gefährlich! Einer der häufigsten Gründe für große Verluste." }
                ],
                topic: "Psychologie 🧠",
                difficulty: 2
            },
            {
                q: "Was ist 'Overconfidence Bias' und wann tritt er oft auf?",
                a: [
                    { text: "Übermäßiges Selbstvertrauen nach ein paar Gewinnen", correct: true, explain: "Genau! Nach drei Gewinner-Trades denkst du, du bist der nächste Warren Buffett. Vorsicht!" },
                    { text: "Zu wenig Vertrauen in eigene Entscheidungen", correct: false, explain: "Das Gegenteil! Es geht um ZU VIEL Vertrauen." },
                    { text: "Vertrauen nur in bekannte Aktien", correct: false, explain: "Das wäre der Home Bias, nicht Overconfidence." },
                    { text: "Vertrauen in den Broker", correct: false, explain: "Nein, es geht um Selbstüberschätzung." }
                ],
                topic: "Psychologie 🧠",
                difficulty: 2
            },
            {
                q: "Warum solltest du ein Trading-Tagebuch führen?",
                a: [
                    { text: "Um aus Fehlern zu lernen und Muster zu erkennen", correct: true, explain: "Absolut! Ohne Dokumentation wiederholst du dieselben Fehler. Die Profis führen alle ein Tagebuch!" },
                    { text: "Weil es gesetzlich vorgeschrieben ist", correct: false, explain: "Nein, ist es nicht. Aber es ist sehr empfehlenswert." },
                    { text: "Um es später zu verkaufen", correct: false, explain: "Dein Tagebuch ist für dich, nicht für andere." },
                    { text: "Hat keinen echten Nutzen", correct: false, explain: "Großer Nutzen! Es verbessert nachweislich die Performance." }
                ],
                topic: "Psychologie 🧠",
                difficulty: 1
            },
            {
                q: "Was bedeutet 'den Markt schlagen' und warum gelingt es den meisten nicht?",
                a: [
                    { text: "Bessere Rendite als der Index - sehr schwer wegen Gebühren und Timing", correct: true, explain: "Richtig! Über 90% der aktiven Fonds schlagen den Index langfristig nicht. Darum sind ETFs so beliebt!" },
                    { text: "Physisch zur Börse gehen und gewinnen", correct: false, explain: "Haha, nein! Es ist eine Redewendung für bessere Performance." },
                    { text: "Jeden Tag handeln", correct: false, explain: "Nein, viel Handeln macht es sogar schwerer." },
                    { text: "Ist ganz einfach mit der richtigen App", correct: false, explain: "Leider nicht! Keine App macht dich automatisch zum Gewinner." }
                ],
                topic: "Psychologie 🧠",
                difficulty: 2
            },

            // PRAXIS & HANDEL (15 Fragen)
            {
                q: "Du willst deine erste Aktie kaufen. Was brauchst du?",
                a: [
                    { text: "Depot, Verrechnungskonto und Erlaubnis der Eltern", correct: true, explain: "Alles richtig! Ohne diese drei Dinge geht nichts für Minderjährige." },
                    { text: "Nur eine Trading-App runterladen", correct: false, explain: "Die App allein reicht nicht. Du brauchst ein Depot und als Minderjähriger deine Eltern." },
                    { text: "Mindestens 10.000€ Startkapital", correct: false, explain: "Quatsch! Du kannst mit 25€ oder weniger anfangen." },
                    { text: "Einen Anzug und Krawatte", correct: false, explain: "Haha! Du tradest vom Handy, nicht vom Börsenparkett." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 1
            },
            {
                q: "Was ist eine 'Limit-Order'?",
                a: [
                    { text: "Du legst fest, zu welchem Preis maximal gekauft wird", correct: true, explain: "Genau! Mit Limit-Orders kontrollierst du den Preis. Sehr wichtig bei volatilen Aktien!" },
                    { text: "Eine Order mit begrenzter Gültigkeit", correct: false, explain: "Das kann man einstellen, aber Limit bezieht sich auf den Preis." },
                    { text: "Du darfst nur begrenzt viele Aktien kaufen", correct: false, explain: "Nein, es geht um den Preis, nicht die Menge." },
                    { text: "Eine Order nur für Profis", correct: false, explain: "Jeder sollte Limit-Orders nutzen! Schützt vor bösen Überraschungen." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 2
            },
            {
                q: "Market-Order vs. Limit-Order - wann welche?",
                a: [
                    { text: "Market für liquide Aktien, Limit für alles andere", correct: true, explain: "Perfekt! Bei DAX-Aktien geht Market meist, bei kleinen Aktien immer Limit!" },
                    { text: "Immer Market - ist schneller", correct: false, explain: "Schnell ja, aber du kannst böse Überraschungen beim Preis erleben!" },
                    { text: "Immer Limit - egal was", correct: false, explain: "Bei sehr liquiden Aktien okay, aber manchmal übertrieben." },
                    { text: "Ist egal, macht keinen Unterschied", correct: false, explain: "Großer Unterschied! Besonders bei illiquiden Aktien." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 3
            },
            {
                q: "Was kostet es ungefähr, wenn du für 100€ Aktien kaufst?",
                a: [
                    { text: "Bei Neo-Brokern oft 0-1€, bei Banken 5-10€", correct: true, explain: "Richtig! Trade Republic & Co. sind viel günstiger als klassische Banken." },
                    { text: "Immer genau 10% der Kaufsumme", correct: false, explain: "Nein, Gebühren sind meist fix oder minimal." },
                    { text: "Nichts, Aktienhandel ist kostenlos", correct: false, explain: "Fast kostenlos bei manchen, aber nie ganz umsonst." },
                    { text: "50€ Mindestgebühr überall", correct: false, explain: "Viel zu hoch! Solche Broker solltest du meiden." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 2
            },
            {
                q: "Was ist der 'Spread' und warum kostet er dich Geld?",
                a: [
                    { text: "Differenz zwischen Kauf- und Verkaufspreis", correct: true, explain: "Genau! Kaufen zum Ask (teurer), verkaufen zum Bid (billiger). Die Differenz ist wie eine versteckte Gebühr." },
                    { text: "Eine Extra-Gebühr vom Broker", correct: false, explain: "Nein, der Spread entsteht am Markt, nicht beim Broker." },
                    { text: "Englisch für 'Aufstrich'", correct: false, explain: "Haha, aber hier geht's um Finanzen, nicht ums Frühstück!" },
                    { text: "Gibt es nur bei Optionsscheinen", correct: false, explain: "Nein, jede Aktie hat einen Spread." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 2
            },
            {
                q: "Welche Handelszeiten hat die deutsche Börse ungefähr?",
                a: [
                    { text: "9:00 bis 17:30 Uhr an Wochentagen", correct: true, explain: "Richtig! Xetra handelt von 9-17:30. Andere Börsen haben andere Zeiten." },
                    { text: "24/7 wie Kryptowährungen", correct: false, explain: "Nein, Aktienbörsen haben feste Zeiten und sind am Wochenende zu." },
                    { text: "Nur vormittags bis 12 Uhr", correct: false, explain: "Nein, den ganzen Tag bis 17:30." },
                    { text: "Immer wenn du willst", correct: false, explain: "Du kannst Orders platzieren, aber ausgeführt werden sie nur während der Handelszeiten." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 2
            },
            {
                q: "Was solltest du bei deiner ersten Order unbedingt nochmal checken?",
                a: [
                    { text: "Stückzahl, Ordertyp und richtige Aktie (ISIN prüfen!)", correct: true, explain: "Super wichtig! Ein Zahlendreher und du kaufst aus Versehen 100 statt 10 Aktien!" },
                    { text: "Nur den aktuellen Preis", correct: false, explain: "Preis ist wichtig, aber check lieber alles!" },
                    { text: "Nichts, wird schon passen", correct: false, explain: "Gefährlich! Immer doppelt prüfen vor dem Klick." },
                    { text: "Ob genug Leute online sind", correct: false, explain: "Die Börse funktioniert immer, egal wer online ist." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 1
            },
            {
                q: "Stop-Loss-Order: Wofür ist die gut?",
                a: [
                    { text: "Automatisch verkaufen wenn der Kurs fällt", correct: true, explain: "Genau! Wie eine Notbremse. Aber Vorsicht: Bei Gaps kann der Verkauf auch drunter liegen!" },
                    { text: "Verhindert jeden Verlust", correct: false, explain: "Schön wär's! Begrenzt nur, verhindert nicht." },
                    { text: "Stoppt den Handel komplett", correct: false, explain: "Nein, verkauft nur deine Position." },
                    { text: "Nur für Daytrader", correct: false, explain: "Kann jeder nutzen, besonders bei riskanteren Positionen." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 2
            },
            {
                q: "Deine Aktie zahlt 3€ Dividende. Du hast 10 Aktien. Was passiert?",
                a: [
                    { text: "30€ landen auf deinem Konto (minus Steuern)", correct: true, explain: "Richtig! 10 × 3€ = 30€ brutto. Netto bleiben nach Steuern etwa 22€." },
                    { text: "Du bekommst nur 3€ insgesamt", correct: false, explain: "Nein, 3€ PRO Aktie, also 30€ bei 10 Stück!" },
                    { text: "Die Aktie steigt um 3€", correct: false, explain: "Nein, sie fällt sogar meist um die Dividende am Ex-Tag." },
                    { text: "Du musst 30€ zahlen", correct: false, explain: "Andersrum! Du bekommst Geld." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 2
            },
            {
                q: "Was ist ein ETF-Sparplan und warum ist er perfekt für Einsteiger?",
                a: [
                    { text: "Automatisch jeden Monat ETFs kaufen - simpel und günstig", correct: true, explain: "Genau! Set it and forget it. Ab 25€/Monat baust du automatisch Vermögen auf!" },
                    { text: "Ein komplizierter Tradingplan", correct: false, explain: "Im Gegenteil! Super einfach und automatisch." },
                    { text: "Nur für Reiche mit viel Geld", correct: false, explain: "Quatsch! Ab 25€ oder sogar 1€ möglich." },
                    { text: "Eine spezielle Versicherung", correct: false, explain: "Nein, es ist eine Investition in ETFs." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 1
            },
            {
                q: "Wo findest du seriöse Infos über Aktien? Und wo NICHT?",
                a: [
                    { text: "Seriös: Geschäftsberichte, Finanzportale. Unseriös: TikTok, Spam", correct: true, explain: "Genau! Offizielle Quellen sind Gold wert. Social Media ist oft Müll oder Betrug." },
                    { text: "Nur TikTok und Instagram", correct: false, explain: "Oh nein! Da lauern die meisten Betrüger und Dummschwätzer." },
                    { text: "Überall ist es gleich gut", correct: false, explain: "Großer Fehler! Die Quelle macht den Unterschied." },
                    { text: "Nirgends, alles ist Fake", correct: false, explain: "Zu pessimistisch! Es gibt viele gute Quellen." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 2
            },
            {
                q: "Was ist die ISIN und warum ist sie wichtig?",
                a: [
                    { text: "Die eindeutige Nummer jeder Aktie - wie ein Ausweis", correct: true, explain: "Richtig! Mit der ISIN kaufst du garantiert die richtige Aktie. Sehr wichtig bei ähnlichen Namen!" },
                    { text: "Die Telefonnummer des Brokers", correct: false, explain: "Nein, es ist die ID der Aktie." },
                    { text: "Ein Geheimcode für Profis", correct: false, explain: "Nicht geheim! Jeder kann und sollte sie nutzen." },
                    { text: "Unwichtig, der Name reicht", correct: false, explain: "Gefährlich! Es gibt oft Aktien mit ähnlichen Namen." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 2
            },
            {
                q: "Dein Depot zeigt -500€ rot an. Was bedeutet das?",
                a: [
                    { text: "Deine Aktien sind aktuell 500€ weniger wert", correct: true, explain: "Genau! Aber nur ein Buchverlust - real wird's erst beim Verkauf. Keep calm!" },
                    { text: "Du schuldest dem Broker 500€", correct: false, explain: "Nein! Bei normalen Aktien schuldest du nie Geld." },
                    { text: "Dein Depot wurde gehackt", correct: false, explain: "Nein, es zeigt nur die aktuelle Wertentwicklung." },
                    { text: "Ein Anzeigefehler der App", correct: false, explain: "Leider nein, der Verlust ist echt (aber noch nicht realisiert)." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 1
            },
            {
                q: "Welcher Börsenplatz ist meist der beste für deutsche Aktien?",
                a: [
                    { text: "Xetra - elektronisch mit großen Volumen", correct: true, explain: "Richtig! Xetra ist der Haupthandelsplatz für deutsche Aktien. Meist der beste Kurs!" },
                    { text: "New York Stock Exchange", correct: false, explain: "Die ist für US-Aktien, nicht für deutsche." },
                    { text: "Jede kleine Regionalbörse", correct: false, explain: "Oft teurer und weniger Volumen." },
                    { text: "Ist völlig egal", correct: false, explain: "Nicht egal! Der Börsenplatz beeinflusst Spread und Ausführung." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 3
            },
            {
                q: "Was passiert mit Teilaktien (0,5 Aktien) wenn du den Broker wechselst?",
                a: [
                    { text: "Sie werden meist verkauft und als Geld übertragen", correct: true, explain: "Genau! Nur ganze Aktien können übertragen werden. Bruchstücke werden zu Geld." },
                    { text: "Sie verschwinden einfach", correct: false, explain: "Nein! Dein Eigentum verschwindet nicht." },
                    { text: "Sie werden automatisch aufgerundet", correct: false, explain: "Schön wär's! Aber so funktioniert's nicht." },
                    { text: "Der alte Broker behält sie", correct: false, explain: "Das wäre Diebstahl! Du bekommst den Gegenwert." }
                ],
                topic: "Praxis 🛠️",
                difficulty: 3
            },

            // RISIKO & SICHERHEIT (10 Fragen)
            {
                q: "Was ist das maximale Risiko beim normalen Aktienkauf?",
                a: [
                    { text: "Du kannst maximal verlieren, was du investiert hast", correct: true, explain: "Korrekt! Bei Aktien ist dein Risiko auf deine Investition begrenzt. Bei 100€ Investment kannst du maximal 100€ verlieren." },
                    { text: "Du kannst mehr verlieren als investiert", correct: false, explain: "Nur bei Hebelprodukten! Bei normalen Aktien nie." },
                    { text: "Es gibt gar kein Risiko bei Aktien", correct: false, explain: "Falsch! Jede Aktie kann theoretisch auf 0 fallen." },
                    { text: "Du musst Geld nachschießen", correct: false, explain: "Nicht bei Aktien! Nur bei Optionen/Futures." }
                ],
                topic: "Risiko ⚠️",
                difficulty: 1
            },
            {
                q: "Was sind 'Pump and Dump' Schemes?",
                a: [
                    { text: "Betrüger treiben Kurs hoch und verkaufen am Peak", correct: true, explain: "Genau! Sie 'pumpen' den Kurs mit falschen Versprechen und 'dumpen' ihre Aktien auf dich. Finger weg!" },
                    { text: "Eine legale Handelsstrategie", correct: false, explain: "Illegal! Das ist Marktmanipulation." },
                    { text: "Ein Fitnessprogramm für Trader", correct: false, explain: "Haha nein! Aber es macht dich finanziell 'fit' wenn du es erkennst und meidest." },
                    { text: "Eine neue Art von ETF", correct: false, explain: "Nein, es ist Betrug, kein Produkt." }
                ],
                topic: "Risiko ⚠️",
                difficulty: 2
            },
            {
                q: "Jemand schreibt dir: 'Ich verdopple dein Geld in 2 Wochen!' Was tust du?",
                a: [
                    { text: "Blockieren und melden - das ist 100% Betrug", correct: true, explain: "Absolut richtig! Niemand kann Verdopplung garantieren. Das ist immer Scam!" },
                    { text: "Erstmal mit 50€ testen", correct: false, explain: "Nein! Auch 50€ sind zu viel für Betrüger." },
                    { text: "Nur machen wenn er Beweise zeigt", correct: false, explain: "Beweise kann man fälschen. Bleibt Betrug!" },
                    { text: "Freunde fragen ob sie mitmachen", correct: false, explain: "Bloß nicht! Schütze auch deine Freunde vor Betrug." }
                ],
                topic: "Risiko ⚠️",
                difficulty: 1
            },
            {
                q: "Warum sind Pennystocks (Aktien unter 1€) so gefährlich?",
                a: [
                    { text: "Oft Pleitekandidaten und leicht manipulierbar", correct: true, explain: "Alles richtig! Pennystocks sind der Wilde Westen der Börse. Meistens verlierst du alles." },
                    { text: "Sie sind gar nicht gefährlich", correct: false, explain: "Sehr gefährlich! Die meisten gehen auf 0." },
                    { text: "Weil sie zu billig sind", correct: false, explain: "Der Preis allein ist nicht das Problem, sondern die Qualität der Firmen." },
                    { text: "Nur weil sie kompliziert sind", correct: false, explain: "Sie sind nicht kompliziert, sondern einfach schlecht und riskant." }
                ],
                topic: "Risiko ⚠️",
                difficulty: 2
            },
            {
                q: "Was solltest du NIEMALS in Aktien-Foren oder Chats teilen?",
                a: [
                    { text: "Depotnummer, Passwörter oder wie viel Geld du hast", correct: true, explain: "Absolut! Diese Infos gehen niemanden was an. Schütze deine Privatsphäre!" },
                    { text: "Deine Meinung zu Aktien", correct: false, explain: "Meinungen sind okay, persönliche Daten nicht." },
                    { text: "Welche Aktien du magst", correct: false, explain: "Das ist okay, solange es allgemein bleibt." },
                    { text: "Dass du Anfänger bist", correct: false, explain: "Ist okay, aber mach dich nicht zur Zielscheibe für Betrüger." }
                ],
                topic: "Risiko ⚠️",
                difficulty: 1
            },
            {
                q: "Was passiert mit deinen Aktien, wenn dein Broker pleite geht?",
                a: [
                    { text: "Deine Aktien gehören dir und werden zu einem anderen Broker übertragen", correct: true, explain: "Genau! Aktien sind Sondervermögen und gehören dir, nicht dem Broker. Sie sind sicher!" },
                    { text: "Alles ist weg - Pech gehabt", correct: false, explain: "Zum Glück nicht! Aktien gehören dir und sind vom Broker-Vermögen getrennt." },
                    { text: "Der Staat zahlt dir alles zurück", correct: false, explain: "Nicht nötig, denn deine Aktien gehören sowieso dir. Der Staat hilft nur bei Bargeld (Einlagensicherung)." },
                    { text: "Du bekommst maximal 100€ zurück", correct: false, explain: "Verwechselst du mit der Einlagensicherung für Bargeld. Deine Aktien gehören komplett dir!" }
                ],
                topic: "Risiko ⚠️",
                difficulty: 2
            },
            {
                q: "Dein Kumpel will dir seine 'Geheimstrategie' für 500€ verkaufen. Was sagst du?",
                a: [
                    { text: "Nein danke! Echtes Wissen gibt's kostenlos oder günstig", correct: true, explain: "Richtig! Alle wichtigen Infos findest du gratis online oder in günstigen Büchern. 500€-Kurse sind Abzocke." },
                    { text: "Klar, Freundschaftspreis ist okay", correct: false, explain: "Auch Freunde können dich abzocken (oft unbewusst)." },
                    { text: "Nur wenn er mir Gewinne garantiert", correct: false, explain: "Garantien gibt's nicht! Das macht es noch unseriöser." },
                    { text: "Erstmal auf Raten zahlen", correct: false, explain: "Egal wie du zahlst - es bleibt Abzocke." }
                ],
                topic: "Risiko ⚠️",
                difficulty: 2
            },
            {
                q: "Was ist der sicherste Weg, um an der Börse anzufangen?",
                a: [
                    { text: "Mit kleinem Betrag in einen breiten ETF", correct: true, explain: "Perfekt! Klein anfangen, breit streuen, Erfahrung sammeln. So macht's jeder kluge Investor." },
                    { text: "All-in in Tesla oder Bitcoin", correct: false, explain: "Viel zu riskant für Anfänger!" },
                    { text: "Erstmal Optionsscheine handeln", correct: false, explain: "Bloß nicht! Das ist was für Profis." },
                    { text: "Mit geliehenem Geld starten", correct: false, explain: "Der gefährlichste Weg überhaupt!" }
                ],
                topic: "Risiko ⚠️",
                difficulty: 1
            },
            {
                q: "Warum solltest du skeptisch sein, wenn alle von einer Aktie schwärmen?",
                a: [
                    { text: "Wenn alle kaufen wollen, ist der Preis meist zu hoch", correct: true, explain: "Genau! Die Party ist vorbei, wenn alle davon wissen. Die Profis verkaufen dann schon." },
                    { text: "Ist doch gut wenn alle begeistert sind", correct: false, explain: "Nein! Masseneuphorie endet oft im Crash." },
                    { text: "Man sollte immer der Masse folgen", correct: false, explain: "Die Masse liegt oft falsch, besonders bei Extremen." },
                    { text: "Skeptisch sein bringt nichts", correct: false, explain: "Skeptisch sein kann dich vor großen Verlusten schützen!" }
                ],
                topic: "Risiko ⚠️",
                difficulty: 2
            },
            {
                q: "Was ist die 'Abgeltungssteuer' und wie hoch ist sie?",
                a: [
                    { text: "25% Steuer auf Gewinne aus Aktien, ETFs und Zinsen", correct: true, explain: "Richtig! Plus Soli und ggf. Kirchensteuer. Wird automatisch von deinem Broker abgeführt." },
                    { text: "10% Steuer, die nur beim Verkauf von ETFs anfällt", correct: false, explain: "Falsch! Es sind 25% und sie gilt für alle Kapitalerträge, nicht nur ETFs." },
                    { text: "Eine freiwillige Steuer, die man nicht zahlen muss", correct: false, explain: "Leider nicht freiwillig! Der Broker zieht sie automatisch ab." },
                    { text: "50% vom Gewinn, aber erst ab 10.000€ Ertrag", correct: false, explain: "Nein! Es sind 25% und sie gilt ab dem ersten Euro über dem Freibetrag." }
                ],
                topic: "Risiko ⚠️",
                difficulty: 2
            }
        ];

        // Quiz State
        let currentQuestionIndex = 0;
        let score = 0;
        let streak = 0;
        let topicScores = {};
        let answeredQuestions = [];

        // Initialize topic scores
        const topics = [...new Set(quizData.map(q => q.topic))];
        topics.forEach(topic => {
            topicScores[topic] = { correct: 0, total: 0 };
        });

        // Shuffle array
        function shuffleArray(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        }

        // Start quiz
        function startQuiz() {
            // Reset state
            currentQuestionIndex = 0;
            score = 0;
            streak = 0;
            answeredQuestions = [];
            
            // Reset topic scores
            topics.forEach(topic => {
                topicScores[topic] = { correct: 0, total: 0 };
            });

            // Shuffle questions
            answeredQuestions = shuffleArray(quizData);

            // Update UI
            document.getElementById('start-screen').style.display = 'none';
            document.getElementById('quiz-header').style.display = 'block';
            document.getElementById('question-area').style.display = 'block';
            document.getElementById('navigation').style.display = 'block';
            document.getElementById('results-screen').style.display = 'none';

            showQuestion();
        }

        // Show question
        function showQuestion() {
            const question = answeredQuestions[currentQuestionIndex];
            
            // Update progress
            document.getElementById('question-counter').textContent = 
                `Frage ${currentQuestionIndex + 1} von ${answeredQuestions.length}`;
            document.getElementById('progress-bar').style.width = 
                `${((currentQuestionIndex + 1) / answeredQuestions.length) * 100}%`;
            
            // Update streak
            document.getElementById('streak-count').textContent = streak;
            
            // Update level badge
            const percentage = currentQuestionIndex > 0 ? (score / currentQuestionIndex) * 100 : 0;
            const levelBadge = document.getElementById('level-badge');
            if (percentage >= 90) {
                levelBadge.textContent = 'Level: Finanz-Experte 🏆';
            } else if (percentage >= 70) {
                levelBadge.textContent = 'Level: Fortgeschrittener 🎯';
            } else if (percentage >= 50) {
                levelBadge.textContent = 'Level: Aufsteiger 📈';
            } else {
                levelBadge.textContent = 'Level: Börsen-Rookie 🌱';
            }
            
            // Show difficulty stars
            const stars = '⭐'.repeat(question.difficulty || 1);
            document.getElementById('difficulty-stars').innerHTML = stars;
            
            // Show question
            document.getElementById('question-text').textContent = question.q;
            
            // Clear and show answers
            const container = document.getElementById('options-container');
            container.innerHTML = '';
            
            const shuffledAnswers = shuffleArray(question.a);
            shuffledAnswers.forEach((answer, index) => {
                const button = document.createElement('button');
                button.className = 'option-btn';
                button.textContent = answer.text;
                button.onclick = () => selectAnswer(answer, question);
                container.appendChild(button);
            });
            
            // Hide feedback and next button
            document.getElementById('feedback-text').style.display = 'none';
            document.getElementById('next-btn').style.display = 'none';
        }

        // Select answer
        function selectAnswer(selectedAnswer, question) {
            // Disable all buttons
            const buttons = document.querySelectorAll('.option-btn');
            buttons.forEach(btn => btn.disabled = true);
            
            // Update topic score
            topicScores[question.topic].total++;
            
            // Find clicked button
            const clickedButton = Array.from(buttons).find(btn => 
                btn.textContent === selectedAnswer.text
            );
            
            if (selectedAnswer.correct) {
                // Correct answer
                score++;
                streak++;
                topicScores[question.topic].correct++;
                clickedButton.classList.add('correct');
                
                // Show feedback
                const feedback = document.getElementById('feedback-text');
                feedback.className = 'correct';
                feedback.innerHTML = `<span class="feedback-emoji">🎯</span>${selectedAnswer.explain}`;
                feedback.style.display = 'block';
                
                // Check achievements
                checkAchievements();
            } else {
                // Wrong answer
                streak = 0;
                clickedButton.classList.add('incorrect');
                
                // Find and highlight correct answer
                const correctAnswer = question.a.find(a => a.correct);
                buttons.forEach(btn => {
                    if (btn.textContent === correctAnswer.text) {
                        btn.classList.add('correct');
                    }
                });
                
                // Show feedback
                const feedback = document.getElementById('feedback-text');
                feedback.className = 'incorrect';
                feedback.innerHTML = `<span class="feedback-emoji">💡</span>${correctAnswer.explain}`;
                feedback.style.display = 'block';
            }
            
            // Update streak display
            document.getElementById('streak-count').textContent = streak;
            
            // Show next button
            document.getElementById('next-btn').style.display = 'inline-block';
        }

        // Check achievements
        function checkAchievements() {
            let achievement = null;
            
            if (streak === 5) achievement = { emoji: '🔥', text: '5er Streak!' };
            else if (streak === 10) achievement = { emoji: '💪', text: '10er Streak! Stark!' };
            else if (streak === 20) achievement = { emoji: '🚀', text: '20er Streak! Legendär!' };
            else if (score === 25) achievement = { emoji: '📈', text: '25 Richtige!' };
            else if (score === 50) achievement = { emoji: '💎', text: '50 Richtige! Halbzeit!' };
            else if (score === 75) achievement = { emoji: '🏆', text: '75 Richtige! Fast geschafft!' };
            
            if (achievement) {
                const popup = document.getElementById('achievement-popup');
                document.getElementById('achievement-emoji').textContent = achievement.emoji;
                document.getElementById('achievement-text').textContent = achievement.text;
                popup.style.display = 'flex';
                
                setTimeout(() => {
                    popup.style.display = 'none';
                }, 3000);
            }
        }

        // Next question
        function nextQuestion() {
            currentQuestionIndex++;
            
            if (currentQuestionIndex < answeredQuestions.length) {
                showQuestion();
            } else {
                showResults();
            }
        }

        // Show results
        function showResults() {
            // Hide quiz elements
            document.getElementById('quiz-header').style.display = 'none';
            document.getElementById('question-area').style.display = 'none';
            document.getElementById('navigation').style.display = 'none';
            document.getElementById('results-screen').style.display = 'block';
            
            // Calculate percentage
            const percentage = Math.round((score / answeredQuestions.length) * 100);
            
            // Animate score circle
            const circumference = 2 * Math.PI * 90;
            const offset = circumference - (percentage / 100) * circumference;
            const progressCircle = document.getElementById('score-circle-progress');
            progressCircle.style.strokeDasharray = circumference;
            progressCircle.style.strokeDashoffset = circumference;
            
            setTimeout(() => {
                progressCircle.style.strokeDashoffset = offset;
            }, 100);
            
            // Show percentage
            document.getElementById('score-percentage').textContent = percentage + '%';
            
            // Determine verdict
            let emoji, title, text;
            
            if (percentage >= 90) {
                emoji = '🏆';
                title = 'Finanz-Champion!';
                text = `Herausragend! Mit ${percentage}% sind Sie ein echter Experte! Sie verstehen die Märkte und sind bereit für anspruchsvolle Anlagestrategien.`;
            } else if (percentage >= 70) {
                emoji = '🎯';
                title = 'Fortgeschrittener Anleger!';
                text = `Sehr gut! ${percentage}% zeigen solide Kenntnisse. Mit etwas mehr Übung werden Sie zum Experten!`;
            } else if (percentage >= 50) {
                emoji = '📚';
                title = 'Auf dem richtigen Weg!';
                text = `Gut! Mit ${percentage}% haben Sie die Grundlagen verstanden. Weiter lernen und bald sind Sie bereit für mehr!`;
            } else {
                emoji = '🌱';
                title = 'Börsen-Einsteiger';
                text = `Mit ${percentage}% ist noch Luft nach oben, aber jeder fängt mal an! Nutzen Sie das Quiz zum Lernen und versuchen Sie es nochmal!`;
            }
            
            document.getElementById('results-emoji').textContent = emoji;
            document.getElementById('verdict-title').textContent = title;
            document.getElementById('verdict-text').textContent = text;
            
            // Show topic results
            const container = document.getElementById('topic-results-container');
            container.innerHTML = '';
            
            Object.entries(topicScores).forEach(([topic, scores]) => {
                if (scores.total === 0) return;
                
                const percentage = Math.round((scores.correct / scores.total) * 100);
                const card = document.createElement('div');
                card.className = 'topic-card';
                card.innerHTML = `
                    <div class="topic-header">
                        <span class="topic-name">${topic}</span>
                        <span class="topic-score">${scores.correct}/${scores.total}</span>
                    </div>
                    <div class="topic-progress-bar-container">
                        <div class="topic-progress-bar" style="width: ${percentage}%"></div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Share results
        function shareResults() {
            const percentage = Math.round((score / answeredQuestions.length) * 100);
            const text = `Ich habe ${percentage}% im Börsen-Quiz erreicht! 📈🚀 Teste dein Finanzwissen auch!`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'Mein Börsen-Quiz Ergebnis',
                    text: text,
                    url: window.location.href
                }).catch(() => {
                    // User cancelled, do nothing
                });
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(text).then(() => {
                    alert('Ergebnis wurde in die Zwischenablage kopiert! 📋');
                }).catch(() => {
                    alert('Teilen ist auf diesem Gerät nicht verfügbar.');
                });
            }
        }

