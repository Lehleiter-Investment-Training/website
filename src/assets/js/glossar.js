        const glossaryData = [
            // A
            { term: "American Style Option", english: "Amerikanische Option", definition: "Eine Option, die jederzeit bis zum Verfallstag ausgeübt werden kann. Im Gegensatz zur europäischen Option bietet sie mehr Flexibilität.", example: "Die meisten Aktienoptionen in den USA sind amerikanischen Stils.", tags: ["Optionstyp", "Grundlagen"] },
            { term: "Assignment", english: "Zuteilung", definition: "Die Verpflichtung des Stillhalters (Verkäufers einer Option), den Basiswert zu liefern (bei Call) oder abzunehmen (bei Put), wenn die Option vom Käufer ausgeübt wird.", example: "Wenn ein Short Call assigned wird, muss der Verkäufer 100 Aktien zum Strike-Preis liefern.", tags: ["Ausübung", "Stillhalter"] },
            { term: "At-the-Money (ATM)", english: "Am Geld", definition: "Eine Option, deren Strike-Preis gleich oder sehr nahe am aktuellen Kurs des Basiswerts liegt. ATM-Optionen haben den höchsten Zeitwert.", example: "Bei einer Aktie bei 100€ ist ein 100€-Strike ATM.", tags: ["Moneyness", "Grundlagen"] },
            { term: "Ask", english: "Briefkurs", definition: "Der Preis, zu dem ein Verkäufer bereit ist, eine Option zu verkaufen. Der Käufer zahlt den Ask-Preis beim Kauf.", example: "Ask: 2,50€ bedeutet, Sie zahlen 2,50€ pro Aktie (250€ pro Kontrakt) beim Kauf.", tags: ["Handel", "Preise"] },

            // B
            { term: "Bear Put Spread", english: "Bären-Put-Spread", definition: "Eine bärische Optionsstrategie, bei der ein Put gekauft und gleichzeitig ein Put mit niedrigerem Strike verkauft wird. Definiertes Risiko und Gewinn.", example: "Kauf 50er Put + Verkauf 45er Put = Bear Put Spread mit max. 5€ Gewinn.", tags: ["Strategie", "Bärisch"] },
            { term: "Bid", english: "Geldkurs", definition: "Der Preis, zu dem ein Käufer bereit ist, eine Option zu kaufen. Der Verkäufer erhält den Bid-Preis beim Verkauf.", example: "Bid: 2,30€ bedeutet, Sie erhalten 2,30€ pro Aktie beim Verkauf.", tags: ["Handel", "Preise"] },
            { term: "Black-Scholes-Modell", english: "Black-Scholes Model", definition: "Das bekannteste mathematische Modell zur Berechnung des theoretischen Preises europäischer Optionen. Berücksichtigt Aktienkurs, Strike, Zeit, Volatilität und Zinsen.", example: "Das Modell wurde 1973 von Fischer Black und Myron Scholes entwickelt.", tags: ["Theorie", "Bewertung"] },
            { term: "Bull Call Spread", english: "Bullen-Call-Spread", definition: "Eine bullische Optionsstrategie, bei der ein Call gekauft und gleichzeitig ein Call mit höherem Strike verkauft wird. Definiertes Risiko und Gewinn.", example: "Kauf 50er Call + Verkauf 55er Call = Bull Call Spread.", tags: ["Strategie", "Bullisch"] },
            { term: "Butterfly Spread", english: "Schmetterlings-Spread", definition: "Eine neutrale Strategie mit drei Strike-Preisen: Kauf von 1 Option am unteren Strike, Verkauf von 2 am mittleren, Kauf von 1 am oberen Strike.", example: "Long Call Butterfly: Kauf 95, Verkauf 2x 100, Kauf 105.", tags: ["Strategie", "Neutral"] },

            // C
            { term: "Call-Option", english: "Call Option", definition: "Das Recht (nicht die Pflicht), einen Basiswert zu einem festgelegten Preis (Strike) bis zu einem bestimmten Datum zu kaufen.", example: "Ein 50€ Call auf Aktie XY gibt das Recht, XY für 50€ zu kaufen.", tags: ["Optionstyp", "Grundlagen"] },
            { term: "Cash-Secured Put", english: "Bar gesicherter Put", definition: "Der Verkauf eines Puts, wobei genügend Bargeld im Konto liegt, um die Aktien bei Zuteilung kaufen zu können. Einkommenstrategie.", example: "Verkauf eines 45€ Puts erfordert 4.500€ Cash als Sicherheit.", tags: ["Strategie", "Einnahmen"] },
            { term: "Collar", english: "Collar", definition: "Eine Absicherungsstrategie: Besitz der Aktie + Kauf eines Puts + Verkauf eines Calls. Begrenzt sowohl Gewinn als auch Verlust.", example: "Aktie bei 50€, Kauf 45 Put, Verkauf 55 Call = Collar.", tags: ["Strategie", "Absicherung"] },
            { term: "Covered Call", english: "Gedeckter Call", definition: "Der Verkauf eines Calls auf eine bereits im Depot befindliche Aktie. Beliebte Einnahmenstrategie mit begrenztem Aufwärtsrisiko.", example: "Besitz 100 Aktien XY + Verkauf 1 Call = Covered Call.", tags: ["Strategie", "Einnahmen"] },

            // D
            { term: "Delta", english: "Delta", definition: "Die Sensitivität des Optionspreises gegenüber einer Bewegung des Basiswerts um 1€. Werte zwischen -1 und +1. Zeigt auch ungefähre Wahrscheinlichkeit, ITM zu verfallen.", example: "Delta 0,50 bedeutet: Option gewinnt ca. 0,50€ wenn Aktie 1€ steigt.", tags: ["Griechen", "Risiko"] },
            { term: "Dividendenrisiko", english: "Dividend Risk", definition: "Das Risiko vorzeitiger Zuteilung bei Short Calls kurz vor dem Ex-Dividenden-Tag, da ITM-Calls dann besonders attraktiv für die Ausübung sind.", example: "Deep ITM Calls werden oft vor der Dividende ausgeübt.", tags: ["Risiko", "Stillhalter"] },

            // E
            { term: "European Style Option", english: "Europäische Option", definition: "Eine Option, die nur am Verfallstag ausgeübt werden kann, nicht vorher. Typisch für Indexoptionen.", example: "DAX-Optionen sind europäischen Stils.", tags: ["Optionstyp", "Grundlagen"] },
            { term: "Exercise", english: "Ausübung", definition: "Die Inanspruchnahme des Rechts, das die Option verbrieft: Kauf (Call) oder Verkauf (Put) des Basiswerts zum Strike-Preis.", example: "Bei Ausübung eines 50 Calls kaufen Sie 100 Aktien zu 50€.", tags: ["Ausübung", "Grundlagen"] },
            { term: "Expiration Date", english: "Verfallstag", definition: "Der letzte Tag, an dem eine Option ausgeübt werden kann. Nach diesem Tag verfällt die Option wertlos, wenn sie OTM ist.", example: "Monatliche Optionen verfallen meist am dritten Freitag des Monats.", tags: ["Zeit", "Grundlagen"] },
            { term: "Extrinsic Value", english: "Äußerer Wert / Zeitwert", definition: "Der Teil des Optionspreises, der über den inneren Wert hinausgeht. Besteht aus Zeitwert und Volatilitätsprämie.", example: "Option 3€, innerer Wert 1€ → extrinsischer Wert 2€.", tags: ["Bewertung", "Grundlagen"] },

            // G
            { term: "Gamma", english: "Gamma", definition: "Die Änderungsrate des Deltas bei einer Bewegung des Basiswerts um 1€. Höchstes Gamma bei ATM-Optionen kurz vor Verfall.", example: "Gamma 0,05 bedeutet: Delta steigt um 0,05 wenn Aktie 1€ steigt.", tags: ["Griechen", "Risiko"] },
            { term: "Greeks", english: "Griechen", definition: "Sensitivitätskennzahlen für Optionen: Delta, Gamma, Theta, Vega und Rho. Sie zeigen, wie verschiedene Faktoren den Optionspreis beeinflussen.", example: "Die Griechen helfen bei der Risikoanalyse von Optionspositionen.", tags: ["Griechen", "Risiko"] },

            // H
            { term: "Hedge", english: "Absicherung", definition: "Eine Position, die eingegangen wird, um das Risiko einer anderen Position zu reduzieren. Optionen sind beliebte Hedging-Instrumente.", example: "Kauf von Puts zur Absicherung eines Aktienportfolios.", tags: ["Risiko", "Strategie"] },
            { term: "Historische Volatilität", english: "Historical Volatility (HV)", definition: "Die tatsächliche, gemessene Schwankungsbreite eines Basiswerts über einen vergangenen Zeitraum, meist annualisiert.", example: "HV von 20% bedeutet: Die Aktie schwankte historisch ca. 20% pro Jahr.", tags: ["Volatilität", "Analyse"] },

            // I
            { term: "Implizite Volatilität", english: "Implied Volatility (IV)", definition: "Die vom Markt erwartete zukünftige Volatilität, die aus den aktuellen Optionspreisen abgeleitet wird. Steigt bei Unsicherheit.", example: "Hohe IV vor Earnings bedeutet: Markt erwartet große Bewegung.", tags: ["Volatilität", "Analyse"] },
            { term: "In-the-Money (ITM)", english: "Im Geld", definition: "Eine Option mit innerem Wert: Call mit Strike unter dem Aktienkurs, Put mit Strike über dem Aktienkurs.", example: "Aktie bei 55€, 50er Call ist 5€ ITM.", tags: ["Moneyness", "Grundlagen"] },
            { term: "Innerer Wert", english: "Intrinsic Value", definition: "Der Betrag, um den eine Option im Geld ist. Bei Calls: Aktienkurs minus Strike. Bei Puts: Strike minus Aktienkurs.", example: "Aktie 55€, Strike 50€ → innerer Wert Call = 5€.", tags: ["Bewertung", "Grundlagen"] },
            { term: "Iron Condor", english: "Iron Condor", definition: "Eine neutrale Strategie: Verkauf eines OTM Put Spreads + Verkauf eines OTM Call Spreads. Profitiert von Seitwärtsbewegung.", example: "Verkauf 90/85 Put Spread + 110/115 Call Spread = Iron Condor.", tags: ["Strategie", "Neutral"] },
            { term: "IV Rank", english: "IV Rank", definition: "Zeigt, wo die aktuelle IV im Vergleich zur IV-Spanne der letzten 52 Wochen liegt. Werte von 0-100.", example: "IV Rank 80 = IV ist höher als 80% der Werte im letzten Jahr.", tags: ["Volatilität", "Analyse"] },
            { term: "IV Perzentil", english: "IV Percentile", definition: "Zeigt, an wie vielen Tagen der letzten 52 Wochen die IV niedriger war als heute. Oft aussagekräftiger als IV Rank.", example: "IV Perzentil 90 = An 90% der Tage war die IV niedriger.", tags: ["Volatilität", "Analyse"] },

            // L
            { term: "LEAPS", english: "Long-Term Equity Anticipation Securities", definition: "Langfristige Optionen mit Laufzeiten von mehr als einem Jahr. Ermöglichen längerfristige Strategien mit Hebelwirkung.", example: "Ein LEAPS Call mit 2 Jahren Laufzeit als Aktienersatz.", tags: ["Optionstyp", "Zeit"] },
            { term: "Leg", english: "Leg / Bein", definition: "Ein einzelner Teil einer Multi-Optionen-Strategie. Ein Spread hat zwei Legs, ein Iron Condor hat vier Legs.", example: "Der Bull Call Spread besteht aus einem Long Call Leg und einem Short Call Leg.", tags: ["Strategie", "Struktur"] },
            { term: "Leverage", english: "Hebelwirkung", definition: "Die Möglichkeit, mit geringerem Kapitaleinsatz an größeren Kursbewegungen zu partizipieren. Optionen bieten natürlichen Hebel.", example: "Option für 3€ kontrolliert Aktie im Wert von 50€ = Hebel ~17x.", tags: ["Grundlagen", "Risiko"] },
            { term: "Limit Order", english: "Limitierte Order", definition: "Eine Order, die nur zum angegebenen Preis oder besser ausgeführt wird. Wichtig bei Optionen wegen hoher Spreads.", example: "Limit 2,00€ bedeutet: Nur kaufen wenn Preis 2,00€ oder weniger.", tags: ["Handel", "Ordertypen"] },
            { term: "Long", english: "Long / Käufer", definition: "Die Position des Käufers einer Option. Er hat Rechte und zahlt die Prämie.", example: "Long Call = Sie haben das Recht zu kaufen.", tags: ["Position", "Grundlagen"] },

            // M
            { term: "Margin", english: "Margin / Sicherheitsleistung", definition: "Die Sicherheit, die der Broker bei bestimmten Optionspositionen verlangt, insbesondere bei ungedeckten (nackten) Positionen.", example: "Ein nackter Put erfordert Margin entsprechend dem Zuteilungsrisiko.", tags: ["Handel", "Risiko"] },
            { term: "Market Maker", english: "Market Maker", definition: "Professionelle Händler, die ständig Kauf- und Verkaufskurse stellen und so für Liquidität im Optionsmarkt sorgen.", example: "Market Maker verdienen am Bid-Ask-Spread.", tags: ["Handel", "Markt"] },
            { term: "Moneyness", english: "Geldnähe", definition: "Beschreibt das Verhältnis zwischen Strike-Preis und aktuellem Kurs des Basiswerts: ITM, ATM oder OTM.", example: "Die Moneyness beeinflusst Delta und Prämie einer Option.", tags: ["Grundlagen", "Bewertung"] },

            // N
            { term: "Naked Option", english: "Nackte Option", definition: "Eine verkaufte Option ohne entsprechende Absicherung. Höchstes Risiko, da Verluste theoretisch unbegrenzt sein können.", example: "Naked Call = Short Call ohne Aktienbesitz = unbegrenztes Risiko.", tags: ["Position", "Risiko"] },

            // O
            { term: "Open Interest", english: "Offenes Interesse", definition: "Die Anzahl der ausstehenden Optionskontrakte einer bestimmten Serie. Indikator für Liquidität und Marktinteresse.", example: "Hohes Open Interest = aktiv gehandelter Kontrakt, engere Spreads.", tags: ["Handel", "Liquidität"] },
            { term: "Out-of-the-Money (OTM)", english: "Aus dem Geld", definition: "Eine Option ohne inneren Wert: Call mit Strike über dem Aktienkurs, Put mit Strike unter dem Aktienkurs.", example: "Aktie bei 48€, 50er Call ist 2€ OTM.", tags: ["Moneyness", "Grundlagen"] },

            // P
            { term: "Pin Risk", english: "Pin-Risiko", definition: "Das Risiko am Verfallstag, wenn der Aktienkurs exakt am Strike schließt. Unsicherheit über Zuteilung.", example: "Aktie schließt bei genau 50€, 50er Short Call: Wird er zugeteilt?", tags: ["Risiko", "Verfall"] },
            { term: "Premium", english: "Prämie", definition: "Der Preis einer Option, den der Käufer zahlt und der Verkäufer erhält. Besteht aus innerem Wert und Zeitwert.", example: "Prämie 2,50€ pro Aktie = 250€ pro Kontrakt.", tags: ["Bewertung", "Grundlagen"] },
            { term: "Probability of Profit (POP)", english: "Gewinnwahrscheinlichkeit", definition: "Die statistische Wahrscheinlichkeit, dass ein Trade profitabel endet. Bei Prämieneinnahmen oft höher als bei Käufen.", example: "30-Delta Short Put hat ca. 70% POP.", tags: ["Risiko", "Statistik"] },
            { term: "Put-Option", english: "Put Option", definition: "Das Recht (nicht die Pflicht), einen Basiswert zu einem festgelegten Preis (Strike) bis zu einem bestimmten Datum zu verkaufen.", example: "Ein 50€ Put gibt das Recht, die Aktie für 50€ zu verkaufen.", tags: ["Optionstyp", "Grundlagen"] },
            { term: "Put-Call-Parität", english: "Put-Call Parity", definition: "Eine mathematische Beziehung zwischen Put- und Call-Preisen mit gleichem Strike und Verfall. Basis für Arbitrage.", example: "Call + Cash = Put + Aktie (vereinfacht).", tags: ["Theorie", "Bewertung"] },

            // R
            { term: "Rho", english: "Rho", definition: "Die Sensitivität des Optionspreises gegenüber Änderungen des risikofreien Zinssatzes. Meist vernachlässigbar.", example: "Rho 0,10 bedeutet: Option gewinnt 0,10€ bei 1% Zinserhöhung.", tags: ["Griechen", "Risiko"] },
            { term: "Risk/Reward", english: "Risiko/Ertrag", definition: "Das Verhältnis zwischen maximalem Risiko und maximalem Gewinn einer Position. Wichtig für Positionsbewertung.", example: "Bull Call Spread: Risiko 200€, max. Gewinn 300€ = 1:1,5.", tags: ["Risiko", "Analyse"] },
            { term: "Roll", english: "Rollen", definition: "Das Schließen einer bestehenden Optionsposition und gleichzeitige Eröffnen einer neuen mit anderem Strike oder Verfall.", example: "Roll eines 50 Calls auf nächsten Monat mit höherem Strike.", tags: ["Handel", "Verwaltung"] },

            // S
            { term: "Short", english: "Short / Verkäufer", definition: "Die Position des Verkäufers einer Option. Er hat Pflichten und erhält die Prämie.", example: "Short Put = Sie haben die Pflicht, die Aktie zu kaufen.", tags: ["Position", "Grundlagen"] },
            { term: "Spread", english: "Spread", definition: "Eine Kombination aus Kauf und Verkauf von Optionen. Auch: Die Differenz zwischen Bid und Ask.", example: "Bull Call Spread = Kauf Call + Verkauf Call mit höherem Strike.", tags: ["Strategie", "Handel"] },
            { term: "Standard-Abweichung", english: "Standard Deviation", definition: "Statistisches Maß für die Schwankungsbreite. Eine Standardabweichung enthält ca. 68% der erwarteten Kursbewegungen.", example: "Bei IV 20% liegt die 1-SD-Bewegung bei ca. 20% im Jahr.", tags: ["Statistik", "Volatilität"] },
            { term: "Stillhalter", english: "Option Writer", definition: "Der Verkäufer einer Option, der die Prämie erhält und die Verpflichtung übernimmt. Auch: Optionsschreiber.", example: "Der Stillhalter eines Puts muss bei Zuteilung die Aktie kaufen.", tags: ["Position", "Grundlagen"] },
            { term: "Straddle", english: "Straddle", definition: "Kauf oder Verkauf eines Calls und eines Puts mit gleichem Strike und Verfall. Wettet auf Bewegung (long) oder Stillstand (short).", example: "Long Straddle: Kauf 50 Call + Kauf 50 Put.", tags: ["Strategie", "Volatilität"] },
            { term: "Strangle", english: "Strangle", definition: "Ähnlich wie Straddle, aber Call und Put haben unterschiedliche Strikes. Günstiger, braucht aber größere Bewegung.", example: "Short Strangle: Verkauf 45 Put + Verkauf 55 Call.", tags: ["Strategie", "Volatilität"] },
            { term: "Strike-Preis", english: "Strike Price / Exercise Price", definition: "Der Preis, zu dem der Basiswert bei Ausübung gekauft (Call) oder verkauft (Put) wird. Zentrales Element jeder Option.", example: "50€-Strike bedeutet: Kauf/Verkauf erfolgt zu 50€ pro Aktie.", tags: ["Grundlagen", "Bewertung"] },

            // T
            { term: "Theta", english: "Theta / Zeitwertverlust", definition: "Die tägliche Verringerung des Optionspreises durch Zeitablauf. Negativ für Long-Positionen, positiv für Short-Positionen.", example: "Theta -0,05 bedeutet: Option verliert 5 Cent pro Tag.", tags: ["Griechen", "Zeit"] },
            { term: "Time Decay", english: "Zeitwertverfall", definition: "Der kontinuierliche Wertverlust einer Option, der sich zum Verfall hin beschleunigt. Besonders stark bei ATM-Optionen.", example: "In den letzten 30 Tagen vor Verfall beschleunigt sich der Verfall.", tags: ["Zeit", "Bewertung"] },

            // U
            { term: "Underlying", english: "Basiswert", definition: "Das Finanzinstrument, auf das sich die Option bezieht: Aktie, Index, ETF, Rohstoff etc.", example: "Der Basiswert der Apple-Option ist die Apple-Aktie.", tags: ["Grundlagen", "Struktur"] },

            // V
            { term: "Vega", english: "Vega", definition: "Die Sensitivität des Optionspreises gegenüber einer 1%-Änderung der impliziten Volatilität. Höchstes Vega bei ATM.", example: "Vega 0,15 bedeutet: Option gewinnt 0,15€ bei 1% IV-Anstieg.", tags: ["Griechen", "Volatilität"] },
            { term: "Vertical Spread", english: "Vertikaler Spread", definition: "Ein Spread mit gleichem Verfall, aber unterschiedlichen Strikes. Bull Call Spread und Bear Put Spread sind vertikale Spreads.", example: "Kauf 50 Call + Verkauf 55 Call = vertikaler Bull Call Spread.", tags: ["Strategie", "Struktur"] },
            { term: "VIX", english: "Volatility Index", definition: "Der 'Angstindex' - misst die erwartete 30-Tage-Volatilität des S&P 500, abgeleitet aus Optionspreisen.", example: "VIX über 30 signalisiert hohe Marktangst.", tags: ["Volatilität", "Index"] },
            { term: "Volatility Crush", english: "Volatilitäts-Crush", definition: "Der rapide Rückgang der impliziten Volatilität nach einem erwarteten Ereignis wie Earnings. Optionen verlieren an Wert.", example: "Nach Earnings fällt IV oft um 50% oder mehr = Crush.", tags: ["Volatilität", "Ereignis"] },

            // W
            { term: "Wheel-Strategie", english: "Wheel Strategy", definition: "Kombination aus Cash-Secured Puts und Covered Calls. Verkaufe Puts bis Zuteilung, dann verkaufe Calls bis Ausbuchung.", example: "Verkauf Put → Zuteilung → Verkauf Covered Call → Ausbuchung → Repeat.", tags: ["Strategie", "Einnahmen"] },

            // Z
            { term: "Zeitwert", english: "Time Value", definition: "Der Teil des Optionspreises, der über den inneren Wert hinausgeht. Reflektiert die verbleibende Zeit und Volatilität.", example: "Option 3€, innerer Wert 1€ → Zeitwert 2€.", tags: ["Bewertung", "Zeit"] }
        ];

        // Generate alphabet navigation
        function generateAlphabetNav() {
            const nav = document.getElementById('alphabetNav');
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
            const usedLetters = new Set(glossaryData.map(item => item.term[0].toUpperCase()));

            letters.forEach(letter => {
                const a = document.createElement('a');
                a.href = '#' + letter;
                a.textContent = letter;
                if (!usedLetters.has(letter)) {
                    a.classList.add('disabled');
                }
                nav.appendChild(a);
            });
        }

        // Generate glossary content
        function generateGlossary(searchTerm = '') {
            const container = document.getElementById('glossaryContent');
            container.innerHTML = '';

            const filtered = glossaryData.filter(item =>
                item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            );

            // Update count
            document.getElementById('searchCount').textContent =
                searchTerm ? `${filtered.length} von ${glossaryData.length} Begriffen gefunden` : `${glossaryData.length} Begriffe verfügbar`;

            if (filtered.length === 0) {
                container.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <p>Keine Begriffe gefunden für "${searchTerm}"</p>
                    </div>
                `;
                return;
            }

            // Group by first letter
            const grouped = {};
            filtered.forEach(item => {
                const letter = item.term[0].toUpperCase();
                if (!grouped[letter]) grouped[letter] = [];
                grouped[letter].push(item);
            });

            // Generate HTML
            Object.keys(grouped).sort().forEach(letter => {
                const section = document.createElement('div');
                section.className = 'letter-section';
                section.id = letter;

                section.innerHTML = `
                    <div class="letter-header">
                        <span>${letter}</span>
                        <h2>${grouped[letter].length} Begriff${grouped[letter].length > 1 ? 'e' : ''}</h2>
                    </div>
                `;

                grouped[letter].forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'term-card' + (item.tags.includes('Grundlagen') ? ' highlight' : '');

                    let html = `
                        <h3 class="term-title">
                            ${item.term}
                            <span class="english">(${item.english})</span>
                        </h3>
                        <p class="term-definition">${item.definition}</p>
                    `;

                    if (item.example) {
                        html += `<div class="term-example"><strong>Beispiel:</strong> ${item.example}</div>`;
                    }

                    if (item.tags && item.tags.length) {
                        html += `<div class="term-tags">${item.tags.map(t => `<span class="term-tag">${t}</span>`).join('')}</div>`;
                    }

                    card.innerHTML = html;
                    section.appendChild(card);
                });

                container.appendChild(section);
            });
        }

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', function(e) {
            generateGlossary(e.target.value);
        });

        // Initialize
        generateAlphabetNav();
        generateGlossary();

        // Smooth scroll for alphabet nav
        document.querySelectorAll('.alphabet-nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
