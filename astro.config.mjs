import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ashley.rodan.co/', // Replace with your actual live site URL
  integrations: [tailwind()],
});
