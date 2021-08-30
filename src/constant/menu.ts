import { MenuGroup } from './interface'

const BASE_MENU: MenuGroup = [
  {
    type: 'group',
    label: '基础样式变量',
    key: 'Base',
    children: [
      {
        label: 'Base 基础样式',
        key: 'Base'
      }
    ]
  }
]

export const APP_MENU_LIST: MenuGroup = [
  ...BASE_MENU,
  {
    type: 'group',
    label: '基础组件',
    key: '基础组件',
    children: [
      {
        label: 'Button 按钮',
        key: '/zh-CN/button'
      },
      {
        label: 'Cell 单元格',
        key: '/zh-CN/cell'
      },
      {
        label: 'ConfigProvider 全局配置',
        key: '/zh-CN/config-provider'
      },
      {
        label: 'Icon 图标',
        key: '/zh-CN/icon'
      },
      {
        label: 'Image 图片',
        key: '/zh-CN/image'
      },
      {
        label: 'Layout 布局',
        key: '/zh-CN/col'
      },
      {
        label: 'Popup 弹出层',
        key: '/zh-CN/popup'
      },
      {
        label: 'Style 内置样式',
        key: '/zh-CN/style'
      },
      {
        label: 'Toast 轻提示',
        key: '/zh-CN/toast'
      }
    ]
  },
  {
    type: 'group',
    label: '表单组件',
    key: '表单组件',
    children: [
      {
        label: 'Calendar 日历',
        key: '/zh-CN/calendar'
      },
      {
        label: 'Cascader 级联选择',
        key: '/zh-CN/cascader'
      },
      {
        label: 'Checkbox 复选框',
        key: '/zh-CN/checkbox'
      },
      {
        label: 'DatetimePicker 时间选择',
        key: '/zh-CN/datetime-picker'
      },
      {
        label: 'Field 输入框',
        key: '/zh-CN/field'
      },
      {
        label: 'Form 表单',
        key: '/zh-CN/form'
      },
      {
        label: 'NumberKeyboard 数字键盘',
        key: '/zh-CN/number-keyboard'
      },
      {
        label: 'PasswordInput 密码输入框',
        key: '/zh-CN/password-input'
      },
      {
        label: 'Picker 选择器',
        key: '/zh-CN/picker'
      },
      {
        label: 'Radio 单选框',
        key: '/zh-CN/radio'
      },
      {
        label: 'Rate 评分',
        key: '/zh-CN/rate'
      },
      {
        label: 'Search 搜索',
        key: '/zh-CN/search'
      },
      {
        label: 'Slider 滑块',
        key: '/zh-CN/slider'
      },
      {
        label: 'Stepper 步进器',
        key: '/zh-CN/stepper'
      },
      {
        label: 'Switch 开关',
        key: '/zh-CN/switch'
      },
      {
        label: 'Uploader 文件上传',
        key: '/zh-CN/uploader'
      }
    ]
  },
  {
    type: 'group',
    label: '反馈组件',
    key: '反馈组件',
    children: [
      {
        label: 'ActionSheet 动作面板',
        key: '/zh-CN/action-sheet'
      },
      {
        label: 'Dialog 弹出框',
        key: '/zh-CN/dialog'
      },
      {
        label: 'DropdownMenu 下拉菜单',
        key: '/zh-CN/dropdown-menu'
      },
      {
        label: 'Loading 加载',
        key: '/zh-CN/loading'
      },
      {
        label: 'Notify 消息通知',
        key: '/zh-CN/notify'
      },
      {
        label: 'Overlay 遮罩层',
        key: '/zh-CN/overlay'
      },
      {
        label: 'PullRefresh 下拉刷新',
        key: '/zh-CN/pull-refresh'
      },
      {
        label: 'ShareSheet 分享面板',
        key: '/zh-CN/share-sheet'
      },
      {
        label: 'SwipeCell 滑动单元格',
        key: '/zh-CN/swipe-cell'
      }
    ]
  },
  {
    type: 'group',
    label: '展示组件',
    key: '展示组件',
    children: [
      {
        label: 'Badge 徽标',
        key: '/zh-CN/badge'
      },
      {
        label: 'Circle 环形进度条',
        key: '/zh-CN/circle'
      },
      {
        label: 'Collapse 折叠面板',
        key: '/zh-CN/collapse'
      },
      {
        label: 'CountDown 倒计时',
        key: '/zh-CN/count-down'
      },
      {
        label: 'Divider 分割线',
        key: '/zh-CN/divider'
      },
      {
        label: 'Empty 空状态',
        key: '/zh-CN/empty'
      },
      {
        label: 'ImagePreview 图片预览',
        key: '/zh-CN/image-preview'
      },
      {
        label: 'Lazyload 懒加载',
        key: '/zh-CN/lazyload'
      },
      {
        label: 'List 列表',
        key: '/zh-CN/list'
      },
      {
        label: 'NoticeBar 通知栏',
        key: '/zh-CN/notice-bar'
      },
      {
        label: 'Popover 气泡弹出框',
        key: '/zh-CN/popover'
      },
      {
        label: 'Progress 进度条',
        key: '/zh-CN/progress'
      },
      {
        label: 'Skeleton 骨架屏',
        key: '/zh-CN/skeleton'
      },
      {
        label: 'Steps 步骤条',
        key: '/zh-CN/steps'
      },
      {
        label: 'Sticky 粘性布局',
        key: '/zh-CN/sticky'
      },
      {
        label: 'Swipe 轮播',
        key: '/zh-CN/swipe'
      },
      {
        label: 'Tag 标签',
        key: '/zh-CN/tag'
      }
    ]
  },
  {
    type: 'group',
    label: '导航组件',
    key: '导航组件',
    children: [
      {
        label: 'ActionBar 动作栏',
        key: '/zh-CN/action-bar'
      },
      {
        label: 'Grid 宫格',
        key: '/zh-CN/grid'
      },
      {
        label: 'IndexBar 索引栏',
        key: '/zh-CN/index-bar'
      },
      {
        label: 'NavBar 导航栏',
        key: '/zh-CN/nav-bar'
      },
      {
        label: 'Pagination 分页',
        key: '/zh-CN/pagination'
      },
      {
        label: 'Sidebar 侧边导航',
        key: '/zh-CN/sidebar'
      },
      {
        label: 'Tab 标签页',
        key: '/zh-CN/tab'
      },
      {
        label: 'Tabbar 标签栏',
        key: '/zh-CN/tabbar'
      },
      {
        label: 'TreeSelect 分类选择',
        key: '/zh-CN/tree-select'
      }
    ]
  },
  {
    type: 'group',
    label: '业务组件',
    key: '业务组件',
    children: [
      {
        label: 'AddressEdit 地址编辑',
        key: '/zh-CN/address-edit'
      },
      {
        label: 'AddressList 地址列表',
        key: '/zh-CN/address-list'
      },
      {
        label: 'Area 省市区选择',
        key: '/zh-CN/area'
      },
      {
        label: 'Card 商品卡片',
        key: '/zh-CN/card'
      },
      {
        label: 'ContactCard 联系人卡片',
        key: '/zh-CN/contact-card'
      },
      {
        label: 'ContactEdit 联系人编辑',
        key: '/zh-CN/contact-edit'
      },
      {
        label: 'ContactList 联系人列表',
        key: '/zh-CN/contact-list'
      },
      {
        label: 'Coupon 优惠券',
        key: '/zh-CN/coupon-list'
      },
      {
        label: 'SubmitBar 提交订单栏',
        key: '/zh-CN/submit-bar'
      }
    ]
  }
]
