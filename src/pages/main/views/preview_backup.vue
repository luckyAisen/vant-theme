<template>
  <div class="wrapper">
    <iframe src="/mobile.html" frameborder="0" style="height: 640px"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { iframeReady } from '@/utils/iframe'

export default defineComponent({
  setup() {
    // onMounted(() => {
    //   // 获取变量
    //   iframeReady(() => {
    //     const iframe = document.querySelector('iframe')
    //     if (iframe) {
    //       // setTimeout(() => {
    //       iframe.contentWindow.postMessage(
    //         {
    //           type: 'replacePath',
    //           value: '/zh-CN/button'
    //         },
    //         '*'
    //       )
    //       // }, 1000)
    //       setTimeout(() => {
    //         iframe.contentWindow.postMessage(
    //           {
    //             type: 'test',
    //             value: '123123'
    //           },
    //           '*'
    //         )
    //       }, 2000)
    //     }
    //   })
    // })
  }
})
</script>

<style lang="less" scoped>
.wrapper {
}
</style>
