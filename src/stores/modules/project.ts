import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { ProjectEnum } from '@/enums';
import { store } from '@/stores';
import { getItem, setItem } from '@/utils/localStorage';
import { getTimeStamp } from '@/utils/time';
import { exportProjectHelper } from '@/utils/exportProjectHelper';

import type {
  Project,
  ProjectVersion,
  ProjectVarDefault,
  ProjectVarConfig,
  ProjectVarItemConfig
} from '@/types';

export const useProjectStore = defineStore('projectStore', () => {
  const allProject = ref(useStorage<Project[]>(ProjectEnum.PROJECT_LIST, []));

  const themeVarConfig = ref<ProjectVarConfig>(getItem(ProjectEnum.PROJECT_VAR_CONFIG, {}));

  const initBaseVar = async (): Promise<object> => {
    if (getItem(ProjectEnum.PROJECT_VAR_DEFAULT)) return getItem(ProjectEnum.PROJECT_VAR_DEFAULT);

    return await Promise.all([
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ProjectEnum.VERSION_2}/variable/variable.json`),
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ProjectEnum.VERSION_3}/variable/variable.json`),
      fetch(`${import.meta.env.VITE_BASE_URL}vant/${ProjectEnum.VERSION_4}/variable/variable.json`)
    ]).then(async (res) => {
      const versions: ProjectVersion[] = [
        ProjectEnum.VERSION_2,
        ProjectEnum.VERSION_3,
        ProjectEnum.VERSION_4
      ];

      const variables: ProjectVarDefault = {
        [ProjectEnum.VERSION_2]: {},
        [ProjectEnum.VERSION_3]: {},
        [ProjectEnum.VERSION_4]: {}
      };

      for (let i = 0; i < res.length; i++) {
        const variable = await res[i].json();
        variables[versions[i]] = variable;
      }

      setItem(ProjectEnum.PROJECT_VAR_DEFAULT, variables);

      return variables;
    });
  };

  const addProject = (project: Project) => {
    const timeStamp = String(getTimeStamp());
    const nextTheme = {
      ...project,
      id: timeStamp,
      createTime: timeStamp,
      updateTime: timeStamp
    };
    allProject.value.push(nextTheme);
    addConfig(nextTheme);
  };

  const updateProject = (project: Project) => {
    const index = allProject.value.findIndex((it) => it.id === project.id);
    if (index !== -1) {
      const timeStamp = String(getTimeStamp());
      allProject.value[index] = {
        ...project,
        updateTime: timeStamp
      };
    }
  };

  const copyProject = (project: Project) => {
    const timeStamp = String(getTimeStamp());
    const nextTheme = {
      ...project,
      id: timeStamp,
      createTime: timeStamp,
      updateTime: timeStamp
    };
    allProject.value.push(nextTheme);
    addConfig(nextTheme, project.id);
  };

  const importProject = (project: Project, cssVar: ProjectVarItemConfig) => {
    const id = String(getTimeStamp());
    const newTheme = { ...project };
    newTheme.id = id;
    allProject.value.push(newTheme);

    const cssConfig: ProjectVarConfig = getItem(ProjectEnum.PROJECT_VAR_CONFIG, {});
    cssConfig[id] = cssVar;

    themeVarConfig.value = cssConfig;

    setItem(ProjectEnum.PROJECT_VAR_CONFIG, cssConfig);
  };

  const exportProject = (project: Project) => {
    return exportProjectHelper(project);
  };

  const resetProject = (project: Project) => {
    updateProject(project);
    deleteConfig(project);
    addConfig(project);
  };

  const deleteProject = (project: Project) => {
    const index = allProject.value.findIndex((it) => it.id === project.id);
    allProject.value.splice(index, 1);
    deleteConfig(project);
  };

  const addConfig = (project: Project, id?: string) => {
    const configs: ProjectVarConfig = getItem(ProjectEnum.PROJECT_VAR_CONFIG, {});
    configs[project.id] = {
      light: {},
      dark: {}
    };
    if (id) {
      configs[project.id] = configs[id];
    }
    themeVarConfig.value = configs;
    setItem(ProjectEnum.PROJECT_VAR_CONFIG, configs);
  };

  const deleteConfig = (project: Project) => {
    const configs: ProjectVarConfig = getItem(ProjectEnum.PROJECT_VAR_CONFIG, {});
    delete configs[project.id];
    themeVarConfig.value = configs;
    setItem(ProjectEnum.PROJECT_VAR_CONFIG, configs);
  };

  return {
    allProject,
    themeVarConfig,

    initBaseVar,
    addProject,
    updateProject,
    copyProject,
    importProject,
    exportProject,
    resetProject,
    deleteProject,

    addConfig,
    deleteConfig
  };
});

export function useThemeStoreWithOut() {
  return useProjectStore(store);
}
