// Special Vite configuration for static site deployment
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import themePlugin from '@replit/vite-plugin-shadcn-theme-json';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define mode as a constant; this makes it easier to check in code
const isStaticBuild = true;

// This configuration is specifically for building a static version of the app
export default defineConfig({
  plugins: [
    react(),
    themePlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
    },
  },
  root: path.resolve(__dirname, 'client'),
  // For flexibility, use relative path (empty string) for local deployment
  // or '/lakbay/' for GitHub Pages
  base: './', 
  build: {
    outDir: path.resolve(__dirname, 'dist/public'),
    emptyOutDir: true,
    // Optimize the build
    minify: true,
    sourcemap: false,
    // Split chunks for better caching
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'client/index.html'),
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'wouter'],
          ui: [
            '@/components/ui/button',
            '@/components/ui/form', 
            '@/components/ui/input',
            '@/components/ui/select',
            '@/components/ui/textarea',
            '@/components/ui/toast'
          ]
        }
      }
    },
  },
  // Define static mode in environment variables
  define: {
    'window.IS_STATIC_MODE': true,
  }
});