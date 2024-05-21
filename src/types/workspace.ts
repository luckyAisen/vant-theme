import type { AppLocale, ProjectVersion } from '@/types';

export type WMenu = {
  label: string;
  value: string;
  children: WMenu[];
};

export type WMenuBase = {
  [key in ProjectVersion]: Record<AppLocale, WMenu[]>;
};

export type WComponentVarItem = WComponentVarType & {
  type: '0' | '1';
};

export type WComponentVarType = {
  isVar: boolean;
  varLabel: string;
  value: string;
};

export type ComponentVarConfig = Record<string, WComponentVarItem>;
