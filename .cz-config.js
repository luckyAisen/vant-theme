module.exports = {

  // types: 描述修改的性质是什么，是bugfix还是feat，在这里进行定义
  types: [
    { value: 'feat', name: 'feat:     新增产品功能' },
    { value: 'fix', name: 'fix:      修复 bug' },
    { value: 'test', name: 'test:     添加、修改测试用例' },
    {
      value: 'perf',
      name: 'perf:     性能优化'
    },
    {
      value: 'style',
      name: 'style:    不改变代码功能的变动(如删除空格、格式化、去掉末尾分号等)'
    },
    {
      value: 'refactor',
      name: 'refactor: 重构代码。不包括 bug 修复、功能新增'
    },
    { value: 'docs', name: 'docs:     文档的变更' },
    {
      value: 'build',
      name:
        'build:    构建流程、外部依赖变更，比如升级 npm 包、修改 webpack 配置'
    },
    { value: 'ci', name: 'ci:       修改了 CI 配置、脚本' },
    {
      value: 'chore',
      name:
        'chore:    对构建过程或辅助工具和库的更改,不影响源文件、测试用例的其他操作'
    },
    { value: 'revert', name: 'revert:   回滚 commit' }
  ],

  // scope 设置 影响范围 选项
  scopes: [
    ['views', '视图相关'],
    ['components', '组件相关'],
    ['styles', '样式相关'],
    ['element-ui', '对 element-ui 主题的调整'],
    ['utils', 'utils 相关'],
    ['api', 'serveice 接口服务相关'],
    ['deps', '项目依赖'],
    ['other', '其他修改'],
    // 如果选择 custom ,后面会让你再输入一个自定义的 scope , 也可以不设置此项， 把后面的 allowCustomScopes 设置为 true
    ['custom', '以上都不是？我要自定义']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  // 可以设置 scope 的类型跟 type 的类型匹配项
  /*
    scopeOverrides: {
      feat: [
        { name: 'views' },
        { name: 'components' },
        ...
      ],
      fix: [
        { name: 'e2eTest' },
        { name: 'unitTest' },
        ...
      ]
    },
   */

  // messages 覆写提示的信息
  messages: {
    type: '请确保你的提交遵循规范！\n选择你要提交的类型:',
    scope: '\n选择一个 scope (可选):',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入自定义的 scope:',
    subject: '填写一个简短精炼的描述语句:\n',
    body:
      '添加一个更加详细的描述，可以附上新增功能的描述或 bug 链接、截图链接 (可选)。使用 "|" 换行:\n',
    breaking: '列举非兼容性重大的变更 (可选):\n',
    footer: '列举出所有变更的 ISSUES CLOSED  (可选)。 例如.: #31, #34:\n',
    confirmCommit: '确认提交?'
  },

  // 是否允许自定义填写 scope ，设置为 true ，会自动添加两个 scope 类型 [{ name: 'empty', value: false },{ name: 'custom', value: 'custom' }]
  // allowCustomScopes: true,

  // 只有 type 为 refactor 时，才需要填写 “列举非兼容性重大的变更”
  allowBreakingChanges: ['refactor'],

  // 指定跳过哪些步骤
  skipQuestions: ['footer'],

  // subject 限制长度
  subjectLimit: 100
}
