import CleanCSS from "clean-css";
import { DateTime } from "luxon";

// Array of filters to add to Eleventy
const filters = [
  // Minify CSS code
  ["cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  }],

  // Convert dates to readable format
  ["readableDate", function (dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toLocaleString(DateTime.DATE_FULL);
  }],

  // Return all the tags used in a collection
  ["getAllTags", function (collection) {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    }
    return Array.from(tagSet).sort();
  }],

  // Filter out specific tags from tag list
  ["filterTagList", function filterTagList(tags) {
    return (tags || [])
      .filter((tag) => ["all", "notes"].indexOf(tag) === -1)
      .sort();
  }]
];

// Function to add all filters to Eleventy config
export default function (eleventyConfig) {
  // Loop through each filter in the array
  filters.forEach(filter => {
    const [name, fn, options] = filter;

    // Check if filter has options
    if (options) {
      // Add filter with options
      eleventyConfig.addFilter(name, fn, options);
    } else {
      // Add filter without options
      eleventyConfig.addFilter(name, fn);
    }
  });
}