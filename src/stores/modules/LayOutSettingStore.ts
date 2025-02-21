import { constantRoute } from "@/router/routes";
import { defineStore } from "pinia";
import { ref } from "vue";
export const LayOutStore = defineStore("useLayOutSettingStore", () => {
  const fold = ref(false); //用户控制菜单折叠还是收起控制
  const isrefash = ref(true); //控制路由刷新
  const routertabs = ref<any[]>([]);
  // 递归路由
  const setroutertabs = (val: any) => {
    const traverse = (routes: any[]) => {
      routes.forEach((item) => {
        if (item.path === val) {
          routertabs.value.push(item);
        }
        if (item.children) {
          traverse(item.children); // 递归处理子路由
        }
      });
    };
    traverse(constantRoute);
  };
  const romoveroutertabs = (val: any) => {
    // 过滤
    routertabs.value = routertabs.value.filter((item) => item.path !== val);
  };
  return {
    fold,
    isrefash,
    routertabs,
    setroutertabs,
    romoveroutertabs,
  };
});
