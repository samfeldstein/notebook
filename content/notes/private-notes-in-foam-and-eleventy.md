---
title: Private Notes in Foam and Eleventy
tags: ["foam","eleventy"]
updated: 2024-10-10
---

**Problem:** I want to keep some notes private, but I want to keep them with my public notes so I can link to them in Foam.

**Solution:** Exclude private notes from git and Eleventy's build output.

## Method One: Exclude a Private Folder from Git

Put your private notes in a `private` folder, add that folder to `.gitignore`.

In Eleventy, files added to `.gitignore` are [also ignored by Eleventy](https://www.11ty.dev/docs/ignores/), so they won't show up in the build output.

This is the method I use for this site.

### Downsides

This method is rigid. Let's say you want a recipe to be private for some reason. Do you put it in the `private` folder or the `recipes` folder? You can't have it both ways. If you need this kind of flexibility, Method Two is the answer.

Also, private notes won't appear on your development server. Again, Method Two solves this.

## Method Two: Filter Private Notes With Frontmatter

See [Draft Posts Using Computed Data](https://www.11ty.dev/docs/quicktips/draft-posts/) on the Eleventy site.

The advantage to this method is that it allows you to view private notes on the local site, while excluding them from the public site.

It's also more flexible, because the notes aren't locked into a `private` folder.

### Downsides

**Private notes are still pushed to GitHub**. This only matters if your repo is public.

## Method Three: Dynamically Ignore Private Files With Frontmatter

This method seems to be exactly what we want, but is only available in the [pre-release version of Eleventy](https://www.11ty.dev/docs/config-preprocessors/):

```js
  eleventyConfig.addProcessor("private", "njk,md", (data, content) => {
    // If `private` is truthy in the template’s Data Cascade, ignore the file.
    if (data.private) {
      return false;
    }
    return content;
  });
```

## Other Issues

Links to private notes will still render and the user will get a 404. Not a very nice experience, and I can't imagine search engines love it when your site links to a bunch of missing pages.

Maybe you could add a transform that turns links to private notes into plain text when the site is built. But I don't know how you would distinguish links to private notes from any other link.
