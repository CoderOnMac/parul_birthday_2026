# HTML Cheat Sheet

Quick reference for HTML essentials.

---

## Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Page Title</title>
</head>
<body>
  <!-- Content goes here -->
</body>
</html>
```

---

## Common Elements

```html
<!-- Headings -->
<h1>Main Heading</h1>
<h2>Subheading</h2>

<!-- Paragraphs -->
<p>This is a paragraph.</p>

<!-- Links -->
<a href="https://example.com">Link text</a>

<!-- Images -->
<img src="image.jpg" alt="Description" />

<!-- Divisions -->
<div class="container">Content</div>

<!-- Buttons -->
<button type="button">Click me</button>

<!-- Lists -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Forms -->
<form>
  <input type="text" placeholder="Enter text" />
  <button type="submit">Submit</button>
</form>
```

---

## Attributes

```html
<!-- ID (unique) -->
<div id="unique-id">Content</div>

<!-- Class (reusable) -->
<div class="class-name">Content</div>

<!-- Data attributes -->
<div data-value="123">Content</div>

<!-- ARIA attributes -->
<div aria-label="Description">Content</div>
<div aria-hidden="true">Content</div>
```

---

## Semantic Elements

```html
<header>Header content</header>
<nav>Navigation links</nav>
<main>Main content</main>
<section>Thematic section</section>
<article>Self-contained content</article>
<aside>Related content</aside>
<footer>Footer content</footer>
```

---

## Meta Tags

```html
<!-- Charset -->
<meta charset="UTF-8" />

<!-- Viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- Description -->
<meta name="description" content="Page description" />

<!-- Open Graph -->
<meta property="og:title" content="Title" />
<meta property="og:description" content="Description" />
<meta property="og:image" content="image.jpg" />

<!-- Theme Color -->
<meta name="theme-color" content="#ffffff" />
```

---

## Accessibility

```html
<!-- Alt text for images -->
<img src="photo.jpg" alt="Description of photo" />

<!-- ARIA labels -->
<button aria-label="Close dialog">×</button>

<!-- aria-live for dynamic content -->
<div aria-live="polite">Dynamic content</div>

<!-- Skip navigation -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

---

## Common Mistakes

- ❌ Forgetting the `alt` attribute on images
- ❌ Using `div` instead of semantic elements
- ❌ Forgetting the viewport meta tag (breaks mobile)
- ❌ Not using ARIA labels where needed
- ❌ Using inline styles instead of CSS classes
