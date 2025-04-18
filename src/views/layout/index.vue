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
          <svg-icon name="element" style="width: 40%; height: 100px" />
        </div>
        <div v-else class="logo">E</div>
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
      <el-container
        class="left-container"
        :class="{ fold: LayOutSettingStore.fold }"
      >
        <el-header class="overflow-hidden k_header">
          <Header></Header>
        </el-header>
        <route-tabs></route-tabs>
        <el-main class="routeview-bg">
          <div>
            <router-view v-slot="{ Component, route }">
              <transition name="fade" mode="out-in">
                <keep-alive>
                  <component
                    :is="Component"
                    :key="route.path"
                    v-if="LayOutSettingStore.isrefash"
                  />
                </keep-alive>
              </transition>
            </router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts" name="layout">
import Menu from "./Menu/Menu.vue";
import Header from "./Header/index.vue";
import { constantRoute } from "@/router/routes";
import { LayOutStore } from "@/stores";
import routeTabs from "./Header/routeTabs.vue";
//获取layout配置相关的仓库
const LayOutSettingStore = LayOutStore();
</script>

<style lang="scss" scoped>
.commonlayout {
  width: 100vw;
  height: 100vh;

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

  .left-container {
    position: absolute;
    left: $base-menu-width;
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

/* 加快侧边栏文字消失的速度 */

.el-menu {
  border-right: none;
  transition: width 0.5ms;
}

// 路由切换动画
/* 插入的新元素初始的样式 */
.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
