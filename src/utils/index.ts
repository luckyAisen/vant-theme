import pkg from "../../package.json";
import dayjs from "dayjs";
import jszip from "jszip";
import { VERSION_VARIABLES_EL } from "./constant";
import type { Version, Theme, StringProp, Style } from "./type";

export const parseTime = (time: dayjs.ConfigType): string => {
  return dayjs(time).format("YYYY-MM-DD HH:mm");
};

export const getTime = (): number => {
  return dayjs().valueOf();
};

export const humpToScribe = (target: string): string => {
  return target.replace(/([A-Z])/g, function (match, p, offset) {
    const lower = match.toLowerCase();
    return offset !== 0 ? "-" + lower : lower;
  });
};

export const scribeToHump = (
  target: string,
  searchValue = "--van-",
  replaceValue = ""
): string => {
  const newValue = target.replace(searchValue, replaceValue);
  return newValue.replace(/-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
};

export const download = async (
  version: Version,
  theme: Theme,
  baseVariables: string[]
) => {
  const { name, config } = theme;
  if ((version === "v3" || version === "v4") && config) {
    const zip = new jszip();
    let cssCode = `:root {`;
    let jsonCode = `{`;
    const jsonBaseCode: StringProp = {};
    for (const k in config) {
      cssCode += `\n ${k}: ${config[k]};`;
      if (!baseVariables.includes(k)) {
        jsonCode += `\n"${scribeToHump(k)}": "${config[k]}",`;
      } else {
        jsonBaseCode[k] = config[k];
      }
    }
    cssCode += "\n}";
    if (Object.keys(jsonBaseCode).length > 0) {
      jsonCode += `
/**  
zh-CN: 基础变量只能通过 root 选择器修改，不能通过 ConfigProvider 组件修改。https://youzan.github.io/vant/${version}/#/zh-CN/config-provider#zhu-ti-bian-liang
en-US: The basic variables can only be modified through the root selector. https://youzan.github.io/vant/${version}/#/zh-CN/config-provider#variables
*/`;
      for (const k in jsonBaseCode) {
        jsonCode += `\n"${k}": "${config[k]}",`;
      }
    }
    jsonCode += "\n}";

    zip.file("variables.css", cssCode);
    zip.file("config-provider.json", jsonCode);
    zip.file(`${pkg.name}.json`, JSON.stringify(theme));
    // 生成zip文件并下载
    zip
      .generateAsync({
        type: "blob",
      })
      .then(function (content) {
        // 下载的文件名
        const filename = `${name}.zip`;
        // 创建隐藏的可下载链接
        const eleLink = document.createElement("a");
        eleLink.download = filename;
        eleLink.style.display = "none";
        // 下载内容转变成blob地址
        eleLink.href = URL.createObjectURL(content);
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
      });
  }
};

export const getCssVar = (name: string, version: Version): string => {
  const el = VERSION_VARIABLES_EL[version];
  const value = window.getComputedStyle(el).getPropertyValue(name);
  return value.trim();
};

export const setCssVar = (label: string, value: string, version: Version) => {
  const el = VERSION_VARIABLES_EL[version];
  el.style.setProperty(label, value);
};

export const setCssVarByConfig = (styles: StringProp, version: Version) => {
  for (const item in styles) {
    setCssVar(item, styles[item], version);
  }
};

export const clearCssVar = (version: Version) => {
  const el = VERSION_VARIABLES_EL[version];
  el.setAttribute("style", "");
};
