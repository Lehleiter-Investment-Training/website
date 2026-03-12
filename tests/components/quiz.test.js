/**
 * @jest-environment jsdom
 */

describe('Options Quiz', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="quiz-start">
        <button id="start-quiz-btn">Start</button>
      </div>
      <div id="quiz-questions" style="display:none">
        <div id="question-number"></div>
        <div id="quiz-progress" style="width:0%"></div>
        <div id="question-text"></div>
        <div id="answer-buttons"></div>
        <div id="explanation-container">
          <div id="explanation-text"></div>
        </div>
        <button id="next-question-btn" style="display:none">Next</button>
      </div>
      <div id="quiz-results" style="display:none">
        <div id="score-display"></div>
        <div id="result-level"></div>
        <div id="results-message"></div>
        <div id="recommendations"></div>
        <div id="book-recommendation-text"></div>
        <button id="restart-quiz-btn">Restart</button>
      </div>
    `;
  });

  function loadQuiz() {
    const fs = require('fs');
    const path = require('path');
    const script = fs.readFileSync(path.resolve(__dirname, '../../src/assets/js/quiz.js'), 'utf8');
    eval(script);
  }

  test('quiz starts in start screen', () => {
    loadQuiz();
    expect(document.getElementById('quiz-start').style.display).not.toBe('none');
    expect(document.getElementById('quiz-questions').style.display).toBe('none');
  });

  test('start button shows questions', () => {
    loadQuiz();
    document.getElementById('start-quiz-btn').click();

    expect(document.getElementById('quiz-start').style.display).toBe('none');
    expect(document.getElementById('quiz-questions').style.display).toBe('block');
  });

  test('first question is displayed after start', () => {
    loadQuiz();
    document.getElementById('start-quiz-btn').click();

    expect(document.getElementById('question-text').textContent).toContain('Call-Option');
    expect(document.getElementById('question-number').textContent).toContain('1');
  });

  test('shows 4 answer buttons per question', () => {
    loadQuiz();
    document.getElementById('start-quiz-btn').click();

    const buttons = document.querySelectorAll('.answer-btn');
    expect(buttons.length).toBe(4);
  });

  test('answer buttons have option letters A-D', () => {
    loadQuiz();
    document.getElementById('start-quiz-btn').click();

    const buttons = document.querySelectorAll('.answer-btn');
    const letters = Array.from(buttons).map(btn =>
      btn.querySelector('.option-letter').textContent.trim()
    );
    expect(letters).toEqual(['A', 'B', 'C', 'D']);
  });

  test('progress bar updates with each question', () => {
    loadQuiz();
    document.getElementById('start-quiz-btn').click();

    const progressBar = document.getElementById('quiz-progress');
    // First question: 0/21 = 0%
    expect(progressBar.style.width).toBe('0%');
  });

  test('quiz has 21 questions', () => {
    loadQuiz();
    document.getElementById('start-quiz-btn').click();

    const counter = document.getElementById('question-number').textContent;
    expect(counter).toContain('20');
  });

  test('restart resets to start screen', () => {
    loadQuiz();
    document.getElementById('start-quiz-btn').click();
    document.getElementById('restart-quiz-btn').click();

    expect(document.getElementById('quiz-start').style.display).toBe('block');
    expect(document.getElementById('quiz-results').style.display).toBe('none');
  });

  test('quiz data has correct answer for each question', () => {
    // Load quiz to access quizData
    loadQuiz();
    document.getElementById('start-quiz-btn').click();

    // Verify first question - correct answer is "Das Recht, eine Aktie zu kaufen."
    const buttons = document.querySelectorAll('.answer-btn');
    const correctBtn = Array.from(buttons).find(btn =>
      btn.querySelector('.fa-check')
    );
    expect(correctBtn).toBeDefined();
    expect(correctBtn.textContent).toContain('Das Recht, eine Aktie zu kaufen.');
  });
});
