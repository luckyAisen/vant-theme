import pkg from "../../package.json";
import type { Menu, Style } from "./interface";
import menusV3 from "@/json/menus-v3.json";
import stylesV3 from "@/json/styles-v3.json";

export const TITLE = pkg.name;

export const BIREF = `
<p>${TITLE} 是一个 vant 组件库在线主题预览工具，如果你有 vant 组件库定制主题、动态切换主题的需求，可以使用此工具。</p>
<p>${TITLE} 可以修改 vant 组件库所提供的样式变量，并及时反馈结果。</p>
`;

export const OUTERLINK = [
  {
    name: "vant 官网",
    url: "https://vant-contrib.gitee.io/vant/v3/#/zh-CN/",
  },
  {
    name: "GitHub",
    url: "https://github.com/Aisen60/vant-theme",
  },
];

export const DEFAULT_COLOR = {
  "--van-red": "#ee0a24",
  "--van-blue": "#1989fa",
  "--van-orange": "#ff976a",
  "--van-orange-dark": "#ed6a0c",
  "--van-orange-light": "#fffbe8",
  "--van-green": "#07c160",
};

export const VANT_THEME_USER_CONFIG = "VANT_THEME_USER_CONFIG";

export const VANT_THEME_PREVIEW_CONFIG = "VANT_THEME_PREVIEW_CONFIG";

export const VANT_THEME_PREVIEW_ID = "VANT_THEME_PREVIEW_ID";

export const APP_MENU_LIST: Menu[] = [
  {
    type: "group",
    label: "基础样式变量",
    key: "Base",
    children: [
      {
        label: "Base 基础样式",
        key: "Base",
      },
    ],
  },
  ...menusV3,
];

export const APP_STYLE_LIST: Style[] = [
  {
    id: "Base",
    styles: [
      "--van-black",
      "--van-white",
      "--van-gray-1",
      "--van-gray-2",
      "--van-gray-3",
      "--van-gray-4",
      "--van-gray-5",
      "--van-gray-6",
      "--van-gray-7",
      "--van-gray-8",
      "--van-red",
      "--van-blue",
      "--van-orange",
      "--van-orange-dark",
      "--van-orange-light",
      "--van-green",

      "--van-gradient-red",
      "--van-gradient-orange",

      "--van-primary-color",
      "--van-success-color",
      "--van-danger-color",
      "--van-warning-color",
      "--van-text-color",
      "--van-text-color-2",
      "--van-text-color-3",
      "--van-text-link-color",
      "--van-active-color",
      "--van-active-opacity",
      "--van-disabled-opacity",
      "--van-background-color",
      "--van-background-color-light",

      "--van-padding-base",
      "--van-padding-xs",
      "--van-padding-sm",
      "--van-padding-md",
      "--van-padding-lg",
      "--van-padding-xl",

      "--van-font-size-xs",
      "--van-font-size-sm",
      "--van-font-size-md",
      "--van-font-size-lg",
      "--van-font-weight-bold",
      "--van-line-height-xs",
      "--van-line-height-sm",
      "--van-line-height-md",
      "--van-line-height-lg",
      "--van-base-font-family",
      "--van-price-integer-font-family",

      "--van-animation-duration-base",
      "--van-animation-duration-fast",
      "--van-animation-timing-function-enter",
      "--van-animation-timing-function-leave",

      "--van-border-color",
      "--van-border-width-base",
      "--van-border-radius-sm",
      "--van-border-radius-md",
      "--van-border-radius-lg",
      "--van-border-radius-max",
    ],
  },
  ...stylesV3,
];

export const VANT_THEME_MESSAGE_INIT = "VANT_THEME_MESSAGE_INIT";

export const VANT_THEME_MESSAGE_SET = "VANT_THEME_MESSAGE_SET";

export const VANT_THEME_MESSAGE_CLEAR = "VANT_THEME_MESSAGE_CLEAR";

export const VANT_THEME_MESSAGE_REPLACEPATH = "replacePath";
