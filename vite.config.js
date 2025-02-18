import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "1720e500-0d58-4df3-920e-3e43952a9b0a-00-1rlvpis8r7fq1.sisko.replit.dev",
    ],
  },
});
