import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/views/Home/Home.vue"),
    },
    {
      path: "/order",
      component: () => import("@/views/Order/Order.vue"),
    },
    {
      path: "/message",
      component: () => import("@/views/Message/Message.vue"),
    },
    {
      path: "/favor",
      component: () => import("@/views/Favor/Favor.vue"),
    },
    {
      path: "/city",
      component: () => import("@/views/City/City.vue"),
      meta: {
        hideTabBar: true,
      },
    },
    {
      path: "/search",
      component: () => import("@/views/Search/Search.vue"),
      meta: {
        hideTabBar: true,
      },
    },
    {
      path: "/detail/:id",
      component: () => import("@/views/Detail/Detail.vue"),
      meta: {
        hideTabBar: true,
      },
    },
  ],
});
