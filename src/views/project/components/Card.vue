<template>
  <div class="w-1/4 min-h-[200px] h-[200px] pl-3 pr-3 mb-5 project-card">
    <div
      class="h-full mb-5 flex flex-col border border-solid border-[--vt-color-border-1] rounded-[--vt-border-radius-1] p-[--vt-size-4] project-card-container"
    >
      <div class="flex pb-1.5">
        <p class="flex-1 text-[--vt-color-text-1]">
          {{ props.project.name }}
        </p>

        <!-- <p class="flex-1 text-[--vt-color-text-1] mb-[6px] pr-[--vt-size-1]">
          <span class="pl-[--vt-size-2] break-all">{{ props.project.name }}</span>
        </p> -->

        <n-dropdown :options="dropdownOptions" @select="onSelect">
          <n-icon size="var(--vt-font-size-5)">
            <EllipsisHorizontalCircle class="cursor-pointer" />
          </n-icon>
        </n-dropdown>
      </div>

      <p class="pb-1.5 flex text-[--vt-color-text-2] text-[13px]">
        <span :style="versionLabelWidth">{{ $t('modal_project_vant_version') }}: </span>
        <span>{{ props.project.version }}</span>
      </p>

      <p class="pb-1.5 flex text-[--vt-color-text-2] text-[13px]">
        <span :style="versionDesWidth">{{ $t('modal_project_desc') }}: </span>
        <n-ellipsis :line-clamp="1">
          <span>
            {{ props.project.description || '--' }}
          </span>

          <template #tooltip>
            <div class="overflow-y-auto max-w-96 max-h-96">
              {{ props.project.description }}
            </div>
          </template>
        </n-ellipsis>
      </p>

      <p class="pb-3 text-[12px] text-[--vt-color-text-3]">
        {{ parseTime(props.project.updateTime) }}
      </p>

      <div class="flex justify-end">
        <n-button class="!mr-3" size="small" type="error" @click="onSelect('4')">
          {{ t('del_project_1') }}
        </n-button>
        <n-button class="!mr-3" size="small" @click="onSelect('2')">
          {{ t('edit_project_1') }}
        </n-button>
        <n-button size="small" type="info" @click="onSelect('1')">
          {{ t('see_project_1') }}
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { EllipsisHorizontalCircle } from '@vicons/ionicons5';
import { useAppStore } from '@/stores/modules/app';
import { parseTime } from '@/utils/time';

import type { Project } from '@/types';

defineOptions({
  name: 'ProjectCard'
});

export type ProjectCardProps = {
  project: Project;
};

export type ProjectCardEmits = {
  (e: 'see', project: Project): void;
  (e: 'edit', project: Project): void;
  (e: 'copy', project: Project): void;
  (e: 'delete', project: Project): void;
  (e: 'export', project: Project): void;
};

const { t } = useI18n();

const appStore = useAppStore();

const props = defineProps<ProjectCardProps>();

const emits = defineEmits<ProjectCardEmits>();

const dropdownOptions = computed(() => [
  {
    label: t('see_project'),
    key: '1'
  },
  {
    label: t('edit_project'),
    key: '2'
  },
  {
    label: t('copy_project'),
    key: '3'
  },
  {
    label: t('del_project'),
    key: '4'
  },
  {
    label: t('export_project'),
    key: '5'
  }
]);

const versionLabelWidth = computed(() => {
  const widthMap = {
    'zh-CN': '68px',
    'en-US': '90px'
  };

  const width = widthMap[appStore.locale];

  return {
    width: width,
    'min-width': width
  };
});

const versionDesWidth = computed(() => {
  const widthMap = {
    'zh-CN': '68px',
    'en-US': '125px'
  };

  const width = widthMap[appStore.locale];

  return {
    width: width,
    'min-width': width
  };
});

const onSelect = (key: string) => {
  if (key === '1') {
    onSee();
  }

  if (key === '2') {
    onEdit();
  }

  if (key === '3') {
    onCopy();
  }

  if (key === '4') {
    onDelete();
  }

  if (key === '5') {
    onExport();
  }
};

const onSee = () => {
  emits('see', { ...props.project });
};

const onEdit = () => {
  emits('edit', { ...props.project });
};

const onCopy = () => {
  emits('copy', { ...props.project });
};

const onDelete = () => {
  emits('delete', { ...props.project });
};

const onExport = () => {
  emits('export', { ...props.project });
};
</script>

<style lang="scss" scoped>
.project-card {
  .project-card-container {
    transition: box-shadow 0.2s cubic-bezier(0, 0, 1, 1);

    &:hover {
      box-shadow: 4px 4px 10px var(--vt-color-fill-3);
    }
  }
}
</style>
