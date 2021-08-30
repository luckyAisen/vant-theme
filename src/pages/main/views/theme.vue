<template>
  <div class="page-theme">
    <div class="page-theme-container">
      <p class="theme-title">所有主题</p>
      <ul class="theme-list">
        <li class="card-item" v-for="item in themeList" :key="item.id">
          <div class="card-line">
            <div
              class="line-2"
              :style="{
                backgroundColor:
                  item.theme['--van-red'] || defaultColor['--van-red']
              }"
            ></div>
            <div
              class="line-2"
              :style="{
                backgroundColor:
                  item.theme['--van-blue'] || defaultColor['--van-blue']
              }"
            ></div>
          </div>
          <div class="card-line">
            <div
              class="line-4"
              :style="{
                backgroundColor:
                  item.theme['--van-orange'] || defaultColor['--van-orange']
              }"
            ></div>
            <div
              class="line-4"
              :style="{
                backgroundColor:
                  item.theme['--van-orange-dark'] ||
                  defaultColor['--van-orange-dark']
              }"
            ></div>
            <div
              class="line-4"
              :style="{
                backgroundColor:
                  item.theme['--van-orange-light'] ||
                  defaultColor['--van-orange-light']
              }"
            ></div>
            <div
              class="line-4"
              :style="{
                backgroundColor:
                  item.theme['--van-green'] || defaultColor['--van-green']
              }"
            ></div>
          </div>
          <div class="card-info">
            <div class="card-info-header">
              <span class="info-name">{{ item.name }}</span>
              <n-dropdown
                trigger="click"
                :options="options"
                @select="
                  key => {
                    handleSelect(key, item)
                  }
                "
                placement="bottom-start"
              >
                <span class="info-more" :key="item.id">...</span>
              </n-dropdown>
            </div>
            <div class="card-info-description">
              最近修改 {{ transitionTime(item.update) }}
            </div>
          </div>
        </li>
        <li class="card-add" @click="useModalOpen('add')">
          <n-icon size="56" color="#606266">
            <add-sharp />
          </n-icon>
          <span>新增主题</span>
        </li>
      </ul>
    </div>
  </div>

  <modal-component
    :show="showModal"
    @close="useModalClose"
    @confirm="useModalConfirm"
  />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ModalComponent from '../components/Modal.vue'
import { NDropdown, NIcon, useDialog, useMessage } from 'naive-ui'
import { AddSharp } from '@vicons/ionicons5'
import { DEFAULT_COLOR } from '@/constant'
import { transitionTime } from '@/utils'
import { Theme } from '@/constant/interface'

export default defineComponent({
  name: 'PageTheme',
  components: {
    NDropdown,
    NIcon,
    AddSharp,
    ModalComponent
  },
  setup() {
    const dialog = useDialog()
    const message = useMessage()
    const $store = useStore()
    const $router = useRouter()
    const themeList = computed(() => $store.state.themeUserConfig)
    const showModal = ref(false)
    const options = [
      {
        label: '查看主题',
        key: 'see'
      },
      {
        label: '修改命名',
        key: 'edit'
      },
      {
        label: '复制主题',
        key: 'copy'
      },
      {
        label: '删除主题',
        key: 'delete'
      },
      {
        label: '下载主题文件',
        key: 'dowalond'
      }
    ]
    let optionType = ''
    let currentTheme: Theme = {}
    const useModalOpen = (type: string) => {
      optionType = type
      showModal.value = true
    }
    const useModalClose = () => {
      showModal.value = false
    }
    const handleSelect = (key: string, theme: Theme) => {
      optionType = key
      currentTheme = theme
      switch (key) {
        case 'see':
          $store.dispatch('useTheme', theme)
          $router.push('/preview')
          break
        case 'edit':
          useModalOpen(key)
          break
        case 'copy':
          useModalOpen(key)
          break
        case 'delete':
          dialog.error({
            title: '我是一个提醒',
            content: '真的要删除我咩？o(╥﹏╥)o',
            positiveText: '狠心删除',
            negativeText: '不删了',
            maskClosable: false,
            onPositiveClick: () => {
              $store.dispatch('deleteTheme', currentTheme.id)
              message.success('emmm，行吧，再见啦👋')
            }
          })
          break
        case 'dowalond':
          $store.dispatch('downloadTheme', currentTheme)
      }
    }
    const useModalConfirm = ({ nameValue: name }: { nameValue: string }) => {
      const type = optionType
      switch (type) {
        case 'add':
          $store.dispatch('addTheme', { name }).then(theme => {
            $store.dispatch('useTheme', theme)
            $router.push('/preview')
          })
          break
        case 'edit':
          $store.dispatch('updateTheme', {
            id: currentTheme.id,
            name,
            theme: currentTheme.theme,
            update: currentTheme.update
          })
          break
        case 'copy':
          $store.dispatch('addTheme', {
            name,
            theme: currentTheme.theme
          })
          break
      }
    }
    return {
      defaultColor: DEFAULT_COLOR,
      transitionTime,
      themeList,
      options,
      showModal,
      useModalOpen,
      useModalClose,
      useModalConfirm,
      handleSelect
    }
  }
})
</script>
