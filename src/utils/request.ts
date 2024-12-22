import { uerStore } from '@/stores'
import axios from 'axios'
import router from '@/router'
import { ElMessage } from 'element-plus'

const baseURL = 'http://localhost:5173/'

const instance = axios.create({
  baseURL,
  timeout: 50000,
})
//请求拦截器
instance.interceptors.request.use(
  (config) => {
    const userStore = uerStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => Promise.reject(err),
)
//响应拦截器
instance.interceptors.response.use(
  (res) => {
    //请求成功返回数据
    if (res.data.code === 200) {
      return res
    }
    console.log(res)
    // 业务处理错误提示
    ElMessage({ message: res.data.data.message || '服务异常', type: 'error' })
    return Promise.reject(res.data)
  },
  (err) => {
    // 错误提示
    ElMessage({
      message: err.response.data.data.message || '服务异常',
      type: 'error',
    })
    // token失效跳转登录页面
    if (err.response?.status === 401) {
      router.push('/login')
    }
    return Promise.reject(err)
  },
)

export default instance
export { baseURL }
