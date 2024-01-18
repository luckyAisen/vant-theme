<template>
  <n-config-provider :locale="naiveLocale" :date-locale="naiveDateLocale">
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
import { useLocaleStore } from '@/stores/modules/locale';

defineOptions({
  name: 'App'
});

const localeStore = useLocaleStore();

const naiveLocale = computed(() => localeStore.naiveLocale);

const naiveDateLocale = computed(() => localeStore.naiveDateLocale);
</script>
