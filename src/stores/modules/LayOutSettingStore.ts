import { constantRoute } from "@/router/routes";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const LayOutStore = defineStore("useLayOutSettingStore", () => {
  const $router = useRouter();
  const fold = ref(false); //用户控制菜单折叠还是收起控制
  const isrefash = ref(true); //控制路由刷新
  const routertabs = ref<any[]>([]);
  // 递归路由
  const setroutertabs = (val: any) => {
    const traverse = (routes: any[]) => {
      routes.forEach((item) => {
        if (item.path === val) {
          // 判断是否已经存在
          if (routertabs.value.some((item) => item.path === val)) {
            return;
          }
          routertabs.value.push(item);
        }
        if (item.children) {
          traverse(item.children); // 递归处理子路由
        }
      });
    };
    traverse(constantRoute);
  };
  // 移除tabs路由
  const romoveroutertabs = (val: any) => {
    // $router.push();
    // 如果只有一个tab则不允许删除
    if (routertabs.value.length === 1) {
      return;
    } else {
      routertabs.value = routertabs.value.filter((item) => item.path !== val);
      $router.push(routertabs.value[routertabs.value.length - 1].path);
    }
  };

  return {
    fold,
    isrefash,
    routertabs,
    setroutertabs,
    romoveroutertabs,
  };
});
