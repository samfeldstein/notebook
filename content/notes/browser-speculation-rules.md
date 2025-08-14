---
title: Browser Speculation Rules
aliases:
  - Browser Speculation Rules
  - Browser Prefetching
tags:
  - web-development
  - web-performance
created: 2024-12-27
updated: 2024-12-27
---

Speculation rules are still experimental (not supported by all browsers).

If you have a small site, just add `rel="prefetch"` to each page you want to prefetch. See [rel=prefetch](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/prefetch) on MDN.

For larger sites, you can use a speculation script. The following example prefetches all internal links with moderate eagerness:

```js
<script type="speculationrules">

{
  "prefetch": [
    {
      "source": "document",
      "where": {
      "href_matches": "/*/",
      "relative_to": "document"
    },
    "eagerness": "moderate"
    }
  ]
}

</script>
```

Further reading: [Speculation Rules](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/speculationrules) on MDN.

## Framework alternatives

I usually build with Astro, so I use its [Prefetch feature](https://docs.astro.build/en/guides/prefetch/).

## Cloudflare issue

Cloudflare refuses resources fetched with speculation rules. Tried turning off [Speed Brain](https://developers.cloudflare.com/speed/optimization/content/speed-brain/). Didn't fix it.

Also see: https://community.cloudflare.com/t/cdn-cgi-speculation-applies-even-if-disabled/714033/4.
