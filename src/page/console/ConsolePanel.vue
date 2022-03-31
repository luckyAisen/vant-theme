<template>
  <div class="vant-theme-console-panel" v-if="versionCurrentTheme">
    <div class="console-panel-header">
      <div class="console-panel-header__top">
        <div class="console-panel-header__top-name">
          当前主题：{{ versionCurrentTheme.name }}
        </div>
        <div class="console-panel-header__top-btn">
          <n-tooltip trigger="hover" v-if="lessCompileState">
            <template #trigger>
              <n-spin size="small" />
            </template>
            less 编译中
          </n-tooltip>
          <n-button type="error" size="small" @click="resetVariables">
            重置所有
          </n-button>
          <n-button type="info" size="small" @click="download">
            下载主题
          </n-button>
        </div>
      </div>
    </div>

    <div class="console-panel-container">
      <console-nav :options="menuOption" />
      <console-mobile
        :src="mobileUrl"
        :loading="mobileLoading"
        @load="iframeLoad"
      />
      <console-var :options="styleOption" @complete="setVariables" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, nextTick, toRaw } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useFetch } from "@vueuse/core";
import useMainStore from "@/stores";
import { NButton, NSpin, useMessage, useDialog, NTooltip } from "naive-ui";
import { getCssVar, setCssVar, setCssVarByConfig, clearCssVar } from "@/utils/";
import { APP_BASE_URL, VANT_VERSION_CSS } from "@/utils/constant";
import ConsoleNav from "./ConsoleNav.vue";
import ConsoleMobile from "./ConsoleMobile.vue";
import ConsoleVar from "./ConsoleVar.vue";
import getMenu from "@/json/menus";
import getStyles from "@/json/styles";
import type { Menu, StringProp, Style } from "@/utils/type";
import type { Props as VariablesProps } from "./VariablesComponent.vue";
import {
  syncVariablesInitToChild,
  syncVariablesSetToChild,
  syncVariablesClearToChild,
  syncThemeToChild,
} from "@/utils/iframeSync";

const $route = useRoute();

const $store = useMainStore();

const $message = useMessage();

const $dialog = useDialog();

const {
  schemeColor,
  versionInfo,
  versionCurrentTheme,
  language,
  listenSyncPathState,
} = storeToRefs($store);

// const mobileUrl = computed(() => {
//   // return `${APP_BASE_URL}src/page/mobile/${versionInfo.value.key}.html#${menuActive.value}`;
//   return `${APP_BASE_URL}src/page/mobile/${versionInfo.value.key}.html#/${language.value}`;
// });

const lessCompileState = ref<boolean>(false);

const menuLoading = ref<boolean>(true);

const menuOption = ref<Menu[]>([]);

const mobileUrl = `${APP_BASE_URL}src/page/mobile/${versionInfo.value.key}.html#/${language.value}`;

const mobileLoading = ref<boolean>(true);

let versionStyle: Style[] = [];

// const styleOption = ref<Style>();

let styleOption = reactive<Style>({ label: "", value: "", children: [] });

const getVersionMenu = async () => {
  const menu = await getMenu(versionInfo.value.key, language.value);
  menuOption.value = menu;
  menuLoading.value = false;
  console.log("current menu:", menu);
};

const getVantVerionStyle = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = VANT_VERSION_CSS[versionInfo.value.key];
    document.head.appendChild(link);
    link.onload = function () {
      console.log("vant css loading complete");
      $store.setLoadVantCssState(true);
      resolve();
    };
    link.onerror = function () {
      reject();
    };
  });
};

const getVersionStyle = async () => {
  versionStyle = await getStyles(versionInfo.value.key, language.value);
  console.log("current version all css variables:", versionStyle);
};

const getStyleOption = async () => {
  const currentStyle = [...versionStyle].filter(
    (item) => item.value === $route.path
  )[0];
  if (currentStyle) {
    currentStyle.children = currentStyle.children?.map((item) => {
      // const newLabel =
      //   versionInfo.value.key === "v2"
      //     ? item.label.replace("@", "--van-")
      //     : item.label;
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
  }
  console.log(`current component:`, styleOption);
};

const initVariables = () => {
  const version = versionInfo.value.key;
  const config = toRaw(versionCurrentTheme.value.config);
  if (config) {
    setCssVarByConfig(config, versionInfo.value.key);
    setTimeout(() => {
      if (version === "v2" && Object.keys(config).length) {
        setLessCompileState(true);
        const payload = versionCurrentTheme.value.config as StringProp;
        fetchStyle(payload).then((style) => {
          syncVariablesInitToChild(style, versionInfo.value.key);
          setLessCompileState(false);
        });
      } else {
        syncVariablesInitToChild(config, versionInfo.value.key);
      }
    }, 0);
  }
};

const setVariables = (payload: VariablesProps) => {
  const version = versionInfo.value.key;
  const { index, label, value } = payload;
  setCssVar(label, value, version);
  if (version === "v2") {
    setLessCompileState(true);
    const payload = {
      ...versionCurrentTheme.value.config,
      [label]: value,
    };
    fetchStyle(payload).then((style) => {
      syncVariablesInitToChild(style, version);
      setLessCompileState(false);
    });
  } else {
    syncVariablesSetToChild({ label, value }, version);
  }
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

const fetchStyle = async (payload: StringProp): Promise<string> => {
  // return await useFetch<string>(
  //   "https://vant-theme-service.vercel.app/api/update-theme"
  // )
  //   .post(toRaw(payload))
  //   .text()
  //   .then(({ data }) => {
  //     console.log(data.value);
  //     return data.value as string;
  //   });

  const res = await useFetch<string>(
    "https://vant-theme-service.vercel.app/api/update-theme"
  )
    .post(toRaw(payload))
    .text();
  return res.data.value as string;
};

const setLessCompileState = async (state: boolean) => {
  lessCompileState.value = state;
};

const init = async () => {
  if (!versionCurrentTheme.value) {
    $message.error("主题不存在", {
      duration: 1800,
      onLeave: () => {
        $store.clearCurrentConfigId();
        window.location.href = `${APP_BASE_URL}`;
      },
    });
  } else {
    await getVantVerionStyle();
  }
};

const iframeLoad = () => {
  getVersionMenu();
  getVersionStyle().then(getStyleOption);
  initVariables();
  syncThemeToChild(schemeColor.value);
  $store.setIframeState(true);
  $store.setCreateRouteState(true);
  mobileLoading.value = false;
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
