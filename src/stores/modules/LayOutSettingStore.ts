import { defineStore } from "pinia";
import { ref } from "vue";
export const LayOutStore = defineStore("useLayOutSettingStore", () => {
  const fold = ref(true); //用户控制菜单折叠还是收起控制
  const isrefash = ref(true); //控制路由刷新
  return {
    fold,
    isrefash,
  };
});
