<template>
  <n-space justify="space-between" align="center" class="app-header-container">
    <n-space class="header-logo">
      <router-link to="/"> {{ getVersion?.label }} </router-link>
      <span> {{ getVersion?.remarks }}</span>
    </n-space>
    <n-space justify="space-between" align="center">
      <n-space justify="space-between">
        <a
          v-for="link in outerLink"
          :key="link.name"
          :href="link.url"
          target="_blank"
        >
          {{ link.name }}
        </a>
      </n-space>
      <n-dropdown
        trigger="hover"
        :options="versionList"
        :render-label="renderDropdownLabel"
        :on-select="dropdownSelect"
      >
        <n-button text icon-placement="right">
          {{ getVersion?.label }}
          <template #icon>
            <n-icon size="16"><chevron-down /></n-icon>
          </template>
        </n-button>
      </n-dropdown>
    </n-space>
  </n-space>
</template>

<script lang="ts" setup>
import { h } from "vue";
import useMainStore from "../stores";
import {
  NSpace,
  NDropdown,
  NButton,
  NIcon,
  type DropdownOption,
} from "naive-ui";
import { OUTERLINK as outerLink } from "@/utils/constant";
import { ChevronDown } from "@vicons/ionicons5";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import type { Version } from "@/utils/interface";

const $route = useRoute();

const $router = useRouter();

const $store = useMainStore();

const { versionList, getVersion } = storeToRefs($store);

const renderDropdownLabel = (option: DropdownOption) => {
  return h("div", {
    innerHTML: `${option.label}${option.remarks}`,
  });
};

const dropdownSelect = (key: Version) => {
  $store.versionChange(key);
  const { path } = $route;
  if (path !== "/theme") {
    $router.push("/theme");
  }
};
</script>
