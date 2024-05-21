import { defineStore } from 'pinia';
import { useStorage, useColorMode } from '@vueuse/core';
import { zhCN, dateZhCN, darkTheme } from 'naive-ui';
import { useI18n } from 'vue-i18n';
import { AppEnum } from '@/enums';
import { store } from '@/stores';
import i18n from '@/locales';
import { getCssVariable } from '@/utils/css';
import pkg from '../../../package.json';

import type { RemovableRef } from '@vueuse/core';
import type { NLocale, NDateLocale } from 'naive-ui';
import type { AppLocale, AppTheme } from '@/types';

export const useAppStore = defineStore('appStore', () => {
  const { t } = useI18n();

  const version = useStorage(AppEnum.APP_VERSION, pkg.version);

  const locale = useStorage(
    AppEnum.APP_LOCALE,
    i18n.global.locale.value
  ) as RemovableRef<AppLocale>;

  const naiveLocale = computed<NLocale | null>(() => (locale.value === 'zh-CN' ? zhCN : null));

  const naiveDateLocale = computed<NDateLocale | null>(() =>
    locale.value === 'zh-CN' ? dateZhCN : null
  );

  const setLocale = (appLocale: AppLocale) => {
    locale.value = appLocale;
    i18n.global.locale.value = appLocale;
  };

  const watchLocale = () => {
    watch(
      () => locale.value,
      () => {
        document.title = 'Vant Theme' + ' - ' + t('home_describe_1');
      },
      {
        immediate: true
      }
    );
  };

  const { system: systemColor, store: storeColor } = useColorMode();

  const storageColor = useStorage<AppTheme>(AppEnum.APP_THEME, storeColor.value);

  const theme = computed(() => {
    return storageColor.value == 'auto' ? systemColor.value : storageColor.value;
  });

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

  const setTheme = (appTheme: AppTheme) => {
    storageColor.value = appTheme;
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
    setLocale,
    watchLocale,

    systemColor,
    storageColor,
    theme,
    naiveTheme,
    naiveThemeOverrides,
    setTheme,
    watchTheme
  };
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
