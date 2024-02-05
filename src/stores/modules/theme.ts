import { defineStore } from 'pinia';
import { useStorage, usePreferredDark } from '@vueuse/core';
import { darkTheme } from 'naive-ui';
import { AppThemeEnum } from '@/enums';
import { store } from '@/stores';
import { getCssVariable } from '@/utils/getCssVariable';

import type { AppTheme } from '@/types';

export const useThemeStore = defineStore('themeStore', () => {
  const systemDark = ref(usePreferredDark());

  const theme = ref<AppTheme>(
    useStorage(AppThemeEnum.APP_THEME, systemDark.value ? 'dark' : 'light') as unknown as AppTheme
  );

  const naiveTheme = computed(() => (theme.value === 'dark' ? darkTheme : null));

  const naiveThemeOverrides = computed(() => {
    const common: Record<string, string> = {
      fontFamily: '--vt-font-family',

      primaryColor: '--vt-color-primary-6',
      primaryColorHover: '--vt-color-primary-5',
      primaryColorPressed: '--vt-color-primary-7',
      primaryColorSuppl: '--vt-color-primary-5',

      infoColor: '--vt-color-primary-6',
      infoColorHover: '--vt-color-primary-5',
      infoColorPressed: '--vt-color-primary-7',
      infoColorSuppl: '--vt-color-primary-5',

      successColor: '--vt-color-success-6',
      successColorHover: '--vt-color-success-5',
      successColorPressed: '--vt-color-success-7',
      successColorSuppl: '--vt-color-success-5',

      warningColor: '--vt-color-warning-6',
      warningColorHover: '--vt-color-warning-5',
      warningColorPressed: '--vt-color-warning-7',
      warningColorSuppl: '--vt-color-warning-5',

      errorColor: '--vt-color-danger-6',
      errorColorHover: '--vt-color-danger-5',
      errorColorPressed: '--vt-color-danger-7',
      errorColorSuppl: '--vt-color-danger-5'
    };

    Object.keys(common).map((k) => {
      common[k] = getCssVariable(common[k]);
    });

    if (theme.value === 'dark') {
      return {
        common
      };
    }

    return {
      common
    };
  });

  const setTheme = (t: AppTheme) => {
    theme.value = t;
  };

  const watchTheme = () => {
    watch(
      () => theme.value,
      (val) => {
        document.documentElement.setAttribute('theme', val);
      },
      {
        immediate: true
      }
    );
  };

  return {
    systemDark,
    theme,
    naiveTheme,
    naiveThemeOverrides,

    setTheme,
    watchTheme
  };
});

export function useThemeStoreWithOut() {
  return useThemeStore(store);
}
