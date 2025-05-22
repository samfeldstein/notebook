---
title: Cloudflare DNS
tags: ["cloudflare","web-development"]
---
I just pointed `notebook.samfeldstein.xyz` to this site. To do that, you first add `notebook.samfeldstein.xyz` to the notebook's Cloudflare Pages site as a custom domain. Then you add a corresponding CNAME record to `samfeldstein.xyz`.

## www.problems.fml

For whatever reason, adding a CNAME that points `www.` to `samfeldstein.xyz` wasn't working. What's extra-weird is that the CNAME method works fine for my other domains (eg `samfeldstein.net`). But I added 301 redirect that does the same thing and it works fine.

All other domains are redirecting to my main site, and seem to be working.