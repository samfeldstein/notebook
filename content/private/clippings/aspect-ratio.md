---
title: "aspect-ratio"
source: "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio"
author:
  - "[[MozDevNet]]"
published: 2025-07-14
created: 2025-08-22
description: "The aspect-ratio CSS property allows you to define the desired width-to-height ratio of an element's box. This means that even if the parent container or viewport size changes, the browser will adjust the element's dimensions to maintain the specified width-to-height ratio. The specified aspect ratio is used in the calculation of auto sizes and some other layout functions."
tags:
  - "css"
---
Baseline Widely available

This feature is well established and works across many devices and browser versions. It’s been available across browsers since ⁨September 2021⁩.

- [Learn more](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)
- [See full compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/#browser_compatibility)

The **`aspect-ratio`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property allows you to define the desired width-to-height ratio of an element's box. This means that even if the parent container or viewport size changes, the browser will adjust the element's dimensions to maintain the specified width-to-height ratio. The specified [aspect ratio](https://developer.mozilla.org/en-US/docs/Glossary/Aspect_ratio) is used in the calculation of auto sizes and some other layout functions.

==At least one of the box's sizes needs to be automatic in order for `aspect-ratio` to have any effect. If neither the width nor height is an automatic size, then the provided aspect ratio has no effect on the box's preferred sizes.==

This property is specified as one or both of the keyword auto or a `<ratio>`. If both are given, and the element is a [replaced element](https://developer.mozilla.org/en-US/docs/Glossary/Replaced_elements), such as [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img), then the given ratio is used until the content is loaded. After the content is loaded, the `auto` value is applied, so the intrinsic aspect ratio of the loaded content is used.

If the element is not a replaced element, then the given `ratio` is used.

[`auto`](https://developer.mozilla.org/en-US/docs/Web/CSS/#auto)

[Replaced elements](https://developer.mozilla.org/en-US/docs/Glossary/Replaced_elements) with an intrinsic aspect ratio use *that* aspect ratio, otherwise the box has no preferred aspect ratio. Size calculations involving intrinsic aspect ratio always work with the content box dimensions.

[`<ratio>`](https://developer.mozilla.org/en-US/docs/Web/CSS/ratio)

The box's preferred aspect ratio is the specified ratio of `width` / `height`. If `height` and the preceding slash character are omitted, `height` defaults to `1`. Size calculations involving preferred aspect ratio work with the dimensions of the box specified by `box-sizing`.

[`auto && <ratio>`](https://developer.mozilla.org/en-US/docs/Web/CSS/#auto_ratio)

When both `auto` and a `<ratio>` are specified together, `auto` is used if the element is a replaced element with a natural aspect ratio, like an `<img>` element. Otherwise, the specified ratio of `width` / `height` is used as the preferred aspect ratio.

| [Initial value](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) | `auto` |
| --- | --- |
| Applies to | all elements except inline boxes and internal ruby or table boxes |
| [Inherited](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Inheritance) | no |
| [Computed value](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) | as specified |
| [Animation type](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) | by computed value type |

```
aspect-ratio = 
  auto     ||
  <ratio>  

<ratio> = 
  <number [0,∞]> [ / <number [0,∞]> ]?
```

In this example, the width of the `<div>` elements has been set to `100px` and height to `auto`. Since the width value is fixed here, the `aspect-ratio` property affects only the height of the `<div>` elements to maintain the specified width-to-height ratio.

In this example we are using two `<img>` elements. The first element does not have its `src` attribute set to an image file.

The following code sets `3/2` as the preferred aspect ratio and `auto` as a fallback.

Note how the first image without replaced content keeps the `3/2` aspect ratio, while the second image after the content is loaded uses the image's natural aspect ratio.

| Specification |
| --- |
| [CSS Box Sizing Module Level 4   \# aspect-ratio](https://drafts.csswg.org/css-sizing-4/#aspect-ratio) |

- [Understanding aspect ratios](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Image aspect-ratio: preventing jank](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Designing an aspect ratio unit for CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Setting Height And Width On Images Is Important Again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)