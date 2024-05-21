<template>
  <n-popselect
    v-model:value="selectValue"
    :options="selectOptions"
    :render-label="selectRenderLabel"
    @update:value="onSwitchTheme"
    trigger="click"
  >
    <n-button
      v-if="props.type === 'icon'"
      quaternary
      :focusable="false"
      style="--n-height: 30px; --n-padding: 0 6px; --n-color-hover: var(--vt-color-fill-3)"
    >
      <template #icon>
        <n-icon size="var(--vt-font-size-5)" class="cursor-pointer">
          <ThemeIcon />
        </n-icon>
      </template>
    </n-button>

    <n-button v-if="props.type === 'button'" secondary>
      <template #icon>
        <n-icon>
          <ThemeIcon />
        </n-icon>
      </template>
      {{ themeText }}
    </n-button>
  </n-popselect>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { NIcon } from 'naive-ui';
import { Sunny, Moon, DesktopOutline } from '@vicons/ionicons5';
import { useAppStore } from '@/stores/modules/app';

import type { VNodeChild } from 'vue';
import type { SelectOption } from 'naive-ui';

defineOptions({
  name: 'SwitchTheme'
});

export type SwitchThemeProps = {
  type: 'icon' | 'button';
};

export type SwitchThemeEmits = {
  (e: 'switch'): void;
};

const props = withDefaults(defineProps<SwitchThemeProps>(), {
  type: 'icon'
});

const emits = defineEmits<SwitchThemeEmits>();

const { t } = useI18n();

const appStore = useAppStore();

// 选择的值
const selectValue = ref(appStore.storageColor);

// 选项内容
const selectOptions = computed(() => [
  { label: t('light_mode'), value: 'light', icon: Sunny },
  { label: t('dark_mode'), value: 'dark', icon: Moon },
  { label: t('auto_mode'), value: 'auto', icon: DesktopOutline }
]);

/**
 * 选项标签渲染函数
 */
const selectRenderLabel = (
  option: SelectOption & {
    icon: any;
  }
): VNodeChild => {
  return [
    h(
      NIcon,
      {
        style: {
          verticalAlign: '-0.15em',
          marginRight: '10px'
        }
      },
      {
        default: () => h(option.icon)
      }
    ),
    option.label as string
  ];
};

// 主题 icon
const ThemeIcon = computed(() => {
  const option = selectOptions.value.find((it) => it.value === appStore.theme);
  return option?.icon;
});

// 主题文本
const themeText = computed(() => {
  const option = selectOptions.value.find((it) => it.value === appStore.theme);
  return option?.label;
});

/**
 * 切换主题的回调
 */
const onSwitchTheme = () => {
  appStore.setTheme(selectValue.value);
  emits('switch');
};
</script>
