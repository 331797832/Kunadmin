//对外暴露插件
import SvgIcon  from "@/components/Svg-Icon.vue/index.vue";
const allGloablCompomponent = { SvgIcon };

export default {
  install(app: any) {
//全局注册组件
    Object.keys(allGloablCompomponent).forEach((key) => {
      // @ts-ignore
      app.component(key, allGloablCompomponent[key]);
    });
  },
};
