const {
  VANT_MOBILE_PATH,
  pathExists,
  downloadSource,
  copyMobilePage,
  updateMobilePageTagsInfo,
  copyMobilePageSourceToPublic,
  reptiler,
  runServe
} = require('./utils')

async function serve() {
  const v2 = `${VANT_MOBILE_PATH}/mobile-v2/index.html`
  const v3 = `${VANT_MOBILE_PATH}/mobile-v3/index.html`
  if (!(await pathExists(v2)) || !(await pathExists(v3))) {
    await downloadSource()
    await copyMobilePage()
    await updateMobilePageTagsInfo()
    await copyMobilePageSourceToPublic()
    await reptiler()
  }
  runServe()
}

serve()
