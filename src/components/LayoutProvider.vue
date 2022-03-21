<template>
  <app-provider
    :scheme-color="$props.app.schemeColor"
    :language="$props.app.language"
  >
    <div class="vant-theme-app">
      <app-header
        :links="$props.header.links"
        :title="$props.header.title"
        :subtitle="$props.header.subtitle"
        :scheme-color="$props.header.schemeColor"
        :version="$props.header.version"
        :versionList="$props.header.versionList"
        @switch-scheme-color="$emit('switch-scheme-color')"
        @switch-version="(info) => $emit('switch-version', info)"
      />
      <div class="vant-theme-container">
        <template v-if="$props.router">
          <router-view />
        </template>
        <slot></slot>
      </div>
    </div>
  </app-provider>
</template>

<script lang="ts" setup>
import AppProvider, { type Props as AppProviderProps } from "./AppProvider.vue";
import { RouterView } from "vue-router";
import type { VersionInfo } from "@/utils/type";
import AppHeader, { type Props as HeaderProps } from "./AppHeader.vue";

interface Props {
  app: AppProviderProps;
  header: HeaderProps;
  router?: boolean;
}

const $props = withDefaults(defineProps<Props>(), {
  router: true,
});

const $emit = defineEmits<{
  (e: "switch-scheme-color"): void;
  (e: "switch-version", version: VersionInfo): void;
}>();
</script>
