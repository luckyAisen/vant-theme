import { defineStore } from 'pinia';
import { zhCN, dateZhCN } from 'naive-ui';
import { useStorage } from '@vueuse/core';
import { AppLocaleEnum } from '@/enums';
import { store } from '@/stores';
import i18n from '@/locales';

import type { AppLocale } from '@/types';
import type { NLocale, NDateLocale } from 'naive-ui';

export const useLocaleStore = defineStore('localeStore', () => {
  const locale = ref(useStorage(AppLocaleEnum.APP_LOCALE, i18n.global.locale.value));

  const naiveLocale = computed<NLocale | null>(() => (locale.value === 'zh-CN' ? zhCN : null));

  const naiveDateLocale = computed<NDateLocale | null>(() =>
    locale.value === 'zh-CN' ? dateZhCN : null
  );

  const setLocale = (lang: AppLocale) => {
    locale.value = lang;
    i18n.global.locale.value = lang;
  };

  return {
    locale,
    naiveLocale,
    naiveDateLocale,

    setLocale
  };
});

export function useLocaleStoreWithOut() {
  return useLocaleStore(store);
}
