import { defineStore } from "pinia";
import useLocalStorage from "@/utils/useLocalStorage";
import type { Theme, Property, Attr } from "@/utils/interface";
import {
  VANT_THEME_PREVIEW_CONFIG,
  VANT_THEME_PREVIEW_ID,
  VANT_THEME_USER_CONFIG,
  APP_STYLE_LIST,
} from "@/utils/constant";
import {
  clearStyle,
  scribeToHump,
  download,
  setVarStyleByConfig,
  getComponentStyle,
  setVarStyle,
  getTime,
} from "@/utils";

const storage = useLocalStorage();

function generateConfig(payload: Theme): Theme {
  const _id = new Date().getTime();
  const { id = _id, name, update = _id, theme = {} } = payload;
  return { id, name, update, theme };
}

export default defineStore("main", {
  state: () => ({
    menuActive: "Base",
    themeUserConfig: storage.getItem(VANT_THEME_USER_CONFIG) || [],
    themePreviewConfig: storage.getItem(VANT_THEME_PREVIEW_CONFIG) || {},
    themePreviewId: storage.getItem(VANT_THEME_PREVIEW_ID),
    componentConsoleStyle: [] as Attr[],
  }),
  getters: {},
  actions: {
    /**
     * 菜单变化处理
     */
    menuChange(hash: string) {
      if (this.menuActive !== hash) {
        this.menuActive = hash;
      }
    },
    /**
     * 添加主题
     */
    async addTheme(name: string): Promise<Theme> {
      const config = await generateConfig({ name });
      this.themeUserConfig.push(config);
      storage.setItem(VANT_THEME_USER_CONFIG, this.themeUserConfig);
      return config;
    },

    /**
     * 复制主题
     */
    async copyTheme(payload: Theme): Promise<Theme> {
      const config = await generateConfig(payload);
      this.themeUserConfig.push(config);
      storage.setItem(VANT_THEME_USER_CONFIG, this.themeUserConfig);
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
      const { id, name, theme, update } = payload;
      const config = this.themeUserConfig.filter(
        (item: Theme) => item.id === id
      )[0];
      config.name = name;
      config.theme = theme;
      config.update = update;
      storage.setItem(VANT_THEME_USER_CONFIG, this.themeUserConfig);
    },

    /**
     * 删除主题
     */
    async deleteTheme(id: number) {
      const configList = this.themeUserConfig;
      const index = configList.findIndex((item: Theme) => item.id === id);
      if (index !== -1) {
        configList.splice(index, 1);
        this.themePreviewConfig = {};
        this.themePreviewId = null;
        storage.setItem(VANT_THEME_USER_CONFIG, this.themeUserConfig);
        storage.setItem(VANT_THEME_PREVIEW_CONFIG, this.themePreviewConfig);
        storage.setItem(VANT_THEME_PREVIEW_ID, this.themePreviewId);
      }
      clearStyle();
    },

    /**
     * 使用主题
     */
    async useTheme(payload: Theme) {
      const { id, theme } = payload;
      this.themePreviewId = id;
      this.themePreviewConfig = theme;
      storage.setItem(VANT_THEME_PREVIEW_ID, id);
      storage.setItem(VANT_THEME_PREVIEW_CONFIG, this.themePreviewConfig);
    },

    /**
     * 获取当前主题配置
     */
    async getThemePreviewConfig() {
      const theme = this.themePreviewConfig;
      // 设置主题样式
      await setVarStyleByConfig(theme);
    },

    /**
     * 获取当前组件样式
     */
    getComponentConsoleStyle(menuItemId: string) {
      const stylesItem = APP_STYLE_LIST.filter(
        (item) => item.id === menuItemId
      )[0];
      this.componentConsoleStyle = getComponentStyle(stylesItem) as never[];
    },

    /**
     * 设置属性
     */
    async setComponentConsoleStyle(payload: {
      index: number;
      varName: string;
      varValue: string;
    }) {
      const { index, varName, varValue } = payload;
      setVarStyle(varName, varValue);
      this.themePreviewConfig[varName] = varValue;
      storage.setItem(VANT_THEME_PREVIEW_CONFIG, this.themePreviewConfig);
      this.componentConsoleStyle[index].varValue = varValue;
      const currentThemeInfo = await this.getCurrentThemeInfo();
      const config = {
        id: currentThemeInfo.id,
        name: currentThemeInfo.name,
        theme: Object.assign(
          {},
          currentThemeInfo.theme,
          this.themePreviewConfig
        ),
        update: getTime(),
      };
      await this.updateThemeHandler(config);
      // postMessageToChild({
      //   type: MESSAGE_SET_STYLES,
      //   value: JSON.stringify({ varName, varValue }),
      // });
    },

    /**
     * 下载主题
     */
    downloadTheme(payload: Theme) {
      const { name, theme: styles } = payload;
      let styleCode = `:root {`;
      const jsonCode: Property = {};
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
      this.themePreviewConfig = {};
      const config = {
        id: currentThemeInfo.id,
        name: currentThemeInfo.name,
        theme: Object.assign({}, this.themePreviewConfig),
        update: getTime(),
      };
      clearStyle();
      await this.updateThemeHandler(config);
      await this.getComponentConsoleStyle(this.menuActive);
    },

    /**
     * 获取当前主题配置
     */
    async getCurrentThemeInfo() {
      const currentThemeInfo = this.themeUserConfig.filter(
        (item: Theme) => item.id === this.themePreviewId
      )[0];
      return currentThemeInfo;
    },
  },
});
