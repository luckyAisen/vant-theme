import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { ThemeEnum } from '@/enums';
import { store } from '@/stores';
import { getItem, setItem } from '@/utils/localStorage';
import { getTimeStamp } from '@/utils/time';

import type { Theme, ThemeVersion, ThemeVarDefault, ThemeVarConfig } from '@/types';

export const useThemeStore = defineStore('themeStore', () => {
  const allThemes = ref(useStorage<Theme[]>(ThemeEnum.THEME_LIST, []));

  const themeVarConfig = ref<ThemeVarConfig>(getItem(ThemeEnum.THEME_VAR_CONFIG, {}));

  const initBaseVar = async (): Promise<object> => {
    if (getItem(ThemeEnum.THEME_VAR_DEFAULT)) return getItem(ThemeEnum.THEME_VAR_DEFAULT);

    return await Promise.all([
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ThemeEnum.VERSION_2}/variable/variable.json`),
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ThemeEnum.VERSION_3}/variable/variable.json`),
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ThemeEnum.VERSION_4}/variable/variable.json`)
    ]).then(async (res) => {
      const versions: ThemeVersion[] = [
        ThemeEnum.VERSION_2,
        ThemeEnum.VERSION_3,
        ThemeEnum.VERSION_4
      ];

      const variables: ThemeVarDefault = {
        [ThemeEnum.VERSION_2]: {},
        [ThemeEnum.VERSION_3]: {},
        [ThemeEnum.VERSION_4]: {}
      };

      for (let i = 0; i < res.length; i++) {
        const variable = await res[i].json();
        variables[versions[i]] = variable;
      }

      setItem(ThemeEnum.THEME_VAR_DEFAULT, variables);

      return variables;
    });
  };

  const addTheme = (theme: Theme) => {
    const timeStamp = String(getTimeStamp());
    const nextTheme = {
      ...theme,
      id: timeStamp,
      created_at: timeStamp,
      updated_at: timeStamp
    };
    allThemes.value.push(nextTheme);
    addConfig(nextTheme);
  };

  const updateTheme = (theme: Theme) => {
    const index = allThemes.value.findIndex((it) => it.id === theme.id);
    if (index !== -1) {
      const timeStamp = String(getTimeStamp());
      allThemes.value[index] = {
        ...theme,
        updated_at: timeStamp
      };
    }
  };

  const copyTheme = (theme: Theme) => {
    const timeStamp = String(getTimeStamp());
    const nextTheme = {
      ...theme,
      id: timeStamp,
      created_at: timeStamp,
      updated_at: timeStamp
    };
    allThemes.value.push(nextTheme);
    addConfig(nextTheme, theme.id);
  };

  const resetTheme = (theme: Theme) => {
    updateTheme(theme);
    deleteConfig(theme);
    addConfig(theme);
  };

  const deleteTheme = (theme: Theme) => {
    const index = allThemes.value.findIndex((it) => it.id === theme.id);
    allThemes.value.splice(index, 1);
    deleteConfig(theme);
  };

  const addConfig = (theme: Theme, id?: string) => {
    const configs: ThemeVarConfig = getItem(ThemeEnum.THEME_VAR_CONFIG, {});
    configs[theme.id] = {
      light: {},
      dark: {}
    };
    if (id) {
      configs[theme.id] = configs[id];
    }
    themeVarConfig.value = configs;
    setItem(ThemeEnum.THEME_VAR_CONFIG, configs);
  };

  const deleteConfig = (theme: Theme) => {
    const configs: ThemeVarConfig = getItem(ThemeEnum.THEME_VAR_CONFIG, {});
    delete configs[theme.id];
    themeVarConfig.value = configs;
    setItem(ThemeEnum.THEME_VAR_CONFIG, configs);
  };

  return {
    allThemes,
    themeVarConfig,

    initBaseVar,
    addTheme,
    updateTheme,
    copyTheme,
    resetTheme,
    deleteTheme,

    addConfig,
    deleteConfig
  };
});

export function useThemeStoreWithOut() {
  return useThemeStore(store);
}
