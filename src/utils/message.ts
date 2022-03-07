import { VANT_THEME_MESSAGE_REPLACEPATH } from "./constant";
import type { PMessage } from "./interface";
import useMainStore from "@/theme/stores";

interface Fn {
  (): void;
}

let queue: Fn[] = [];

let isIframeReady = false;

let listener: (event: MessageEvent) => void;

export const addListener = () => {
  const fn = (event: MessageEvent) => {
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
  };
  window.addEventListener("message", fn);
  listener = fn;
};

export function iframeReady(callback: Fn): void {
  if (isIframeReady) {
    callback();
  } else {
    queue.push(callback);
  }
}

export function postMessageToChild(message: PMessage, cb: Fn) {
  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframeReady(() => {
      iframe?.contentWindow?.postMessage(message, "*");
      cb();
    });
  }
}

export const removeListener = () => {
  window.removeEventListener("message", listener);
};
