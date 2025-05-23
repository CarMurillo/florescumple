import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permite conexiones desde cualquier IP
    port: process.env.PORT || 5173,
    allowedHosts: ['florescumple.onrender.com']  // Asegura que Render pueda acceder
  }
});
