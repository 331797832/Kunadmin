export const constantRoutes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/home",
    name: "layout",
    component: () => import("../views/layout/index.vue"),
    children: [
      {
        path: "home/channel",
        component: () => import("@/views/article/index.vue"),
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404/index.vue"),
  },
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/403/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Any",
    redirect: "/404",
  },
];
export const constantRoute = [
  {
    //登录
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: {
      title: "登录", //菜单标题
      hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: "House", //菜单文字左侧的图标,支持element-plus全部图标
    },
  },
  {
    //登录成功以后展示数据的路由
    path: "/",
    component: () => import("@/views/layout/index.vue"),
    name: "layout",
    redirect: "/home",
    meta: {
      title: "布局",
      hidden: false,
      icon: "FullScreen",
    },

    children: [
      {
        path: "/home",
        component: () => import("@/views/mangen/index.vue"),
        meta: {
          title: "登录1", //菜单标题
          hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
          icon: "ChatLineRound", //菜单文字左侧的图标,支持element-plus全部图标
        },
      },
      {
        path: "/test",
        component: () => import("@/views/article/index.vue"),
        meta: {
          title: "登录2", //菜单标题
          hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
          icon: "CirclePlus", //菜单文字左侧的图标,支持element-plus全部图标
        },
      },
    ],
  },
  {
    //404
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: {
      title: "404444",
      hidden: true,
      icon: "DocumentDelete",
    },
  },
];
