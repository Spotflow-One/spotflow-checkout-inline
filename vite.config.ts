import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "umd"],
      name: "SpotflowCheckout",
      fileName: (format) => (format === "es" ? `checkout-inline.${format}.js` : `checkout-inline.js`),
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        format: "umd",
        exports: "named",
      },
    },
  },
  optimizeDeps: {
    include: ["/src/views/*.html"],
  },

  plugins: [cssInjectedByJsPlugin(), dts()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  assetsInclude: ["**/*.otf", "**/*.woff", "**/*.woff2"],
});
