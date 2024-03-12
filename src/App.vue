<template>
  <n-config-provider
    :locale="naiveLocale"
    :date-locale="naiveDateLocale"
    :theme="naiveTheme"
    :theme-overrides="naiveThemeOverrides"
  >
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <router-view />
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/modules/app';

defineOptions({
  name: 'App'
});

const appStore = useAppStore();

const naiveLocale = computed(() => appStore.naiveLocale);

const naiveDateLocale = computed(() => appStore.naiveDateLocale);

const naiveTheme = computed(() => appStore.naiveTheme);

const naiveThemeOverrides = computed(() => appStore.naiveThemeOverrides);

appStore.watchTheme();
</script>
