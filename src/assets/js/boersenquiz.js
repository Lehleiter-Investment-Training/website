        // Quiz-Daten (100 Fragen) liegen als JSON unter /assets/data/boersenquiz.json
        // und werden asynchron geladen – hält dieses Script klein.
        let quizData = [];
        let topics = [];
        const quizDataReady = fetch('/assets/data/boersenquiz.json')
            .then((res) => {
                if (!res.ok) throw new Error('HTTP ' + res.status);
                return res.json();
            })
            .then((data) => {
                quizData = data;
                topics = [...new Set(quizData.map(q => q.topic))];
            });

        // Quiz State
        let currentQuestionIndex = 0;
        let score = 0;
        let streak = 0;
        let topicScores = {};
        let answeredQuestions = [];

        // Shuffle array
        function shuffleArray(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        }

        // Start quiz (wartet auf die asynchron geladenen Fragen)
        function startQuiz() {
            quizDataReady.then(() => {
                // Reset state
                currentQuestionIndex = 0;
                score = 0;
                streak = 0;
                answeredQuestions = [];

                // Reset topic scores
                topicScores = {};
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
            }).catch(() => {
                alert('Die Quiz-Fragen konnten nicht geladen werden. Bitte laden Sie die Seite neu.');
            });
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

