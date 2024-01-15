import { createI18n } from 'vue-i18n';
import zh from './zh.json';
import en from './en.json';

// 获取浏览器界面语言，默认语言
// https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/language
let currentLanguage = navigator.language.replace(/-(\S*)/, '');

// 如果本地缓存记录了语言环境，则使用本地缓存
const lsLocale = localStorage.getItem('locale') || '';
if (lsLocale) {
  currentLanguage = JSON.parse(lsLocale)?.curLocale;
}

export const langs = [
  { key: 'zh', title: '中文' },
  { key: 'en', title: 'English' }
];

export default createI18n({
  locale: currentLanguage,
  legacy: false, // 修复组件引入i18n时vite脚手架报错的问题
  globalInjection: true, // 全局注册 $t
  messages: {
    zh,
    en
  }
});
