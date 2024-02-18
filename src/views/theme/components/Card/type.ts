import type { Theme } from '@/types';

export type ThemeCardProps = {
  theme: Theme;
};

export type ThemeCardEmits = {
  (e: 'see', theme: Theme): void;
  (e: 'edit', theme: Theme): void;
  (e: 'copy', theme: Theme): void;
  (e: 'delete', theme: Theme): void;
  (e: 'export', theme: Theme): void;
};
