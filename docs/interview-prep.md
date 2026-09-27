# Interview Preparation

Questions organized by difficulty level, including application-specific questions.

---

## Beginner Questions

### What is HTML?

**Answer:** HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using elements and tags. HTML is not a programming language — it's a markup language that defines content structure.

---

### What is CSS?

**Answer:** CSS (Cascading Style Sheets) is the language used to style HTML documents. It controls the visual presentation: colors, fonts, layout, spacing, and animations. CSS separates content (HTML) from presentation (CSS).

---

### What is JavaScript?

**Answer:** JavaScript is a programming language that runs in the browser. It adds interactivity, dynamic content, and logic to web pages. JavaScript can manipulate the DOM, respond to user events, make network requests, and much more.

---

### What is the DOM?

**Answer:** The DOM (Document Object Model) is a tree-like representation of an HTML document that JavaScript can access and modify. The browser creates the DOM when it parses HTML, and JavaScript can use the DOM to dynamically change the page.

---

### What is Git?

**Answer:** Git is a distributed version control system for tracking changes in code. Git allows multiple people to collaborate on the same codebase, maintains a history of changes, and enables reverting to previous versions.

---

## Intermediate Questions

### What is the difference between `let` and `const`?

**Answer:** `let` variables can be reassigned after declaration, while `const` variables cannot. However, `const` objects can have their properties modified — you just can't reassign the variable itself. Best practice is to use `const` by default and `let` only when you need to reassign.

---

### What is the difference between Flexbox and Grid?

**Answer:** Flexbox is a one-dimensional layout system (either rows or columns), while Grid is a two-dimensional layout system (rows and columns simultaneously). Flexbox is best for arranging items in a line and distributing space along one axis. Grid is best for complex two-dimensional layouts. This application uses Flexbox because the layout is primarily one-dimensional (vertical stacking).

---

### What is event bubbling?

**Answer:** Event bubbling is when an event propagates from the target element up through its ancestors in the DOM tree. When you click a button, the click event fires on the button, then bubbles up to its parent, then to the parent's parent, and so on. You can stop bubbling with `event.stopPropagation()`.

---

### What is the difference between Promise and async/await?

**Answer:** Promises are objects representing the eventual completion or failure of an asynchronous operation. Async/await is syntactic sugar over Promises that makes asynchronous code look and behave more like synchronous code. Async/await is generally more readable for complex asynchronous flows, while Promises are useful for parallel operations with `Promise.all`.

---

### What is the difference between Git merge and rebase?

**Answer:** Git merge creates a new merge commit that combines the histories of two branches, preserving the complete history. Git rebase rewrites history by moving commits from one branch onto another, creating a linear history. Merge is safer and preserves history, while rebase creates a cleaner history but can be dangerous if used on shared branches. Best practice: use rebase for local cleanup, merge for integrating shared branches.

---

### What is the difference between GitHub and Git?

**Answer:** Git is the version control system (the software/tool). GitHub is a web-based hosting service for Git repositories (the platform). You can use Git locally without GitHub, but GitHub needs Git. GitHub provides collaboration features, issue tracking, and CI/CD on top of Git.

---

### What is the difference between a workflow and a job in GitHub Actions?

**Answer:** A workflow is a complete automation process defined in a YAML file. A job is a unit of work within a workflow. Workflows can contain multiple jobs that run in parallel or sequentially. Jobs contain steps, which are the individual tasks to execute.

---

### What is the difference between a Docker image and a container?

**Answer:** A Docker image is a read-only template for creating containers. Images contain all the necessary files, dependencies, and configuration to run an application. A container is a running instance of an image. You can create multiple containers from the same image.

---

### What is the difference between `==` and `===` in JavaScript?

**Answer:** `==` is the loose equality operator that performs type coercion before comparing. `===` is the strict equality operator that does not perform type coercion. For example, `5 == "5"` is true (type coercion), but `5 === "5"` is false (different types). Best practice is to always use `===` to avoid unexpected behavior.

---

## Application-Specific Questions

### Explain the application's architecture.

**Answer:** This is a static web application with no backend. The architecture consists of:
- HTML: Minimal structure with containers
- CSS: All styling in one file with CSS variables
- JavaScript: State-driven rendering with vanilla JS
- Build: Vite for bundling and optimization
- Deployment: GitHub Actions → GitHub Pages

The application uses a state object to track the current phase (landing, question, reaction, etc.). When state changes, the `render()` function updates the DOM accordingly. All content is generated dynamically by JavaScript from configuration in `config.js`.

---

### What happens after a user clicks the next-question button?

**Answer:** When a user clicks an answer option:
1. The click event fires
2. The event listener calls `onSelectAnswer(index)`
3. The function checks if answers are locked (prevents multiple clicks)
4. It locks the answers (`state.answersLocked = true`)
5. It picks a reaction based on the selected option
6. It updates the UI to show the selected option
7. After a timeout, it advances to the reaction phase
8. The `render()` function is called with the new state
9. The reaction text is displayed
10. After another timeout, it advances to the next question or surprise phase

---

### Where is the application state stored?

**Answer:** The application state is stored in a JavaScript object called `state` in `src/main.js` (lines 21-27). It contains:
- `phase`: Current phase of the experience
- `questionIndex`: Which question is being shown
- `answersLocked`: Whether the user can still answer
- `surpriseStep`: Which surprise line to show
- `revealStep`: Which reveal step to show

State is not persisted — if the user refreshes, they start over. This is intentional for this particular application.

---

### How does the application transition between questions?

**Answer:** Transitions are managed by the `render()` function and the state object:
1. User answers a question
2. State is updated to "reaction" phase
3. `render()` is called
4. Reaction text is displayed
5. `setTimeout` waits for the reaction duration
6. State is updated to next question or surprise
7. `render()` is called again
8. New question or content is displayed

Photos also transition based on the scene key, which is determined by the current phase and question index.

---

### How are assets loaded?

**Answer:** Assets are loaded dynamically by JavaScript:
- CSS is imported by `main.js` and bundled by Vite
- JavaScript modules are imported with ES module syntax
- Images are loaded using the `assetUrl()` function which resolves paths based on the base path
- The `assetUrl()` function handles both local development and GitHub Pages paths
- Images use `loading="lazy"` for performance
- The final photo is only loaded when the reveal phase is reached

---

### How does deployment work?

**Answer:** Deployment is automated via GitHub Actions:
1. Developer pushes to GitHub
2. GitHub Actions workflow triggers on push to main/master
3. Workflow runs on ubuntu-latest runner
4. Code is checked out
5. Node.js is set up (v20)
6. Dependencies are installed with `npm ci`
7. Application is built with `npm run build` (with BASE_PATH)
8. Build output is verified
9. Artifact is uploaded
10. Deploy job deploys artifact to GitHub Pages
11. GitHub Pages serves the built files

---

### What happens when GitHub Actions runs?

**Answer:** When a workflow runs:
1. GitHub detects the trigger (push to main)
2. A runner (server) is allocated
3. The runner checks out the repository code
4. Each step executes sequentially
5. If a step fails, the workflow fails
6. Logs are captured for each step
7. Artifacts are uploaded if specified
8. If all steps succeed, the workflow succeeds
9. Deployment job runs if build job succeeded

---

### How would you add another question?

**Answer:** To add another question:
1. Open `config.js`
2. Add a new object to the `questions` array
3. Include: question text, options array, preferredIndex, reactions object
4. Optionally add a photo scene for the new question in `photos.scenes`
5. Test locally with `npm run dev`
6. Build with `npm run build`
7. Commit and push

The application automatically handles any number of questions — the progress bar and question count will update automatically.

---

### How would you change animation duration?

**Answer:** Animation durations are controlled in two places:
1. CSS transitions: `src/styles.css` line 21 (`--transition` variable)
2. JavaScript timing: `src/main.js` lines 14-19 (`TIMING` object)

To change:
- CSS transitions: Update the `--transition` variable
- Phase durations: Update the corresponding value in `TIMING`
- Photo transitions: Update `photos.transitionDurationMs` in `config.js`

Units are milliseconds (1000ms = 1 second).

---

### How would you debug a broken transition?

**Answer:** To debug a broken transition:
1. Reproduce the issue consistently
2. Check browser console for JavaScript errors
3. Check if the state is updating correctly (add `console.log(state)`)
4. Check if the render function is being called
5. Inspect the DOM to see if elements are being created
6. Check CSS for the transition styles
7. Verify the TIMING values are correct
8. Check if reduced motion is affecting the transition
9. Use DevTools Sources panel to set breakpoints in the transition code
10. Step through the code to identify where it fails

---

## Senior-Style Reasoning Questions

### How would you refactor this application if it had 10,000 questions?

**Answer:** For 10,000 questions, I would:
1. Move questions to a separate JSON file or database to avoid loading all at once
2. Implement lazy loading or pagination to load questions in batches
3. Add server-side rendering or a backend for better performance
4. Implement virtual scrolling for the question list
5. Add search and filtering capabilities
6. Consider using a framework with built-in state management (React, Vue)
7. Add caching strategies for repeated questions
8. Implement progressive loading of images
9. Add analytics to track which questions are viewed
10. Consider internationalization if serving multiple languages

---

### How would you optimize assets for better performance?

**Answer:** Asset optimization strategies:
1. Compress images before adding to repository
2. Use modern image formats (WebP, AVIF) with fallbacks
3. Implement lazy loading for images
4. Use responsive images with `srcset`
5. Minify CSS and JavaScript (Vite does this)
6. Use tree shaking to remove unused code
7. Implement code splitting for larger applications
8. Use a CDN for static assets
9. Enable HTTP/2 or HTTP/3
10. Add appropriate cache headers

---

### How would you improve accessibility?

**Answer:** Accessibility improvements:
1. Ensure all interactive elements are keyboard accessible
2. Add comprehensive ARIA labels where needed
3. Ensure color contrast meets WCAG AA standards
4. Test with screen readers
5. Add skip navigation links
6. Ensure focus indicators are visible
7. Test with different screen sizes and zoom levels
8. Add text alternatives for all non-text content
9. Ensure forms have proper labels and error messages
10. Test with different assistive technologies

---

### How would you test this application?

**Answer:** Testing strategy:
1. Unit tests for utility functions (escapeHtml, assetUrl)
2. Integration tests for state management
3. E2E tests with Playwright or Cypress for user flows
4. Visual regression tests for UI consistency
5. Accessibility tests with axe-core
6. Performance tests with Lighthouse
7. Cross-browser testing (Chrome, Firefox, Safari, Edge)
8. Mobile testing on various devices
9. Load testing for performance under traffic
10. Manual testing of all user paths

---

### How would you structure the application if it became much larger?

**Answer:** For a larger application:
1. Use a framework (React, Vue, Svelte) for component architecture
2. Implement proper routing (React Router, Vue Router)
3. Add state management (Redux, Vuex, Zustand)
4. Separate concerns (UI components, business logic, data layer)
5. Use TypeScript for type safety
6. Implement proper error boundaries
7. Add logging and monitoring
8. Implement a backend for data persistence
9. Add authentication and authorization
10. Use a monorepo structure if multiple related applications

---

### What parts are tightly coupled?

**Answer:** Currently tightly coupled parts:
1. State and rendering: The `render()` function is tightly coupled to the state structure
2. Configuration and logic: `config.js` is directly imported and used throughout
3. Photo positioning: Photo positions are hardcoded in config for each scene
4. Timing logic: TIMING values are scattered throughout the code

To decouple:
1. Create a state management system (Redux-like)
2. Make configuration pluggable (load from API)
3. Create a photo positioning system that calculates positions dynamically
4. Centralize timing logic in a single module

---

### What parts could be made reusable?

**Answer:** Reusable parts:
1. The quiz engine (questions, answers, reactions) could be extracted into a library
2. The photo stage system could be reused for other projects
3. The state-driven rendering pattern is reusable
4. The build configuration could be a template
5. The GitHub Actions workflow could be a reusable action
6. The CSS design tokens could be a separate package
7. Utility functions (escapeHtml, assetUrl) are already reusable
8. The accessibility components could be a library

---

### How would you add real-time collaboration?

**Answer:** To add real-time collaboration:
1. Add a backend (Node.js, Python, or serverless)
2. Use WebSockets for real-time communication
3. Add user authentication
4. Implement presence indicators (who's viewing)
5. Add shared state synchronization
6. Implement conflict resolution for simultaneous edits
7. Add activity feeds
8. Use a real-time database (Firebase, Supabase)
9. Add push notifications for updates
10. Implement proper permissions and access control

---

## Summary

These questions cover:
- Foundational knowledge (HTML, CSS, JavaScript, Git)
- Intermediate concepts (language features, tools, architecture)
- Application-specific understanding (how this particular app works)
- Senior-level reasoning (scalability, refactoring, architecture)

Practice answering these questions out loud to prepare for technical interviews.
