<script setup lang="ts" name="layout">
import Menu from "@/components/Menu/Menu.vue";
import { constantRoute } from "@/router/routes";
</script>

<template>
  <div class="common-layout">
    <el-container class="h-screen">
      <el-aside
        width="200px"
        style="height: 100%; background-color: rgb(62 18 18)"
      >
        <!-- logo图标 -->
        <div class="logo">
          <h1>大事件</h1>
        </div>
        <!-- 侧边菜单栏 -->
        <el-menu
          :default-active="$route.path"
          background-color="#001529"
          text-color="white"
        >
          <!--根据路由动态生成菜单-->
          <Menu :menu-list="constantRoute"></Menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  font-size: $base-logo-title-fontSize;
  line-height: $base-menu-logo-height;
  color: white;
  text-align: center;
  background-color: #000;
}

.common-layout {
  width: 100vw;
  height: 100vh;
}
</style>
