---
title: POSSE
tags: ["web-development","indie-web"]
---

[POSSE](https://indieweb.org/POSSE) means "post on your site, syndicate elsewhere." I'm not really on social media, so I don't have any place to syndicate. But it's a good idea so I thought I'd take some notes.

The most streamlined way to do this may be to set up a [micro.blog](https://micro.blog) site and use the API to scrape this site's rss feed. From there, micro.blog handles cross posting. And if you use that, you can also get built-in newsletter capabilities for $10/month.

Sounds like a good idea, but I tried it and something was up with the encoding because apostrophes (among other things) in post titles were rendering like this: `&apos`. I think it has something to do with the way micro.blog parses rss feeds, because other services (eg Readwise) seem to work fine.
