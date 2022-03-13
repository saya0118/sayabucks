import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
/*eslint-disable */
const reactSvgPlugin = require('vite-plugin-react-svg');
/*eslint-disable */

// https://vitejs.dev/config/
export default defineConfig({
  /*eslint-disable */
  plugins: [react(), reactSvgPlugin()],
  /*eslint-disable */
});
