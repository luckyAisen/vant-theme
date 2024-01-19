import { createI18n } from 'vue-i18n';
import { localeEnum } from '@/enums';
import zhCN from './lang/zh-CN';
import enUS from './lang/en-US';

// 获取浏览器界面语言，默认语言
// https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/language
let currentLanguage = navigator.language;

// 如果本地缓存记录了语言环境，则使用本地缓存
const lsLocale = localStorage.getItem(localeEnum.APP_LOCALE) || '';
if (lsLocale) {
  currentLanguage = lsLocale;
}

export const langs = [
  { key: localeEnum.ZH_CN, label: localeEnum.ZH_CN_TEXT },
  { key: localeEnum.EN_US, label: localeEnum.EN_US_TEXT }
];

export default createI18n({
  locale: currentLanguage,
  legacy: false, // 修复组件引入i18n时vite脚手架报错的问题
  globalInjection: true, // 全局注册 $t
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
});
