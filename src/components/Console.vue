<template>
  <div class="console-wrapper">
    <div class="console-container">
      <div
        class="console-component-item"
        v-for="(component, index) in componentStyle"
        :key="component.varName"
      >
        <ConsoleColorPicker
          :index="index"
          :var-name="component.varName"
          :var-value="component.varValue"
          v-if="component.component === 'n-color-picker'"
        />

        <ConsoleInput
          :index="index"
          :var-name="component.varName"
          :var-value="component.varValue"
          v-if="component.component === 'n-input'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import ConsoleColorPicker from '@/components/ConsoleColorPicker.vue'
import ConsoleInput from '@/components/ConsoleInput.vue'

export default defineComponent({
  name: 'ConsoleComponent',
  components: {
    ConsoleColorPicker,
    ConsoleInput
  },
  setup() {
    const store = useStore()
    const componentStyle = computed(() => store.state.componentConsoleStyle)
    return {
      componentStyle
    }
  }
})
</script>
