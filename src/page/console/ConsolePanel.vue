<template>
  <div class="vant-theme-console-panel" v-if="versionCurrentTheme">
    <div class="console-panel-header">
      <div class="console-panel-header__top">
        <div class="console-panel-header__top-name">
          当前主题：{{ versionCurrentTheme.name }}
        </div>
        <div class="console-panel-header__top-btn">
          <n-button type="error" size="small" @click="resetVariables">
            重置所有
          </n-button>
          <n-button type="info" size="small" @click="download">
            下载主题
          </n-button>
          <n-spin size="small" v-if="false" />
        </div>
      </div>
    </div>
    <div class="console-panel-container">
      <console-nav :options="menuOption" />
      <console-mobile :src="mobileUrl" @load="iframeLoad" />
      <console-var :options="styleOption" @complete="setVariables" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, nextTick, toRaw } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { zhCNMenu, enUSMenu } from "./router";
import useMainStore from "@/stores";
import { NButton, NSpin, useMessage, useDialog } from "naive-ui";
import { getCssVar, setCssVar, setCssVarByConfig, clearCssVar } from "@/utils/";
import { APP_BASE_URL } from "@/utils/constant";
import ConsoleNav from "./ConsoleNav.vue";
import ConsoleMobile from "./ConsoleMobile.vue";
import ConsoleVar from "./ConsoleVar.vue";
import getStyles from "@/json/styles";
import type { Menu, Style } from "@/utils/type";
import type { Props as VariablesProps } from "./VariablesComponent.vue";
import {
  syncVariablesInitToChild,
  syncVariablesSetToChild,
  syncVariablesClearToChild,
  syncThemeToChild,
} from "@/utils/iframeSync";

const $route = useRoute();

const $router = useRouter();

const $store = useMainStore();

const $message = useMessage();

const $dialog = useDialog();

const {
  schemeColor,
  versionInfo,
  versionCurrentTheme,
  language,
  listenSyncPathState,
  addRouteState,
} = storeToRefs($store);

// const mobileUrl = computed(() => {
//   // return `${APP_BASE_URL}src/page/mobile/${versionInfo.value.key}.html#${menuActive.value}`;
//   return `${APP_BASE_URL}src/page/mobile/${versionInfo.value.key}.html#/${language.value}`;
// });

const mobileUrl = `${APP_BASE_URL}src/page/mobile/${versionInfo.value.key}.html#/${language.value}`;

const menuOption = ref<Menu[]>([]);

let versionStyle: Style[] = [];

// const styleOption = ref<Style>();

let styleOption = reactive<Style>({ label: "", value: "", children: [] });

const getVersionMenu = async () => {
  const menuMap = {
    "zh-CN": zhCNMenu,
    "en-US": enUSMenu,
  };
  const menu = menuMap[language.value];
  menuOption.value = menu;
};

const getVersionStyle = async () => {
  const allStyle = await getStyles(versionInfo.value.key, language.value);
  versionStyle = allStyle;
};

const getStyleOption = async () => {
  const currentStyle = [...versionStyle].filter(
    (item) => item.value === $route.path
  )[0];
  if (currentStyle) {
    currentStyle.children = currentStyle.children?.map((item) => {
      const value = getCssVar(item.label, versionInfo.value.key);
      const type =
        value.startsWith("#") ||
        value.startsWith("rgba") ||
        value.startsWith("hsl")
          ? "n-color-picker"
          : "n-input";
      return {
        label: item.label,
        value,
        type,
      };
    });
    // styleOption.value = currentStyle;
    // console.log(styleOption.value);
    styleOption.label = currentStyle.label;
    styleOption.value = currentStyle.value;
    styleOption.children = currentStyle.children;
    // console.log(currentStyle);
  } else {
    // styleOption.value = undefined;
    // styleOption = { label: "", value: "", children: [] };
    styleOption.label = "";
    styleOption.value = "";
    styleOption.children = [];
    // debugger;
    // if (styleOption.children) {
    //   styleOption.children.length = 0;
    // }
  }
};

const initVariables = () => {
  const config = toRaw(versionCurrentTheme.value.config);
  if (config) {
    setCssVarByConfig(config, versionInfo.value.key);
    setTimeout(() => {
      syncVariablesInitToChild(config, versionInfo.value.key);
    }, 0);
  }
};

const setVariables = (payload: VariablesProps) => {
  const { index, label, value } = payload;
  setCssVar(label, value, versionInfo.value.key);
  syncVariablesSetToChild({ label, value }, versionInfo.value.key);
  if (styleOption.children) {
    // styleOption.value?.children;
    styleOption.children[index].value = value;
  }
  $store.setVariables({ [label]: value });
};

const resetVariables = () => {
  $dialog.info({
    title: "提示",
    content: "确定要重置当前主题所有变量嘛？",
    positiveText: "确定",
    negativeText: "取消",
    maskClosable: false,
    onPositiveClick: async () => {
      clearCssVar(versionInfo.value.key);
      syncVariablesClearToChild(versionInfo.value.key);
      $store.clearVariables(versionCurrentTheme.value.id as number);
      nextTick(() => {
        getStyleOption();
        $message.success("重置成功");
      });
    },
  });
};

const download = () => {
  const id = versionCurrentTheme.value.id;
  id &&
    $store.downloadTheme(id).then(() => {
      $message.success("下载成功");
    });
};

const init = async () => {
  if (!versionCurrentTheme.value) {
    $message.error("主题不存在", {
      duration: 1800,
      onLeave: () => {
        $store.clearCurrentConfig();
        $store.clearCurrentConfigId();
        window.location.href = `${APP_BASE_URL}`;
      },
    });
  } else {
    getVersionMenu();
    getVersionStyle().then(getStyleOption);
  }
};

const iframeLoad = () => {
  initVariables();
  syncThemeToChild(schemeColor.value);
};

init();

watch(
  () => $route.path,
  () => {
    if (listenSyncPathState.value) {
      getStyleOption();
      $store.setListenSyncPathState(false);
    }
  }
);

watch(
  () => schemeColor.value,
  (color) => {
    if (versionInfo.value.key !== "v4" && color === "dark") {
      versionInfo.value.key;
      $message.warning(`vant ${versionInfo.value.key} 版本不支持深色模式`);
    }
  },
  {
    immediate: true,
  }
);
</script>
