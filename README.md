# Parul Birthday 2026 — “How well do you know what I think?”

A small, handcrafted static web experience: five playful questions that quietly turn into a love letter. No backend, no tracking, no login — just open the link.

## Quick personalize

**Edit only [`config.js`](./config.js)** for almost everything:

| What | Where in `config.js` |
|------|----------------------|
| Her name | `recipientName` |
| Landing copy & button | `intro` |
| All 5 questions, options, “correct” index | `questions[]` |
| Per-answer reactions | `questions[].reactions` |
| Post–Q5 surprise lines | `surprise` |
| Fake “score” copy | `fakeScore` |
| Final reveal & personal message | `finalReveal` |
| Optional photo path | `finalReveal.photo` (set to `""` to disable) |
| Share preview text (in-app title) | `meta` |

**Also update [`index.html`](./index.html)** `<head>` if you change WhatsApp/link preview text or image — crawlers read HTML, not JavaScript. Use a **full absolute URL** for `og:image` after deploy (see below).

**Optional photo:** place `photo.jpg` in [`public/assets/photo.jpg`](./public/assets/photo.jpg) (recommended ~1200px wide, compressed JPEG).

**Share image:** replace [`public/assets/og-preview.png`](./public/assets/og-preview.png) or edit the SVG source [`public/assets/og-preview.svg`](./public/assets/og-preview.svg).

---

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

**Without Node:** from the project folder, serve the built `dist/` folder after a build, or use any static server for development builds. For raw development, Vite is the simplest option.

```bash
# Alternative: Python (after npm run build)
cd dist && python3 -m http.server 8080
```

---

## Build for production

Default (relative paths — good for Cloudflare Pages, custom domains, many hosts):

```bash
npm run build
npm run preview   # optional smoke test
```

**GitHub Pages project site** (`https://USERNAME.github.io/REPOSITORY/`):

```bash
BASE_PATH=/parul_birthday_2026/ npm run build
```

Replace `parul_birthday_2026` with your repository name. Deploy the **`dist/`** folder contents.

---

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Build with the correct base path:
   ```bash
   BASE_PATH=/YOUR_REPO_NAME/ npm run build
   ```
3. Either:
   - **GitHub Actions:** push to `main`/`master` — workflow [`.github/workflows/pages.yml`](./.github/workflows/pages.yml) builds with the correct `BASE_PATH` and deploys. In **Settings → Pages**, set source to **GitHub Actions**.  
   - **Manual:** `BASE_PATH=/YOUR_REPO_NAME/ npm run build`, then upload `dist/` (gh-pages branch or Pages branch folder).

4. First deploy: enable **Settings → Pages → Build and deployment → GitHub Actions**.

5. **WhatsApp preview:** in `index.html`, set:
   ```html
   <meta property="og:image" content="https://USERNAME.github.io/YOUR_REPO_NAME/assets/og-preview.png" />
   ```
   (Same for `twitter:image` if you use it.)

6. After changes: rebuild, redeploy, wait a few minutes, then share the link.

---

## Deploy to Cloudflare Pages

1. Connect the GitHub repo in Cloudflare Pages.
2. **Build command:** `npm run build`
3. **Build output directory:** `dist`
4. **Environment variable (only if using a subpath):** usually not needed on Cloudflare custom URLs; keep default `base: './'` in `vite.config.js`.
5. For a custom domain, relative asset paths work as-is.

---

## Update the site later

1. Edit `config.js` (and `index.html` meta if share text/image changed).
2. Add/replace `public/assets/photo.jpg` if needed.
3. `npm run build` (with `BASE_PATH=...` if using GitHub project Pages).
4. Redeploy `dist/`.

No database migrations, no server restarts.

---

## Project structure

```
├── config.js              ← personalize here
├── index.html             ← link preview meta (WhatsApp)
├── package.json
├── vite.config.js
├── public/
│   ├── robots.txt         ← discourages indexing
│   ├── favicon.svg
│   └── assets/
│       ├── photo.jpg      ← optional (you add)
│       └── og-preview.png
└── src/
    ├── main.js            ← experience logic
    └── styles.css
```

---

## Privacy

- Answers stay in the browser session only (no `localStorage` by default).
- No analytics, trackers, or external APIs.
- `robots.txt` asks crawlers not to index the site (not a guarantee).

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Blank page on GitHub Pages | Rebuild with `BASE_PATH=/repo-name/` |
| Photo missing | Expected — page still works; add `public/assets/photo.jpg` |
| WhatsApp preview wrong | Update absolute `og:image` URL in `index.html`; clear cache by sharing a fresh link |
| Animations too much | OS “Reduce motion” is respected automatically |

---

Made with care — one link, one small gift.
