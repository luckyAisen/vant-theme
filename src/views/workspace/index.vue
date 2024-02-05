<template>
  <div class="flex flex-col workspace">
    <WorkspaceHeader />
    <div class="flex flex-1 workspace-content">
      <WorkspaceNav />
      <WorkspaceWork />
      <WorkspacePreview />
    </div>
  </div>
</template>

<script setup lang="ts">
import WorkspaceHeader from './components/Header/index.vue';
import WorkspaceNav from './components/Nav/index.vue';
import WorkspaceWork from './components/Work/index.vue';
import WorkspacePreview from './components/Preview/index.vue';

defineOptions({
  name: 'Workspace'
});
</script>

<style lang="scss" scoped>
.workspace {
  --workspace-header-height: 58px;
  --workspace-nav-width: 200px;
  --workspace-preview-width: 390px;

  width: 100vw;
  height: 100vh;
  background-color: #efefef;
  overflow: hidden;

  .workspace-content {
  }
}

:root[theme='dark'] {
  .workspace {
    background-color: #000000;
  }
}
</style>
