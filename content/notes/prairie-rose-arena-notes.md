---
title: Prairie Rose Arena - Notes
tags: ["projects", "web-development", "eleventy"]
---

[Prairie Rose Arena](https://prairierosearena.com) is an equestrian event center in Elkhart, IA. It's owned and operated by my mom, Sondra Feldstein. She had a little WordPress site already, but it wasn't as nice-looking as it could have been and it didn't work so well on mobile.

I began the project in April 2024 and finished it in May 2024.

## Design

I'd never done any kind of graphic design before this, so I was really flying by the seat of my pants here. I began by thinking about an aesthetic that would suit the business. I love Westerns, so this wasn't hard. It didn't even take as long to find fonts as it might have because I knew exactly what I was looking for.

I started in Canva because it seemed user-friendly and I'd never used any design tools before. It was user-friendly, but eventually I got tired of paying for it and switched to Figma, which is the better software anyway.

I don't know that I had any method or process or approach. I didn't know what I was doing, so it was a lot of trial and error, a lot of moving things around until they looked right. Overall, I'm very happy with how it turned out. If I had to guess, I'd say it's probably the best-looking website I'll ever make.

My takeaways here are twofold:

1. While I appreciate a beautiful website when I see one, I find graphic design disinteresting and somewhat torturous.
2. [Typographer Mediengestaltung](https://www.1001fonts.com/users/steffmann/) is the GOAT.

## Eleventy

This was maybe the second website I'd ever built start-to-finish. I knew I wanted to use a static site generator and I happened to be messing with Eleventy at the time.

I like static site generators because I like building sites by hand. I also like to make sites fast, which I know more about now than I did when I began this project (see [performance](#performance)), and SSGs tend to facilitate that.

But the best thing about SSGs is they give you total control over the output. Even if the tool itself is bloated, loaded down with node packages or whatever, the output will only contain whatever you put in it. I can't stand the thought of my website being weighed down with unnecessary code. I don't know why I'm like that, but I am. As far as I can tell, SSGs are the perfect tool for someone like me.

The only issue was that Eleventy is JavaScript, and I knew very little JavaScript at the time. I was able to fumble my way through for the most part, but there were some issues I couldn't solve (see [weaknesses](#weaknesses)).

## Features

### [[decap-and-netlify]] CMS

My mom isn't tech savvy, and she needed a way to add events to the site. I looked around for a headless CMS and settled on Decap. It was free and seemed user-friendly, and also worked well with Netlify, where I host the site.

Decap made it easy to keep things simple, which I liked. All my mom has to do to is log in, add some info about the event (title, date, url), and the event automatically renders on the Events page.

A unique page is generated for each event. But since my mom posts all event details on Facebook, this is kind of pointless. If I did it today, I'd generate the events from a data file. On the bright side, if she ever does decide to start posting more events info on the website, the infrastructure is there.

### Automatic rebuilds

I put an Upcoming Events section on the home page and the Events page and at some point realized they were only updating whenever I triggered a deploy. Because duh, it's a static site (we're learning).

The solution I found was to set up a [Netlify build hook](https://docs.netlify.com/configure-builds/build-hooks/) and use a [GitHub action](https://docs.github.com/en/actions) to trigger it.

Building the entire site once a day seems a little much, but it was the best I could do and the site is small. If I did it again, I'd probably use JavaScript, but that was beyond me at the time.

**Further reading:**

- [11ty Daily Rebuilds](https://jamesdoc.com/blog/2023/11ty-daily-rebuilds/)

### Service worker

I was quite proud of myself for figuring out how to add a service worker to this site. I didn't know much JavaScript at all, but between [MDN Docs](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker), an article by [Chris Ferdinandi](https://css-tricks.com/add-a-service-worker-to-your-site/), and ChatGPT, I managed to get it working.

I mainly wanted a service worker so that folks without an internet connection could still look at the website. I figured this was a plausible scenario since people often travel long distances to attend events at the arena. If they lose service, they can still browse a cached version of the site. And if those pages aren't available for any reason, the site shows them an `/offline/` page with my mom's contact info.

The other reason to have a worker is it makes the site very fast, a huge perk given my image optimization woes (see [images](#images)).

## Weaknesses

### Performance

- Note scores and what's detracting

### Images

The site's images, other than being [Squooshed](https://squoosh.app), are not optimized. That's because I knew nothing about image optimization when I started this project. I tried to figure out Eleventy's image shortcode, but I failed (again, very little JS knowledge at this point).

On the plus side, I did learn how to reserve space for images so that they don't cause a big layout shift when they load. Though now that I'm looking at it again, it seems that I did this for every image except the logo, which is a problem.

I also never figured out how to automatically optimize images when they're uploaded via Decap, so I told my mom that whenever she wanted to add images to just give them to me and I'd do it. She rarely adds images, so this works for me.

[//begin]: # "Autogenerated link references for markdown compatibility"
[decap-and-netlify]: decap-and-netlify "Decap and Netlify"
[//end]: # "Autogenerated link references"