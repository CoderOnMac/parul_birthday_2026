# Case Study: Preventing Photo Overlap in a Responsive Question Layout

This case study explains the photo layout used in the birthday experience and the fix for a visual bug where the second photo covered part of the question text.

---

## The Problem

**Symptom:** On wider screens, the second instant photo could extend into the question column. The photo looked attractive, but it hid some of the question text.

**Expected behavior:** The photos can still feel layered and romantic, but the question and all answer choices must remain fully readable.

The important design principle is:

> Decorative elements may be visually playful, but they must not compete with essential content.

---

## Where the Layout Lives

There are two files involved:

- `src/main.js` creates the question markup and places the photos before the question copy.
- `src/styles.css` controls the grid, photo sizing, spacing, rotation, and responsive behavior.

The question structure is intentionally split into two columns:

```html
<div class="question-layout">
  <div class="question-memory">...</div>
  <div class="question-copy">...</div>
</div>
```

This separation is useful because the photo area and the text area have different jobs. The photo area can be expressive; the copy area needs predictable space for text and buttons.

---

## Why the Bug Happened

The second photo originally used this style:

```css
.question-photo + .question-photo {
  margin-left: -1.5rem;
}
```

A negative margin pulls an element toward the previous element. That created a postcard-like overlap, but the photos were inside a grid column next to the question text. The second photo could therefore cross the boundary between the photo column and the text column.

Rotations can make this even more noticeable. CSS transforms do not change the element's normal layout size; they only change how the element is painted. So a rotated photo may visually extend outside the space the browser reserved for it.

---

## The Fix

The overlap was replaced with a real, responsive gap:

```css
.question-memory {
  display: flex;
  gap: clamp(1rem, 3vw, 1.75rem);
}

.question-photo {
  flex: 1 1 0;
  min-width: 0;
}

.question-photo + .question-photo {
  margin-left: 0;
}
```

### What each change does

- `gap` creates actual space between photos without stealing space from the question copy.
- `flex: 1 1 0` lets the photos share the available photo-column width evenly.
- `min-width: 0` allows the flex items to shrink instead of forcing the whole layout wider.
- Removing the negative margin prevents the second photo from crossing into the text column.
- The rotation remains, so the design still feels like casually arranged instant photos.

The key intuition is to separate *layout spacing* from *visual decoration*. Use `gap` for spacing. Use `transform: rotate(...)` only for personality.

---

## The Photo Loading Flow

Photos are discovered in `vite.config.js`:

```js
function discoverPhotos() {
  const photoDir = path.resolve("public/assets/photos");
  return fs.readdirSync(photoDir)
    .filter((file) => /\.(jpe?g|png|webp|avif|gif)$/i.test(file))
    .map((file) => `assets/photos/${file}`);
}
```

Vite runs this during development/build and injects the result into the frontend as `__PHOTO_MANIFEST__`. This means a new supported image placed in `public/assets/photos/` becomes available automatically on the next run. No JavaScript list needs to be updated.

The question images are rendered with:

```html
<img loading="eager" fetchpriority="high" decoding="sync" />
```

The question photo is part of the first visual composition, so it is intentionally loaded eagerly. Lazy loading is better for a long gallery, but it would be the wrong default for the first photo the visitor is meant to see before answering.

---

## How Photos Are Distributed

When the visitor starts the experience, the manifest is shuffled:

```js
const shuffledPhotos = shuffle(discoveredPhotos);
```

The first ten photos are assigned two per question. Any additional photos remain in `state.remainingPhotos` and are shown on the final birthday page.

This gives the application two useful properties:

1. The question pages stay visually balanced.
2. New photos do not disappear just because the application was designed around five questions.

The shuffle happens at the beginning of each experience, so the order feels personal and slightly different each time.

---

## How to Test This Fix

1. Run the development server.
2. Start the experience and move to a question with two photos.
3. Check that the entire question and all answer choices are visible.
4. Resize the browser from desktop width to mobile width.
5. Confirm that photos remain inside their photo area and do not cover text.
6. Add another image to `public/assets/photos/`, restart the dev server, and confirm it appears among the remaining final memories.

The production check is:

```bash
PATH="$PWD/.node-local/bin:$PATH" npm run build
```

If Vite completes successfully, the photo manifest and the CSS/JavaScript changes have compiled correctly.

---

## General Lesson

When a decorative card overlaps important text, do not immediately add more `z-index` rules. First ask whether the layout model is reserving enough space.

1. Find the container boundary.
2. Check for negative margins, absolute positioning, or transforms.
3. Use grid/flex `gap` for structural spacing.
4. Keep transforms for visual polish only.
5. Test both the largest and smallest supported widths.

Good visual design is not just about making elements beautiful. It is also about making the hierarchy obvious: the photo should invite attention, and the question should remain effortless to read.

---

## A Single Photo with a Different Aspect Ratio

Most photos use `object-fit: cover` because the instant-photo frame has a consistent shape. One image, `img_dp_ind_2.jpg`, needs to preserve its full composition instead of being cropped. The renderer adds a `photo--full-frame` class only when that filename is used:

```js
function photoClass(photoPath) {
  return /img_dp_ind_2\.(jpe?g)$/i.test(photoPath) ? " photo--full-frame" : "";
}
```

The special CSS then lets that image use its natural height and `object-fit: contain`. This is deliberately scoped to one class rather than changing the shared image rule, because changing every photo would make the rest of the gallery lose its consistent card rhythm.
