<template>
  <n-ellipsis class="component-title">
    {{ varName }}
  </n-ellipsis>
  <n-input type="input" placeholder="中" v-model:value="newValue" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { NInput, NEllipsis } from 'naive-ui'
import { useProps } from '@/mixin'

export default defineComponent({
  name: 'AttrInput',
  components: {
    NInput,
    NEllipsis
  },
  props: useProps(),
  setup(props) {
    const newValue = ref(props.varValue)
    return {
      newValue
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
