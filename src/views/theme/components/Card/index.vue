<template>
  <div
    class="min-h-64 w-96 border border-solid border-[--vt-color-border-1] rounded-[--vt-border-radius-5] mt-[--vt-size-6] mr-[--vt-size-6] flex flex-col theme-card"
  >
    <div class="relative flex flex-wrap h-32 min-h-32">
      <div
        v-for="(item, index) in blocks"
        :key="item.key"
        :style="item.style"
        :class="['h-1/2', index > 1 ? 'w-1/4' : 'w-1/2']"
      ></div>

      <div class="theme-card-action">
        <div class="action-mask"></div>
        <div class="action-block">
          <div class="action-item" @click="onSelect('1')">
            <div class="icon">
              <n-icon>
                <EyedropOutline class="cursor-pointer" />
              </n-icon>
            </div>
            <div class="name">
              <span>{{ t('see_theme') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-1 flex flex-col p-[--vt-size-3]">
      <div class="flex">
        <p class="flex-1 text-[--vt-color-text-1] mb-[6px] pr-[--vt-size-1]">
          <span>{{ $t('modal_theme_name') }}: </span>
          <span class="pl-[--vt-size-2]">{{ props.theme.name }}</span>
        </p>

        <n-dropdown :options="dropdownOptions" @select="onSelect">
          <n-icon size="var(--vt-font-size-5)">
            <EllipsisHorizontalCircle class="cursor-pointer" />
          </n-icon>
        </n-dropdown>
      </div>

      <p class="text-[--vt-color-text-1] mb-[6px]">
        <span>{{ $t('modal_theme_vant_version') }}: </span>
        <span class="pl-[--vt-size-2]">{{ props.theme.version }}</span>
      </p>

      <n-ellipsis v-if="props.theme.description" :line-clamp="2" class="mb-[6px]">
        <span>{{ $t('modal_theme_desc') }}: </span>
        <span class="pl-[--vt-size-2]">
          {{ props.theme.description }}
        </span>

        <template #tooltip>
          <div class="overflow-y-auto max-w-96 max-h-96">
            {{ props.theme.description }}
          </div>
        </template>
      </n-ellipsis>

      <p class="text-[--vt-color-text-1]">
        <span>{{ $t('last_modified') }}: </span>
        <span class="pl-[--vt-size-2]">{{ parseTime(props.theme.updated_at) }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { EllipsisHorizontalCircle, EyedropOutline } from '@vicons/ionicons5';
import { ThemeEnum } from '@/enums';
import { getItem } from '@/utils/localStorage';
import { parseTime } from '@/utils/time';

import type { ThemeCardProps, ThemeCardEmits } from './type';
import type { ThemeVarBase, ThemeVarConfig } from '@/types';

defineOptions({
  name: 'ThemeCard'
});

const { t } = useI18n();

const props = defineProps<ThemeCardProps>();

const emits = defineEmits<ThemeCardEmits>();

const blocks = computed(() => {
  const configs: ThemeVarConfig = getItem(ThemeEnum.APP_THEME_VAR_CONFIG);
  const config =
    Object.keys(configs[props.theme.id]).length > 0
      ? configs[props.theme.id]
      : getItem<ThemeVarBase>(ThemeEnum.APP_THEME_VAR_BASE)[props.theme.version];
  let colors: string[] = [];
  if (props.theme.version === ThemeEnum.VERSION_2) {
    colors = [
      config['@red'],
      config['@blue'],
      config['@orange'],
      config['@orange-dark'],
      config['@orange-light'],
      config['@green']
    ];
  }
  colors = [
    config['--van-red'],
    config['--van-blue'],
    config['--van-orange'],
    config['--van-orange-dark'],
    config['--van-orange-light'],
    config['--van-green']
  ];
  const blockMap = colors.map((it, index) => ({
    key: it,
    style: {
      'background-color': it,
      'border-top-left-radius': index === 0 ? 'var(--vt-border-radius-5)' : undefined,
      'border-top-right-radius': index === 1 ? 'var(--vt-border-radius-5)' : undefined
    }
  }));
  return blockMap;
});

const dropdownOptions = computed(() => [
  {
    label: t('see_theme'),
    key: '1'
  },
  {
    label: t('edit_theme'),
    key: '2'
  },
  {
    label: t('copy_theme'),
    key: '3'
  },
  {
    label: t('del_theme'),
    key: '4'
  },
  {
    label: t('export_theme'),
    key: '5'
  }
]);

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
  emits('see', { ...props.theme });
};

const onEdit = () => {
  emits('edit', { ...props.theme });
};

const onCopy = () => {
  emits('copy', { ...props.theme });
};

const onDelete = () => {
  emits('delete', { ...props.theme });
};

const onExport = () => {
  emits('export', { ...props.theme });
};
</script>

<style lang="scss" scoped>
.theme-card {
  .theme-card-action {
    transition: all 0.3s;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .action-mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #000;
      opacity: 0.4;
    }

    .action-block {
      position: absolute;
      width: 100%;
      height: 100%;

      .action-item {
        cursor: pointer;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #eee;

        .icon {
          cursor: pointer;
          font-size: 22px;
          text-align: center;

          i {
            font-size: var(--vt-font-size-7);
            transition: all 0.3s ease;
          }
        }

        .name {
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: var(--vt-font-size-4);
          padding-top: var(--vt-size-1);
        }
      }
    }
  }

  &:hover {
    .theme-card-action {
      opacity: 1;

      .action-block {
        .action-item {
          .icon {
            i {
              font-size: var(--vt-font-size-8);
            }
          }
          .name {
            font-size: var(--vt-font-size-5);
          }
        }
      }
    }
  }
}
</style>
