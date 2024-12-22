<script setup lang="ts">
import { getdata } from "@/api/user";
const getdatahandle = () => {
  getdata({ username: "admin", password: "111111" }).then((res: any) => {
    console.log(res);
  });
};
getdatahandle();
</script>

<template>
  <router-view></router-view>
</template>
<style scoped lang="scss">
.oo {
  color: $color;
}

.box {
  width: 100px;
  height: 100px;
  color: red;
}
</style>
