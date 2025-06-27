import { defineConfig } from 'astro/config';

export default defineConfig({
  output: "static",
  prefetch: true,
  compressHTML: true,
  site: 'https://bgajjala8.github.io',
});