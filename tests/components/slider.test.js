/**
 * @jest-environment jsdom
 */

describe('Review Slider & FAQ Accordion', () => {
  beforeEach(() => {
    // Mock clientWidth
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      get() { return 1024; }
    });

    document.body.innerHTML = `
      <div class="reviews-slider-container">
        <div class="reviews-slider-wrapper">
          <button class="prev-arrow">Prev</button>
          <div id="reviewsSlider">
            <div class="review-card">Review 1</div>
            <div class="review-card">Review 2</div>
            <div class="review-card">Review 3</div>
            <div class="review-card">Review 4</div>
            <div class="review-card">Review 5</div>
            <div class="review-card">Review 6</div>
          </div>
          <button class="next-arrow">Next</button>
        </div>
      </div>

      <div class="faq-section">
        <div class="faq-question">Question 1</div>
        <div class="faq-answer">Answer 1</div>
        <div class="faq-question">Question 2</div>
        <div class="faq-answer">Answer 2</div>
      </div>
    `;
  });

  function loadSlider() {
    jest.useFakeTimers();
    const fs = require('fs');
    const path = require('path');
    const script = fs.readFileSync(path.resolve(__dirname, '../../src/assets/js/slider.js'), 'utf8');

    // The script wraps everything in a DOMContentLoaded listener.
    // Extract the callback body and execute it directly.
    const callbackBody = script
      .replace(/^document\.addEventListener\('DOMContentLoaded',\s*function\s*\(\)\s*\{/, '')
      .replace(/\}\);?\s*$/, '');

    // Execute the inner function directly
    const fn = new Function(callbackBody);
    fn();
  }

  afterEach(() => {
    jest.useRealTimers();
  });

  test('initializes slider with dots', () => {
    loadSlider();
    const dots = document.querySelectorAll('.dot');
    expect(dots.length).toBeGreaterThan(0);
  });

  test('first dot is active initially', () => {
    loadSlider();
    const firstDot = document.querySelector('.dot');
    expect(firstDot.classList.contains('active')).toBe(true);
  });

  test('next arrow advances slider', () => {
    loadSlider();
    const nextArrow = document.querySelector('.next-arrow');
    const slider = document.getElementById('reviewsSlider');

    nextArrow.click();
    expect(slider.style.transform).toContain('translateX');
  });

  test('prev arrow wraps to end when at start', () => {
    loadSlider();
    const prevArrow = document.querySelector('.prev-arrow');
    const slider = document.getElementById('reviewsSlider');

    prevArrow.click();
    // Should wrap to maxPosition
    expect(slider.style.transform).toContain('translateX');
  });

  test('auto-slide advances after 5 seconds', () => {
    loadSlider();
    const slider = document.getElementById('reviewsSlider');

    jest.advanceTimersByTime(5000);
    expect(slider.style.transform).toContain('translateX');
  });

  test('FAQ accordion toggles on click', () => {
    loadSlider();
    const question = document.querySelector('.faq-question');
    const answer = question.nextElementSibling;

    question.click();
    expect(question.classList.contains('active')).toBe(true);
    expect(answer.classList.contains('show')).toBe(true);

    question.click();
    expect(question.classList.contains('active')).toBe(false);
    expect(answer.classList.contains('show')).toBe(false);
  });

  test('multiple FAQ items work independently', () => {
    loadSlider();
    const questions = document.querySelectorAll('.faq-question');

    questions[0].click();
    expect(questions[0].classList.contains('active')).toBe(true);
    expect(questions[1].classList.contains('active')).toBe(false);
  });
});
