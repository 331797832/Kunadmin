<template>
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
</template>

<script setup lang="ts">
import { LayOutStore } from "@/stores";
//获取layout配置相关的仓库
const LayOutSettingStore = LayOutStore();
</script>

<style scoped lang="scss">
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
