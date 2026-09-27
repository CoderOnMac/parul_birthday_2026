# Configuration Map

Complete reference for every configurable value in the application. If you want to change something, find it here.

---

## Table of Contents

- [Personal Information](#personal-information)
- [Meta Tags](#meta-tags)
- [Introduction Screen](#introduction-screen)
- [Questions](#questions)
- [Surprise Phase](#surprise-phase)
- [Fake Score](#fake-score)
- [Photos](#photos)
- [Final Reveal](#final-reveal)
- [Timing Values](#timing-values)
- [CSS Variables](#css-variables)
- [Build Configuration](#build-configuration)

---

## Personal Information

### recipientName

**Current value:** `"Parul Jagotra"`

**File:** `config.js`

**Line/Function:** Line 7

**What it controls:** The recipient's name, used in photo alt text and personal messages

**Unit:** String (text)

**Safe range:** Any name (keep it reasonable length)

**What happens if increased:** Longer names may wrap in display contexts

**What happens if decreased:** Shorter names will display fine

**Example:**
```javascript
recipientName: "Your Name Here",
```

---

## Meta Tags

### pageTitle

**Current value:** `"Something for you"`

**File:** `config.js`

**Line/Function:** Line 10 (meta.pageTitle)

**What it controls:** Browser tab title

**Unit:** String (text)

**Safe range:** 1-60 characters (browser truncates longer)

**What happens if increased:** May be truncated in browser tab

**What happens if decreased:** Shorter title will display fully

**Example:**
```javascript
meta: {
  pageTitle: "Your Title Here",
  // ...
}
```

---

### description

**Current value:** `"I made something for you. Open it when you have a minute."`

**File:** `config.js`

**Line/Function:** Line 11 (meta.description)

**What it controls:** Meta description for SEO and social media

**Unit:** String (text)

**Safe range:** 50-160 characters (optimal for search engines)

**What happens if increased:** May be truncated in search results

**What happens if decreased:** Less descriptive

**Example:**
```javascript
meta: {
  description: "Your description here",
  // ...
}
```

---

### ogTitle

**Current value:** `"I made something for you."`

**File:** `config.js`

**Line/Function:** Line 12 (meta.ogTitle)

**What it controls:** Open Graph title for social media sharing (Facebook, LinkedIn, etc.)

**Unit:** String (text)

**Safe range:** 1-100 characters

**What happens if increased:** May be truncated on some platforms

**What happens if decreased:** Shorter title will display fully

**Example:**
```javascript
meta: {
  ogTitle: "Your OG title",
  // ...
}
```

---

### ogDescription

**Current value:** `"Five questions. No cheating. (Trust me.)"`

**File:** `config.js`

**Line/Function:** Line 13 (meta.ogDescription)

**What it controls:** Open Graph description for social media sharing

**Unit:** String (text)

**Safe range:** 50-200 characters

**What happens if increased:** May be truncated on some platforms

**What happens if decreased:** Less descriptive

**Example:**
```javascript
meta: {
  ogDescription: "Your OG description",
  // ...
}
```

---

### ogImage

**Current value:** `"assets/og-preview.png"`

**File:** `config.js`

**Line/Function:** Line 14 (meta.ogImage)

**What it controls:** Open Graph image for social media sharing

**Unit:** String (file path)

**Safe range:** Valid path to an image file

**What happens if increased:** N/A (file path, not a numeric value)

**What happens if decreased:** N/A

**Example:**
```javascript
meta: {
  ogImage: "assets/your-image.png",
  // ...
}
```

**Note:** You also need to update the absolute URL in `index.html` for WhatsApp sharing.

---

## Introduction Screen

### intro.line1

**Current value:** `"I have a very important question for you."`

**File:** `config.js`

**Line/Function:** Line 18 (intro.line1)

**What it controls:** First line of text on the landing page

**Unit:** String (text)

**Safe range:** 1-100 characters

**What happens if increased:** May wrap to multiple lines on mobile

**What happens if decreased:** Shorter text will display fine

**Example:**
```javascript
intro: {
  line1: "Your first line",
  // ...
}
```

---

### intro.line2

**Current value:** `"How well do you think you know what I think about you?"`

**File:** `config.js`

**Line/Function:** Line 19 (intro.line2)

**What it controls:** Headline on the landing page

**Unit:** String (text)

**Safe range:** 1-150 characters

**What happens if increased:** May wrap to multiple lines

**What happens if decreased:** Shorter headline

**Example:**
```javascript
intro: {
  line2: "Your headline",
  // ...
}
```

---

### intro.supporting

**Current value:** `"5 questions. No cheating."`

**File:** `config.js`

**Line/Function:** Line 20 (intro.supporting)

**What it controls:** Supporting text below the headline

**Unit:** String (text)

**Safe range:** 1-50 characters

**What happens if increased:** May wrap or look cluttered

**What happens if decreased:** Less information

**Example:**
```javascript
intro: {
  supporting: "Your supporting text",
  // ...
}
```

---

### intro.button

**Current value:** `"Let's see →"`

**File:** `config.js`

**Line/Function:** Line 21 (intro.button)

**What it controls:** Text on the start button

**Unit:** String (text)

**Safe range:** 1-30 characters

**What happens if increased:** Button may become very wide

**What happens if decreased:** Button may look too small

**Example:**
```javascript
intro: {
  button: "Start Quiz →",
  // ...
}
```

---

## Questions

### questions array

**Current value:** Array of 5 question objects

**File:** `config.js`

**Line/Function:** Lines 24-124

**What it controls:** All quiz questions, options, and reactions

**Unit:** Array of objects

**Safe range:** 1-20 questions (more may feel tedious)

**What happens if increased:** Quiz becomes longer

**What happens if decreased:** Quiz becomes shorter

**Example:**
```javascript
questions: [
  {
    question: "Your question?",
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
  // ... more questions
]
```

---

### question.question

**Current value:** Varies per question (e.g., `"What do I think is your best feature?"`)

**File:** `config.js`

**Line/Function:** Lines 26, 45, 65, 85, 105

**What it controls:** The question text

**Unit:** String (text)

**Safe range:** 10-200 characters

**What happens if increased:** May wrap on mobile

**What happens if decreased:** Shorter question

**Example:**
```javascript
{
  question: "What is your favorite color?",
  // ...
}
```

---

### question.options

**Current value:** Array of 4 strings per question

**File:** `config.js`

**Line/Function:** Lines 27, 46-50, 66-70, 86-90, 106-110

**What it controls:** The answer options for each question

**Unit:** Array of strings

**Safe range:** 2-6 options (current UI assumes 4)

**What happens if increased:** Options may be crowded or break layout

**What happens if decreased:** Fewer options to choose from

**Example:**
```javascript
{
  options: ["Red", "Blue", "Green", "Yellow"],
  // ...
}
```

---

### question.preferredIndex

**Current value:** Varies per question (0-3)

**File:** `config.js`

**Line/Function:** Lines 28, 52, 72, 92, 112

**What it controls:** Which option is the "correct/preferred" answer

**Unit:** Integer (index)

**Safe range:** 0 to (options.length - 1)

**What happens if increased:** May cause out-of-bounds error if >= options.length

**What happens if decreased:** N/A

**Example:**
```javascript
{
  preferredIndex: 0, // First option is preferred
  // ...
}
```

---

### question.reactions.preferred

**Current value:** Varies per question

**File:** `config.js`

**Line/Function:** Lines 30, 54, 74, 94, 114

**What it controls:** Reaction shown when user picks the preferred option

**Unit:** String (text)

**Safe range:** 1-150 characters

**What happens if increased:** May wrap

**What happens if decreased:** Shorter reaction

**Example:**
```javascript
{
  reactions: {
    preferred: "That's my favorite!",
    // ...
  }
}
```

---

### question.reactions.byOption

**Current value:** Object mapping option indices to reactions

**File:** `config.js`

**Line/Function:** Lines 31-36, 55-60, 75-80, 95-100, 115-120

**What it controls:** Specific reactions for each option

**Unit:** Object (key-value pairs)

**Safe range:** Must include keys for each option index

**What happens if increased:** N/A (not a numeric value)

**What happens if decreased:** N/A

**Example:**
```javascript
{
  reactions: {
    byOption: {
      0: "Reaction for option 0",
      1: "Reaction for option 1",
      2: "Reaction for option 2",
      3: "Reaction for option 3",
    },
  }
}
```

---

### question.reactions.fallback

**Current value:** Array of fallback reaction strings

**File:** `config.js`

**Line/Function:** Lines 37-41, 61, 81, 101, 121

**What it controls:** Random reactions shown if no specific reaction is defined

**Unit:** Array of strings

**Safe range:** 1-10 fallback reactions

**What happens if increased:** More variety in fallback reactions

**What happens if decreased:** Less variety

**Example:**
```javascript
{
  reactions: {
    fallback: ["Interesting...", "Noted.", "Hmm..."],
  }
}
```

---

## Surprise Phase

### surprise.leadIn

**Current value:** `"One last thing…"`

**File:** `config.js`

**Line/Function:** Line 127

**What it controls:** First line of the surprise phase

**Unit:** String (text)

**Safe range:** 1-50 characters

**What happens if increased:** May wrap

**What happens if decreased:** Shorter text

**Example:**
```javascript
surprise: {
  leadIn: "Wait, one more thing...",
  // ...
}
```

---

### surprise.line1

**Current value:** `"You got all the important ones wrong."`

**File:** `config.js`

**Line/Function:** Line 128

**What it controls:** Second line of the surprise phase

**Unit:** String (text)

**Safe range:** 1-100 characters

**What happens if increased:** May wrap

**What happens if decreased:** Shorter text

**Example:**
```javascript
surprise: {
  line1: "Actually, you missed something...",
  // ...
}
```

---

### surprise.line2

**Current value:** `"Because the answer was never one thing."`

**File:** `config.js`

**Line/Function:** Line 129

**What it controls:** Third line of the surprise phase

**Unit:** String (text)

**Safe range:** 1-100 characters

**What happens if increased:** May wrap

**What happens if decreased:** Shorter text

**Example:**
```javascript
surprise: {
  line2: "The answer isn't simple.",
  // ...
}
```

---

### surprise.line3

**Current value:** `"It's you."`

**File:** `config.js`

**Line/Function:** Line 130

**What it controls:** Final line of the surprise phase (emphasis)

**Unit:** String (text)

**Safe range:** 1-20 characters (keep it punchy)

**What happens if increased:** May lose impact

**What happens if decreased:** May be too brief

**Example:**
```javascript
surprise: {
  line3: "It's everything.",
  // ...
}
```

---

## Fake Score

### fakeScore.calculating

**Current value:** `"Calculating your score…"`

**File:** `config.js`

**Line/Function:** Line 134

**What it controls:** Initial text during fake score calculation

**Unit:** String (text)

**Safe range:** 1-50 characters

**What happens if increased:** May wrap

**What happens if decreased:** Shorter text

**Example:**
```javascript
fakeScore: {
  calculating: "Computing results...",
  // ...
}
```

---

### fakeScore.pivot

**Current value:** `"Actually…"`

**File:** `config.js`

**Line/Function:** Line 135

**What it controls:** Text that appears to pivot away from the fake score

**Unit:** String (text)

**Safe range:** 1-30 characters

**What happens if increased:** May be too long for a pivot

**What happens if decreased:** May be too abrupt

**Example:**
```javascript
fakeScore: {
  pivot: "Wait...",
  // ...
}
```

---

### fakeScore.noScore

**Current value:** `"There is no score."`

**File:** `config.js`

**Line/Function:** Line 136

**What it controls:** Text revealing there's no actual score

**Unit:** String (text)

**Safe range:** 1-50 characters

**What happens if increased:** May dilute the impact

**What happens if decreased:** May be too brief

**Example:**
```javascript
fakeScore: {
  noScore: "This isn't a test.",
  // ...
}
```

---

### fakeScore.bridge

**Current value:** `"I just wanted an excuse to tell you what I think about you."`

**File:** `config.js`

**Line/Function:** Line 137

**What it controls:** Bridge text before the final reveal

**Unit:** String (text)

**Safe range:** 1-100 characters

**What happens if increased:** May wrap

**What happens if decreased:** Shorter bridge

**Example:**
```javascript
fakeScore: {
  bridge: "I wanted to tell you something.",
  // ...
}
```

---

## Photos

### photos.enabled

**Current value:** `true`

**File:** `config.js`

**Line/Function:** Line 145

**What it controls:** Whether the photo layer is enabled

**Unit:** Boolean (true/false)

**Safe range:** true or false

**What happens if increased:** N/A (boolean)

**What happens if decreased:** If set to false, no photos will appear

**Example:**
```javascript
photos: {
  enabled: false, // Disable photos
  // ...
}
```

---

### photos.transitionDurationMs

**Current value:** `700`

**File:** `config.js`

**Line/Function:** Line 146

**What it controls:** Duration of photo transition animations

**Unit:** Milliseconds

**Safe range:** 200-2000

**What happens if increased:** Transitions become slower, more gradual

**What happens if decreased:** Transitions become faster, snappier

**Example:**
```javascript
photos: {
  transitionDurationMs: 500, // Faster transitions
  // ...
}
```

---

### photos.library

**Current value:** Array of photo objects

**File:** `config.js`

**Line/Function:** Lines 147-168

**What it controls:** The library of available photos

**Unit:** Array of objects

**Safe range:** 1-20 photos

**What happens if increased:** More photos available to use

**What happens if decreased:** Fewer photos available

**Example:**
```javascript
photos: {
  library: [
    {
      id: "memory-1",
      src: "assets/photos/memory-1.svg",
      caption: "Our first date",
    },
    // ... more photos
  ],
  // ...
}
```

---

### photo.id

**Current value:** Varies (e.g., `"memory-1"`, `"memory-2"`)

**File:** `config.js`

**Line/Function:** Lines 149, 154, 159, 164

**What it controls:** Unique identifier for a photo

**Unit:** String (identifier)

**Safe range:** Any unique string

**What happens if increased:** N/A (not a numeric value)

**What happens if decreased:** N/A

**Example:**
```javascript
{
  id: "photo-unique-id",
  // ...
}
```

---

### photo.src

**Current value:** Varies (e.g., `"assets/photos/memory-1.svg"`)

**File:** `config.js`

**Line/Function:** Lines 150, 155, 160, 165

**What it controls:** Path to the photo file

**Unit:** String (file path)

**Safe range:** Valid path to an image file

**What happens if increased:** N/A (not a numeric value)

**What happens if decreased:** N/A

**Example:**
```javascript
{
  src: "assets/photos/your-photo.jpg",
  // ...
}
```

---

### photo.caption

**Current value:** Empty string `""` for all current photos

**File:** `config.js`

**Line/Function:** Lines 151, 156, 161, 166

**What it controls:** Caption text displayed below the photo

**Unit:** String (text)

**Safe range:** 0-100 characters

**What happens if increased:** May wrap or clutter the layout

**What happens if decreased:** Empty = no caption

**Example:**
```javascript
{
  caption: "A beautiful memory",
  // ...
}
```

---

### photos.scenes

**Current value:** Object mapping scene keys to photo layouts

**File:** `config.js`

**Line/Function:** Lines 169-197

**What it controls:** Which photos appear in each phase and their positions

**Unit:** Object (key-value pairs)

**Safe range:** As many scenes as you have phases

**What happens if increased:** More scenes defined

**What happens if decreased:** Fewer scenes (may cause missing photos)

**Example:**
```javascript
photos: {
  scenes: {
    landing: [
      { id: "memory-1", rotation: -5, x: "10%", y: "10%", width: "40%", z: 2 },
    ],
    // ... more scenes
  },
  // ...
}
```

---

### scene photo.rotation

**Current value:** Varies (e.g., `-7`, `5`, `-4`, `8`)

**File:** `config.js`

**Line/Function:** Lines 171-172, 175-176, 179-180, 183-184, 187-188, 191-192, 195

**What it controls:** Rotation angle of the photo in degrees

**Unit:** Degrees

**Safe range:** -45 to 45 (larger values may look unnatural)

**What happens if increased:** More extreme rotation

**What happens if decreased:** Less rotation (more straight)

**Example:**
```javascript
{
  rotation: -10, // 10 degrees counter-clockwise
  // ...
}
```

---

### scene photo.x

**Current value:** Varies (e.g., `"6%"`, `"58%"`, `"4%"`, `"62%"`)

**File:** `config.js`

**Line/Function:** Lines 171-172, 175-176, 179-180, 183-184, 187-188, 191-192, 195

**What it controls:** Horizontal position of the photo

**Unit:** Percentage of container width

**Safe range:** 0% to 100%

**What happens if increased:** Photo moves right

**What happens if decreased:** Photo moves left

**Example:**
```javascript
{
  x: "50%", // Center horizontally
  // ...
}
```

---

### scene photo.y

**Current value:** Varies (e.g., `"14%"`, `"8%"`, `"18%"`, `"12%"`)

**File:** `config.js`

**Line/Function:** Lines 171-172, 175-176, 179-180, 183-184, 187-188, 191-192, 195

**What it controls:** Vertical position of the photo

**Unit:** Percentage of container height

**Safe range:** 0% to 100%

**What happens if increased:** Photo moves down

**What happens if decreased:** Photo moves up

**Example:**
```javascript
{
  y: "50%", // Center vertically
  // ...
}
```

---

### scene photo.width

**Current value:** Varies (e.g., `"40%"`, `"36%"`, `"38%"`, `"34%"`, `"44%"`)

**File:** `config.js`

**Line/Function:** Lines 171-172, 175-176, 179-180, 183-184, 187-188, 191-192, 195

**What it controls:** Width of the photo

**Unit:** Percentage of container width

**Safe range:** 10% to 80%

**What happens if increased:** Photo becomes larger

**What happens if decreased:** Photo becomes smaller

**Example:**
```javascript
{
  width: "50%", // Half the container width
  // ...
}
```

---

### scene photo.z

**Current value:** Varies (e.g., `2`, `3`, `4`)

**File:** `config.js`

**Line/Function:** Lines 171-172, 175-176, 179-180, 183-184, 187-188, 191-192, 195

**What it controls:** Z-index (stacking order) of the photo

**Unit:** Integer

**Safe range:** 1-10

**What happens if increased:** Photo appears on top of others

**What happens if decreased:** Photo appears behind others

**Example:**
```javascript
{
  z: 5, // Higher z-index = on top
  // ...
}
```

---

### photos.finalIllustration

**Current value:** Object with cat illustration properties

**File:** `config.js`

**Line/Function:** Lines 198-206

**What it controls:** The cat illustration on the final reveal

**Unit:** Object

**Safe range:** N/A

**What happens if increased:** N/A

**What happens if decreased:** N/A

**Example:**
```javascript
photos: {
  finalIllustration: {
    src: "assets/illustrations/cats-kiss.svg",
    alt: "Two cats sharing a sweet cheek kiss",
    rotation: 4,
    x: "58%",
    y: "28%",
    width: "34%",
    z: 4,
  },
  // ...
}
```

---

## Final Reveal

### finalReveal.label

**Current value:** `"Okay.\nEnough questions."`

**File:** `config.js`

**Line/Function:** Line 210

**What it controls:** First line of the final reveal

**Unit:** String (text, supports \n for line breaks)

**Safe range:** 1-100 characters

**What happens if increased:** May wrap

**What happens if decreased:** Shorter text

**Example:**
```javascript
finalReveal: {
  label: "Finally,\nthe truth.",
  // ...
}
```

---

### finalReveal.headline

**Current value:** `"There was never really a test."`

**File:** `config.js`

**Line/Function:** Line 211

**What it controls:** Headline of the final reveal

**Unit:** String (text)

**Safe range:** 1-100 characters

**What happens if increased:** May wrap

**What happens if decreased:** Shorter headline

**Example:**
```javascript
finalReveal: {
  headline: "This was never a quiz.",
  // ...
}
```

---

### finalReveal.subhead

**Current value:** `"I just wanted to see if you could guess\nwhat I see when I look at you."`

**File:** `config.js`

**Line/Function:** Lines 212-213

**What it controls:** Subheadline explaining the purpose

**Unit:** String (text, supports \n for line breaks)

**Safe range:** 1-150 characters

**What happens if increased:** May wrap multiple times

**What happens if decreased:** Less explanatory

**Example:**
```javascript
finalReveal: {
  subhead: "I wanted you to know\nhow I see you.",
  // ...
}
```

---

### finalReveal.mainAnswer

**Current value:** `"It's your smile."`

**File:** `config.js`

**Line/Function:** Line 214

**What it controls:** The main answer/reveal

**Unit:** String (text)

**Safe range:** 1-50 characters (keep it impactful)

**What happens if increased:** May lose impact

**What happens if decreased:** May be too brief

**Example:**
```javascript
finalReveal: {
  mainAnswer: "It's your kindness.",
  // ...
}
```

---

### finalReveal.bridge

**Current value:** `"But honestly…"`

**File:** `config.js`

**Line/Function:** Line 215

**What it controls:** Bridge text before the coda

**Unit:** String (text)

**Safe range:** 1-30 characters

**What happens if increased:** May be too long for a bridge

**What happens if decreased:** May be too abrupt

**Example:**
```javascript
finalReveal: {
  bridge: "And also...",
  // ...
}
```

---

### finalReveal.coda

**Current value:** `"It's all of it."`

**File:** `config.js`

**Line/Function:** Line 216

**What it controls:** Final coda line

**Unit:** String (text)

**Safe range:** 1-30 characters

**What happens if increased:** May dilute impact

**What happens if decreased:** May be too brief

**Example:**
```javascript
finalReveal: {
  coda: "It's everything.",
  // ...
}
```

---

### finalReveal.personalMessage

**Current value:** Multi-line personal message

**File:** `config.js`

**Line/Function:** Lines 217-220

**What it controls:** The personal message at the end

**Unit:** String (text, supports \n for line breaks)

**Safe range:** 1-500 characters

**What happens if increased:** May be very long

**What happens if decreased:** Shorter message

**Example:**
```javascript
finalReveal: {
  personalMessage: `Your personal message here.

Thank you for being you.`,
  // ...
}
```

---

### finalReveal.photo

**Current value:** `"assets/photo.jpg"`

**File:** `config.js`

**Line/Function:** Line 221

**What it controls:** Path to the optional final photo

**Unit:** String (file path)

**Safe range:** Valid path to an image file, or empty string to disable

**What happens if increased:** N/A (not a numeric value)

**What happens if decreased:** N/A

**Example:**
```javascript
finalReveal: {
  photo: "assets/your-photo.jpg", // or "" to disable
  // ...
}
```

---

### finalReveal.restartLabel

**Current value:** `"Start over ↗"`

**File:** `config.js`

**Line/Function:** Line 222

**What it controls:** Text on the restart button

**Unit:** String (text)

**Safe range:** 1-30 characters

**What happens if increased:** Button may become very wide

**What happens if decreased:** Button may look too small

**Example:**
```javascript
finalReveal: {
  restartLabel: "Play again ↗",
  // ...
}
```

---

## Timing Values

### TIMING.reactionHold

**Current value:** `2200` (or `800` if reduced motion)

**File:** `src/main.js`

**Line/Function:** Line 15

**What it controls:** How long the reaction text is displayed before advancing

**Unit:** Milliseconds

**Safe range:** 500-5000

**What happens if increased:** User waits longer before next question

**What happens if decreased:** User moves through quiz faster

**Example:**
```javascript
const TIMING = {
  reactionHold: 3000, // 3 seconds
  // ...
};
```

---

### TIMING.surpriseLine

**Current value:** `1800` (or `600` if reduced motion)

**File:** `src/main.js`

**Line/Function:** Line 16

**What it controls:** How long each surprise line is displayed

**Unit:** Milliseconds

**Safe range:** 500-5000

**What happens if increased:** Surprise phase is slower

**What happens if decreased:** Surprise phase is faster

**Example:**
```javascript
const TIMING = {
  surpriseLine: 2500, // 2.5 seconds per line
  // ...
};
```

---

### TIMING.calcMin

**Current value:** `3200` (or `1200` if reduced motion)

**File:** `src/main.js`

**Line/Function:** Line 17

**What it controls:** Minimum duration of the fake score calculation

**Unit:** Milliseconds

**Safe range:** 1000-10000

**What happens if increased:** Fake score phase is longer

**What happens if decreased:** Fake score phase is shorter

**Example:**
```javascript
const TIMING = {
  calcMin: 5000, // 5 seconds minimum
  // ...
};
```

---

### TIMING.revealStep

**Current value:** `900` (or `400` if reduced motion)

**File:** `src/main.js`

**Line/Function:** Line 18

**What it controls:** How long to wait between each reveal step

**Unit:** Milliseconds

**Safe range:** 300-2000

**What happens if increased:** Final reveal is slower, more dramatic

**What happens if decreased:** Final reveal is faster

**Example:**
```javascript
const TIMING = {
  revealStep: 1200, // 1.2 seconds per step
  // ...
};
```

---

## CSS Variables

### --bg

**Current value:** `#f7f4f1`

**File:** `src/styles.css`

**Line/Function:** Line 3

**What it controls:** Background color of the page

**Unit:** Hex color code

**Safe range:** Any valid CSS color

**What happens if increased:** N/A (not a numeric value)

**What happens if decreased:** N/A

**Example:**
```css
:root {
  --bg: #ffffff; /* White background */
}
```

---

### --bg-elevated

**Current value:** `#ffffff`

**File:** `src/styles.css`

**Line/Function:** Line 4

**What it controls:** Background color of elevated elements (cards, buttons)

**Unit:** Hex color code

**Safe range:** Any valid CSS color

**What happens if increased:** N/A

**What happens if decreased:** N/A

**Example:**
```css
:root {
  --bg-elevated: #f0f0f0;
}
```

---

### --text

**Current value:** `#1a1816`

**File:** `src/styles.css`

**Line/Function:** Line 5

**What it controls:** Main text color

**Unit:** Hex color code

**Safe range:** Any valid CSS color

**What happens if increased:** N/A

**What happens if decreased:** N/A

**Example:**
```css
:root {
  --text: #000000; /* Pure black */
}
```

---

### --text-muted

**Current value:** `#6b6560`

**File:** `src/styles.css`

**Line/Function:** Line 6

**What it controls:** Muted text color (supporting text, labels)

**Unit:** Hex color code

**Safe range:** Any valid CSS color

**What happens if increased:** N/A

**What happens if decreased:** N/A

**Example:**
```css
:root {
  --text-muted: #888888;
}
```

---

### --accent

**Current value:** `#c4a098`

**File:** `src/styles.css`

**Line/Function:** Line 7

**What it controls:** Accent color (focus outlines, highlights)

**Unit:** Hex color code

**Safe range:** Any valid CSS color

**What happens if increased:** N/A

**What happens if decreased:** N/A

**Example:**
```css
:root {
  --accent: #ff6b6b; /* Red accent */
}
```

---

### --radius

**Current value:** `16px`

**File:** `src/styles.css`

**Line/Function:** Line 11

**What it controls:** Border radius for cards and buttons

**Unit:** Pixels

**Safe range:** 0-32px

**What happens if increased:** More rounded corners

**What happens if decreased:** Sharper corners

**Example:**
```css
:root {
  --radius: 24px; /* More rounded */
}
```

---

### --radius-lg

**Current value:** `24px`

**File:** `src/styles.css`

**Line/Function:** Line 12

**What it controls:** Larger border radius for major elements

**Unit:** Pixels

**Safe range:** 0-48px

**What happens if increased:** More rounded corners

**What happens if decreased:** Sharper corners

**Example:**
```css
:root {
  --radius-lg: 32px;
}
```

---

### --max-width

**Current value:** `28rem`

**File:** `src/styles.css`

**Line/Function:** Line 20

**What it controls:** Maximum width of the main content area

**Unit:** CSS length (rem, px, etc.)

**Safe range:** 20rem-40rem

**What happens if increased:** Content area becomes wider

**What happens if decreased:** Content area becomes narrower

**Example:**
```css
:root {
  --max-width: 32rem; /* Wider content */
}
```

---

### --transition

**Current value:** `0.45s cubic-bezier(0.22, 1, 0.36, 1)`

**File:** `src/styles.css`

**Line/Function:** Line 21

**What it controls:** Default transition duration and easing

**Unit:** CSS time

**Safe range:** 0.1s-1s

**What happens if increased:** Slower transitions

**What happens if decreased:** Faster transitions

**Example:**
```css
:root {
  --transition: 0.3s ease; /* Faster, simpler easing */
}
```

---

## Build Configuration

### BASE_PATH

**Current value:** Set via environment variable or auto-detected

**File:** `vite.config.js`

**Line/Function:** Lines 8-23

**What it controls:** Base path for assets in production builds

**Unit:** String (path)

**Safe range:** `"./"` for relative, `/repo-name/` for GitHub Pages

**What happens if increased:** N/A

**What happens if decreased:** N/A

**Example:**
```bash
BASE_PATH=/my-repo/ npm run build
```

---

### outDir

**Current value:** `"dist"`

**File:** `vite.config.js`

**Line/Function:** Line 28

**What it controls:** Output directory for built files

**Unit:** String (directory name)

**Safe range:** Any valid directory name

**What happens if increased:** N/A

**What happens if decreased:** N/A

**Example:**
```javascript
export default defineConfig({
  build: {
    outDir: "build", // Output to 'build' instead of 'dist'
  },
});
```

---

### assetsDir

**Current value:** `"assets"`

**File:** `vite.config.js`

**Line/Function:** Line 29

**What it controls:** Directory name for built assets within outDir

**Unit:** String (directory name)

**Safe range:** Any valid directory name

**What happens if increased:** N/A

**What happens if decreased:** N/A

**Example:**
```javascript
export default defineConfig({
  build: {
    assetsDir: "static", // Assets in 'dist/static/'
  },
});
```

---

## Summary

This configuration map covers every customizable value in the application. To change something:

1. Find the setting in this document
2. Note the file and line number
3. Edit the value in the source file
4. Rebuild: `npm run build`
5. Test locally: `npm run preview`
6. Commit and push to deploy

For most changes, you only need to edit `config.js`. Timing values require editing `src/main.js`. Visual styles require editing `src/styles.css`.
