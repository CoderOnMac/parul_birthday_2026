# Case Study: Adjusting Message Display Timing

## The Problem

Messages between questions are displaying too fast. You want to increase the timing to give users more time to read.

---

## Step 1: Find the Timing Configuration

**Location:** `src/main.js` lines 7-12

```javascript
const TIMING = {
  reactionHold: prefersReducedMotion ? 800 : 2200,
  surpriseLine: prefersReducedMotion ? 600 : 1800,
  calcMin: prefersReducedMotion ? 1200 : 3200,
  revealStep: prefersReducedMotion ? 400 : 900,
};
```

---

## Step 2: Understand Each Timing Value

### `reactionHold` (line 8)
- **Normal:** 2200ms (2.2 seconds)
- **Reduced motion:** 800ms (0.8 seconds)
- **Controls:** How long the reaction message stays on screen after an answer
- **Used in:** Line 222 - `window.setTimeout(advanceAfterReaction, TIMING.reactionHold)`

### `surpriseLine` (line 9)
- **Normal:** 1800ms (1.8 seconds)
- **Reduced motion:** 600ms (0.6 seconds)
- **Controls:** Time between surprise message lines
- **Used in:** Line 263 - `window.setTimeout(..., TIMING.surpriseLine)`

### `calcMin` (line 10)
- **Normal:** 3200ms (3.2 seconds)
- **Reduced motion:** 1200ms (1.2 seconds)
- **Controls:** Minimum duration of the fake calculation phase
- **Used in:** Lines 283-285 - Fake score timeline based on percentages of this value

### `revealStep` (line 11)
- **Normal:** 900ms (0.9 seconds)
- **Reduced motion:** 400ms (0.4 seconds)
- **Controls:** Time between final reveal steps
- **Used in:** Line 355 - `window.setTimeout(..., TIMING.revealStep)`

---

## Step 3: Choose Which Value to Change

Based on where messages are too fast:

| If you want to slow down... | Change this value |
|----------------------------|------------------|
| Reaction after answer | `reactionHold` |
| Surprise phase lines | `surpriseLine` |
| Fake calculation phase | `calcMin` |
| Final reveal steps | `revealStep` |

**To slow down ALL phases:** Increase all four values proportionally.

---

## Step 4: Make the Change

**Example:** Increase `reactionHold` from 2200ms to 3000ms (0.8 second increase)

```javascript
const TIMING = {
  reactionHold: prefersReducedMotion ? 800 : 3000,  // Changed from 2200
  surpriseLine: prefersReducedMotion ? 600 : 1800,
  calcMin: prefersReducedMotion ? 1200 : 3200,
  revealStep: prefersReducedMotion ? 400 : 900,
};
```

**Example:** Increase ALL phases by 25%

```javascript
const TIMING = {
  reactionHold: prefersReducedMotion ? 800 : 2750,  // 2200 * 1.25
  surpriseLine: prefersReducedMotion ? 600 : 2250,  // 1800 * 1.25
  calcMin: prefersReducedMotion ? 1200 : 4000,     // 3200 * 1.25
  revealStep: prefersReducedMotion ? 400 : 1125,   // 900 * 1.25
};
```

---

## Step 5: Understand Reduced Motion

The timing values use a ternary operator:

```javascript
prefersReducedMotion ? 800 : 2200
```

- **Left value (800):** Used when user has "reduced motion" enabled in OS settings
- **Right value (2200):** Used for normal users
- **Why:** Users with motion sensitivity prefer faster transitions

**When changing timing:**
- Update both values proportionally
- Keep reduced motion values faster (typically 30-40% of normal)
- Example: If normal is 3000ms, reduced motion could be 1000ms

---

## Step 6: How These Values Are Used

Search for `TIMING.` in `src/main.js` to see where each value is applied:

```bash
grep -n "TIMING\." src/main.js
```

Results:
- Line 222: `TIMING.reactionHold` - after reaction message
- Line 263: `TIMING.surpriseLine` - between surprise lines
- Lines 283-285: `TIMING.calcMin * 0.45`, `* 0.65`, `* 0.85` - fake score timeline
- Line 299: `TIMING.calcMin + 400` - calculation phase minimum
- Line 355: `TIMING.revealStep` - between reveal steps

---

## Step 7: Test the Change

1. Save `src/main.js`
2. If running dev server: Browser should auto-reload
3. Run through the application
4. Count seconds between messages
5. Adjust if still too fast/slow

---

## Quick Reference: Time Conversions

| Milliseconds | Seconds | Description |
|--------------|---------|-------------|
| 500ms | 0.5s | Very fast |
| 1000ms | 1s | Fast |
| 2000ms | 2s | Normal |
| 3000ms | 3s | Slow |
| 5000ms | 5s | Very slow |

---

## Debugging: If Changes Don't Take Effect

1. **Browser cache:** Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. **Wrong file:** Make sure you edited `src/main.js`, not a copy
3. **Dev server:** Stop and restart `npm run dev`
4. **Verify:** Add `console.log(TIMING.reactionHold)` after the TIMING object to check values in browser console

---

## Related: Question-Specific Timing

If you want different timing for specific questions, you'll need to:

1. Move timing logic into `config.js` under each question
2. Use the current question index to select timing
3. Example concept (not in current code):
   ```javascript
   const TIMING = {
     reactionHold: 2200,
     perQuestion: [2000, 2500, 2200, 2800, 2000]  // Different timing per question
   };
   ```

---

## Summary

**To increase message timing:**
1. Open `src/main.js`
2. Find the `TIMING` object (lines 7-12)
3. Increase the relevant timing value(s)
4. Update both normal and reduced-motion values
5. Save and test

**Key insight:** All timing is centralized in one object. Change once, affects everywhere.
