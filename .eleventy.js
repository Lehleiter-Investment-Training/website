module.exports = function(eleventyConfig) {
  // Blog collection sorted by date (newest first)
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.njk")
      .filter(item => item.url !== "/blog.html")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  // German date format filter
  eleventyConfig.addFilter("dateFormat", function(date) {
    if (!date) return "";
    return new Date(date).toLocaleDateString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  });

  // ISO date filter for schema.org
  eleventyConfig.addFilter("isoDate", function(date) {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  });

  // Passthrough file copies
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/blog/images");
  eleventyConfig.addPassthroughCopy("src/bonus/downloads");
  eleventyConfig.addPassthroughCopy("src/workbook/downloads");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Passthrough for legacy PDFs
  eleventyConfig.addPassthroughCopy({
    "src/assets/downloads/*.pdf": "/"
  });

  // Watch targets
  eleventyConfig.addWatchTarget("src/assets/css/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
