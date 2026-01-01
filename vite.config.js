// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env, // optional: sometimes needed for some packages
  },
  server: {
    // optional local dev config
    port: 5173,
    open: true,
  },
});
