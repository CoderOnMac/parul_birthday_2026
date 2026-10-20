import { defineConfig } from "vite";
import fs from "node:fs";
import path from "node:path";

function discoverPhotos() {
  const photoDir = path.resolve("public/assets/photos");
  if (!fs.existsSync(photoDir)) return [];
  return fs.readdirSync(photoDir)
    .filter((file) => /\.(jpe?g|png|webp|avif|gif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => `assets/photos/${file}`);
}

/**
 * Dev (npm run dev): base "./" — localhost works as usual.
 * GitHub Pages project site: BASE_PATH=/repo-name/ npm run build
 * CI also sets base from GITHUB_REPOSITORY if BASE_PATH is omitted.
 */
function resolveBasePath() {
  const fromEnv = process.env.BASE_PATH?.trim();
  if (fromEnv) {
    if (fromEnv === "./" || fromEnv === ".") return "./";
    let path = fromEnv.startsWith("/") ? fromEnv : `/${fromEnv}`;
    if (!path.endsWith("/")) path += "/";
    return path;
  }

  if (process.env.GITHUB_ACTIONS === "true" && process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split("/")[1];
    if (repo) return `/${repo}/`;
  }

  return "./";
}

export default defineConfig({
  base: resolveBasePath(),
  define: {
    __PHOTO_MANIFEST__: JSON.stringify(discoverPhotos()),
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
});
