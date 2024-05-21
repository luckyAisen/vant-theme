import { WorkspaceEnum } from '@/enums';
import { getItem } from './localStorage';
import { useAppStoreWithOut } from '@/stores/modules/app';

import type { Project, WMenuBase } from '@/types';

/**
 * 获取组件名称
 * @param project 项目信息
 * @param component 组件标识
 * @returns 组件名称
 */
export const findCompLabel = (project: Project, component: string) => {
  const appStore = useAppStoreWithOut();
  const allMenu = getItem<WMenuBase>(WorkspaceEnum.WORKSPACE_MENU);
  const currentMenu = allMenu[project.version][appStore.locale];
  for (let i = 0; i < currentMenu.length; i++) {
    const menu = currentMenu[i].children.find((it) => it.value === component);
    if (menu) {
      return menu.label;
    }
  }
};
