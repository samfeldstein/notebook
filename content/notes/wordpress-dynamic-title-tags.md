---
title: How to Add Dynamic Titles in a Custom WordPress Theme
created: 2025-02-22
updated: 2025-02-22
tags:
  - web-development
  - wordpress
---

## Problem

In a WordPress theme, the `<head>` element goes in the `header.php` template, which you can then include in your pages using `get_header()`. But you can't hardcode the `<title>`, or it'd be the same for every page.

### Solution

WordPress provides built-in support for dynamic titles. To enable it, add the following line to your `functions.php` file:

```php
add_theme_support('title-tag');
```

Once added, make sure you **remove any hardcoded `<title>`** from your `header.php` file. WordPress will now generate the correct title for each page based on the title set in the editor. For the home page, it'll use your general site settings.
