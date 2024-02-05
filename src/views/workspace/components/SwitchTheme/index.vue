<template>
  <n-button size="medium" secondary @click="onSwitchTheme">
    <template #icon>
      <n-icon>
        <btnIcon />
      </n-icon>
    </template>
    {{ btnText }}
  </n-button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Moon, Sunny } from '@vicons/ionicons5';
import { useThemeStore } from '@/stores/modules/theme';

import type { SwitchThemeEmits } from './type';

defineOptions({
  name: 'SwitchTheme'
});

const emits = defineEmits<SwitchThemeEmits>();

const { t } = useI18n();

const themeStore = useThemeStore();

const theme = computed(() => themeStore.theme);

const btnIcon = computed(() => (theme.value === 'dark' ? Moon : Sunny));

const btnText = computed(() =>
  theme.value === 'dark' ? t('switch_light_mode') : t('switch_dark_mode')
);

const onSwitchTheme = () => {
  const nextTheme = theme.value === 'dark' ? 'light' : 'dark';
  themeStore.setTheme(nextTheme);
  emits('switch', nextTheme);
};
</script>
