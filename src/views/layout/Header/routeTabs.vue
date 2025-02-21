<template>
  <div>
    <el-scrollbar>
      <div class="scrollbar-flex-content">
        <el-tabs
          v-model="avtive"
          type="card"
          @tab-click="handle2"
          @tab-remove="removeTab"
          class="demo-tabs"
          closable
        >
          <el-tab-pane
            v-for="item in setroutertabs"
            :key="item.path"
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
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts" name="routeTabs">
import { computed, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { LayOutStore } from "@/stores";
const layoutstore = LayOutStore();

const $router = useRouter();
const $route = useRoute();
const avtive = ref("");
console.log("路由", useRoute());
// 去重
const setroutertabs = computed(() => {
  return Array.from(new Set(layoutstore.routertabs));
});
const handle2 = (tab: any) => {
  layoutstore.setroutertabs(tab.name);
  $router.push(tab.props.name);
};
const removeTab = (tab: any) => {
  console.log(tab);
  layoutstore.romoveroutertabs(tab);
};
watch(
  () => $route.path,
  (newPath) => {
    console.log("newPath", newPath);

    avtive.value = newPath;
  },
  {
    immediate: true,
  },
);
</script>
<style scoped>
.scrollbar-flex-content {
  display: flex;
  margin-top: 2px;
}

.scrollbar-demo-item {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  color: var(--el-color-danger);
  text-align: center;
  background: var(--el-color-danger-light-9);
  border-radius: 4px;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  font-size: 32px;
  font-weight: 600;
  color: #6b778c;
}
</style>
