import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  // DEPLOY_TARGET controls the base used when building.
  // - GH_PAGES => '/Reenette.Web/' (GitHub Pages repo site)
  // - RELATIVE => './' (relative paths, useful for arbitrary hosts)
  // - default / => root (Netlify, root domains)
  const deployTarget = process.env.DEPLOY_TARGET || process.env.npm_config_deploy_target || '';
  let base = '/';
  if (deployTarget === 'GH_PAGES') base = '/Reenette.Web/';
  else if (deployTarget === 'RELATIVE') base = './';

  return {
    base,
    server: {
      host: '::',
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
