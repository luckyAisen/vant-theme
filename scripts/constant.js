// const VANT_WEBSITE = 'https://youzan.github.io/vant'
const VANT_WEBSITE = 'https://vant-contrib.gitee.io/vant'
const VANT_GIT_REPO = 'youzan/vant#gh-pages'
const VANT_SOURCE_LOCAL = '.VANT_SOURCE_LOCAL'
const VERSION_LIST = ['v2', 'v3']
const VANT_PUBLIC_PATH = 'public/vant'
const VANT_MOBILE_LOCAL_PREFIX = 'src/pages'
const VANT_MOBILE_PAGE_V2_PATH = `${VANT_MOBILE_LOCAL_PREFIX}/mobile-v2/index.html`
const VANT_MOBILE_PAGE_V3_PATH = `${VANT_MOBILE_LOCAL_PREFIX}/mobile-v3/index.html`
const VANT_MOBILE_PAGE_CONCAT_PATH = v =>
  `${VANT_MOBILE_LOCAL_PREFIX}/mobile-${v}/index.html`
const VANT_MENU_CONCAT_JSON = v => `src/json/menus-${v}.json`
const VANT_STYLES_CONCAT_JSON = v => `src/json/styles-${v}.json`


module.exports = {
  VANT_WEBSITE,
  VANT_GIT_REPO,
  VANT_SOURCE_LOCAL,
  VERSION_LIST,
  VANT_PUBLIC_PATH,
  VANT_MOBILE_LOCAL_PREFIX,
  VANT_MOBILE_PAGE_V2_PATH,
  VANT_MOBILE_PAGE_V3_PATH,
  VANT_MOBILE_PAGE_CONCAT_PATH,
  VANT_MENU_CONCAT_JSON,
  VANT_STYLES_CONCAT_JSON
}