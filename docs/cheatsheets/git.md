# Git Cheat Sheet

Quick reference for Git essentials.

---

## Basic Commands

```bash
# Initialize repository
git init

# Clone repository
git clone <url>

# Check status
git status

# Add files
git add file.js
git add .              # All changes
git add -A             # All changes including deletions

# Commit
git commit -m "Message"

# Push to remote
git push

# Pull from remote
git pull
```

---

## Branching

```bash
# List branches
git branch

# Create branch
git branch feature-name

# Switch branch
git switch feature-name

# Create and switch
git switch -c feature-name

# Delete branch
git branch -d feature-name
```

---

## History

```bash
# Show commit history
git log

# Show condensed history
git log --oneline

# Show file history
git log --follow file.js

# Show changes in commit
git show <commit-hash>
```

---

## Changes

```bash
# Show unstaged changes
git diff

# Show staged changes
git diff --staged

# Show changes between commits
git diff <commit1> <commit2>

# Discard unstaged changes
git restore file.js

# Discard all changes
git restore .
```

---

## Undo

```bash
# Unstage file
git restore --staged file.js

# Amend last commit
git commit --amend -m "New message"

# Reset to previous commit (dangerous)
git reset --hard HEAD~1

# Revert commit (safe)
git revert <commit-hash>
```

---

## Remote

```bash
# Show remotes
git remote -v

# Add remote
git remote add origin <url>

# Remove remote
git remote remove origin

# Fetch from remote
git fetch

# Push to specific branch
git push origin main
```

---

## Stash

```bash
# Stash changes
git stash

# Stash with message
git stash save "Message"

# List stashes
git stash list

# Apply stash
git stash apply

# Drop stash
git stash drop
```

---

## Common Mistakes

- ❌ Forgetting to add files before committing
- ❌ Committing large files (should be in .gitignore)
- ❌ Using `git reset --hard` on shared branches
- ❌ Not pulling before pushing
- ❌ Committing sensitive data (API keys, passwords)
