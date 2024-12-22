import { defineStore } from 'pinia'
import { ref } from 'vue'
export const uerStore = defineStore(
  'Big-user',
  () => {
    const oo = 5555
    const token = ref('111')
    const token222 = ref('222')
    const userinfo = ref({
      name: '',
      age: 0,
    })
    const settoken = (newtoken: any) => {
      token.value = newtoken
      token222.value = newtoken
    }
    const removetoken = () => {
      token.value = ''
    }
    const setuserinfo = () => {
      userinfo.value = {
        name: '小明',
        age: 20,
      }
    }
    return {
      oo,
      token,
      settoken,
      removetoken,
      token222,
      userinfo,
      setuserinfo,
    }
  },
  {
    persist: true,
  },
)
