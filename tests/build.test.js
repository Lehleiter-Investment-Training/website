const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE_DIR = path.join(ROOT, '_site');

describe('Eleventy Build', () => {
  beforeAll(() => {
    // Clean and build
    execSync('npm run clean', { cwd: ROOT, stdio: 'pipe' });
    execSync('npm run build', { cwd: ROOT, stdio: 'pipe', timeout: 60000 });
  }, 120000);

  test('build completes and creates _site directory', () => {
    expect(fs.existsSync(SITE_DIR)).toBe(true);
  });

  test('generates index.html (homepage)', () => {
    const indexPath = path.join(SITE_DIR, 'index.html');
    expect(fs.existsSync(indexPath)).toBe(true);
    const content = fs.readFileSync(indexPath, 'utf8');
    expect(content).toContain('<!DOCTYPE html>');
    expect(content).toContain('lang="de"');
  });

  test('generates blog index page', () => {
    const blogPath = path.join(SITE_DIR, 'blog.html');
    expect(fs.existsSync(blogPath)).toBe(true);
  });

  test('generates all blog posts', () => {
    const expectedPosts = [
      'anfaengerfehler-optionshandel',
      'iv-rank-perzentil',
      'marginhandel-verstehen',
      'optionsstrategien-einsteiger',
      'psychologie-optionshandel',
      'risikomanagement-optionshandel',
      'volatilitaet-renditen',
      'volatilitaet-verstehen',
      'vix-angstindex-erklaert'
    ];

    expectedPosts.forEach(slug => {
      const postPath = path.join(SITE_DIR, `${slug}.html`);
      expect(fs.existsSync(postPath)).toBe(true);
    });
  });

  test('generates tool pages', () => {
    const tools = ['quiz.html', 'boersenquiz.html', 'handelsplan.html'];
    tools.forEach(tool => {
      expect(fs.existsSync(path.join(SITE_DIR, tool))).toBe(true);
    });
  });

  test('generates legal pages', () => {
    const pages = ['impressum.html', 'datenschutz.html', 'Danke.html'];
    pages.forEach(page => {
      expect(fs.existsSync(path.join(SITE_DIR, page))).toBe(true);
    });
  });

  test('generates 404 page', () => {
    expect(fs.existsSync(path.join(SITE_DIR, '404.html'))).toBe(true);
  });

  test('generates sitemap.xml', () => {
    const sitemapPath = path.join(SITE_DIR, 'sitemap.xml');
    expect(fs.existsSync(sitemapPath)).toBe(true);
    const content = fs.readFileSync(sitemapPath, 'utf8');
    expect(content).toContain('<?xml');
    expect(content).toContain('<urlset');
  });

  test('copies static assets (CSS, JS, images)', () => {
    expect(fs.existsSync(path.join(SITE_DIR, 'assets', 'css', 'base.css'))).toBe(true);
    expect(fs.existsSync(path.join(SITE_DIR, 'assets', 'js', 'slider.js'))).toBe(true);
    expect(fs.existsSync(path.join(SITE_DIR, 'assets', 'images', 'buchcover.png'))).toBe(true);
  });

  test('copies robots.txt', () => {
    expect(fs.existsSync(path.join(SITE_DIR, 'robots.txt'))).toBe(true);
  });

  test('copies CNAME', () => {
    expect(fs.existsSync(path.join(SITE_DIR, 'CNAME'))).toBe(true);
  });

  test('generates bonus and workbook pages', () => {
    expect(fs.existsSync(path.join(SITE_DIR, 'Bonus.html'))).toBe(true);
    expect(fs.existsSync(path.join(SITE_DIR, 'Bonus', 'Glossar.html'))).toBe(true);
    expect(fs.existsSync(path.join(SITE_DIR, 'workbook.html'))).toBe(true);
  });

  test('generates landing page', () => {
    expect(fs.existsSync(path.join(SITE_DIR, 'Anfaengerfehler.html'))).toBe(true);
  });
});
