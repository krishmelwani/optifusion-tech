import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdx()],
  optimizeDeps: {
    exclude: ["lucide-react"],
    include: ["react", "react-dom", "@mdx-js/react", "react-markdown"],
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
// changed
