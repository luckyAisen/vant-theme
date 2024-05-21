<template>
  <div class="relative flex items-center workspace-preview">
    <VSkeleton v-if="skeletonState" class="absolute z-10 workspace-preview-skeleton" :rows="20" />
    <iframe class="workspace-preview-mobile" :src="iframeUrl" @load="onLoad"></iframe>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/modules/app';
import { useWorkspaceStore } from '@/stores/modules/workspace';
import VSkeleton from '@/components/Skeleton/index.vue';
import { WorkspaceEnum } from '@/enums';

import type { Ref } from 'vue';
import type { Project } from '@/types';

defineOptions({
  name: 'WorkspacePreview'
});

const appStore = useAppStore();

const workspaceStore = useWorkspaceStore();

// 项目信息
const project = inject('project') as Ref<Project>;

// 组件标识
const component = computed(() => workspaceStore.component);

// 骨架屏状态
const skeletonState = ref(true);

// 外链地址
const iframeUrl = ref('');

/**
 * 初始化 iframe 地址
 */
const initIframeUrl = () => {
  let url = `${import.meta.env.BASE_URL}mobile/${project.value.version}.html#/${appStore.locale}`;

  if (component.value !== WorkspaceEnum.WORKSPACE_BASIC) {
    url += '/' + component.value;
  }

  iframeUrl.value = url;
};

/**
 * iframe 加载完成后的回调
 */
const onLoad = () => {
  skeletonState.value = false;
};

/**
 * 组件初始化方法
 */
const init = () => {
  initIframeUrl();
};

init();
</script>

<style lang="scss" scoped>
.workspace-preview {
  // width: var(--workspace-preview-width);
  // min-width: var(--workspace-preview-width);
  // max-width: var(--workspace-preview-width);
  // height: 100%;
  // margin-right: var(--vt-size-5);

  padding-left: var(--vt-size-5);
  padding-right: var(--vt-size-5);

  .workspace-preview-mobile,
  .workspace-preview-skeleton {
    // width: 100%;

    width: var(--workspace-preview-width);
    min-width: var(--workspace-preview-width);
    max-width: var(--workspace-preview-width);
    height: 100%;

    height: var(--workspace-preview-height);
    border-radius: var(--vt-border-radius-10);
    border: none;
    outline: none;
  }

  .workspace-preview-skeleton {
    background-color: #fff;
  }
}

:root[project='dark'] {
  .workspace-preview {
    .workspace-preview-mobile {
      border: 2px solid var(--vt-color-bg-2);
    }
  }
}
</style>
