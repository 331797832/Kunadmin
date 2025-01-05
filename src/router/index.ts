import { createRouter, createWebHistory } from "vue-router";

import { constantRoute } from "./routes";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoute,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
// 定义一个数组，专门用户存放所有需要权限访问的页面

// const authUrls = ["/home", "/ooo"];
router.beforeEach((to, from, next) => {
  // 如果访问的是登录页面，直接放行
  if (to.path === "/login") {
    next();
    return;
  }
  // 权限页面，需要判断token 有token直接访问 无token 返回注册页面
  const token = "1";
  // 如果没有 token，跳转到登录页面
  if (!token) {
    next({ path: "/login" });
    return;
  } else {
    next();
    return;
  }

  // 如果有 token 且访问的是需要权限的页面，直接放行；否则跳转到登录页面
  // authUrls.includes(to.path) ? next() : next({ path: "/login" });
});

export default router;
