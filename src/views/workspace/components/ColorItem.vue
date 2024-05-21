<template>
  <div class="workspace-color-item">
    <p class="item-label">{{ props.label }}</p>
    <!-- :status="status" -->
    <n-input v-model:value="value" type="text" clearable @change="change">
      <template #prefix>
        <div
          :class="[
            'item-color-prefix',
            { 'is-white': isWhiteColor, 'is-transparent': isTransparentColor }
          ]"
        ></div>
      </template>
    </n-input>
  </div>
</template>

<script setup lang="ts">
import { isWhite, isTransparent } from '@/utils/css';

defineOptions({
  name: 'WorkspaceColorItem'
});

type ColorItemProps = {
  label: string;
  defaultValue: string;
  isVar: boolean;
  varLabel: string;
};

type ColorItemEmits = {
  change: [key: string, value: string];
};

const props = defineProps<ColorItemProps>();

const emits = defineEmits<ColorItemEmits>();

const value = ref<ColorItemProps['defaultValue']>('');

/**
 * 是否为白色色值
 */
const isWhiteColor = computed(() => isWhite(props.defaultValue));

/**
 * 是否为透明色值
 */
const isTransparentColor = computed(() => isTransparent(props.defaultValue));

// const status = computed(() => (isColor(value.value) ? 'success' : 'error'));

/**
 * 改变后的回调
 * @param val 变化后的值
 */
const change = (val: ColorItemProps['defaultValue']) => {
  emits('change', props.label, val);
};

watch(
  () => props.defaultValue,
  () => {
    value.value = props.isVar ? props.varLabel : props.defaultValue;
  },
  {
    immediate: true
  }
);
</script>

<style lang="scss" scoped>
.workspace-color-item {
  padding-bottom: var(--vt-size-3);

  .item-label {
    padding-bottom: var(--vt-size-2);
  }

  :deep(.n-input) {
    width: 60%;
    min-width: 300px;

    .n-input__prefix {
      margin-right: var(--vt-size-3);
    }
  }

  .item-color-prefix {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: v-bind('props.defaultValue');
    // border: 1px solid v-bind('props.defaultValue');
    // outline: 1px solid v-bind('props.defaultValue');

    &.is-white {
      border: var(--n-border);
    }

    &.is-transparent {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
      background-repeat: repeat;
    }
  }
}
</style>
