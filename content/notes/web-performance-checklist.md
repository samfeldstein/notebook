---
title: Web Performance Checklist
tags:
  - web-development
  - web-performance
updated: 2024-12-27
---

- If updating an existing site, [measure current peformance](measure-web-performance.md) so you can compare.
- Use component architecture with scoped styles and scripts.
- Inline styles and scripts.
- [Optimize fonts](how-to-optimize-web-fonts.md).
- [Optimize images](how-to-optimize-web-images.md).
- Cache assets in the browser using HTTP headers.
- [Prefetch/prerender links and assets](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/speculationrules).
	- For a small site, manually adding `rel="prefetch"` is easiest. You can also use speculation rules, but those aren't widely supported yet.
	- You can also use Astro's `Prefetch` component.
- [Jampack](jampack.md) it if necessary.
	- If I'm building with Astro or 11ty, this seems a little redundant. It does some additional image compression which could save you quite a few bytes if you have a lot of images.
- [Measure](measure-web-performance.md).

## Resources

- [MDN Web Performance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance)