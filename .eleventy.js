// https://github.com/11ty/eleventy/releases/tag/v3.0.0-beta.1
// https://www.11ty.dev/blog/canary-eleventy-v3/#new-features-and-a-short-upgrade-guide

// Import functions from other config files
import plugins from './config/plugins.js';
import tranforms from './config/tranforms.js';
import collections from './config/collections.js';
import feed from './config/feed.js';
// Import dependencies
import CleanCSS from "clean-css";
import markdownIt from "markdown-it";
import markdownItReplaceLink from "markdown-it-replace-link";
import { DateTime } from "luxon";

export default function (eleventyConfig) {
  // Call functions from other config files
  plugins(eleventyConfig);
  tranforms(eleventyConfig);
  collections(eleventyConfig);
  feed(eleventyConfig);

  // Pass static content to output
  eleventyConfig.addPassthroughCopy({
    // Pass through the folders' contents, but not the folders themselves
    "static/icons/*": "/",
    "static/fonts/*": "/",
    "static/scripts/*": "/",
    "static/*.yml": "/",
    "static/*images/*": "/",
    "static/*.txt": "/"
  });

  // Exclude private notes from build (files will still show up in git, so we're still using the /private/ folder method)
  // https://www.11ty.dev/docs/config-preprocessors/
  eleventyConfig.addPreprocessor("privateNotes", "*", (data, content) => {
    if (data.private && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });

  let markdownItOptions = {
    html: true,
    replaceLink: function (link, env) {
      const isRelativePattern = /^(?!http|\/).*/;
      const lastSegmentPattern = /[^\/]+(?=\/$|$)/i;
      const isRelative = isRelativePattern.test(link);

      if (isRelative) {
        const hasLastSegment = lastSegmentPattern.exec(env.page.url);
        // If it's nested, replace the last segment
        if (hasLastSegment && env.page.url) {
          return env.page.url.replace(lastSegmentPattern, link);
        }
        // If it's at root, just add the beginning slash
        return env.page.url + link;
      }

      return link;
    },
  };

  let markdownLib = markdownIt(markdownItOptions).use(markdownItReplaceLink);
  eleventyConfig.setLibrary("md", markdownLib);

  // FILTERS
  // Minify css
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Readable Dates
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toLocaleString(DateTime.DATE_FULL);
  });

  // HTML datestrings - used in sitemap
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Return all the tags used in a collection
  eleventyConfig.addFilter("getAllTags", (collection) => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    }
    return Array.from(tagSet).sort();
  });

  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || [])
      .filter((tag) => ["all", "notes"].indexOf(tag) === -1)
      .sort();
  });

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