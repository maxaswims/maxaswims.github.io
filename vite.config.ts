import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "./", // Use relative paths for all assets
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: (assetInfo: { name?: string }) => {
          const name = assetInfo.name || "";
          // Keep manifest.webmanifest in the root directory
          if (name === "manifest.webmanifest") {
            return "[name].[ext]";
          }
          // Keep favicon files in the root directory
          if (/\.(ico|svg)$/.test(name)) {
            return "[name].[ext]";
          }
          // Put other assets in the assets directory
          return `assets/[name].[ext]`;
        },
      },
    },
    assetsDir: "assets",
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
