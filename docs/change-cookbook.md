# Change Cookbook

"I want to change X → where do I go?"

Quick reference for making common changes to the application.

---

## UI Changes

### How do I change the title?

**Current value:** `"Something for you"`

**File:** `config.js`

**Line/Function:** Line 10 (meta.pageTitle)

**Edit:**
```javascript
meta: {
  pageTitle: "Your New Title",
  // ...
}
```

**Also update:** `index.html` line 21 if you want the HTML title to match

---

### How do I change the subtitle/intro text?

**Current value:** Varies in `config.js`

**File:** `config.js`

**Line/Function:** Lines 18-21 (intro object)

**Edit:**
```javascript
intro: {
  line1: "Your first line",
  line2: "Your headline",
  supporting: "Your supporting text",
  button: "Your button text",
}
```

---

### How do I change a button?

**Start button text:**
- File: `config.js`
- Line: 21
- Property: `intro.button`

**Restart button text:**
- File: `config.js`
- Line: 222
- Property: `finalReveal.restartLabel`

---

### How do I change button colors?

**Current values:** CSS variables

**File:** `src/styles.css`

**Line/Function:** Lines 2-22 (CSS variables)

**Edit:**
```css
:root {
  --text: #1a1816;          /* Button background color */
  --bg: #f7f4f1;            /* Button text color */
  --accent: #c4a098;        /* Focus/border color */
}
```

**Specific button styles:**
- Primary button: Lines 142-158
- Ghost button: Lines 160-170

---

### How do I change fonts?

**Current values:** System fonts

**File:** `src/styles.css`

**Line/Function:** Lines 13-14

**Edit:**
```css
:root {
  --font-sans: system-ui, -apple-system, "SF Pro Text", "Segoe UI", Inter, sans-serif;
  --font-serif: Georgia, "Times New Roman", serif;
}
```

**To use a web font:**
1. Add font import in `index.html` head
2. Update CSS variables to use the imported font

---

### How do I change font size?

**Current values:** Various

**File:** `src/styles.css`

**Line/Function:** Line 39 (base font size)

**Edit:**
```css
body {
  font-size: 1.0625rem; /* Change this */
}
```

**Specific element sizes:**
- Headline: Line 106
- Question title: Line 120
- Reaction text: Line 263

---

### How do I change spacing?

**Current values:** CSS variables

**File:** `src/styles.css`

**Line/Function:** Lines 15-19

**Edit:**
```css
:root {
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1.25rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
}
```

---

### How do I change background?

**Current value:** `#f7f4f1`

**File:** `src/styles.css`

**Line/Function:** Line 3

**Edit:**
```css
:root {
  --bg: #ffffff; /* Your new background color */
}
```

---

### How do I change animations?

**Transition duration:**
- File: `src/styles.css`
- Line: 21
- Property: `--transition`

**Animation timing:**
- File: `src/main.js`
- Lines 14-19
- Property: `TIMING` object

---

### How do I change transition speed?

**File:** `src/main.js`

**Line/Function:** Lines 14-19

**Edit:**
```javascript
const TIMING = {
  reactionHold: 2200,      // Lower = faster
  surpriseLine: 1800,      // Lower = faster
  calcMin: 3200,           // Lower = faster
  revealStep: 900,         // Lower = faster
};
```

**Units:** Milliseconds (1000ms = 1 second)

---

## Content Changes

### How do I add another question?

**File:** `config.js`

**Line/Function:** Lines 24-124 (questions array)

**Edit:**
```javascript
questions: [
  // ... existing questions ...
  {
    question: "Your new question?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    preferredIndex: 0,
    reactions: {
      preferred: "Reaction if they pick preferred",
      byOption: {
        0: "Reaction for option 0",
        1: "Reaction for option 1",
        2: "Reaction for option 2",
        3: "Reaction for option 3",
      },
      fallback: ["Fallback reaction 1", "Fallback reaction 2"],
    },
  },
]
```

**Note:** You may need to update photo scenes to accommodate the new question.

---

### How do I remove a question?

**File:** `config.js`

**Line/Function:** Lines 24-124

**Edit:** Delete the question object from the array

**Note:** Update photo scenes if needed

---

### How do I reorder questions?

**File:** `config.js`

**Line/Function:** Lines 24-124

**Edit:** Move question objects to different positions in the array

---

### How do I change an answer?

**File:** `config.js`

**Line/Function:** Lines 27, 46-50, 66-70, 86-90, 106-110

**Edit:** Change the text in the options array

---

### How do I add a new animation?

**File:** `src/styles.css`

**Line/Function:** Lines 424-519 (keyframes)

**Edit:** Add a new @keyframes rule:
```css
@keyframes yourAnimation {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Apply it:**
```css
.your-element {
  animation: yourAnimation 0.5s ease both;
}
```

---

## Photo Changes

### How do I add my own photographs?

**Step 1:** Put your image in `public/assets/photos/`
- Supported formats: JPG, PNG, SVG, WebP
- Recommended size: 800-1200px wide
- Compress before adding

**Step 2:** Add to config.js library
```javascript
photos: {
  library: [
    {
      id: "your-photo-id",
      src: "assets/photos/your-photo.jpg",
      caption: "Optional caption",
    },
    // ... existing photos
  ],
}
```

**Step 3:** Add to a scene
```javascript
scenes: {
  landing: [
    { id: "your-photo-id", rotation: -5, x: "10%", y: "10%", width: "40%", z: 2 },
  ],
}
```

---

### How do I position a photo?

**File:** `config.js`

**Line/Function:** Lines 169-197 (scenes)

**Properties:**
- `rotation`: Degrees (-45 to 45 recommended)
- `x`: Horizontal position (0% to 100%)
- `y`: Vertical position (0% to 100%)
- `width`: Width percentage (10% to 80%)
- `z`: Stacking order (1-10)

**Example:**
```javascript
{ id: "memory-1", rotation: -7, x: "6%", y: "14%", width: "40%", z: 2 }
```

---

### How do I resize a photo?

**File:** `config.js`

**Line/Function:** Lines 169-197 (scenes)

**Property:** `width`

**Edit:**
```javascript
{ id: "memory-1", width: "50%" }  /* Larger */
{ id: "memory-1", width: "30%" }  /* Smaller */
```

---

### How do I rotate a photo?

**File:** `config.js`

**Line/Function:** Lines 169-197 (scenes)

**Property:** `rotation`

**Edit:**
```javascript
{ id: "memory-1", rotation: -10 }  /* More rotation */
{ id: "memory-1", rotation: 0 }     /* No rotation */
```

---

### How do I add a shadow to a photo?

**File:** `src/styles.css`

**Line/Function:** Lines 10 (shadow variable)

**Edit:**
```css
:root {
  --shadow: 0 12px 40px rgba(26, 24, 22, 0.06);
}
```

**For polaroid photos specifically:**
Add custom CSS or modify existing polaroid styles

---

### How do I make a photo look like an instant/Kodak photo?

**The polaroid style is already applied automatically.**

**Key elements:**
- White border (from CSS)
- Subtle shadow (from CSS)
- Rotation (from config)
- These create the instant photo look

**Customize:**
- Adjust `--radius` in CSS for border radius
- Adjust `--shadow` in CSS for shadow intensity
- Adjust rotation in config for angle

---

## Timing Changes

### If I want to change how long reactions show:

**Current value:** `2200` (ms)

**File:** `src/main.js`

**Line/Function:** Line 15

**Edit:**
```javascript
const TIMING = {
  reactionHold: 3000,  /* 3 seconds instead of 2.2 */
}
```

**What it controls:** How long the reaction text displays before advancing

**What happens if increased:** User waits longer between questions

**What happens if decreased:** Quiz moves faster

---

### If I want to change how long surprise lines show:

**Current value:** `1800` (ms)

**File:** `src/main.js`

**Line/Function:** Line 16

**Edit:**
```javascript
const TIMING = {
  surpriseLine: 2500,  /* 2.5 seconds instead of 1.8 */
}
```

**What it controls:** Duration of each surprise line

---

### If I want to change the fake score calculation duration:

**Current value:** `3200` (ms)

**File:** `src/main.js`

**Line/Function:** Line 17

**Edit:**
```javascript
const TIMING = {
  calcMin: 5000,  /* 5 seconds instead of 3.2 */
}
```

**What it controls:** Minimum duration of the fake score animation

---

### If I want to change how fast the final reveal appears:

**Current value:** `900` (ms)

**File:** `src/main.js`

**Line/Function:** Line 18

**Edit:**
```javascript
const TIMING = {
  revealStep: 1200,  /* 1.2 seconds between reveal steps */
}
```

**What it controls:** Delay between each reveal step

---

## Photo Transition Changes

### How do I change photo transition speed?

**Current value:** `700` (ms)

**File:** `config.js`

**Line/Function:** Line 146

**Edit:**
```javascript
photos: {
  transitionDurationMs: 500,  /* Faster transitions */
}
```

---

### How do I make a photo appear only on a specific question?

**File:** `config.js`

**Line/Function:** Lines 169-197 (scenes)

**Edit:** Add the photo only to that question's scene:
```javascript
scenes: {
  "question-2": [
    { id: "memory-1", rotation: -5, x: "10%", y: "10%", width: "40%", z: 2 },
  ],
}
```

**The photo will only appear on question 3 (question-2 is 0-indexed).**

---

### How do I make a photo move when a question appears?

**File:** `config.js`

**Line/Function:** Lines 169-197 (scenes)

**Edit:** Define different positions for different scenes:
```javascript
scenes: {
  "question-0": [
    { id: "memory-1", rotation: -5, x: "10%", y: "10%", width: "40%", z: 2 },
  ],
  "question-1": [
    { id: "memory-1", rotation: 5, x: "60%", y: "20%", width: "35%", z: 3 },
  ],
}
```

**The photo will move from position 1 to position 2 when advancing.**

---

## Final Page Changes

### How do I change the final cat illustration?

**File:** `config.js`

**Line/Function:** Lines 198-206

**Edit:**
```javascript
photos: {
  finalIllustration: {
    src: "assets/illustrations/your-illustration.svg",
    alt: "Description of your illustration",
    rotation: 4,
    x: "58%",
    y: "28%",
    width: "34%",
    z: 4,
  },
}
```

**Add your illustration to:** `public/assets/illustrations/`

---

### How do I change the final message?

**File:** `config.js`

**Line/Function:** Lines 209-223

**Edit:**
```javascript
finalReveal: {
  label: "Your label",
  headline: "Your headline",
  subhead: "Your subhead",
  mainAnswer: "Your main answer",
  bridge: "Your bridge",
  coda: "Your coda",
  personalMessage: `Your personal message`,
}
```

---

## Advanced Changes

### How do I add more than 4 answer options?

**Current UI assumes 4 options.** To add more:

1. Update config.js to have more options in the array
2. Update src/main.js line 156 to generate more letters
3. Test on different screen sizes (may need CSS adjustments)

---

### How do I add a progress bar to the reaction phase?

**Not currently implemented.** Would require:
1. Adding progress HTML to renderReaction()
2. Adding CSS for progress bar
3. Adding timing logic to update progress

---

### How do I add sound effects?

**Would require:**
1. Add audio files to public/assets/
2. Create an audio player in main.js
3. Trigger sounds on state changes
4. Consider user preferences (mute option)

---

### How do I add a dark mode?

**Would require:**
1. Add CSS variables for dark theme
2. Add a theme toggle in config.js
3. Add logic to switch CSS variables
4. Persist theme preference in localStorage

---

## Summary

For most changes, you only need to edit `config.js`. For visual changes, edit `src/styles.css`. For logic changes, edit `src/main.js`. For photo behavior, edit `config.js` photos section.

**Always test after making changes:**
1. Run `npm run dev`
2. Test the changed feature
3. Run `npm run build`
4. Test the built version with `npm run preview`
5. Commit and push to deploy
