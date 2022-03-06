import dayjs from "dayjs";
import type { Attr, Preview } from "@/utils/interface";
import { saveAs } from "file-saver";

export const docBody = document.body;

export const docIframe =
  document.querySelector("iframe")?.contentWindow?.document?.body;

export function getPageCssVarByConfig(
  componentStyles: string[],
  el = docBody
): Attr[] {
  const attrsList: Attr[] = [];
  componentStyles.forEach((style) => {
    const varName = style;
    const varValue = getPageCssVar(style, el);
    const obj: Attr = {
      varName,
      varValue,
    };
    if (varValue.trim().startsWith("#") || varValue.trim().startsWith("rgba")) {
      obj.component = "n-color-picker";
    } else {
      obj.component = "n-input";
      obj.suffix = "px";
    }
    attrsList.push(obj);
  });
  return attrsList;
}

export function getPageCssVar(name: string, el = docBody): string {
  return window.getComputedStyle(el).getPropertyValue(name);
}

export function setPageCssVarByConfig(config: Preview, el = docBody) {
  for (const varName in config) {
    const varValue = config[varName];
    setPageCssVar(varName, varValue, el);
  }
}

export function setPageCssVar(name: string, value: string, el = docBody) {
  el.style.setProperty(name, value);
}

export function clearStyle(el = docBody) {
  el.setAttribute("style", "");
}

export function getTime(): number {
  return dayjs().valueOf();
}

export function transitionTime(time: number): string {
  return dayjs(time).format("YYYY-MM-DD HH:mm");
}

export function humpToScribe(target: string): string {
  return target.replace(/([A-Z])/g, function (match, p, offset) {
    const lower = match.toLowerCase();
    return offset !== 0 ? "-" + lower : lower;
  });
}

export function scribeToHump(
  target: string,
  searchValue = "--van-",
  replaceValue = ""
): string {
  const newValue = target.replace(searchValue, replaceValue);
  return newValue.replace(/-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}

export function download(content: string, fileName: string): void {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  saveAs(blob, fileName);
}
