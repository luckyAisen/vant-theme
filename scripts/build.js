import {
  VANT_SOURCE_LOCAL,
  VERSION_LIST,
  VANT_MOBILE_PAGE_CONCAT_PATH,
} from "./constant.js";
import {
  localPathExists,
  downloadVantGhSource,
  initializeVantPublic,
  copyVantAssetsToPublic,
  copyVantMobilePage,
  updateMobilePageTagsInfo,
  updateMobileJSPath,
  insertMobileScript,
  reptileMenu,
  reptileCSSVariables,
  runBuild,
  runClean,
} from "./utils.js";

const build = async () => {
  await runClean();
  await downloadVantGhSource();
  await initializeVantPublic();
  const version = VERSION_LIST;
  for (let i = 0; i < version.length; i++) {
    const v = version[i];
    const mobilePath = VANT_MOBILE_PAGE_CONCAT_PATH(v);
    if (!(await localPathExists(mobilePath))) {
      await copyVantAssetsToPublic(v);
      await copyVantMobilePage(v);
      await updateMobilePageTagsInfo(v);
      await updateMobileJSPath(v);
      await insertMobileScript(v);
      const zhCNMenus = await reptileMenu(v, "zh-CN").then(
        reptileCSSVariables(v, "zh-CN", zhCNMenus)
      );
      const enUSMenus = await reptileMenu(v, "en-US").then(
        reptileCSSVariables(v, "en-US", enUSMenus)
      );
      // await reptileCSSVariables(v, "zh-CN", zhCNMenus);
      // await reptileCSSVariables(v, "en-US", enUSMenus);
    }
  }
  await runBuild();
};

build();
