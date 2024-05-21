<template>
  <div class="flex justify-between workspace-header">
    <div class="flex items-center workspace-header-title">
      <n-button
        quaternary
        :focusable="false"
        style="--n-height: 30px; --n-padding: 0 6px; --n-color-hover: var(--vt-color-fill-3)"
        @click="onBack"
      >
        <template #icon>
          <n-icon
            color="var(--vt-color-text-1)"
            size="var(--vt-font-size-5)"
            class="cursor-pointer"
          >
            <ChevronBackOutline />
          </n-icon>
        </template>
      </n-button>

      <h1 class="workspace-header-title-name">{{ project?.name }}</h1>
    </div>
    <div class="flex items-center workspace-header-operation">
      <SwitchLocale type="button" @switch="onSwitchLocale" />
      <SwitchTheme type="button" @switch="onSwitchTheme" />
      <n-button type="primary" :loading="downloadLoading" @click="onExportProject">
        {{ $t('export_project') }}
      </n-button>
      <n-button type="error" @click="onResetProject"> {{ $t('reset_project') }} </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMessage, useDialog } from 'naive-ui';
import { useI18n } from 'vue-i18n';
import { ChevronBackOutline } from '@vicons/ionicons5';

import { useAppStore } from '@/stores/modules/app';
import { useProjectStore } from '@/stores/modules/project';
import SwitchLocale from '@/components/SwitchLocale/index.vue';
import SwitchTheme from '@/components/SwitchTheme/index.vue';
import { ProjectEnum } from '@/enums';
import { syncLocaleToChild, syncThemeToChild } from '@/utils/iframeSync';

import type { Ref } from 'vue';
import type { Project } from '@/types';

type WorkspaceHeaderEmits = {
  resetProjectFn: [];
};

defineOptions({
  name: 'WorkspaceHeader'
});

const emits = defineEmits<WorkspaceHeaderEmits>();

const router = useRouter();

const message = useMessage();

const dialog = useDialog();

const { t } = useI18n();

const appStore = useAppStore();

const projectStore = useProjectStore();

// 项目信息
const project = inject('project') as Ref<Project>;

const downloadLoading = ref(false);

/**
 * 返回到 项目列表 页面
 */
const onBack = () => {
  router.push('/project');
};

/**
 * 切换系统语言
 */
const onSwitchLocale = () => {
  syncLocaleToChild(appStore.locale, project.value);
};

/**
 * 切换系统主题
 */
const onSwitchTheme = () => {
  if (appStore.theme === 'dark' && project.value.version !== ProjectEnum.VERSION_4) {
    message.warning(t('workspace_switch_theme_tip'));
    return;
  }
  syncThemeToChild(appStore.theme);
};

/**
 * 导出项目
 */
const onExportProject = () => {
  downloadLoading.value = true;
  projectStore
    .exportProject(project.value)
    .then(() => {
      message.success(t('success_export'));
    })
    .catch(() => {})
    .finally(() => {
      downloadLoading.value = false;
    });
};

/**
 * 重置项目
 */
const onResetProject = () => {
  dialog.error({
    title: t('reset_tips'),
    showIcon: false,
    content: t('confirm_reset'),
    positiveText: t('confirm_text'),
    negativeText: t('cancel_text'),
    maskClosable: false,
    onPositiveClick: () => {
      projectStore.resetProject(project.value);
      message.success(t('success_reset'));
      emits('resetProjectFn');
    },
    onNegativeClick: () => {}
  });
};
</script>

<style lang="scss" scoped>
.workspace-header {
  width: 100%;
  height: var(--workspace-header-height);
  min-height: var(--workspace-header-height);
  max-height: var(--workspace-header-height);
  background-color: var(--vt-color-bg-1);
  border-bottom: 1px solid var(--vt-color-border-1);
  padding: var(--vt-size-3) var(--vt-size-5);

  .workspace-header-title {
    font-size: var(--vt-font-size-5);
    font-weight: var(--vt-font-weight-1);
    color: var(--vt-color-text-1);

    .workspace-header-title-name {
      padding-left: var(--vt-size-3);
      padding-top: 2px;
      margin-top: -1px;
    }
  }

  .workspace-header-operation {
    .n-button,
    :deep(.n-button) {
      margin-left: var(--vt-size-3);
    }
  }
}
</style>
