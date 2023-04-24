import { defineConfig } from 'vite';
import react from '@astrojs/react';
import tailwindcss from 'tailwindcss';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  integrations: [react()],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
});
