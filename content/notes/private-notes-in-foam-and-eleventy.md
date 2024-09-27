---
title: Private Notes in Foam and Eleventy
tags: ["foam","eleventy"]
---

**Problem:** I want to keep some notes private, but I want to keep them with my public notes so I can link to them in Foam.

**Solution:**  Exclude private notes from git and Eleventy's build output.

## Method One: Exclude a Private Folder from Git

Put your private notes in a `private` folder, add that folder to `.gitignore`.

In Eleventy, files added to `.gitignore` are [also ignored by Eleventy](https://www.11ty.dev/docs/ignores/), so they won't show up in the build output.

I've tested this on the local server and live site. It works on both.

### Downsides

- This method is rigid. Let's say you want a recipe to be private for some reason. Do you put in the `private` folder or the `recipes` folder? You can't have it both ways. If you need this kind of flexibility, Method Two is the answer.
  - A solution might be to not use folders at all, which is what I'm already doing. Then the private folder exists solely to hide private notes. From there, they can be categorized with tags however we want.
  - Then to solve the linking issue, we can transform them somehow based on whether the link includes "private?" No, because of relative links. So do it based on urls maybe?
  - This might be something to take care of the Cloudflare end, but I'd rather not.
  - I'd think you should be able to change the content of the link at build time so they all point to our custom private 404 page.
  - This works for me. Don't know about other people. For the template, might have to figure out a more flexible solution.
  - Maybe use draft method as a contingency. They'd still end up on GitHub, but at least it wouldn't show up on the main site.
- Private notes won't render on your development server. Again, Method Two solves this.

## Method Two: Use Frontmatter to Exclude Files from Build

Filter notes marked "private" with a layout. See [Draft Posts Using Computed Data](https://www.11ty.dev/docs/quicktips/draft-posts/) on the Eleventy site.

The advantage to this method is that it allows you to view private notes on the local site, while excluding them from the public site.

Works on the local site, but seemed to break the Cloudflare build process. The log mentioned `error code 1` but did not give details.

### Downsides

- Private notes are still pushed to GitHub. This only matters if your repo is public.

But how do we exclude this from git? You can't exclude the whole content folder, right? Because then everything would just disappear from your site, right?

Adding `notes/content` to `.gitignore` doesn't work, because that excludes `notes/content` from the build output.

Is there a way to mark a folder as private in git?

Can we reverse the architecture so that `content` is above the site infrastructure. Then we just push the site infrastructure.

The only thing that *has* to end up on github is the _site folder. So can we isolate that somehow? Or maybe the inverse of that. Isolate content?

Why does the entire site have to be rebuilt on the cloudflare end? Why can't it be built here and then served? 

Cause that's an extra step. 

Again, the best case scenario is is notes marked private never made it to github at all. So how do we exclude notes from git based on frontmatter?

Excluding them from site output isn't enough, because they'll still show up in the content folder on github.

Is there a way to use tags? Because those are like folders, right?

That's a non-answer. Doesn't address the github issue.

If you could use frontmatter to somehow define what to gitignore, that would be best, because then 11ty wouldn't built it by defualt.

It's probably best to solve this at an architecture leve, if we can. There's no real reason to have content in the repo, after all.

Well no, yes there. Is Cloudlfare needs access to it in order to trigger a build.

Solution is build manually on your end?

Can confirm that this is an issue, because drafts show up in [11ty Base Blog repo](https://github.com/11ty/eleventy-base-blog/blob/851eafdc4c3a612142e0e6ae84f54cb0f0eb98b1/content/blog/fifthpost.md).

## Method Three: Dynamically Ignore Private Files

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

From ChatGPT: 

> Git itself can't directly filter files based on their frontmatter content. However, you can use a pre-commit hook or a script to check the frontmatter of Markdown files and then add them to .gitignore or prevent them from being committed.
> 
> For example, you could:
> 
> Write a script (in JavaScript, Python, etc.) that parses Markdown files, checks for a specific frontmatter key, and moves the matching files to .gitignore.
Use a Git pre-commit hook to run this script automatically before each commit.

## Other Issues

Links to private notes will still render and the user will get a 404. Not a very nice experience, and I can't imagine search engines love it when your site links to a bunch of missing pages.

**Solution:** Turn links to private notes into plain text when the site is built.

I don't know how that would would work with relative links, since "private" wouldn't necessarily show up in the url.

So maybe method two is the more flexible method here. You could tell Eleventy to turn links to private notes into plain text.

- User gets a 404. Customize for private links?
- You can't see your notes on the local site.
