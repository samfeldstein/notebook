---
title: Web Development Resume
tags: ["work", "web-development"]
---

## Tips

Use **Google Docs** so recruiters can copy your resume into their preferred format.

Use **readable font** to **reduce cognitive strain**. Reduced cognitive strain is associated with a **sense of familiarity**. A sense of familiarity increases your chance of getting hired. **Bold keywords** for the same reason.

Highlight **transferable skills** like software and tools, writing, mentorship, teamwork, and problem solving.

Highlight **accomplishments.** What problems did you face and how did you solve them?

Highlight your **ability and eagerness to learn**.

## Past Work

### Web Developer and Designer - Prairie Rose Arena

I made a custom website for Prairie Rose Arena, an equestrian event center in Elkhart, IA. My goal was to build a site that was fast, responsive, accessible, and eye-catching.

I'd never done any kind of graphic design before this, so I was really flying by the seat of my pants here. I wanted the design to be unique and nice to look at. After many hours spent browsing fonts and drafting in Figma, I'm pleased to say I think I succeeded.

The client needed a way to add events to the site, so I attached a headless CMS called Decap. All the client has to do is log in, add the event name, date, and URL, and click "Publish," and the event automatically renders on the Events page.

The site's most notable feature is a service worker that makes the site usable while offline. People often travel long distances to attend events Prairie Rose Arena, so I thought this might be handy. The service worker also makes the site very fast, since the browser doesn't have to fetch assets from the server.

**Skills:**

- Figma
- Eleventy
- Semantic HTML
- CSS3
- Netlify
- Decap
- Headless CMS

### Journalist - West Texan Media Group

While living in West Texas, I took several assignments from the *Big Bend Sentinel*, the region's preeminent newspaper. I'd done plenty of writing on my own time but had no prior experience as a journalist, so this was a learning experience more than anything.

I'm a self-conscious writer, so to counter that, I thought of my assignments like a game. The objective of the game was to convey as much personality as possible while conforming to the standards of the paper. Overall, I'd say the approach worked.

The other big challenge was talking to people. I'm a decent conversationalist, but approaching strangers for an interview felt different. My solution here was to try not be a journalist at all, but just a curious person who also happens to be writing down everything you say. I think it sort of worked, but my nerves might have shown more than I like to admit.

**Skills:**

- Journalism
- Writing
- Photography
- Interviewing
- Fact-checking

### Script Reader - Sugar23

I vetted manuscripts for a Hollywood production company that produced projects like “Spotlight,” “The Knick,” “The OA,” and “Maniac.” Working part-time, I read one manuscript a week, wrote extensive coverage summarizing the story and if I thought it would make a good adaptation, and sent it up the ladder.

Unfortunately, I was never handed a manuscript that I thought would make a great movie, but the job greatly improved my time-management and writing skills. I was mostly reading novels, so they averaged about 300 pages. I had a week to read the book, take notes, and turn those notes into three pages of coverage. It was difficult, but it taught me to hone in on the important stuff and convey my thoughts clearly and concisely.

### Coffee Shop Manager - The Sentinel Marfa

I was initially hired as a barista, but my responsibilities soon expanded beyond the job description. We were short-staffed, so I was on the lookout for opportunities to make my life easier (and everyone else's, too). Things like organizing the POS and creating new items for frequent or specialty orders.

After a few months, the owners had me take over ordering and inventory. Shortly after that, the manager moved to Houston and I took over scheduling and hiring. I wrote job postings, interviewed candidates, and trained new hires, all while working full-time front-of-house.

After about a year, the owner invited me to become a partner in the business. I turned him down because I had other ambitions and didn't think I could afford the time.

**Skills:**

- Employee interviewing
- Team management
- Employee training
- Inventory

### WordPress Developer/Online Store Manager - The Sentinel Marfa

I built an online store for the Sentinel, and so added an entirely new revenue stream to the business. I was given full responsibility for the project. The only stipulation was that I had to use WordPress with SiteGround.

I knew little about coding and web development at the time, so this project involved a lot of research and tutorials. I learned how to set up a subdomain and point to it with DNS records. I learned how to use the WordPress block editor, and I picked up a little CSS here and there when I couldn't quite get the styles editor to do what I wanted.

I was also given license to design the storefront based on a provided color palette and logos. I took and edited product photos and added SEO descriptions. Once the store was live, I became the de facto manager. Customer service, inventory, and order-fulfillment all fell to me.

**Skills:**

- WordPress
- WooCommerce
- Search Engine Optimization
- Customer Service
- Product Photography

### Project Manager - The Sentinel Marfa

I created a Big Bend Tourism Guide for the Sentinel's website. The idea was to make us a one-stop-shop for tourists looking for things to do and places to stay. I traveled around the Big Bend taking photos, researching businesses, and interviewing proprietors.

When all that was done, I distilled my notes into search-optimized descriptions and compiled them and the photos into a final project binder.

The most challenging part of this project was working on a deadline. There were a lot of businesses, a lot of write-ups, so I had to figure out how many businesses were in a given region, what their hours were, when those hours overlapped, calculate how many sites I could hit in a day, and so forth.

**Skills:**

- Writing
- Search Engine Optimization (SEO)
- Photography
- Research
- Interviewing

## Projects

### Digital Notebook

A wiki-like digital knowledge base built with Foam and Eleventy and published with Digital Ocean as a subdomain of my main site. I wanted a wiki-like notebook to make it easier to draw connections between ideas, even (especially?) disparate ones. Foam (VS Code extension) generates backlinks, Eleventy generates the website.

The site transforms wikilinks to relative Markdown links at build time. The site also supports private notes. Any notes marked "private" are excluded from git automatically, and so aren't written to the site output.

What the site doesn't do at the moment is render backlinks on the page. This isn't a disaster, because I see all those on the backend, but it'd be nice if they were on the site, too. This is why I've marked this project as "In Progress."

Eventually I'd like to integrate this site with my main site, but to do that I'll have to figure out how to make Foam work with Astro. Astro's folder structure differs from Eleventy's, so that might be challenging.

You can read more about this project in the notebook itself. Just click the link below and search for "digital notebook."

### Pairings

I had a friend who taught theology at a Catholic school and needed a way to pair her students with a random saint for a project. She hadn't yet found a tool for the job, so I built one for her.

Pairings is an app that generates random pairings from any two lists. This was my first web application, and my first JavaScript-driven project.

I did my best to keep the interface simple but user-friendly. I didn't want users to see anything they didn't need to. For example, they don't see the form for adding new lists until they hit the "Create New List" button.

The app is a partial PWA. You can download it to your phone and desktop, though desktop requires a Chromium browser. It's not available on the app store. A service worker lets you use the app offline.

You can read more about this project at https://notebook.samfeldstein.xyz/notes/pairings-notes.

### Personal Website

My little corner of the internet, built with Astro and published with Cloudflare Pages.

I chose Astro because it's framework-agnostic and JavaScript-based. If you know HTML, CSS, and JavaScript, you can use Astro. It also forgoes a template language in favor of web components.

I agonized over the design for this site for quite some time. It is my personal site, after all, and I want to make a good first impression. But I'm uncomfortable with graphic design, so after a ton of iterations I decided to go with something simple but elegant. Molly White's website and Gwern Branwen's website were nice guideposts here.

Between Astro's prefetching script and Cloudflare's cache settings, the site's performance is laudable, if I do say so myself. I'd eventually like to add a service worker to minimize server requests, but I've only written a couple of those and I'm still learning.

You can read more about this project at https://notebook.samfeldstein.xyz/notes/personal-site-notes/.

### Personal Site (Hugo, archived)

This was the second version of my personal site. Hugo was the first static site generator I ever used. At the time, I knew only knew the basics of HTML and CSS, and I knew nothing about JavaScript, Go, or template languages.

I originally published this site with Cloudflare Pages, but moved it to GitHub Page when I archived. You can see the live site at the link below, and the source is at https://github.com/seldstein/personal-site-hugo.

## Further Reading

- [Advice from Reddit](https://www.reddit.com/r/webdev/comments/11yl1uv/comment/jd8yd5w/?utm_source=share&utm_medium=web2x&context=3)
- [[find-web-development-work|Find Web Development Work]]


[//begin]: # "Autogenerated link references for markdown compatibility"
[find-web-development-work|Find Web Development Work]: find-web-development-work "Find Web Development Work"
[//end]: # "Autogenerated link references"