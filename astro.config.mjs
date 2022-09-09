import { defineConfig } from 'astro/config';
import adapter from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";

import Icons from 'unplugin-icons/vite'

import { visualizer } from "rollup-plugin-visualizer";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), compress(), prefetch()],
  output: "server",
  adapter: adapter(),
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