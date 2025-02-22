---
title: How to Add Dynamic Meta Descriptions in a WordPress Theme
created: 2025-02-22
updated: 2025-02-22
tags:
  - web-development
  - wordpress
---

To dynamically generate page meta descriptions in WordPress, you'll need to add two functions to your `functions.php` file:

```php
function dynamic_meta_description()
{
  if (is_singular()) {
    global $post;
    // Use the excerpt or trim the content if no excerpt exists.
    $description = $post->post_excerpt ? $post->post_excerpt : wp_trim_words($post->post_content, 55, '');
  } else {
    $description = get_bloginfo('description');
  }
  echo '<meta name="description" content="' . esc_attr($description) . '">' . "\n";
}

```

```php
function enable_page_excerpts()
{
  add_post_type_support('page', 'excerpt');
}
```

```php
add_action( 'wp_head', 'custom_meta_description' );
```

### How It Works
- If the page is a **single post or page**, it uses the post excerpt. If no excerpt is available, it trims the first 55 words of the content.
- If the page is **not a singular post/page** (e.g., homepage, archives), it falls back to the site’s tagline (from *Settings > General*).
- The function then prints a `<meta name="description">` tag in the `<head>`.

### Enhancements
For more control, you could add a custom meta description field using `add_post_meta` and retrieve it instead of relying on excerpts.

### Conclusion
By adding this simple function, you can ensure that every page on your WordPress site has a relevant meta description, improving SEO and providing better search engine snippets.

