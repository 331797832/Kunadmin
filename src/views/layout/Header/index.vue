<template>
  <div>
    <el-row style="overflow: hidden">
      <el-col :span="16" :xs="15" class="flex items-center">
        <el-icon size="40" class="togglea-aside" @click="changeIcon">
          <component
            :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"
          ></component>
        </el-icon>
        <!-- 面包屑 -->
        <K-breadcrumb class="hidden-xs-only ml-5"></K-breadcrumb>
      </el-col>
      <el-col :span="4" class="flex items-center hidden-xs-only">
        <div class="flex-grow" />
        <!-- 操作 -->
        <div>
          <el-button circle icon="Refresh" @click="refreshHandle"></el-button>
          <el-button
            class="mr-2"
            circle
            icon="FullScreen"
            @click="fullScreen"
          ></el-button>
          <!-- <el-button type="link" circle icon="Setting"></el-button> --><el-switch
            v-model="dark"
            active-text="洁白"
            inactive-text="暗黑"
            @click="toggleDark(dark)"
            >黑色</el-switch
          >
        </div>
      </el-col>
      <el-col :span="4" class="flex items-center">
        <div class="flex-grow" />
        <userSeetting></userSeetting>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts" name="Header-com">
import { LayOutStore } from "@/stores";
import { nextTick, ref } from "vue";
import userSeetting from "./userSeetting.vue";
import { fullScreen, toggleDark } from "@/utils/fullScreen";
const dark = ref(false);
//获取layout配置相关的仓库
const LayOutSettingStore = LayOutStore();
//点击图标的方法
const changeIcon = () => {
  //图标进行切换
  LayOutSettingStore.fold = !LayOutSettingStore.fold;
};

// 刷新页面
const refreshHandle = () => {
  console.log("刷新页面");
  LayOutSettingStore.isrefash = !LayOutSettingStore.isrefash;
  // nextTick(() => {
  nextTick(() => {
    LayOutSettingStore.isrefash = !LayOutSettingStore.isrefash;
  });
  // });
};
</script>
<style lang="scss" scoped>
.header__container {
  /* stylelint-disable declaration-property-value-no-unknown */

  width: calc(100vw - $base-menu-width);
}

.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}

.togglea-aside {
  padding-left: 10px;
  color: var(--el-menu-text-color);
}

.name {
  display: flex;
  align-items: center;
  color: black;
}
</style>
