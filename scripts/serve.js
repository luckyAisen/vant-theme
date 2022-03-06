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
  // insertMobileScript,
  reptileMenu,
  reptileCSSVariables,
  runServe,
} from "./utils.js";

const serve = async () => {
  if (!(await localPathExists(VANT_SOURCE_LOCAL))) {
    await downloadVantGhSource();
    await initializeVantPublic();
  }
  const version = VERSION_LIST;
  for (let i = 0; i < version.length; i++) {
    const v = version[i];
    const mobilePath = VANT_MOBILE_PAGE_CONCAT_PATH(v);
    if (!(await localPathExists(mobilePath))) {
      await copyVantAssetsToPublic(v);
      await copyVantMobilePage(v);
      await updateMobilePageTagsInfo(v);
      await updateMobileJSPath(v);
      // await insertMobileScript(v);
      const menus = await reptileMenu(v, "zh-CN");
      await reptileMenu(v, "en-US");
      await reptileCSSVariables(v, menus);
    }
  }
  await runServe();
};

serve();
// initializeVantPublic();
// copyVantAssetsToPublic("v3");
// copyVantMobilePage("v4");
// updateMobilePageTagsInfo("v4");
// updateMobileJSPath("v3");
// reptileMenu("v2", "zh-CN");
// reptileMenu("v2", "en-US");
// reptileMenu("v3", "zh-CN");
// reptileMenu("v3", "en-US");
// reptileMenu("v4", "zh-CN");
// reptileMenu("v4", "en-US");
// reptileCSSVariables("v2");
