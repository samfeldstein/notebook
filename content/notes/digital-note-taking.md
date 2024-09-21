---
title: Digital Note Taking
tags: ["knowledge-management", "zettelkasten"]
---

I originally conceived of a blog page for my website, but much as I like reading blogs, blogging does not come naturally to me. Also, if you have a subject you want to interrogate, what's the point in writing a single essay about it? That assumes you'll draw a definitive conclusion. I think a better approach is the living document: a record of your thoughts on a subject, updated as those thoughts come to you.

The other thing I like about this idea is that it aims your thinking at the future. When you write about a subject, the question is, "What can I learn from this, and how can I best explain it to myself so I can use it in the future?

This isn't my brilliant idea by the way. What I've just described is a [digital garden](https://maggieappleton.com/garden-history?ref=ideasurg.pub). I just prefer to think of it as a notebook. I built mine with [Foam](https://foambubble.github.io/foam/).

## Private Notes?

I thought about filtering out private notes using frontmatter so I could keep everything in one place, but that's kind of pointless since they'd still show up on GitHub. I could make the repository private. Or what I could do is tell git to ignore my notebook and then make the notebook a private repo. Cause the main reason to keep my site's repo publich to share the architecture. The content doesn't need to be there. 

But will that work? Because if I don't include the notebook in git, it won't be pushed to the repo and won't be included in the site.

There's probably some sophisticated solution for this, but the simplest is probably just keep my private, like journal entries, totally separate. You could make a separate folder in your notes folder called `private`, then add that to gitignore. That way you can still connect everything in Foam, but if somebody tries to click through on the site they'll get a 404. It's an idea.

You can [exclude content entries from being built in Astro](https://docs.astro.build/en/guides/routing/#excluding-pages) by prefixing with an underscore. Definitely a solution, but I don't want to have to remember to do that. I'd rather have that condition in a frontmatter, where I can see it.

Can also [exclude them in Foam](https://foambubble.github.io/foam/user/features/link-reference-definitions#ignoring-files), which is probably better, because you'd rather do that sooner than later.

## Publishing

Requirements:

- Rendered backlinks
- Tags
- Search
- Fast
- Yaml frontmatter

**To do:**

- [ ] Change updated to git author date. Then have a created date.

### Publishing Tools

- [Obsidian Publish](https://obsidian.md/publish)
- [WikiBonsai](https://wikibonsai.io)
  - [WikiBonsai with Astro](https://astro-wikibonsai.netlify.app)
- [MindStone](https://github.com/TuanManhCao/digital-garden)

### Examples

- [Andy Matuschak's](https://notes.andymatuschak.org/About_these_notes).

## Tools

- [Obsidian](https://obsidian.md)
- [Zettelkasten](https://zettelkasten.de) (software)
- [Tools for digital gardeners](https://github.com/MaggieAppleton/digital-gardeners).

## Resources

- [Andy Matuschak's personal site](https://andymatuschak.org)
