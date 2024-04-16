<template>
  <div v-if="isLegal" class="flex flex-col workspace">
    <WorkspaceHeader :theme="theme" @reset-cb="onResetThemeCb" />

    <VSkeleton
      v-if="skeletonState"
      class="w-full pt-20 pl-5 pr-5 mx-auto max-w-7xl workspace-skeleton"
      :text="skeletonText"
    />

    <div v-else class="flex flex-1 overflow-hidden workspace-content">
      <WorkspaceNav />
      <WorkspaceWork ref="workspaceWorkRef" />
      <WorkspacePreview />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMessage, NButton } from 'naive-ui';
import { useI18n } from 'vue-i18n';

import VSkeleton from '@/components/Skeleton/index.vue';
import WorkspaceHeader from './components/Header/index.vue';
import WorkspaceNav from './components/Nav/index.vue';
import WorkspaceWork from './components/Work/index.vue';
import WorkspacePreview from './components/Preview/index.vue';
import { ThemeEnum, WorkspaceEnum } from '@/enums';
import { useAppStore } from '@/stores/modules/app';
import { useThemeStore } from '@/stores/modules/theme';
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

import type { AppTheme, Theme } from '@/types';

defineOptions({
  name: 'Workspace'
});

const route = useRoute();

const router = useRouter();

const message = useMessage();

const { t } = useI18n();

const appStore = useAppStore();

const themeStore = useThemeStore();

const workspaceStore = useWorkspaceStore();

const isLegal = ref(false);

const skeletonState = ref(false);

const skeletonText = ref(t('load_vant_menu_failed')) as Ref<string | VNodeChild>;

const theme = computed(() => themeStore.allThemes.find((it) => it.id === route.params.id) as Theme);

const component = ref<string>(WorkspaceEnum.WORKSPACE_BASIC);

provide('theme', theme);

provide('component', component);

const workspaceWorkRef = ref();

const onSwitchTheme = (appTheme: AppTheme) => {
  if (appTheme === 'dark' && theme.value.version !== ThemeEnum.VERSION_4) {
    message.warning(t('workspace_switch_theme_tip'));
    return;
  }
  syncThemeToChild(appTheme);
};

const onResetThemeCb = () => {
  workspaceWorkRef.value.onResetThemeCb();
};

const initBaseMenu = async () => {
  try {
    skeletonState.value = true;
    await workspaceStore.initBaseMenu();
    skeletonState.value = false;
  } catch {
    const vnode = h(
      'div',
      {
        class: 'flex'
      },
      [
        h('span', {}, t('load_vant_menu_failed') + t('period') + t('chinese_user_try')),
        h(
          NButton,
          {
            text: true,
            type: 'primary',
            tag: 'a',
            target: '_blank',
            href: 'https://aisen60.gitee.io/vant-theme'
          },
          h(
            'span',
            {
              style: {
                paddingLeft: 'var(--vt-size-1)'
              }
            },
            'https://aisen60.gitee.io/vant-theme'
          )
        )
      ]
    );

    skeletonText.value = vnode;

    for (let i = 0; i < 2; i++) {
      message.create(() => vnode, {
        type: 'error',
        keepAliveOnHover: true,
        duration: 0,
        closable: true
      });
    }
  }
};

const init = async () => {
  if (
    route.params.version !== ThemeEnum.VERSION_2 &&
    route.params.version !== ThemeEnum.VERSION_3 &&
    route.params.version !== ThemeEnum.VERSION_4
  ) {
    message.error(t('theme_info_error'), {
      onAfterLeave: () => {
        router.replace('/theme');
      }
    });
    return;
  }

  if (!theme.value) {
    message.error(t('theme_not_exist'), {
      onAfterLeave: () => {
        router.replace('/theme');
      }
    });
    return;
  }

  await initBaseMenu();

  isLegal.value = true;

  initIsIframeReady();

  initIsMobileReady();

  listenToIframeReady();

  listenToMobileReady();

  listenToSyncPath();

  nextTick(() => {
    if (appStore.theme === 'dark') {
      onSwitchTheme(appStore.theme);
    }
  });
};

init();
</script>

<style lang="scss" scoped>
.workspace {
  --workspace-header-height: 58px;
  --workspace-nav-width: 230px;
  --workspace-preview-width: 375px;
  --workspace-preview-height: 667px;

  width: 100vw;
  min-width: 1280px;
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
