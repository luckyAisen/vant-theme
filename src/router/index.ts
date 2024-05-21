import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('@/views/project/index.vue')
    },
    {
      path: '/workspace/:id/:version/:component',
      name: 'workspace',
      component: () => import('@/views/workspace/index.vue')
    }
  ]
});

export default router;
