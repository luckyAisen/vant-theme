<template>
  <div class="app-preview-container">
    <Menu class="app-menu-container" />
    <div class="app-component-container">
      <router-view />
    </div>
    <AttrsConsole class="app-attrs-container" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { onBeforeRouteUpdate, RouteLocationNormalized } from 'vue-router'
import { useStore } from 'vuex'
import Menu from '@/components/Menu.vue'
import AttrsConsole from '@/components/Console.vue'
import { useRouteInfo } from '@/mixin'
export default defineComponent({
  name: 'Preview',
  components: {
    Menu,
    AttrsConsole
  },
  setup() {
    const store = useStore()
    store.dispatch('getCurrentThemeConfig')
    const routerName = useRouteInfo().name
    store.dispatch('transform', routerName)

    onBeforeRouteUpdate((to: RouteLocationNormalized) => {
      store.dispatch('transform', to.name)
    })
  }
})
</script>

<style lang="less" scope>
.app-preview-container {
  display: flex;
  height: 100%;

  .app-menu-container {
  }

  .app-component-container {
    flex: 1;
    padding: 24px;
    overflow-y: auto;
  }

  .app-attrs-container {
  }
}
</style>
