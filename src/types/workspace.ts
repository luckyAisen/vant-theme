import type { AppLocale, ThemeVersion } from '@/types';

export type Menu = {
  label: string;
  value: string;
  children: Menu[];
};

export type MenuBase = {
  [key in ThemeVersion]: Record<AppLocale, Menu[]>;
};

export type ComponentVarItem = ComponentVarType & {
  type: '0' | '1';
};

export type ComponentVarType = {
  isVar: boolean;
  varLabel: string;
  value: string;
};

export type ComponentVarConfig = Record<string, ComponentVarItem>;
