    const quizData = [
      {
        question: "Was ist eine Call-Option?",
        answers: [
          { text: "Das Recht, eine Aktie zu verkaufen.", correct: false },
          { text: "Die Pflicht, eine Aktie zu kaufen.", correct: false },
          { text: "Das Recht, eine Aktie zu kaufen.", correct: true },
          { text: "Die Pflicht, eine Aktie zu verkaufen.", correct: false }
        ],
        explanation: "Eine Call-Option gibt Ihnen das Recht, eine Aktie zu einem bestimmten Preis zu kaufen. Sie haben das Recht, müssen es aber nicht ausüben. Im ersten Kapitel des Buches 'Optionen strategisch nutzen' werden die Grundlagen und Eigenschaften von Call-Optionen detailliert erklärt.",
        bookReference: "Kapitel 1: Grundlagen des Optionshandels"
      },
      {
        question: "Was bedeutet der Begriff 'Strike-Preis'?",
        answers: [
          { text: "Der aktuelle Marktpreis einer Aktie.", correct: false },
          { text: "Der Preis, zu dem die Option gekauft wurde.", correct: false },
          { text: "Der Preis, zu dem die Aktie gehandelt wird.", correct: false },
          { text: "Der Preis, zu dem die Aktie gekauft oder verkauft werden kann.", correct: true }
        ],
        explanation: "Der Strike-Preis (auch Ausübungspreis genannt) ist der vertraglich festgelegte Preis, zu dem bei Ausübung der Option die Aktie gekauft (bei Call-Optionen) oder verkauft (bei Put-Optionen) werden kann. Dieser Preis ist ein zentrales Element jeder Option und beeinflusst maßgeblich ihren Wert.",
        bookReference: "Kapitel 1: Grundlagen des Optionshandels"
      },
      {
        question: "Welchen Einfluss hat die Volatilität auf den Preis einer Option?",
        answers: [
          { text: "Höhere Volatilität senkt den Optionspreis.", correct: false },
          { text: "Höhere Volatilität erhöht den Optionspreis.", correct: true },
          { text: "Volatilität hat keinen Einfluss auf den Optionspreis.", correct: false },
          { text: "Höhere Volatilität erhöht den Optionspreis nur bei Put-Optionen.", correct: false }
        ],
        explanation: "Höhere Volatilität erhöht den Preis sowohl von Call- als auch von Put-Optionen. Der Grund: Bei stärkeren Kursschwankungen steigt die Wahrscheinlichkeit, dass die Option im Geld endet. Diesen Zusammenhang erklärt das Buch detailliert im Kapitel über Preisbildung von Optionen.",
        bookReference: "Kapitel 1: Grundlagen des Optionshandels - Volatilität verstehen"
      },
      {
        question: "Was ist der Zeitwert einer Option?",
        answers: [
          { text: "Der innere Wert einer Option.", correct: false },
          { text: "Der Wert der Option bei Fälligkeit.", correct: false },
          { text: "Der Wert der Option aufgrund von Zinsen.", correct: false },
          { text: "Der Wert der Option aufgrund der verbleibenden Zeit bis zur Fälligkeit.", correct: true }
        ],
        explanation: "Der Zeitwert einer Option ist der Teil des Optionspreises, der auf der verbleibenden Zeit bis zur Fälligkeit basiert. Er spiegelt die Chance wider, dass sich der Kurs des Basiswerts noch günstig entwickeln könnte. Wie Sie diesen Zeitwert strategisch für sich nutzen können, wird im Buch ausführlich behandelt.",
        bookReference: "Kapitel 1: Grundlagen des Optionshandels - Zeitwert nutzen"
      },
      {
        question: "Was ist ein 'Covered Call'?",
        answers: [
          { text: "Eine Strategie, bei der man eine Call-Option kauft.", correct: false },
          { text: "Eine Strategie, bei der man eine Put-Option kauft.", correct: false },
          { text: "Eine Strategie, bei der man eine Call-Option verkauft und die entsprechenden Aktien besitzt.", correct: true },
          { text: "Eine Strategie, bei der man eine Put-Option verkauft und die entsprechenden Aktien besitzt.", correct: false }
        ],
        explanation: "Ein Covered Call ist eine beliebte Einkommensstrategie, bei der Sie eine Call-Option verkaufen und gleichzeitig die zugrundeliegenden Aktien besitzen. Diese Strategie eignet sich besonders gut für seitwärts tendierende Märkte und wird im Buch als eine der Kernstrategien für Einsteiger vorgestellt.",
        bookReference: "Kapitel 2: Bewährte Strategien mit hoher Erfolgschance"
      },
      {
        question: "Was ist das Ziel einer 'Cash Secured Put'-Strategie?",
        answers: [
          { text: "Aktien zu einem höheren Preis zu verkaufen.", correct: false },
          { text: "Aktien zu einem günstigeren Preis zu kaufen.", correct: true },
          { text: "Von fallenden Kursen zu profitieren.", correct: false },
          { text: "Das Portfolio gegen Kursverluste abzusichern.", correct: false }
        ],
        explanation: "Bei der Cash Secured Put-Strategie verkaufen Sie eine Put-Option und hinterlegen den notwendigen Geldbetrag, um die Aktien bei Ausübung zu kaufen. Das Ziel ist, Aktien zu einem günstigeren Preis einzukaufen als dem aktuellen Marktpreis, da der erhaltene Optionspreis den Einstiegspreis reduziert. Diese Strategie wird im Buch als Einstiegsstrategie empfohlen.",
        bookReference: "Kapitel 2: Bewährte Strategien mit hoher Erfolgschance"
      },
      {
        question: "Was bedeutet 'implizite Volatilität'?",
        answers: [
          { text: "Die historische Schwankungsbreite eines Basiswertes.", correct: false },
          { text: "Die erwartete zukünftige Schwankungsbreite eines Basiswertes.", correct: true },
          { text: "Die durchschnittliche Schwankungsbreite eines Basiswertes.", correct: false },
          { text: "Die tatsächliche Schwankungsbreite eines Basiswertes.", correct: false }
        ],
        explanation: "Die implizite Volatilität ist die vom Markt erwartete zukünftige Schwankungsbreite eines Basiswertes. Sie wird aus den aktuellen Optionspreisen abgeleitet und ist ein wichtiger Indikator für die Markterwartung. Im Buch lernen Sie, wie Sie die implizite Volatilität für Ihre Handelsentscheidungen nutzen können.",
        bookReference: "Kapitel 1 und 3: Marktindikatoren intelligent nutzen"
      },
      {
        question: "Was ist ein 'Spread' im Optionshandel?",
        answers: [
          { text: "Der Unterschied zwischen dem höchsten und niedrigsten Kurs einer Aktie.", correct: false },
          { text: "Eine Optionsstrategie, bei der gleichzeitig Optionen gleicher Art, aber mit unterschiedlichen Basispreisen oder Laufzeiten gekauft und verkauft werden.", correct: true },
          { text: "Eine Kennzahl für die Liquidität einer Option.", correct: false },
          { text: "Eine Methode zur Risikoberechnung.", correct: false }
        ],
        explanation: "Ein Spread im Optionshandel ist eine Kombination aus dem Kauf und Verkauf von Optionen gleicher Art, aber mit unterschiedlichen Basispreisen oder Laufzeiten. Diese Strategie ermöglicht eine präzisere Positionierung und oft eine Begrenzung des Risikos. Im Buch werden verschiedene Spread-Strategien vorgestellt und ihre Anwendungsfälle erklärt.",
        bookReference: "Kapitel 2: Weiterführende Strategien"
      },
      {
        question: "Was ist 'Theta'?",
        answers: [
          { text: "Die Sensitivität des Optionspreises gegenüber Änderungen des Basiswertpreises.", correct: false },
          { text: "Die Sensitivität des Optionspreises gegenüber Änderungen der Volatilität.", correct: false },
          { text: "Der tägliche Wertverlust einer Option aufgrund des Zeitablaufs.", correct: true },
          { text: "Die Sensitivität des Optionspreises gegenüber Änderungen des Zinssatzes.", correct: false }
        ],
        explanation: "Theta beschreibt den täglichen Wertverlust einer Option aufgrund des Zeitablaufs. Dieser Zeitwertverfall beschleunigt sich, je näher die Option an ihrem Verfallsdatum ist. Erfahrene Optionshändler nutzen diesen Effekt gezielt für ihre Strategien, wie im Kapitel über Risikomanagement erklärt wird.",
        bookReference: "Kapitel 4: Risiken professionell managen - Delta, Gamma und Co."
      },
      {
        question: "Was ist ein 'Margin-Konto'?",
        answers: [
          { text: "Ein Konto, auf dem nur Aktien gehandelt werden können.", correct: false },
          { text: "Ein Konto, auf dem nur Optionen gehandelt werden können.", correct: false },
          { text: "Ein Konto, das den Handel mit geliehenem Geld ermöglicht.", correct: true },
          { text: "Ein Konto, auf dem nur langfristige Anlagen gehalten werden.", correct: false }
        ],
        explanation: "Ein Margin-Konto ermöglicht den Handel mit geliehenem Geld und ist für bestimmte Optionsstrategien notwendig. Es unterliegt besonderen Anforderungen und Risiken, die im Buch ausführlich behandelt werden. Ein gutes Verständnis des Marginhandels ist entscheidend für ein erfolgreiches Risikomanagement im Optionshandel.",
        bookReference: "Kapitel 4: Risiken professionell managen - Marginhandel verstehen"
      },
      {
        question: "Was ist 'Gamma'?",
        answers: [
          { text: "Die Veränderung des Optionspreises bei einer Änderung des Basiswertpreises.", correct: false },
          { text: "Die Veränderung der Volatilität einer Option.", correct: false },
          { text: "Die Veränderung des Theta einer Option.", correct: false },
          { text: "Die Veränderung des Deltas einer Option bei einer Änderung des Basiswertpreises.", correct: true }
        ],
        explanation: "Gamma beschreibt, wie stark sich das Delta einer Option verändert, wenn sich der Preis des Basiswerts ändert. Ein hohes Gamma bedeutet, dass das Delta sich schnell ändert, was zu schnellen Wertänderungen führen kann. Das Verständnis von Gamma ist besonders für fortgeschrittene Optionsstrategien wichtig, wie im Buch erläutert wird.",
        bookReference: "Kapitel 4: Risiken professionell managen - Delta, Gamma und Co."
      },
      {
        question: "Was bedeutet 'Long' im Optionshandel?",
        answers: [
          { text: "Verkaufen einer Option.", correct: false },
          { text: "Halten einer Aktie.", correct: false },
          { text: "Kaufen einer Option.", correct: true },
          { text: "Eine Position mit geringem Risiko.", correct: false }
        ],
        explanation: "Long bedeutet im Optionshandel, dass Sie eine Option kaufen - unabhängig davon, ob es sich um eine Call- oder Put-Option handelt. Als Long-Käufer haben Sie Rechte, aber keine Pflichten, und Ihr maximales Risiko ist auf den gezahlten Optionspreis begrenzt.",
        bookReference: "Kapitel 1: Grundlagen des Optionshandels"
      },
      {
        question: "Was ist der 'Innere Wert' einer Option?",
        answers: [
          { text: "Der aktuelle Marktpreis der Option.", correct: false },
          { text: "Der Wert der Option aufgrund von Zeitwertverfall.", correct: false },
          { text: "Der Betrag, um den die Option im Geld ist.", correct: true },
          { text: "Der Wert der Option bei Fälligkeit.", correct: false }
        ],
        explanation: "Der innere Wert einer Option ist der Betrag, um den die Option im Geld ist. Bei einer Call-Option ist das die Differenz zwischen dem aktuellen Kurs des Basiswerts und dem Ausübungspreis (falls positiv), bei einer Put-Option die Differenz zwischen dem Ausübungspreis und dem aktuellen Kurs des Basiswerts (falls positiv).",
        bookReference: "Kapitel 1: Grundlagen des Optionshandels"
      },
      {
        question: "Was ist ein 'Bear Call Spread'?",
        answers: [
          { text: "Eine Strategie, bei der man eine Call-Option kauft und eine Put-Option verkauft.", correct: false },
          { text: "Eine Strategie, bei der man eine Put-Option kauft und eine Call-Option verkauft.", correct: false },
          { text: "Eine Strategie, bei der man eine Call-Option mit niedrigerem Basispreis kauft und eine Call-Option mit höherem Basispreis verkauft.", correct: false },
          { text: "Eine Strategie, bei der man eine Call-Option mit niedrigerem Basispreis verkauft und eine Call-Option mit höherem Basispreis kauft.", correct: true }
        ],
        explanation: "Ein Bear Call Spread ist eine Optionsstrategie für fallende Märkte. Sie verkaufen eine Call-Option mit niedrigerem Basispreis und kaufen gleichzeitig eine Call-Option mit höherem Basispreis. Diese Strategie begrenzt sowohl Ihr Risiko als auch Ihren potenziellen Gewinn und ist eine der fortgeschrittenen Strategien, die im Buch behandelt werden.",
        bookReference: "Kapitel 2: Weiterführende Strategien"
      },
      {
        question: "Was bedeutet 'At-the-Money' (ATM)?",
        answers: [
          { text: "Die Option hat einen hohen inneren Wert.", correct: false },
          { text: "Der Basiswertkurs ist viel höher als der Strike-Preis.", correct: false },
          { text: "Der Basiswertkurs ist gleich oder nahe dem Strike-Preis.", correct: true },
          { text: "Die Option hat keinen inneren Wert.", correct: false }
        ],
        explanation: "At-the-Money bedeutet, dass der Kurs des Basiswerts gleich oder sehr nahe dem Ausübungspreis (Strike) der Option ist. ATM-Optionen haben einen geringen oder keinen inneren Wert, aber einen hohen Zeitwert. Sie werden oft für Strategien verwendet, die von einer hohen Volatilität profitieren.",
        bookReference: "Kapitel 1: Grundlagen des Optionshandels"
      },
      {
        question: "Was ist das 'Open Interest'?",
        answers: [
          { text: "Die Anzahl der gehandelten Optionen an einem Tag.", correct: false },
          { text: "Der maximale Gewinn einer Option.", correct: false },
          { text: "Die Anzahl der offenen Optionskontrakte, die noch nicht ausgeübt wurden.", correct: true },
          { text: "Der Zinssatz für Optionen.", correct: false }
        ],
        explanation: "Das Open Interest gibt die Anzahl der offenen Optionskontrakte an, die noch nicht geschlossen, ausgeübt oder verfallen sind. Ein hohes Open Interest deutet auf eine hohe Liquidität hin, was für die Auswahl geeigneter Optionen wichtig ist, wie im Kapitel über die systematische Steigerung der Erfolgschancen erläutert wird.",
        bookReference: "Kapitel 3: Systematisch Erfolgschancen steigern"
      },
      {
        question: "Was ist 'Vega'?",
        answers: [
          { text: "Die Sensitivität des Optionspreises gegenüber dem Basiswertpreis.", correct: false },
          { text: "Die Sensitivität des Optionspreises gegenüber dem Zinssatz.", correct: false },
          { text: "Die Sensitivität des Optionspreises gegenüber der Volatilität.", correct: true },
          { text: "Die Sensitivität des Optionspreises gegenüber der Zeit.", correct: false }
        ],
        explanation: "Vega beschreibt, wie stark sich der Preis einer Option verändert, wenn sich die implizite Volatilität um einen Prozentpunkt ändert. Optionen mit einem hohen Vega reagieren stärker auf Veränderungen der Marktvolatilität, was sowohl Chancen als auch Risiken birgt.",
        bookReference: "Kapitel 4: Risiken professionell managen - Delta, Gamma und Co."
      },
      {
        question: "Was ist 'Short' im Optionshandel?",
        answers: [
          { text: "Kaufen einer Option.", correct: false },
          { text: "Verkaufen einer Option.", correct: true },
          { text: "Halten einer Aktie.", correct: false },
          { text: "Eine Position mit geringem Risiko.", correct: false }
        ],
        explanation: "Short bedeutet im Optionshandel, dass Sie eine Option verkaufen - unabhängig davon, ob es sich um eine Call- oder Put-Option handelt. Als Short-Verkäufer haben Sie Pflichten, aber keine Rechte, und Ihr Risiko kann potenziell unbegrenzt sein. Das professionelle Management dieser Risiken wird im Buch ausführlich behandelt.",
        bookReference: "Kapitel 4: Risiken professionell managen"
      },
      {
        question: "Was bedeutet 'Out-of-the-Money' (OTM)?",
        answers: [
          { text: "Die Option hat einen hohen inneren Wert.", correct: false },
          { text: "Der Basiswertkurs ist gleich dem Strike-Preis.", correct: false },
          { text: "Der Basiswertkurs ist niedriger als der Strike-Preis bei einer Call-Option oder höher bei einer Put-Option.", correct: true },
          { text: "Die Option ist sehr liquide.", correct: false }
        ],
        explanation: "Out-of-the-Money bedeutet, dass die Option keinen inneren Wert hat. Bei einer Call-Option liegt der Kurs des Basiswerts unter dem Ausübungspreis, bei einer Put-Option liegt er darüber. OTM-Optionen sind günstiger, haben aber ein höheres Risiko, wertlos zu verfallen.",
        bookReference: "Kapitel 1: Grundlagen des Optionshandels"
      },
      {
        question: "Was ist ein 'Protective Put'?",
        answers: [
          { text: "Eine Strategie, bei der man eine Call-Option kauft, um sich vor steigenden Kursen abzusichern.", correct: false },
          { text: "Eine Strategie, bei der man eine Put-Option kauft, um sich vor fallenden Kursen abzusichern.", correct: true },
          { text: "Eine Strategie, bei der man eine Call-Option verkauft, um Einkommen zu erzielen.", correct: false },
          { text: "Eine Strategie, bei der man eine Put-Option verkauft, um Einkommen zu erzielen.", correct: false }
        ],
        explanation: "Ein Protective Put ist eine Absicherungsstrategie, bei der Sie eine Put-Option kaufen, um Ihr Aktienportfolio gegen Kursverluste abzusichern. Diese Strategie funktioniert wie eine Versicherung: Sie zahlen eine Prämie (den Optionspreis), um sich gegen starke Verluste zu schützen, wie im Kapitel zu Absicherungsstrategien erläutert wird.",
        bookReference: "Kapitel 2: Bewährte Strategien mit hoher Erfolgschance"
      }
    ];

    let currentQuestion = 0;
    let score = 0;
    let quizOver = false;
    let answeredQuestions = 0;

    const startBtn = document.getElementById('start-quiz-btn');
    const quizStart = document.getElementById('quiz-start');
    const quizQuestions = document.getElementById('quiz-questions');
    const quizResults = document.getElementById('quiz-results');
    const questionNumberElement = document.getElementById('question-number');
    const questionTextElement = document.getElementById('question-text');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const resultsMessageElement = document.getElementById('results-message');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const progressBar = document.getElementById('quiz-progress');
    const explanationContainer = document.getElementById('explanation-container');
    const explanationText = document.getElementById('explanation-text');
    const scoreDisplay = document.getElementById('score-display');
    const resultLevel = document.getElementById('result-level');
    const recommendations = document.getElementById('recommendations');
    const bookRecommendationText = document.getElementById('book-recommendation-text');

    function showQuestion() {
      const question = quizData[currentQuestion];
      
      // Update question counter
      questionNumberElement.innerHTML = `<span class="question-counter">${currentQuestion + 1}</span> von ${quizData.length} Fragen`;
      
      // Update progress bar
      progressBar.style.width = `${(currentQuestion / quizData.length) * 100}%`;
      
      // Set question text
      questionTextElement.textContent = question.question;
      
      // Clear previous answers
      answerButtonsElement.innerHTML = "";
      
      // Create answer buttons
      const letters = ['A', 'B', 'C', 'D'];
      question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-btn');
        button.innerHTML = `
          <span class="option-letter">${letters[index]}</span>
          ${answer.text}
          <i class="answer-icon fas ${answer.correct ? 'fa-check' : 'fa-times'}"></i>
        `;
        button.addEventListener('click', () => selectAnswer(answer.correct));
        answerButtonsElement.appendChild(button);
      });
      
      // Hide explanation and next button
      explanationContainer.classList.remove('show');
      nextQuestionBtn.style.display = 'none';
    }

    function selectAnswer(isCorrect) {
      // Prevent selecting multiple answers
      if (nextQuestionBtn.style.display === 'inline-block') return;
      
      const selectedButton = event.target.closest('.answer-btn');
      
      // Update score if correct
      if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
      } else {
        selectedButton.classList.add('wrong');
        
        // Highlight the correct answer
        document.querySelectorAll('.answer-btn').forEach(btn => {
          if (btn.querySelector('.fa-check')) {
            btn.classList.add('correct');
          }
        });
      }
      
      // Disable all answer buttons
      document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
      });
      
      // Show explanation
      explanationText.textContent = quizData[currentQuestion].explanation;
      explanationContainer.classList.add('show');
      
      // Show next button
      nextQuestionBtn.style.display = 'inline-block';
      
      // Update answered questions count
      answeredQuestions++;
    }

    function nextQuestion() {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        showQuestion();
      } else {
        showResults();
      }
    }

    function showResults() {
      quizQuestions.style.display = 'none';
      quizResults.style.display = 'block';
      
      // Update score display
      scoreDisplay.textContent = `${score} / ${quizData.length}`;
      
      // Determine level and set recommendations
      let level, levelClass, message, recommendationItems;
      
      if (score <= 5) {
        level = "Anfänger";
        levelClass = "level-beginner";
        message = "Ihr Grundwissen ist noch ausbaufähig. Keine Sorge, jeder fängt einmal an!";
        recommendationItems = [
          "Beginnen Sie mit Kapitel 1 und 2 des Buches, um die Grundlagen zu verstehen",
          "Fokussieren Sie sich auf die Begriffe und Konzepte des Optionshandels",
          "Lernen Sie zuerst die grundlegenden Kennzahlen wie Ausübungspreis, Laufzeit und Volatilität kennen",
          "Üben Sie mit einfachen Strategien wie Covered Calls und Cash Secured Puts"
        ];
        bookRecommendationText.textContent = "Das Buch 'Optionen strategisch nutzen' ist ideal für Einsteiger wie Sie! Es erklärt alle Grundbegriffe verständlich und führt Sie Schritt für Schritt an die ersten erfolgreichen Strategien heran. Besonders die Kapitel 1 und 2 werden Ihnen helfen, ein solides Fundament aufzubauen.";
      } else if (score <= 10) {
        level = "Fortgeschritten";
        levelClass = "level-intermediate";
        message = "Ihr Grundwissen ist solide, aber es gibt noch Raum für Verbesserungen.";
        recommendationItems = [
          "Vertiefen Sie Ihr Wissen mit den Kapiteln 3 und 4 des Buches",
          "Lernen Sie, Marktindikatoren intelligent zu nutzen, um bessere Timing-Entscheidungen zu treffen",
          "Verstehen Sie die Griechen (Delta, Gamma, Theta, Vega) und ihre Bedeutung für das Risikomanagement",
          "Entwickeln Sie einen strukturierten Handelsplan für Ihre Optionsstrategien"
        ];
        bookRecommendationText.textContent = "Mit Ihrem soliden Grundwissen sind Sie bereit, tiefer in die Welt des Optionshandels einzutauchen. Das Buch 'Optionen strategisch nutzen' bietet Ihnen in den Kapiteln 3 und 4 wertvolle Einblicke ins Risikomanagement und zeigt Ihnen, wie Sie systematisch Ihre Erfolgschancen steigern können.";
      } else if (score <= 15) {
        level = "Fortgeschritten+";
        levelClass = "level-advanced";
        message = "Sie haben ein gutes Optionswissen! Jetzt geht es darum, Feinheiten zu beherrschen und ein System zu entwickeln.";
        recommendationItems = [
          "Fokussieren Sie sich auf Kapitel 5 des Buches, um Ihre Strategien zu verfeinern",
          "Lernen Sie, typische Fehler zu vermeiden und positive Gewohnheiten zu entwickeln",
          "Erstellen Sie einen persönlichen Handelsplan basierend auf Ihren Zielen und Ihrer Risikobereitschaft",
          "Führen Sie ein Trading-Journal, um aus Ihren Erfahrungen systematisch zu lernen"
        ];
        bookRecommendationText.textContent = "Mit Ihrem fortgeschrittenen Wissen sind Sie bereit, Ihre Optionsstrategien zu verfeinern. Das Buch 'Optionen strategisch nutzen' bietet Ihnen besonders in Kapitel 5 wertvolle Insights, wie Sie typische Fallen vermeiden und ein nachhaltiges Trading-System aufbauen.";
      } else {
        level = "Experte";
        levelClass = "level-expert";
        message = "Hervorragend! Ihr Optionswissen ist sehr gut. Sie sind bereit, komplexe Strategien umzusetzen.";
        recommendationItems = [
          "Nutzen Sie das Buch als Nachschlagewerk für spezifische Strategien und Techniken",
          "Optimieren Sie Ihr Risikomanagement und Ihre Position Sizing-Strategie",
          "Verfeinern Sie Ihre Ansätze für verschiedene Marktphasen",
          "Teilen Sie Ihr Wissen mit anderen und bleiben Sie über Marktentwicklungen informiert"
        ];
        bookRecommendationText.textContent = "Als Experte können Sie das Buch 'Optionen strategisch nutzen' als wertvolles Nachschlagewerk und zur Validierung Ihrer eigenen Ansätze verwenden. Besonders wertvoll dürften für Sie die fortgeschrittenen Strategien und die Tipps zur Systemoptimierung sein.";
      }
      
      // Set level and message
      resultLevel.textContent = level;
      resultLevel.className = `result-level ${levelClass}`;
      resultsMessageElement.textContent = message;
      
      // Create recommendation list
      recommendations.innerHTML = "";
      recommendationItems.forEach(item => {
        const li = document.createElement('div');
        li.className = 'recommendation-item';
        li.innerHTML = `<i class="fas fa-arrow-right"></i> <span>${item}</span>`;
        recommendations.appendChild(li);
      });
    }

    function resetQuiz() {
      currentQuestion = 0;
      score = 0;
      answeredQuestions = 0;
      quizOver = false;
      progressBar.style.width = '0%';
      quizResults.style.display = 'none';
      quizStart.style.display = 'block';
    }

    // Event Listeners
    startBtn.addEventListener('click', () => {
      quizStart.style.display = 'none';
      quizQuestions.style.display = 'block';
      showQuestion();
    });

    nextQuestionBtn.addEventListener('click', () => {
      if (!quizOver) {
        nextQuestion();
      }
    });

    restartQuizBtn.addEventListener('click', () => {
      resetQuiz();
    });
