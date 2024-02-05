<template>
  <div class="flex flex-col w-screen h-screen theme">
    <VHeader />
    <div class="flex flex-col items-center justify-center flex-1">
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

    <ThemeModal
      :show="modal.show"
      :type="modal.type"
      @cancel="onModalCancel"
      @confirm="onModalConfirm"
    />
  </div>
</template>

<script setup lang="ts">
import VHeader from '@/components/Header/index.vue';
import ThemeModal from './components/Modal/index.vue';

import type { ThemeModalProps } from './components/Modal/type';

defineOptions({
  name: 'Theme'
});

const modal = reactive<ThemeModalProps>({
  show: false,
  type: 'add'
});

const onAdd = () => {
  modal.show = true;
  modal.type = 'add';
};

const onModalCancel = () => {
  modal.show = false;
};

const onModalConfirm = () => {
  onModalCancel();
};
</script>

<style lang="scss" scoped>
.theme {
}
</style>
