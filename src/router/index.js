import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/lkr/:id',
    component: Home
  },
  {
    path: '/config',
    component: () => import(/* webpackChunkName: "config" */ '../views/Config.vue')
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/imprint',
    component: () => import(/* webpackChunkName: "about" */ '../views/Imprint.vue')
  },
  {
    path: '/privacy',
    component: () => import(/* webpackChunkName: "about" */ '../views/Privacy.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
