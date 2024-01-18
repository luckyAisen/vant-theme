import { defineStore } from 'pinia';
import { useStorage, usePreferredDark } from '@vueuse/core';
import { darkTheme } from 'naive-ui';
import { themeEnum } from '@/enums';
import { store } from '@/stores';

import type { Theme } from '@/types';

// import type { ThemeCommonVars, GlobalThemeOverrides } from 'naive-ui';

export const useThemeStore = defineStore('themeStore', () => {
  const systemDark = ref(usePreferredDark());

  const theme = ref<Theme>(
    useStorage(themeEnum.APP_THEME, systemDark.value ? 'dark' : 'light') as unknown as Theme
  );

  const naiveTheme = computed(() => (theme.value === 'dark' ? darkTheme : null));

  const naiveThemeOverrides = computed(() => {
    const common = {
      fontFamily: 'var(--vt-font-family)',

      primaryColor: 'var(--vt-color-primary-6)',
      primaryColorHover: 'var(--vt-color-primary-5)',
      primaryColorPressed: 'var(--vt-color-primary-7)',
      primaryColorSuppl: 'var(--vt-color-primary-5)',

      infoColor: 'var(--vt-color-primary-6)',
      infoColorHover: 'var(--vt-color-primary-5)',
      infoColorPressed: 'var(--vt-color-primary-7)',
      infoColorSuppl: 'var(--vt-color-primary-5)',

      successColor: 'var(--vt-color-success-6)',
      successColorHover: 'var(--vt-color-success-5)',
      successColorPressed: 'var(--vt-color-success-7)',
      successColorSuppl: 'var(--vt-color-success-5)',

      warningColor: 'var(--vt-color-warning-6)',
      warningColorHover: 'var(--vt-color-warning-5)',
      warningColorPressed: 'var(--vt-color-warning-7)',
      warningColorSuppl: 'var(--vt-color-warning-5)',

      errorColor: 'var(--vt-color-danger-6)',
      errorColorHover: 'var(--vt-color-danger-5)',
      errorColorPressed: 'var(--vt-color-danger-7)',
      errorColorSuppl: 'var(--vt-color-danger-5)'
    };

    if (theme.value === 'dark') {
      return {
        common
      };
    }

    return {
      common
    };
  });

  const setTheme = (t: Theme) => {
    theme.value = t;
  };

  watch(
    () => theme.value,
    (val) => {
      document.documentElement.setAttribute('theme', val);
    },
    {
      immediate: true
    }
  );

  return {
    systemDark,
    theme,
    naiveTheme,
    naiveThemeOverrides,

    setTheme
  };
});

export function useThemeStoreWithOut() {
  return useThemeStore(store);
}
