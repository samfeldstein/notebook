// https://www.11ty.dev/docs/languages/webc/#using-template-syntax-to-generate-content

export default function () {
  return {
    // https://www.11ty.dev/docs/environment-vars/#setting-your-own
    // Terminal command: PROD_MODE=production npx @11ty/eleventy
    environment: process.env.PROD_MODE || "development",
  };
}

export const site = {
  title: "Eleventy Foam Template",
  description: "An Eleventy site that works with the Foam VS Code extension.",
  url: "https://eleventy-foam-template.netlify.app/",
};
