import "./assets/main.css";

import { createApp } from "vue";
import pinia from "@/stores/index";

// 导入清除默认样式
import "@/style/reset.scss";
// 导入tailwindcss样式
import "@/style/tailwindcss.css";
import App from "./App.vue";
import router from "./router";
//svg插件需要配置代码
import "virtual:svg-icons-register";
import globalComponent from "@/components";
import "element-plus/theme-chalk/dark/css-vars.css"; //引入暗黑模式样式
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
const app = createApp(App);
app.use(globalComponent);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(pinia);
app.use(router);

app.mount("#app");
