import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false
    }
  },
  preview: {
    port: 4173,
    open: true
  },
  build: {
    target: 'es2015',
    sourcemap: false,
    minify: 'terser',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          animations: ['gsap', 'framer-motion']
        },
      },
      onwarn(warning, warn) {
        // Suppress "use client" directive warnings from framer-motion
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        warn(warning);
      },
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei', 'gsap'],
    exclude: ['@react-three/rapier'],
  define: {
    // This helps with some build warnings
    global: 'globalThis',
  },
    force: true
  },
  esbuild: {
    drop: ['console', 'debugger']
  }
})
