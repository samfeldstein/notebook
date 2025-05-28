export default function (eleventyConfig) {
  eleventyConfig.addCollection("notes", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/notes/*.md");
  });
}