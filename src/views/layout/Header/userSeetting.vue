<template>
  <el-menu
    class="items-center el-menu-demo"
    mode="horizontal"
    :collapse-transition="true"
    :ellipsis="false"
    router
  >
    <!-- 头像 -->
    <div class="w-[30px] h-[30px]">
      <img src="../../../assets/images/avator.gif" alt="" srcset="" />
    </div>
    <el-sub-menu index="2">
      <template #title> admin</template>
      <el-menu-item index="/user/profile">
        <el-icon>
          <User />
        </el-icon>
        <span>基本资料</span></el-menu-item
      >
      <el-menu-item index="/user/avatar">
        <el-icon>
          <User />
        </el-icon>
        <span>更换头像</span></el-menu-item
      >
      <el-menu-item index="/user/password">
        <el-icon>
          <User />
        </el-icon>
        <span>重置密码</span>
      </el-menu-item>
      <el-menu-item>
        <el-icon>
          <User />
        </el-icon>
        <span>退出登陆</span></el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>
<script setup lang="ts" name="userSeetting"></script>
