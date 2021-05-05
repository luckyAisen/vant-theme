module.exports =       {
  // tab缩进大小,默认为2
  tabWidth: 2,
  // 使用分号, 默认true
  semi: false,
  // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  singleQuote: true,
  /**
   * 行尾逗号,默认none,可选 none|es5|all
   * 有效选项：
   * "none" - 没有尾随逗号。
   * "es5" - 在ES5中有效的结尾逗号（对象，数组等）
   * "all"-尽可能使用尾随逗号
   */
  trailingComma: "none",
  /**
   * 支架间距:在对象文字中的括号之间打印空格。
   * 有效选项：
   * true-示例：{ foo: bar }
   * false-示例：{foo: bar}
   */
  bracketSpacing: true,
  /**
   * 箭头功能括号
   * 有效选项：
   * avoid 能省略括号的时候就省略 例如x => x
   * always 总是有括号
   */
  arrowParens: "avoid"
}
