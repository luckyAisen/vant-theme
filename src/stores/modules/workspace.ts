import { defineStore } from 'pinia';
import { ProjectEnum, WorkspaceEnum } from '@/enums';
import { store } from '@/stores';
import { getItem, setItem } from '@/utils/localStorage';

import type { WMenuBase } from '@/types';

export const useWorkspaceStore = defineStore('workspaceStore', () => {
  const skeletonState = ref<boolean>(false);

  const component = ref<string>(WorkspaceEnum.WORKSPACE_BASIC);

  const setSkeletonState = (state: boolean) => {
    skeletonState.value = state;
  };

  const setComponent = (comp: string) => {
    component.value = comp;
  };

  const initBaseMenu = async (): Promise<WMenuBase> => {
    if (getItem(WorkspaceEnum.WORKSPACE_MENU))
      return getItem<WMenuBase>(WorkspaceEnum.WORKSPACE_MENU);

    return await Promise.all([
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ProjectEnum.VERSION_2}/menu/zh-CN.json`),
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ProjectEnum.VERSION_2}/menu/en-US.json`),
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ProjectEnum.VERSION_3}/menu/zh-CN.json`),
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ProjectEnum.VERSION_3}/menu/en-US.json`),
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ProjectEnum.VERSION_4}/menu/zh-CN.json`),
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ProjectEnum.VERSION_4}/menu/en-US.json`)
    ]).then(async (res) => {
      const menus: WMenuBase = {
        [ProjectEnum.VERSION_2]: {
          'zh-CN': [],
          'en-US': []
        },
        [ProjectEnum.VERSION_3]: {
          'zh-CN': [],
          'en-US': []
        },
        [ProjectEnum.VERSION_4]: {
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
    skeletonState,
    component,

    setSkeletonState,
    setComponent,
    initBaseMenu
  };
});

export function useWorkspaceStoreWithOut() {
  return useWorkspaceStore(store);
}
