<template>
  <div class="console-wrapper">
    <div class="console-operation">
      <div class="revert-container">
        <n-icon size="24">
          <return-up-back-outline />
        </n-icon>
      </div>
      <div class="btn-container">
        <n-button type="error" @click="reset">重置所有</n-button>
        <n-button type="info" @click="download">下载</n-button>
      </div>
    </div>
    <div class="console-container">
      <template v-if="componentStyle.length > 0">
        <div
          class="console-component-item"
          v-for="(component, index) in componentStyle"
          :key="component.varName + index"
        >
          <ConsoleColorPicker
            v-if="component.component === 'n-color-picker'"
            :index="index"
            :var-name="component.varName"
            :var-value="component.varValue"
          />

          <ConsoleInput
            v-if="component.component === 'n-input'"
            :index="index"
            :var-name="component.varName"
            :var-value="component.varValue"
          />
        </div>
      </template>
      <div class="console-component-no-data-text" v-else>没有样式变量</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { NIcon, NButton, useDialog, useMessage } from 'naive-ui'
import { ReturnUpBackOutline } from '@vicons/ionicons5'
import ConsoleColorPicker from '../components/ConsoleColorPicker.vue'
import ConsoleInput from '../components/ConsoleInput.vue'

export default defineComponent({
  name: 'PreviewConsole',
  components: {
    NIcon,
    ReturnUpBackOutline,
    NButton,
    ConsoleColorPicker,
    ConsoleInput
  },
  setup() {
    const $store = useStore()
    const dialog = useDialog()
    const message = useMessage()
    const componentStyle = computed(() => $store.state.componentConsoleStyle)
    const menuActive = computed(() => $store.state.menuActive)
    const reset = () => {
      dialog.error({
        title: '我是一个提醒',
        content: '要重置全部已更改的样式嘛？没有后悔药哦~',
        positiveText: '是的',
        negativeText: '不了',
        maskClosable: false,
        onPositiveClick: () => {
          $store.dispatch('resetTheme')
          message.success('好了，现在我变回原来的我了')
        }
      })
    }
    const download = () => {
      $store.dispatch('downloadTheme')
    }
    const stopWatchMenuActive = watch(
      menuActive,
      newState => {
        $store.dispatch('getComponentConsoleStyle', newState)
      },
      { immediate: true }
    )
    onUnmounted(() => {
      stopWatchMenuActive()
    })
    return {
      componentStyle,
      reset,
      download
    }
  }
})
</script>
