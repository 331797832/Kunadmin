// //对外暴露插件
import SvgIcon from "@/components/Svg-Icon.vue/index.vue"; // 确保路径正确
import type { App, Component } from "vue";
// console.log(ElementPlusIconsVue);

const allGlobalComponents: Record<string, Component> = {
  SvgIcon,
};

export default {
  install(app: App) {
    //注册项目全部的全局组件
    Object.keys(allGlobalComponents).forEach((key) => {
      //注册为全局组件
      app.component(key, allGlobalComponents[key]);
    });
  },
};
