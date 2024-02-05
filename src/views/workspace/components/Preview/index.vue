<template>
  <div class="flex items-center workspace-preview">
    <iframe
      class="workspace-preview-mobile"
      src="https://vant-ui.github.io/vant/mobile.html#/zh-CN/skeleton"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'WorkspacePreview'
});
</script>

<style lang="scss" scoped>
.workspace-preview {
  width: var(--workspace-preview-width);
  min-width: var(--workspace-preview-width);
  max-width: var(--workspace-preview-width);
  height: 100%;
  margin-right: var(--vt-size-5);

  .workspace-preview-mobile {
    width: 100%;
    height: 700px;
    border-radius: var(--vt-border-radius-10);
    border: none;
    outline: none;
  }
}
</style>
