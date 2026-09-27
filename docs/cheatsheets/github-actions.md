# GitHub Actions Cheat Sheet

Quick reference for GitHub Actions essentials.

---

## Workflow Structure

```yaml
name: Workflow Name

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: echo "Hello World"
```

---

## Triggers

```yaml
on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 0 * * *'
  workflow_dispatch:
```

---

## Steps

```yaml
steps:
  # Checkout code
  - uses: actions/checkout@v4

  # Setup Node.js
  - uses: actions/setup-node@v4
    with:
      node-version: '20'
      cache: 'npm'

  # Run shell command
  - run: npm install

  # Run with environment variables
  - run: npm run build
    env:
      BASE_PATH: /repo-name/

  # Upload artifact
  - uses: actions/upload-artifact@v4
    with:
      name: build
      path: dist/
```

---

## Environment Variables

```yaml
# Job-level
jobs:
  build:
    env:
      NODE_ENV: production

# Step-level
steps:
  - run: echo $VAR
    env:
      VAR: value

# Repository secrets
steps:
  - run: echo ${{ secrets.SECRET_NAME }}
```

---

## Matrix Strategy

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16, 18, 20]
        os: [ubuntu-latest, windows-latest]
    steps:
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
```

---

## Caching

```yaml
steps:
  - uses: actions/setup-node@v4
    with:
      cache: 'npm'

  - uses: actions/cache@v4
    with:
      path: ~/.npm
      key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
```

---

## Conditional Steps

```yaml
steps:
  - name: Test
    if: github.event_name == 'push'
    run: npm test

  - name: Deploy
    if: success()
    run: npm run deploy
```

---

## Common Actions

```yaml
# Checkout
- uses: actions/checkout@v4

# Setup Node
- uses: actions/setup-node@v4

# Upload artifact
- uses: actions/upload-artifact@v4

# Download artifact
- uses: actions/download-artifact@v4

# Configure Pages
- uses: actions/configure-pages@v5

# Deploy to Pages
- uses: actions/deploy-pages@v4
```

---

## Common Mistakes

- ❌ Not setting correct permissions
- ❌ Using incorrect node version
- ❌ Forgetting to cache dependencies
- ❌ Not using environment variables for secrets
- ❌ Hardcoding paths instead of using GitHub contexts
