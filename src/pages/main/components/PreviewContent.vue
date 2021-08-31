<template>
  <div class="page-preview-component">
    <div v-show="menuActive === 'Base'">
      <color-base />
    </div>
    <div v-show="menuActive !== 'Base'" class="page-preview-iframe-container">
      <n-spin size="large" :show="isIframeReady">
        <iframe
          src="./mobile.html"
          frameborder="0"
          style="height: 640px"
          ref="iframeEl"
        ></iframe>
      </n-spin>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  computed,
  watch,
  onMounted,
  onUnmounted
} from 'vue'
import { useStore } from 'vuex'
import { NSpin } from 'naive-ui'
import ColorBase from './ColorBase.vue'
import { iframeReady, postMessageToChild } from '@/utils/iframeRouter'
export default defineComponent({
  name: 'PreviewContent',
  components: {
    NSpin,
    ColorBase
  },
  setup() {
    const $store = useStore()
    const menuActive = computed(() => $store.state.menuActive)
    const isIframeReady = ref(true)
    const iframeEl = ref(null)
    const stopWatchMenuActive = watch(menuActive, newState => {
      iframeReady(() => {
        isIframeReady.value = false
        if (newState !== 'Base') {
          postMessageToChild({
            type: 'replacePath',
            value: newState
          })
        }
      })
    })
    onMounted(() => {
      iframeReady(() => {
        postMessageToChild({
          type: 'initStyles',
          value: JSON.stringify($store.state.themePreviewConfig)
        })
      })
    })
    onUnmounted(() => {
      document.documentElement.style = {}
      stopWatchMenuActive()
    })
    return {
      menuActive,
      isIframeReady,
      iframeEl
    }
  }
})
</script>
