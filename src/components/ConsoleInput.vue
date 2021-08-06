<template>
  <n-ellipsis class="console-component-title">
    {{ varName }}
  </n-ellipsis>
  <n-input type="input" v-model:value="model" @change="complete" />
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { NInput, NEllipsis } from 'naive-ui'
import { useProps, useConsoleComponent } from '@/mixin'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ConsoleInput',
  components: {
    NEllipsis,
    NInput
  },
  props: useProps(),
  setup(props) {
    const route = useRoute()
    const { model, handler } = useConsoleComponent(props)
    const complete = (value: string) => handler(value, route.name)
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
