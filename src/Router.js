import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/11_vue路由/Home.vue'
import About from "@/11_vue路由/About.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})

export default router