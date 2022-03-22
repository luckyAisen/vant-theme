import pkg from "../../package.json";
import { toRaw } from "vue";
import { defineStore } from "pinia";
import useLocalStorage from "@/utils/useLocalStorage";
import { getTime, download } from "@/utils";
import {
  VANT_THEME_APP_VERSION,
  VANT_THEME_SCHEMECOLOR,
  VANT_THEME_VERSION,
  VANT_THEME_LANGUAGE,
  VANT_THEME_USER_CONFIG,
  VANT_THEME_CURRENT_CONFIG_ID,
  APP_HEADER_VERSION,
  APP_HEADER_LANGUAGE,
  APP_HEADER_DEFAULT_VERSION,
  APP_HEADER_DEFAULT_LANGUAG,
} from "@/utils/constant";
import type {
  SchemeColor,
  Version,
  VersionInfo,
  Language,
  LanguageInfo,
  UserConfig,
  StringProp,
  Theme,
  ModalValue,
  OldUserConfig,
} from "@/utils/type";

import { getDefaultTheme } from "@/utils/iframeSync";
import { getBasicCssVariables } from "@/json/styles";

const storage = useLocalStorage();

type State = {
  needBackups: boolean;
  appVersion?: string;
  schemeColor: SchemeColor;
  version: Version;
  versionList: VersionInfo[];
  language: Language;
  languageList: LanguageInfo[];
  userConfig: UserConfig;
  currentConfigId: number | string;
  loadVantCssState: boolean;
  iframeState: boolean;
  createRouteState: boolean;
  listenSyncPathState: boolean;
};

const defaultUserConfig = {
  v2: [],
  v3: [],
  v4: [],
};

// const defaultCurrentConfig = {};

const defaultCurrentConfigId = "";

function generateTheme(payload: Theme): Theme {
  const _id = getTime();
  const newTheme = {
    version: payload.version,
    id: _id,
    name: payload.name,
    describe: payload.describe,
    config: { ...payload.config },
    create: _id,
    update: _id,
  };
  return newTheme;
}

const useMainStore = defineStore("main", {
  state: (): State => ({
    needBackups: false,
    appVersion: storage.getItem(VANT_THEME_APP_VERSION) || pkg.version,
    schemeColor: getDefaultTheme(),
    version: storage.getItem(VANT_THEME_VERSION) || APP_HEADER_DEFAULT_VERSION,
    versionList: APP_HEADER_VERSION,
    language:
      storage.getItem(VANT_THEME_LANGUAGE) || APP_HEADER_DEFAULT_LANGUAG,
    languageList: APP_HEADER_LANGUAGE,
    userConfig: storage.getItem(VANT_THEME_USER_CONFIG) || defaultUserConfig,
    currentConfigId:
      storage.getItem(VANT_THEME_CURRENT_CONFIG_ID) || defaultCurrentConfigId,
    loadVantCssState: false,
    iframeState: false,
    createRouteState: false,
    listenSyncPathState: false,
  }),
  getters: {
    /**
     * 获取当前版本信息
     */
    versionInfo(state: State) {
      const version = state.version;
      const versionList = toRaw(state.versionList);
      versionList.forEach((item) => {
        if (item.key === "v2") {
          item.disabled = true;
        } else {
          item.disabled = version === item.key ? true : false;
        }
      });
      return versionList.filter((item) => item.key === version)[0];
    },

    /**
     * 获取当前版本所有主题配置
     */
    versionAllTheme(state: State) {
      const version = state.version;
      const config = state.userConfig;
      return config[version];
    },

    /**
     * 获取当前版本主题
     */
    versionCurrentTheme(state: State) {
      const version = state.version;
      const config = state.userConfig;
      const currentConfigId = state.currentConfigId;
      return config[version].filter((item) => item.id === currentConfigId)[0];
    },
  },
  actions: {
    /**
     * 初始化
     */
    async init() {
      const appVersion = this.appVersion;
      const schemeColor = this.schemeColor;
      const version = this.version;
      const language = this.language;
      const userConfig = this.userConfig;
      const currentConfigId = this.currentConfigId;
      storage.setItem(VANT_THEME_APP_VERSION, appVersion);
      storage.setItem(VANT_THEME_SCHEMECOLOR, schemeColor);
      storage.setItem(VANT_THEME_VERSION, version);
      storage.setItem(VANT_THEME_LANGUAGE, language);
      // if (!appVersion || appVersion !== pkg.version) {
      //   this.handleOldVersionConfig();
      // }
      storage.setItem(VANT_THEME_USER_CONFIG, userConfig);
      storage.setItem(VANT_THEME_CURRENT_CONFIG_ID, currentConfigId);
    },

    /**
     * 将旧版本的数据转换成新版本的数据
     */
    handleOldVersionConfig() {
      const oldUserConfig: OldUserConfig = storage.getItem(
        "VANT_THEME_USER_CONFIG"
      );
      const newUserConfig: UserConfig = { v2: [], v3: [], v4: [] };
      oldUserConfig &&
        Object.keys(oldUserConfig).forEach((v) => {
          newUserConfig[v as Version] = [];
          const child = oldUserConfig[v as Version];
          if (child && child.length > 0) {
            child.forEach((item) => {
              newUserConfig[v as Version].push({
                version: v as Version,
                id: item.id,
                name: item.name,
                describe: "",
                config: item.theme,
                create: item.update,
                update: item.update,
              });
            });
          }
        });
      console.log(newUserConfig);
      storage.removeItem("base");
      storage.removeItem("VANT_THEME_PREVIEW_CONFIG");
      storage.removeItem("VANT_THEME_PREVIEW_ID");
    },

    /**
     * 设置 app 版本
     */
    setAppVersion() {
      this.appVersion = pkg.version;
      storage.setItem(VANT_THEME_APP_VERSION, pkg.version);
    },

    /**
     * 切换主题
     */
    setSchemeColor(newColor: SchemeColor) {
      this.schemeColor = newColor;
      storage.setItem(VANT_THEME_SCHEMECOLOR, newColor);
    },

    /**
     * 切换版本
     */
    setVersion(info: VersionInfo) {
      const { key } = info;
      if (this.version !== key) {
        this.version = key;
        storage.setItem(VANT_THEME_VERSION, key);
      }
    },

    /**
     * 切换语言
     */
    setLanguage(newLanguage: Language) {
      this.language = newLanguage;
      storage.setItem(VANT_THEME_LANGUAGE, newLanguage);
    },

    /**
     * 导入主题
     */
    importTheme(theme: Theme) {
      const { version } = theme;
      version &&
        this.updateUserConfigHandler("add", version, {
          index: 0,
          theme: theme,
        });
    },

    /**
     * 新增主题
     */
    addTheme(info: ModalValue) {
      const { name, describe } = info;
      const version = this.version;
      const newTheme = generateTheme({ version, name, describe });
      this.updateUserConfigHandler("add", version, {
        index: 0,
        theme: newTheme,
      });
    },

    /**
     * 编辑主题
     */
    editTheme(originTheme: Theme, info: ModalValue) {
      const version = this.version;
      const userConfig = this.userConfig;
      const versionConfig = userConfig[version];
      const newOriginTheme = toRaw(originTheme);
      const { name, describe } = info;
      newOriginTheme.name = name;
      newOriginTheme.describe = describe;
      const index = versionConfig.findIndex(
        (item) => item.id === newOriginTheme.id
      );
      this.updateUserConfigHandler("update", version, {
        index,
        theme: newOriginTheme,
      });
    },

    /**
     * 复制主题
     */
    copyTheme(originTheme: Theme, info: ModalValue) {
      const version = this.version;
      const newOriginTheme = toRaw(originTheme);
      const { name, describe } = info;
      const newTheme = generateTheme({ version, name, describe });
      newTheme.config = toRaw(newOriginTheme.config);
      this.updateUserConfigHandler("add", version, {
        index: 0,
        theme: newTheme,
      });
    },

    /**
     * 删除主题
     */
    deleteTheme(id: number) {
      const version = this.version;
      const userConfig = toRaw(this.userConfig);
      const versionConfig = userConfig[version];
      const index = versionConfig.findIndex((item) => item.id === id);
      if (index !== undefined && index !== -1) {
        this.updateUserConfigHandler("delete", version, { index });
      }
    },

    /**
     * 下载主题
     */
    async downloadTheme(id: number) {
      const version = this.version;
      const language = this.language;
      const baseVariables = await getBasicCssVariables(version, language);
      const currentTheme = toRaw(this.userConfig)[version].filter(
        (item) => item.id === id
      )[0];
      const base = baseVariables.children?.map((item) => item.label);
      return download(version, currentTheme, base as string[]);
    },

    /**
     * 修改用户配置
     */
    updateUserConfigHandler(
      type: "add" | "update" | "delete",
      version: Version,
      payload: {
        index: number;
        theme?: Theme;
      }
    ) {
      const userConfig = this.userConfig;
      const { index, theme } = payload;
      if (type === "add") {
        theme && userConfig[version].push(theme);
      }
      if (type === "update") {
        userConfig[version][index].name = theme?.name;
        userConfig[version][index].describe = theme?.describe;
        userConfig[version][index].config = theme?.config;
        userConfig[version][index].update = theme?.update;
      }
      if (type === "delete") {
        userConfig[version].splice(index, 1);
      }
      storage.setItem(VANT_THEME_USER_CONFIG, userConfig);
    },

    /**
     * 使用主题
     */
    useTheme(id: number) {
      this.currentConfigId = id;
      storage.setItem(VANT_THEME_CURRENT_CONFIG_ID, id);
    },

    /**
     * 清除 当前主题id
     */
    clearCurrentConfigId() {
      this.currentConfigId = defaultCurrentConfigId;
      storage.setItem(VANT_THEME_CURRENT_CONFIG_ID, defaultCurrentConfigId);
    },

    /**
     * 设置 vant css 文件加载状态
     */
    setLoadVantCssState(state: boolean) {
      this.loadVantCssState = state;
    },

    /**
     * 设置 iframe 状态
     */
    setIframeState(state: boolean) {
      this.iframeState = state;
    },

    /**
     * 设置路由加载状态
     */
    setCreateRouteState(state: boolean) {
      this.createRouteState = state;
    },

    /**
     * 设置 iframe postmessage 的路由同步状态
     */
    setListenSyncPathState(state: boolean) {
      this.listenSyncPathState = state;
    },

    /**
     * 设置样式
     */
    setVariables(config: StringProp) {
      const version = this.version;
      const userConfig = this.userConfig;
      const versionConfig = userConfig[version];
      const newOriginTheme = toRaw(this.versionCurrentTheme);
      const index = versionConfig.findIndex(
        (item) => item.id === newOriginTheme.id
      );
      newOriginTheme.config = { ...newOriginTheme.config, ...config };
      this.updateUserConfigHandler("update", version, {
        index,
        theme: newOriginTheme,
      });
    },

    /**
     * 重置所有样式
     */
    clearVariables(currentId: number) {
      const version = this.version;
      const userConfig = this.userConfig;
      const versionConfig = userConfig[version];
      const newOriginTheme = toRaw(this.versionCurrentTheme);
      const index = versionConfig.findIndex((item) => item.id === currentId);
      newOriginTheme.config = {};
      this.updateUserConfigHandler("update", version, {
        index,
        theme: newOriginTheme,
      });
    },
  },
});

export default useMainStore;
