<template>
  <div class="commonlayout">
    <el-container class="h-screen">
      <AsideMenu />
      <el-container
        class="left-container"
        :class="{ fold: LayOutSettingStore.fold }"
      >
        <el-header class="overflow-hidden k_header">
          <Header />
        </el-header>
        <route-tabs></route-tabs>
        <el-main class="routeview-bg"><RouteView /> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts" name="layout">
import Header from "./Header/index.vue";
import AsideMenu from "./AsideMenu/index.vue";
import routeTabs from "./Header/routeTabs.vue";
import RouteView from "./RouteView/index.vue";
import { LayOutStore } from "@/stores";
//获取layout配置相关的仓库
const LayOutSettingStore = LayOutStore();
</script>

<style lang="scss" scoped>
.commonlayout {
  width: 100vw;
  height: 100vh;

  .left-container {
    position: absolute;
    left: $base-menu-width;
    /* stylelint-disable-next-line */
    width: calc(100vw - $base-menu-width);
    height: 100vh;
    transition: all 0.3s ease-in-out;

    &.fold {
      left: var(--base-menu-min-width);
      width: calc(100vw - var(--base-menu-min-width));
    }
  }
}

.k_header {
  height: $base-tabbar-height;
  padding: 0;
}
</style>
