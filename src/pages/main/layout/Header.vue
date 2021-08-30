<template>
  <n-space justify="space-between" align="center" class="app-header-container">
    <n-space class="header-logo">
      <router-link to="/"> {{ setting.title }} </router-link>
    </n-space>
    <n-space justify="space-between">
      <a
        v-for="link in setting.outerLink"
        :key="link.name"
        :href="link.url"
        target="_blank"
      >
        {{ link.name }}
      </a>
    </n-space>
  </n-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NSpace } from 'naive-ui'
import { APP_SETTING } from '@/constant'
export default defineComponent({
  name: 'AppHeader',
  components: {
    NSpace
  },
  setup() {
    return {
      setting: APP_SETTING
    }
  }
})
</script>
