// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site: 'https://jonathan-gatard.fr', // Custom domain overrides github.io
  // If not using custom domain: site: 'https://jonathan-g.github.io', 
  // base: '/cv',
  integrations: [tailwind()]
});