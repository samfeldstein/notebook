---
title: How to Improve Website Performance
tags: ["web-development"]
---

- Use component architecture with scoped styles and scripts
- Inline styles and scripts
- Cache assets
- Use modern image formats with `srcset`
- Preload assets
- [Prefetch/prerender links and assets](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/speculationrules)

## Prefetch/Preload

### Cloudflare

Cloudflare refuses resources fetched with speculation rules. Tried turning off [Speed Brain](https://developers.cloudflare.com/speed/optimization/content/speed-brain/). Didn't fix it.

I don't know that it's actually *hurting* anything, but I don't like it when Cloudflare injects scripts in my site without me realizing it. Which they do kind of a lot.

Also see: https://community.cloudflare.com/t/cdn-cgi-speculation-applies-even-if-disabled/714033/4

Astro's prefetch script seems to work fine and is very fast, so I'm going to leave everything where it is. But I'm going to publish my notebook with Digital Ocean instead of Cloudflare. I've wanted to try Digital Ocean anyway and this is a good excuse. I realize I'm making the switch without actually knowing if Digital Ocean is better, but I have a very good impression of them from people like Chris Ferdinandi, whoever runs CSS Tricks, and Molly White.

### Digital Ocean

Prefetch works great. Not as fast as the Astro site. You have to hover over a link for some amount of miliseconds before you notice an effect. But good enough.

## Caching

### Cloudflare

Cloud makes it easy to cache assests. Go to Caching>Configuration and find "Browser Cache TTL." I have it set to six months, which means assets are stored in the user's browser for six months.

### Digital Ocean

https://docs.digitalocean.com/products/app-platform/how-to/cache-content/

> By default, App Platform deploys static sites with Cache-Control headers set to cache for 24 hours on CDN edge servers and 10 seconds in web browsers. If you redeploy the app, any cached content is invalidated across the web and CDN servers and web browsers will cache the latest iteration of the website upon any new traffic to the app.

If you want more control over your cache settings, you'll have to use [Digital Ocean Spaces](https://docs.digitalocean.com/products/spaces/how-to/set-file-metadata/), which cost minimum $5/month.