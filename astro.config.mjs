// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
// https://astro.build/config
export default defineConfig({
  site: "https://animated-pegasus-220049.netlify.app",
  integrations: [preact()],
});
