import type { AppLocale } from '@/types';

export type SwitchLocaleEmits = {
  (e: 'switch', AppLocale: AppLocale): void;
};
