<template>
  <div class="van-doc-demo-block">
    <div class="van-doc-demo-block__title">{{ title }}</div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ConsoleComponent',

  setup(props, { attrs }) {
    return {
      title: attrs.title
    }
  }
})
</script>
