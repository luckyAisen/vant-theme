import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { AppVersionEnum } from '@/enums';

import { store } from '@/stores';
import pkg from '../../../package.json';

export const useAppStore = defineStore('appStore', () => {
  const version = ref('');

  const setVersion = () => {
    version.value = useStorage(AppVersionEnum.APP_VERSION, pkg.version).value;
  };

  return {
    version,

    setVersion
  };
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
