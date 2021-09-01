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
import { defineComponent, ref, watchEffect } from 'vue'
import { NEllipsis, NColorPicker } from 'naive-ui'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ConsoleColorPicker',
  components: {
    NEllipsis,
    NColorPicker
  },
  props: {
    index: {
      type: Number
    },
    varName: {
      type: String,
      default: ''
    },
    varValue: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const $store = useStore()
    const model = ref(props.varValue)
    const complete = async (value: string) => {
      const { index, varName } = props
      const payload = {
        index,
        varName,
        varValue: value
      }
      await $store.dispatch('setComponentConsoleStyle', payload)
    }
    watchEffect(() => {
      model.value = props.varValue
    })
    return {
      model,
      complete
    }
  }
})
</script>
