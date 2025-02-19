import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { viteMockServe } from "vite-plugin-mock";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    server: {
      host: "0.0.0.0", // 服务器地址
      port: 5173, // 服务器端口号
      proxy: {
        "/api": {
          target: "http://127.0.0.1:5173/",
          changeOrigin: true, //支持跨域
          rewrite: (path) => path.replace(/^\/api/, ""), //重写路径，替换/api
        },
      },
    },
    plugins: [
      vue(),
      // viteMockServe({
      //   // mockPath: "mock",
      //   // localEnabled: command === "serve",
      // }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/style/variable.scss";',
        },
      },
    },
  };
});
