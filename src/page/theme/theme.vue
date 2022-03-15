<template>
  <div class="vant-theme-theme">
    <div class="vant-theme-theme__empty" v-if="versionAllTheme.length === 0">
      <div class="vant-theme-theme__empty-bg"></div>
      <div class="vant-theme-theme__empty-title">欢迎使用 vant-theme</div>
      <div class="vant-theme-theme__empty-subtitle">
        一个 vant 组件库在线主题预览工具，在这可以自定义你的 vant 主题风格。
      </div>
      <div class="vant-theme-theme__empty-btn">
        <n-button size="small" type="info" @click="operationHandler('add', {})">
          创建主题
        </n-button>
        <n-upload
          accept="application/json"
          :show-file-list="false"
          @change="uploadChange"
          :disabled="uploadLoading"
          style="width: auto"
        >
          <n-button
            size="small"
            quaternary
            type="info"
            :loading="uploadLoading"
          >
            导入主题
          </n-button>
        </n-upload>
      </div>
    </div>
    <template v-else>
      <div class="vant-theme-theme__header">
        <div class="vant-theme-theme__header-title">
          所有主题（{{ versionInfo.title }}）
        </div>
        <div class="vant-theme-theme__header-btn">
          <n-button
            size="small"
            type="info"
            @click="operationHandler('add', {})"
          >
            创建主题
          </n-button>
          <n-upload
            accept="application/json"
            :show-file-list="false"
            @change="uploadChange"
            :disabled="uploadLoading"
          >
            <n-button
              size="small"
              quaternary
              type="info"
              :loading="uploadLoading"
            >
              导入主题
            </n-button>
          </n-upload>
        </div>
      </div>
      <div class="vant-theme-theme__list">
        <div
          class="theme-item"
          v-for="theme in versionAllTheme"
          :key="theme.id"
          @click="operationHandler('see', theme)"
        >
          <div class="theme-item__info">
            <p class="theme-item__info-name">
              <span>名称：</span>
              <span>
                {{ theme.name }}
              </span>
            </p>
            <p v-if="theme.describe" class="theme-item__info-describe">
              <span>描述：</span>
              <span>{{ theme.describe }}</span>
            </p>
            <p class="theme-item__info-time">
              <span>创建时间：</span>
              <span>{{ parseTime(theme.create) }}</span>
            </p>
            <p class="theme-item__info-time">
              <span>修改时间：</span>
              <span>{{ parseTime(theme.update) }}</span>
            </p>
          </div>
          <div class="theme-item__table">
            <div class="theme-item__table-row theme-item__table-header">
              <p class="theme-item__table-row__name">变量名</p>
              <p class="theme-item__table-row__value">变量值</p>
              <p class="theme-item__table-row__demo">示例</p>
            </div>
            <div
              class="theme-item__table-row"
              v-for="(value, key) in defaultColor"
              :key="value"
            >
              <p class="theme-item__table-row__name">
                {{ key }}
                <n-tag
                  v-if="mainColor === key"
                  type="success"
                  size="small"
                  round
                  :color="{
                    color: filterColor(theme, key, value),
                    borderColor: filterColor(theme, key, value),
                    textColor: '#ffffff',
                  }"
                >
                  主调色
                </n-tag>
              </p>
              <p class="theme-item__table-row__value">
                {{ filterColor(theme, key, value) }}
              </p>
              <p class="theme-item__table-row__demo">
                <span
                  class="theme-item__table-row__demo-color"
                  :style="{ backgroundColor: filterColor(theme, key, value) }"
                ></span>
              </p>
            </div>
          </div>
          <n-dropdown
            trigger="hover"
            :options="dropdownOptions"
            placement="bottom-start"
            @select="
              (key) => {
                operationHandler(key, theme);
              }
            "
          >
            <n-icon class="theme-item__more" size="24" :key="theme.id">
              <reorder-three />
            </n-icon>
          </n-dropdown>
        </div>
      </div>
    </template>
    <modal-component
      :type="modal.optionType"
      :show="modal.visible"
      @confirm="modalConfirm"
      @close="toggleModalVisible(false, modal.optionType)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import {
  NButton,
  NUpload,
  NTag,
  NDropdown,
  NIcon,
  useDialog,
  useMessage,
  type UploadFileInfo,
} from "naive-ui";
import { ReorderThree } from "@vicons/ionicons5";
import useMainStore from "@/stores";
import { parseTime } from "@/utils";
import {
  V2_DEFAULT_COLOR,
  V3_DEFAULT_COLOR,
  V4_DEFAULT_COLOR,
  V2_MAIN_COLOR,
  V3_MAIN_COLOR,
  V4_MAIN_COLOR,
} from "@/utils/constant";
import type { DefauleColor, Theme, Color, ModalValue } from "@/utils/type";
import ModalComponent, { type TypeProps } from "@/components/Modal.vue";

const $store = useMainStore();

const { versionInfo, versionAllTheme } = storeToRefs($store);

const defaultColor = ref<DefauleColor>();

const mainColor = ref<Color>();

const $dialog = useDialog();

const $message = useMessage();

const dropdownOptions = [
  {
    label: "查看主题",
    key: "see",
  },
  {
    label: "编辑信息",
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

const modal = ref<{
  visible: boolean;
  optionType: TypeProps;
  origin: Theme;
}>({
  visible: false,
  optionType: "add",
  origin: {},
});

const uploadLoading = ref(false);

const initDefaultColor = () => {
  const { key } = versionInfo.value;
  const colorMap = {
    v2: V2_DEFAULT_COLOR,
    v3: V3_DEFAULT_COLOR,
    v4: V4_DEFAULT_COLOR,
  };
  defaultColor.value = colorMap[key];
};

const initMainColor = () => {
  const { key } = versionInfo.value;
  const colorMap = {
    v2: V2_MAIN_COLOR,
    v3: V3_MAIN_COLOR,
    v4: V4_MAIN_COLOR,
  };
  mainColor.value = colorMap[key];
};

const filterColor = (theme: Theme, key: Color, value: string) => {
  const configColor = theme?.config?.[key];
  if (configColor) {
    return configColor;
  }
  return value;
};

const toggleModalVisible = (
  visible: boolean,
  optionType: TypeProps,
  origin?: Theme
) => {
  modal.value.visible = visible;
  modal.value.optionType = optionType;
  origin && (modal.value.origin = origin);
};

const operationHandler = async (key: string, theme: Theme) => {
  switch (key) {
    case "see": {
      const id = theme.id as number;
      $store.useTheme(id);
      window.location.href = `${
        import.meta.env.BASE_URL
      }src/page/console/index.html`;
      break;
    }
    case "add": {
      toggleModalVisible(true, key, theme);
      break;
    }
    case "edit": {
      toggleModalVisible(true, key, theme);
      break;
    }
    case "copy": {
      toggleModalVisible(true, key, theme);
      break;
    }
    case "delete": {
      $dialog.info({
        title: "提示",
        content: "确定要删除这个主题嘛？",
        positiveText: "确定",
        negativeText: "取消",
        maskClosable: false,
        onPositiveClick: async () => {
          const { id } = theme;
          id && $store.deleteTheme(id);
          $message.success("删除成功");
        },
      });
      break;
    }
    case "download": {
      const { id } = theme;
      id &&
        $store.downloadTheme(id).then(() => {
          $message.success("下载成功");
        });
      break;
    }
  }
};

const modalConfirm = (info: ModalValue) => {
  const type = modal.value.optionType;
  const originTheme = modal.value.origin;
  switch (type) {
    case "add": {
      $store.addTheme(info);
      $message.success("创建成功");
      break;
    }
    case "edit": {
      $store.editTheme(originTheme, info);
      $message.success("编辑成功");
      break;
    }
    case "copy": {
      $store.copyTheme(originTheme, info);
      $message.success("复制成功");
      break;
    }
  }
};

const uploadChange = (options: { file: UploadFileInfo }) => {
  uploadLoading.value = true;
  const { file } = options;
  var reader = new FileReader();
  reader.onload = function (event: ProgressEvent<FileReader>) {
    try {
      const config = JSON.parse(event.target?.result as string);
      const { version } = config;
      if (version) {
        $store.importTheme(config);
        $message.success(`导入成功，请在 ${config.version} 中查看。`);
      } else {
        throw new Error();
      }
    } catch {
      $message.error("导入失败，请检查配置文件内容格式是否正确。", {
        keepAliveOnHover: true,
      });
    } finally {
      uploadLoading.value = false;
    }
  };
  reader.readAsText(file.file as File, "UTF-8");
};

watchEffect(() => {
  initMainColor();
  initDefaultColor();
});
</script>
