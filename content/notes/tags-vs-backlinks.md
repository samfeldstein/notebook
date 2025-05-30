---
title: Tags vs Backlinks
tags:
  - digital-notebooks
---

I started thinking about this because Obsidian Publish doesn't render tags if they're in a note's frontmatter. So then I started thinking about the potential downsides of [putting them in the body](notes/markdown-frontmatter.md). But then I was reading the Foam documentation (I intend to eventually move my notes to my main site using Foam) and it mentioned that some people use [backlinks instead of tags](https://foambubble.github.io/foam/user/features/tags.html#using-backlinks-in-place-of-tags). That sounded strange, but when I thought about it, I realized that you actually *could* replace tags with backlinks if you wanted. The question is whether it's a good idea.

I don't think it is, because tags and backlinks served similar but distinct purposes. Tags are for broad categorization. Backlinks forge an explicit relationship between two notes.

## Tags

Tags group notes under a broad category. They're essentially a better version of folders, at least from a GUI perspective. If you want to see all your cookie recipes, you don't have to hunt around for your `cookies` folder. You just search for `#cookies`.

The other reason tags are better than folders is that a note can only be in one folder at at time. But if we think of tags as folders, a note can be in as many folders as you want.

### Nesting

One thing that tags do that backlinks can't is nesting. But that only matters if you think nesting is a good idea, and [I'm not sure it is](notes/nesting-tags.md).

## Backlinks

By contrast, backlinks draw a direct line from one note to another. They're more sophisticated than tags because they're more specific.

Tags come in handy when a note belongs to some obvious category (eg `#recipes`). But connecting notes via an obvious relationship is actually contrary to a notebook's primary purpose. We aren't trying to group things together by self-evident similarities. **We're trying to tie ideas together, even if (especially if?) those ideas are seemingly disparate.**

## Summary

Tags are broad, backlinks are specific. They serve different purposes, so I don't think one can replace the other. You *could* replace tags with backlinks, but I don't want to risk diluting my backlinks with notes that are only broadly related. **With backlinks, specificity is the point**.
