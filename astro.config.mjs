import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";
import cloudflare from "@astrojs/cloudflare"
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import Icons from 'unplugin-icons/vite';

import { visualizer } from "rollup-plugin-visualizer";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), prefetch()],
  output: "server",
  adapter: cloudflare(),
  vite: {
    plugins: [
      Icons({compiler: "jsx"}),
      visualizer({
        emitFile: true,
        filename: "stats.html"
      })
    ]
  },
  server: {
    port: 1234
  }
});