import type { AppLocale } from '@/types';

export type SwitchLocaleEmits = {
  (e: 'switch', locale: AppLocale): void;
};
