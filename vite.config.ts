import { join } from "path";
import { defineConfig } from "vite";
import Preact from "@preact/preset-vite";
import Icons from "unplugin-icons/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    Preact(),
    Icons(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      manifest: {
        name: "positively",
        short_name: "positively",
        description: "positively",
        theme_color: "#05AAAA",
        icons: [
          {
            src: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
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
    }),
  ],
  resolve: {
    alias: { src: join(process.cwd(), "src") },
  },
  build: {
    assetsInlineLimit: 0,
  },
});
