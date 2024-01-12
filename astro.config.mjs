import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
        fs: {
            // if you use this with --host anyone on the network can view
            // the contents of your yarn cache (including private packages)
            strict: false
        }
    }
  },
  server: {
    port: 3000
  },
  integrations: [tailwind()]
});