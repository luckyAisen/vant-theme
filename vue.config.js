const pkg = require('./package.json')
const { VERSION_LIST } = require('./scripts/constant.js')
function getMobilePage() {
  const config = {}
  VERSION_LIST.map(version => {
    config[version] = {
      entry: 'src/pages/mobile.ts',
      template: `src/pages/mobile-${version}/index.html`,
      filename: `mobile-${version}.html`
    }
  })
  return config
}
module.exports = {
  publicPath: process.env.VUE_APP_PUBLICPATH, // 部署应用包时的基本 URL, https://cli.vuejs.org/zh/config/#publicpath
  pages: {
    index: {
      entry: 'src/pages/main/index.ts',
      template: 'src/pages/main/index.html',
      filename: 'index.html',
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: `${pkg.name} - ${pkg.description}`
    },
    ...getMobilePage()
  }
}
