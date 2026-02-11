// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site: 'https://jonathan-gatard.fr', // Custom domain overrides github.io
  // If not using custom domain: site: 'https://jonathan-gtd.github.io', 
  // base: '/cv',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});