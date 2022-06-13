import { 
  VERSION_LIST, 
  VANT_SOURCE_LOCAL,
  VANT_MOBILE_PAGE_CONCAT_PATH 
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
  runServe,
} from "./utils.js";
// 新增update模式，合并serve & build script，取消build模式重新爬取更新带来的build过程异常缓慢 受限网络失败等问题
// update模式 重新爬取更新
const execCommandMap = {
  development: runServe,
  production: runBuild,
}
const execMode = process.argv[2] || "development";
const exec = async () => {
  execMode === 'update' && await runClean();
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
      await insertMobileScript(v);
      const zhCNMenus = await reptileMenu(v, "zh-CN");
      const enUSMenus = await reptileMenu(v, "en-US");
      await reptileCSSVariables(v, "zh-CN", zhCNMenus);
      await reptileCSSVariables(v, "en-US", enUSMenus);
    }
  }
  execMode !== 'update' && await execCommandMap[execMode]();
};
exec();
