import { ProjectEnum } from '@/enums';

export type ProjectVersion = ProjectEnum.VERSION_2 | ProjectEnum.VERSION_3 | ProjectEnum.VERSION_4;

export type Project = {
  id: string;
  name: string;
  description: string;
  version: ProjectVersion;
  createTime?: string;
  updateTime?: string;
};

export type ProjectVarObject = Record<string, string>;

export type ProjectVarDefault = {
  [key in ProjectVersion]: Record<string, ProjectVarObject>;
};

export type ProjectVarConfig = Record<string, ProjectVarItemConfig>;

export type ProjectVarItemConfig = {
  light: ProjectVarObject;
  dark: ProjectVarObject;
};

export type ProjectImportConfig = Project & {
  cssVar: ProjectVarItemConfig;
};
