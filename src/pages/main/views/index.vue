<template>
  <div class="page-home">
    <h1 class="home-title">{{ setting.title }}</h1>
    <div v-html="setting.biref"></div>
    <p>
      <n-button type="primary" @click="toUse"> 去使用 </n-button>
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { NButton } from 'naive-ui'
import { APP_SETTING } from '@/constant'
export default defineComponent({
  name: 'PageHome',
  components: {
    NButton
  },
  setup() {
    const $route = useRouter()
    return {
      setting: APP_SETTING,
      toUse() {
        $route.push('/theme')
      }
    }
  }
})
</script>
