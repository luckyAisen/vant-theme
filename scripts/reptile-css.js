import fs from "fs-extra";
import { reptileMenu, initBrowser } from "./utils.js";
import { VANT_WEBSITE, VANT_STYLES_CONCAT_JSON } from "./constant.js";
import { logWithSpinner, successSpinner } from "./spinner.js";
/**
 * 爬取 vant 官网菜单目录
 * @param {String} v 版本
 * @param {String} language 语言 中文：zh-CN 英文：en-US
 * @param {Array} menu 菜单
 */
export const reptileCSSVariables = async (v, language = "zh-CN", menu) => {
  let menus = [];
  if (menu === undefined) {
    menus = await reptileMenu(v, language);
  } else {
    menus = menu;
  }
  logWithSpinner(`reptile vant ${v} ${language} docs css variables start`);
  const styles = [];
  const { page, browser } = await initBrowser();
  let group = 0,
    item = 0;
  while (group < menus.length) {
    const children = menus[group].children;
    if (children && children.length > 0) {
      while (item < children.length) {
        await page
          .goto(`${VANT_WEBSITE}/${v}/#${children[item].value}`, {
            waitUntil: "networkidle2",
          })
          .then(() => {
            let el;
            if (language === "zh-CN") {
              el = "#yang-shi-bian-liang";
            } else {
              if (v === "v2") {
                el = "#less-variables";
              } else {
                el = "#css-variables";
              }
            }
            return page.evaluate((el) => {
              // const el =
              //   language === "zh-CN"
              //     ? document.querySelector("#yang-shi-bian-liang")
              //     : document.querySelector("#css-variables");
              const ysbl = document.querySelector(el);
              if (!ysbl) {
                return [];
              } else {
                const styleGroup = ysbl.nextElementSibling.nextElementSibling
                  .querySelector("tbody")
                  .querySelectorAll("tr");
                const stylesList = [],
                  itemEl = Array.from(styleGroup);
                for (let j = 0; j < itemEl.length; j++) {
                  stylesList.push({
                    label: itemEl[j].querySelector("td").innerText,
                    value: "",
                  });
                }
                return stylesList;
              }
            }, el);
          })
          .then((style) => {
            if (style.length > 0) {
              const styleItem = {
                label: children[item].label,
                value: children[item].value,
                children: style,
              };
              styles.push(styleItem);
            }
            item++;
          });
      }
    }
    group++;
  }
  const path = VANT_STYLES_CONCAT_JSON(v, language.toLocaleLowerCase());
  await fs.outputFile(path, JSON.stringify(styles));
  await browser.close();
  successSpinner(`reptile vant ${v} ${language} docs css variables complete`);
  console.log("menus:", JSON.stringify(menus));
  console.log("\n");
  console.log("styles:", JSON.stringify(styles));
};

// reptileCSSVariables("v2", "zh-CN");
// reptileCSSVariables("v3", "zh-CN");
reptileCSSVariables("v4", "zh-CN");
