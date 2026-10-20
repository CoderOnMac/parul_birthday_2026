# Case Study: Change Button Color Without Changing Text Color

## The Problem

You changed `--text: #df4231` (red) to make the button red, but this also changed all text on the page to red - including questions, headlines, and other content.

---

## Why This Happened

**CSS variables are reusable throughout the stylesheet.**

The `--text` variable is used in multiple places:
- Button background: `background: var(--text);` (line 145)
- Headlines: `color: var(--text);` (line 41)
- Questions: `color: var(--text);` (multiple lines)
- Other text elements

When you change the variable, **every** element using it changes.

---

## Step 1: Restore the Original Text Color

**Location:** `src/styles.css` line 5

Change `--text` back to the original dark color:

```css
:root {
  --bg: #f7f4f1;
  --bg-elevated: #ffffff;
  --text: #1a1816;  /* Restore original dark color */
  --text-muted: #6b6560;
  /* ... */
}
```

---

## Step 2: Add a New Variable for Button Color

**Location:** `src/styles.css` lines 2-20 (the `:root` section)

Add a new CSS variable specifically for the button:

```css
:root {
  --bg: #f7f4f1;
  --bg-elevated: #ffffff;
  --text: #1a1816;
  --text-muted: #6b6560;
  --button-bg: #df4231;  /* New variable for button background */
  --accent: #c4a098;
  /* ... */
}
```

---

## Step 3: Update the Button CSS to Use the New Variable

**Location:** `src/styles.css` line 145

Find the `.btn--primary` class and change it:

```css
.btn--primary {
  align-self: flex-start;
  margin-top: var(--space-sm);
  background: var(--button-bg);  /* Changed from var(--text) */
  color: var(--bg-elevated);     /* Button text stays white/light */
  /* ... */
}
```

---

## Step 4: Check for Button Hover States

The button might have hover effects that also reference `--text`. Check lines 151-158:

```css
.btn--primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 28px rgba(26, 24, 22, 0.14);
  /* If you want hover to be a different shade, add:
  background: darken(var(--button-bg), 10%);
  */
}
```

---

## Step 5: Test the Change

1. Save `src/styles.css`
2. Browser should auto-reload
3. Check:
   - Button is now red
   - Headlines and text are still dark (not red)
   - All other text is unchanged

---

## Understanding CSS Variables

**Why use CSS variables?**
- Reuse values across the stylesheet
- Change once, update everywhere
- Make themes easier to maintain

**The problem:**
- If one variable is used for multiple purposes, changing it affects everything

**The solution:**
- Create specific variables for specific purposes
- Use descriptive names: `--button-bg`, `--text-color`, `--accent-color`

---

## Quick Reference: CSS Variable Naming

| Variable Name | Purpose | Example Value |
|---------------|---------|---------------|
| `--text` | All text content | `#1a1816` (dark) |
| `--text-muted` | Secondary text | `#6b6560` (gray) |
| `--button-bg` | Button background | `#df4231` (red) |
| `--button-text` | Button text color | `#ffffff` (white) |
| `--accent` | Highlights, borders | `#c4a098` (pink) |

---

## If You Want Different Button Colors

You can create multiple button color variables:

```css
:root {
  --button-primary: #df4231;   /* Red */
  --button-secondary: #1a1816; /* Black */
  --button-accent: #c4a098;     /* Pink */
}
```

Then use them in different button classes:

```css
.btn--primary {
  background: var(--button-primary);
}

.btn--secondary {
  background: var(--button-secondary);
}

.btn--accent {
  background: var(--button-accent);
}
```

---

## Debugging: If Text is Still Red

1. **Check browser cache:** Hard refresh (Cmd+Shift+R)
2. **Verify the change:** Add to browser console:
   ```javascript
   getComputedStyle(document.documentElement).getPropertyValue('--text')
   ```
   Should return `#1a1816` not `#df4231`
3. **Check for other CSS files:** Make sure you're editing `src/styles.css`, not a different stylesheet
4. **Search for other uses of red:**
   ```bash
   grep -n "#df4231" src/styles.css
   ```

---

## Summary

**The fix:**
1. Restore `--text` to original dark color
2. Add new variable `--button-bg` with your desired color
3. Update button CSS to use `--button-bg` instead of `--text`

**Key insight:** CSS variables are global. If you need to change one element's color without affecting others, create a specific variable for that element.
