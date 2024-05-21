<template>
  <n-popselect
    v-model:value="selectValue"
    :options="selectOptions"
    @update:value="onSwitchLocale"
    trigger="click"
  >
    <n-button
      v-if="props.type === 'icon'"
      quaternary
      :focusable="false"
      style="--n-height: 30px; --n-padding: 0 6px; --n-color-hover: var(--vt-color-fill-3)"
    >
      <template #icon>
        <n-icon size="var(--vt-font-size-5)">
          <Language />
        </n-icon>
      </template>
    </n-button>

    <n-button v-if="props.type === 'button'" secondary @click="onSwitchLocale">
      <template #icon>
        <n-icon>
          <LocaleSvg />
        </n-icon>
      </template>
      {{ $t('switch_lang') }}
    </n-button>
  </n-popselect>
</template>

<script setup lang="ts">
import { Language } from '@vicons/ionicons5';
import { useAppStore } from '@/stores/modules/app';
import { langs } from '@/locales';

defineOptions({
  name: 'SwitchLocale'
});

export type SwitchLocaleProps = {
  type: 'icon' | 'button';
};

export type SwitchLocaleEmits = {
  (e: 'switch'): void;
};

const props = withDefaults(defineProps<SwitchLocaleProps>(), {
  type: 'icon'
});

const emits = defineEmits<SwitchLocaleEmits>();

const appStore = useAppStore();

// 选择的值
const selectValue = ref(appStore.locale);

// 选项内容
const selectOptions = computed(() => langs);

/**
 * 切换语言的回调
 */
const onSwitchLocale = () => {
  appStore.setLocale(selectValue.value);
  emits('switch');
};
</script>
