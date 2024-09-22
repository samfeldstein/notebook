---
title: Private Notes in Foam and Eleventy
tags: ["foam","eleventy"]
---

**Problem:** I want to keep some notes private, but I want to keep them with my public notes so I can link to them in Foam.

**Solution:**  Exclude private notes from Eleventy's build output and git commits.

## Method One: `.gitignore`

In Eleventy, files added to `.gitignore` are [also ignored by Eleventy](https://www.11ty.dev/docs/ignores/), so they won't show up in the build output.

I've tested this on the local server and live site. It works on both.

### Downsides

This method is less flexible. Lets say you want a recipe to be private. Do you put in the private folder or the recipes folder? You can't have it both ways. What you do is mark it private in its frontmatter and exclude it that way.

Links to private notes will still render and the user will get a 404. Not a very nice experience, and I can't imagine search engines love it when your site links to a bunch of missing pages.

**Solution:** Turn links to private notes into plain text when the site is built.

I don't know how that would would work with relative links, since "private" wouldn't necessarily show up in the url.

So maybe method two is the more flexible method here. You could tell Eleventy to turn links to private notes into plain text.

- User gets a 404. Customize for private links?
- You can't see your notes on the local site.

## Method Two: "Private" Frontmatter Property

Filter notes marked "private" with a layout. See [Draft Posts Using Computed Data](https://www.11ty.dev/docs/quicktips/draft-posts/) on the Eleventy site.

The advantage to this method is that it allows you to view private notes on the local site, while excluding them from the public site.

Seems to work fine.

But how do we exclude this from git? You can't exclude the whole content folder, right? Because then everything would just disappear from your site, right?

This only matters if you're repository is public.

Adding `notes/content` to `.gitignore` doesn't work, because then Cloudflare can't access it.
