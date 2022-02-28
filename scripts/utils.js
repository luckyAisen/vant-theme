import { spawn } from "child_process";
import downloadGitRepo from "download-git-repo";
import fs from "fs-extra";
import cheerio from "cheerio";
import { reptile } from "./puppeteer.js";
import {
  logWithSpinner,
  successSpinner,
  failSpinner,
  stopSpinner,
} from "./spinner.js";
import {
  VANT_GIT_REPO,
  VANT_SOURCE_LOCAL,
  VERSION_LIST,
  VANT_MOBILE_PAGE_CONCAT_PATH,
  VANT_MENU_CONCAT_JSON,
  VANT_STYLES_CONCAT_JSON,
  VANT_PUBLIC_PATH,
} from "./constant.js";

let versionUrlMap = { v2: [], v3: [] };

/**
 * 判断文件是否存在
 * @param {String} path 文件路径
 * @returns {Boolean}
 */
export async function localPathExists(path) {
  logWithSpinner(`check ${path} is exists?`);
  const exists = await fs.pathExists(`${path}`);
  if (exists) {
    successSpinner(`${path} is exists`);
  } else {
    failSpinner(`${path} no exists`);
  }
  return exists;
}

/**
 * 下载 vant gh pages 资源
 * @returns
 */
export function downloadSource() {
  logWithSpinner(`downloading vant gh pages source`);
  return new Promise((resolve, reject) => {
    downloadGitRepo(VANT_GIT_REPO, VANT_SOURCE_LOCAL, function (err) {
      if (err) {
        failSpinner("download failed");
        stopSpinner();
        reject();
      } else {
        successSpinner("download success");
        resolve();
      }
    });
  });
}

/**
 * 复制 mobile 文件到 src/pages 中
 */
export async function copyMobilePage() {
  logWithSpinner(`handle copy mobile page file to src`);
  const promises = VERSION_LIST.map(async (v) => {
    const sourceFile =
      v === "v3"
        ? `${VANT_SOURCE_LOCAL}/mobile.html`
        : `${VANT_SOURCE_LOCAL}/v2/mobile.html`;
    // const targetFile = `${VANT_MOBILE_LOCAL_PREFIX}/mobile-${v}/index.html`
    const targetFile = VANT_MOBILE_PAGE_CONCAT_PATH(v);
    return await fs.copy(sourceFile, targetFile);
  });
  await Promise.all(promises);
  successSpinner(`copy file completed`);
}

/**
 * 修改 mobile 文件 标签信息
 */
export async function updateMobilePageTagsInfo() {
  logWithSpinner(`update mobile page tag url`);
  const promises = VERSION_LIST.map(async (v) => {
    // const sourceFile = `${VANT_MOBILE_LOCAL_PREFIX}/mobile-${v}/index.html`
    const sourceFile = VANT_MOBILE_PAGE_CONCAT_PATH(v);
    const fileContent = await fs.readFile(sourceFile, "utf-8");
    const $ = cheerio.load(fileContent);
    $("script").eq(0).remove();
    const tags = {
      "script[src]": "src",
      'link[rel="modulepreload"]': "href",
      'link[rel="stylesheet"]': "href",
    };
    for (let tag in tags) {
      const selector = $(tag);
      const type = tags[tag];
      selector.each(function () {
        const src = $(this).attr(type).slice(1);
        versionUrlMap[v].push(src.split("vant/")[1]);
        $(this).attr(type, `<%= BASE_URL %>${src}`);
      });
    }
    await fs.writeFile(sourceFile, $.html());
  });
  await Promise.all(promises);
  successSpinner(`update tag url completed`);
}

/**
 * 复制 mobile 文件中所需的资源到 public 目录下
 */
export async function copyMobilePageSourceToPublic() {
  logWithSpinner(`copy mobile source to public`);
  const promises = VERSION_LIST.map(async (v) => {
    if (v === "v2") {
      await fs.copy(`${VANT_SOURCE_LOCAL}/${v}`, `${VANT_PUBLIC_PATH}/${v}`);
    }
    if (v === "v3") {
      await fs.copy(
        `${VANT_SOURCE_LOCAL}/assets`,
        `${VANT_PUBLIC_PATH}/assets`
      );
    }
  });
  await Promise.all(promises);
  successSpinner(`copy mobile source completed`);
}

/**
 * 复制 mobile.html 文件中 mobile.js 中的路径
 */
export async function updateV3MobilePageScriptPublicPath() {
  logWithSpinner(`update mobile page script public path`);
  // const mobileFile = `${VANT_MOBILE_LOCAL_PREFIX}/mobile-v3/index.html`
  const version = "v3";
  const mobileFile = VANT_MOBILE_PAGE_CONCAT_PATH(version);
  const mobileFileContent = await fs.readFile(mobileFile, "utf-8");
  const $ = cheerio.load(mobileFileContent);
  const fileName = $("script[src]").eq(0).attr("src").split("/").pop();
  const targetFile = `${VANT_PUBLIC_PATH}/assets/${fileName}`;
  const jsContent = await fs.readFile(targetFile, "utf-8");
  const newJsContent = jsContent.replace(
    new RegExp("l.href=i", "g"),
    "l.href='/vant-theme' + i"
  );
  await fs.writeFile(targetFile, newJsContent);
  successSpinner(`update script public path completed`);
}

/**
 * 向 mobile 页面插入自定义脚本
 */
export async function insertMobilePageScript() {
  logWithSpinner(`insert mobile page script start`);
  const promises = VERSION_LIST.map(async (v) => {
    const sourceFile = VANT_MOBILE_PAGE_CONCAT_PATH(v);
    const fileContent = await fs.readFile(sourceFile, "utf-8");
    const $ = cheerio.load(fileContent);
    const script = '<script type="module" src="../mobile.ts"></script>';
    $("#app").after(script);
    await fs.writeFile(sourceFile, $.html());
  });
  await Promise.all(promises);
  successSpinner(`insert mobile page script completed`);
}

/**
 * 爬取官网菜单和样式列表
 */
export async function reptiler() {
  logWithSpinner(`reptile vant docs menu and styles `);
  await reptile();
  successSpinner(`reptile vant menu and styles completed`);
}

export function runServe() {
  spawn("npx", ["vite"], { stdio: "inherit", shell: true });
}

export function runBuild() {
  spawn("npx", ["vue-tsc --noEmit && vite build"], {
    stdio: "inherit",
    shell: true,
  });
}

export async function runClean() {
  await fs.remove(VANT_SOURCE_LOCAL);
  await fs.remove(VANT_PUBLIC_PATH);
  const promises = VERSION_LIST.map(async (v) => {
    await fs.remove(VANT_MENU_CONCAT_JSON(v));
    await fs.remove(VANT_STYLES_CONCAT_JSON(v));
    await fs.remove(VANT_MOBILE_PAGE_CONCAT_PATH(v));
    return Promise.resolve();
  });
  await Promise.all(promises);
}

// export default {
//   localPathExists,
//   downloadSource,
//   copyMobilePage,
//   updateMobilePageTagsInfo,
//   copyMobilePageSourceToPublic,
//   updateV3MobilePageScriptPublicPath,
//   reptiler,
//   runServe,
//   runBuild,
//   runClean,
// };
