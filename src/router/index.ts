import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import componentRoutes from './component'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/theme'
    // name: 'HomeRoute',
    // component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/theme',
    name: 'ThemeRoute',
    component: () =>
      import(/* webpackChunkName: "theme" */ '../views/theme.vue')
  },
  {
    path: '/preview',
    name: 'PreviewRoute',
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
