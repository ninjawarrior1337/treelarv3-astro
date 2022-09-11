import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/edge";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import Icons from 'unplugin-icons/vite';
import svelte from "@astrojs/svelte";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), prefetch(), svelte(), image()],
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [Icons({
      compiler: "svelte"
    })]
  },
  server: {
    port: 1234
  }
});