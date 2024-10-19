<script setup lang="ts">
import { uerStore } from "@/stores";
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

</script>

<template>
    <div>
        <p>{{ stores.token }}</p>
        <p>{{ stores.oo }}</p>
        <el-button type="primary" @click="loginhandle">登陆</el-button>
        <el-button type="success" @click="outhandle"> 退出</el-button>
        <el-button type="info" @click="setuseinfohandle">修改用户信息</el-button>
    </div>
</template>
