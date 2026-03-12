/**
 * @jest-environment jsdom
 */

describe('Bonus Page Password Protection', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="password-overlay" style="display:block">
        <input id="passwordInput" type="password">
        <button id="passwordSubmit">Submit</button>
        <span id="password-error"></span>
      </div>
      <div id="page-content" tabindex="-1"></div>
    `;
    document.body.className = '';
  });

  function loadBonus() {
    const fs = require('fs');
    const path = require('path');
    const script = fs.readFileSync(path.resolve(__dirname, '../../src/assets/js/bonus.js'), 'utf8');
    eval(script);
  }

  test('locks body on load', () => {
    loadBonus();
    expect(document.body.classList.contains('locked')).toBe(true);
  });

  test('unlocks with correct password "Grundlagen"', () => {
    loadBonus();
    const input = document.getElementById('passwordInput');
    input.value = 'Grundlagen';
    document.getElementById('passwordSubmit').click();

    expect(document.body.classList.contains('unlocked')).toBe(true);
    expect(document.body.classList.contains('locked')).toBe(false);
    expect(document.getElementById('password-overlay').style.display).toBe('none');
    expect(document.getElementById('password-error').textContent).toBe('');
  });

  test('rejects wrong password', () => {
    loadBonus();
    const input = document.getElementById('passwordInput');
    input.value = 'wrong';
    document.getElementById('passwordSubmit').click();

    expect(document.body.classList.contains('locked')).toBe(true);
    expect(document.getElementById('password-error').textContent).toContain('nicht korrekt');
    expect(input.value).toBe('');
  });

  test('trims whitespace from password', () => {
    loadBonus();
    const input = document.getElementById('passwordInput');
    input.value = '  Grundlagen  ';
    document.getElementById('passwordSubmit').click();

    expect(document.body.classList.contains('unlocked')).toBe(true);
  });

  test('Enter key triggers unlock', () => {
    loadBonus();
    const input = document.getElementById('passwordInput');
    input.value = 'Grundlagen';
    input.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));

    expect(document.body.classList.contains('unlocked')).toBe(true);
  });

  test('clicking overlay focuses input', () => {
    loadBonus();
    const overlay = document.getElementById('password-overlay');
    const input = document.getElementById('passwordInput');

    const focusSpy = jest.spyOn(input, 'focus');
    overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    // The click handler checks event.target === overlay
    // With dispatched event, target is overlay itself
    expect(focusSpy).toHaveBeenCalled();
  });
});
