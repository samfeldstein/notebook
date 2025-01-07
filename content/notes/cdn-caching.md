---
title: CDN Caching
tags: 
  - web-development
  - web-performance
created: 2024-12-27
updated: 2024-12-27
---

## Cloudflare

Cloud makes it easy to cache assests. Go to Caching>Configuration and find "Browser Cache TTL." I have it set to six months, which means assets are stored in the user's browser for six months.

## Digital Ocean

https://docs.digitalocean.com/products/app-platform/how-to/cache-content/

> By default, App Platform deploys static sites with Cache-Control headers set to cache for 24 hours on CDN edge servers and 10 seconds in web browsers. If you redeploy the app, any cached content is invalidated across the web and CDN servers and web browsers will cache the latest iteration of the website upon any new traffic to the app.

If you want more control over your cache settings, you'll have to use [Digital Ocean Spaces](https://docs.digitalocean.com/products/spaces/how-to/set-file-metadata/), which cost minimum $5/month.
