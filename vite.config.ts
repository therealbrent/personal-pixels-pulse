import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Generate build info JSON in public folder at build time
const buildInfoPlugin: Plugin = {
  name: "build-info-plugin",
  apply: "build",
  buildStart() {
    const timestamp = new Date().toISOString();
    const buildInfo = {
      timestamp,
      meta: {
        node: process.version,
        gitSha: process.env.GITHUB_SHA || null,
        gitRef: process.env.GITHUB_REF || null,
        env: process.env.NODE_ENV || null,
      },
    } as const;
    const targetPath = path.resolve(__dirname, "public", "build-info.json");
    try {
      fs.writeFileSync(targetPath, JSON.stringify(buildInfo, null, 2), { encoding: "utf-8" });
      // eslint-disable-next-line no-console
      console.log(`[build-info-plugin] Wrote ${targetPath}`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[build-info-plugin] Failed to write build-info.json", err);
    }
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    buildInfoPlugin,
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure static files from root are copied to dist
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        llms: path.resolve(__dirname, 'llms.txt'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'llms.txt') {
            return 'llms.txt';
          }
          return assetInfo.name || '';
        },
      },
    },
  },
}));
