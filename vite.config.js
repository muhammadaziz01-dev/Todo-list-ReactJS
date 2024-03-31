
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@" : path.resolve(__dirname, "./src"),
      "@component" : path.resolve(__dirname, "./src/components"),
      "@image" : path.resolve(__dirname, "./src/assets/images"),
      "@ui" : path.resolve(__dirname, "./src/components/ui"),
      "@ui-layout" : path.resolve(__dirname, "./src/components/layouts"),
      "@layout" : path.resolve(__dirname, "./src/layout"),
      "@pages" : path.resolve(__dirname, "./src/pages"),
      "@utils" : path.resolve(__dirname, "./src/utils"),
      "@hooks" : path.resolve(__dirname, "./src/hooks"),
      "@store" : path.resolve(__dirname, "./src/store"),
    },
  },
})
