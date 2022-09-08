import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import cloudflare from "@astrojs/cloudflare"
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
  adapter: process.env["VERCEL"] ? vercel() : cloudflare(),
  vite: {
    plugins: [Icons({
      compiler: "jsx",
    })]
  },
  server: {
    port: 1234
  }
});