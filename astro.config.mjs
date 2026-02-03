import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Înlocuiește 'utilizator' și 'sovereign-web' cu datele tale
  site: 'https://github.com/Dorusto',
  base: '/sovereign-web',
  vite: {
    plugins: [tailwindcss()]
  }
});
