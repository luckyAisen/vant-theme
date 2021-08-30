import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/',
    component: () => import('@/pages/main/layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/main/views/index.vue')
      },
      {
        path: 'theme',
        name: 'ThemeRouter',
        component: () => import('@/pages/main/views/theme.vue')
      },
      {
        path: 'preview',
        name: 'PreviewRouter',
        component: () => import('@/pages/main/views/preview.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
