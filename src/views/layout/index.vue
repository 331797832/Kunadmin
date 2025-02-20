<script setup lang="ts" name="layout">
import Menu from "./Menu/Menu.vue";
import Header from "./Header/index.vue";
import { constantRoute } from "@/router/routes";
import { LayOutStore } from "@/stores";
import routeTabs from "./Header/routeTabs.vue";
//获取layout配置相关的仓库
const LayOutSettingStore = LayOutStore();
</script>

<template>
  <div class="commonlayout">
    <el-container class="h-screen">
      <el-aside
        class="aside-container"
        width="auto"
        :class="{ fold: LayOutSettingStore.fold }"
      >
        <!-- logo图标 -->
        <div class="logo" v-if="!LayOutSettingStore.fold">
          <h1>新世界</h1>
        </div>
        <div v-else class="logo">新</div>
        <!-- 侧边菜单栏 -->
        <el-menu
          :default-active="$route.path"
          background-color="#001529"
          text-color="white"
          :show-timeout="20"
          :class="{ fold: LayOutSettingStore.fold }"
          :collapse="LayOutSettingStore.fold"
        >
          <!--根据路由动态生成菜单-->
          <Menu :menu-list="constantRoute"></Menu>
        </el-menu>
      </el-aside>
      <el-container
        class="left-container"
        :class="{ fold: LayOutSettingStore.fold }"
      >
        <el-header class="overflow-hidden k_header">
          <Header></Header>
        </el-header>
        <route-tabs></route-tabs>
        <el-main style="background-color: #f6f6f6">
          <div>
            <router-view v-slot="{ Component }">
              <transition name="fade">
                <component :is="Component" v-if="LayOutSettingStore.isrefash" />
              </transition>
            </router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.commonlayout {
  width: 100vw;
  height: 100vh;

  .aside-container {
    width: $base-menu-width;
    height: 100vh;
    color: white;
    background: $base-menu-background;
    transition: all 0.3ms;

    &.fold {
      width: var(--base-menu-min-width);
    }
  }

  .left-container {
    position: absolute;
    left: $base-menu-width;
    width: calc(100vw - $base-menu-width);
    height: 100vh;
    transition: all 0.3ms;

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

.logo {
  width: 100%;
  height: $base-menu-logo-height;
  overflow: hidden;
  font-size: $base-logo-title-fontSize;
  line-height: $base-menu-logo-height;
  color: white;
  text-align: center;
  background-color: #000;
}
/* 加过渡给侧边导航 */
.el-aside {
  transition: width 0.25s;
}
/* 加快侧边栏文字消失的速度 */

.el-menu {
  border-right: none;
  transition: all 3ms;
}

// 路由切换动画

/* 插入的新元素初始的样式 */
.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;

  // transform: scale(1);
}
</style>
