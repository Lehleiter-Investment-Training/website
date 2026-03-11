(function () {
    // Password Protection (same pattern as bonus.js)
    const password = "Epilog";
    const overlay = document.getElementById("password-overlay");
    const input = document.getElementById("passwordInput");
    const submit = document.getElementById("passwordSubmit");
    const error = document.getElementById("password-error");
    const body = document.body;
    const pageContent = document.getElementById("page-content");

    body.classList.add("locked");

    function unlock() {
        if ((input.value || "").trim() === password) {
            body.classList.remove("locked");
            body.classList.add("unlocked");
            overlay.style.display = "none";
            error.textContent = "";
            if (pageContent && typeof pageContent.focus === "function") {
                pageContent.focus({ preventScroll: true });
            }
        } else {
            error.textContent = "Das eingegebene Passwort ist nicht korrekt.";
            input.value = "";
            input.focus();
        }
    }

    submit.addEventListener("click", unlock);
    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            unlock();
        }
    });

    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            input.focus();
        }
    });

    input.focus();

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var parent = this.closest('.wb-tool-card');
            parent.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
            parent.querySelectorAll('.tab-content').forEach(function (c) { c.classList.remove('active'); });
            this.classList.add('active');
            document.getElementById('tab-' + this.dataset.tab).classList.add('active');
        });
    });

    // Break-Even Calculators
    function updateCallCalc() {
        var strike = parseFloat(document.getElementById('callStrike').value) || 0;
        var premium = parseFloat(document.getElementById('callPremium').value) || 0;
        var current = parseFloat(document.getElementById('callCurrent').value) || 0;
        var be = strike + premium;
        var pl = current - be;

        document.getElementById('callFormula').textContent = strike + ' + ' + premium.toFixed(2) + ' = ' + be.toFixed(2) + ' €';
        document.getElementById('callBE').textContent = be.toFixed(2) + ' €';

        var plEl = document.getElementById('callPL');
        plEl.textContent = (pl >= 0 ? '+' : '') + pl.toFixed(2) + ' € pro Aktie';
        plEl.className = 'value ' + (pl >= 0 ? 'profit' : 'loss');
    }

    function updatePutCalc() {
        var strike = parseFloat(document.getElementById('putStrike').value) || 0;
        var premium = parseFloat(document.getElementById('putPremium').value) || 0;
        var current = parseFloat(document.getElementById('putCurrent').value) || 0;
        var be = strike - premium;
        var pl = be - current;

        document.getElementById('putFormula').textContent = strike + ' − ' + premium.toFixed(2) + ' = ' + be.toFixed(2) + ' €';
        document.getElementById('putBE').textContent = be.toFixed(2) + ' €';

        var plEl = document.getElementById('putPL');
        plEl.textContent = (pl >= 0 ? '+' : '') + pl.toFixed(2) + ' € pro Aktie';
        plEl.className = 'value ' + (pl >= 0 ? 'profit' : 'loss');
    }

    function updateSpreadCalc() {
        var longStrike = parseFloat(document.getElementById('spreadLongStrike').value) || 0;
        var shortStrike = parseFloat(document.getElementById('spreadShortStrike').value) || 0;
        var premium = parseFloat(document.getElementById('spreadPremium').value) || 0;
        var type = document.getElementById('spreadType').value;

        var be, maxProfit, maxLoss;

        if (type === 'bullcall') {
            be = longStrike + premium;
            maxProfit = shortStrike - longStrike - premium;
            maxLoss = premium;
        } else {
            be = longStrike - premium;
            maxProfit = longStrike - shortStrike - premium;
            maxLoss = premium;
        }

        document.getElementById('spreadBE').textContent = be.toFixed(2) + ' €';
        document.getElementById('spreadMaxProfit').textContent = '+' + maxProfit.toFixed(2) + ' €';
        document.getElementById('spreadMaxLoss').textContent = '−' + maxLoss.toFixed(2) + ' €';
    }

    // Add event listeners for calculators
    ['callStrike', 'callPremium', 'callCurrent'].forEach(function (id) {
        document.getElementById(id).addEventListener('input', updateCallCalc);
    });

    ['putStrike', 'putPremium', 'putCurrent'].forEach(function (id) {
        document.getElementById(id).addEventListener('input', updatePutCalc);
    });

    ['spreadLongStrike', 'spreadShortStrike', 'spreadPremium', 'spreadType'].forEach(function (id) {
        document.getElementById(id).addEventListener('input', updateSpreadCalc);
        document.getElementById(id).addEventListener('change', updateSpreadCalc);
    });

    // Position Size Calculator (global for onclick)
    window.calculatePosition = function () {
        var portfolio = parseFloat(document.getElementById('portfolioSize').value) || 0;
        var riskPct = parseFloat(document.getElementById('riskPercent').value) || 0;
        var optionPrice = parseFloat(document.getElementById('optionPrice').value) || 0;
        var contractSize = parseFloat(document.getElementById('contractSize').value) || 100;

        var maxRisk = portfolio * (riskPct / 100);
        var costPerContract = optionPrice * contractSize;
        var contracts = Math.floor(maxRisk / costPerContract);

        document.getElementById('maxRisk').textContent = maxRisk.toLocaleString('de-DE') + ' €';
        document.getElementById('costPerContract').textContent = costPerContract.toLocaleString('de-DE') + ' €';
        document.getElementById('recommendedContracts').textContent = contracts + ' Kontrakt' + (contracts !== 1 ? 'e' : '');
    };

    // Initialize calculators
    updateCallCalc();
    updatePutCalc();
    updateSpreadCalc();
    window.calculatePosition();
})();
