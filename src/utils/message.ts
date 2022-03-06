import { VANT_THEME_MESSAGE_REPLACEPATH } from "./constant";
import type { PMessage } from "./interface";
import useMainStore from "@/theme/stores";

interface Fn {
  (): void;
}

let queue: Fn[] = [];

let isIframeReady = false;

export function iframeReady(callback: Fn): void {
  if (isIframeReady) {
    callback();
  } else {
    queue.push(callback);
  }
}

if (window.top === window) {
  window.addEventListener("message", (event) => {
    if (event.data.type === "iframeReady") {
      isIframeReady = true;
      const iframe = document.querySelector("iframe");
      if (iframe && iframe.contentDocument) {
        const style = document.createElement("style");
        style.textContent = `.demo-nav__back { display: none; }`;
        iframe.contentDocument.head.appendChild(style);
      }
      queue.forEach((callback) => callback());
      queue = [];
    }

    if (event.data.type === VANT_THEME_MESSAGE_REPLACEPATH) {
      const $store = useMainStore();
      const hash =
        event.data.value === "/zh-CN" || event.data.value === "/en-US"
          ? "base"
          : event.data.value;
      $store.menuChange(hash);
    }
  });
}

export function postMessageToChild(message: PMessage) {
  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframeReady(() => {
      iframe?.contentWindow?.postMessage(message, "*");
    });
  }
}
