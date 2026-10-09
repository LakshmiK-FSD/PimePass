import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': import.meta.dirname + '/src',
      '@components': import.meta.dirname + '/src/components',
      '@pages': import.meta.dirname + '/src/pages',
      '@hooks': import.meta.dirname + '/src/hooks',
      '@assets': import.meta.dirname + '/src/assets',
      '@services': import.meta.dirname + '/src/services',
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
