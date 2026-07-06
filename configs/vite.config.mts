import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  // Relative base so the built app works when served from a GitHub Pages
  // project sub-path (e.g. https://<owner>.github.io/<repo>/).
  base: './',
  plugins: [react({ jsxImportSource: '@emotion/react' })],
  build: {
    outDir: 'dist',
  } as const,
}));
