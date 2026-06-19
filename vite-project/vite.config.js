import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Allow access via 127.0.0.1 and ensure Vite prints the URL
    host: true,
    port: 3000,
    strictPort: true,
  },
});

