<template>
  <n-modal
    v-model:show="show"
    :title="title"
    :style="{
      width: '600px'
    }"
    preset="card"
    :auto-focus="false"
    :mask-closable="false"
    @close="modalClose"
    @esc="modalClose"
  >
    <n-form
      label-width="auto"
      :model="formModel"
      :rules="formRules"
      label-placement="left"
      label-align="right"
      require-mark-placement="left"
      ref="formRef"
    >
      <n-form-item :label="$t('modal_project_name')" path="name">
        <n-input
          v-model:value="formModel.name"
          :placeholder="$t('please_input')"
          maxlength="30"
          show-count
          clearable
        />
      </n-form-item>
      <n-form-item :label="$t('modal_project_desc')">
        <n-input
          v-model:value="formModel.description"
          :placeholder="$t('please_input')"
          type="textarea"
          size="small"
          :autosize="{
            minRows: 3,
            maxRows: 5
          }"
          clearable
        />
      </n-form-item>
      <n-form-item
        v-if="props.type === 'add'"
        :label="$t('modal_project_vant_version')"
        path="version"
      >
        <n-select
          v-model:value="formModel.version"
          :placeholder="$t('please_select')"
          :options="versionOptions"
          :render-label="optionsRenderLabel"
        />
      </n-form-item>

      <n-form-item
        v-if="formModel.version === ProjectEnum.VERSION_4"
        :label="$t('modal_project_dark_mode')"
        path="dark"
      >
        <template #label>
          <span class="flex items-center">
            <span class="pr-1"> {{ $t('modal_project_dark_mode') }}</span>
            <n-tooltip trigger="hover">
              <template #trigger>
                <n-icon size="var(--vt-font-size-4)" class="cursor-pointer">
                  <InformationCircleOutline />
                </n-icon>
              </template>
              {{ $t('modal_project_dark_mode_tooltip') }}
            </n-tooltip>
          </span>
        </template>

        <n-select
          v-model:value="formModel.dark"
          :placeholder="$t('please_select')"
          :options="darkModeOptions"
          :render-label="darkRenderLabel"
        />
      </n-form-item>
    </n-form>
    <template #footer>
      <n-space justify="end">
        <n-button @click="modalClose">{{ $t('cancel_text') }}</n-button>
        <n-button type="primary" @click="modalValidate">{{ $t('confirm_text') }}</n-button>
      </n-space>
    </template>
  </n-modal>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { InformationCircleOutline } from '@vicons/ionicons5';
import { ProjectEnum } from '@/enums';
import { DEFAULT_MODEL } from './util';

import type { VNodeChild } from 'vue';
import type { SelectOption } from 'naive-ui';
import type { Project } from '@/types';

defineOptions({
  name: 'ProjectModal'
});

export type ProjectModalType = 'add' | 'edit' | 'copy';

export type ProjectModalProps = {
  show: boolean;
  type: ProjectModalType;
  model?: Project;
};

export type ProjectModalEmits = {
  (e: 'cancel'): void;
  (e: 'confirm', model: Project): void;
};

const props = defineProps<ProjectModalProps>();

const emits = defineEmits<ProjectModalEmits>();

const { t } = useI18n();

const show = computed(() => props.show);

const title = ref();

const versionOptions = computed(() => [
  {
    locale: 'modal_vant_options_4',
    label: t('modal_vant_options_4'),
    value: ProjectEnum.VERSION_4
  },
  {
    locale: 'modal_vant_options_3',
    label: t('modal_vant_options_3'),
    value: ProjectEnum.VERSION_3
  },
  {
    locale: 'modal_vant_options_2',
    label: t('modal_vant_options_2'),
    value: ProjectEnum.VERSION_2
  }
]);

const darkModeOptions = computed(() => [
  {
    locale: 'modal_project_dark_mode_enable',
    label: t('modal_project_dark_mode_enable'),
    value: ProjectEnum.ENABLE_DARK_MODE
  },
  {
    locale: 'modal_project_dark_mode_disable',
    label: t('modal_project_dark_mode_disable'),
    value: ProjectEnum.DISABLE_DARK_MODE
  }
]);

const optionsRenderLabel = (option: SelectOption): VNodeChild => {
  return h('span', t(option.locale as string));
};

const darkRenderLabel = (option: SelectOption): VNodeChild => {
  return h('span', t(option.locale as string));
};

const formRef = ref();

const formModel = ref<Project>({ ...DEFAULT_MODEL });

const formRules = {
  name: {
    required: true,
    // message: t('please_input'),
    message: '',
    trigger: ['blur', 'input']
  },
  version: {
    required: true,
    // message: t('please_select'),
    message: '',
    trigger: ['blur', 'change']
  }
};

const modalClose = () => {
  emits('cancel');
};

const modalValidate = async () => {
  await formRef.value.validate();
  emits('confirm', formModel.value);
  modalClose();
};

const setTitle = () => {
  if (show.value) {
    const titleMap = {
      add: t('create_project'),
      edit: t('edit_project'),
      copy: t('copy_project')
    };
    title.value = titleMap[props.type];
  }
};

const setFormModel = (model: Project) => {
  formModel.value = model;
};

watch(
  () => props.show,
  () => {
    if (show.value) {
      setTitle();

      if (props.model) {
        setFormModel({ ...props.model });
      }
    }
  }
);
</script>
