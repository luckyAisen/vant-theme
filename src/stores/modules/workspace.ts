import { defineStore } from 'pinia';
import { ThemeEnum, WorkspaceEnum } from '@/enums';
import { store } from '@/stores';
import { getItem, setItem } from '@/utils/localStorage';

import type { MenuBase } from '@/types';

export const useWorkspaceStore = defineStore('workspaceStore', () => {
  const initBaseMenu = async (): Promise<MenuBase> => {
    if (getItem(WorkspaceEnum.WORKSPACE_MENU))
      return getItem<MenuBase>(WorkspaceEnum.WORKSPACE_MENU);

    return await Promise.all([
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ThemeEnum.VERSION_2}/menu/zh-CN.json`),
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ThemeEnum.VERSION_2}/menu/en-US.json`),
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ThemeEnum.VERSION_3}/menu/zh-CN.json`),
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ThemeEnum.VERSION_3}/menu/en-US.json`),
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ThemeEnum.VERSION_4}/menu/zh-CN.json`),
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ThemeEnum.VERSION_4}/menu/en-US.json`)
    ]).then(async (res) => {
      const menus: MenuBase = {
        [ThemeEnum.VERSION_2]: {
          'zh-CN': [],
          'en-US': []
        },
        [ThemeEnum.VERSION_3]: {
          'zh-CN': [],
          'en-US': []
        },
        [ThemeEnum.VERSION_4]: {
          'zh-CN': [],
          'en-US': []
        }
      };

      menus['v2']['zh-CN'] = await res[0].json();
      menus['v2']['en-US'] = await res[1].json();

      menus['v3']['zh-CN'] = await res[2].json();
      menus['v3']['en-US'] = await res[3].json();

      menus['v4']['zh-CN'] = await res[4].json();
      menus['v4']['en-US'] = await res[5].json();

      setItem(WorkspaceEnum.WORKSPACE_MENU, menus);

      return menus;
    });
  };

  return {
    initBaseMenu
  };
});

export function useWorkspaceStoreWithOut() {
  return useWorkspaceStore(store);
}
