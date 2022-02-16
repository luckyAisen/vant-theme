const { spawn } = require('child_process')
const downloadGitRepo  = require('download-git-repo')
const fs = require('fs-extra')
const cheerio = require('cheerio')
const { reptile }  = require('./puppeteer.js')
const {
  logWithSpinner,
  successSpinner,
  failSpinner,
  stopSpinner
} = require('./spinner.js')
const {
  VANT_GIT_REPO,
  VANT_SOURCE_LOCAL,
  VERSION_LIST,
  VANT_MOBILE_PAGE_CONCAT_PATH,
  VANT_MENU_CONCAT_JSON,
  VANT_STYLES_CONCAT_JSON,
  VANT_PUBLIC_PATH
} = require('./constant.js')

let versionUrlMap = { v2: [], v3: [] }

/**
 * 判断文件是否存在
 * @param {String} path 文件路径
 * @returns {Boolean}
 */
async function localPathExists(path) {
  logWithSpinner(`check ${path} is exists?`)
  const exists = await fs.pathExists(`${path}`)
  if (exists) {
    successSpinner(`${path} is exists`)
  } else {
    failSpinner(`${path} no exists`)
  }
  return exists
}

/**
 * 下载 vant gh pages 资源
 * @returns
 */
function downloadSource() {
  logWithSpinner(`downloading vant gh pages source`)
  return new Promise((resolve, reject) => {
    downloadGitRepo(VANT_GIT_REPO, VANT_SOURCE_LOCAL, function (err) {
      if (err) {
        failSpinner('download failed')
        stopSpinner()
        reject()
      } else {
        successSpinner('download success')
        resolve()
      }
    })
  })
}

/**
 * 复制 mobile 文件到 src/pages 中
 */
async function copyMobilePage() {
  logWithSpinner(`handle copy mobile page file to src`)
  const promises = VERSION_LIST.map(async v => {
    const sourceFile =
      v === 'v3'
        ? `${VANT_SOURCE_LOCAL}/mobile.html`
        : `${VANT_SOURCE_LOCAL}/v2/mobile.html`
    // const targetFile = `${VANT_MOBILE_LOCAL_PREFIX}/mobile-${v}/index.html`
    const targetFile = VANT_MOBILE_PAGE_CONCAT_PATH(v)
    return await fs.copy(sourceFile, targetFile)
  })
  await Promise.all(promises)
  successSpinner(`copy file completed`)
}

/**
 * 修改 mobile 文件 标签信息
 */
async function updateMobilePageTagsInfo() {
  logWithSpinner(`update mobile page tag url`)
  const promises = VERSION_LIST.map(async v => {
    // const sourceFile = `${VANT_MOBILE_LOCAL_PREFIX}/mobile-${v}/index.html`
    const sourceFile = VANT_MOBILE_PAGE_CONCAT_PATH(v)
    const fileContent = await fs.readFile(sourceFile, 'utf-8')
    const $ = cheerio.load(fileContent)
    $('script').eq(0).remove()
    const tags = {
      'script[src]': 'src',
      'link[rel="modulepreload"]': 'href',
      'link[rel="stylesheet"]': 'href'
    }
    for (let tag in tags) {
      const selector = $(tag)
      const type = tags[tag]
      selector.each(function () {
        const src = $(this).attr(type).slice(1)
        versionUrlMap[v].push(src.split('vant/')[1])
        $(this).attr(type, `<%= BASE_URL %>${src}`)
      })
    }
    await fs.writeFile(sourceFile, $.html())
  })
  await Promise.all(promises)
  successSpinner(`update tag url completed`)
}

/**
 * 复制 mobile 文件中所需的资源到 public 目录下
 */
async function copyMobilePageSourceToPublic() {
  logWithSpinner(`copy mobile source to public`)
  const promises = VERSION_LIST.map(async v => {
    if (v === 'v2') {
      const promise = versionUrlMap.v2.map(async item => {
        await fs.copy(
          `${VANT_SOURCE_LOCAL}/${item}`,
          `${VANT_PUBLIC_PATH}/${item}`
        )
      })
      await Promise.all(promise)
    }
    if (v === 'v3') {
      await fs.copy(
        `${VANT_SOURCE_LOCAL}/assets`,
        `${VANT_PUBLIC_PATH}/assets`
      )
    }
  })
  await Promise.all(promises)
  successSpinner(`copy mobile source completed`)
}

/**
 * 复制 mobile.html 文件中 mobile.js 中的路径
 */
async function updateV3MobilePageScriptPublicPath() {
  logWithSpinner(`update mobile page script public path`)
  // const mobileFile = `${VANT_MOBILE_LOCAL_PREFIX}/mobile-v3/index.html`
  const version = 'v3'
  const mobileFile = VANT_MOBILE_PAGE_CONCAT_PATH(version)
  const mobileFileContent = await fs.readFile(mobileFile, 'utf-8')
  const $ = cheerio.load(mobileFileContent)
  const fileName = $('script[src]').eq(0).attr('src').split('/').pop()
  const targetFile = `${VANT_PUBLIC_PATH}/assets/${fileName}`
  const jsContent = await fs.readFile(targetFile, 'utf-8')
  const newJsContent = jsContent.replace(
    new RegExp('/vant/v3/', 'g'),
    '/vant-theme/vant/v3/'
  )
  await fs.writeFile(targetFile, jsContent)
  successSpinner(`update script public path completed`)
}

/**
 * 爬取官网菜单和样式列表
 */
async function reptiler() {
  logWithSpinner(`reptile vant docs menu and styles `)
  await reptile()
  successSpinner(`reptile vant menu and styles completed`)
}

function runServe() {
  spawn('npx', ['vue-cli-service serve'], { stdio: 'inherit', shell: true })
}

function runBuild() {
  spawn('npx', ['vue-cli-service build'], { stdio: 'inherit', shell: true })
}

async function runClean() {
  await fs.remove(VANT_SOURCE_LOCAL)
  await fs.remove(VANT_PUBLIC_PATH)
  const promises = VERSION_LIST.map(async v => {
    await fs.remove(VANT_MENU_CONCAT_JSON(v))
    await fs.remove(VANT_STYLES_CONCAT_JSON(v))
    await fs.remove(VANT_MOBILE_PAGE_CONCAT_PATH(v))
    return Promise.resolve()
  })
  await Promise.all(promises)
}

module.exports = {
  localPathExists,
  downloadSource,
  copyMobilePage,
  updateMobilePageTagsInfo,
  copyMobilePageSourceToPublic,
  updateV3MobilePageScriptPublicPath,
  reptiler,
  runServe,
  runBuild,
  runClean
}