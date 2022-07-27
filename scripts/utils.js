import { resolve } from "path";
import { spawn } from "child_process";
import downloadGitRepo from "download-git-repo";
import fs from "fs-extra";
import cheerio from "cheerio";
import puppeteer from "puppeteer";
import {
  VANT_WEBSITE,
  VANT_GIT_REPO,
  VANT_SOURCE_LOCAL,
  VERSION_LIST,
  VANT_MOBILE_PAGE_CONCAT_PATH,
  VANT_MENU_CONCAT_JSON,
  VANT_STYLES_CONCAT_JSON,
  VANT_PUBLIC_PATH,
} from "./constant.js";
import {
  logWithSpinner,
  successSpinner,
  failSpinner,
  stopSpinner,
} from "./spinner.js";

export const pathResolve = (dir) => {
  return resolve(dir);
};

/**
 * 判断文件是否存在
 * @param {String} path 文件路径
 */
export const localPathExists = async (path) => {
  const newPath = pathResolve(path);
  logWithSpinner(`check ${newPath} is exists`);
  const exists = await fs.pathExists(`${newPath}`);
  if (exists) {
    successSpinner(`${newPath} is exists`);
  } else {
    failSpinner(`${newPath} no exists`);
  }
  return exists;
};

/**
 * 下载 vant gh pages 资源
 */
export const downloadVantGhSource = () => {
  return new Promise((resolve, reject) => {
    logWithSpinner(`downloading vant gh pages source start`);
    downloadGitRepo(VANT_GIT_REPO, VANT_SOURCE_LOCAL, function (err) {
      if (err) {
        failSpinner("downloading vant gh pages source failed");
        stopSpinner();
        reject();
      } else {
        successSpinner("downloading vant gh pages source complete");
        resolve();
      }
    });
  });
};

/**
 * 初始化 vant 静态资源文件夹
 */
export const initializeVantPublic = async () => {
  logWithSpinner(`initialize vant public path start`);
  await fs.ensureDir(pathResolve(VANT_PUBLIC_PATH));
  successSpinner(`initialize vant public path complete`);
};

/**
 * 复制 vant gh pages 资源到 public 文件夹
 * @param {String} v 版本
 */
export const copyVantAssetsToPublic = async (v) => {
  let src;
  let dest;
  switch (v) {
    case "v2":
      src = `${VANT_SOURCE_LOCAL}/${v}`;
      dest = `${VANT_PUBLIC_PATH}/${v}`;
      break;
    case "v3":
      src = `${VANT_SOURCE_LOCAL}/assets`;
      dest = `${VANT_PUBLIC_PATH}/${v}`;
      break;
    case "v4":
      src = `${VANT_SOURCE_LOCAL}/${v}/assets`;
      dest = `${VANT_PUBLIC_PATH}/${v}`;
      break;
  }
  logWithSpinner(`copy vant assets to ${dest} start`);
  await fs.copy(src, dest);
  successSpinner(`copy vant assets to ${dest} complete`);
};

/**
 * 复制 mobile 文件到 src/pages 中
 * @param {String} v 版本
 */
export const copyVantMobilePage = async (v) => {
  let src;
  const dest = VANT_MOBILE_PAGE_CONCAT_PATH(v);
  switch (v) {
    case "v2":
    case "v4":
      src = `${VANT_SOURCE_LOCAL}/${v}/mobile.html`;
      break;
    case "v3":
      src = `${VANT_SOURCE_LOCAL}/mobile.html`;
      break;
  }
  logWithSpinner(`copy mobile page to ${dest} start`);
  await fs.copy(src, dest);
  successSpinner(`copy mobile page to ${dest} complete`);
};

/**
 * 修改 mobile 页面中静态资源路径
 * @param {String} v 版本
 */
export const updateMobilePageTagsInfo = async (v) => {
  const src = VANT_MOBILE_PAGE_CONCAT_PATH(v);
  logWithSpinner(`update ${src} page tag url start`);
  const fileContent = await fs.readFile(src, "utf-8");
  const $ = cheerio.load(fileContent);
  const tags = {
    "script[src]": "src",
    'link[rel="modulepreload"]': "href",
    'link[rel="stylesheet"]': "href",
  };
  for (let tag in tags) {
    const selector = $(tag);
    const type = tags[tag];
    selector.each(function () {
      let regExpStr;
      let replaceStr;
      switch (v) {
        case "v2":
          regExpStr = "/vant/v2";
          replaceStr = `/vant/${v}`;
          break;
        case "v3":
          regExpStr = "/vant/assets";
          replaceStr = `/vant/${v}`;
          break;
        case "v4":
          regExpStr = `/vant/${v}/assets`;
          replaceStr = `/vant/${v}`;
          break;
      }
      const newUrl = $(this)
        .attr(type)
        .replace(new RegExp(regExpStr, "g"), replaceStr);
      $(this).attr(type, newUrl);
    });
  }
  await fs.writeFile(src, $.html());
  successSpinner(`update ${src} page tag url complete`);
};

/**
 * 修改 mobile.js 中的模块引入路径
 * @param {String} v 版本
 */
export const updateMobileJSPath = async (v) => {
  logWithSpinner(`update mobile${v}.js path start`);
  if (v === "v2") {
    successSpinner(`mobile${v}.js no need update`);
    return;
  }
  const src = VANT_MOBILE_PAGE_CONCAT_PATH(v);
  const srcContent = await fs.readFile(src, "utf-8");
  const $ = cheerio.load(srcContent);
  const fileName = $("link[rel='modulepreload']")
    .eq(1)
    .attr("href")
    .split("/")
    .pop();
  // console.log(`\n${fileName}`);
  // return;
  const targetFile = `${VANT_PUBLIC_PATH}/${v}/${fileName}`;
  const jsContent = await fs.readFile(targetFile, "utf-8");
  /**
   * \(.*\.href=.*\)
   * \).*?\.href=.+?
   * .\.href=.,
   * const regExpStr = ").*?.href=.+?";
   */
  const str1 = jsContent.match(/(\S*)\.href=/)[1];
  const firstStr = str1[str1.length - 1];
  const lastStr = jsContent.match(/\.href=(\S*)/)[1][0];
  // console.log("\nfirstStr：", firstStr);
  // console.log("\nlastStr：", lastStr);
  let replaceStr;
  switch (v) {
    case "v3":
      replaceStr = `((i) => {
        const iarr = i.split("/assets");
        iarr.splice(1, 0, "/v3");
        return ${firstStr}.href = '/vant-theme' + iarr.join("");
      })(${lastStr}),`;
      break;
    case "v4":
      replaceStr = `((i) => {
        const iarr = i.split("/assets");
        // iarr.splice(1, 0, "/v4");
        return ${firstStr}.href = '/vant-theme' + iarr.join("");
      })(${lastStr}),`;
      break;
  }
  const newJsContent = jsContent.replace(
    new RegExp(/.\.href=.,/, "g"),
    replaceStr
  );
  await fs.writeFile(targetFile, newJsContent);
  successSpinner(`update mobile${v}.js path complete`);
};

/**
 * 向 mobile 页面插入自定义脚本
 * @param {String} v 版本
 */
export const insertMobileScript = async (v) => {
  logWithSpinner(`insert mobile script start`);
  const src = VANT_MOBILE_PAGE_CONCAT_PATH(v);
  const fileContent = await fs.readFile(src, "utf-8");
  const $ = cheerio.load(fileContent);
  const script = '<script type="module" src="./mobile.ts"></script>';
  $("#app").after(script);
  await fs.writeFile(src, $.html());
  successSpinner(`insert mobile script complete`);
};

/**
 * 初始化 puppeteer
 */
export async function initBrowser(options) {
  const browser = await puppeteer.launch({
    // headless: false,
    ...options,
  });
  const page = await browser.newPage();
  return { page, browser };
}

/**
 * 爬取 vant 官网菜单目录
 * @param {String} v 版本
 * @param {String} language 语言 中文：zh-CN 英文：en-US
 */
export const reptileMenu = async (v, language = "zh-CN") => {
  logWithSpinner(`reptile vant ${v} ${language} docs menu start`);
  const { page, browser } = await initBrowser();
  await page.goto(`${VANT_WEBSITE}/${v}/#/${language}`, {
    waitUntil: "networkidle2",
  });
  const menus = await page.evaluate((v) => {
    const lengthMap = {
      v2: 1,
      v3: 2,
      v4: 1,
    };
    const vantDocsMenu = [];
    const nav__group = document.querySelectorAll(".van-doc-nav__group");
    Array.from(nav__group).map((group, index) => {
      // if (index !== 0 && index !== nav__group.length - 2) {
      if (index !== 0 && index < nav__group.length - lengthMap[v]) {
        const groupItem = {};
        groupItem.type = "group";
        groupItem.label = group.querySelector(".van-doc-nav__title").innerText;
        groupItem.value = group.querySelector(".van-doc-nav__title").innerText;
        groupItem.children = [];
        const nav__item = group.querySelectorAll(".van-doc-nav__item");
        Array.from(nav__item).map((item) => {
          const el = item.querySelector("a");
          const navItem = {};
          navItem.label = el.innerText;
          navItem.value = el.getAttribute("href").split("#")[1];
          groupItem.children.push(navItem);
        });
        vantDocsMenu.push(groupItem);
      }
    });
    return vantDocsMenu;
  }, v);
  const path = VANT_MENU_CONCAT_JSON(v, language.toLocaleLowerCase());
  await fs.outputFile(path, JSON.stringify(menus));
  await browser.close();
  successSpinner(`reptile vant ${v} ${language} docs menu complete`);
  return menus;
};

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
  for (let group = 0; group < menus.length; group++) {
    const children = menus[group].children;
    for (let item = 0; item < children.length; item++) {
      await page.goto(`${VANT_WEBSITE}/${v}/#${children[item].value}`, {
        waitUntil: "networkidle2",
      });
      await page
        .waitForTimeout(500)
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
            const ysbl = document.querySelector(el);
            const stylesList = [];
            if (ysbl) {
              const styleGroup = ysbl.nextElementSibling.nextElementSibling
                .querySelector("tbody")
                .querySelectorAll("tr");
              const itemEl = Array.from(styleGroup);
              for (let j = 0; j < itemEl.length; j++) {
                stylesList.push({
                  label: itemEl[j].querySelector("td").innerText,
                  value: "",
                });
              }
            }
            return Promise.resolve(stylesList);
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
        });
    }
  }
  const path = VANT_STYLES_CONCAT_JSON(v, language.toLocaleLowerCase());
  await fs.outputFile(path, JSON.stringify(styles));
  console.log("menus:", JSON.stringify(menus));
  console.log("\n");
  console.log("styles:", JSON.stringify(styles));
  await browser.close();
  successSpinner(`reptile vant ${v} ${language} docs css variables complete`);
};

/**
 * 启动项目
 */
export const runServe = async () => {
  spawn("npx", ["vite"], { stdio: "inherit", shell: true });
};

/**
 * 项目打包
 */
export const runBuild = async () => {
  spawn("npx", ["vue-tsc --noEmit && vite build"], {
    stdio: "inherit",
    shell: true,
  });
};

export const runClean = async () => {
  logWithSpinner(`clean start`);
  await fs.remove(VANT_SOURCE_LOCAL);
  await fs.remove(VANT_PUBLIC_PATH);
  const version = VERSION_LIST;
  for (let i = 0; i < version.length; i++) {
    const v = version[i];
    await fs.remove(VANT_MOBILE_PAGE_CONCAT_PATH(v));
    await fs.remove(VANT_MENU_CONCAT_JSON(v, "zh-CN"));
    await fs.remove(VANT_MENU_CONCAT_JSON(v, "en-US"));
    await fs.remove(VANT_STYLES_CONCAT_JSON(v, "zh-CN"));
    await fs.remove(VANT_STYLES_CONCAT_JSON(v, "en-US"));
  }
  successSpinner(`clean complete`);
};
