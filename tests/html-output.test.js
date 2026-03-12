const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE_DIR = path.join(ROOT, '_site');

// Helper to read generated HTML
function readHTML(filename) {
  return fs.readFileSync(path.join(SITE_DIR, filename), 'utf8');
}

describe('HTML Output Validation', () => {
  // Ensure the site is built before running
  beforeAll(() => {
    if (!fs.existsSync(SITE_DIR)) {
      const { execSync } = require('child_process');
      execSync('npm run build', { cwd: ROOT, stdio: 'pipe', timeout: 60000 });
    }
  }, 120000);

  describe('Homepage (index.html)', () => {
    let html;
    beforeAll(() => { html = readHTML('index.html'); });

    test('has correct HTML structure', () => {
      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain('<html lang="de"');
      expect(html).toContain('</html>');
    });

    test('has meta tags', () => {
      expect(html).toContain('<meta charset=');
      expect(html).toContain('viewport');
      expect(html).toContain('<meta name="description"');
    });

    test('has navigation', () => {
      expect(html).toContain('<nav');
      expect(html).toContain('Das Buch');
      expect(html).toContain('Blog');
      expect(html).toContain('Tools');
    });

    test('has hero section with CTA', () => {
      expect(html).toContain('Optionen strategisch nutzen');
    });

    test('has book section', () => {
      expect(html).toContain('id="book"');
      expect(html).toContain('amazon');
    });

    test('has reviews section', () => {
      expect(html).toContain('id="reviews"');
      expect(html).toContain('reviewsSlider');
    });

    test('has FAQ section', () => {
      expect(html).toContain('id="faq"');
      expect(html).toContain('faq-question');
    });

    test('has starterkit/lead gen section', () => {
      expect(html).toContain('id="starterkit"');
    });

    test('has footer', () => {
      expect(html).toContain('<footer');
      expect(html).toContain('Impressum');
      expect(html).toContain('Datenschutz');
    });

    test('includes CSS files', () => {
      expect(html).toContain('variables.css');
      expect(html).toContain('base.css');
      expect(html).toContain('nav.css');
      expect(html).toContain('components.css');
      expect(html).toContain('responsive.css');
    });

    test('includes JavaScript files', () => {
      expect(html).toContain('slider.js');
    });

    test('has cookie consent banner', () => {
      expect(html).toContain('cookieConsent');
      expect(html).toContain('cookie-consent.js');
    });

    test('has skip-to-content accessibility link', () => {
      expect(html).toContain('skip-link');
    });

    test('has social media links', () => {
      expect(html).toContain('linkedin');
      expect(html).toContain('instagram');
      expect(html).toContain('telegram');
    });

    test('has author section', () => {
      expect(html).toContain('id="author"');
    });
  });

  describe('Blog Pages', () => {
    test('blog index lists articles', () => {
      const html = readHTML('blog.html');
      expect(html).toContain('Blog');
      // Should contain links to blog posts
      expect(html).toContain('anfaengerfehler-optionshandel');
    });

    test('blog post has article structure', () => {
      const html = readHTML('anfaengerfehler-optionshandel.html');
      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain('lang="de"');
      // Blog post should have structured data
      expect(html).toContain('BlogPosting');
    });

    test('blog post has related posts section', () => {
      const html = readHTML('anfaengerfehler-optionshandel.html');
      // Should have related posts or CTA
      expect(html).toContain('amazon');
    });
  });

  describe('Tool Pages', () => {
    test('quiz page has quiz structure', () => {
      const html = readHTML('quiz.html');
      expect(html).toContain('quiz-start');
      expect(html).toContain('quiz-questions');
      expect(html).toContain('quiz-results');
      expect(html).toContain('quiz.js');
    });

    test('boersenquiz page has quiz structure', () => {
      const html = readHTML('boersenquiz.html');
      expect(html).toContain('boersenquiz.js');
    });

    test('handelsplan page has form', () => {
      const html = readHTML('handelsplan.html');
      expect(html).toContain('tradingPlanForm');
      expect(html).toContain('handelsplan.js');
      expect(html).toContain('disclaimerOverlay');
    });
  });

  describe('Protected Pages', () => {
    test('bonus page has password overlay', () => {
      const html = readHTML('Bonus.html');
      expect(html).toContain('password-overlay');
      expect(html).toContain('passwordInput');
      expect(html).toContain('bonus.js');
    });

    test('glossar page has glossary structure', () => {
      const html = readHTML(path.join('Bonus', 'Glossar.html'));
      expect(html).toContain('glossar');
      expect(html).toContain('alphabetNav');
      expect(html).toContain('searchInput');
    });

    test('workbook page has password overlay and calculators', () => {
      const html = readHTML('workbook.html');
      expect(html).toContain('password-overlay');
      expect(html).toContain('passwordInput');
      expect(html).toContain('workbook.js');
    });
  });

  describe('Legal Pages', () => {
    test('impressum has required content', () => {
      const html = readHTML('impressum.html');
      expect(html).toContain('Impressum');
      expect(html).toContain('Markus Lehleiter');
    });

    test('datenschutz has privacy info', () => {
      const html = readHTML('datenschutz.html');
      expect(html).toContain('Datenschutz');
    });

    test('danke page exists', () => {
      const html = readHTML('Danke.html');
      expect(html).toContain('<!DOCTYPE html>');
    });
  });

  describe('404 Page', () => {
    test('has user-friendly error message', () => {
      const html = readHTML('404.html');
      expect(html).toContain('404');
    });
  });

  describe('SEO & Accessibility', () => {
    let html;
    beforeAll(() => { html = readHTML('index.html'); });

    test('has structured data (schema.org) on blog posts', () => {
      const blogHtml = readHTML('anfaengerfehler-optionshandel.html');
      expect(blogHtml).toContain('BlogPosting');
      expect(blogHtml).toContain('schema.org');
    });

    test('has canonical link', () => {
      expect(html).toContain('canonical');
    });

    test('has favicon', () => {
      expect(html).toContain('favicon');
    });

    test('sitemap contains all main pages', () => {
      const sitemap = readHTML('sitemap.xml');
      expect(sitemap).toContain('just-options.de');
      expect(sitemap).toContain('<loc>');
    });

    test('robots.txt is properly configured', () => {
      const robots = fs.readFileSync(path.join(SITE_DIR, 'robots.txt'), 'utf8');
      expect(robots).toContain('Sitemap');
    });
  });
});
