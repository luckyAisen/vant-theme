const utils = require('./utils')

async function serve() {
  if (!(await utils.pathExists())) {
    await utils.downloadCode()
    await utils.copyFile()
    await utils.match()
  }
  utils.runServe()
}

serve()
