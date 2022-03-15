import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vant-theme/",

  plugins: [vue(), vueJsx()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  // https://cn.vitejs.dev/config/#json-namedexports
  json: {
    namedExports: true,
    stringify: false,
  },

  clearScreen: false,

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        theme: resolve(__dirname, "src/page/theme/index.html"),
        console: resolve(__dirname, "src/page/console/index.html"),
        "mobile-v2": resolve(__dirname, "src/page/mobile/v2.html"),
        "mobile-v3": resolve(__dirname, "src/page/mobile/v3.html"),
        "mobile-v4": resolve(__dirname, "src/page/mobile/v4.html"),
      },
    },
  },

  server: {
    host: "0.0.0.0",
  },
});
