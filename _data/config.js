// let siteUrl = "https://eleventy-foam-template.netlify.app/";

// Set url for development environment. If this isn't set, relative links won't work in development.
// Also see: https://www.11ty.dev/docs/environment-vars/#eleventy-supplied
// MAY BE REDUNDANT NOW GIVEN MARKDOW-IT PLUGIN FOR RELATIVE LINKS
// if (process.env.ELEVENTY_RUN_MODE !== "build") {
//   siteUrl = "http://localhost:8080/";
// }

// Information about your site (required)
export const site = {
  title: "Sam Feldstein's Notebook",
  description:
    "Sam Feldstein's digital notebook. Sam is a frontend developer from Bondurant, IA.",
  url: "https://sam-feldstein-notebook.netlify.app",
};

// Information about you (optional)
export const author = {
  name: "Sam Feldstein",
  email: "samuelfeldstein@proton.me",
  url: "https://samfeldstein.xyz",
};
