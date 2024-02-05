<template>
  <n-button size="medium" secondary @click="onSwitchLocale">
    <template #icon>
      <n-icon>
        <LocaleSvg />
      </n-icon>
    </template>
    {{ btnText }}
  </n-button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import LocaleSvg from '@/components/LocaleSvg/index.vue';
import { useLocaleStore } from '@/stores/modules/locale';

import type { SwitchLocaleEmits } from './type';

defineOptions({
  name: 'SwitchLocale'
});

const emits = defineEmits<SwitchLocaleEmits>();

const { t } = useI18n();

const localeStore = useLocaleStore();

const locale = computed(() => localeStore.locale);

const btnText = computed(() => t('switch_lang'));

const onSwitchLocale = () => {
  const nextLocale = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN';
  localeStore.setLocale(nextLocale);
  emits('switch', nextLocale);
};
</script>
