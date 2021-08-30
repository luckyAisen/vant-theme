<template>
  <div class="page-preview-component">
    <div v-show="menuActive === 'Base'">
      <color-base />
    </div>
    <div v-show="menuActive !== 'Base'" class="page-preview-iframe-container">
      <n-spin size="large" :show="isIframeReady">
        <iframe
          src="/mobile.html"
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
      const iframe = document.querySelector('iframe')
      if (iframe && iframe.contentWindow && newState !== 'Base') {
        iframe.contentWindow.postMessage(
          {
            type: 'replacePath',
            value: newState
          },
          '*'
        )
      }
    })
    onMounted(() => {
      window.addEventListener('message', event => {
        if (event.data.type === 'iframeReady') {
          const style = document.createElement('style')
          style.textContent = `.demo-nav__back { display: none; }`
          iframeEl.value.contentDocument.head.appendChild(style)
          isIframeReady.value = false
        }
      })
    })
    onUnmounted(() => {
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
