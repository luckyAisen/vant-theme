<template>
  <div class="p-4 pt-10 pb-10 v-skeleton">
    <template v-if="props.text">
      <p v-if="typeof props.text === 'string'" class="pb-[--vt-size-4]">{{ props.text }}</p>
      <p v-else class="pb-[--vt-size-4]">
        <component :is="props.text" />
      </p>
    </template>
    <n-space vertical>
      <n-skeleton v-for="it in skeletonMap" :key="it" height="20px" :width="it" />
    </n-space>
  </div>
</template>

<script setup lang="ts">
import type { VSkeletonProps } from './type';

defineOptions({
  name: 'VSkeleton'
});

const props = withDefaults(defineProps<VSkeletonProps>(), {
  rows: 6
});

const skeletonMap = ref(
  Array.from({ length: props.rows }, (_, index) =>
    index === 0 ? '33%' : index + 1 !== props.rows ? '100%' : '66%'
  )
);
</script>

<style lang="scss" scoped>
.v-skeleton {
}
</style>
