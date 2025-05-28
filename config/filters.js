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

  // Get all tags, filter out unwanted ones, and format with spaces
  ["getAllTags", function (collection) {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => {
        // Filter out unwanted tags and format
        if (["all", "notes"].indexOf(tag) === -1) {
          const formattedTag = tag.replace(/-/g, ' ');
          tagSet.add(formattedTag);
        }
      });
    }
    return Array.from(tagSet).sort();
  }],

  // Keep formatTag separate for individual use
  ["formatTag", function (tag) {
    return tag.replace(/-/g, ' ');
  }],

  // Filter out specific tags from tag list
  ["filterTagList", function filterTagList(tags) {
    return (tags || [])
      .filter((tag) => ["all", "notes"].indexOf(tag) === -1)
      .sort();
  }],
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