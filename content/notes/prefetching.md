---
title: Prefetching
tags: 
  - web-development
  - web-performance
created: 2024-12-27
updated: 2024-12-27
---

## Native

```javascript
<script type="speculationrules">

{
  "prefetch": [
    {
      "source": "document",
      "where": {
      "href_matches": "/*/",
      "relative_to": "document"
    },
    "eagerness": "immediate"
    }
  ]
}

</script>
```

## Astro

[Astro prefetching](https://docs.astro.build/en/guides/prefetch/).

## Cloudflare

Cloudflare refuses resources fetched with speculation rules. Tried turning off [Speed Brain](https://developers.cloudflare.com/speed/optimization/content/speed-brain/). Didn't fix it.

Also see: https://community.cloudflare.com/t/cdn-cgi-speculation-applies-even-if-disabled/714033/4.