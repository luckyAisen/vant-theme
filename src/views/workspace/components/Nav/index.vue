<template>
  <div class="workspace-nav"></div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'WorkspaceNav'
});
</script>

<style lang="scss" scoped>
.workspace-nav {
  width: var(--workspace-nav-width);
  min-width: var(--workspace-nav-width);
  max-width: var(--workspace-nav-width);
  height: 100%;
  background-color: var(--vt-color-bg-1);
  border-right: 1px solid var(--vt-color-border-1);
}
</style>
