export default function (eleventyConfig) {
  // Main notes collection
  eleventyConfig.addCollection("notes", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/notes/*.md");
  });

  // Sorted notes collection for RSS feed
  eleventyConfig.addCollection("notesFeed", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/notes/*.md");
  });
}