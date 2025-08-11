import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/Stars-Research-Corp/StarsResearchCorp.git',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
