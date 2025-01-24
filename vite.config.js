import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/GPSDemo/', // Reemplaza con el nombre de tu repositorio
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
