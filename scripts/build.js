import {
  downloadSource,
  copyMobilePage,
  // updateMobilePageTagsInfo,
  copyMobilePageSourceToPublic,
  // updateV3MobilePageScriptPublicPath,
  reptiler,
  runBuild,
} from "./utils.js";

async function build() {
  await downloadSource();
  await copyMobilePage();
  await copyMobilePageSourceToPublic();
  await reptiler();
  runBuild();
}

build();
