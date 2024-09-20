// https://github.com/11ty/eleventy/releases/tag/v3.0.0-beta.1
// https://www.11ty.dev/blog/canary-eleventy-v3/#new-features-and-a-short-upgrade-guide

import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import pluginWebc from "@11ty/eleventy-plugin-webc";
import htmlmin from "html-minifier-terser";
import CleanCSS from "clean-css";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "static/icons/*": "/",
  });

  //www.11ty.dev/docs/languages/webc/
  eleventyConfig.addPlugin(pluginWebc, {
    // https://www.11ty.dev/docs/languages/webc/#global-no-import-components
    components: "_includes/components/**/*.webc",
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
  }

  // FILTERS
  // Minify css
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Add layout aliases
  eleventyConfig.addLayoutAlias("base", "base.njk");

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      layouts: "../_includes/layouts",
      // Should be working, because it was working when _data lived in the content folder
      data: "../_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
