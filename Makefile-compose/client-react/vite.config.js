import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

// For development using containers, the target has to reference the container's alias not localhost
// as in the other vite.config.js file

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/golang': {
        target: 'http://api-golang:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/golang/, ''),
        secure: false,
      },
      '/api/node': {
        target: 'http://api-node:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/node/, ''),
        secure: false,
      },
    },
  },
});
