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

My notebook subdomain contains these cache-control headers:

```
private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0
```

These are for my main site:

```
public, max-age=0, must-revalidate
```

I'm sure this is the problem. What I don't understand is why they're different. Shouldn't they be the same since it all falls under the same domain (samfeldstein.xyz)? 

The only difference between the two is the static site generator I use and how I deploy them. Could this be the issue?