import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg'], // Add this line to include JPG files['**/*.JPG', '**/*.jpg'], // Add this line to include JPG files
  optimizeDeps: {
    exclude: ['lucide-react'],  },});
