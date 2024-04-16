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

      <h1 class="workspace-header-title-name">{{ theme?.name }}</h1>
    </div>
    <div class="flex items-center workspace-header-operation">
      <SwitchLocale @switch="onSwitchLocale" />
      <SwitchTheme @switch="onSwitchTheme" />
      <n-button type="primary" :loading="downloadLoading" @click="onDownload">
        {{ $t('download_theme') }}
      </n-button>
      <n-button type="error" @click="onResetTheme"> {{ $t('reset_theme') }} </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMessage, useDialog } from 'naive-ui';
import { useI18n } from 'vue-i18n';
import { ChevronBackOutline } from '@vicons/ionicons5';

import { useThemeStore } from '@/stores/modules/theme';
import SwitchLocale from '../SwitchLocale/index.vue';
import SwitchTheme from '../SwitchTheme/index.vue';
import { ThemeEnum } from '@/enums';
import { syncLocaleToChild, syncThemeToChild } from '@/utils/iframeSync';
import { download } from '@/utils/download';

import type { Ref } from 'vue';
import type { AppLocale, AppTheme, Theme } from '@/types';

type WorkspaceHeaderEmits = {
  resetCb: [];
};

defineOptions({
  name: 'WorkspaceHeader'
});

const emits = defineEmits<WorkspaceHeaderEmits>();

const theme = inject('theme') as Ref<Theme>;

const router = useRouter();

const message = useMessage();

const dialog = useDialog();

const { t } = useI18n();

const themeStore = useThemeStore();

const downloadLoading = ref(false);

/**
 * 返回到 主题列表 页面
 */
const onBack = () => {
  router.push('/theme');
};

/**
 * 切换系统语言
 * @param appLocale 系统语言
 */
const onSwitchLocale = (appLocale: AppLocale) => {
  syncLocaleToChild(appLocale, theme.value);
};

/**
 * 切换系统主题
 * @param appTheme 系统主题
 */
const onSwitchTheme = (appTheme: AppTheme) => {
  if (appTheme === 'dark' && theme.value.version !== ThemeEnum.VERSION_4) {
    message.warning(t('workspace_switch_theme_tip'));
    return;
  }
  syncThemeToChild(appTheme);
};

/**
 * 重置主题
 */
const onResetTheme = () => {
  dialog.error({
    title: t('reset_tips'),
    showIcon: false,
    content: t('confirm_reset'),
    positiveText: t('confirm_text'),
    negativeText: t('cancel_text'),
    maskClosable: false,
    onPositiveClick: () => {
      themeStore.resetTheme(theme.value);
      message.success(t('success_reset'));
      emits('resetCb');
    },
    onNegativeClick: () => {}
  });
};

/**
 * 下载主题
 */
const onDownload = () => {
  downloadLoading.value = true;
  download(theme.value)
    .then(() => {
      message.success(t('success_download'));
    })
    .catch(() => {})
    .finally(() => {
      downloadLoading.value = false;
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
    .n-button {
      margin-left: var(--vt-size-3);
    }
  }
}
</style>
