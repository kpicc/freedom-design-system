import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
  if (mode === 'docs') {
    // Static docs site — served at kpicc.github.io/freedom-design-system
    return {
      plugins: [react()],
      base: '/freedom-design-system/',
      build: {
        outDir: 'dist-docs',
      },
    };
  }
  return {
    plugins: [
      react(),
      dts({ include: ['src'], rollupTypes: false }),
    ],
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'FreedomDesignSystem',
        fileName: 'index',
        formats: ['es'],
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime'],
      },
      cssCodeSplit: false,
    },
  };
});
