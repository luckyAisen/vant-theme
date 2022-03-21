import { nextTick } from "vue";
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import { APP_BASE_URL, VANT_THEME_VERSION } from "@/utils/constant";
import useLocalStorage from "@/utils/useLocalStorage";
import type { Version, Menu } from "@/utils/type";
import getMenu from "@/json/menus";
import {
  listenIframe,
  listenToSyncPath,
  syncPathToChild,
} from "@/utils/iframeSync";
import useMainStore from "@/stores";

const Storage = useLocalStorage();

const defaultRoute: RouteRecordRaw = {
  path: "/",
  redirect: "/zh-CN",
};

export let zhCNMenu: Menu[] = [];

export let enUSMenu: Menu[] = [];

const createRoutes = () => {
  const v = Storage.getItem<Version>(VANT_THEME_VERSION);
  const menu1 = getMenu(v, "zh-CN");
  const menu2 = getMenu(v, "en-US");
  const zhCNRoute = createRoutesHandler(menu1);
  const enUSRoute = createRoutesHandler(menu2);
  zhCNMenu = menu1;
  enUSMenu = menu2;
  return [defaultRoute, ...zhCNRoute, ...enUSRoute];
};

const createRoutesHandler = (menu: Menu[]): RouteRecordRaw[] => {
  const route: RouteRecordRaw[] = [];
  menu.forEach((group, parentIndex) => {
    group.children?.forEach((item, index) => {
      route.push({
        path: item.value,
        component: () => import("./ConsolePanel.vue"),
        meta: {
          parentIndex,
          parentLabel: group.label,
          parentValue: group.value,
          index,
          label: item.label,
          value: item.value,
        },
      });
    });
  });
  return route;
};

const router = createRouter({
  history: createWebHashHistory(APP_BASE_URL),
  routes: createRoutes(),
});

router.afterEach((to) => {
  nextTick(() => {
    syncPathToChild();
    scrollIntoView(".console-panel-nav", `nav-${to.path}`);
    scrollIntoView(".console-panel-var", "");
    const $store = useMainStore();
    $store.setListenSyncPathState(true);
  });
});

listenIframe();

listenToSyncPath(router);

(window as any).vueRouter = router;

const scrollIntoView = (parentSelector: string, childSelector: string) => {
  const parent = <HTMLElement>document.querySelector(parentSelector);
  const target = <HTMLElement>document.getElementById(childSelector);
  if (parent && target) {
    parent.scrollTop = target.offsetTop - 72;
  }
  if (parent && !target) {
    parent.scrollTop = 0;
  }
};

export default router;
