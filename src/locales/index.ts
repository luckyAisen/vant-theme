import { createI18n } from 'vue-i18n';
import { AppEnum } from '@/enums';
import zhCN from './lang/zh-CN';
import enUS from './lang/en-US';

// 获取浏览器界面语言，默认语言
// https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/language
let currentLanguage = navigator.language;

// 如果本地缓存记录了语言环境，则使用本地缓存
const lsLocale = localStorage.getItem(AppEnum.APP_LOCALE) || '';
if (lsLocale) {
  currentLanguage = lsLocale;
}

export const langs = [
  { label: '简体中文', value: AppEnum.APP_LOCALE_ZH_CN },
  { label: 'English', value: AppEnum.APP_LOCALE_EN_US }
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
