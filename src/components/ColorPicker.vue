<template>
  <n-ellipsis class="component-title">
    {{ varName }}
  </n-ellipsis>
  <n-color-picker
    :modes="['hex', 'rgb']"
    v-model:value="newValue"
    :on-complete="complete"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { NEllipsis, NColorPicker } from 'naive-ui'
import { useProps } from '@/mixin'

export default defineComponent({
  name: 'AttrInput',
  components: {
    NEllipsis,
    NColorPicker
  },
  props: useProps(),
  setup(props) {
    const store = useStore()
    const newValue = ref(props.varValue)
    const complete = (value: string) => {
      const payload = {
        index: props.index,
        varName: props.varName,
        varValue: value
      }
      store.dispatch('changeAttrValue', payload)
    }
    return {
      newValue,
      complete
    }
  }
})
</script>

<style lang="less" scope>
.component-title {
  width: 100%;
  margin-bottom: 12px;
}
</style>
