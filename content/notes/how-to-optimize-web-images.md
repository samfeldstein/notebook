---
title: How to Optimize Web Images
tags: 
  - web-development
  - web-performance
created: 2024-12-27
updated: 2024-12-27
---

- Compress.
	- [SVGOMG](https://jakearchibald.github.io/svgomg/)
	- [Squoosh](https://squoosh.app)
- Serve different formats and sizes using `<srcset>`.
	- The Astro [`<Image/>`](https://docs.astro.build/en/reference/modules/astro-assets/#image-) component automatically generates image variants. [Jampack](https://jampack.divriots.com/features/optimize-images/) has a similar feature.
	- Check your work with [RespImageLint](https://ausi.github.io/respimagelint/).
- Use [`fetchPriority`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority) attribute for critical images.
- [Preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload) critical images.
- Lazy-load non-critical images.
- Fade them in.