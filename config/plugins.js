import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import mathjaxPlugin from 'eleventy-plugin-mathjax';

// Array of plugins to add to Eleventy
// Plugins can be simple (just the plugin) or arrays [plugin, {options}]
const plugins = [
  syntaxHighlight, // Plugin without options
  mathjaxPlugin,
];

// Function to add all plugins to Eleventy config
export default function (eleventyConfig) {
  // Loop through each plugin in the array
  plugins.forEach(plugin => {
    // Check if plugin is an array (has options)
    if (Array.isArray(plugin)) {
      // Add plugin with options: [0] = plugin, [1] = options
      eleventyConfig.addPlugin(plugin[0], plugin[1]);
    } else {
      // Add plugin without options
      eleventyConfig.addPlugin(plugin);
    }
  });
}