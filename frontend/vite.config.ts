import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "animejs": path.resolve(__dirname, "./node_modules/animejs/lib/anime.es.js"),
    },
  },
  build: {
    // Optimizaciones para producción
    target: 'esnext',
    minify: 'esbuild', // esbuild es más rápido y viene incluido con Vite
    esbuild: {
      drop: ['console', 'debugger'], // Eliminar console.logs y debuggers en producción
    },
    // Code splitting optimizado
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendors grandes en chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
          ],
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'query-vendor': ['@tanstack/react-query', 'axios'],
        },
        // Nombres de archivo con hash para cache busting
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Aumentar el límite de advertencia de tamaño de chunk
    chunkSizeWarningLimit: 1000,
    // Optimizar assets
    assetsInlineLimit: 4096, // Inline assets < 4kb
    cssCodeSplit: true,
    sourcemap: mode === 'development', // Sourcemaps solo en desarrollo
  },
  // Optimizar caché
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
    ],
  },
}));
