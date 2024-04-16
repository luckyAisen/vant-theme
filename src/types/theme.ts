import { ThemeEnum } from '@/enums';

export type ThemeVersion = ThemeEnum.VERSION_2 | ThemeEnum.VERSION_3 | ThemeEnum.VERSION_4;

export type Theme = {
  id: string;
  name: string;
  description: string;
  version: ThemeVersion;
  created_at?: string;
  updated_at?: string;
};

export type ThemeVarObject = Record<string, string>;

export type ThemeVarDefault = {
  [key in ThemeVersion]: Record<string, ThemeVarObject>;
};

export type ThemeVarConfig = Record<string, ThemeVarItemConfig>;

export type ThemeVarItemConfig = {
  light: ThemeVarObject;
  dark: ThemeVarObject;
};
