import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/", // Changed from "./" to "/"
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: (assetInfo: { name?: string }) => {
          const name = assetInfo.name || "";
          if (name === "manifest.webmanifest" || /\.(ico|svg)$/.test(name)) {
            return "[name].[ext]";
          }
          return `assets/[name].[hash].[ext]`;
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
