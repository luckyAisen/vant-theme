<template>
  <div class="console-wrapper">
    <div class="console-container">
      <template v-if="componentStyle.length > 0">
        <div
          class="console-component-item"
          v-for="(component, index) in componentStyle"
          :key="component.varName"
        >
          <ConsoleColorPicker
            v-if="component.component === 'n-color-picker'"
            :index="index"
            :var-name="component.varName"
            :var-value="component.varValue"
          />

          <ConsoleInput
            v-if="component.component === 'n-input'"
            :index="index"
            :var-name="component.varName"
            :var-value="component.varValue"
          />
        </div>
      </template>
      <div class="console-component-no-data-text" v-else>没有样式变量</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import ConsoleColorPicker from '../components/ConsoleColorPicker.vue'
import ConsoleInput from '../components/ConsoleInput.vue'

export default defineComponent({
  name: 'PreviewConsole',
  components: { ConsoleColorPicker, ConsoleInput },
  setup() {
    const $store = useStore()
    const componentStyle = computed(() => $store.state.componentConsoleStyle)
    const menuActive = computed(() => $store.state.menuActive)
    const stopWatchMenuActive = watch(
      menuActive,
      newState => {
        $store.dispatch('getComponentConsoleStyle', newState)
      },
      { immediate: true }
    )
    onUnmounted(() => {
      stopWatchMenuActive()
    })
    return {
      componentStyle
    }
  }
})
</script>
