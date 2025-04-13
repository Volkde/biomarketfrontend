import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      app: path.resolve(__dirname, "src/app"),
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      store: path.resolve(__dirname, "src/store"),
      styles: path.resolve(__dirname, "src/styles"),
      theme: path.resolve(__dirname, "src/theme"),
      shared: path.resolve(__dirname, "src/shared"),
      types: path.resolve(__dirname, "src/types")
    }
  },
  server: {
    open: true,
    port: 5174,
    proxy: {
      "/api": {
        target: "http://localhost:8080"
        // changeOrigin: true,
        // secure: false
      }
    }
  },
  // Эта настройка поможет с SPA маршрутизацией
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    sourcemap: false,
    minify: true,
    reportCompressedSize: false
  }
});