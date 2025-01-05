<template>
  <div>
    <el-row style="overflow: hidden">
      <el-col :span="16" :xs="15" class="flex items-center">
        <el-icon size="40" class="text-[#000] pl-3" @click="changeIcon">
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
          <el-button
            type="link"
            circle
            icon="Refresh"
            @click="refreshHandle"
          ></el-button>
          <el-button
            type="link"
            circle
            icon="FullScreen"
            @click="fullScreen"
          ></el-button>
          <el-button type="link" circle icon="Setting"></el-button>
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
import { nextTick } from "vue";
import userSeetting from "./userSeetting.vue";
import "element-plus/theme-chalk/display.css";
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
//全屏按钮点击的回调
const fullScreen = () => {
  //DOM对象的一个属性:可以用来判断当前是不是全屏模式[全屏:true,不是全屏:false]
  const full = document.fullscreenElement;
  //切换为全屏模式
  if (!full) {
    //文档根节点的方法requestFullscreen,实现全屏模式
    document.documentElement.requestFullscreen();
  } else {
    //变为不是全屏模式->退出全屏模式
    document.exitFullscreen();
  }
};
</script>
<style lang="scss" scoped>
.header__container {
  width: calc(100vw - $base-menu-width);
}

.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}

.name {
  display: flex;
  align-items: center;
  color: black;
}
</style>
