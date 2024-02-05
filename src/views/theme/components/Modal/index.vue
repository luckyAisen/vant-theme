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
      <n-form-item :label="$t('modal_theme_name')" path="name">
        <n-input
          v-model:value="formModel.name"
          :placeholder="$t('please_input')"
          maxlength="30"
          show-count
          clearable
        />
      </n-form-item>
      <n-form-item :label="$t('modal_theme_desc')">
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
      <n-form-item :label="$t('modal_theme_vant_version')" path="version">
        <n-select
          v-model:value="formModel.version"
          :placeholder="$t('please_select')"
          :options="versionOptions"
          :render-label="renderLabel"
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
import { ThemeEnum } from '@/enums';

import type { VNodeChild } from 'vue';
import type { SelectOption } from 'naive-ui';
import type { Theme } from '@/types';
import type { ThemeModalProps, ThemeModalEmits } from './type';

defineOptions({
  name: 'ThemeModal'
});

const DEFAULT_MODEL: Theme = {
  id: '',
  name: '',
  description: '',
  version: ThemeEnum.VERSION_4
};

const { t } = useI18n();

const props = defineProps<ThemeModalProps>();

const emits = defineEmits<ThemeModalEmits>();

const show = computed(() => props.show);

const title = ref();

const versionOptions = computed(() => [
  {
    locale: 'modal_vant_options_4',
    label: t('modal_vant_options_4'),
    value: ThemeEnum.VERSION_4
  },
  {
    locale: 'modal_vant_options_3',
    label: t('modal_vant_options_3'),
    value: ThemeEnum.VERSION_3
  },
  {
    locale: 'modal_vant_options_2',
    label: t('modal_vant_options_2'),
    value: ThemeEnum.VERSION_2
  }
]);

const renderLabel = (option: SelectOption): VNodeChild => {
  return h('span', t(option.locale as string));
};

const formRef = ref();

const formModel = ref<Theme>({ ...DEFAULT_MODEL });

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
      add: t('add_theme'),
      edit: t('edit_theme'),
      copy: t('copy_theme')
    };
    title.value = titleMap[props.type];
  }
};

const setFormModel = (model: Theme) => {
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
