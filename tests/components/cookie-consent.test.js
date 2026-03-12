/**
 * @jest-environment jsdom
 */

describe('Cookie Consent', () => {
  let cookieConsent, acceptAllBtn, acceptNecessaryBtn, savePreferencesBtn;
  let functionalToggle, analyticsToggle, marketingToggle;

  beforeEach(() => {
    // Clear localStorage and cookies
    localStorage.clear();
    document.cookie = '';

    // Set up DOM
    document.body.innerHTML = `
      <div id="cookieConsent">
        <button id="acceptAll">Accept All</button>
        <button id="acceptNecessary">Accept Necessary</button>
        <button id="savePreferences">Save Preferences</button>
        <input type="checkbox" id="functionalCookies">
        <input type="checkbox" id="analyticsCookies">
        <input type="checkbox" id="marketingCookies">
      </div>
    `;

    cookieConsent = document.getElementById('cookieConsent');
    acceptAllBtn = document.getElementById('acceptAll');
    acceptNecessaryBtn = document.getElementById('acceptNecessary');
    savePreferencesBtn = document.getElementById('savePreferences');
    functionalToggle = document.getElementById('functionalCookies');
    analyticsToggle = document.getElementById('analyticsCookies');
    marketingToggle = document.getElementById('marketingCookies');

    // Reset window flags
    delete window.cookieConsentAnalytics;
    delete window.cookieConsentMarketing;
    delete window.cookieConsentFunctional;
  });

  function loadCookieConsent() {
    // Re-execute the IIFE by evaluating the script
    const fs = require('fs');
    const path = require('path');
    const scriptContent = fs.readFileSync(
      path.resolve(__dirname, '../../src/assets/js/cookie-consent.js'),
      'utf8'
    );
    eval(scriptContent);
  }

  test('shows banner when no saved preferences exist', () => {
    loadCookieConsent();
    expect(cookieConsent.classList.contains('show')).toBe(true);
  });

  test('hides banner when preferences are already saved', () => {
    const prefs = { necessary: true, functional: false, analytics: false, marketing: false, timestamp: Date.now() };
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));

    loadCookieConsent();
    expect(cookieConsent.classList.contains('show')).toBe(false);
  });

  test('accept all sets all preferences to true', () => {
    loadCookieConsent();
    acceptAllBtn.click();

    const saved = JSON.parse(localStorage.getItem('cookieConsent'));
    expect(saved.necessary).toBe(true);
    expect(saved.functional).toBe(true);
    expect(saved.analytics).toBe(true);
    expect(saved.marketing).toBe(true);
    expect(cookieConsent.classList.contains('show')).toBe(false);
  });

  test('accept necessary sets only necessary to true', () => {
    loadCookieConsent();
    acceptNecessaryBtn.click();

    const saved = JSON.parse(localStorage.getItem('cookieConsent'));
    expect(saved.necessary).toBe(true);
    expect(saved.functional).toBe(false);
    expect(saved.analytics).toBe(false);
    expect(saved.marketing).toBe(false);
  });

  test('accept necessary unchecks all toggles', () => {
    functionalToggle.checked = true;
    analyticsToggle.checked = true;
    marketingToggle.checked = true;

    loadCookieConsent();
    acceptNecessaryBtn.click();

    expect(functionalToggle.checked).toBe(false);
    expect(analyticsToggle.checked).toBe(false);
    expect(marketingToggle.checked).toBe(false);
  });

  test('save preferences saves current toggle states', () => {
    loadCookieConsent();

    functionalToggle.checked = true;
    analyticsToggle.checked = false;
    marketingToggle.checked = true;

    savePreferencesBtn.click();

    const saved = JSON.parse(localStorage.getItem('cookieConsent'));
    expect(saved.functional).toBe(true);
    expect(saved.analytics).toBe(false);
    expect(saved.marketing).toBe(true);
  });

  test('applies cookie settings to window flags', () => {
    loadCookieConsent();
    acceptAllBtn.click();

    expect(window.cookieConsentAnalytics).toBe(true);
    expect(window.cookieConsentMarketing).toBe(true);
    expect(window.cookieConsentFunctional).toBe(true);
  });

  test('restores saved toggle states on load', () => {
    const prefs = { necessary: true, functional: true, analytics: false, marketing: true, timestamp: Date.now() };
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));

    loadCookieConsent();

    expect(functionalToggle.checked).toBe(true);
    expect(analyticsToggle.checked).toBe(false);
    expect(marketingToggle.checked).toBe(true);
  });

  test('openCookieSettings re-shows banner', () => {
    loadCookieConsent();
    acceptAllBtn.click();
    expect(cookieConsent.classList.contains('show')).toBe(false);

    window.openCookieSettings();
    expect(cookieConsent.classList.contains('show')).toBe(true);
  });

  test('saves timestamp with preferences', () => {
    loadCookieConsent();
    const before = Date.now();
    acceptAllBtn.click();
    const after = Date.now();

    const saved = JSON.parse(localStorage.getItem('cookieConsent'));
    expect(saved.timestamp).toBeGreaterThanOrEqual(before);
    expect(saved.timestamp).toBeLessThanOrEqual(after);
  });
});
