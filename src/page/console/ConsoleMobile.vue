<template>
  <div class="console-panel-mobile">
    <div class="console-panel-mobile__container">
      <n-spin :show="$props.loading">
        <iframe :src="$props.src" @load="$emit('load')"></iframe>
      </n-spin>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NSpin } from "naive-ui";

type Props = {
  src: string;
  loading: boolean;
};

const $props = defineProps<Props>();

const $emit = defineEmits<{
  (e: "load"): void;
}>();
</script>
