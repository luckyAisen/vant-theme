<template>
  <n-menu
    :options="menuOptions"
    default-expand-all
    :width="270"
    :value="value"
    @update:value="handleUpdateValue"
  />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { NMenu } from 'naive-ui'
import { APP_MENU_LIST as menuOptions } from '@/constant'

export default defineComponent({
  name: 'PreviewMenu',
  components: { NMenu },
  setup() {
    const $store = useStore()
    return {
      value: computed(() => $store.state.menuActive),
      menuOptions,
      handleUpdateValue(key: string) {
        $store.dispatch('menuChange', key)
      }
    }
  }
})
</script>
