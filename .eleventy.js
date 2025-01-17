// https://github.com/11ty/eleventy/releases/tag/v3.0.0-beta.1
// https://www.11ty.dev/blog/canary-eleventy-v3/#new-features-and-a-short-upgrade-guide

import htmlmin from "html-minifier-terser";
import CleanCSS from "clean-css";
import markdownIt from "markdown-it";
import markdownItReplaceLink from "markdown-it-replace-link";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { DateTime } from "luxon";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import mathjaxPlugin from "eleventy-plugin-mathjax";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    // Pass through the folders' contents, but not the folders themselves
    "static/icons/*": "/",
    "static/fonts/*": "/",
    "static/scripts/*": "/",
    "static/*.yml": "/",
    "static/*images/*": "/",
    "static/*.txt": "/"
  });

  // TEMPLATE FORMATS
  eleventyConfig.addTemplateFormats("html, njk");

  eleventyConfig.addCollection("notes", function (collectionApi) {
    // In dev, these seem to be sorted ascending automatically, but doesn't work on live site
    return collectionApi.getFilteredByGlob("content/notes/*.md").sort(function (a, b) {
      return a.date - b.date; // sort by date - descending
    });
  });

  // PLUGINS
  // Syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);
  // Mathjax
  eleventyConfig.addPlugin(mathjaxPlugin);
  // RSS Feed
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/feed.xml",
    collection: {
      name: "notes",
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "Sam Feldstein's Notebook",
      subtitle: "Sam Feldstein's digital notebook.",
      base: "https://notebook.samfeldstein.xyz/",
      author: {
        name: "Sam Feldstein",
        email: "samuelfeldstein@proton.me", // Optional
      }
    }
  });

  // Strip .md extension from links
  eleventyConfig.addTransform("md-link", function (content) {
    if (this.page.outputPath?.endsWith(".html")) { // Only for HTML output
      return content.replace(/\.md\b/g, ""); // Remove .md extension
    }
    return content;
  });


  // Transform wiklinks
  eleventyConfig.addTransform("wikilink", function (content) {
    if (this.page.outputPath?.endsWith(".html")) {
      return (
        content
          // Remove outer brackets
          // Credit: https://github.com/juanfrank77/foam-eleventy-template/blob/master/.eleventy.js
          .replace(/(\[+(<a.*?<\/a>)\]+)/g, "$2")
          // Remove text before pipe (eg [[link|text]]>>>[[text]])
          // Credit: Claude.ai
          .replace(/<a[^>]*>(.*?)<\/a>/g, (match, text) => {
            const pipeText = text.match(/\|(.+)/)?.[1]?.trim();
            return pipeText ? match.replace(text, pipeText) : match;
          })
      );
    }
    return content;
  });

  // May be able to use eleventy.on here instead
  if (process.env.ELEVENTY_RUN_MODE === "build") {
    // Minify html
    eleventyConfig.addTransform("htmlmin", function (content) {
      if ((this.page.outputPath || "").endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
        });

        return minified;
      }
      // If not an HTML output, return content as-is
      return content;
    });

    // Exclude private notes
    // https://www.11ty.dev/docs/config-preprocessors/
    eleventyConfig.addPreprocessor("privateNotes", "*", (data, content) => {
      if (data.private && process.env.ELEVENTY_RUN_MODE === "build") {
        return false;
      }
    });
  };

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
