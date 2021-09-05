<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <n-layout class="app-main-container">
            <!-- header -->
            <n-layout-header style="padding: 10px 24px" bordered>
              <app-header />
            </n-layout-header>
            <n-layout-content>
              <router-view />
            </n-layout-content>
          </n-layout>
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider,
  NLayout,
  NLayoutHeader
} from 'naive-ui'
import AppHeader from './Header.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    NLoadingBarProvider,
    NMessageProvider,
    NNotificationProvider,
    NDialogProvider,
    NLayout,
    NLayoutHeader,
    AppHeader
  }
})
</script>
