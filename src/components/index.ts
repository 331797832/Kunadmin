// //对外暴露插件
import SvgIcon from '@/components/Svg-Icon.vue/index.vue' // 确保路径正确
import type { App, Component } from 'vue'

const allGlobalComponents: Record<string, Component> = {
  SvgIcon,
}

export default {
  install(app: App) {
    // 全局注册组件
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key])
    })
  },
}
