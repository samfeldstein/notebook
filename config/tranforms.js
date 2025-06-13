import htmlmin from "html-minifier-terser";

// Array of transforms to add to Eleventy
// Each transform is an array: [name, function]
const transforms = [
  ["md-link", function (content) {
    // Only process HTML output files
    if (this.page.outputPath?.endsWith(".html")) {
      return content
        // Remove .md extension and add leading slash if missing
        .replace(/href="([^"]+)\.md\b/g, (match, link) => {
          // If link doesn't start with / or http, add leading slash
          if (!link.startsWith('/') && !link.startsWith('http')) {
            return `href="/${link}`;
          }
          return `href="${link}`;
        });
    }
    return content;
  }],

  [
  "pdf-link",
  function (content) {
    // Only process HTML output files
    if (this.page.outputPath?.endsWith(".html")) {
      // Find all href attributes linking to .pdf files
      return content.replace(/href="([^"]+\.pdf)"/g, (match, link) => {
        // If the link doesn't start with '/' or 'http', add a leading slash
        if (!link.startsWith('/') && !link.startsWith('http')) {
          return `href="/${link}"`;
        }
        // Otherwise, leave the link unchanged
        return match;
      });
    }
    // For non-HTML files, return content unchanged
    return content;
  }
],

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