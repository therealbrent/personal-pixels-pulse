import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
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
