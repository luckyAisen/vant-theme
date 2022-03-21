<template>
  <n-spin
    v-if="!loadVantCssState || !iframeState || !createRouteState"
    :show="true"
    class="vant-theme-app-loading"
  />

  <layout-provider
    v-show="loadVantCssState && iframeState && createRouteState"
    :app="appProps"
    :header="headerProps"
    :router="false"
    @switch-scheme-color="switchSchemeColor"
    @switch-version="switchVersion"
  >
    <console-panel />
  </layout-provider>
</template>

<script lang="ts" setup>
import { NSpin } from "naive-ui";
import { computed, watch } from "vue";
import { storeToRefs } from "pinia";
import useMainStore from "@/stores";
import { APP_BASE_URL, APP_HEADER_LINKS } from "@/utils/constant";
import type { VersionInfo } from "@/utils/type";
import LayoutProvider from "@/components/LayoutProvider.vue";
import ConsolePanel from "./ConsolePanel.vue";
import { syncThemeToChild } from "@/utils/iframeSync";

const $store = useMainStore();

const {
  schemeColor,
  language,
  versionInfo,
  versionList,
  loadVantCssState,
  iframeState,
  createRouteState,
} = storeToRefs($store);

const appProps = computed(() => ({
  schemeColor: schemeColor.value,
  language: language.value,
}));

const headerProps = computed(() => ({
  title: versionInfo.value.title,
  subtitle: versionInfo.value.subtitle,
  links: APP_HEADER_LINKS,
  schemeColor: schemeColor.value,
  version: versionInfo.value.key,
  versionList: versionList.value,
}));

const switchSchemeColor = () => {
  const newColor = schemeColor.value === "dark" ? "light" : "dark";
  $store.setSchemeColor(newColor);
  syncThemeToChild(newColor);
};

const switchVersion = (info: VersionInfo) => {
  if (!info.disabled) {
    $store.setVersion(info);
    window.location.href = `${APP_BASE_URL}`;
  }
};

watch(
  () => schemeColor.value,
  (newColor, oldColor) => {
    $store.setSchemeColor(newColor);
    document.body.classList.remove(`vant-theme-${oldColor}`);
    document.body.classList.add(`vant-theme-${newColor}`);
  },
  {
    immediate: true,
  }
);

$store.init();
</script>
