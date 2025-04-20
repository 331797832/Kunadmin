<template>
  <div>
    <el-aside
      class="aside-container"
      width="auto"
      :class="{ fold: LayOutSettingStore.fold }"
    >
      <!-- logo图标 -->
      <div class="logo" v-if="!LayOutSettingStore.fold">
        <img
          src="../../../assets/images/logoPro.png"
          class="w-[95%] h-[100%]"
          alt=""
        />
      </div>
      <div v-else class="logo">K</div>
      <!-- 侧边菜单栏 -->
      <el-menu
        class="aside-menu"
        :default-active="$route.path"
        :show-timeout="20"
        :class="{ fold: LayOutSettingStore.fold }"
        :collapse="LayOutSettingStore.fold"
      >
        <!--根据路由动态生成菜单-->
        <Menu :menu-list="constantRoute"></Menu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script setup lang="ts">
import { LayOutStore } from "@/stores";
import Menu from "../Menu/Menu.vue";
import { constantRoute } from "@/router/routes";
const LayOutSettingStore = LayOutStore();
</script>

<style scoped lang="scss">
.aside-container {
  width: $base-menu-width;
  height: 100vh;
  color: white;
  background: var(--base-menu-background);

  // 添加右边阴影

  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  transition: width 0.3s ease-in-out;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: $base-menu-logo-height;
    overflow: hidden;
    font-size: $base-logo-title-fontSize;
    line-height: $base-menu-logo-height;
    color: var(--el-menu-text-color);
  }

  &.fold {
    width: var(--base-menu-min-width);
  }

  routeview-bg {
    /* stylelint-disable declaration-property-value-no-unknown */

    background-color: var(--route-view-background-color);
  }

  .aside-menu {
    width: 100%;
    height: calc(100% - $base-menu-logo-height);
  }
}
/* 加快侧边栏文字消失的速度 */
.el-menu {
  border-right: none;
  transition: width 0.5ms;
}
</style>
