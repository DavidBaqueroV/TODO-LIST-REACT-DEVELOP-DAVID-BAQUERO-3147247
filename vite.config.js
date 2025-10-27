import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/todo-list-react-develop-david-baquero-3147247/' // <- esta línea es clave
});
