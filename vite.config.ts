import { join } from "path";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: { src: join(process.cwd(), "src") },
  },
  build: {
    assetsInlineLimit: 0,
  },
});
