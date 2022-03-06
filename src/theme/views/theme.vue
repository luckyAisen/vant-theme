<template>
  <div class="page-theme">
    <div class="page-theme-container">
      <p class="theme-title">所有主题（{{ getVersion?.label }}）</p>
      <ul class="theme-list">
        <li class="card-item" v-for="item in getThemeList" :key="item.id">
          <div class="card-line">
            <div
              class="line-2"
              :style="{
                backgroundColor:
                  (Object.keys(item.theme || {}).length &&
                    item.theme?.['--van-red']) ||
                  defaultColor['--van-red'],
              }"
            ></div>
            <div
              class="line-2"
              :style="{
                backgroundColor:
                  (Object.keys(item.theme || {}).length &&
                    item.theme?.['--van-blue']) ||
                  defaultColor['--van-blue'],
              }"
            ></div>
          </div>
          <div class="card-line">
            <div
              class="line-4"
              :style="{
                backgroundColor:
                  (Object.keys(item.theme || {}).length &&
                    item.theme?.['--van-orange']) ||
                  defaultColor['--van-orange'],
              }"
            ></div>
            <div
              class="line-4"
              :style="{
                backgroundColor:
                  (Object.keys(item.theme || {}).length &&
                    item.theme?.['--van-orange-dark']) ||
                  defaultColor['--van-orange-dark'],
              }"
            ></div>
            <div
              class="line-4"
              :style="{
                backgroundColor:
                  (Object.keys(item.theme || {}).length &&
                    item.theme?.['--van-orange-light']) ||
                  defaultColor['--van-orange-light'],
              }"
            ></div>
            <div
              class="line-4"
              :style="{
                backgroundColor:
                  (Object.keys(item.theme || {}).length &&
                    item.theme?.['--van-green']) ||
                  defaultColor['--van-green'],
              }"
            ></div>
          </div>
          <div class="card-info">
            <div class="card-info-header">
              <span class="info-name">{{ item.name }}</span>
              <n-dropdown
                trigger="click"
                :options="options"
                @select="
                  (key) => {
                    handleSelect(key, item);
                  }
                "
                placement="bottom-start"
              >
                <span class="info-more" :key="item.id">...</span>
              </n-dropdown>
            </div>
            <div class="card-info-description">
              最近修改 {{ transitionTime(item.update as number) }}
            </div>
          </div>
        </li>
        <li class="card-add" @click="useModalOpen('add')">
          <n-icon size="56" color="#606266">
            <add-sharp />
          </n-icon>
          <span>新增主题</span>
        </li>
      </ul>
    </div>
  </div>
  <modal-component
    :show="showModal"
    @close="useModalClose"
    @confirm="useModalConfirm"
  />
</template>

<script lang="ts" setup>
import { ref, watch, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import ModalComponent from "../components/Modal.vue";
import { NDropdown, NIcon, useDialog, useMessage } from "naive-ui";
import { AddSharp } from "@vicons/ionicons5";
import { DEFAULT_COLOR as defaultColor } from "@/utils/constant";
import { transitionTime } from "@/utils";
import type { Theme } from "@/utils/interface";
import useMainStore from "../stores";
import { storeToRefs } from "pinia";

const $store = useMainStore();

const $router = useRouter();

const $dialog = useDialog();

const $message = useMessage();

const { version, getVersion, getThemeList } = storeToRefs($store);

const stopWatchVersion = watch(
  version,
  (v) => {
    if (v === "v4") {
      $message.info("vant 4 深色模式暂不支持。");
    }
  },
  { immediate: true }
);

const showModal = ref(false);

const options = [
  {
    label: "查看主题",
    key: "see",
  },
  {
    label: "修改命名",
    key: "edit",
  },
  {
    label: "复制主题",
    key: "copy",
  },
  {
    label: "删除主题",
    key: "delete",
  },
  {
    label: "下载主题文件",
    key: "download",
  },
];

const optionType = ref("");

const currentTheme = ref<Theme>({});

const useModalOpen = (type: string) => {
  optionType.value = type;
  showModal.value = true;
};

const useModalClose = () => {
  showModal.value = false;
};

const handleSelect = async (key: string, theme: Theme) => {
  optionType.value = key;
  currentTheme.value = theme;
  switch (key) {
    case "see": {
      await $store.useTheme(theme);
      $router.push("/preview");
      break;
    }
    case "edit": {
      useModalOpen(key);
      break;
    }
    case "copy": {
      useModalOpen(key);
      break;
    }
    case "delete": {
      $dialog.error({
        title: "提示",
        content: "确定要删除这个主题嘛？",
        positiveText: "确定",
        negativeText: "取消",
        maskClosable: false,
        onPositiveClick: async () => {
          const { id } = currentTheme.value;
          await $store.deleteTheme(id as number);
          $message.success("emmm，行吧，再见啦👋");
        },
      });
      break;
    }
    case "download": {
      await $store.downloadTheme(currentTheme.value);
      $message.success("下载成功");
      break;
    }
  }
};

const useModalConfirm = async (name: string) => {
  const type = optionType.value;
  switch (type) {
    case "add": {
      const theme = await $store.addTheme(name);
      await $store.useTheme(theme);
      $router.push("/preview");
      break;
    }
    case "edit": {
      await $store.updateTheme({
        id: currentTheme.value.id,
        name,
        theme: currentTheme.value.theme,
        update: currentTheme.value.update,
      });
      break;
    }
    case "copy": {
      await $store.copyTheme({
        name,
        theme: currentTheme.value.theme,
      });
      break;
    }
  }
};

onUnmounted(() => {
  stopWatchVersion();
});
</script>
