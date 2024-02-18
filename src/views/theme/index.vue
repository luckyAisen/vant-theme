<template>
  <div class="flex flex-col w-screen h-screen theme">
    <VHeader />

    <div v-if="skeletonState" class="w-full pt-20 pl-5 pr-5 mx-auto max-w-7xl theme-skeleton">
      <p class="pb-[--vt-size-4]">{{ $t('loading_vant_css') }}</p>
      <n-space vertical>
        <n-skeleton v-for="it in skeletonMap" :key="it" :width="it" text />
      </n-space>
    </div>

    <template v-else>
      <div v-if="allThemes.length" class="mx-auto max-w-7xl">
        <div class="p-5 flex flex-wrap min-w-[--vt-header-min-width]">
          <ThemeCard
            v-for="theme in allThemes"
            :key="theme.id"
            :theme="theme"
            @see="onSee"
            @edit="onEdit"
            @copy="onCopy"
            @delete="onDelete"
            @export="onExport"
          ></ThemeCard>

          <div
            class="min-h-64 w-96 border border-solid border-[--vt-color-border-1] rounded-[--vt-border-radius-5] mt-[--vt-size-6] mr-[--vt-size-6] flex flex-col items-center justify-center cursor-pointer theme-card theme-add-container"
            @click="onAdd"
          >
            <n-icon size="40" color="var(--vt-color-primary-6)" class="theme-add-icon">
              <AddCircleOutline />
            </n-icon>

            <div class="theme-add-text">{{ $t('add_theme') }}</div>
          </div>

          <div
            class="min-h-64 w-96 border border-solid border-[--vt-color-border-1] rounded-[--vt-border-radius-5] mt-[--vt-size-6] mr-[--vt-size-6] flex flex-col items-center justify-center cursor-pointer theme-card theme-add-container"
            @click="onImport"
          >
            <n-icon size="40" color="var(--vt-color-primary-6)" class="theme-add-icon">
              <CloudUploadOutline />
            </n-icon>

            <div class="theme-add-text">{{ $t('import_theme') }}</div>
          </div>
        </div>
      </div>

      <div v-else class="flex flex-col items-center justify-center flex-1">
        <img src="@/assets/img/theme-bg.png" draggable="false" class="h-[240px] mb-10" />
        <h1 class="mb-10 text-3xl font-bold">{{ $t('welcome_to_vant_theme') }}</h1>
        <div class="flex flex-col">
          <n-button tertiary type="primary" class="!w-[180px] !mb-10" @click="onAdd">
            {{ $t('create_theme') }}
          </n-button>
          <n-button text>
            {{ $t('import_theme') }}
          </n-button>
        </div>
      </div>
    </template>

    <ThemeModal
      :show="modal.show"
      :type="modal.type"
      :model="modal.model"
      @cancel="onModalCancel"
      @confirm="onModalConfirm"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useMessage, useDialog } from 'naive-ui';
import { useI18n } from 'vue-i18n';
import { AddCircleOutline, CloudUploadOutline } from '@vicons/ionicons5';

import VHeader from '@/components/Header/index.vue';
import ThemeCard from './components/Card/index.vue';
import ThemeModal from './components/Modal/index.vue';
import { useThemeStore } from '@/stores/modules/theme';
import { DEFAULT_MODEL } from './components/Modal/util';

import type { Theme } from '@/types';
import type { ThemeModalProps } from './components/Modal/type';

defineOptions({
  name: 'Theme'
});

const router = useRouter();

const message = useMessage();

const dialog = useDialog();

const { t } = useI18n();

const themeStore = useThemeStore();

const skeletonState = ref(false);

// const skeletonMap = ref(Array.from({ length: 10 }, (_, index) => `${(index + 1) * 10}%`));
const skeletonMap = ref(['40%', '100%', '100%', '100%', '100%', '70%']);

const allThemes = computed(() => themeStore.allThemes);

const modal = reactive<ThemeModalProps>({
  show: false,
  type: 'add',
  model: { ...DEFAULT_MODEL }
});

const init = async () => {
  try {
    skeletonState.value = true;
    await themeStore.initBaseVar();
  } catch {
    // TODO:异常处理
  } finally {
    skeletonState.value = false;
  }
};

const onAdd = () => {
  modal.show = true;
  modal.type = 'add';
  modal.model = { ...DEFAULT_MODEL };
};

const onSee = (theme: Theme) => {
  router.push({
    name: 'workspace',
    params: {
      version: theme.version,
      id: theme.id
    }
  });
};

const onEdit = (theme: Theme) => {
  modal.show = true;
  modal.type = 'edit';
  modal.model = theme;
};

const onCopy = (theme: Theme) => {
  modal.show = true;
  modal.type = 'copy';
  modal.model = theme;
};

const onDelete = (theme: Theme) => {
  dialog.error({
    title: t('delete_tips'),
    showIcon: false,
    content: t('confirm_delete'),
    positiveText: t('confirm_text'),
    negativeText: t('cancel_text'),
    maskClosable: false,
    onPositiveClick: () => {
      message.success(t('success_delete'));
      themeStore.deleteTheme(theme);
    },
    onNegativeClick: () => {}
  });
};

const onExport = () => {
  message.info('not yet');
};

const onImport = () => {
  message.info('not yet');
};

const onModalCancel = () => {
  modal.show = false;
};

const onModalConfirm = (theme: Theme) => {
  if (modal.type === 'add') {
    themeStore.addTheme(theme);
    message.success(t('success_add'));
  }
  if (modal.type === 'edit') {
    themeStore.updateTheme(theme);
    message.success(t('success_edit'));
  }
  if (modal.type === 'copy') {
    themeStore.copyTheme(theme);
    message.success(t('success_copy'));
  }
  onModalCancel();
};

init();
</script>

<style lang="scss" scoped>
.theme {
  .theme-skeleton {
  }

  .theme-add-container {
    .theme-add-icon {
      transition: all 0.3s ease;
    }

    .theme-add-text {
      font-size: var(--vt-font-size-4);
      padding-top: var(--vt-size-5);
      transition: all 0.2s ease;
    }

    &:hover {
      .theme-add-icon {
        transform: scale(1.5);
      }

      .theme-add-text {
        font-size: var(--vt-font-size-5);
        padding-top: var(--vt-size-2);
      }
    }
  }

  :deep(.theme-card) {
    &:nth-child(3n) {
      margin-right: 0px;
    }
  }
}
</style>
