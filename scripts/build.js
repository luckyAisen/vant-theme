import {
  downloadSource,
  copyMobilePage,
  // updateMobilePageTagsInfo,
  copyMobilePageSourceToPublic,
  updateV3MobilePageScriptPublicPath,
  insertMobilePageScript,
  reptiler,
  runBuild,
} from "./utils.js";

async function build() {
  await downloadSource();
  await copyMobilePage();
  await copyMobilePageSourceToPublic();
  await updateV3MobilePageScriptPublicPath();
  await insertMobilePageScript();
  await reptiler();
  runBuild();
}

build();
