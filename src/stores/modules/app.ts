import { defineStore } from 'pinia';
import { useStorage, usePreferredDark } from '@vueuse/core';
import { zhCN, dateZhCN, darkTheme } from 'naive-ui';
import { AppLocaleEnum } from '@/enums';
import { store } from '@/stores';
import i18n from '@/locales';
import { getCssVariable } from '@/utils/getCssVariable';
import pkg from '../../../package.json';

import type { NLocale, NDateLocale } from 'naive-ui';
import type { AppLocale, AppTheme } from '@/types';

export const useAppStore = defineStore('appStore', () => {
  const version = ref('');

  const locale = ref(useStorage(AppLocaleEnum.APP_LOCALE, i18n.global.locale.value));

  const naiveLocale = computed<NLocale | null>(() => (locale.value === 'zh-CN' ? zhCN : null));

  const naiveDateLocale = computed<NDateLocale | null>(() =>
    locale.value === 'zh-CN' ? dateZhCN : null
  );

  const systemDark = ref(usePreferredDark());

  const theme = ref<AppTheme>(
    useStorage(AppLocaleEnum.APP_THEME, systemDark.value ? 'dark' : 'light') as unknown as AppTheme
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

  const setVersion = () => {
    version.value = useStorage(AppLocaleEnum.APP_VERSION, pkg.version).value;
  };

  const setLocale = (lang: AppLocale) => {
    locale.value = lang;
    i18n.global.locale.value = lang;
  };

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
    version,

    locale,
    naiveLocale,
    naiveDateLocale,

    systemDark,
    theme,
    naiveTheme,
    naiveThemeOverrides,

    setVersion,

    setLocale,

    setTheme,
    watchTheme
  };
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
