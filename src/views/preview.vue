<template>
  <div class="page-preview">
    <preview-menu />
    <div class="page-preview-component-container" ref="previewRef">
      <div :class="componentDemoName">
        <router-view />
      </div>
    </div>
    <div class="page-preview-console-container" ref="consoleRef">
      <preview-console />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { onBeforeRouteUpdate, RouteLocationNormalized } from 'vue-router'
import { useStore } from 'vuex'
import previewMenu from '@/components/Menu.vue'
import previewConsole from '@/components/Console.vue'
import { currentRoute } from '@/mixin'
import { humpToScribe } from '@/utils'

export default defineComponent({
  name: 'PagePreview',
  components: {
    previewMenu,
    previewConsole
  },
  setup() {
    const consoleRef = ref<Element>()
    const previewRef = ref<Element>()
    const componentDemoName = ref(
      `demo-${humpToScribe(currentRoute().name as string)}`
    )
    const store = useStore()
    store.dispatch('getThemePreviewConfig')
    store.dispatch('getComponentConsoleStyle', currentRoute().name)

    onBeforeRouteUpdate((to: RouteLocationNormalized) => {
      if (consoleRef.value) {
        consoleRef.value.scrollTop = 0
      }

      if (previewRef.value) {
        previewRef.value.scrollTop = 0
      }
      store.dispatch('getComponentConsoleStyle', to.name)

      componentDemoName.value = `demo-${humpToScribe(to.name as string)}`
    })
    return {
      componentDemoName,
      previewRef,
      consoleRef
    }
  }
})
</script>
