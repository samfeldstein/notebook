---
title: WWW Subdomain Cloudflare Issue
tags:
  - web-development
  - cloudflare
---

Adding a CNAME that points `www.samfeldstein.xyz` to `samfeldstein.xyz` wasn't working. Same method works fine for other domains (eg `samfeldstein.net`).

I added 301 redirect that does the same thing and it works.