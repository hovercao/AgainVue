import {createRouter, createWebHashHistory} from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: () => import("@/views/Home/Home.vue")
    }, {
      path: '/order',
      component: () => import("@/views/Order/Order.vue")
    }, {
      path: '/message',
      component: () => import("@/views/Message/Message.vue")
    }, {
      path: '/favor',
      component: () => import("@/views/Favor/Favor.vue")
    }, {
      path: '/city',
      component: () => import('@/views/City/City.vue'),
      meta: {
        hideTabbar: true
      }
    }
  ]
})