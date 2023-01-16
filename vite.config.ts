import { join } from "path";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "positively",
        short_name: "positively",
        description: "positively",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/favicon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: process.env.SW_DEV === "true",
        type: "module",
        navigateFallback: "index.html",
      },
    }),
  ],
  resolve: {
    alias: { src: join(process.cwd(), "src") },
  },
  build: {
    assetsInlineLimit: 0,
  },
});
