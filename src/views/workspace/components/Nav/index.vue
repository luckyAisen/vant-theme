<template>
  <div class="overflow-y-auto workspace-nav">
    <ul v-for="group in menu" :key="group.value" class="workspace-nav-group">
      <div class="workspace-nav-group-title">{{ group.label }}</div>
      <li
        v-for="item in group.children"
        :key="item.value"
        :class="[
          'workspace-nav-group-item',
          {
            active: component === item.value
          }
        ]"
        @click="onReplace(item.value)"
        :data-nav-id="item.value"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/modules/app';
import { WorkspaceEnum } from '@/enums';
import { getItem } from '@/utils/localStorage';
import { syncPathToChild } from '@/utils/iframeSync';

import type { Ref } from 'vue';
import type { Theme, MenuBase } from '@/types';

defineOptions({
  name: 'WorkspaceNav'
});

const theme = inject('theme') as Ref<Theme>;

const component = inject('component') as Ref<string>;

const route = useRoute();

const appStore = useAppStore();

const menu = computed(() => {
  const allMenu = getItem<MenuBase>(WorkspaceEnum.WORKSPACE_MENU);
  return allMenu[theme.value.version][appStore.locale];
});

/**
 * 跳转到指定组件页面
 * @param value 组件标识
 */
const onReplace = (value: string) => {
  let path = '/' + appStore.locale;
  if (value !== WorkspaceEnum.WORKSPACE_BASIC) {
    path += '/' + value;
  }
  syncPathToChild(path);
};

/**
 * 滚动到指定组件
 */
const onScrollToComponent = () => {
  const element = document.querySelector(`[data-nav-id=${component.value}]`);
  if (element) {
    element.scrollIntoView({
      block: 'center'
    });
  }
};

watch(
  () => route.params,
  (params) => {
    component.value = params.component as string;
    onScrollToComponent();
  },
  {
    deep: true,
    immediate: true
  }
);
</script>

<style lang="scss" scoped>
.workspace-nav {
  width: var(--workspace-nav-width);
  min-width: var(--workspace-nav-width);
  max-width: var(--workspace-nav-width);
  height: 100%;
  background-color: var(--vt-color-bg-1);
  border-right: 1px solid var(--vt-color-border-1);

  .workspace-nav-group {
    padding: var(--vt-size-2) var(--vt-size-3) 0px var(--vt-size-3);

    &:last-child {
      padding-bottom: var(--vt-size-2);
    }

    .workspace-nav-group-title,
    .workspace-nav-group-item {
      padding: var(--vt-size-1);
    }

    .workspace-nav-group-title {
      font-weight: var(--vt-font-weight-bolder);
      color: var(--vt-color-text-1);
      line-height: 32px;
    }

    .workspace-nav-group-item {
      cursor: pointer;
      color: var(--vt-color-text-2);
      margin-bottom: var(--vt-size-1);
      transition: all 0.2s ease;
      border-radius: var(--vt-border-radius-2);

      &:last-child {
        margin-bottom: 0px;
      }

      &:hover,
      &.active {
        background-color: var(--vt-color-fill-3);
      }

      &.active {
        color: var(--vt-color-primary-6);
      }
    }
  }
}
</style>
