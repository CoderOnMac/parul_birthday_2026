# Glossary

Beginner-friendly definitions of technical terms used in this project.

---

## A

### Accessibility
The practice of making websites usable by people with disabilities. This includes screen reader support, keyboard navigation, and respecting user preferences like reduced motion.

### ARIA
Accessible Rich Internet Applications. A set of attributes that make web content more accessible to people with disabilities. This application uses ARIA labels and aria-live for dynamic content.

### Asset
A file that is part of the website, such as images, fonts, or CSS files. Assets are loaded by the browser to display the page correctly.

### Attribute
Additional information about an HTML element, such as `id`, `class`, `src`, or `href`. Attributes provide extra details about how an element should behave or appear.

---

## B

### Backend
The server-side of a web application. It handles data processing, database operations, and API endpoints. This application does not have a backend.

### Base Path
The path prefix for assets in a built application. For GitHub Pages, this is typically `/repository-name/` to ensure assets load correctly from the subdirectory.

### Browser
A software application used to access and view websites. Examples include Chrome, Firefox, Safari, and Edge. The browser executes JavaScript and renders HTML/CSS.

### Build
The process of transforming source code into production-ready files. This includes bundling, minification, and optimization. This application uses Vite for building.

### Bundle
A single file that combines multiple JavaScript modules into one file for the browser to load. Bundling reduces the number of HTTP requests needed to load a page.

---

## C

### Cache
A temporary storage area that stores frequently used data to speed up future requests. Browsers cache assets like images and CSS to avoid re-downloading them.

### CDN
Content Delivery Network. A network of servers distributed geographically to deliver content faster to users. GitHub Pages uses a CDN to serve this application.

### CI/CD
Continuous Integration/Continuous Deployment. A practice of automatically building, testing, and deploying code changes. This application uses GitHub Actions for CI/CD.

### Client
The user's browser or device that requests and displays web content. The client runs JavaScript and renders the UI.

### Commit
A snapshot of changes in a Git repository. Each commit has a unique ID and a message describing the changes.

### Container
A lightweight, standalone package that includes everything needed to run an application. Containers are created from Docker images.

---

## D

### Deployment
The process of making a web application available to users. This application is deployed to GitHub Pages automatically via GitHub Actions.

### DevTools
Built-in browser tools for debugging and inspecting web pages. Includes Console, Elements, Sources, Network, and Application panels.

### DOM
Document Object Model. A tree-like representation of an HTML document that JavaScript can access and modify. The DOM allows dynamic content updates.

### Docker
A platform for developing, shipping, and running applications in containers. This project includes Docker for local development (not production).

---

## E

### Element
A single component of an HTML document, such as a `<div>`, `<p>`, or `<button>`. Elements can contain content and have attributes.

### Environment Variable
A variable that is set outside of the application code and passed in at runtime. This application uses environment variables for the base path.

### Event
An action that occurs in the browser, such as a click, keypress, or page load. JavaScript can listen for events and respond to them.

### Event Listener
A JavaScript function that waits for a specific event to occur and then executes code in response.

---

## F

### Flexbox
A CSS layout method for arranging items in rows or columns. This application uses Flexbox for the main layout and option cards.

### Frontend
The client-side of a web application that runs in the browser. This includes HTML, CSS, and JavaScript.

### Framework
A pre-built library or set of tools that provides a structure for building applications. This application does not use a framework — it uses vanilla JavaScript.

---

## G

### Git
A distributed version control system for tracking changes in code. Git allows multiple people to collaborate on the same codebase.

### GitHub
A web-based platform for hosting Git repositories. GitHub provides collaboration features, issue tracking, and CI/CD via GitHub Actions.

### GitHub Actions
A CI/CD platform integrated with GitHub that automates builds, tests, and deployments. This application uses GitHub Actions to deploy to GitHub Pages.

### GitHub Pages
A static site hosting service that serves websites directly from GitHub repositories. This application is deployed to GitHub Pages.

---

## H

### HTTP
Hypertext Transfer Protocol. The protocol used for transferring data on the web. HTTP is the foundation of data communication on the web.

### HTTPS
HTTP Secure. The encrypted version of HTTP that provides secure communication between the browser and server. This application is served over HTTPS.

### Host
A computer or server that stores and serves website files. GitHub Pages is the host for this application.

---

## I

### Image
A Docker image is a read-only template for creating containers. Images contain all the necessary files and dependencies to run an application.

### Import
A JavaScript statement that brings in modules or functions from other files. This application uses ES module imports.

### Index
The default file that a web server serves when a directory is requested. For this application, `index.html` is the index file.

---

## J

### JavaScript
A programming language that runs in the browser. JavaScript adds interactivity, dynamic content, and logic to web pages.

### Job
A unit of work in a GitHub Actions workflow. Jobs contain steps and run on runners. This workflow has a build job and a deploy job.

### JSON
JavaScript Object Notation. A lightweight data format that is easy for humans to read and write. This application uses JSON for configuration.

---

## K

### Keyframe
A specific point in a CSS animation where the style is defined. Keyframes define the start and end points of an animation.

---

## L

### Lockfile
A file that records the exact versions of dependencies installed. `package-lock.json` is the lockfile for this project, ensuring reproducible builds.

### Localhost
The hostname that refers to the local computer. Localhost maps to the IP address 127.0.0.1. Development servers typically run on localhost.

---

## M

### Media Query
A CSS technique that applies different styles based on device characteristics like screen width. This application uses media queries for responsive design.

### Meta Tag
An HTML tag that provides metadata about the document. Meta tags are used for SEO, social media sharing, and browser behavior.

### Minification
The process of removing unnecessary characters from code (like whitespace and comments) to reduce file size. Vite minifies CSS and JavaScript during the build.

### Module
A JavaScript file that exports functions, objects, or values for use in other files. This application uses ES modules for code organization.

---

## N

### Node.js
A JavaScript runtime that allows JavaScript to run outside of a browser. This application uses Node.js for the build process.

### npm
Node Package Manager. A package manager for JavaScript that installs dependencies and manages project scripts.

---

## O

### OG Tag
Open Graph tag. Meta tags that control how a webpage appears when shared on social media platforms like Facebook and LinkedIn.

---

## P

### Package Manager
A tool that automates the process of installing, updating, and managing software dependencies. npm is the package manager for this project.

### Permission
Settings that control what a GitHub Actions workflow can do, such as reading repository contents or writing to GitHub Pages.

### Port
A number that identifies a specific process or service on a computer. Development servers typically use ports like 5173 (Vite's default).

### Production
The live environment where the application is accessible to real users. This application's production is on GitHub Pages.

### Pull Request
A proposal to merge changes from one branch to another in Git. Pull requests enable code review and discussion before merging.

---

## R

### React
A JavaScript library for building user interfaces. This application does not use React — it uses vanilla JavaScript.

### Reduced Motion
A user preference that indicates the user prefers less animation. This application respects this preference by disabling or accelerating animations.

### Remote
A version of a Git repository hosted on a server like GitHub. The local repository can push and pull changes to/from the remote.

### Repository
A storage location for software packages and project files. A Git repository contains all the project files and the complete history of changes.

### Responsive Design
An approach to web design that makes web pages render well on a variety of devices and screen sizes. This application uses responsive design.

### Runner
A server that executes jobs in a GitHub Actions workflow. This workflow uses ubuntu-latest runners.

---

## S

### Script
A file containing JavaScript code that the browser executes. This application loads `main.js` as a script.

### Selector
A pattern used in CSS to select HTML elements to style. Selectors can target elements by tag, class, ID, or attribute.

### Server
A computer that provides resources or services to other computers. GitHub Pages is the server for this application.

### Source Map
A file that maps the built, minified code back to the original source code. Source maps make debugging easier by showing the original code in DevTools.

### Static Site
A website that serves pre-built files that don't change on the server. This application is a static site — all logic runs in the browser.

### Step
A single task within a GitHub Actions job. Steps can run shell commands or use pre-built actions.

---

## T

### Tag
A marker in Git that points to a specific commit. Tags are often used to mark release versions.

### Terminal
A command-line interface for interacting with the computer. Developers use the terminal to run commands like `npm install` and `git push`.

### Token
A string of characters used for authentication. GitHub Actions uses OIDC tokens for secure deployment.

### Transition
A CSS effect that animates a change from one style to another. This application uses transitions for button hover effects.

---

## U

### URL
Uniform Resource Locator. The address of a resource on the internet. This application's URL on GitHub Pages is `username.github.io/repository-name/`.

### User Agent
A string that the browser sends to the server identifying itself. User agents can be used to serve different content based on the browser or device.

---

## V

### Variable
A named storage location in programming. In JavaScript, variables store data values like strings, numbers, and objects.

### Version Control
A system that records changes to files over time. Git is a version control system.

### Viewport
The visible area of a web page. The viewport meta tag controls how the page is scaled on mobile devices.

### Vite
A modern build tool that provides fast development and optimized production builds. This application uses Vite for building.

---

## W

### Workflow
A definition of a process in GitHub Actions. Workflows define when to run (triggers) and what to do (jobs and steps).

---

## Y

### YAML
A human-readable data serialization language. GitHub Actions workflows are written in YAML.

---

## Summary

This glossary covers the key terms you'll encounter while working with this application. For more detailed explanations, refer to the specific learning modules.
