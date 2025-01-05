<template>
  <!-- 面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-show="item.meta.title"
      :to="item.path"
      v-for="(item, index) in $route.matched"
      :key="index"
    >
      <div class="flex">
        <div class="mx-1">
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
        </div>
        <div>
          <span>
            {{ item.meta.title }}
          </span>
        </div>
      </div>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
