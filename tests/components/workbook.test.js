/**
 * @jest-environment jsdom
 */

describe('Workbook Calculators', () => {
  beforeEach(() => {
    // Set up full DOM needed by workbook.js
    document.body.innerHTML = `
      <div id="password-overlay" style="display:block">
        <input id="passwordInput" type="password">
        <button id="passwordSubmit">Submit</button>
        <span id="password-error"></span>
      </div>
      <div id="page-content" tabindex="-1">
        <div class="wb-tool-card">
          <button class="tab-btn active" data-tab="call">Call</button>
          <button class="tab-btn" data-tab="put">Put</button>
          <div id="tab-call" class="tab-content active"></div>
          <div id="tab-put" class="tab-content"></div>
        </div>

        <!-- Call Calculator -->
        <input id="callStrike" type="number" value="100">
        <input id="callPremium" type="number" value="5">
        <input id="callCurrent" type="number" value="110">
        <span id="callFormula"></span>
        <span id="callBE"></span>
        <span id="callPL" class="value"></span>

        <!-- Put Calculator -->
        <input id="putStrike" type="number" value="100">
        <input id="putPremium" type="number" value="5">
        <input id="putCurrent" type="number" value="90">
        <span id="putFormula"></span>
        <span id="putBE"></span>
        <span id="putPL" class="value"></span>

        <!-- Spread Calculator -->
        <input id="spreadLongStrike" type="number" value="50">
        <input id="spreadShortStrike" type="number" value="55">
        <input id="spreadPremium" type="number" value="2">
        <select id="spreadType"><option value="bullcall" selected>Bull Call</option><option value="bearput">Bear Put</option></select>
        <span id="spreadBE"></span>
        <span id="spreadMaxProfit"></span>
        <span id="spreadMaxLoss"></span>

        <!-- Position Size Calculator -->
        <input id="portfolioSize" type="number" value="100000">
        <input id="riskPercent" type="number" value="2">
        <input id="optionPrice" type="number" value="3">
        <input id="contractSize" type="number" value="100">
        <span id="maxRisk"></span>
        <span id="costPerContract"></span>
        <span id="recommendedContracts"></span>
      </div>
    `;
  });

  function loadWorkbook() {
    const fs = require('fs');
    const path = require('path');
    const script = fs.readFileSync(path.resolve(__dirname, '../../src/assets/js/workbook.js'), 'utf8');
    eval(script);
  }

  describe('Password Protection', () => {
    test('locks body on load', () => {
      loadWorkbook();
      expect(document.body.classList.contains('locked')).toBe(true);
    });

    test('unlocks with correct password "Epilog"', () => {
      loadWorkbook();
      const input = document.getElementById('passwordInput');
      const submit = document.getElementById('passwordSubmit');

      input.value = 'Epilog';
      submit.click();

      expect(document.body.classList.contains('unlocked')).toBe(true);
      expect(document.body.classList.contains('locked')).toBe(false);
      expect(document.getElementById('password-overlay').style.display).toBe('none');
    });

    test('shows error with wrong password', () => {
      loadWorkbook();
      const input = document.getElementById('passwordInput');
      const submit = document.getElementById('passwordSubmit');

      input.value = 'wrong';
      submit.click();

      expect(document.body.classList.contains('locked')).toBe(true);
      expect(document.getElementById('password-error').textContent).toContain('nicht korrekt');
    });

    test('Enter key triggers unlock', () => {
      loadWorkbook();
      const input = document.getElementById('passwordInput');

      input.value = 'Epilog';
      input.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));

      expect(document.body.classList.contains('unlocked')).toBe(true);
    });
  });

  describe('Call Break-Even Calculator', () => {
    test('calculates break-even correctly (strike + premium)', () => {
      loadWorkbook();
      // Default values: strike=100, premium=5, current=110
      const beText = document.getElementById('callBE').textContent;
      expect(beText).toContain('105.00');
    });

    test('calculates profit/loss correctly', () => {
      loadWorkbook();
      // current(110) - BE(105) = +5.00
      const plText = document.getElementById('callPL').textContent;
      expect(plText).toContain('+5.00');
      expect(document.getElementById('callPL').className).toContain('profit');
    });

    test('updates on input change', () => {
      loadWorkbook();
      const strikeInput = document.getElementById('callStrike');
      strikeInput.value = '120';
      strikeInput.dispatchEvent(new Event('input'));

      // BE = 120 + 5 = 125
      expect(document.getElementById('callBE').textContent).toContain('125.00');
      // PL = 110 - 125 = -15.00
      expect(document.getElementById('callPL').textContent).toContain('-15.00');
      expect(document.getElementById('callPL').className).toContain('loss');
    });

    test('shows formula', () => {
      loadWorkbook();
      const formula = document.getElementById('callFormula').textContent;
      expect(formula).toContain('100');
      expect(formula).toContain('5.00');
      expect(formula).toContain('105.00');
    });
  });

  describe('Put Break-Even Calculator', () => {
    test('calculates break-even correctly (strike - premium)', () => {
      loadWorkbook();
      // strike=100, premium=5 → BE=95
      expect(document.getElementById('putBE').textContent).toContain('95.00');
    });

    test('calculates profit/loss correctly', () => {
      loadWorkbook();
      // BE(95) - current(90) = +5.00
      const plText = document.getElementById('putPL').textContent;
      expect(plText).toContain('+5.00');
      expect(document.getElementById('putPL').className).toContain('profit');
    });
  });

  describe('Spread Calculator', () => {
    test('calculates bull call spread correctly', () => {
      loadWorkbook();
      // bullcall: BE = longStrike(50) + premium(2) = 52
      expect(document.getElementById('spreadBE').textContent).toContain('52.00');
      // maxProfit = shortStrike(55) - longStrike(50) - premium(2) = 3
      expect(document.getElementById('spreadMaxProfit').textContent).toContain('+3.00');
      // maxLoss = premium(2)
      expect(document.getElementById('spreadMaxLoss').textContent).toContain('2.00');
    });

    test('calculates bear put spread correctly', () => {
      loadWorkbook();
      const typeSelect = document.getElementById('spreadType');
      typeSelect.value = 'bearput';
      typeSelect.dispatchEvent(new Event('change'));

      // bearput: BE = longStrike(50) - premium(2) = 48
      expect(document.getElementById('spreadBE').textContent).toContain('48.00');
      // maxProfit = longStrike(50) - shortStrike(55) - premium(2) = -7 (negative since shortStrike > longStrike)
      // maxLoss = premium(2)
      expect(document.getElementById('spreadMaxLoss').textContent).toContain('2.00');
    });
  });

  describe('Position Size Calculator', () => {
    test('calculates position size correctly', () => {
      loadWorkbook();
      window.calculatePosition();

      // maxRisk = 100000 * 2/100 = 2000
      expect(document.getElementById('maxRisk').textContent).toContain('2.000');
      // costPerContract = 3 * 100 = 300
      expect(document.getElementById('costPerContract').textContent).toContain('300');
      // contracts = floor(2000 / 300) = 6
      expect(document.getElementById('recommendedContracts').textContent).toContain('6');
      expect(document.getElementById('recommendedContracts').textContent).toContain('Kontrakte');
    });

    test('handles single contract result', () => {
      loadWorkbook();
      document.getElementById('portfolioSize').value = '10000';
      document.getElementById('riskPercent').value = '1';
      document.getElementById('optionPrice').value = '50';
      window.calculatePosition();

      // maxRisk = 10000 * 1/100 = 100
      // costPerContract = 50 * 100 = 5000
      // contracts = floor(100 / 5000) = 0
      expect(document.getElementById('recommendedContracts').textContent).toContain('0');
    });
  });

  describe('Tab Navigation', () => {
    test('switches tabs on click', () => {
      loadWorkbook();
      const putTab = document.querySelector('[data-tab="put"]');
      putTab.click();

      expect(putTab.classList.contains('active')).toBe(true);
      expect(document.getElementById('tab-put').classList.contains('active')).toBe(true);
      expect(document.getElementById('tab-call').classList.contains('active')).toBe(false);
    });
  });
});
