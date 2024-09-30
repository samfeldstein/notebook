---
title: Foam and Astro
tags: ["foam","astro"]
---

## Problems

### File structure

Probably the biggest obstacle. Astro has a content folder for collections, which lives separtely from the `pages/` folder, where everything else is stored. If you want to link to a `content/` item from the `pages` folder, Foam doesn't understand how to do that. So no backlink for you.

I haven't thought *too* hard about how to solve this yet, but offhand it seems like the easiest thing would be to just not use content collections. I don't know how feasible that is.

### Backlinks

Astro doesn't know what to do with wikilinks. But we figured this out with Eleventy, so should be doable.

[WikiBonsai](https://github.com/wikibonsai/astro-wikibonsai/tree/main) seems promising, but it has a custom frontmatter syntax (among other things) and I don't have the energy to learn another thing.

