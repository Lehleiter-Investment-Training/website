        document.addEventListener('DOMContentLoaded', function() {
            // --- DOM Element Selection ---
            const disclaimerOverlay = document.getElementById('disclaimerOverlay');
            const acceptBtn = document.getElementById('acceptBtn');
            const declineBtn = document.getElementById('declineBtn');
            
            const passwordSection = document.getElementById('passwordSection');
            const passwordInput = document.getElementById('passwordInput');
            const checkPasswordBtn = document.getElementById('checkPasswordBtn');
            const passwordError = document.getElementById('passwordError');
            const mainContent = document.getElementById('mainContent');

            const riskLevels = document.querySelectorAll('.risk-level');
            const riskToleranceInput = document.getElementById('riskTolerance');
            
            const tradingPlanForm = document.getElementById('tradingPlanForm');
            const resetFormBtn = document.getElementById('resetFormBtn');
            
            const outputSection = document.getElementById('outputSection');
            const planContent = document.getElementById('planContent');
            const printPlanBtn = document.getElementById('printPlanBtn');
            const downloadPlanBtn = document.getElementById('downloadPlanBtn');
            const copyPlanBtn = document.getElementById('copyPlanBtn');
            
            // --- Disclaimer Logic ---
            if (sessionStorage.getItem('disclaimerAccepted') === 'true') {
                disclaimerOverlay.classList.add('hidden');
                setTimeout(() => passwordInput.focus(), 100);
            }

            acceptBtn.addEventListener('click', function() {
                sessionStorage.setItem('disclaimerAccepted', 'true');
                disclaimerOverlay.classList.add('hidden');
                setTimeout(() => passwordInput.focus(), 100);
            });

            declineBtn.addEventListener('click', function() {
                alert('Sie müssen den Haftungsausschluss akzeptieren, um dieses Tool nutzen zu können.');
                window.location.href = '/';
            });
            
            // --- Password Logic ---
            function checkPassword() {
                // SECURITY NOTE: This is not secure. The password is plain text in the source code.
                const correctPassword = 'Lehleiter'; 
                if (passwordInput.value === correctPassword) {
                    passwordSection.classList.add('hidden');
                    mainContent.classList.remove('hidden');
                    passwordError.classList.add('hidden');
                } else {
                    passwordError.classList.remove('hidden');
                    passwordInput.value = '';
                    passwordInput.focus();
                }
            }

            checkPasswordBtn.addEventListener('click', checkPassword);
            passwordInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    checkPassword();
                }
            });

            // --- Risk Level Selection Logic ---
            riskLevels.forEach(level => {
                level.addEventListener('click', () => {
                    riskLevels.forEach(l => l.classList.remove('selected'));
                    level.classList.add('selected');
                    riskToleranceInput.value = level.dataset.risk;
                });
            });

            // --- Form Submission Logic ---
            tradingPlanForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // --- Validation ---
                if (!riskToleranceInput.value) {
                    alert('Bitte wählen Sie eine Risikotoleranz aus.');
                    return;
                }
                
                const checkedStrategies = document.querySelectorAll('input[name="strategies"]:checked').length;
                if (checkedStrategies === 0) {
                    alert('Bitte wählen Sie mindestens eine Handelsstrategie aus.');
                    return;
                }
                
                generateTradingPlan();
            });

            // --- Trading Plan Generation ---
            function generateTradingPlan() {
                // Get form values
                const formValues = {
                    traderName: document.getElementById('traderName').value,
                    accountSize: document.getElementById('accountSize').value,
                    experience: document.getElementById('experience').value,
                    monthlyGoal: document.getElementById('monthlyGoal').value,
                    yearlyGoal: document.getElementById('yearlyGoal').value,
                    maxDrawdown: document.getElementById('maxDrawdown').value,
                    tradingObjective: document.getElementById('tradingObjective').value || 'Nicht spezifiziert',
                    riskPerTrade: document.getElementById('riskPerTrade').value,
                    maxPositions: document.getElementById('maxPositions').value,
                    stopLoss: document.getElementById('stopLoss').value,
                    riskTolerance: riskToleranceInput.value,
                    timeframe: document.getElementById('timeframe').value,
                    underlyings: document.getElementById('underlyings').value || 'Nicht spezifiziert',
                    indicators: document.getElementById('indicators').value || 'Nicht spezifiziert',
                    tradingHours: document.getElementById('tradingHours').value || 'Nicht spezifiziert',
                    entryRules: document.getElementById('entryRules').value || 'Nicht spezifiziert',
                    exitRules: document.getElementById('exitRules').value || 'Nicht spezifiziert',
                    adjustmentRules: document.getElementById('adjustmentRules').value || 'Nicht spezifiziert',
                    strategies: Array.from(document.querySelectorAll('input[name="strategies"]:checked')).map(cb => cb.value),
                    analysisMethods: Array.from(document.querySelectorAll('input[name="analysis"]:checked')).map(cb => cb.value)
                };
                
                // Generate the plan HTML
                const planHTML = `
                    <div class="plan-section">
                        <h3>👤 Händlerprofil</h3>
                        <p><strong>Name:</strong> ${formValues.traderName}</p>
                        <p><strong>Kontogröße:</strong> €${Number(formValues.accountSize).toLocaleString('de-DE')}</p>
                        <p><strong>Erfahrungslevel:</strong> ${getExperienceText(formValues.experience)}</p>
                        <p><strong>Risikotoleranz:</strong> ${getRiskText(formValues.riskTolerance)}</p>
                    </div>

                    <div class="plan-section">
                        <h3>🎯 Handelsziele</h3>
                        <p><strong>Monatliches Renditeziel:</strong> ${formValues.monthlyGoal}%</p>
                        <p><strong>Jährliches Renditeziel:</strong> ${formValues.yearlyGoal}%</p>
                        <p><strong>Maximaler Drawdown:</strong> ${formValues.maxDrawdown}%</p>
                        <p><strong>Primäres Ziel:</strong> ${formValues.tradingObjective}</p>
                    </div>

                    <div class="plan-section">
                        <h3>⚠️ Risikomanagement</h3>
                        <p><strong>Risiko pro Trade:</strong> ${formValues.riskPerTrade}% des Kontos (€${(formValues.accountSize * formValues.riskPerTrade / 100).toFixed(2)})</p>
                        <p><strong>Maximale gleichzeitige Positionen:</strong> ${formValues.maxPositions}</p>
                        <p><strong>Stop-Loss Strategie:</strong> ${getStopLossText(formValues.stopLoss)}</p>
                        <p><strong>Maximales Gesamtrisiko:</strong> ${(formValues.riskPerTrade * formValues.maxPositions).toFixed(1)}% des Kontos</p>
                    </div>

                    <div class="plan-section">
                        <h3>📈 Handelsstrategien</h3>
                        <p><strong>Bevorzugte Strategien:</strong> ${formValues.strategies.join(', ') || 'Keine ausgewählt'}</p>
                        <p><strong>Zeithorizont:</strong> ${getTimeframeText(formValues.timeframe)}</p>
                        <p><strong>Bevorzugte Basiswerte:</strong> ${formValues.underlyings}</p>
                    </div>

                    <div class="plan-section">
                        <h3>📊 Marktanalyse</h3>
                        <p><strong>Analysemethoden:</strong> ${formValues.analysisMethods.join(', ') || 'Keine ausgewählt'}</p>
                        <p><strong>Hauptindikatoren:</strong> ${formValues.indicators}</p>
                        <p><strong>Handelszeiten:</strong> ${formValues.tradingHours}</p>
                    </div>

                    <div class="plan-section">
                        <h3>📋 Handelsregeln</h3>
                        <p><strong>Einstiegsregeln:</strong></p><p>${formValues.entryRules.replace(/\n/g, '<br>')}</p>
                        <p><strong>Ausstiegsregeln:</strong></p><p>${formValues.exitRules.replace(/\n/g, '<br>')}</p>
                        <p><strong>Anpassungsregeln:</strong></p><p>${formValues.adjustmentRules.replace(/\n/g, '<br>')}</p>
                    </div>

                    <div class="plan-section">
                        <h3>📅 Handelsroutine</h3>
                        <p><strong>Tägliche Aufgaben:</strong></p>
                        <ul>
                            <li>Marktanalyse vor Handelsbeginn durchführen</li>
                            <li>Offene Positionen überprüfen und anpassen</li>
                            <li>Neue Handelsmöglichkeiten identifizieren</li>
                            <li>Trades im Handelsjournal dokumentieren</li>
                        </ul>
                        <p><strong>Wöchentliche Aufgaben:</strong></p>
                        <ul>
                            <li>Performance-Review durchführen</li>
                            <li>Handelsplan auf Anpassungsbedarf prüfen</li>
                            <li>Risikomanagement evaluieren</li>
                        </ul>
                    </div>

                    <div class="plan-section">
                        <h3>🚨 Notfallplan</h3>
                        <p>Bei Erreichen des maximalen Drawdowns von ${formValues.maxDrawdown}%:</p>
                        <ul>
                            <li>Sofortiger Handelsstopp</li>
                            <li>Analyse aller verlustbringenden Trades</li>
                            <li>Überprüfung und Anpassung der Strategie</li>
                            <li>Reduzierung der Positionsgröße beim Wiedereinstieg</li>
                        </ul>
                    </div>

                    <div class="plan-section">
                        <p><strong>Erstellt am:</strong> ${new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        <p><strong>Nächste Überprüfung:</strong> ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>

                    <div class="plan-section" data-print-warning="true" style="background: #fff3cd; border: 2px solid #ffc107; padding: 20px; border-radius: 10px;">
                        <h3 style="color: #856404;">⚠️ Wichtiger Hinweis</h3>
                        <p style="color: #856404; margin: 0;">
                            <strong>Dieser Handelsplan stellt keine Anlageberatung dar.</strong>
                            Er dient ausschließlich zu Bildungs- und Organisationszwecken.
                            Alle Handelsentscheidungen treffen Sie auf eigenes Risiko.
                            Der Handel mit Optionen kann zum Totalverlust des eingesetzten Kapitals führen.
                        </p>
                    </div>
                `;

                planContent.innerHTML = planHTML;
                outputSection.classList.remove('hidden');
                outputSection.scrollIntoView({ behavior: 'smooth' });
            }

            // --- Helper Functions & Action Buttons ---
            function getExperienceText(exp) {
                const map = {'beginner': 'Anfänger (< 1 Jahr)', 'intermediate': 'Fortgeschritten (1-3 Jahre)', 'advanced': 'Erfahren (3-5 Jahre)', 'expert': 'Experte (> 5 Jahre)'};
                return map[exp] || exp;
            }

            function getRiskText(risk) {
                const map = {'low': 'Niedrig', 'medium': 'Mittel', 'high': 'Hoch'};
                return map[risk] || 'Nicht spezifiziert';
            }

            function getStopLossText(sl) {
                const map = {'percentage': 'Prozentual', 'technical': 'Technische Level', 'time': 'Zeitbasiert', 'mixed': 'Kombiniert'};
                return map[sl] || sl;
            }

            function getTimeframeText(tf) {
                const map = {'weekly': 'Wöchentlich (0-7 DTE)', 'biweekly': 'Zweiwöchentlich (7-14 DTE)', 'monthly': 'Monatlich (30-45 DTE)', 'quarterly': 'Quartalsweise (60-90 DTE)', 'leaps': 'LEAPS (> 365 DTE)'};
                return map[tf] || tf;
            }

            resetFormBtn.addEventListener('click', () => {
                if (confirm('Möchten Sie wirklich alle Eingaben löschen?')) {
                    tradingPlanForm.reset();
                    riskLevels.forEach(l => l.classList.remove('selected'));
                    riskToleranceInput.value = '';
                    outputSection.classList.add('hidden');
                }
            });

            printPlanBtn.addEventListener('click', () => window.print());

            downloadPlanBtn.addEventListener('click', () => {
                alert('Um den Plan als PDF zu speichern, nutzen Sie bitte die Druckfunktion Ihres Browsers (Strg+P oder Cmd+P) und wählen Sie "Als PDF speichern" als Ziel aus.');
                window.print();
            });

            copyPlanBtn.addEventListener('click', () => {
                const planText = planContent.innerText;
                navigator.clipboard.writeText(planText).then(() => {
                    alert('Der Handelsplan wurde in die Zwischenablage kopiert!');
                }).catch(() => {
                    alert('Fehler beim Kopieren. Bitte markieren Sie den Text manuell und kopieren Sie ihn.');
                });
            });
        });
