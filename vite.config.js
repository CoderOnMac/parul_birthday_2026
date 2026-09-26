import { defineConfig } from "vite";

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
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
});
