import { defineStore } from 'pinia';
import { zhCN, dateZhCN } from 'naive-ui';
import { useStorage } from '@vueuse/core';
import { localeEnum } from '@/enums';
import { store } from '@/stores';
import i18n from '@/locales';

import type { Locale } from '@/types/locale';
import type { NLocale, NDateLocale } from 'naive-ui';

export const useLocaleStore = defineStore('localeStore', () => {
  const locale = ref(useStorage(localeEnum.APP_LOCALE, i18n.global.locale.value));

  const naiveLocale = computed<NLocale | null>(() => (locale.value === 'zh' ? zhCN : null));

  const naiveDateLocale = computed<NDateLocale | null>(() =>
    locale.value === 'zh' ? dateZhCN : null
  );

  const setLocale = (lang: Locale) => {
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
