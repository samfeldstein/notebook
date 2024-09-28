---
title: How to Improve Website Performance
tags: ["web-development"]
---

- Use component architecture with scoped styles and scripts
- Inline styles and scripts
- Cache assets, either on the server, with a service worker, or both
- Use modern image formats with `srcset`
- Preload assets
- [Prefetch/prerender links and assets](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/speculationrules)

## Speculation with Cloudflare

- Cloudflare refuses resources fetched with speculation rules. Tried turning off [Speed Brain](https://developers.cloudflare.com/speed/optimization/content/speed-brain/). Didn't fix anything, it just needs some time.
  - https://community.cloudflare.com/t/cdn-cgi-speculation-applies-even-if-disabled/714033/4

- Disable caching.
- Turn off speculation
- Purge cache
- Try again
- If it works, add a custom headers file.

I think the issue is that I had Cloudflare caching everything, and that included the Speed Brain file.

I followed the instructions in that thread above and the issue persists. I really wish Cloudflare wouldn't enable these features by default, without telling me. Maybe consider switching to Netlify or Digital Ocean.

