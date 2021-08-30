<template>
  <div class="page-preview-component">
    <div v-show="trigger === 'Base'">
      <color-base />
    </div>
    <div v-show="trigger !== 'Base'" class="page-preview-iframe-container">
      <iframe src="/mobile.html" frameborder="0" style="height: 640px"></iframe>
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
import ColorBase from './ColorBase.vue'
export default defineComponent({
  name: 'PreviewContent',
  components: {
    ColorBase
  },
  setup() {
    const $store = useStore()
    const trigger = computed(() => $store.state.menuActive)
    const stopWatch = watch(trigger, newState => {
      const iframe = document.querySelector('iframe')
      if (iframe && newState !== 'Base') {
        iframe.contentWindow.postMessage({
          type: 'replacePath',
          value: newState
        })
      }
    })
    onMounted(() => {
      window.addEventListener('message', event => {
        if (event.data.type === 'iframeReady') {
          $store.dispatch('setIframeReady')
        }
      })
    })
    onUnmounted(() => {
      stopWatch()
    })
    return {
      trigger: ref(trigger)
    }
  }
})
</script>
