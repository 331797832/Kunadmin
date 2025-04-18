<template>
  <div class="tabs-container">
    <el-tabs
      v-model="avtive"
      type="card"
      @tab-click="handle2"
      @tab-remove="removeTab"
      class="route-tabs"
      closable
    >
      <el-tab-pane
        v-for="item in layoutStore.routertabs"
        :key="item.path"
        lazy
        :label="item.meta.title"
        :name="item.path"
      >
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts" name="routeTabs">
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { LayOutStore } from "@/stores";
const layoutStore: any = LayOutStore();

const $router = useRouter();
const $route = useRoute();
const avtive = ref("");
// 去重
const handle2 = (tab: any) => {
  layoutStore.setroutertabs(tab.name);
  $router.push(tab.props.name);
};
const removeTab = (tab: any) => {
  layoutStore.romoveroutertabs(tab);
};
watch(
  () => $route.path,
  (newPath) => {
    layoutStore.setroutertabs(newPath);
    avtive.value = newPath;
  },
  {
    immediate: true,
  },
);
</script>
<style scoped>
.tabs-container {
  position: relative;
  width: 100%;
}

.route-tabs {
  width: 100%;
}

/* 调整标签样式 */
.custom-tabs-label {
  display: flex;
  gap: 4px;
  align-items: center;
}

:deep(.el-tabs__nav-wrap) {
  padding: 0 40px; /* 为左右箭头留出空间 */
}

:deep(.el-tabs__nav-wrap.is-scrollable) {
  padding: 0 40px;
}

:deep(.el-tabs__nav-prev),
:deep(.el-tabs__nav-next) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 100%;
}
</style>
