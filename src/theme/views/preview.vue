<template>
  <n-layout has-sider position="absolute" style="top: 64px">
    <n-layout-sider
      bordered
      collapse-mode="transform"
      :collapsed-width="0"
      :width="300"
      :native-scrollbar="false"
    >
      <n-menu
        :options="menusList"
        default-expand-all
        :width="270"
        :value="menuActive"
        @update:value="menuChange"
      />
    </n-layout-sider>
    <n-layout>
      <div class="page-preview">
        <div class="page-preview-console-container">
          <div class="console-wrapper">
            <div class="console-operation">
              <div class="btn-container">
                <n-button type="error" @click="reset">重置所有</n-button>
                <n-button type="info" @click="download">下载</n-button>
              </div>
            </div>
            <div class="console-container">
              <template v-if="stylesList.length > 0">
                <div
                  class="console-component-item"
                  v-for="(component, index) in stylesList"
                  :key="component.varName + index"
                >
                  <console-color-picker
                    v-if="component.component === 'n-color-picker'"
                    :index="index"
                    :var-name="component.varName"
                    :var-value="component.varValue"
                    @complete="complete"
                  />

                  <console-input
                    v-if="component.component === 'n-input'"
                    :index="index"
                    :var-name="component.varName"
                    :var-value="component.varValue"
                    @complete="complete"
                  />
                </div>
              </template>
              <div class="console-component-no-data-text" v-else>
                没有样式变量
              </div>
            </div>
          </div>
        </div>
        <div class="page-preview-component-container">
          <div class="page-preview-component">
            <div class="page-preview-iframe-container">
              <n-spin size="large" :show="isIframeShow">
                <iframe
                  :src="iframeUrl"
                  frameborder="0"
                  style="height: 640px"
                  @load="iframeOnload"
                ></iframe>
              </n-spin>
            </div>
            <!-- <div v-show="menuActive === 'base'">
              <color-base />
            </div>
            <div
              v-show="menuActive !== 'base'"
              class="page-preview-iframe-container"
            >
              <n-spin size="large" :show="isIframeShow">
                <iframe
                  :src="iframeUrl"
                  frameborder="0"
                  style="height: 640px"
                ></iframe>
              </n-spin>
            </div> -->
          </div>
        </div>
      </div>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import { ref, watch, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import useMainStore from "../stores";
import {
  NLayout,
  NMenu,
  NLayoutSider,
  NSpin,
  NButton,
  useDialog,
  useMessage,
} from "naive-ui";
import ConsoleColorPicker from "../components/ConsoleColorPicker.vue";
import ConsoleInput from "../components/ConsoleInput.vue";
import {
  VANT_THEME_CSS_LINK_ID,
  VANT_THEME_CSS_MAP,
  VANT_THEME_MESSAGE_REPLACEPATH,
} from "@/utils/constant";
import { postMessageToChild } from "@/utils/message";
import {
  docBody,
  getPageCssVarByConfig,
  setPageCssVarByConfig,
  setPageCssVar,
  clearStyle,
} from "@/utils";
import type { Menu, Attr } from "@/utils/interface";

const $store = useMainStore();

const $dialog = useDialog();

const $message = useMessage();

const { menuActive, previewConfig } = storeToRefs($store);

const menusList = ref<Menu[]>([]);

const stylesList = ref<Attr[]>([]);

const iframeUrl = $store.getMobilePath();

const isIframeShow = ref(false);

let stopWatchMenuActive: { (): void; (): void };

const initialze = () => {
  insertVantCssLink(() => {
    const body = docBody;
    setPageCssVarByConfig(previewConfig.value, body);
    stopWatchMenuActive = watch(
      menuActive,
      (newState) => {
        getMenus();
        getStyles();
        postMessageToChild({
          type: VANT_THEME_MESSAGE_REPLACEPATH,
          value: newState,
        });
      },
      { immediate: true }
    );
  });
};

const insertVantCssLink = (cb: { (): void }) => {
  const version = $store.getVersionKey();
  const href = VANT_THEME_CSS_MAP[version];
  const element = document.createElement("link");
  element.id = VANT_THEME_CSS_LINK_ID;
  element.rel = "stylesheet";
  element.type = "text/css";
  element.href = href;
  (document.querySelector("head") as HTMLHeadElement).appendChild(element);
  element.onload = async () => {
    cb();
  };
};

const removeVantCssLink = () => {
  const self = document.querySelector(`#${VANT_THEME_CSS_LINK_ID}`) as Element;
  const parent = self.parentElement as Element;
  parent.removeChild(self);
};

const iframeOnload = () => {
  const iframe =
    document.querySelector("iframe")?.contentWindow?.document?.body;
  setPageCssVarByConfig(previewConfig.value, iframe);
};

const getMenus = async () => {
  const menus = await $store.getVersionMenus();
  menusList.value = menus;
};

const getStyles = async () => {
  const componentStyle = await $store.getComponentConsoleStyle(
    menuActive.value
  );
  if (componentStyle) {
    const styles = getPageCssVarByConfig(componentStyle.styles);
    stylesList.value = styles;
  } else {
    stylesList.value = [];
  }
};

const menuChange = async (hash: string) => {
  $store.menuChange(hash);
};

const complete = async (itemStyle: {
  index: number;
  varName: string;
  varValue: string;
}) => {
  const { index, varName, varValue } = itemStyle;
  stylesList.value[index].varValue = varValue;
  setPageCssVar(varName, varValue, document.body);
  setPageCssVar(
    varName,
    varValue,
    document.querySelector("iframe")?.contentWindow?.document?.body
  );
  await $store.setComponentConsoleStyle(itemStyle);
};

const reset = () => {
  $dialog.error({
    title: "提示",
    content: "确定要重置全部已更改的样式嘛？",
    positiveText: "确定",
    negativeText: "取消",
    maskClosable: false,
    onPositiveClick: async () => {
      $store.resetTheme();
      clearStyle(docBody);
      clearStyle(
        document.querySelector("iframe")?.contentWindow?.document?.body
      );
      await getStyles();
      $message.success("成功");
    },
  });
};

const download = async () => {
  const currentThemeInfo = await $store.getCurrentThemeInfo();
  currentThemeInfo && (await $store.downloadTheme(currentThemeInfo));
  $message.success("下载成功");
};

initialze();

onUnmounted(() => {
  removeVantCssLink();
  stopWatchMenuActive();
  clearStyle(docBody);
  clearStyle(document.querySelector("iframe")?.contentWindow?.document?.body);
  menuChange("base");
});
</script>
