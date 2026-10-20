# Case Study: Why og-preview.png Is Not Visible in the App

## The Question

"I changed og-preview.png but I don't see it anywhere in the app. Why?"

---

## The Answer

**og-preview.png is NOT meant to be visible in the app.**

It's a **social media share image** (Open Graph image), not a page element.

---

## What og-preview.png Is Used For

When someone shares your website link on social media, platforms display a preview card:

**Example on Twitter/X:**
```
┌─────────────────────────────────────┐
│ I made something for you.           │ ← Title (og:title)
│                                     │
│ [ og-preview.png image ]             │ ← This is your og-preview.png
│                                     │
│ Five questions. No cheating.        │ ← Description (og:description)
└─────────────────────────────────────┘
```

**Platforms that use it:**
- Facebook
- LinkedIn
- Twitter/X
- WhatsApp
- Slack
- Discord
- Any platform that shows link previews

---

## Where It's Referenced

**Location:** `index.html` lines 13 and 18

```html
<meta property="og:image" content="assets/og-preview.png" />
<meta name="twitter:image" content="assets/og-preview.png" />
```

These are **meta tags** - they tell social media platforms what image to show in the preview card. They are NOT `<img>` tags that display on the page.

---

## How to Test og-preview.png

You CANNOT see it by just opening the page in your browser. To test it:

### Method 1: Social Media Debuggers
- **Facebook:** https://developers.facebook.com/tools/debug/
- **Twitter:** https://cards-dev.twitter.com/validator
- **LinkedIn:** https://www.linkedin.com/post-inspector/

Paste your URL and it will show you the preview card with your og-preview.png.

### Method 2: Share the Link
1. Share your GitHub Pages link on Twitter/X
2. Look at the tweet - you'll see the preview card with the image

### Method 3: Browser DevTools
1. Open your page
2. Right-click → View Page Source
3. You'll see the meta tags, but the image won't be visible in the UI

---

## If You Want to Display an Image in the App

If you actually want an image visible on the page, you need to use an `<img>` tag:

**In config.js:**
```javascript
{
  // This is for social media preview
  ogImage: "assets/og-preview.png",

  // For page display, add to your content
  photo: "assets/my-image.png"
}
```

**In HTML (if you add it directly):**
```html
<img src="assets/my-image.png" alt="Description" />
```

**In JavaScript (like the photo system):**
```javascript
const img = document.createElement("img");
img.src = "assets/my-image.png";
document.body.appendChild(img);
```

---

## Key Difference

| Purpose | HTML Tag | Visible in Browser? |
|---------|----------|---------------------|
| Social media preview | `<meta property="og:image">` | No |
| Page display | `<img>` | Yes |
| Page display | CSS `background-image` | Yes |
| Page display | JavaScript `img.src` | Yes |

---

## Common Confusion

**Meta tags** vs **HTML elements:**

```html
<!-- Meta tag - NOT visible on page -->
<meta property="og:image" content="assets/og-preview.png" />

<!-- HTML element - visible on page -->
<img src="assets/my-image.png" alt="Visible image" />
```

Meta tags provide information ABOUT the page (to browsers, search engines, social media). HTML elements are the actual content OF the page.

---

## Summary

**og-preview.png is working correctly.** You're not supposed to see it in the app.

- It's for social media link previews
- It's referenced in meta tags, not `<img>` tags
- Test it with social media debuggers or by actually sharing the link
- If you want an image visible on the page, use `<img>` tags or CSS background images
