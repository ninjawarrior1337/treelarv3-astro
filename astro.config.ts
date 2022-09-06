import { defineConfig } from 'astro/config';
import adapter from "@astrojs/vercel/edge";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), compress(), prefetch()],
  output: "server",
  adapter: adapter(),
  server: {
    port: 1234
  }
});