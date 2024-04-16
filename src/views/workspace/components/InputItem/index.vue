<template>
  <div class="input-item">
    <p class="item-label">{{ props.label }}</p>
    <n-input v-model:value="value" type="text" clearable @change="change" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'InputItem'
});

type InputItemProps = {
  label: string;
  defaultValue: string;
  isVar: boolean;
  varLabel: string;
};

type InputItemEmits = {
  change: [key: string, value: string];
};

const props = defineProps<InputItemProps>();

const emits = defineEmits<InputItemEmits>();

const value = ref<InputItemProps['defaultValue']>('');

/**
 * 改变后的回调
 * @param val 变化后的值
 */
const change = (val: InputItemProps['defaultValue']) => {
  emits('change', props.label, val);
};

watch(
  () => props.defaultValue,
  () => {
    value.value = props.defaultValue;
  },
  {
    immediate: true
  }
);
</script>

<style lang="scss" scoped>
.input-item {
  padding-bottom: var(--vt-size-3);

  .item-label {
    padding-bottom: var(--vt-size-2);
  }

  :deep(.n-input) {
    width: 60%;
    min-width: 360px;
  }
}
</style>
