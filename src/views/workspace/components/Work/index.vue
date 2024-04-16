<template>
  <div class="flex flex-col flex-1 workspace-work">
    <div class="flex items-center justify-between workspace-work-header">
      {{ compLabel }}
      <n-tooltip v-if="theme.version === ThemeEnum.VERSION_2">
        <template #trigger>
          <n-button type="info" :loading="compileLoading" @click="onCompileLess">
            {{ t('workspace_build_component_var') }}
          </n-button>
        </template>
        {{ t('workspace_build_component_var_tip') }}
      </n-tooltip>
    </div>
    <div class="flex-1 overflow-y-auto workspace-work-container">
      <VSkeleton
        v-if="skeletonState"
        class="w-full pt-5 pl-5 pr-5 mx-auto max-w-7xl theme-skeleton"
        :text="skeletonText"
      />

      <div v-else class="workspace-work-wrapper">
        <div class="class=item-component" v-for="(obj, key) in cssVars" :key="key">
          <InputItem
            v-if="obj.type === '0'"
            :label="key"
            :default-value="obj.value"
            :is-var="obj.isVar"
            :var-label="obj.varLabel"
            @change="onVarChange"
          />
          <ColorItem
            v-if="obj.type === '1'"
            :label="key"
            :default-value="obj.value"
            :is-var="obj.isVar"
            :var-label="obj.varLabel"
            @change="onVarChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMessage } from 'naive-ui';
import { useI18n } from 'vue-i18n';
import { useAppStore } from '@/stores/modules/app';
import { useThemeStore } from '@/stores/modules/theme';
import VSkeleton from '@/components/Skeleton/index.vue';
import ColorItem from '../ColorItem/index.vue';
import InputItem from '../InputItem/index.vue';

import { ThemeEnum } from '@/enums';
import { findCompLabel } from '@/utils/findCompLabel';
import { getVersionDV, getAllCV, getIdCV, setIdCV, generateVariable } from '@/utils/css';
import {
  listenToSyncGetVar,
  syncGetVarToChild,
  syncSetVarToChild,
  syncSetVarV2ToChild
} from '@/utils/iframeSync';
import { getTimeStamp } from '@/utils/time';

import type { Ref } from 'vue';
import type { MessageReactive } from 'naive-ui';

import type { Theme, ThemeVarObject, ComponentVarConfig, ComponentVarType } from '@/types';

defineOptions({
  name: 'WorkspaceWork'
});

const theme = inject('theme') as Ref<Theme>;

const component = inject('component') as Ref<string>;

const message = useMessage();

const { t } = useI18n();

const appStore = useAppStore();

const themeStore = useThemeStore();

let msgReactive: MessageReactive | null = null;

const skeletonState = ref(false);

const skeletonText = ref(t('workspace_loading_component_var'));

// 组件标题
const compLabel = ref('');

// 组件变量列表
const cssVars = ref<ComponentVarConfig>();

// 编译状态
const compileLoading = ref(false);

/**
 * 设置组件标题
 */
const setCompLabel = () => {
  const label = findCompLabel(theme.value, component.value);
  compLabel.value = label || '';
};

/**
 * 设置 组件变量 列表
 */
const setCompVar = () => {
  // skeletonState.value = true;

  // 所有组件 默认 样式变量
  const versionDV = getVersionDV(theme.value.version);

  // 当前组件 默认 样式变量
  const currentCompDV = versionDV[component.value];

  // 当前主题 自定义 样式变量
  const currentThemeCV = getIdCV(
    theme.value.id,
    theme.value.version === ThemeEnum.VERSION_4 ? appStore.theme : 'light'
  );

  // 当前组件 默认 样式变量 和 当前主题 自定义 样式变量 的交集
  const componentVar: ThemeVarObject = {};

  for (const [key] of Object.entries(currentCompDV)) {
    const value = currentThemeCV[key] || currentCompDV[key];
    componentVar[key] = value;
  }

  syncGetVarToChild(componentVar);
};

/**
 * 设置 移动端 组件变量样式
 */
const setMobileVar = () => {
  const config = getAllCV()[theme.value.id];
  syncSetVarToChild(config);
};

/**
 * 自定义变量回调
 * @param key 变量值
 * @param value 变量名
 */
const onVarChange = (key: string, value: string) => {
  const newTheme = { ...theme.value };
  newTheme.updated_at = String(getTimeStamp());
  themeStore.updateTheme(newTheme);

  const newVarConfig = getIdCV(
    newTheme.id,
    theme.value.version === ThemeEnum.VERSION_4 ? appStore.theme : 'light'
  );
  setIdCV(newTheme.id, theme.value.version === ThemeEnum.VERSION_4 ? appStore.theme : 'light', {
    ...newVarConfig,
    [key]: value
  });

  setMobileVar();

  setCompVar();
};

/**
 * 重置主题回调
 */
const onResetThemeCb = () => {
  setMobileVar();

  setCompVar();
};

/**
 * 编译 less 变量
 */
const onCompileLess = () => {
  msgReactive = message.create(t('workspace_build_component_var_loading'), {
    type: 'loading',
    duration: 0
  });

  const config = getIdCV(theme.value.id, 'light');

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify(config);

  compileLoading.value = true;

  const requestOptions: RequestInit = {
    method: 'POST',
    headers,
    body,
    redirect: 'follow'
  };

  fetch('https://vant-theme-service.vercel.app/api/update-theme', requestOptions)
    .then(async (response) => response.text())
    .then((result) => {
      if (msgReactive) {
        msgReactive.type = 'success';
        msgReactive.content = t('workspace_build_component_var_success');
        setTimeout(() => {
          msgReactive?.destroy();
          msgReactive = null;
        }, 1000);
      }
      syncSetVarV2ToChild(result);
    })
    .catch((error) => {
      if (msgReactive) {
        msgReactive.type = 'error';
        msgReactive.content = t('workspace_build_component_var_failed');
        setTimeout(() => {
          msgReactive?.destroy();
          msgReactive = null;
        }, 3000);
      }
      return Promise.reject(error);
    })
    .finally(() => {
      compileLoading.value = false;
    });
};

/**
 *  监听 子窗口 发起的 同步 组件变量 请求
 */
const listenToSyncGetVarFn = listenToSyncGetVar((vars: Record<string, ComponentVarType>) => {
  const config = generateVariable(vars);

  cssVars.value = config;

  console.log(config);

  skeletonState.value = false;
});

const init = () => {
  nextTick(() => {
    setMobileVar();

    if (theme.value.version === ThemeEnum.VERSION_2) {
      onCompileLess();
    }
  });
};

init();

onUnmounted(() => {
  window.removeEventListener('message', listenToSyncGetVarFn);
});

watch(
  () => appStore.locale,
  () => {
    setCompLabel();
  }
);

watch(
  () => appStore.theme,
  () => {
    nextTick(() => {
      setCompVar();
    });
  }
);

watch(
  () => component.value,
  () => {
    setCompLabel();
    nextTick(() => {
      setCompVar();
    });
  },
  {
    immediate: true
  }
);

defineExpose({
  onResetThemeCb
});
</script>

<style lang="scss" scoped>
.workspace-work {
  margin: var(--vt-size-5);
  background-color: var(--vt-color-bg-1);
  border-radius: var(--vt-border-radius-10);

  .workspace-work-header {
    padding: var(--vt-size-5);
    font-size: var(--vt-font-size-6);
    border-bottom: 1px solid var(--vt-color-border-1);
  }

  .workspace-work-container {
    .workspace-work-wrapper {
      padding: var(--vt-size-4) var(--vt-size-5);

      .item-component {
      }
    }
  }
}

:root[theme='dark'] {
  .workspace-work {
    background-color: var(--vt-color-bg-2);
  }
}
</style>
