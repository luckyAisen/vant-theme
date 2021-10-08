const {
  downloadSource,
  copyMobilePage,
  updateMobilePageTagsInfo,
  copyMobilePageSourceToPublic,
  updateMobilePageScriptPublicPath,
  reptiler,
  runBuild
} = require('./utils')

async function build() {
  await downloadSource()
  await copyMobilePage()
  await updateMobilePageTagsInfo()
  await copyMobilePageSourceToPublic()
  await updateMobilePageScriptPublicPath()
  await reptiler()
  runBuild()
}

build()
