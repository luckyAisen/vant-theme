<template>
  <div class="console-panel-mobile">
    <div class="console-panel-mobile__container">
      <iframe :src="$props.src" @load="$emit('load')"></iframe>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  src: string;
};

const $props = defineProps<Props>();

const $emit = defineEmits<{
  (e: "load"): void;
}>();
</script>
