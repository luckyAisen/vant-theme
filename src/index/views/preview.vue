<template>
  <n-layout has-sider position="absolute" style="top: 64px">
    <n-layout-sider
      bordered
      show-trigger
      collapse-mode="transform"
      :collapsed-width="0"
      :width="270"
      :native-scrollbar="false"
    >
      <n-menu
        :options="menuOptions"
        default-expand-all
        :width="270"
        :value="menuActive"
        @update:value="handleMenuChange"
      />
    </n-layout-sider>
    <n-layout>
      <div class="page-preview">
        <div class="page-preview-component-container">
          <!-- <preview-content /> -->
          <div class="page-preview-component">
            <div v-show="menuActive === 'Base'">
              <color-base />
            </div>
            <div
              v-show="menuActive !== 'Base'"
              class="page-preview-iframe-container"
            >
              <n-spin size="large" :show="isIframeReady">
                <iframe
                  :src="iframeUrl"
                  frameborder="0"
                  style="height: 640px"
                  ref="iframeEl"
                ></iframe>
              </n-spin>
            </div>
          </div>
        </div>
        <div class="page-preview-console-container">
          <div class="console-wrapper">
            <div class="console-operation">
              <div class="btn-container">
                <n-button type="error" @click="reset">重置所有</n-button>
                <n-button type="info" @click="download">下载</n-button>
              </div>
            </div>
            <div class="console-container">
              <template v-if="componentConsoleStyle.length > 0">
                <div
                  class="console-component-item"
                  v-for="(component, index) in componentConsoleStyle"
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
      </div>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import {
  NLayout,
  NMenu,
  NLayoutSider,
  NSpin,
  NButton,
  useDialog,
  useMessage,
} from "naive-ui";
import useMainStore from "../stores";
import {
  APP_MENU_LIST as menuOptions,
  VANT_THEME_MESSAGE_INIT,
  VANT_THEME_MESSAGE_REPLACEPATH,
  VANT_THEME_MESSAGE_SET,
} from "@/utils/constant";
import { iframeReady, postMessageToChild } from "@/utils/iframeRouter";
import ColorBase from "../components/ColorBase.vue";
import ConsoleColorPicker from "../components/ConsoleColorPicker.vue";
import ConsoleInput from "../components/ConsoleInput.vue";

const $store = useMainStore();

const $dialog = useDialog();

const $message = useMessage();

const { menuActive, themePreviewConfig, componentConsoleStyle } =
  storeToRefs($store);

const iframeEl = ref(null);

const iframeUrl = `../mobile-v3/index.html`;

const isIframeReady = ref(true);

$store.getThemePreviewConfig();

const handleMenuChange = async (hash: string) => {
  $store.menuChange(hash);
};

const stopWatchMenuActive = watch(
  menuActive,
  (newState) => {
    iframeReady(async () => {
      isIframeReady.value = true;
      if (newState !== "Base") {
        postMessageToChild({
          type: VANT_THEME_MESSAGE_REPLACEPATH,
          value: newState,
        });
      }
      await $store.getComponentConsoleStyle(newState);
      isIframeReady.value = false;
    });
  },
  { immediate: true }
);

const reset = () => {
  $dialog.error({
    title: "我是一个提醒",
    content: "要重置全部已更改的样式嘛？没有后悔药哦~",
    positiveText: "是的",
    negativeText: "不了",
    maskClosable: false,
    onPositiveClick: () => {
      $store.resetTheme();
      $message.success("好了，现在我变回原来的我了");
    },
  });
};

const download = async () => {
  const currentThemeInfo = await $store.getCurrentThemeInfo();
  await $store.downloadTheme(currentThemeInfo);
  $message.success("下载好了");
};

const complete = async (itemStyle: {
  index: number;
  varName: string;
  varValue: string;
}) => {
  const { varName, varValue } = itemStyle;
  postMessageToChild({
    type: VANT_THEME_MESSAGE_SET,
    value: JSON.stringify({ varName, varValue }),
  });
};

onMounted(() => {
  iframeReady(() => {
    postMessageToChild({
      type: VANT_THEME_MESSAGE_INIT,
      value: JSON.stringify(themePreviewConfig.value),
    });
  });
});

onUnmounted(() => {
  document.documentElement.setAttribute("style", "");
  $store.menuChange("Base");
  stopWatchMenuActive();
});
</script>
