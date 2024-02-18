import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/theme',
      name: 'theme',
      component: () => import('@/views/theme/index.vue')
    },
    {
      path: '/workspace/:version/:id',
      name: 'workspace',
      component: () => import('@/views/workspace/index.vue')
    }
  ]
});

export default router;
