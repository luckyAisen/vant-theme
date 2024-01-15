import { defineStore } from 'pinia';
import { ref } from 'vue';
import i18n from '@/locales';

import type { Locale } from '@/types/locale';

export const useLocaleStore = defineStore(
  'locale',
  () => {
    const locale = ref<Locale>(i18n.global.locale.value);
    function setLocale(lang: Locale) {
      locale.value = lang;
      i18n.global.locale.value = lang;
    }
    return { locale, setLocale };
  },
  {
    persist: true
  }
);
