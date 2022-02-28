import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/",
      component: () => import("../layout/index.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/index.vue"),
        },
        {
          path: "theme",
          name: "ThemeRouter",
          component: () => import("../views/theme.vue"),
        },
        {
          path: "preview",
          name: "PreviewRouter",
          component: () => import("../views/preview.vue"),
        },
      ],
    },
  ],
});

export default router;
