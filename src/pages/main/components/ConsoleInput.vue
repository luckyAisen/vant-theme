<template>
  <n-ellipsis class="console-component-title">
    {{ varName }}
  </n-ellipsis>
  <n-input type="input" v-model:value="model" @change="complete" />
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { NInput, NEllipsis } from 'naive-ui'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ConsoleInput',
  components: {
    NEllipsis,
    NInput
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
