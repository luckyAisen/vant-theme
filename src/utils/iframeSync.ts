/* eslint-disable @typescript-eslint/ban-types */
import router from '@/router';
import { IframeSyncEnum, WorkspaceEnum } from '@/enums';

import type { AppLocale, AppTheme, Theme, ThemeVarObject, ThemeVarItemConfig } from '@/types';

export type MessagePayload<T = any> = {
  type: string;
  value: T;
};

let isIframeReady = false;

let isMobileReady = false;

let iframeQueue: Function[] = [];

let mobileQueue: Function[] = [];

/**
 * 子窗口 是否加载完成，如果未加载完成，存入队列中，等 子窗口 加载完成后执行队列中的方法
 * @param callback 要执行的方法
 */
export const iframeReady = (callback: Function) => {
  if (isIframeReady) {
    callback();
  } else {
    iframeQueue.push(callback);
  }
};

/**
 * 子窗口 是否加载完成，如果未加载完成，存入队列中，等 子窗口 加载完成后执行队列中的方法
 * @param callback 要执行的方法
 */
export const mobileReady = (callback: Function) => {
  if (isMobileReady) {
    callback();
  } else {
    mobileQueue.push(callback);
  }
};

/**
 * 初始化 iframe 加载状态
 */
export const initIsIframeReady = () => {
  isIframeReady = false;
};

/**
 * 初始化 页面 加载状态
 */
export const initIsMobileReady = () => {
  isMobileReady = false;
};

/**
 * 监听 子窗口 发起的 iframe 加载完成请求
 */
export const listenToIframeReady = () => {
  window.addEventListener('message', (event) => {
    if (event.data.type === IframeSyncEnum.IFRAME_READY) {
      isIframeReady = true;
      // eslint-disable-next-line @typescript-eslint/ban-types
      iframeQueue.forEach((callback: Function) => callback());
      iframeQueue = [];
    }
  });
};

/**
 * 监听 子窗口 发起的 页面 加载完成请求
 */
export const listenToMobileReady = () => {
  window.addEventListener('message', (event) => {
    if (event.data.type === IframeSyncEnum.MOBILE_READY) {
      isMobileReady = true;
      // eslint-disable-next-line @typescript-eslint/ban-types
      mobileQueue.forEach((callback: Function) => callback());
      mobileQueue = [];
    }
  });
};

/**
 * 监听 子窗口 发起的 同步 地址（组件）请求
 */
export const listenToSyncPath = () => {
  window.addEventListener('message', (event) => {
    if (event.data?.type === IframeSyncEnum.REPLACE_PATH) {
      const { id, version, component: prevComponent } = router.currentRoute.value.params;

      let newComponent = WorkspaceEnum.WORKSPACE_BASIC;

      if (event.data?.value) {
        const values = event.data.value.split('/');
        newComponent = values[2] || WorkspaceEnum.WORKSPACE_BASIC;
      }

      // should preserve hash for anchor
      if (prevComponent !== newComponent) {
        router
          .replace({
            name: 'workspace',
            params: {
              id,
              version,
              component: newComponent
            }
          })
          .catch(() => {});
      }
    }
  });
};

/**
 * 监听 子窗口 发起的 同步 组件变量 请求
 */
export const listenToSyncGetVar = (callback: Function) => {
  window.addEventListener('message', (event) => {
    if (event.data?.type === IframeSyncEnum.GET_VAR) {
      const data = JSON.parse(event.data.value);
      callback(data);
    }
  });
};

/**
 * 同步 系统语言 到子窗口
 * @param appLocale 系统语言
 * @param theme 当前主题配置信息
 */
export const syncLocaleToChild = (appLocale: AppLocale, theme: Theme) => {
  const iframe = document.querySelector('iframe');
  if (iframe) {
    iframeReady(() => {
      iframe.contentWindow?.postMessage(
        {
          type: IframeSyncEnum.UPDATE_LOCALE,
          value: JSON.stringify({
            appLocale,
            theme
          })
        },
        '*'
      );
    });
  }
};

/**
 * 同步 系统主题 到子窗口
 * @param appTheme 系统主题
 */
export const syncThemeToChild = (appTheme: AppTheme) => {
  const iframe = document.querySelector('iframe');
  if (iframe) {
    iframeReady(() => {
      iframe.contentWindow?.postMessage(
        {
          type: IframeSyncEnum.UPDATE_THEME,
          value: appTheme
        },
        '*'
      );
    });
  }
};

/**
 * 同步 地址（组件）到子窗口
 * @param path 地址
 */
export const syncPathToChild = (path: string) => {
  const iframe = document.querySelector('iframe');
  if (iframe) {
    iframeReady(() => {
      iframe.contentWindow?.postMessage(
        {
          type: IframeSyncEnum.REPLACE_PATH,
          value: path
        },
        '*'
      );
    });
  }
};

/**
 * 向 子窗口 发起 获取组件变量 请求
 */
export const syncGetVarToChild = (componentVar: ThemeVarObject) => {
  const iframe = document.querySelector('iframe');
  if (iframe) {
    mobileReady(() => {
      iframe.contentWindow?.postMessage(
        {
          type: IframeSyncEnum.GET_VAR,
          value: JSON.stringify(componentVar)
        },
        '*'
      );
    });
  }
};

/**
 * 向 子窗口 发起 设置组件变量 请求
 */
export const syncSetVarToChild = (cvVar: ThemeVarItemConfig) => {
  const iframe = document.querySelector('iframe');
  if (iframe) {
    mobileReady(() => {
      iframe.contentWindow?.postMessage(
        {
          type: IframeSyncEnum.SET_VAR,
          value: JSON.stringify(cvVar)
        },
        '*'
      );
    });
  }
};

/**
 * 向 子窗口 发起 设置组件变量 请求
 * 用于 v2 版本
 */
export const syncSetVarV2ToChild = (value: string) => {
  const iframe = document.querySelector('iframe');
  if (iframe) {
    mobileReady(() => {
      iframe.contentWindow?.postMessage(
        {
          type: IframeSyncEnum.SET_VAR_V2,
          value
        },
        '*'
      );
    });
  }
};
