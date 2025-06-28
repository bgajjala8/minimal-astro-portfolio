import { defineConfig } from 'astro/config';
import relativeLinks from 'astro-relative-links';

export default defineConfig({
  site: 'https://bgajjala8.github.io',
  base: '/minimal-astro-portfolio/',
  output: "static",
  integrations: [relativeLinks()],
});
