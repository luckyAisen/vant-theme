<template>
  <div class="page-preview-component">
    <div v-show="menuActive === 'Base'">
      <color-base />
    </div>
    <div v-show="menuActive !== 'Base'" class="page-preview-iframe-container">
      <n-spin size="large" :show="isIframeReady">
        <iframe
          :src="iframeUrl"
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
import { MESSAGE_INIT_STYLES, MESSAGE_VANT_REPLACEPATH } from '@/constant'
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
    const iframeUrl = `${process.env.VUE_APP_PUBLICPATH}mobile-v3.html`
    const stopWatchMenuActive = watch(menuActive, newState => {
      iframeReady(() => {
        isIframeReady.value = false
        if (newState !== 'Base') {
          postMessageToChild({
            type: MESSAGE_VANT_REPLACEPATH,
            value: newState
          })
        }
      })
    })
    onMounted(() => {
      iframeReady(() => {
        postMessageToChild({
          type: MESSAGE_INIT_STYLES,
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
      iframeEl,
      iframeUrl
    }
  }
})
</script>
