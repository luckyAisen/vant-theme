const { spawn } = require('child_process')
const download = require('download-git-repo')
const fs = require('fs-extra')
const cheerio = require('cheerio')
const { reptile } = require('./puppeteer')
const {
  logWithSpinner,
  successSpinner,
  failSpinner,
  stopSpinner
} = require('./spinner')
const VERSION_LIST = ['v2', 'v3']
const TMP_PATH = 'tmp'
const VANT_PATH = 'public/vant'
const VANT_MOBILE_PATH = 'src/pages'
let versionUrlMap = { v2: [], v3: [] }

/**
 * 判断文件是否存在
 * @param {String} path 文件路径
 * @returns {Boolean}
 */
async function pathExists(path) {
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
    download('youzan/vant#gh-pages', TMP_PATH, function (err) {
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
      v === 'v2' ? `${TMP_PATH}/mobile.html` : `${TMP_PATH}/v3/mobile.html`
    const targetFile = `${VANT_MOBILE_PATH}/mobile-${v}/index.html`
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
    const sourceFile = `${VANT_MOBILE_PATH}/mobile-${v}/index.html`
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
        await fs.copy(`${TMP_PATH}/${item}`, `${VANT_PATH}/${item}`)
      })
      await Promise.all(promise)
    }
    if (v === 'v3') {
      await fs.copy(`${TMP_PATH}/${v}/assets`, `${VANT_PATH}/${v}/assets`)
    }
  })
  await Promise.all(promises)
  successSpinner(`copy mobile source completed`)
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

module.exports = {
  VERSION_LIST,
  VANT_MOBILE_PATH,
  pathExists,
  downloadSource,
  copyMobilePage,
  updateMobilePageTagsInfo,
  copyMobilePageSourceToPublic,
  reptiler,
  runServe,
  runBuild
}
