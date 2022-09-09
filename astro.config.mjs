import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import Icons from 'unplugin-icons/vite';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), prefetch(), svelte()],
  output: "server",
  adapter: cloudflare(),
  vite: {
    plugins: [Icons({
      compiler: "svelte",
    })]
  },
  server: {
    port: 1234
  }
});