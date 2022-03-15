import baseVariablesV2 from "@/json/styles/base-v2.json";
import baseVariablesV3 from "@/json/styles/base-v3.json";
import baseVariablesV4 from "@/json/styles/base-v4.json";
import type { VersionInfo, DefauleColor, Color } from "./type";

export const VANT_THEME_APP_VERSION = "VANT_THEME_APP_VERSION";

export const VANT_THEME_SCHEMECOLOR = "VANT_THEME_SCHEMECOLOR";

export const VANT_THEME_LANGUAGE = "VANT_THEME_LANGUAGE";

export const VANT_THEME_VERSION = "VANT_THEME_VERSION";

export const VANT_THEME_USER_CONFIG = "VANT_THEME_USER_CONFIG";

export const VANT_THEME_CURRENT_CONFIG = "VANT_THEME_CURRENT_CONFIG";

export const VANT_THEME_CURRENT_CONFIG_ID = "VANT_THEME_CURRENT_CONFIG_ID";

export const APP_WEBSITE = `${import.meta.env.BASE_URL}`;

export const APP_HEADER_LINKS = [
  {
    url: "https://youzan.github.io/vant/",
    lightLogo: `${import.meta.env.BASE_URL}vant.png`,
    darkLogo: `${import.meta.env.BASE_URL}vant.png`,
  },
  {
    url: "https://github.com/Aisen60/vant-theme",
    lightLogo: `${import.meta.env.BASE_URL}dark-github.png`,
    darkLogo: `${import.meta.env.BASE_URL}light-github.png`,
  },
];

export const APP_HEADER_DEFAULT_VERSION = "v3";

export const APP_HEADER_DEFAULT_LANGUAG = "zh-CN";

export const APP_HEADER_VERSION: VersionInfo[] = [
  {
    key: "v2",
    title: "vant-theme 2",
    subtitle: "适用于 vue 2、vant 2 暂不支持",
  },
  {
    key: "v3",
    title: "vant-theme 3",
    subtitle: "适用于 vue 3、vant 3",
  },
  {
    key: "v4",
    title: "vant-theme 4",
    subtitle: "适用于 vue 3、vant 4",
  },
];

export const APP_HEADER_LANGUAGE = [
  {
    key: "zh-CN",
    label: "中",
    disabled: false,
  },
  {
    key: "en-US",
    label: "EN",
    disabled: true,
  },
];

export const V2_DEFAULT_COLOR: DefauleColor = {
  "--van-red": "#ee0a24",
  "--van-blue": "#1989fa",
  "--van-orange": "#ff976a",
  "--van-orange-dark": "#ed6a0c",
  "--van-orange-light": "#fffbe8",
  "--van-green": "#07c160",
};

export const V3_DEFAULT_COLOR: DefauleColor = {
  "--van-red": "#ee0a24",
  "--van-blue": "#1989fa",
  "--van-orange": "#ff976a",
  "--van-orange-dark": "#ed6a0c",
  "--van-orange-light": "#fffbe8",
  "--van-green": "#07c160",
};

export const V4_DEFAULT_COLOR: DefauleColor = {
  "--van-red": "#ee0a24",
  "--van-blue": "#1989fa",
  "--van-orange": "#ff976a",
  "--van-orange-dark": "#ed6a0c",
  "--van-orange-light": "#fffbe8",
  "--van-green": "#07c160",
};

export const V2_MAIN_COLOR: Color = "--van-red";

export const V3_MAIN_COLOR: Color = "--van-red";

export const V4_MAIN_COLOR: Color = "--van-blue";

export const V2_BASE_VARIABLES = baseVariablesV2.styles;

export const V3_BASE_VARIABLES = baseVariablesV3.styles;

export const V4_BASE_VARIABLES = baseVariablesV4.styles;
