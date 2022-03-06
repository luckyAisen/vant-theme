import { defineStore } from "pinia";
import useLocalStorage from "@/utils/useLocalStorage";
import type {
  Language,
  LanguageItem,
  Version,
  VersionItem,
  Menu,
  Style,
  Theme,
  ThemeList,
  StringProp,
} from "@/utils/interface";
import {
  VANT_THEME_LANGUAGE,
  VANT_THEME_VERSION,
  VANT_THEME_MENUACTIVE,
  VANT_THEME_PREVIEW_CONFIG,
  VANT_THEME_PREVIEW_ID,
  VANT_THEME_USER_CONFIG,
  VANT_THEME_CSS_LINK_ID,
  VANT_THEME_CSS_MAP,
} from "@/utils/constant";
import {
  clearStyle,
  scribeToHump,
  download,
  // setVarStyleByConfig,
  // getComponentStyle,
  // setVarStyle,
  getTime,
} from "@/utils";
import getGlobalMenu from "@/json/menus";
import getGlobalStyles from "@/json/styles";

const storage = useLocalStorage();

function generateConfig(payload: Theme): Theme {
  const _id = new Date().getTime();
  const { id = _id, name, update = _id, theme = {} } = payload;
  return { id, name, update, theme };
}

const useMainStore = defineStore("main", {
  state: () => ({
    language: (storage.getItem(VANT_THEME_LANGUAGE) || "zh-cn") as Language,
    languageList: [
      {
        key: "zh-cn",
        label: "中",
        disabled: false,
      },
      {
        key: "en-us",
        label: "EN",
        disabled: true,
      },
    ] as LanguageItem[],
    version: (storage.getItem(VANT_THEME_VERSION) || "v3") as Version,
    versionList: [
      {
        key: "v2",
        label: "vant-theme 2",
        remarks: "（适用于 vue 2、vant 2）(暂不支持)",
        disabled: true,
      },
      {
        key: "v3",
        label: "vant-theme 3",
        remarks: "（适用于 vue 3、vant 3）",
        disabled: false,
      },
      {
        key: "v4",
        label: "vant-theme 4",
        remarks: "（适用于 vue 3、vant 4）",
        disabled: false,
      },
    ] as VersionItem[],
    menuActive: storage.getItem(VANT_THEME_MENUACTIVE) as string,
    userConfig: (storage.getItem(VANT_THEME_USER_CONFIG) || {
      v3: [],
      v4: [],
    }) as ThemeList,
    previewConfig: (storage.getItem(VANT_THEME_PREVIEW_CONFIG) ||
      {}) as StringProp,
    previewId: storage.getItem(VANT_THEME_PREVIEW_ID) || "",
  }),
  getters: {
    /**
     * 获取当前版本信息
     */
    getVersion(state) {
      const version = state.version;
      const versionList = state.versionList;
      let vItem;
      for (let i = 0; i < versionList.length; i++) {
        const v = versionList[i];
        v.key !== "v2" && (v.disabled = false);
        if (v.key === version) {
          v.disabled = true;
          vItem = v;
        }
      }
      return vItem;
    },
    /**
     * 获取主题列表
     */
    getThemeList(state) {
      const version = state.version;
      const userConfig = state.userConfig;
      return userConfig[version];
    },
  },
  actions: {
    /**
     * 初始化
     */
    async init() {
      const language = this.getLanguageKey();
      const version = this.getVersionKey();
      const menuActive = this.menuActive;
      const userConfig = this.userConfig;
      const previewConfig = this.previewConfig;
      const previewId = this.previewId;
      storage.setItem(VANT_THEME_LANGUAGE, language);
      storage.setItem(VANT_THEME_VERSION, version);
      storage.setItem(VANT_THEME_MENUACTIVE, menuActive);
      storage.setItem(VANT_THEME_USER_CONFIG, userConfig);
      storage.setItem(VANT_THEME_PREVIEW_CONFIG, previewConfig);
      storage.setItem(VANT_THEME_PREVIEW_ID, previewId);
    },

    /**
     * 获取语言
     */
    getLanguageKey() {
      return this.language;
    },

    /**
     * 处理语言切换
     * @param key
     */
    languageChange(key: Language) {
      this.language = key;
      storage.setItem(VANT_THEME_LANGUAGE, key);
    },

    /**
     * 获取版本
     */
    getVersionKey() {
      return this.version;
    },

    /**
     * 处理版本切换
     * @param key
     */
    versionChange(key: Version) {
      this.version = key;
      storage.setItem(VANT_THEME_VERSION, key);
    },

    /**
     * 菜单变化处理
     */
    menuChange(hash: string) {
      if (this.menuActive !== hash) {
        this.menuActive = hash;
        storage.setItem(VANT_THEME_MENUACTIVE, hash);
      }
    },

    /**
     * 添加主题
     */
    async addTheme(name: string): Promise<Theme> {
      const v = this.getVersionKey();
      const config = await generateConfig({ name });
      this.userConfig[v]?.push(config);
      storage.setItem(VANT_THEME_USER_CONFIG, this.userConfig);
      return config;
    },

    /**
     * 复制主题
     */
    async copyTheme(payload: Theme): Promise<Theme> {
      const v = this.getVersionKey();
      const config = await generateConfig(payload);
      this.userConfig[v]?.push(config);
      storage.setItem(VANT_THEME_USER_CONFIG, this.userConfig);
      return config;
    },

    /**
     * 修改主题
     */
    async updateTheme(payload: Theme) {
      await this.updateThemeHandler(payload);
    },

    /**
     * 修改某个主题的信息
     */
    async updateThemeHandler(payload: Theme) {
      const v = this.getVersionKey();
      const { id, name, theme, update } = payload;
      const config = this.userConfig[v]?.filter(
        (item: Theme) => item.id === id
      )[0];
      if (config) {
        config.name = name;
        config.theme = theme;
        config.update = update;
      }
      storage.setItem(VANT_THEME_USER_CONFIG, this.userConfig);
    },

    /**
     * 删除主题
     */
    async deleteTheme(id: number) {
      const v = this.getVersionKey();
      const configList = this.userConfig[v];
      const index = configList?.findIndex((item: Theme) => item.id === id);
      if (index && index !== -1) {
        configList?.splice(index, 1);
        this.previewConfig = {};
        this.previewId = null;
        storage.setItem(VANT_THEME_USER_CONFIG, this.userConfig);
        storage.setItem(VANT_THEME_PREVIEW_CONFIG, this.previewConfig);
        storage.setItem(VANT_THEME_PREVIEW_ID, this.previewId);
      }
      clearStyle();
    },

    /**
     * 使用主题
     */
    async useTheme(payload: Theme) {
      const { id, theme } = payload;
      this.previewId = id;
      this.previewConfig = theme as StringProp;
      storage.setItem(VANT_THEME_PREVIEW_ID, id);
      storage.setItem(VANT_THEME_PREVIEW_CONFIG, this.previewConfig);
    },

    /**
     * 获取当前组件样式
     */
    async getComponentConsoleStyle(menuItemId: string) {
      const globalStyles = await this.getVersionStyles();
      const styles = globalStyles.filter((item) => item.id === menuItemId)[0];
      return styles;
    },

    /**
     * 设置属性
     */
    async setComponentConsoleStyle(payload: {
      index: number;
      varName: string;
      varValue: string;
    }) {
      const { varName, varValue } = payload;
      // setVarStyle(varName, varValue);
      this.previewConfig[varName] = varValue;
      storage.setItem(VANT_THEME_PREVIEW_CONFIG, this.previewConfig);
      const currentThemeInfo = await this.getCurrentThemeInfo();
      const config = {
        id: currentThemeInfo?.id,
        name: currentThemeInfo?.name,
        theme: Object.assign({}, currentThemeInfo?.theme, this.previewConfig),
        update: getTime(),
      };
      await this.updateThemeHandler(config);
    },

    /**
     * 下载主题
     */
    downloadTheme(payload: Theme) {
      const { name, theme: styles } = payload;
      let styleCode = `:root {`;
      const jsonCode: any = {};
      for (const value in styles) {
        styleCode += `\n ${value}: ${styles[value]};`;
        jsonCode[scribeToHump(value)] = styles[value];
      }
      styleCode += "\n}";
      download(styleCode, `${name} - ${new Date().getTime()}.css`);
      download(
        JSON.stringify(jsonCode),
        `${name} - ${new Date().getTime()}.json`
      );
    },

    /**
     * 重置主题
     */
    async resetTheme() {
      const currentThemeInfo = await this.getCurrentThemeInfo();
      this.previewConfig = {};
      const config = {
        id: currentThemeInfo?.id,
        name: currentThemeInfo?.name,
        theme: Object.assign({}, this.previewConfig),
        update: getTime(),
      };
      storage.setItem(VANT_THEME_PREVIEW_CONFIG, this.previewConfig);
      // clearStyle();
      await this.updateThemeHandler(config);
    },

    /**
     * 获取当前主题配置
     */
    async getCurrentThemeInfo() {
      const v = this.getVersionKey();
      const currentThemeInfo = this.userConfig[v]?.filter(
        (item: Theme) => item.id === this.previewId
      )[0];
      return currentThemeInfo;
    },

    /**
     * 获取目录
     */
    async getVersionMenus() {
      const language = this.getLanguageKey();
      const version = this.getVersionKey();
      const menus = (await getGlobalMenu(version, language)) as Menu[];
      return menus;
    },

    /**
     * 获取样式
     */
    async getVersionStyles() {
      const version = this.getVersionKey();
      const styles = (await getGlobalStyles(version)) as Style[];
      return styles;
    },

    /**
     * 获取 H5 页面地址
     */
    getMobilePath() {
      const version = this.getVersionKey();
      return `${import.meta.env.BASE_URL}src/mobile/${version}.html`;
    },

    /**
     * 插入 vant css
     */
    insertVantCss() {
      const version = this.getVersionKey();
      const link = VANT_THEME_CSS_MAP[version];
      document
        .querySelector(`#${VANT_THEME_CSS_LINK_ID}`)
        ?.setAttribute("href", link);
    },
  },
});

export default useMainStore;
