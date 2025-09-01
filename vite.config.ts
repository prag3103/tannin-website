import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set base path conditionally: '/' for development, '/tannin-website/' for production
  base: mode === "production" ? "/tannin-website/" : "/",

  server: {
    host: "0.0.0.0", // safer than ":", works for localhost + LAN
    port: 8080, // preferred starting port
    // strictPort: true, // ❌ removed, so Vite can auto-switch if busy
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
