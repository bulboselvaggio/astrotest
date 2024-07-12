// 📂 astro.config.mjs

import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  //This will enable SSR
  output: "server",
  adapter: netlify()
});