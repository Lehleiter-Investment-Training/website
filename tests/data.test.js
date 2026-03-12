const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

describe('Data Files', () => {
  describe('site.json', () => {
    let siteData;

    beforeAll(() => {
      siteData = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/_data/site.json'), 'utf8'));
    });

    test('is valid JSON with required fields', () => {
      expect(siteData.title).toBeDefined();
      expect(siteData.author).toBeDefined();
      expect(siteData.url).toBeDefined();
      expect(siteData.description).toBeDefined();
    });

    test('has valid URL format', () => {
      expect(siteData.url).toMatch(/^https:\/\//);
    });

    test('has Amazon book URLs', () => {
      expect(siteData.amazonBookUrl).toMatch(/^https:\/\/www\.amazon/);
      expect(siteData.amazonWorkbookUrl).toMatch(/^https:\/\/www\.amazon/);
    });

    test('has Brevo form action URL', () => {
      expect(siteData.brevoFormAction).toMatch(/^https:\/\//);
    });

    test('has social media links', () => {
      expect(siteData.social).toBeDefined();
      expect(siteData.social.linkedin).toMatch(/^https:\/\//);
      expect(siteData.social.instagram).toMatch(/^https:\/\//);
      expect(siteData.social.telegram).toMatch(/^https:\/\//);
    });

    test('has lead magnet PDF path', () => {
      expect(siteData.leadMagnetPdf).toBeDefined();
      expect(siteData.leadMagnetPdf).toMatch(/\.pdf$/);
    });
  });

  describe('navigation.json', () => {
    let navData;

    beforeAll(() => {
      navData = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/_data/navigation.json'), 'utf8'));
    });

    test('is valid JSON with main and footer nav', () => {
      expect(Array.isArray(navData.main)).toBe(true);
      expect(Array.isArray(navData.footer)).toBe(true);
    });

    test('main navigation has required items', () => {
      expect(navData.main.length).toBeGreaterThanOrEqual(5);
      const labels = navData.main.map(item => item.label);
      expect(labels).toContain('Das Buch');
      expect(labels).toContain('Blog');
      expect(labels).toContain('Tools');
    });

    test('all nav items have label and url', () => {
      navData.main.forEach(item => {
        expect(item.label).toBeDefined();
        expect(item.url).toBeDefined();
      });
      navData.footer.forEach(item => {
        expect(item.label).toBeDefined();
        expect(item.url).toBeDefined();
      });
    });

    test('Tools has children (submenu)', () => {
      const toolsItem = navData.main.find(item => item.label === 'Tools');
      expect(toolsItem.children).toBeDefined();
      expect(toolsItem.children.length).toBeGreaterThanOrEqual(3);
    });

    test('has CTA item (Starterkit)', () => {
      const ctaItem = navData.main.find(item => item.isCta === true);
      expect(ctaItem).toBeDefined();
      expect(ctaItem.label).toContain('Starterkit');
    });

    test('footer has legal pages (Impressum, Datenschutz)', () => {
      const footerLabels = navData.footer.map(item => item.label);
      expect(footerLabels).toContain('Impressum');
      expect(footerLabels).toContain('Datenschutz');
    });
  });
});

describe('Eleventy Configuration', () => {
  let eleventyConfig;

  beforeAll(() => {
    eleventyConfig = require(path.join(ROOT, '.eleventy.js'));
  });

  test('exports a function', () => {
    expect(typeof eleventyConfig).toBe('function');
  });

  test('returns correct directory config', () => {
    const mockConfig = {
      addCollection: jest.fn(),
      addFilter: jest.fn(),
      addPassthroughCopy: jest.fn(),
      addWatchTarget: jest.fn()
    };

    const result = eleventyConfig(mockConfig);
    expect(result.dir.input).toBe('src');
    expect(result.dir.output).toBe('_site');
    expect(result.dir.includes).toBe('_includes');
    expect(result.dir.data).toBe('_data');
  });

  test('registers date filters', () => {
    const filters = {};
    const mockConfig = {
      addCollection: jest.fn(),
      addFilter: jest.fn((name, fn) => { filters[name] = fn; }),
      addPassthroughCopy: jest.fn(),
      addWatchTarget: jest.fn()
    };

    eleventyConfig(mockConfig);

    expect(filters.dateFormat).toBeDefined();
    expect(filters.isoDate).toBeDefined();

    // Test German date format
    const germanDate = filters.dateFormat(new Date('2024-06-15'));
    expect(germanDate).toContain('2024');
    expect(germanDate).toContain('Juni');

    // Test ISO date format
    const isoDate = filters.isoDate(new Date('2024-06-15'));
    expect(isoDate).toBe('2024-06-15');

    // Test null handling
    expect(filters.dateFormat(null)).toBe('');
    expect(filters.isoDate(null)).toBe('');
  });

  test('registers passthrough copies for assets', () => {
    const copies = [];
    const mockConfig = {
      addCollection: jest.fn(),
      addFilter: jest.fn(),
      addPassthroughCopy: jest.fn(copy => copies.push(copy)),
      addWatchTarget: jest.fn()
    };

    eleventyConfig(mockConfig);

    expect(copies).toContain('src/assets/images');
    expect(copies).toContain('src/assets/js');
    expect(copies).toContain('src/assets/css');
    expect(copies).toContain('src/robots.txt');
    expect(copies).toContain('src/CNAME');
  });

  test('configures supported template formats', () => {
    const mockConfig = {
      addCollection: jest.fn(),
      addFilter: jest.fn(),
      addPassthroughCopy: jest.fn(),
      addWatchTarget: jest.fn()
    };

    const result = eleventyConfig(mockConfig);
    expect(result.templateFormats).toContain('njk');
    expect(result.templateFormats).toContain('html');
    expect(result.templateFormats).toContain('md');
  });
});
