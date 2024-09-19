// https://www.11ty.dev/docs/languages/webc/#using-template-syntax-to-generate-content
// export default function () {
//   return {
//     /* - https://www.11ty.dev/docs/environment-vars/#setting-your-own
//        - We set this variable with this terminal command: PROD_MODE=production npx @11ty/eleventy
//        - You may need to run this command in your own terminal for this to work
//     */
//     environment: process.env.PROD_MODE || "development",
//   };
// }

// ===

let url = "http://localhost:8080/";

/*

When the site builds, we switch the url to your site url so the <base> element url is correct. Relative links won't work <base> isn't set.

Help: https://www.11ty.dev/docs/environment-vars/#eleventy-supplied

*/
if (process.env.ELEVENTY_RUN_MODE === "build") {
  url = "https://eleventy-foam-template.netlify.app/";
}

export const site = {
  title: "Eleventy Foam Template",
  description: "An Eleventy site that works with the Foam VS Code extension.",
  url: url,
};
