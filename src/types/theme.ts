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

export type ThemeVarBase = {
  [key in ThemeVersion]: Record<string, string>;
  // [key in ThemeVersion]: object;
};

export type ThemeVarConfig = Record<string, Record<string, string>>;
