<template>
  <div class="page-home">
    <h1 class="home-title">vant-theme-preview</h1>
    <p>基于 Vant UI 的主题预览</p>
    <p>快速定制自定义主题</p>
    <p>
      <n-button type="primary" @click="toTheme"> 去使用 </n-button>
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { NButton } from 'naive-ui'

export default defineComponent({
  name: 'PageHome',
  components: {
    NButton
  },
  methods: {
    toTheme() {
      this.$router.push('/theme')
    }
  }
})
</script>
