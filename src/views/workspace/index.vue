<template>
  <div class="flex flex-col workspace">
    <WorkspaceHeader @reset-project-fn="onResetProjectFn" />

    <VSkeleton
      v-if="skeletonState"
      class="w-full pt-20 pl-5 pr-5 mx-auto max-w-7xl workspace-skeleton"
      :text="skeletonText"
    />

    <div v-else class="flex flex-1 overflow-hidden workspace-content">
      <WorkspaceNav ref="workspaceNavRef" />
      <WorkspacePreview ref="workspacePreviewRef" />
      <WorkspaceWork ref="workspaceWorkRef" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMessage } from 'naive-ui';
import { useI18n } from 'vue-i18n';

import VSkeleton from '@/components/Skeleton/index.vue';
import WorkspaceHeader from './components/Header.vue';
import WorkspaceNav from './components/Nav.vue';
import WorkspaceWork from './components/Work.vue';
import WorkspacePreview from './components/Preview.vue';
import { ProjectEnum } from '@/enums';
import { useAppStore } from '@/stores/modules/app';
import { useProjectStore } from '@/stores/modules/project';
import { useWorkspaceStore } from '@/stores/modules/workspace';
import {
  initIsIframeReady,
  initIsMobileReady,
  listenToIframeReady,
  listenToMobileReady,
  listenToSyncPath,
  syncThemeToChild
} from '@/utils/iframeSync';

import type { VNodeChild } from 'vue';

import type { Project } from '@/types';

defineOptions({
  name: 'Workspace'
});

const route = useRoute();

const router = useRouter();

const message = useMessage();

const { t } = useI18n();

const appStore = useAppStore();

const projectStore = useProjectStore();

const workspaceStore = useWorkspaceStore();

const isLegal = ref(false);

const skeletonState = ref(false);

const skeletonText = ref(t('load_vant_menu_failed')) as Ref<string | VNodeChild>;

const project = computed(
  () => projectStore.allProject.find((it) => it.id === route.params.id) as Project
);

provide('project', project);

const component = computed(() => workspaceStore.component);

provide('component', component);

const workspaceNavRef = ref<InstanceType<typeof WorkspaceNav> | null>(null);

const workspaceWorkRef = ref<InstanceType<typeof WorkspaceWork> | null>(null);

const workspacePreviewRef = ref<InstanceType<typeof WorkspacePreview> | null>(null);

let listenToIframeReadyFn: any;

let listenToMobileReadyFn: any;

let listenToSyncPathFn: any;

const onResetProjectFn = () => {
  workspaceWorkRef.value?.onResetProjectFn();
};

const initBaseMenu = async () => {
  try {
    skeletonState.value = true;
    await workspaceStore.initBaseMenu();
    skeletonState.value = false;
  } catch {
    // const vnode = h(
    //   'div',
    //   {
    //     class: 'flex'
    //   },
    //   [
    //     h('span', {}, t('load_vant_menu_failed') + t('period') + t('chinese_user_try')),
    //     h(
    //       NButton,
    //       {
    //         text: true,
    //         type: 'primary',
    //         tag: 'a',
    //         target: '_blank',
    //         href: 'https://aisen60.gitee.io/vant-theme'
    //       },
    //       h(
    //         'span',
    //         {
    //           style: {
    //             paddingLeft: 'var(--vt-size-1)'
    //           }
    //         },
    //         'https://aisen60.gitee.io/vant-theme'
    //       )
    //     )
    //   ]
    // );

    const vnode = h(
      'div',
      {
        class: 'flex'
      },
      [h('span', {}, t('load_vant_css_failed') + t('period'))]
    );

    skeletonText.value = vnode;

    message.create(() => vnode, {
      type: 'error',
      keepAliveOnHover: true,
      duration: 0,
      closable: true
    });

    return Promise.reject(t('load_vant_css_failed') + t('period'));
  }
};

const initChildTheme = () => {
  if (
    appStore.theme === 'dark' &&
    project.value.version === ProjectEnum.VERSION_4 &&
    project.value.dark === ProjectEnum.DISABLE_DARK_MODE
  ) {
    message.warning(t('workspace_switch_theme_tip_disable'));
    return;
  }

  if (appStore.theme === 'dark' && project.value.version !== ProjectEnum.VERSION_4) {
    message.warning(t('workspace_switch_theme_tip'));
    return;
  }
  syncThemeToChild(appStore.theme);
};

const init = async () => {
  if (
    route.params.version !== ProjectEnum.VERSION_2 &&
    route.params.version !== ProjectEnum.VERSION_3 &&
    route.params.version !== ProjectEnum.VERSION_4
  ) {
    message.error(t('project_info_error'), {
      onAfterLeave: () => {
        router.replace('/project');
      }
    });
    return;
  }

  if (!project.value) {
    message.error(t('project_not_exist'), {
      onAfterLeave: () => {
        router.replace('/project');
      }
    });
    return;
  }

  await initBaseMenu();

  isLegal.value = true;

  initIsIframeReady();

  initIsMobileReady();

  listenToIframeReadyFn = listenToIframeReady();

  listenToMobileReadyFn = listenToMobileReady();

  listenToSyncPathFn = listenToSyncPath();

  nextTick(() => {
    if (appStore.theme === 'dark') {
      initChildTheme();
    }
  });
};

init();

// watch(
//   () => appStore.locale,
//   () => {
//     workspaceWorkRef.value?.onSetCompLabel();
//   }
// );

// watch(
//   () => appStore.theme,
//   () => {
//     nextTick(() => {
//       workspaceWorkRef.value?.onSetCompVar();
//     });
//   }
// );

// watch(
//   () => route.params,
//   (params) => {
//     workspaceStore.setComponent(params.component as string);
//     workspaceNavRef.value?.onScrollToComponent();
//   },
//   {
//     deep: true,
//     immediate: true
//   }
// );

// watch(
//   () => component.value,
//   () => {
//     setTimeout(() => {
//       workspaceWorkRef.value?.onSetCompLabel();
//       workspaceWorkRef.value?.onSetCompVar();
//     }, 0);
//   },
//   {
//     immediate: true
//   }
// );

onUnmounted(() => {
  window.removeEventListener('message', listenToIframeReadyFn);
  window.removeEventListener('message', listenToMobileReadyFn);
  window.removeEventListener('message', listenToSyncPathFn);
});
</script>

<style lang="scss" scoped>
.workspace {
  --workspace-width: 100vw;
  --workspace-min-width: 1024px;
  --workspace-header-width: var(--workspace-min-width);
  --workspace-header-height: 58px;
  --workspace-nav-width: 230px;
  --workspace-preview-width: 375px;
  --workspace-preview-height: 667px;

  width: var(--workspace-width);
  min-width: var(--workspace-min-width);
  height: 100vh;
  background-color: #efefef;
  overflow: hidden;

  .workspace-skeleton {
  }

  .workspace-content {
  }
}

:root[theme='dark'] {
  .workspace {
    background-color: #000000;
  }
}
</style>
