import './assets/main.css'

import { createApp } from 'vue'
import pinia from '@/stores/index'

// 导入清除默认样式
import '@/style/reset.scss'
// 导入tailwindcss样式
import '@/style/tailwindcss.css'
import App from './App.vue'
import router from './router'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
import globalComponent from '@/components'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(globalComponent)

app.use(pinia)
app.use(router)

app.mount('#app')
