import { VANT_MOBILE_PAGE_CONCAT_PATH } from "./constant.js";

import {
  localPathExists,
  downloadSource,
  copyMobilePage,
  // updateMobilePageTagsInfo,
  copyMobilePageSourceToPublic,
  updateV3MobilePageScriptPublicPath,
  insertMobilePageScript,
  reptiler,
  runServe,
} from "./utils.js";

async function serve() {
  const v2 = VANT_MOBILE_PAGE_CONCAT_PATH("v2");
  const v3 = VANT_MOBILE_PAGE_CONCAT_PATH("v3");
  if (!(await localPathExists(v2)) || !(await localPathExists(v3))) {
    await downloadSource();
    await copyMobilePage();
    await copyMobilePageSourceToPublic();
    await updateV3MobilePageScriptPublicPath();
    await insertMobilePageScript();
    await reptiler();
  }
  runServe();
}

serve();
