<template>
  <n-layout has-sider position="absolute" style="top: 64px">
    <n-layout-sider
      bordered
      show-trigger
      collapse-mode="transform"
      :collapsed-width="0"
      :width="270"
      :native-scrollbar="false"
    >
      <preview-menu />
    </n-layout-sider>
    <n-layout>
      <div class="page-preview">
        <div class="page-preview-component-container">
          <preview-content />
        </div>
        <div class="page-preview-console-container">
          <preview-console />
        </div>
      </div>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { NLayout, NLayoutSider } from 'naive-ui'
import PreviewMenu from '../components/PreviewMenu.vue'
import previewConsole from '../components/PreviewConsole.vue'
import PreviewContent from '../components/PreviewContent.vue'

export default defineComponent({
  name: 'PagePreview',
  components: {
    NLayout,
    NLayoutSider,
    PreviewMenu,
    PreviewContent,
    previewConsole
  },
  setup() {
    const $store = useStore()
    $store.dispatch('getThemePreviewConfig')
    $store.dispatch('menuChange', 'Base')
  }
})
</script>
