import type { Theme } from '@/types';

export type ThemeModalType = 'add' | 'edit' | 'copy';

export type ThemeModalProps = {
  show: boolean;
  type: ThemeModalType;
  model?: Theme;
};

export type ThemeModalEmits = {
  (e: 'cancel'): void;
  (e: 'confirm', model: Theme): void;
};
