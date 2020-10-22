import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/config',
    name: 'Config',
    component: () => import(/* webpackChunkName: "config" */ '../views/Config.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: () => import(/* webpackChunkName: "about" */ '../views/Imprint.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import(/* webpackChunkName: "about" */ '../views/Privacy.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
