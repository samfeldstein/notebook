// https://github.com/11ty/eleventy/releases/tag/v3.0.0-beta.1
// https://www.11ty.dev/blog/canary-eleventy-v3/#new-features-and-a-short-upgrade-guide

// Import functions from other config files
import plugins from './config/plugins.js';
import tranforms from './config/tranforms.js';
import filters from './config/filters.js';
import collections from './config/collections.js';
import feed from './config/feed.js';

export default function (eleventyConfig) {
  // Call functions from other config files
  plugins(eleventyConfig);
  tranforms(eleventyConfig);
  filters(eleventyConfig);
  collections(eleventyConfig);
  feed(eleventyConfig);

  // Pass static content to output
  eleventyConfig.addPassthroughCopy({
    // Pass through the folders' contents, but not the folders themselves
    "static/fonts": "fonts",
    "static/icons/*": "/",
    "static/scripts/*": "/",
    "static/*.yml": "/",
    "static/*images/*": "/",
    "static/*.txt": "/",
  });

  // Copy any .pdf file to `_site`, via Glob pattern
	// Keeps the same directory structure.
	eleventyConfig.addPassthroughCopy("content/notes/assets/**/*.pdf");

  // Add layout aliases
  eleventyConfig.addLayoutAlias("base", "base.njk");

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      layouts: "../_includes/layouts",
      data: "../_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}