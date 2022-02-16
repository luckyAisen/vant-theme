const puppeteer = require('puppeteer')
const fs = require('fs-extra')
const {
  VANT_WEBSITE,
  VANT_MENU_CONCAT_JSON,
  VANT_STYLES_CONCAT_JSON
} = require('./constant.js')

const VERSION_MAP = {
  v2: '/v2',
  v3: '/v3'
}

/**
 * 初始化 puppeteer
 * @returns
 */
async function initBrowser(options) {
  const browser = await puppeteer.launch({
    // headless: false,
    ...options
  })
  const page = await browser.newPage()
  return { page, browser }
}

/**
 * 获取 vant 官网菜单目录
 * @param {String} version 版本
 */
async function getMenu(version = 'v3') {
  const { page, browser } = await initBrowser()
  await page.goto(`${VANT_WEBSITE}${VERSION_MAP[version]}/#/zh-CN`, {
    waitUntil: 'networkidle2'
  })
  const menus = await page.evaluate(menuHandle, version)
  await createJsonFile('menus', version, menus)
  await browser.close()
  return menus
}

/**
 * 获取 vant 官网菜单目录的处理函数
 * @param {String} version 版本
 * @returns Menu[]
 */
function menuHandle(version = 'v3') {
  const lengthMap = {
    v2: 1,
    v3: 2
  }
  const vantDocsMenu = []
  const nav__group = document.querySelectorAll('.van-doc-nav__group')
  Array.from(nav__group).map((group, index) => {
    // if (index !== 0 && index !== nav__group.length - 2) {
    if (index !== 0 && index < nav__group.length - lengthMap[version]) {
      const groupItem = {}
      groupItem.type = 'group'
      groupItem.label = group.querySelector('.van-doc-nav__title').innerText
      groupItem.key = group.querySelector('.van-doc-nav__title').innerText
      groupItem.children = []
      const nav__item = group.querySelectorAll('.van-doc-nav__item')
      Array.from(nav__item).map(item => {
        const el = item.querySelector('a')
        const navItem = {}
        navItem.label = el.innerText
        navItem.key = el.getAttribute('href').split('#')[1]
        groupItem.children.push(navItem)
      })
      vantDocsMenu.push(groupItem)
    }
  })
  return vantDocsMenu
}

/**
 * 获取 vant 官网样式变量
 * @param {String} version 版本
 */
async function getStyle(version = 'v3') {
  const styles = []
  const menus = await getMenu(version)
  const { page, browser } = await initBrowser()
  for (let group = 0; group < menus.length; group++) {
    const children = menus[group].children
    if (children && children.length > 0) {
      for (let item = 0; item < children.length; item++) {
        await page.goto(
          `${VANT_WEBSITE}${VERSION_MAP[version]}/#${children[item].key}`,
          {
            waitUntil: 'networkidle2'
          }
        )
        const style = await page.evaluate(styleHandle)
        if (style.length > 0) {
          const styleItem = {
            id: children[item].key,
            styles: style
          }
          styles.push(styleItem)
        }
      }
    }
  }
  await createJsonFile('styles', version, styles)
  await browser.close()
}

/**
 * 获取 vant 官网样式变量的处理函数
 * @param {String} version 版本
 * @returns Style[]
 */
function styleHandle() {
  const ysbl = document.querySelector('#yang-shi-bian-liang')
  if (!ysbl) {
    return []
  }
  const styleGroup = ysbl.nextElementSibling.nextElementSibling
    .querySelector('tbody')
    .querySelectorAll('tr')
  const stylesList = Array.from(styleGroup).map(item => {
    return item.querySelector('td').innerText
  })
  return stylesList
}

/**
 * 创建菜单 json 文件
 * @param {String} version 版本
 */
async function createJsonFile(type, version = 'v3', data) {
  const path =
    type === 'menus'
      ? VANT_MENU_CONCAT_JSON(version)
      : VANT_STYLES_CONCAT_JSON(version)
  await fs.ensureFile(path)
  await fs.outputFile(path, JSON.stringify(data))
}

/**
 * 爬取页面数据
 */
async function reptile() {
  const version = ['v2', 'v3']
  for (let i = 0; i < version.length; i++) {
    const v = version[i]
    await getMenu(v)
    await getStyle(v)
  }
}

module.exports = {
  initBrowser,
  getMenu,
  getStyle,
  reptile
}