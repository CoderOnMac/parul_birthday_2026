# CSS Cheat Sheet

Quick reference for CSS essentials.

---

## Selectors

```css
/* Element */
div { }

/* Class */
.class-name { }

/* ID */
#id-name { }

/* Descendant */
.parent .child { }

/* Attribute */
[type="text"] { }

/* Pseudo-class */
:hover { }
:focus { }
:first-child { }
```

---

## Box Model

```css
.box {
  margin: 10px;      /* Outside border */
  border: 1px solid black;
  padding: 10px;    /* Inside border */
  width: 100px;
  height: 100px;
}
```

---

## Layout

```css
/* Flexbox */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

/* Grid */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
```

---

## Typography

```css
.text {
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: #1a1816;
}
```

---

## Colors

```css
/* Hex */
color: #ffffff;

/* RGB */
color: rgb(255, 255, 255);

/* RGBA with opacity */
color: rgba(255, 255, 255, 0.5);

/* HSL */
color: hsl(0, 100%, 50%);

/* CSS variables */
:root {
  --primary-color: #c4a098;
}
```

---

## Spacing

```css
.element {
  margin: 1rem;          /* All sides */
  margin: 1rem 2rem;     /* Vertical, horizontal */
  margin: 1rem 2rem 3rem 4rem; /* Top, right, bottom, left */
  padding: 1rem;
  gap: 1rem;             /* Flexbox/Grid gap */
}
```

---

## Positioning

```css
/* Static (default) */
position: static;

/* Relative (relative to normal position) */
position: relative;
top: 10px;
left: 10px;

/* Absolute (relative to nearest positioned ancestor) */
position: absolute;
top: 0;
left: 0;

/* Fixed (relative to viewport) */
position: fixed;
top: 0;
left: 0;
```

---

## Transitions

```css
.button {
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

---

## Animations

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element {
  animation: fadeIn 0.5s ease both;
}
```

---

## Media Queries

```css
/* Mobile-first approach */
@media (min-width: 768px) {
  .container {
    max-width: 960px;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}
```

---

## Common Mistakes

- ❌ Not using CSS variables for repeated values
- ❌ Using `!important` (rarely needed)
- ❌ Not considering mobile responsiveness
- ❌ Not respecting reduced motion preferences
- ❌ Using pixel values for everything (use rem/em for accessibility)
