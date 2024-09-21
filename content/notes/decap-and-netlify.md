---
title: Decap and Netlify
tags: ["decap","static-site-generators", "netlify"]
---

Decap uses the [Netlify Identity Widget](https://decapcms.org/docs/choosing-a-backend/#add-the-netlify-identity-widget) to manage users.

I would have used the [Admin-only solution](https://decapcms.org/docs/choosing-a-backend/), but you have to pay to change email templates on Netlify.

So what we're going to do is use the [site-wide solution](https://decapcms.org/docs/choosing-a-backend/). We'll see how that impacts perforance.

## Pitfalls

The docs imply you should [store `admin/` in your site's output folder directly](https://decapcms.org/docs/install-decap-cms/), but this is bad idea. If you ever delete the public folder, `admin/` will go with it. Better to pass `admin/` to the ouput as a static folder.

## Help

- [Decap GitHub Discussions](https://github.com/decaporg/decap-cms/discussions)