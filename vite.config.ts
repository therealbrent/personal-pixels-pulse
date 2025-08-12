import { defineConfig, Plugin, type ResolvedConfig } from "vite";
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

// CSP injector plugin to support Visual Editor in dev while keeping prod strict
const cspPlugin: Plugin = {
  name: "csp-injector",
  // Run early to replace any existing meta tags
  enforce: "pre",
  configResolved(config) {
    // store command (serve|build) on plugin instance
    ;(this as any).__command = config.command;
  },
  transformIndexHtml: {
    enforce: "pre",
    transform(html) {
      const command = (this as any).__command || "build";
      const isDev = command === "serve";

      const devCsp = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://*.lovable.app https://*.lovable.dev; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' ws: wss: https://*.lovable.app https://*.lovable.dev; frame-ancestors 'self' https://*.lovable.app https://*.lovable.dev;";
      const prodCsp = "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'self';";
      const csp = isDev ? devCsp : prodCsp;

      // Remove existing meta CSP and X-Frame-Options tags
      let out = html
        .replace(/<meta[^>]+http-equiv=[\"']Content-Security-Policy[\"'][^>]*>\s*/gi, "")
        .replace(/<meta[^>]+http-equiv=[\"']X-Frame-Options[\"'][^>]*>\s*/gi, "");

      // Inject our CSP meta just before </head>
      out = out.replace(
        /<\/head>/i,
        `  <meta http-equiv="Content-Security-Policy" content="${csp}">\n</head>`
      );

      return out;
    },
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
    cspPlugin,
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
