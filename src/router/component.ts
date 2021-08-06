import { RouteRecordRaw } from 'vue-router'

const componentRoutes: Array<RouteRecordRaw> = [
  {
    path: 'base',
    name: 'Base',
    component: () =>
      import(
        /* webpackChunkName: "component-base" */ '../views/component/base.vue'
      )
  },
  {
    path: 'button',
    name: 'Button',
    component: () =>
      import(
        /* webpackChunkName: "component-button" */ '../views/component/vant/button/demo/index.vue'
      )
  },
  {
    path: 'cell',
    name: 'Cell',
    component: () =>
      import(
        /* webpackChunkName: "component-cell" */ '../views/component/vant/cell/demo/index.vue'
      )
  },
  {
    path: 'image',
    name: 'Image',
    component: () =>
      import(
        /* webpackChunkName: "component-image" */ '../views/component/vant/image/demo/index.vue'
      )
  },
  {
    path: 'popup',
    name: 'Popup',
    component: () =>
      import(
        /* webpackChunkName: "component-popup" */ '../views/component/vant/popup/demo/index.vue'
      )
  },
  {
    path: 'toast',
    name: 'Toast',
    component: () =>
      import(
        /* webpackChunkName: "component-toast" */ '../views/component/vant/toast/demo/index.vue'
      )
  },
  {
    path: 'calendar',
    name: 'Calendar',
    component: () =>
      import(
        /* webpackChunkName: "component-calendar" */ '../views/component/vant/calendar/demo/index.vue'
      )
  },
  {
    path: 'cascader',
    name: 'Cascader',
    component: () =>
      import(
        /* webpackChunkName: "component-cascader" */ '../views/component/vant/cascader/demo/index.vue'
      )
  },
  {
    path: 'checkbox',
    name: 'Checkbox',
    component: () =>
      import(
        /* webpackChunkName: "component-checkbox" */ '../views/component/vant/checkbox/demo/index.vue'
      )
  },
  {
    path: 'field',
    name: 'Field',
    component: () =>
      import(
        /* webpackChunkName: "component-field" */ '../views/component/vant/field/demo/index.vue'
      )
  },
  {
    path: 'numberkeyboard',
    name: 'NumberKeyboard',
    component: () =>
      import(
        /* webpackChunkName: "component-numberkeyboard" */ '../views/component/vant/number-keyboard/demo/index.vue'
      )
  },
  {
    path: 'passwordinput',
    name: 'PasswordInput',
    component: () =>
      import(
        /* webpackChunkName: "component-passwordinput" */ '../views/component/vant/password-input/demo/index.vue'
      )
  },
  {
    path: 'picker',
    name: 'Picker',
    component: () =>
      import(
        /* webpackChunkName: "component-picker" */ '../views/component/vant/picker/demo/index.vue'
      )
  },
  {
    path: 'radio',
    name: 'Radio',
    component: () =>
      import(
        /* webpackChunkName: "component-radio" */ '../views/component/vant/radio/demo/index.vue'
      )
  },
  {
    path: 'rate',
    name: 'Rate',
    component: () =>
      import(
        /* webpackChunkName: "component-rate" */ '../views/component/vant/rate/demo/index.vue'
      )
  },
  {
    path: 'search',
    name: 'Search',
    component: () =>
      import(
        /* webpackChunkName: "component-search" */ '../views/component/vant/search/demo/index.vue'
      )
  },
  {
    path: 'slider',
    name: 'Slider',
    component: () =>
      import(
        /* webpackChunkName: "component-slider" */ '../views/component/vant/slider/demo/index.vue'
      )
  },
  {
    path: 'stepper',
    name: 'Stepper',
    component: () =>
      import(
        /* webpackChunkName: "component-stepper" */ '../views/component/vant/stepper/demo/index.vue'
      )
  },
  {
    path: 'switch',
    name: 'Switch',
    component: () =>
      import(
        /* webpackChunkName: "component-switch" */ '../views/component/vant/switch/demo/index.vue'
      )
  },
  {
    path: 'uploader',
    name: 'Uploader',
    component: () =>
      import(
        /* webpackChunkName: "component-uploader" */ '../views/component/vant/uploader/demo/index.vue'
      )
  },
  {
    path: 'actionsheet',
    name: 'ActionSheet',
    component: () =>
      import(
        /* webpackChunkName: "component-actionsheet" */ '../views/component/vant/action-sheet/demo/index.vue'
      )
  },
  {
    path: 'dialog',
    name: 'Dialog',
    component: () =>
      import(
        /* webpackChunkName: "component-dialog" */ '../views/component/vant/dialog/demo/index.vue'
      )
  },
  {
    path: 'dropdownmenu',
    name: 'DropdownMenu',
    component: () =>
      import(
        /* webpackChunkName: "component-dropdownmenu" */ '../views/component/vant/dropdown-menu/demo/index.vue'
      )
  },
  {
    path: 'loading',
    name: 'Loading',
    component: () =>
      import(
        /* webpackChunkName: "component-loading" */ '../views/component/vant/loading/demo/index.vue'
      )
  },
  {
    path: 'notify',
    name: 'Notify',
    component: () =>
      import(
        /* webpackChunkName: "component-notify" */ '../views/component/vant/notify/demo/index.vue'
      )
  },
  {
    path: 'overlay',
    name: 'Overlay',
    component: () =>
      import(
        /* webpackChunkName: "component-overlay" */ '../views/component/vant/overlay/demo/index.vue'
      )
  },
  {
    path: 'pullrefresh',
    name: 'PullRefresh',
    component: () =>
      import(
        /* webpackChunkName: "component-pullrefresh" */ '../views/component/vant/pull-refresh/demo/index.vue'
      )
  },
  {
    path: 'sharesheet',
    name: 'ShareSheet',
    component: () =>
      import(
        /* webpackChunkName: "component-sharesheet" */ '../views/component/vant/share-sheet/demo/index.vue'
      )
  },
  {
    path: 'swipecell',
    name: 'SwipeCell',
    component: () =>
      import(
        /* webpackChunkName: "component-swipecell" */ '../views/component/vant/swipe-cell/demo/index.vue'
      )
  },
  {
    path: 'badge',
    name: 'Badge',
    component: () =>
      import(
        /* webpackChunkName: "component-badge" */ '../views/component/vant/badge/demo/index.vue'
      )
  },
  {
    path: 'circle',
    name: 'Circle',
    component: () =>
      import(
        /* webpackChunkName: "component-circle" */ '../views/component/vant/circle/demo/index.vue'
      )
  },
  {
    path: 'collapse',
    name: 'Collapse',
    component: () =>
      import(
        /* webpackChunkName: "component-collapse" */ '../views/component/vant/collapse/demo/index.vue'
      )
  },
  {
    path: 'countdown',
    name: 'CountDown',
    component: () =>
      import(
        /* webpackChunkName: "component-countdown" */ '../views/component/vant/count-down/demo/index.vue'
      )
  },
  {
    path: 'divider',
    name: 'Divider',
    component: () =>
      import(
        /* webpackChunkName: "component-divider" */ '../views/component/vant/divider/demo/index.vue'
      )
  },
  {
    path: 'empty',
    name: 'Empty',
    component: () =>
      import(
        /* webpackChunkName: "component-empty" */ '../views/component/vant/empty/demo/index.vue'
      )
  },
  {
    path: 'imagepreview',
    name: 'ImagePreview',
    component: () =>
      import(
        /* webpackChunkName: "component-imagepreview" */ '../views/component/vant/image-preview/demo/index.vue'
      )
  },
  {
    path: 'list',
    name: 'List',
    component: () =>
      import(
        /* webpackChunkName: "component-list" */ '../views/component/vant/list/demo/index.vue'
      )
  },
  {
    path: 'noticebar',
    name: 'NoticeBar',
    component: () =>
      import(
        /* webpackChunkName: "component-noticebar" */ '../views/component/vant/notice-bar/demo/index.vue'
      )
  },
  {
    path: 'popover',
    name: 'Popover',
    component: () =>
      import(
        /* webpackChunkName: "component-popover" */ '../views/component/vant/popover/demo/index.vue'
      )
  },
  {
    path: 'progress',
    name: 'Progress',
    component: () =>
      import(
        /* webpackChunkName: "component-progress" */ '../views/component/vant/progress/demo/index.vue'
      )
  },
  {
    path: 'skeleton',
    name: 'Skeleton',
    component: () =>
      import(
        /* webpackChunkName: "component-skeleton" */ '../views/component/vant/skeleton/demo/index.vue'
      )
  },
  {
    path: 'steps',
    name: 'Steps',
    component: () =>
      import(
        /* webpackChunkName: "component-steps" */ '../views/component/vant/steps/demo/index.vue'
      )
  },
  {
    path: 'sticky',
    name: 'Sticky',
    component: () =>
      import(
        /* webpackChunkName: "component-sticky" */ '../views/component/vant/sticky/demo/index.vue'
      )
  },
  {
    path: 'swipe',
    name: 'Swipe',
    component: () =>
      import(
        /* webpackChunkName: "component-swipe" */ '../views/component/vant/swipe/demo/index.vue'
      )
  },
  {
    path: 'tag',
    name: 'Tag',
    component: () =>
      import(
        /* webpackChunkName: "component-tag" */ '../views/component/vant/tag/demo/index.vue'
      )
  },
  {
    path: 'actionbar',
    name: 'ActionBar',
    component: () =>
      import(
        /* webpackChunkName: "component-actionbar" */ '../views/component/vant/action-bar/demo/index.vue'
      )
  },
  {
    path: 'grid',
    name: 'Grid',
    component: () =>
      import(
        /* webpackChunkName: "component-grid" */ '../views/component/vant/grid/demo/index.vue'
      )
  },
  {
    path: 'indexbar',
    name: 'IndexBar',
    component: () =>
      import(
        /* webpackChunkName: "component-indexbar" */ '../views/component/vant/index-bar/demo/index.vue'
      )
  },
  {
    path: 'navbar',
    name: 'NavBar',
    component: () =>
      import(
        /* webpackChunkName: "component-navbar" */ '../views/component/vant/nav-bar/demo/index.vue'
      )
  },
  {
    path: 'pagination',
    name: 'Pagination',
    component: () =>
      import(
        /* webpackChunkName: "component-pagination" */ '../views/component/vant/pagination/demo/index.vue'
      )
  },
  {
    path: 'sidebar',
    name: 'Sidebar',
    component: () =>
      import(
        /* webpackChunkName: "component-sidebar" */ '../views/component/vant/sidebar/demo/index.vue'
      )
  },
  {
    path: 'tab',
    name: 'Tab',
    component: () =>
      import(
        /* webpackChunkName: "component-tab" */ '../views/component/vant/tab/demo/index.vue'
      )
  },
  {
    path: 'tabbar',
    name: 'Tabbar',
    component: () =>
      import(
        /* webpackChunkName: "component-tabbar" */ '../views/component/vant/tabbar/demo/index.vue'
      )
  },
  {
    path: 'treeselect',
    name: 'TreeSelect',
    component: () =>
      import(
        /* webpackChunkName: "component-treeselect" */ '../views/component/vant/tree-select/demo/index.vue'
      )
  },
  {
    path: 'addressedit',
    name: 'AddressEdit',
    component: () =>
      import(
        /* webpackChunkName: "component-addressedit" */ '../views/component/vant/address-edit/demo/index.vue'
      )
  },
  {
    path: 'addresslist',
    name: 'AddressList',
    component: () =>
      import(
        /* webpackChunkName: "component-addresslist" */ '../views/component/vant/address-list/demo/index.vue'
      )
  },
  {
    path: 'card',
    name: 'Card',
    component: () =>
      import(
        /* webpackChunkName: "component-card" */ '../views/component/vant/card/demo/index.vue'
      )
  },
  {
    path: 'contactcard',
    name: 'ContactCard',
    component: () =>
      import(
        /* webpackChunkName: "component-contactcard" */ '../views/component/vant/contact-card/demo/index.vue'
      )
  },
  {
    path: 'contactedit',
    name: 'ContactEdit',
    component: () =>
      import(
        /* webpackChunkName: "component-contactedit" */ '../views/component/vant/contact-edit/demo/index.vue'
      )
  },
  {
    path: 'contactlist',
    name: 'ContactList',
    component: () =>
      import(
        /* webpackChunkName: "component-contactlist" */ '../views/component/vant/contact-list/demo/index.vue'
      )
  },
  {
    path: 'coupon',
    name: 'Coupon',
    component: () =>
      import(
        /* webpackChunkName: "component-coupon" */ '../views/component/vant/coupon-list/demo/index.vue'
      )
  },
  {
    path: 'submitbar',
    name: 'SubmitBar',
    component: () =>
      import(
        /* webpackChunkName: "component-submitbar" */ '../views/component/vant/submit-bar/demo/index.vue'
      )
  }
]
export default componentRoutes
