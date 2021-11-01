const {
  downloadSource,
  copyMobilePage,
  updateMobilePageTagsInfo,
  copyMobilePageSourceToPublic,
  updateV3MobilePageScriptPublicPath,
  reptiler,
  runBuild
} = require('./utils.js')

async function build() {
  await downloadSource()
  await copyMobilePage()
  await updateMobilePageTagsInfo()
  await copyMobilePageSourceToPublic()
  await updateV3MobilePageScriptPublicPath()
  await reptiler()
  runBuild()
}

build()
