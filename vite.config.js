import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Убедитесь, что base соответствует корневому URL вашего сайта
});
