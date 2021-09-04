const utils = require('./utils')

async function build() {
  await utils.downloadCode()
  await utils.copyFile()
  await utils.match()
  utils.runBuild()
}

build()
