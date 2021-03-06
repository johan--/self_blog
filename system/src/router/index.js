import Vue from "vue";
import Router from "vue-router";
const _import = require("./_import_" + process.env.NODE_ENV);
Vue.use(Router);
export const constRout = [
  {
    path: "/login",
    hidden: true,
    component: () => import("@/views/login/index")
  },
  {
    path: "/",
    // name: 'root',
    hidden: true,
    redirect: "/welcome",
    component: () => import("@/views/layout/index"),
    meta: {
      title: "首頁"
    },
    children: [
      {
        path: "welcome",
        name: "welcome",
        hidden: true,
        component: () => import("@/views/dashboard/index")
      }
    ]
  },
  {
    path: "/articles",
    component: () => import("@/views/layout/index"),
    single: true,
    redirect: "/articles/content",
    children: [
      {
        path: "content",
        meta: {
          title: "列表",
          icon: "tree"
        },
        // name: "content",
        component: () => import("@/views/articles/index")
      },
      {
        path: "publish",
        hidden: true,
        meta: {
          title: "发布",
          icon: "tree"
        },
        // name: "publish",
        component: () => import("@/views/articles/publish")
      }
    ],
    name: "articles",
    meta: {
      title: "文章管理",
      icon: "form"
    }
  }
];
export default function createRouter() {
  return new Router({
    routes: constRout
  });
}
export const asyncRouteMap = [
  {
    path: "/four",
    component: _import("layout/index"),
    name: "svg-icon",
    children: [
      {
        path: "index",
        meta: {
          title: "选项1",
          icon: "tree",
          roles: ["admin"]
        },
        component: () => import("@/views/svg-icon/index")
      }
    ],
    meta: {
      title: "图标",
      icon: "icon",
      roles: ["admin"]
    }
  },
  { path: "*", redirect: "/404", hidden: true }
];
