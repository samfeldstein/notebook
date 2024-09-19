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

const title = "Eleventy Foam Template";
const description =
  "An Eleventy site that works with the Foam VS Code extension.";
let url = "https://eleventy-foam-template.netlify.app/";

// Set url for dev environment. Used in <base> element in head.njk
// Also see: https://www.11ty.dev/docs/environment-vars/#eleventy-supplied
if (process.env.ELEVENTY_RUN_MODE !== "build") {
  url = "http://localhost:8080/";
}

export const site = {
  title: title,
  description: description,
  url: url,
};
