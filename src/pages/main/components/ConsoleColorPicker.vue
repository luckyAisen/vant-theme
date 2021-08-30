<template>
  <n-ellipsis class="console-component-title">
    {{ varName }}
  </n-ellipsis>
  <n-color-picker
    :modes="['hex', 'rgb']"
    v-model:value="model"
    @complete="complete"
  />
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { NEllipsis, NColorPicker } from 'naive-ui'
import { useProps, useConsoleComponent } from '@/mixin'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ConsoleColorPicker',
  components: {
    NEllipsis,
    NColorPicker
  },
  props: useProps(),
  setup(props) {
    const route = useRoute()
    const { model, handler } = useConsoleComponent(props)
    const complete = (value: string) => {
      debugger
      handler(value, route.name)
    }
    watch(
      () => props.varValue,
      () => {
        model.value = props.varValue
      }
    )
    return {
      model,
      complete
    }
  }
})
</script>
