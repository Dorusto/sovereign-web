import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  i18n: {
    defaultLocale: 'ro',
      locales: ['ro', 'en'],
      routing: {
        strategy: 'prefix',
        prefixDefaultLocale: false
      }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
