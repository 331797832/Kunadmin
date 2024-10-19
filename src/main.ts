import './assets/main.css'

import { createApp } from 'vue'
import pinia from "@/stores/index";

// 导入清除默认样式
import  "@/style/reset.scss";
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
