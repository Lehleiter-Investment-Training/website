/**
 * @jest-environment jsdom
 */

describe('Glossar', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="alphabetNav" class="alphabet-nav"></div>
      <div id="searchCount"></div>
      <input id="searchInput" type="text">
      <div id="glossaryContent"></div>
    `;
  });

  function loadGlossar() {
    const fs = require('fs');
    const path = require('path');
    const script = fs.readFileSync(path.resolve(__dirname, '../../src/assets/js/glossar.js'), 'utf8');
    eval(script);
  }

  test('generates alphabet navigation', () => {
    loadGlossar();
    const navLinks = document.querySelectorAll('#alphabetNav a');
    expect(navLinks.length).toBe(26); // A-Z
  });

  test('disables letters with no terms', () => {
    loadGlossar();
    // Letters like X, Y, Q should be disabled (no glossary terms start with them)
    const allLinks = document.querySelectorAll('#alphabetNav a');
    const disabledLinks = document.querySelectorAll('#alphabetNav a.disabled');
    expect(disabledLinks.length).toBeGreaterThan(0);
  });

  test('renders all glossary terms', () => {
    loadGlossar();
    const terms = document.querySelectorAll('.term-card');
    expect(terms.length).toBeGreaterThan(40); // Should have 40+ terms
  });

  test('displays term count', () => {
    loadGlossar();
    const count = document.getElementById('searchCount').textContent;
    expect(count).toContain('Begriffe verfügbar');
  });

  test('groups terms by first letter', () => {
    loadGlossar();
    const sections = document.querySelectorAll('.letter-section');
    expect(sections.length).toBeGreaterThan(5);
  });

  test('search filters terms', () => {
    loadGlossar();
    const searchInput = document.getElementById('searchInput');
    searchInput.value = 'Delta';
    searchInput.dispatchEvent(new Event('input'));

    const count = document.getElementById('searchCount').textContent;
    expect(count).toContain('von');
    expect(count).toContain('gefunden');

    const terms = document.querySelectorAll('.term-card');
    expect(terms.length).toBeGreaterThan(0);
    expect(terms.length).toBeLessThan(40); // Filtered result should be smaller
  });

  test('shows no results message for invalid search', () => {
    loadGlossar();
    const searchInput = document.getElementById('searchInput');
    searchInput.value = 'xyznonexistent';
    searchInput.dispatchEvent(new Event('input'));

    const noResults = document.querySelector('.no-results');
    expect(noResults).not.toBeNull();
    expect(noResults.textContent).toContain('Keine Begriffe gefunden');
  });

  test('search works on tags', () => {
    loadGlossar();
    const searchInput = document.getElementById('searchInput');
    searchInput.value = 'Griechen';
    searchInput.dispatchEvent(new Event('input'));

    const terms = document.querySelectorAll('.term-card');
    // Should find Delta, Gamma, Vega, Theta, Rho, Greeks
    expect(terms.length).toBeGreaterThanOrEqual(5);
  });

  test('highlights Grundlagen terms', () => {
    loadGlossar();
    const highlighted = document.querySelectorAll('.term-card.highlight');
    expect(highlighted.length).toBeGreaterThan(0);
  });

  test('terms have structure (title, definition, tags)', () => {
    loadGlossar();
    const firstTerm = document.querySelector('.term-card');
    expect(firstTerm.querySelector('.term-title')).not.toBeNull();
    expect(firstTerm.querySelector('.term-definition')).not.toBeNull();
    expect(firstTerm.querySelector('.term-tags')).not.toBeNull();
  });

  test('terms include English translation', () => {
    loadGlossar();
    const english = document.querySelectorAll('.term-card .english');
    expect(english.length).toBeGreaterThan(0);
  });
});
