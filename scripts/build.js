const {
  downloadSource,
  copyMobilePage,
  updateMobilePageTagsInfo,
  copyMobilePageSourceToPublic,
  reptiler,
  runBuild
} = require('./utils')

async function build() {
  await downloadSource()
  await copyMobilePage()
  await updateMobilePageTagsInfo()
  await copyMobilePageSourceToPublic()
  await reptiler()
  runBuild()
}

build()
