<template>
  <n-config-provider
    :theme="dark"
    :theme-overrides="themeOverrides"
    :locale="locale"
    :date-locale="dateLocale"
  >
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <slot></slot>
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import {
  NConfigProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider,
  darkTheme,
  zhCN,
  dateZhCN,
  type GlobalTheme,
  type GlobalThemeOverrides,
  type NLocale,
  type NDateLocale,
} from "naive-ui";
import type { SchemeColor, Language } from "@/utils/type";

export interface Props {
  schemeColor: SchemeColor;
  language: Language;
}

const $props = defineProps<Props>();

const dark = ref<GlobalTheme | null>();

const themeOverrides = ref<GlobalThemeOverrides | null>();

const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#2080f0",
    primaryColorHover: "#4098fc",
    primaryColorPressed: "#1060c9",
    primaryColorSuppl: "#1060c9",
  },
};

const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#70c0e8",
    primaryColorHover: "#8acbec",
    primaryColorPressed: "#66afd3",
    primaryColorSuppl: "#66afd3",
  },
};

const locale = ref<NLocale | null>(null);

const dateLocale = ref<NDateLocale | null>(null);

watchEffect(() => {
  if ($props.schemeColor === "dark") {
    dark.value = darkTheme;
    themeOverrides.value = darkThemeOverrides;
  } else {
    dark.value = null;
    themeOverrides.value = lightThemeOverrides;
  }
  locale.value = $props.language === "en-US" ? null : zhCN;
  dateLocale.value = $props.language === "en-US" ? null : dateZhCN;
});
</script>
