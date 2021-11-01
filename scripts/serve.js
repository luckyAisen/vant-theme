const { VANT_MOBILE_PAGE_CONCAT_PATH } = require('./constant.js')
const {
  localPathExists,
  downloadSource,
  copyMobilePage,
  updateMobilePageTagsInfo,
  copyMobilePageSourceToPublic,
  updateV3MobilePageScriptPublicPath,
  reptiler,
  runServe
} = require('./utils.js')


async function serve() {
  const v2 = VANT_MOBILE_PAGE_CONCAT_PATH('v2')
  const v3 = VANT_MOBILE_PAGE_CONCAT_PATH('v3')
  if (!(await localPathExists(v2)) || !(await localPathExists(v3))) {
    await downloadSource()
    await copyMobilePage()
    await updateMobilePageTagsInfo()
    await copyMobilePageSourceToPublic()
    await updateV3MobilePageScriptPublicPath()
    await reptiler()
  }
  runServe()
}

serve()
