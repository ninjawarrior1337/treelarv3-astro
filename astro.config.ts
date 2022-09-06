import { defineConfig } from 'astro/config';
import adapter from "@astrojs/vercel/edge";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";

import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), compress(), prefetch(), critters()],
  output: "server",
  adapter: adapter(),
  server: {
    port: 1234
  }
});