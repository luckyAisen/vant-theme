<template>
  <layout-provider
    :app="appProps"
    :header="headerProps"
    :router="false"
    @switch-scheme-color="switchSchemeColor"
    @switch-version="switchVersion"
  >
    <theme-view />
  </layout-provider>
</template>

<script lang="ts" setup>
import { computed, watch } from "vue";
import { storeToRefs } from "pinia";
import useMainStore from "@/stores";
import { APP_HEADER_LINKS } from "@/utils/constant";
import type { VersionInfo } from "@/utils/type";
import LayoutProvider from "@/components/LayoutProvider.vue";
import ThemeView from "./theme.vue";

const $store = useMainStore();

const { schemeColor, versionInfo, versionList } = storeToRefs($store);

const appProps = computed(() => ({
  dark: schemeColor.value === "dark",
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
};

const switchVersion = (info: VersionInfo) => {
  !info.disabled && $store.setVersion(info);
  window.location.href = `${import.meta.env.BASE_URL}src/page/theme/index.html`;
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
