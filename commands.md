# Command Handbook

Your complete reference for developing, building, and deploying this application.

---

## Table of Contents

- [Installation](#installation)
- [First-Time Setup](#first-time-setup)
- [Running Locally](#running-locally)
- [Building](#building)
- [Preview](#preview)
- [Git Commands](#git-commands)
- [GitHub Commands](#github-commands)
- [GitHub Actions](#github-actions)
- [Docker](#docker)
- [Debugging](#debugging)
- [Troubleshooting](#troubleshooting)

---

## Installation

### Prerequisites

#### Node.js

**What it is:** A JavaScript runtime that allows you to run JavaScript outside of a browser.

**Why you need it:** This project uses Vite, which requires Node.js to run.

**How to check if you have it:**
```bash
node --version
```

**How to install:**
- macOS: Download from [nodejs.org](https://nodejs.org/) or use Homebrew: `brew install node`
- Windows: Download from [nodejs.org](https://nodejs.org/)
- Linux: Use your package manager (e.g., `sudo apt install nodejs`)

**Required version:** Node.js 18 or higher (this project uses v20 in CI)

**Common errors:**
- `command not found: node` → Node.js is not installed or not in your PATH
- Version too old → Update to a newer version

---

#### npm (Node Package Manager)

**What it is:** The package manager for Node.js. It comes bundled with Node.js.

**Why you need it:** To install project dependencies and run scripts.

**How to check if you have it:**
```bash
npm --version
```

**How to install:** It comes with Node.js. If Node.js is installed, npm should be available.

**Common errors:**
- `command not found: npm` → Node.js installation is incomplete
- Permission errors → You may need to fix npm permissions or use a Node version manager like nvm

---

#### Git

**What it is:** A distributed version control system.

**Why you need it:** To clone the repository and manage your changes.

**How to check if you have it:**
```bash
git --version
```

**How to install:**
- macOS: Comes with Xcode Command Line Tools or download from [git-scm.com](https://git-scm.com/)
- Windows: Download from [git-scm.com/](https://git-scm.com/)
- Linux: Use your package manager (e.g., `sudo apt install git`)

**Common errors:**
- `command not found: git` → Git is not installed
- Permission errors → Check your SSH key configuration if using GitHub

---

#### Docker (Optional)

**What it is:** A platform for developing, shipping, and running applications in containers.

**Why you need it:** For the local debugging environment (included in this project for learning purposes).

**How to check if you have it:**
```bash
docker --version
```

**How to install:**
- macOS: Download [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/)
- Windows: Download [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/)
- Linux: Install Docker Engine following the [official documentation](https://docs.docker.com/engine/install/)

**Common errors:**
- `command not found: docker` → Docker is not installed
- `Cannot connect to the Docker daemon` → Docker Desktop is not running

---

## First-Time Setup

### Clone the Repository

**Command:**
```bash
git clone <repository-url>
cd parul_birthday_2026
```

**What this does:**
- `git clone` downloads a copy of the repository from GitHub to your local machine
- `cd` changes your current directory to the project folder

**Where to run it:** Anywhere on your computer where you want to store the project

**What files it creates:**
- A new folder named `parul_birthday_2026` containing all the project files

**Success looks like:**
- You see the project files listed when you run `ls`
- You're in the project directory (your prompt shows the folder name)

**Common errors:**
- `repository not found` → The URL is incorrect or you don't have access
- Permission denied → Check your GitHub authentication

---

### Install Dependencies

**Command:**
```bash
npm install
```

**What this does:**
- Reads `package.json` to see what dependencies are needed
- Downloads the dependencies from the npm registry
- Creates a `node_modules/` folder with the installed packages
- Creates or updates `package-lock.json` with exact versions

**Where to run it:** In the project root directory (where `package.json` is)

**What files it creates/modifies:**
- `node_modules/` (new folder with dependencies)
- `package-lock.json` (updated with exact versions)

**Success looks like:**
- Command completes without errors
- You see a `node_modules/` folder
- `package-lock.json` exists

**Common errors:**
- `npm: command not found` → Node.js/npm is not installed
- `EACCES` permission errors → May need to fix npm permissions or use a Node version manager
- Network errors → Check your internet connection or npm registry status

**How to fix them:**
- For permission errors on macOS/Linux: Consider using `nvm` (Node Version Manager) instead of system Node
- For network errors: Try using a different registry: `npm install --registry https://registry.npmjs.org/`

---

## Running Locally

### Start Development Server

**Command:**
```bash
npm run dev
```

**What this does:**
- Starts Vite's development server
- Enables Hot Module Replacement (HMR) for instant updates
- Serves the application at a local URL
- Watches for file changes and automatically reloads

**Where to run it:** In the project root directory

**What happens:**
- Vite starts a server
- It prints a local URL (usually `http://localhost:5173`)
- It watches your files for changes

**Success looks like:**
```
  VITE v6.0.0  ready in 123 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Common errors:**
- `command not found: vite` → Dependencies not installed (run `npm install`)
- Port already in use → Another process is using port 5173
- Module not found → Check that all source files exist

**How to fix them:**
- For port in use: Vite will automatically try the next available port (5174, 5175, etc.)
- For module errors: Check that `src/main.js`, `config.js`, and `src/styles.css` exist

---

### Understanding Localhost

**What it is:** `localhost` is a hostname that refers to your own computer. It's mapped to the IP address `127.0.0.1`.

**What the port is:** A number that identifies a specific service/application on your computer. Vite defaults to port 5173.

**Why we use it:** Development servers run locally so you can test changes before deploying.

**Hot Reload:** When you save a file, Vite automatically updates the browser without a full page refresh. This makes development much faster.

**Development Server vs Production Server:**
- Development server: Optimized for speed, includes source maps, not optimized for performance
- Production server: Optimized for performance, minified code, no source maps

---

## Building

### Build for Production

**Command:**
```bash
npm run build
```

**What this does:**
- Runs Vite in build mode
- Transforms ES modules to compatible JavaScript
- Minifies CSS and JavaScript
- Hashes filenames for cache busting
- Outputs files to the `dist/` directory

**Where to run it:** In the project root directory

**What happens:**
```
source code (src/)
     ↓
Vite processes files
     ↓
Bundles JavaScript
     ↓
Minifies CSS and JS
     ↓
Adds hashes to filenames
     ↓
dist/
```

**What files it creates/modifies:**
- `dist/` directory (created or overwritten)
- `dist/index.html` (built HTML with hashed asset references)
- `dist/assets/` (built and hashed CSS and JS files)

**Success looks like:**
```
vite v6.0.0 building for production...
✓ 3 modules transformed.
dist/index.html                   0.45 kB
dist/assets/index-abc123.js       15.23 kB
dist/assets/index-def456.css      8.67 kB
```

**Common errors:**
- Build fails with syntax errors → Check your JavaScript/CSS for syntax mistakes
- Module not found → Check import paths in your source files
- Out of memory → Close other applications or increase Node memory limit

**How to fix them:**
- For syntax errors: Use a linter or check the error message for the specific line
- For module errors: Verify all imported files exist and paths are correct

---

### Build for GitHub Pages

**Command:**
```bash
BASE_PATH=/parul_birthday_2026/ npm run build
```

**What this does:**
- Same as regular build, but sets the base path for GitHub Pages
- Ensures assets are loaded from the correct subdirectory

**Where to run it:** In the project root directory

**Why you need it:** GitHub Pages serves project sites from a subdirectory (e.g., `/repo-name/`), so asset paths need to include this.

**What changes:**
- Asset URLs in the built HTML will include the base path
- Example: `/assets/index-abc123.js` becomes `/parul_birthday_2026/assets/index-abc123.js`

**Success looks like:** Same as regular build, but with correct base path in output

**Common errors:**
- Wrong base path → Assets will 404 on GitHub Pages
- Missing slash → Path resolution will be incorrect

**How to fix them:**
- Ensure the base path matches your repository name exactly
- Include both leading and trailing slashes: `/repo-name/`

---

## Preview

### Preview Production Build

**Command:**
```bash
npm run preview
```

**What this does:**
- Serves the production build from `dist/`
- Simulates how the app will behave in production
- Useful for testing before deployment

**Where to run it:** In the project root directory (after running `npm run build`)

**What happens:**
- Vite starts a preview server
- Serves files from `dist/` instead of `src/`
- No hot reload (since it's serving built files)

**Success looks like:**
```
  VITE v6.0.0  preview server running at:

  ➜  Local:   http://localhost:4173/
```

**Common errors:**
- `dist/` directory doesn't exist → Run `npm run build` first
- Port already in use → Vite will try the next available port

---

### Preview for GitHub Pages

**Command:**
```bash
npm run preview:pages
```

**What this does:**
- Same as regular preview, but with the GitHub Pages base path
- Simulates how the app will behave on GitHub Pages

**Where to run it:** In the project root directory (after building with BASE_PATH)

**Why you need it:** To test that asset paths work correctly with the GitHub Pages subdirectory

---

## Git Commands

### Check Status

**Command:**
```bash
git status
```

**What it does:** Shows the current state of your working directory and staging area.

**What it tells you:**
- Which files have been modified
- Which files are staged for commit
- Which files are untracked (new files)
- Which branch you're on

**Success looks like:**
```
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  modified:   config.js
  modified:   src/main.js

Untracked files:
  new-file.js
```

**Why use it:** Before committing, always check status to ensure you're committing the right files.

---

### Add Files to Staging

**Command:**
```bash
git add <file>
```

**What it does:** Moves changes from the working directory to the staging area.

**What the staging area is:** A place where you prepare files for the next commit. Think of it as a "commit preparation zone."

**Examples:**
```bash
git add config.js              # Stage a specific file
git add src/                   # Stage all files in src/
git add .                      # Stage all changes
git add -A                     # Stage all changes including deletions
```

**Why use it:** To choose which changes to include in the next commit.

**Common mistake:** Adding files you didn't mean to. Always check `git status` after adding.

---

### Commit Changes

**Command:**
```bash
git commit -m "Your commit message"
```

**What it does:** Creates a new commit with the staged changes.

**What a commit is:** A snapshot of your project at a point in time. Each commit has a unique ID (hash) and a message.

**Anatomy of a good commit message:**
- Concise summary (50 characters or less)
- Optional detailed description
- Focus on "why" not "what"

**Example:**
```bash
git commit -m "Update question text for better clarity"
```

**What happens:**
- Staged changes are saved as a commit
- A unique hash is generated (e.g., `abc123def456`)
- The commit is added to your local Git history

**Why use it:** To save your work with a meaningful message that explains the change.

**Common errors:**
- Nothing to commit → You haven't staged any changes
- Empty commit message → Git requires a message

---

### Push to Remote

**Command:**
```bash
git push
```

**What it does:** Uploads your local commits to the remote repository (GitHub).

**What a remote is:** A version of your repository hosted on a server (like GitHub). The default remote is called `origin`.

**What happens:**
- Git connects to the remote repository
- Uploads commits that don't exist on the remote
- Updates the remote branch

**Success looks like:**
```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 450 bytes | 450.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
To github.com:username/repo.git
   abc123..def456  main -> main
```

**Why use it:** To share your changes with others and trigger GitHub Actions deployment.

**Common errors:**
- `failed to push` → You may need to pull first if there are remote changes
- Authentication failed → Check your GitHub credentials or SSH key

---

### Pull from Remote

**Command:**
```bash
git pull
```

**What it does:** Downloads changes from the remote repository and merges them into your local branch.

**What happens:**
- Git fetches changes from the remote
- Merges those changes into your local branch
- Updates your working directory

**Why use it:** To get changes made by others or from other machines.

**Common errors:**
- Merge conflicts → Your changes conflict with remote changes
- Diverged branches → Your local and remote have different histories

**How to fix merge conflicts:**
1. Open the conflicted files
2. Look for `<<<<<<<` and `>>>>>>>` markers
3. Decide which version to keep or combine them
4. Remove the markers
5. Run `git add` and `git commit`

---

### View Commit History

**Command:**
```bash
git log
```

**What it does:** Shows the commit history for the current branch.

**What you see:**
- Commit hashes
- Author information
- Commit dates
- Commit messages

**Useful options:**
```bash
git log --oneline          # One line per commit
git log --graph            # Visual branch graph
git log -5                 # Last 5 commits
git log --since="2 weeks ago"  # Commits from last 2 weeks
```

**Why use it:** To understand the history of changes and find specific commits.

---

### View Changes

**Command:**
```bash
git diff
```

**What it does:** Shows the differences between your working directory and the last commit.

**What you see:**
- Lines added (marked with `+`)
- Lines removed (marked with `-`)
- File names that changed

**Useful options:**
```bash
git diff <file>            # Diff a specific file
git diff --staged          # Diff staged changes
git diff main              # Diff against main branch
```

**Why use it:** To review your changes before committing.

---

### Create a Branch

**Command:**
```bash
git branch <branch-name>
```

**What it does:** Creates a new branch but doesn't switch to it.

**What a branch is:** A parallel version of your repository. Branches allow you to work on features without affecting the main code.

**Example:**
```bash
git branch feature/new-photos
```

**Why use it:** To work on new features or experiments safely.

---

### Switch Branches

**Command:**
```bash
git switch <branch-name>
```

**What it does:** Switches to a different branch.

**What happens:**
- Your working directory updates to the branch's state
- Uncommitted changes may cause conflicts

**Example:**
```bash
git switch feature/new-photos
```

**Why use it:** To work on different features or contexts.

**Common errors:**
- Uncommitted changes → You may need to commit or stash changes first

---

### Restore a File

**Command:**
```bash
git restore <file>
```

**What it does:** Restores a file to its last committed state, discarding local changes.

**What happens:**
- The file is overwritten with the committed version
- Local changes are lost

**Example:**
```bash
git restore config.js
```

**Why use it:** To discard unwanted changes.

**Warning:** This cannot be undone if the changes weren't committed.

---

### Reset to a Commit

**Command:**
```bash
git reset --hard <commit-hash>
```

**What it does:** Resets your branch to a specific commit, discarding all changes after that commit.

**What happens:**
- Your branch pointer moves to the specified commit
- All commits after that are discarded
- Your working directory is updated to that commit's state

**Example:**
```bash
git reset --hard abc123def456
```

**Why use it:** To go back to a previous state (dangerous if you've pushed).

**Warning:** If you've pushed these commits, this will cause problems for others. Use with caution.

---

## GitHub Commands

### Clone with GitHub CLI

**Command:**
```bash
gh repo clone username/repo-name
```

**What it does:** Clones a repository using the GitHub CLI.

**Why use it:** Slightly faster than `git clone` if you have the GitHub CLI installed.

**Prerequisite:** Install GitHub CLI from [cli.github.com](https://cli.github.com/)

---

### View Workflow Runs

**Command:**
```bash
gh run list
```

**What it does:** Lists recent GitHub Actions workflow runs.

**What you see:**
- Run IDs
- Status (success, failure, in progress)
- Trigger event
- Branch

**Why use it:** To check if deployments succeeded.

---

### View Workflow Logs

**Command:**
```bash
gh run view <run-id>
```

**What it does:** Shows detailed logs for a specific workflow run.

**What you see:**
- Step-by-step execution
- Output from each step
- Error messages if failed

**Why use it:** To debug failed deployments.

---

### Rerun a Workflow

**Command:**
```bash
gh run rerun <run-id>
```

**What it does:** Reruns a failed workflow.

**Why use it:** To retry a failed deployment without pushing new code.

---

## GitHub Actions

### Inspect Workflow Runs

**How to do it via web:**
1. Go to your repository on GitHub
2. Click the "Actions" tab
3. Click on a workflow run to see details

**What you see:**
- Overall status (green checkmark for success, red X for failure)
- Each job and its status
- Each step within a job
- Logs for each step

**How to diagnose failures:**
1. Find the failed step (red X)
2. Click on the step to expand logs
3. Read the error message
4. Check the step before (dependency failure?)

**How to rerun:**
1. Click on the failed workflow run
2. Click "Re-run jobs" or "Re-run failed jobs"

**How to check artifacts:**
1. Click on the workflow run
2. Scroll to "Artifacts" section
3. Download to inspect built files

**How to identify which step failed:**
- Failed steps have a red X
- The step name is highlighted in red
- Click to see the specific error

**How environment variables work:**
- Set in the workflow YAML under `env:`
- Set in GitHub repository settings under "Secrets and variables"
- Referenced in workflow steps using `${{ ... }}` syntax

---

## Docker

### Build Local Docker Image

**Command:**
```bash
docker build -f Dockerfile.local -t parul-birthday-local .
```

**What it does:** Builds a Docker image using the local Dockerfile.

**What a Docker image is:** A lightweight, standalone, executable package that includes everything needed to run the application.

**What happens:**
- Docker reads the Dockerfile
- Executes each instruction in order
- Creates layers for each instruction
- Caches layers for faster rebuilds

**Success looks like:**
```
[+] Building 45.2s (10/10) FINISHED
 => => naming to docker.io/library/parul-birthday-local
```

**Why use it:** To create a reproducible local development environment.

---

### Run Docker Container

**Command:**
```bash
docker run -p 5173:5173 parul-birthday-local
```

**What it does:** Runs a container from the image.

**What a container is:** A running instance of a Docker image.

**What `-p 5173:5173` does:** Maps port 5173 on your computer to port 5173 in the container.

**What happens:**
- Docker starts the container
- The application runs inside the container
- You can access it at `http://localhost:5173`

**Why use it:** To run the application in an isolated environment.

---

### Run with Docker Compose

**Command:**
```bash
docker-compose -f docker-compose.local.yml up
```

**What it does:** Runs the services defined in the docker-compose file.

**What docker-compose does:** Orchestrates multiple containers and their configuration.

**What happens:**
- Docker Compose reads the YAML file
- Builds images if needed
- Starts all defined services
- Shows logs from all services

**Why use it:** To manage the local development environment with a single command.

---

### Stop Docker Compose

**Command:**
```bash
docker-compose -f docker-compose.local.yml down
```

**What it does:** Stops and removes all containers created by docker-compose.

**Why use it:** To clean up after development.

---

## Debugging

### Start VS Code Debugger

**What it is:** VS Code's built-in debugger allows you to set breakpoints and step through code.

**How to use it:**
1. Open the project in VS Code
2. Press F5 or click "Run and Debug"
3. Select the "Debug Local Docker" configuration
4. Set breakpoints in your code
5. Start debugging

**What a breakpoint is:** A marker that tells the debugger to pause execution at that line.

**What stepping does:**
- Step over: Execute the current line and move to the next
- Step into: If the current line calls a function, go into that function
- Step out: Finish the current function and return to the caller

**Why use it:** To understand how code executes and find bugs.

---

### Attach to debugpy

**What it is:** debugpy is a Python debugger. In this project, it's used for a learning/debugging sandbox.

**How to use it:**
1. Start the Docker container with debugpy
2. In VS Code, use the "Attach to debugpy" configuration
3. Set breakpoints in Python code
4. Start debugging

**Why use it:** To learn debugging concepts even though the main app is JavaScript.

---

## Troubleshooting

### Problem → Likely Cause → Diagnosis → Fix

#### Problem: `npm install` fails with "EACCES" error

**Likely Cause:** Permission issues with npm directories

**Diagnosis:** Check if you're using system Node with incorrect permissions

**Fix:**
- Option 1: Use nvm (Node Version Manager) instead of system Node
- Option 2: Fix npm permissions (see npm documentation)
- Option 3: Use `sudo npm install` (not recommended)

---

#### Problem: `npm run dev` shows "command not found"

**Likely Cause:** Dependencies not installed

**Diagnosis:** Check if `node_modules/` exists

**Fix:** Run `npm install`

---

#### Problem: Port 5173 already in use

**Likely Cause:** Another process is using the port

**Diagnosis:** Run `lsof -i :5173` (macOS/Linux) or `netstat -ano | findstr :5173` (Windows)

**Fix:**
- Kill the process using the port
- Or let Vite use a different port (it will automatically try 5174, 5175, etc.)

---

#### Problem: Changes not showing in browser

**Likely Cause:** Browser cache or hot reload not working

**Diagnosis:** Check if the file is saved and Vite shows "HMR update"

**Fix:**
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check Vite terminal for errors
- Restart the dev server

---

#### Problem: Build fails with "Module not found"

**Likely Cause:** Import path is incorrect or file doesn't exist

**Diagnosis:** Check the error message for the specific file path

**Fix:**
- Verify the file exists at the specified path
- Check import statements for typos
- Ensure relative paths are correct (./ or ../)

---

#### Problem: GitHub Actions deployment fails

**Likely Cause:** Build error or configuration issue

**Diagnosis:** Check the workflow logs in GitHub Actions tab

**Fix:**
- Look at the "Build for GitHub Pages" step
- Check if BASE_PATH is set correctly
- Verify package-lock.json is committed
- Check Node version compatibility

---

#### Problem: Assets 404 on GitHub Pages

**Likely Cause:** Incorrect BASE_PATH in build

**Diagnosis:** Check built HTML in dist/ for asset paths

**Fix:**
- Rebuild with correct BASE_PATH: `BASE_PATH=/repo-name/ npm run build`
- Verify the base path matches your repository name exactly

---

#### Problem: Docker build fails

**Likely Cause:** Dockerfile syntax error or missing files

**Diagnosis:** Check the Docker build output for the specific error

**Fix:**
- Verify Dockerfile syntax
- Check that all referenced files exist
- Ensure base image is available

---

#### Problem: Docker container won't start

**Likely Cause:** Port conflict or container already running

**Diagnosis:** Run `docker ps` to see running containers

**Fix:**
- Stop existing container: `docker stop <container-id>`
- Use a different port mapping
- Check container logs: `docker logs <container-id>`

---

#### Problem: VS Code debugger not attaching

**Likely Cause:** Wrong configuration or port not open

**Diagnosis:** Check .vscode/launch.json configuration

**Fix:**
- Verify the configuration matches your setup
- Check that the debugpy port (5678) is accessible
- Ensure the container is running with debugpy enabled

---

#### Problem: Git push fails with "rejected"

**Likely Cause:** Remote has changes you don't have

**Diagnosis:** Run `git pull` to see what's different

**Fix:**
- Pull first: `git pull`
- Resolve any merge conflicts
- Then push: `git push`

---

#### Problem: Merge conflict

**Likely Cause:** You and someone else changed the same lines

**Diagnosis:** Git will show `<<<<<<<` markers in the file

**Fix:**
1. Open the conflicted file
2. Decide which version to keep
3. Remove the conflict markers
4. Run `git add <file>`
5. Run `git commit`

---

#### Problem: `package-lock.json` out of sync

**Likely Cause:** Someone edited it manually or didn't commit it

**Diagnosis:** npm will warn about this

**Fix:**
- Delete package-lock.json
- Run `npm install` to regenerate it
- Commit the new package-lock.json

---

#### Problem: Photos not appearing

**Likely Cause:** Image files missing or paths incorrect

**Diagnosis:** Check browser console for 404 errors

**Fix:**
- Verify images exist in `public/assets/photos/`
- Check paths in config.js
- Ensure images are committed to Git

---

#### Problem: Animations too slow/fast

**Likely Cause:** TIMING constants in main.js

**Diagnosis:** Check TIMING object in src/main.js

**Fix:**
- Edit TIMING values in src/main.js
- Lower values = faster, higher values = slower
- Rebuild and test

---

#### Problem: Reduced motion not working

**Likely Cause:** Browser setting or CSS override

**Diagnosis:** Check browser accessibility settings

**Fix:**
- Enable "Reduce motion" in your OS/browser settings
- Verify CSS @media query is present
- Check if JavaScript respects the setting

---

#### Problem: Mobile layout broken

**Likely Cause:** Missing responsive CSS or viewport meta tag

**Diagnosis:** Test on mobile or browser dev tools mobile view

**Fix:**
- Check viewport meta tag in index.html
- Verify media queries in styles.css
- Test with different screen sizes

---

#### Problem: Share preview not working

**Likely Cause:** Incorrect og:image URL or missing meta tags

**Diagnosis:** Use Facebook Sharing Debugger or Twitter Card Validator

**Fix:**
- Use absolute URL for og:image in index.html
- Ensure og-preview.png exists
- Clear cache by adding a query parameter

---

#### Problem: Final photo not loading

**Likely Cause:** photo.jpg missing or path incorrect

**Diagnosis:** Check browser console for 404 error

**Fix:**
- Add photo.jpg to public/assets/
- Verify path in config.js finalReveal.photo
- Ensure file is committed to Git

---

#### Problem: Application blank on load

**Likely Cause:** JavaScript error or missing files

**Diagnosis:** Check browser console for errors

**Fix:**
- Verify all source files exist
- Check for JavaScript syntax errors
- Ensure script tag in index.html is correct

---

#### Problem: Vite HMR not working

**Likely Cause:** Network issue or Vite bug

**Diagnosis:** Check Vite terminal for errors

**Fix:**
- Restart the dev server
- Check your network connection
- Try clearing browser cache

---

#### Problem: Build output too large

**Likely Cause:** Large images or unnecessary dependencies

**Diagnosis:** Check dist/assets/ file sizes

**Fix:**
- Compress images before adding
- Remove unused dependencies
- Check bundle analyzer if needed

---

## Quick Reference

### Essential Commands

```bash
# Setup
npm install              # Install dependencies
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build

# Git
git status               # Check status
git add .                # Stage all changes
git commit -m "msg"      # Commit changes
git push                 # Push to remote
git pull                 # Pull from remote

# GitHub Actions
gh run list              # List workflow runs
gh run view <id>         # View run details

# Docker (local only)
docker-compose -f docker-compose.local.yml up    # Start
docker-compose -f docker-compose.local.yml down  # Stop
```

---

## Summary

This handbook covers all the commands you need to:

- Set up your development environment
- Run the application locally
- Build for production
- Deploy to GitHub Pages
- Use Git for version control
- Debug with VS Code
- Use Docker for local development

For more detailed information on any topic, refer to the specific module in the Learning Center.
