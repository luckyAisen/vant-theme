<template>
  <div class="home">
    <h1 class="home-title">vant-theme-preview</h1>
    <p>基于 Vant UI 的主题预览</p>
    <p>快速定制自定义主题</p>
    <p>
      <n-button type="primary" @click="toPreview"> 去使用 </n-button>
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { NButton } from 'naive-ui'

export default defineComponent({
  name: 'Home',
  components: {
    NButton
  },
  methods: {
    toPreview() {
      this.$router.push('/preview')
    }
  }
})
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .home-title {
    font-size: 38px;
  }
}
</style>
