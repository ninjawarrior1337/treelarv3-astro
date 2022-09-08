import { defineConfig } from 'astro/config';
import adapter from "@astrojs/vercel/edge";
// import adapter from "@astrojs/cloudflare"
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), prefetch()],
  output: "server",
  adapter: adapter(),
  vite: {
    plugins: [Icons({
      compiler: "jsx",
    })]
  },
  server: {
    port: 1234
  }
});