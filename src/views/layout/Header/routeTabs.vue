<template>
  <div>
    <el-scrollbar>
      <div class="scrollbar-flex-content">
        <p
          v-for="item in setroutertabs"
          :key="item"
          @click="handle(item)"
          class="scrollbar-demo-item"
        >
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          {{ item.meta.title }}
        </p>
        <el-tabs
          v-model="str"
          type="card"
          @tab-click="handle2"
          class="demo-tabs"
          closable
        >
          <el-tab-pane
            v-for="item in setroutertabs"
            :key="item.path"
            @click="handle(item)"
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
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { LayOutStore } from "@/stores";
// import type { TabPaneName } from "element-plus";
const layoutstore = LayOutStore();

// <p
//           v-for="item in setroutertabs"
//           :key="item"
//           @click="handle(item)"
//           class="scrollbar-demo-item"
//         >
//           <el-icon>
//             <component :is="item.meta.icon"></component>
//           </el-icon>
//           {{ item.meta.title }}
//         </p>
const $router = useRouter();
const str = ref(useRoute().fullPath);
console.log(useRoute());

// 去重
const setroutertabs = computed(() => {
  return layoutstore.routertabs;
});
const handle = (item: any) => {
  console.log("你好");

  $router.push(item.path);
};
const handle2 = (tab: any) => {
  layoutstore.setroutertabs(tab.name);
  $router.push(tab.props.name);
};
// const molvalue = computed(() => {
//   return useRoute().fullPath;
// });
// const removeTab = (targetName: TabPaneName) => {
//   //   layoutstore.routertabs = layoutstore.routertabs.filter(
//   //     (tab: any) => tab.name !== targetName,
//   //   );
//   //   if (str === targetName) {
//   //     layoutstore.routertabs.forEach((tab: any, index: number) => {
//   //       if (tab.name === targetName) {
//   //         const nextTab =
//   //           layoutstore.routertabs[index + 1] ||
//   //           layoutstore.routertabs[index - 1];
//   //         if (nextTab) {
//   //           str = nextTab.name;
//   //         }
//   //       }
//   //     });
//   //   }
// };
</script>
<style scoped>
.scrollbar-flex-content {
  display: flex;
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
