// https://www.11ty.dev/docs/languages/webc/#using-template-syntax-to-generate-content

// export default function () {
//   return {
//     // I don't THINK this is necessary, but leaving it here for now just in case.
//     // https://www.11ty.dev/docs/environment-vars/#setting-your-own
//     // We set this variable with this terminal command: PROD_MODE=production npx @11ty/eleventy // You may need to do this
//     environment: process.env.PROD_MODE || "development",
//   };
// }

export const site = {
  title: "Eleventy Foam Template",
  description: "An Eleventy site that works with the Foam VS Code extension.",
  url: "https://eleventy-foam-template.netlify.app/",
};
