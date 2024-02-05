<template>
  <div class="flex justify-between workspace-header">
    <div class="flex items-center workspace-header-title">
      <n-icon color="var(--vt-color-text-1)" size="var(--vt-font-size-5)">
        <ChevronBackOutline />
      </n-icon>
      <h1 class="workspace-header-title-name">主题标题</h1>
    </div>
    <div class="flex items-center workspace-header-operation">
      <SwitchLocale />
      <SwitchTheme />
      <n-button type="primary"> {{ $t('download_theme') }} </n-button>
      <n-button type="error"> {{ $t('reset_theme') }} </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronBackOutline } from '@vicons/ionicons5';
import SwitchLocale from '../SwitchLocale/index.vue';
import SwitchTheme from '../SwitchTheme/index.vue';

defineOptions({
  name: 'WorkspaceHeader'
});
</script>

<style lang="scss" scoped>
.workspace-header {
  width: 100%;
  height: var(--workspace-header-height);
  min-height: var(--workspace-header-height);
  max-height: var(--workspace-header-height);
  background-color: var(--vt-color-bg-1);
  border-bottom: 1px solid var(--vt-color-border-1);
  padding: var(--vt-size-3) var(--vt-size-5);

  .workspace-header-title {
    font-size: var(--vt-font-size-5);
    font-weight: var(--vt-font-weight-1);
    color: var(--vt-color-text-1);

    .workspace-header-title-name {
      padding-left: var(--vt-size-3);
    }
  }

  .workspace-header-operation {
    .n-button {
      margin-left: var(--vt-size-3);
    }
  }
}
</style>
