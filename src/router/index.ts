import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import componentRoutes from './component'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/preview',
    name: 'Preview',
    redirect: '/preview/base',
    component: () =>
      import(/* webpackChunkName: "preview" */ '../views/preview.vue'),
    children: componentRoutes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
