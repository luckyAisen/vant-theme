module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/pages/main/index.ts',
      // 模板来源
      template: 'src/pages/main/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page'
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    mobile: {
      entry: 'src/pages/mobile/index.ts',
      template: 'src/pages/mobile/index.html',
      filename: 'mobile.html'
    }
  }
}
