export const VANT_WEBSITE = "https://vant-ui.github.io/vant";
export const VERSION_LIST = ["v4", "v3", "v2"];
// export const VERSION_LIST = ["v2", "v3", "v4"];
// export const VERSION_LIST = ["v3"];
export const VANT_GIT_REPO = "youzan/vant#gh-pages";
export const VANT_SOURCE_LOCAL = ".VANT_SOURCE_LOCAL";
export const VANT_PUBLIC_PATH = "public/vant";
export const VANT_MOBILE_PAGE_CONCAT_PATH = (v) => `src/page/mobile/${v}.html`;
export const VANT_MENU_CONCAT_JSON = (v, language = "zh-cn") =>
  `src/json/menus/${language}/${v}.json`;
export const VANT_STYLES_CONCAT_JSON = (v, language = "zh-cn") =>
  `src/json/styles/${language}/${v}.json`;

export default {
  VANT_WEBSITE,
  VERSION_LIST,
  VANT_GIT_REPO,
  VANT_SOURCE_LOCAL,
  VANT_PUBLIC_PATH,
  VANT_MOBILE_PAGE_CONCAT_PATH,
  VANT_MENU_CONCAT_JSON,
  VANT_STYLES_CONCAT_JSON,
};
