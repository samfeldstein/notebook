import htmlmin from "html-minifier-terser";

// Array of transforms to add to Eleventy
// Each transform is an array: [name, function]
const transforms = [
  // Strip .md from internal links. Have to use these in Obsidian since I'm not using wikilinks
  ["md-link", function (content) {
    if (this.page.outputPath?.endsWith(".html")) {
      return content.replace(/\.md\b/g, "");
    }
    return content;
  }],

  // Minify HTML
  ["htmlmin", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true, // Minify inline JavaScript
      });
      return minified;
    }
    // If not an HTML output, return content as-is
    return content;
  }]
];

// Function to add all transforms to Eleventy config
export default function (eleventyConfig) {
  // Loop through each transform in the array
  transforms.forEach(([name, fn]) => {
    // Add transform: [0] = name, [1] = function
    eleventyConfig.addTransform(name, fn);
  });
}