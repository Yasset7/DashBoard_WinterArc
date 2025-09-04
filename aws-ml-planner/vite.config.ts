import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path is set to deploy on GitHub Pages. Adjust to your repo name when deploying.
export default defineConfig({
  plugins: [react()],
  base: '/aws-ml-planner/'
});
