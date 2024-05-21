<template>
  <div class="flex flex-col flex-1 workspace-work">
    <div class="flex items-center justify-between workspace-work-header">
      {{ compLabel }}
      <n-tooltip v-if="project.version === ProjectEnum.VERSION_2">
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
        class="w-full pt-5 pl-5 pr-5 mx-auto max-w-7xl"
        :text="skeletonText"
      />

      <div v-else class="workspace-work-wrapper">
        <template v-if="cssVars && Object.keys(cssVars).length">
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
        </template>

        <div v-else class="flex items-center justify-center flex-col workspace-no-css-var">
          <img class="w-[300px]" src="../../../assets/img/no-css-var.png" draggable="false" />
          <p class="text-lg text-[var(--vt-color-text-2)]">
            {{ $t('workspace_component_no_var') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMessage } from 'naive-ui';
import { useI18n } from 'vue-i18n';
import { useAppStore } from '@/stores/modules/app';
import { useProjectStore } from '@/stores/modules/project';
import { useWorkspaceStore } from '@/stores/modules/workspace';
import VSkeleton from '@/components/Skeleton/index.vue';
import ColorItem from './ColorItem.vue';
import InputItem from './InputItem.vue';

import { ProjectEnum, WorkspaceEnum } from '@/enums';
import { findCompLabel } from '@/utils/findCompLabel';
import { getVersionDV, getAllCV, getIdCV, setIdCV, generateVariable } from '@/utils/css';
import {
  listenToSyncGetVar,
  syncPathToChild,
  syncGetVarToChild,
  syncSetVarToChild,
  syncSetVarV2ToChild
} from '@/utils/iframeSync';
import { getTimeStamp } from '@/utils/time';

import type { Ref } from 'vue';
import type { MessageReactive } from 'naive-ui';

import type { Project, ProjectVarObject, ComponentVarConfig, WComponentVarType } from '@/types';

defineOptions({
  name: 'WorkspaceWork'
});

const message = useMessage();

const { t } = useI18n();

const appStore = useAppStore();

const projectStore = useProjectStore();

const workspaceStore = useWorkspaceStore();

// 项目信息
const project = inject('project') as Ref<Project>;

// 组件标识
const component = computed(() => workspaceStore.component);

// 骨架屏状态
const skeletonState = ref(false);

// 骨架屏文案
const skeletonText = ref(t('workspace_loading_component_var'));

let msgReactive: MessageReactive | null = null;

// 组件标题
const compLabel = ref('');

// 组件变量列表
const cssVars = ref<ComponentVarConfig>();

// 编译状态
const compileLoading = ref(false);

/**
 * 设置组件标题
 */
const onSetCompLabel = () => {
  const label = findCompLabel(project.value, component.value);
  compLabel.value = label || '';
};

/**
 * 设置 组件变量 列表
 */
const onSetCompVar = () => {
  // skeletonState.value = true;

  // 所有版本 默认 样式变量
  const versionDV = getVersionDV(project.value.version);

  // 当前组件 默认 样式变量
  const currentCompDV = versionDV[component.value];

  // 当前主题 自定义 样式变量
  const currentThemeCV = getIdCV(
    project.value.id,
    project.value.version === ProjectEnum.VERSION_4 ? appStore.theme : 'light'
  );

  // 当前组件 默认 样式变量 和 当前主题 自定义 样式变量 的交集
  const componentVar: ProjectVarObject = {};

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
  const config = getAllCV()[project.value.id];
  syncSetVarToChild(config);
};

/**
 * 自定义变量回调
 * @param key 变量值
 * @param value 变量名
 */
const onVarChange = (key: string, value: string) => {
  const newTheme = { ...project.value };
  newTheme.updateTime = String(getTimeStamp());
  projectStore.updateProject(newTheme);

  const newVarConfig = getIdCV(
    newTheme.id,
    project.value.version === ProjectEnum.VERSION_4 ? appStore.theme : 'light'
  );
  setIdCV(newTheme.id, project.value.version === ProjectEnum.VERSION_4 ? appStore.theme : 'light', {
    ...newVarConfig,
    [key]: value
  });

  setMobileVar();

  onSetCompVar();
};

/**
 * 重置主题回调
 */
const onResetProjectFn = () => {
  setMobileVar();

  onSetCompVar();

  if (project.value.version === ProjectEnum.VERSION_2) {
    onCompileLess();
  }
};

/**
 * 编译 less 变量
 */
const onCompileLess = () => {
  msgReactive = message.create(t('workspace_build_component_var_loading'), {
    type: 'loading',
    duration: 0
  });

  const config = getIdCV(project.value.id, 'light');

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
const listenToSyncGetVarFn = listenToSyncGetVar((vars: Record<string, WComponentVarType>) => {
  const config = generateVariable(vars);

  cssVars.value = config;

  skeletonState.value = false;
});

const init = () => {
  nextTick(() => {
    setMobileVar();

    if (project.value.version === ProjectEnum.VERSION_2) {
      onCompileLess();
    }
  });
};

init();

watch(
  () => appStore.locale,
  () => {
    onSetCompLabel();
    let path = '/' + appStore.locale;
    if (component.value !== WorkspaceEnum.WORKSPACE_BASIC) {
      path += '/' + component.value;
    }
    syncPathToChild(path);
  }
);

watch(
  () => appStore.theme,
  () => {
    nextTick(() => {
      onSetCompVar();
    });
  }
);

watch(
  () => component.value,
  () => {
    onSetCompLabel();
    nextTick(() => {
      onSetCompVar();
    });
  },
  {
    immediate: true
  }
);

onUnmounted(() => {
  window.removeEventListener('message', listenToSyncGetVarFn);
});

defineExpose({
  onSetCompLabel,
  onSetCompVar,
  onResetProjectFn
});
</script>

<style lang="scss" scoped>
.workspace-work {
  margin: var(--vt-size-5) var(--vt-size-5) var(--vt-size-5) 0px;
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
