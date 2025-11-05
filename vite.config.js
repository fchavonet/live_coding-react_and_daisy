import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/live_coding-react_and_daisy/",
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: "0.0.0.0",
    port: 3000
  }
});
