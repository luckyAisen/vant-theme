// vant 官网菜单目录
const vantDocsMenu = []
// vant 官网样式列表
const vantStyleList = []

/**
 * 获取 vant 官网菜单目录
 * @returns Menu[]
 */
function getDocMenu() {
  const nav__group = document.querySelectorAll('.van-doc-nav__group')
  Array.from(nav__group).map((group, index) => {
    if (index !== 0 && index !== nav__group.length - 1) {
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
 * 获取所有的 “样式变量”
 */
function getStyleList() {
  let count = 0
  const times = 1000
  vantDocsMenu.map(group => {
    if (group.children && group.children.length > 0) {
      group.children.map(item => {
        ++count
        setTimeout(() => {
          window.location.hash = `#${item.key}`
        }, times * count)
      })
    }
  })
}

/**
 * 获取 vant 官方文档中的 “样式变量”
 * @returns
 */
function getDocVar() {
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
 * 处理 hash 改变
 */
function handleHashChange() {
  const times = 500
  setTimeout(() => {
    const styles = getDocVar()
    if (styles.length > 0) {
      const [, hash] = window.location.hash.split('#')
      const styleItem = {
        hash,
        styles
      }
      vantStyleList.push(styleItem)
    }
  }, times)
}

function init() {
  getDocMenu()
  getStyleList()
  window.addEventListener('hashchange', handleHashChange)
}
