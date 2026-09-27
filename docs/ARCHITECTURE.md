# Architecture Guide

## Application Overview

This is a **static web application** — a birthday quiz that transforms into a love letter. It's a single-page experience with no backend, no database, and no authentication. The entire application runs in the user's browser using vanilla JavaScript.

### What the Application Does

1. **Landing Page**: Displays an introduction with a call-to-action button
2. **Quiz Phase**: Presents 5 questions, each with 4 answer options
3. **Reaction Phase**: Shows a personalized response based on the user's answer
4. **Surprise Phase**: Reveals a twist — "there was never really a test"
5. **Fake Score**: Shows a fake "calculating" animation
6. **Final Reveal**: Displays the main message: "It's your smile" with a personal message and optional photo
7. **Photo Layer**: Throughout the experience, polaroid-style photos are displayed in the background, changing position and composition based on the current phase

### How a Browser Loads It

```
User opens URL
    ↓
Browser sends HTTP request to GitHub Pages
    ↓
GitHub Pages returns index.html
    ↓
Browser parses HTML
    ↓
Browser loads CSS (styles.css)
    ↓
Browser loads JavaScript (main.js, config.js, photoStage.js)
    ↓
JavaScript executes and renders the initial state
    ↓
User interacts with the application
```

### What Happens After the User Opens the URL

1. **DNS Resolution**: The domain name (e.g., `username.github.io`) is resolved to an IP address
2. **HTTP Request**: Browser sends a GET request to the server
3. **Server Response**: GitHub Pages returns the `index.html` file
4. **HTML Parsing**: Browser reads the HTML and discovers linked resources (CSS, JS, images)
5. **Resource Loading**: Browser loads the linked resources in parallel
6. **JavaScript Execution**: The browser executes the JavaScript modules
7. **Initial Render**: The JavaScript renders the landing page state
8. **User Interaction**: The user can now interact with the application

### How HTML/CSS/JavaScript Interact

- **HTML**: Provides the structure — a container `#app` and a photo stage `#photo-stage`
- **CSS**: Provides the visual styling — colors, fonts, layout, animations
- **JavaScript**: Provides the logic — state management, rendering, event handling

The flow:
1. HTML defines the containers
2. CSS defines how they look
3. JavaScript dynamically fills the containers with content based on the current state

### How Assets Are Loaded

- **CSS**: Loaded via `<link>` in the HTML head
- **JavaScript**: Loaded via `<script type="module">` in the HTML body
- **Images**: Loaded dynamically by JavaScript using the `assetUrl()` function
- **Fonts**: System fonts are used (no external font loading)

### How State Is Maintained

State is maintained in a JavaScript object:

```javascript
const state = {
  phase: "landing",           // Current phase of the experience
  questionIndex: 0,           // Which question is being shown
  answersLocked: false,       // Whether the user can still answer
  surpriseStep: 0,            // Which surprise line to show
  revealStep: 0,              // Which reveal line to show
};
```

State is **not persisted** — if the user refreshes the page, they start over. This is intentional for this particular application.

### How User Interactions Trigger Code

1. **Button Click**: User clicks "Let's see →" button
2. **Event Listener**: JavaScript has an event listener attached to the button
3. **Handler Function**: The `startGame()` function is called
4. **State Update**: The state object is updated (`phase: "question"`)
5. **Re-render**: The `render()` function is called, which updates the DOM based on the new state

### How Pages/Components Change

The application uses a **state-driven rendering** approach:

```javascript
function render() {
  app.innerHTML = "";  // Clear current content
  syncPhotoStage();    // Update background photos
  
  switch (state.phase) {
    case "landing":
      renderLanding();
      break;
    case "question":
      renderQuestion();
      break;
    // ... other phases
  }
}
```

Each phase has its own render function that creates the appropriate HTML for that phase.

### How the Build Process Works

```
Source files
    ↓
Vite (build tool)
    ↓
Transforms ES modules → compatible JavaScript
    ↓
Minifies CSS and JavaScript
    ↓
Hashes filenames for cache busting
    ↓
Output to dist/ directory
```

**What Vite does:**
- Bundles JavaScript modules into a single file
- Optimizes assets
- Generates source maps for debugging
- Adds hash to filenames (e.g., `index-abc123.js`) for browser caching

### How Production Files Are Generated

```bash
npm run build
```

This command:
1. Reads `vite.config.js` for configuration
2. Resolves the base path (for GitHub Pages)
3. Processes all source files in `src/`
4. Outputs optimized files to `dist/`
5. Creates an `index.html` with hashed asset references

### How GitHub Pages Serves Them

```
User pushes to GitHub
    ↓
GitHub Actions workflow triggers
    ↓
Workflow runs on a GitHub runner
    ↓
npm ci installs dependencies
    ↓
npm run build creates dist/
    ↓
dist/ is uploaded as an artifact
    ↓
GitHub Pages deploys the artifact
    ↓
Files are served via GitHub's CDN
```

---

## Repository Map

```
parul_birthday_2026/
│
├── config.js                 ← Main configuration file (personalize here)
├── index.html                ← HTML entry point (meta tags for share previews)
├── package.json              ← Project metadata and npm scripts
├── package-lock.json         ← Exact dependency versions (commit this!)
├── vite.config.js            ← Vite build configuration
├── README.md                 ← User-facing documentation
├── .gitignore                ← Files to exclude from Git
│
├── .github/
│   └── workflows/
│       └── pages.yml         ← GitHub Actions deployment workflow
│
├── public/                   ← Static assets (served as-is)
│   ├── .nojekyll             ← Tells GitHub Pages not to use Jekyll
│   ├── robots.txt            ← Tells search engines not to index
│   ├── favicon.svg           ← Browser tab icon
│   └── assets/
│       ├── og-preview.png    ← Social media share image
│       ├── og-preview.svg    ← SVG source for share image
│       ├── .gitkeep          ← Keeps the directory in Git
│       ├── photos/           ← Polaroid photos (you add these)
│       └── illustrations/    ← Illustrations (you add these)
│
├── src/                      ← Source code
│   ├── main.js               ← Main application logic
│   ├── photoStage.js         ← Photo layer management
│   └── styles.css            ← All CSS styling
│
├── dist/                     ← Build output (generated, not committed)
│   ├── index.html            ← Built HTML
│   └── assets/               ← Built and hashed assets
│
├── docs/                     ← Documentation (this directory)
│   ├── ARCHITECTURE.md       ← This file
│   ├── configuration-map.md  ← All configurable values
│   ├── interview-prep.md     ← Interview questions
│   ├── glossary.md           ← Glossary of terms
│   ├── LEARNING_CENTER_CHANGELOG.md ← Changes for learning center
│   └── cheatsheets/          ← Quick reference sheets
│
├── learning/                 ← Learning Center (new, educational)
│   ├── index.html            ← Learning Center entry point
│   ├── modules/              ← Course modules
│   ├── quizzes/              ← MCQs and quizzes
│   ├── labs/                 ├── Practical coding exercises
│   └── assets/               ← Learning-specific assets
│
├── debug/                    ← Local debugging environment (not deployed)
│   ├── app.py                ← Python debugging harness
│   └── requirements.txt      ← Python dependencies
│
├── .vscode/                  ← VS Code configuration
│   ├── launch.json           ← Debug configurations
│   └── tasks.json            ← Build tasks
│
├── Dockerfile.local          ← Local Docker build (not for production)
└── docker-compose.local.yml  ← Local Docker compose (not for production)
```

---

## File-by-File Explanation

### config.js

**FILE:** `config.js`

**WHY IT EXISTS:**
This is the single source of truth for all personalized content. It was designed so you can customize the entire experience without touching any other files.

**WHO USES IT:**
- `src/main.js` imports it to get questions, reactions, and all text
- `src/photoStage.js` uses it for photo configuration

**WHAT HAPPENS IF I CHANGE IT:**
- Changes to text, questions, reactions, or timing will immediately affect the application
- Changes to photo configuration will change which photos appear and where
- If you break the JavaScript syntax, the entire application will fail to load

**SAFE TO MODIFY?:**
✅ YES — This is the primary file you're meant to edit

**RELATED FILES:**
- `src/main.js` — imports and uses the configuration
- `src/photoStage.js` — uses the photo configuration
- `index.html` — you may also need to update meta tags here

---

### index.html

**FILE:** `index.html`

**WHY IT EXISTS:**
This is the HTML entry point that the browser loads first. It defines the page structure and meta tags for social media sharing.

**WHO USES IT:**
- The browser loads this file first
- Social media crawlers (WhatsApp, Twitter, Facebook) read it to generate share previews
- Search engines read it for SEO (though this site has `noindex`)

**WHAT HAPPENS IF I CHANGE IT:**
- Changing meta tags will affect share previews on social media
- Changing the `<title>` will change the browser tab title
- Removing the script tag will break the application
- Removing the container divs will break the JavaScript

**SAFE TO MODIFY?:**
⚠️ CAREFULLY — You can update meta tags, but don't remove the script tag or container divs

**RELATED FILES:**
- `src/main.js` — loaded by the script tag
- `src/styles.css` — linked (though this is actually imported by main.js)
- `public/assets/og-preview.png` — referenced in meta tags

---

### package.json

**FILE:** `package.json`

**WHY IT EXISTS:**
This defines the project metadata, dependencies, and npm scripts. It's the standard Node.js project configuration file.

**WHO USES IT:**
- `npm` uses it to know what to install
- `npm` uses it to define scripts like `dev`, `build`, `preview`
- GitHub Actions uses it to know which Node version to use

**WHAT HAPPENS IF I CHANGE IT:**
- Adding dependencies will require running `npm install`
- Changing scripts will change what `npm run <command>` does
- Removing dependencies may break the build

**SAFE TO MODIFY?:**
⚠️ CAREFULLY — You can add scripts, but be careful with dependencies

**RELATED FILES:**
- `package-lock.json` — auto-generated, exact versions
- `vite.config.js` — referenced by build scripts
- `.github/workflows/pages.yml` — uses the Node version from here

---

### package-lock.json

**FILE:** `package-lock.json`

**WHY IT EXISTS:**
This locks the exact versions of all dependencies. It ensures that everyone who runs `npm install` gets the exact same versions.

**WHO USES IT:**
- `npm ci` (used in CI) uses this to install exact versions
- `npm install` updates this when dependencies change

**WHAT HAPPENS IF I CHANGE IT:**
- Manually editing it can break dependency resolution
- Deleting it will cause `npm install` to regenerate it

**SAFE TO MODIFY?:**
❌ NO — Never edit this manually. Let npm manage it.

**RELATED FILES:**
- `package.json` — the source of truth for dependencies
- `.github/workflows/pages.yml` — CI uses `npm ci` which requires this file

---

### vite.config.js

**FILE:** `vite.config.js`

**WHY IT EXISTS:**
This configures the Vite build tool. It determines how the application is built and what the base path is for assets.

**WHO USES IT:**
- Vite reads this when running `npm run dev` or `npm run build`
- It determines whether assets use relative paths or GitHub Pages paths

**WHAT HAPPENS IF I CHANGE IT:**
- Changing the base path will break asset loading if not coordinated with deployment
- Changing the output directory will require updating GitHub Actions

**SAFE TO MODIFY?:**
⚠️ CAREFULLY — Only modify if you understand the base path implications

**RELATED FILES:**
- `package.json` — scripts that use Vite
- `.github/workflows/pages.yml` — sets BASE_PATH environment variable

---

### src/main.js

**FILE:** `src/main.js`

**WHY IT EXISTS:**
This is the heart of the application. It contains all the logic for state management, rendering, and user interaction.

**WHO USES IT:**
- The browser loads and executes this module
- It imports `config.js` and `photoStage.js`

**WHAT HAPPENS IF I CHANGE IT:**
- Logic changes will affect application behavior
- Syntax errors will break the entire application
- Timing changes will affect the pacing of the experience

**SAFE TO MODIFY?:**
⚠️ CAREFULLY — Only modify if you understand JavaScript and the application flow

**RELATED FILES:**
- `config.js` — imported for configuration
- `src/photoStage.js` — imported for photo management
- `src/styles.css` — imported for styling
- `index.html` — loads this module

---

### src/photoStage.js

**FILE:** `src/photoStage.js`

**WHY IT EXISTS:**
This module manages the polaroid photo layer that appears in the background. It handles photo positioning, transitions, and scene changes.

**WHO USES IT:**
- `src/main.js` imports and calls its functions
- It's driven entirely by configuration in `config.js`

**WHAT HAPPENS IF I CHANGE IT:**
- Photo behavior will change
- Photo transitions may break
- Scene key logic may break

**SAFE TO MODIFY?:**
⚠️ CAREFULLY — Modify photo configuration in `config.js` instead

**RELATED FILES:**
- `config.js` — provides photo configuration
- `src/main.js` — imports and uses this module
- `src/styles.css` — styles the polaroid photos

---

### src/styles.css

**FILE:** `src/styles.css`

**WHY IT EXISTS:**
This contains all the visual styling for the application — colors, fonts, layout, animations, and responsive design.

**WHO USES IT:**
- `src/main.js` imports it
- The browser applies these styles to the HTML

**WHAT HAPPENS IF I CHANGE IT:**
- Visual appearance will change
- Broken CSS may cause layout issues
- Animation changes will affect the feel of the experience

**SAFE TO MODIFY?:**
⚠️ CAREFULLY — Understand CSS before modifying

**RELATED FILES:**
- `src/main.js` — imports this file
- `index.html` — elements styled by this CSS

---

### .github/workflows/pages.yml

**FILE:** `.github/workflows/pages.yml`

**WHY IT EXISTS:**
This is a GitHub Actions workflow that automatically builds and deploys the application to GitHub Pages when you push to the main branch.

**WHO USES IT:**
- GitHub Actions reads and executes this workflow
- It triggers on push to main/master branches

**WHAT HAPPENS IF I CHANGE IT:**
- Deployment behavior will change
- Breaking changes will prevent deployment
- Node version changes may affect compatibility

**SAFE TO MODIFY?:**
⚠️ CAREFULLY — Only modify if you understand GitHub Actions

**RELATED FILES:**
- `package.json` — used for Node version and scripts
- `vite.config.js` — base path configuration
- GitHub repository settings — Pages configuration

---

### public/

**DIRECTORY:** `public/`

**WHY IT EXISTS:**
This directory contains static assets that are served as-is without being processed by the build tool.

**WHO USES IT:**
- The build tool copies these files to `dist/`
- The browser loads them directly

**WHAT HAPPENS IF I CHANGE IT:**
- Changes to assets will be reflected in the build
- Removing assets will break references to them

**SAFE TO MODIFY?:**
✅ YES — Add your own photos and illustrations here

**RELATED FILES:**
- `config.js` — references files in this directory
- `dist/` — build output copies files from here

---

### dist/

**DIRECTORY:** `dist/`

**WHY IT EXISTS:**
This is the build output directory. It contains the production-ready files that are deployed to GitHub Pages.

**WHO USES IT:**
- GitHub Actions deploys this directory to GitHub Pages
- You can preview it locally with `npm run preview`

**WHAT HAPPENS IF I CHANGE IT:**
- Manual changes will be overwritten on the next build
- Changes won't be reflected in Git (it's in `.gitignore`)

**SAFE TO MODIFY?:**
❌ NO — Never manually edit files in `dist/`. Always rebuild.

**RELATED FILES:**
- `src/` — source files that build to this directory
- `public/` — assets copied to this directory
- `.github/workflows/pages.yml` — deploys this directory

---

## Data Flow Diagram

```
User Action
    ↓
Event Listener (in main.js)
    ↓
State Update (state object)
    ↓
render() function called
    ↓
syncPhotoStage() called
    ↓
DOM Update (innerHTML, classList)
    ↓
Browser Repaint
    ↓
User Sees New Screen
```

---

## Build and Deployment Flow

```
Developer edits files
    ↓
git commit
    ↓
git push
    ↓
GitHub receives push
    ↓
GitHub Actions workflow triggers
    ↓
Runner starts (ubuntu-latest)
    ↓
Checkout code
    ↓
Setup Node.js (v20)
    ↓
npm ci (install dependencies)
    ↓
npm run build (with BASE_PATH)
    ↓
dist/ created
    ↓
Upload artifact
    ↓
Deploy to GitHub Pages
    ↓
Available at username.github.io/repo-name/
```

---

## Key Architectural Decisions

### Why Vanilla JavaScript?

- **Simplicity**: No framework overhead
- **Performance**: Smaller bundle size
- **Learning**: Easier to understand for beginners
- **No Build Complexity**: Minimal tooling required

### Why Vite?

- **Fast HMR**: Instant updates during development
- **Modern**: Uses ES modules natively
- **Optimized**: Automatic code splitting and minification
- **Popular**: Well-maintained and documented

### Why GitHub Pages?

- **Free**: No hosting costs
- **Simple**: Automatic deployment via Git
- **Fast**: CDN-backed
- **Secure**: HTTPS by default

### Why State-Driven Rendering?

- **Predictable**: State is the single source of truth
- **Debuggable**: Easy to see what phase the app is in
- **Testable**: Can test state transitions
- **Maintainable**: Clear separation of concerns

---

## Performance Considerations

### Lazy Loading
- Images use `loading="lazy"` to defer loading until needed
- The final photo is only loaded when the reveal phase is reached

### Reduced Motion
- The application respects `prefers-reduced-motion`
- Animations are disabled or accelerated for users who prefer reduced motion

### Asset Optimization
- Images should be compressed before adding to the repository
- Use appropriate formats (JPEG for photos, SVG for illustrations)

### Bundle Size
- The entire JavaScript bundle is small (no framework overhead)
- CSS is minified by Vite
- No external dependencies (only Vite as a dev dependency)

---

## Security Considerations

### No Backend
- No server-side code means no server-side vulnerabilities
- No database means no SQL injection
- No authentication means no auth bypass

### Content Security
- All user-facing text is escaped to prevent XSS
- `escapeHtml()` function sanitizes user content
- No `eval()` or dangerous JavaScript patterns

### Privacy
- No analytics or tracking
- No localStorage (state is in-memory only)
- No external API calls

---

## Accessibility

### Semantic HTML
- Proper use of `<section>`, `<header>`, `<button>` elements
- ARIA labels for screen readers
- Role attributes where appropriate

### Keyboard Navigation
- All interactive elements are keyboard-accessible
- Focus management (auto-focus on buttons)
- Enter/Space key handlers for buttons

### Reduced Motion
- Respects user's motion preferences
- Animations can be disabled
- Essential content is not hidden behind animations

### Color Contrast
- Colors meet WCAG AA standards
- Text is readable against backgrounds
- Focus outlines are visible

---

## Testing the Application

### Manual Testing Checklist

- [ ] Landing page loads
- [ ] Start button works
- [ ] All 5 questions display correctly
- [ ] Answer selection works
- [ ] Reactions display correctly
- [ ] Progress bar updates
- [ ] Surprise phase works
- [ ] Fake score animation works
- [ ] Final reveal displays
- [ ] Personal message shows
- [ ] Optional photo loads (if configured)
- [ ] Restart button works
- [ ] Photos transition correctly
- [ ] Reduced motion works
- [ ] Mobile responsive
- [ ] Keyboard navigation works

### Browser Testing

Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Debugging Tips

### Console Logging
The application has minimal console logging. Add `console.log()` statements in `src/main.js` to debug state changes.

### Breakpoints
Set breakpoints in the browser DevTools Sources panel to pause execution and inspect variables.

### Network Tab
Use the Network tab to verify that assets are loading correctly and check for 404 errors.

### Element Inspector
Use the Elements panel to inspect the DOM and see how the application renders different phases.

---

## Extension Ideas

If you want to extend this application:

1. **Add More Questions**: Edit `config.js` to add more questions to the array
2. **Add Branching Logic**: Modify `main.js` to show different questions based on previous answers
3. **Add Sound Effects**: Add audio elements and play them on state changes
4. **Add Confetti**: Add a confetti animation on the final reveal
5. **Add localStorage**: Persist state so users can resume later
6. **Add Analytics**: Add a simple analytics script (with user consent)
7. **Add Dark Mode**: Add a theme toggle in `config.js` and CSS variables
8. **Add Multiple Languages**: Add internationalization support

---

## Summary

This is a well-architected, simple, and maintainable web application. It demonstrates:

- Clean separation of concerns (config, logic, presentation)
- State-driven rendering
- Modern web development practices (ES modules, Vite)
- Automated deployment (GitHub Actions)
- Accessibility and performance best practices
- No unnecessary complexity

The architecture is intentionally simple to make it easy to learn from and modify.
