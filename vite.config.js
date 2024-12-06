import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
      'ws/' : {
        target: 'ws://localhost:4000',
        ws: true,
      },
    },
  },
  // build: {
  //   chunkSizeWarningLimit: 2000,
  //   rollupOptions: {
  //       // NODE_OPTIONS = --max-old-space-size=8192,
  //     onwarn(warning, warn) {
  //       if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
  //         return;
  //       }
  //       warn(warning);
  //     },
  //   },
  // },
//   plugins: [react()],
});