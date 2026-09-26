import { defineConfig } from "vite";

// For GitHub Pages project sites, set BASE_PATH=/your-repo-name/ when building.
// Example: BASE_PATH=/parul_birthday_2026/ npm run build
const base = process.env.BASE_PATH || "./";

export default defineConfig({
  base,
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
