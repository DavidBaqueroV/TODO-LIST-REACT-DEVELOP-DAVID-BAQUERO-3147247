import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Detect deployment environment so we can use a repo subpath for GitHub Pages
// but the root `/` for Netlify or local preview.
const repoName = 'TODO-LIST-REACT-DEVELOP-DAVID-BAQUERO-3147247';
const lifecycle = process.env.npm_lifecycle_event;
const isGithubPages = lifecycle === 'predeploy' || lifecycle === 'deploy' || process.env.DEPLOY_ENV === 'GH_PAGES' || process.env.GITHUB_ACTIONS === 'true';
const base = isGithubPages ? `/${repoName}/` : '/';

export default defineConfig({
  plugins: [react()],
  base
});
