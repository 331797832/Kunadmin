<script setup lang="ts">
import { getdata } from '@/api/user'
import { ref } from 'vue'
import { uerStore } from '@/stores'
const stores = uerStore()
const loginhandle = () => {
  stores.settoken('eweee')
}
const outhandle = () => {
  stores.removetoken()
}
const setuseinfohandle = () => {
  stores.setuserinfo()
}
const getdatahandle = () => {
  getdata({ username: 'admin', password: '111111' }).then((res: any) => {
    console.log(res)
  })
}
const str = '111';
getdatahandle()
const value = ref('555')
</script>

<template>
  <SvgIcon name="phone" w="200px" h="200px" :color="'red'"></SvgIcon>
  <div class="m-0 mx-auto bg-blue-500 w-screen text-center">
    <span>111</span>
  </div>
  <!-- 使用自定义类型 -->
  <button class="btn-blue">111111</button>
  <input
    v-model="value"
    disabled
    checked
    class="disabled:border-double border disabled:text-blue-800"
  />
  <!-- 修改复选框的按钮背景 加accent-color-xxx  xxx》500选中打勾为白色 xxx《500选中打勾为黑色 -->
  <input type="checkbox" class="accent-emerald-500/25" checked />
  Emerald
  <input type="checkbox" class="accent-regal-blue" checked />
  Emerald
  <input
    type="checkbox"
    class="accent-pink-300 focus:accent-pink-500"
    checked
  />
  <div>
    <p>{{ stores.token }}</p>
    <p>{{ stores.oo }}</p>
    <el-button class="btn-blue" type="primary" @click="loginhandle">
      登陆
    </el-button>
    <el-button type="success" @click="outhandle">退出</el-button>
    <el-button type="warning" @click="setuseinfohandle">修改用户信息</el-button>
  </div>
  <div class="oo">"333333333333"</div>
</template>
<style scoped lang="scss">
.oo {
  color: $color;
}
.box {
  width: 100px;
  height: 100px;
  color: red;
}
</style>
