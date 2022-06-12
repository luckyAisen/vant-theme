import type {
  VersionInfo,
  DefauleColor,
  Color,
  V2DefauleColor,
  V2Color,
} from "./type";

export const VANT_THEME_APP_VERSION = "VANT_THEME_APP_VERSION";

export const VANT_THEME_SCHEMECOLOR = "VANT_THEME_SCHEMECOLOR";

export const VANT_THEME_LANGUAGE = "VANT_THEME_LANGUAGE";

export const VANT_THEME_VERSION = "VANT_THEME_VERSION";

export const VANT_THEME_USER_CONFIG = "VANT_THEME_USER_CONFIG";

export const VANT_THEME_CURRENT_CONFIG_ID = "VANT_THEME_CURRENT_CONFIG_ID";

export const APP_BASE_URL = `${import.meta.env.BASE_URL}`;

export const APP_HEADER_LINKS = [
  {
    url: "https://youzan.github.io/vant/",
    lightLogo: `${APP_BASE_URL}vant.png`,
    darkLogo: `${APP_BASE_URL}vant.png`,
  },
  {
    url: "https://github.com/Aisen60/vant-theme",
    lightLogo: `${APP_BASE_URL}dark-github.png`,
    darkLogo: `${APP_BASE_URL}light-github.png`,
  },
];

export const APP_HEADER_DEFAULT_VERSION = "v3";

export const APP_HEADER_DEFAULT_LANGUAG = "zh-CN";

export const APP_HEADER_VERSION: VersionInfo[] = [
  {
    key: "v2",
    title: "vant-theme 2",
    subtitle: "适用于 vue 2、vant 2",
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

export const V2_DEFAULT_COLOR: V2DefauleColor = {
  "@red": "#ee0a24",
  "@blue": "#1989fa",
  "@orange": "#ff976a",
  "@orange-dark": "#ed6a0c",
  "@orange-light": "#fffbe8",
  "@green": "#07c160",
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

export const V2_MAIN_COLOR: V2Color = "@red";

export const V3_MAIN_COLOR: Color = "--van-red";

export const V4_MAIN_COLOR: Color = "--van-blue";

export const VANT_THEME_MESSAGE_REPLACEPATH = "replacePath";

export const VANT_THEME_MESSAGE_VARIABLES_INIT =
  "VANT_THEME_MESSAGE_VARIABLES_INIT";

export const VANT_THEME_MESSAGE_VARIABLES_SET =
  "VANT_THEME_MESSAGE_VARIABLES_SET";

export const VANT_THEME_MESSAGE_VARIABLES_CLEAR =
  "VANT_THEME_MESSAGE_VARIABLES_CLEAR";

export const VERSION_VARIABLES_EL = {
  v2: document.documentElement,
  v3: document.documentElement,
  v4: document.body,
};

export const VANT_VERSION_CSS = {
  v2: `${APP_BASE_URL}v2.css`,
  v3: "https://cdn.jsdelivr.net/npm/vant/lib/index.css",
  v4: "https://cdn.jsdelivr.net/npm/vant@4.0.0-alpha.1/lib/index.css",
};

export const VANT_THEME_STYLE_TAG_ID = "VANT_THEME_STYLE_TAG_ID";
