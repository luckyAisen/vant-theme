import { ProjectEnum } from '@/enums';

import type { Project } from '@/types';

export const DEFAULT_MODEL: Project = {
  id: '',
  name: '',
  description: '',
  version: ProjectEnum.VERSION_4,
  dark: ProjectEnum.ENABLE_DARK_MODE
};
