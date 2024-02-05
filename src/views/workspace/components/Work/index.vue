<template>
  <div class="flex-1 workspace-work"></div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'WorkspaceWork'
});
</script>

<style lang="scss" scoped>
.workspace-work {
  margin: var(--vt-size-5);
  background-color: var(--vt-color-bg-1);
  border-radius: var(--vt-border-radius-10);
}

:root[theme='dark'] {
  .workspace-work {
    background-color: var(--vt-color-bg-2);
  }
}
</style>
