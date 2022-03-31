import useLocalStorage from "./useLocalStorage";
import {
  VANT_THEME_SCHEMECOLOR,
  VANT_THEME_MESSAGE_REPLACEPATH,
  VANT_THEME_MESSAGE_VARIABLES_INIT,
  VANT_THEME_MESSAGE_VARIABLES_SET,
  VANT_THEME_MESSAGE_VARIABLES_CLEAR,
} from "./constant";
import type { SchemeColor, Style, StringProp, Version } from "@/utils/type";
import type { Router } from "vue-router";

type CB = () => void;

const storage = useLocalStorage();

let queue: CB[] = [];

export let isIframeReady = false;

export function iframeReady(callback: CB) {
  if (isIframeReady) {
    callback();
  } else {
    queue.push(callback);
  }
}

export function listenIframe() {
  if (window.top === window) {
    window.addEventListener("message", (event) => {
      if (event.data.type === "iframeReady") {
        isIframeReady = true;
        queue.forEach((callback) => callback());
        queue = [];
      }
    });
  }
}

export function listenToSyncPath(router: Router) {
  window.addEventListener("message", (event) => {
    if (event.data?.type !== VANT_THEME_MESSAGE_REPLACEPATH) {
      return;
    }
    const path = event.data?.value || "";
    // should preserve hash for anchor
    if (router.currentRoute.value.path !== path) {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      router.replace(path).catch(() => {});
    }
  });
}

export function syncPathToChild() {
  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframeReady(() => {
      iframe?.contentWindow?.postMessage(
        {
          type: VANT_THEME_MESSAGE_REPLACEPATH,
          value: getCurrentDir(),
        },
        "*"
      );
    });
  }
}

export function syncThemeToChild(theme: SchemeColor) {
  window.localStorage.setItem("vantTheme", theme);
  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframeReady(() => {
      iframe?.contentWindow?.postMessage(
        {
          type: "updateTheme",
          value: theme,
        },
        "*"
      );
    });
  }
}

export function syncVariablesInitToChild(
  styles: StringProp | string,
  version: Version
) {
  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframeReady(() => {
      iframe?.contentWindow?.postMessage(
        {
          type: VANT_THEME_MESSAGE_VARIABLES_INIT,
          value: JSON.stringify(styles),
          version,
        },
        "*"
      );
    });
  }
}

export function syncVariablesSetToChild(style: Style, version: Version) {
  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframeReady(() => {
      iframe?.contentWindow?.postMessage(
        {
          type: VANT_THEME_MESSAGE_VARIABLES_SET,
          value: JSON.stringify(style),
          version,
        },
        "*"
      );
    });
  }
}

export function syncVariablesClearToChild(version: Version) {
  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframeReady(() => {
      iframe?.contentWindow?.postMessage(
        {
          type: VANT_THEME_MESSAGE_VARIABLES_CLEAR,
          version,
        },
        "*"
      );
    });
  }
}

export function getDefaultTheme(): SchemeColor {
  const cache = storage.getItem(VANT_THEME_SCHEMECOLOR);
  if (cache) {
    return cache as SchemeColor;
  }
  const useDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return useDark ? "dark" : "light";
}

export function getCurrentDir() {
  const router = (window as any).vueRouter;
  const { path } = router.currentRoute.value;
  return path;
}
