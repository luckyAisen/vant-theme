import { WorkspaceEnum } from '@/enums';
import { getItem } from './localStorage';
import { useAppStoreWithOut } from '@/stores/modules/app';

import type { Theme, MenuBase } from '@/types';

/**
 * 获取组件名称
 * @param theme 主题信息
 * @param component 组件标识
 * @returns 组件名称
 */
export const findCompLabel = (theme: Theme, component: string) => {
  const appStore = useAppStoreWithOut();
  const allMenu = getItem<MenuBase>(WorkspaceEnum.WORKSPACE_MENU);
  const currentMenu = allMenu[theme.version][appStore.locale];
  for (let i = 0; i < currentMenu.length; i++) {
    const menu = currentMenu[i].children.find((it) => it.value === component);
    if (menu) {
      return menu.label;
    }
  }
};
