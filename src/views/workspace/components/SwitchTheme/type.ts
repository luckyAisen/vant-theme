import type { AppTheme } from '@/types';

export type SwitchThemeEmits = {
  (e: 'switch', theme: AppTheme): void;
};
