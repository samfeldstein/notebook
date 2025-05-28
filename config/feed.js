import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/feed.xml",
    collection: {
      name: "notesFeed",
      limit: 10, // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "Sam Feldstein's Notebook",
      subtitle: "Sam Feldstein's notebook.",
      base: "https://notes.samfeldstein.xyz/",
      author: {
        name: "Sam Feldstein",
        email: "sam@samfeldstein.xyz", // Optional
      }
    }
  });
}
