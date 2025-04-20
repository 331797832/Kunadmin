export const constantRoute: any[] = [
  {
    path: "/",
    redirect: "/login",
    meta: {
      hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: "FullScreen", //菜单文字左侧的图标,支持element-plus全部图标
    },
  },
  {
    //登录
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: {
      title: "登录", //菜单标题
      hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: "FullScreen", //菜单文字左侧的图标,支持element-plus全部图标
    },
  },
  {
    //登录成功以后展示数据的路由
    path: "/homepage",
    component: () => import("@/views/layout/index.vue"),
    name: "homepage",
    redirect: "/home",
    meta: {
      title: "首页", //菜单标题
      hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: "House", //菜单文字左侧的图标,支持element-plus全部图标
    },

    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        name: "home",
        meta: {
          title: "首页", //菜单标题
          hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
          icon: "House", //菜单文字左侧的图标,支持element-plus全部图标
        },
      },
    ],
  },
  {
    //登录成功以后展示数据的路由
    path: "/order",
    component: () => import("@/views/layout/index.vue"),
    name: "order",
    redirect: "/text",
    meta: {
      title: "订单管理",
      hidden: false,
      icon: "FullScreen",
    },
    children: [
      {
        path: "/text",
        component: () => import("@/views/text/index.vue"),
        name: "text",
        meta: {
          title: "采购订单",
          hidden: false,
          icon: "ChatDotRound",
        },
      },
      {
        path: "/mangen",
        component: () => import("@/views/mangen/index.vue"),
        name: "wulaioorder",
        meta: {
          title: "物料订单",
          hidden: false,
          icon: "ChatDotRound",
        },
      },
    ],
  },
  {
    path: "/acl",
    component: () => import("@/views/layout/index.vue"),
    name: "Acl",
    redirect: "/acl/user",
    meta: {
      title: "权限管理",
      icon: "User",
      hidden: false,
    },
    children: [
      {
        path: "/acl/user",
        component: () => import("@/views/user/index.vue"),
        name: "User",
        meta: {
          title: "用户管理",
          icon: "User",
          hidden: false,
        },
      },
      {
        path: "/test",
        component: () => import("@/views/article/index.vue"),
        meta: {
          title: "路由菜单", //菜单标题
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
  {
    meta: {
      title: "404444",
      hidden: true,
      icon: "DocumentDelete",
    },
    path: "/:pathMatch(.*)*",
    name: "Any",
    redirect: "/404",
  },
];
