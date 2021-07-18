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
        /* webpackChunkName: "component-button" */ '../views/component/block.vue'
      )
  },
  {
    path: 'cell',
    name: 'Cell',
    component: () =>
      import(
        /* webpackChunkName: "component-cell" */ '../views/component/block.vue'
      )
  },
  {
    path: 'image',
    name: 'Image',
    component: () =>
      import(
        /* webpackChunkName: "component-image" */ '../views/component/block.vue'
      )
  },
  {
    path: 'popup',
    name: 'Popup',
    component: () =>
      import(
        /* webpackChunkName: "component-popup" */ '../views/component/block.vue'
      )
  },
  {
    path: 'toast',
    name: 'Toast',
    component: () =>
      import(
        /* webpackChunkName: "component-toast" */ '../views/component/block.vue'
      )
  },
  {
    path: 'calendar',
    name: 'Calendar',
    component: () =>
      import(
        /* webpackChunkName: "component-calendar" */ '../views/component/block.vue'
      )
  },
  {
    path: 'cascader',
    name: 'Cascader',
    component: () =>
      import(
        /* webpackChunkName: "component-cascader" */ '../views/component/block.vue'
      )
  },
  {
    path: 'checkbox',
    name: 'Checkbox',
    component: () =>
      import(
        /* webpackChunkName: "component-checkbox" */ '../views/component/block.vue'
      )
  },
  {
    path: 'field',
    name: 'Field',
    component: () =>
      import(
        /* webpackChunkName: "component-field" */ '../views/component/block.vue'
      )
  },
  {
    path: 'numberkeyboard',
    name: 'NumberKeyboard',
    component: () =>
      import(
        /* webpackChunkName: "component-numberkeyboard" */ '../views/component/block.vue'
      )
  },
  {
    path: 'passwordinput',
    name: 'PasswordInput',
    component: () =>
      import(
        /* webpackChunkName: "component-passwordinput" */ '../views/component/block.vue'
      )
  },
  {
    path: 'picker',
    name: 'Picker',
    component: () =>
      import(
        /* webpackChunkName: "component-picker" */ '../views/component/block.vue'
      )
  },
  {
    path: 'radio',
    name: 'Radio',
    component: () =>
      import(
        /* webpackChunkName: "component-radio" */ '../views/component/block.vue'
      )
  },
  {
    path: 'rate',
    name: 'Rate',
    component: () =>
      import(
        /* webpackChunkName: "component-rate" */ '../views/component/block.vue'
      )
  },
  {
    path: 'search',
    name: 'Search',
    component: () =>
      import(
        /* webpackChunkName: "component-search" */ '../views/component/block.vue'
      )
  },
  {
    path: 'slider',
    name: 'Slider',
    component: () =>
      import(
        /* webpackChunkName: "component-slider" */ '../views/component/block.vue'
      )
  },
  {
    path: 'stepper',
    name: 'Stepper',
    component: () =>
      import(
        /* webpackChunkName: "component-stepper" */ '../views/component/block.vue'
      )
  },
  {
    path: 'switch',
    name: 'Switch',
    component: () =>
      import(
        /* webpackChunkName: "component-switch" */ '../views/component/block.vue'
      )
  },
  {
    path: 'uploader',
    name: 'Uploader',
    component: () =>
      import(
        /* webpackChunkName: "component-uploader" */ '../views/component/block.vue'
      )
  },
  {
    path: 'actionsheet',
    name: 'ActionSheet',
    component: () =>
      import(
        /* webpackChunkName: "component-actionsheet" */ '../views/component/block.vue'
      )
  },
  {
    path: 'dialog',
    name: 'Dialog',
    component: () =>
      import(
        /* webpackChunkName: "component-dialog" */ '../views/component/block.vue'
      )
  },
  {
    path: 'dropdownmenu',
    name: 'DropdownMenu',
    component: () =>
      import(
        /* webpackChunkName: "component-dropdownmenu" */ '../views/component/block.vue'
      )
  },
  {
    path: 'loading',
    name: 'Loading',
    component: () =>
      import(
        /* webpackChunkName: "component-loading" */ '../views/component/block.vue'
      )
  },
  {
    path: 'notify',
    name: 'Notify',
    component: () =>
      import(
        /* webpackChunkName: "component-notify" */ '../views/component/block.vue'
      )
  },
  {
    path: 'overlay',
    name: 'Overlay',
    component: () =>
      import(
        /* webpackChunkName: "component-overlay" */ '../views/component/block.vue'
      )
  },
  {
    path: 'pullrefresh',
    name: 'PullRefresh',
    component: () =>
      import(
        /* webpackChunkName: "component-pullrefresh" */ '../views/component/block.vue'
      )
  },
  {
    path: 'sharesheet',
    name: 'ShareSheet',
    component: () =>
      import(
        /* webpackChunkName: "component-sharesheet" */ '../views/component/block.vue'
      )
  },
  {
    path: 'swipecell',
    name: 'SwipeCell',
    component: () =>
      import(
        /* webpackChunkName: "component-swipecell" */ '../views/component/block.vue'
      )
  },
  {
    path: 'badge',
    name: 'Badge',
    component: () =>
      import(
        /* webpackChunkName: "component-badge" */ '../views/component/block.vue'
      )
  },
  {
    path: 'circle',
    name: 'Circle',
    component: () =>
      import(
        /* webpackChunkName: "component-circle" */ '../views/component/block.vue'
      )
  },
  {
    path: 'collapse',
    name: 'Collapse',
    component: () =>
      import(
        /* webpackChunkName: "component-collapse" */ '../views/component/block.vue'
      )
  },
  {
    path: 'countdown',
    name: 'CountDown',
    component: () =>
      import(
        /* webpackChunkName: "component-countdown" */ '../views/component/block.vue'
      )
  },
  {
    path: 'divider',
    name: 'Divider',
    component: () =>
      import(
        /* webpackChunkName: "component-divider" */ '../views/component/block.vue'
      )
  },
  {
    path: 'empty',
    name: 'Empty',
    component: () =>
      import(
        /* webpackChunkName: "component-empty" */ '../views/component/block.vue'
      )
  },
  {
    path: 'imagepreview',
    name: 'ImagePreview',
    component: () =>
      import(
        /* webpackChunkName: "component-imagepreview" */ '../views/component/block.vue'
      )
  },
  {
    path: 'list',
    name: 'List',
    component: () =>
      import(
        /* webpackChunkName: "component-list" */ '../views/component/block.vue'
      )
  },
  {
    path: 'noticebar',
    name: 'NoticeBar',
    component: () =>
      import(
        /* webpackChunkName: "component-noticebar" */ '../views/component/block.vue'
      )
  },
  {
    path: 'popover',
    name: 'Popover',
    component: () =>
      import(
        /* webpackChunkName: "component-popover" */ '../views/component/block.vue'
      )
  },
  {
    path: 'progress',
    name: 'Progress',
    component: () =>
      import(
        /* webpackChunkName: "component-progress" */ '../views/component/block.vue'
      )
  },
  {
    path: 'skeleton',
    name: 'Skeleton',
    component: () =>
      import(
        /* webpackChunkName: "component-skeleton" */ '../views/component/block.vue'
      )
  },
  {
    path: 'steps',
    name: 'Steps',
    component: () =>
      import(
        /* webpackChunkName: "component-steps" */ '../views/component/block.vue'
      )
  },
  {
    path: 'sticky',
    name: 'Sticky',
    component: () =>
      import(
        /* webpackChunkName: "component-sticky" */ '../views/component/block.vue'
      )
  },
  {
    path: 'swipe',
    name: 'Swipe',
    component: () =>
      import(
        /* webpackChunkName: "component-swipe" */ '../views/component/block.vue'
      )
  },
  {
    path: 'tag',
    name: 'Tag',
    component: () =>
      import(
        /* webpackChunkName: "component-tag" */ '../views/component/block.vue'
      )
  },
  {
    path: 'actionbar',
    name: 'ActionBar',
    component: () =>
      import(
        /* webpackChunkName: "component-actionbar" */ '../views/component/block.vue'
      )
  },
  {
    path: 'grid',
    name: 'Grid',
    component: () =>
      import(
        /* webpackChunkName: "component-grid" */ '../views/component/block.vue'
      )
  },
  {
    path: 'indexbar',
    name: 'IndexBar',
    component: () =>
      import(
        /* webpackChunkName: "component-indexbar" */ '../views/component/block.vue'
      )
  },
  {
    path: 'navbar',
    name: 'NavBar',
    component: () =>
      import(
        /* webpackChunkName: "component-navbar" */ '../views/component/block.vue'
      )
  },
  {
    path: 'pagination',
    name: 'Pagination',
    component: () =>
      import(
        /* webpackChunkName: "component-pagination" */ '../views/component/block.vue'
      )
  },
  {
    path: 'sidebar',
    name: 'Sidebar',
    component: () =>
      import(
        /* webpackChunkName: "component-sidebar" */ '../views/component/block.vue'
      )
  },
  {
    path: 'tab',
    name: 'Tab',
    component: () =>
      import(
        /* webpackChunkName: "component-tab" */ '../views/component/block.vue'
      )
  },
  {
    path: 'tabbar',
    name: 'Tabbar',
    component: () =>
      import(
        /* webpackChunkName: "component-tabbar" */ '../views/component/block.vue'
      )
  },
  {
    path: 'treeselect',
    name: 'TreeSelect',
    component: () =>
      import(
        /* webpackChunkName: "component-treeselect" */ '../views/component/block.vue'
      )
  },
  {
    path: 'addressedit',
    name: 'AddressEdit',
    component: () =>
      import(
        /* webpackChunkName: "component-addressedit" */ '../views/component/block.vue'
      )
  },
  {
    path: 'addresslist',
    name: 'AddressList',
    component: () =>
      import(
        /* webpackChunkName: "component-addresslist" */ '../views/component/block.vue'
      )
  },
  {
    path: 'card',
    name: 'Card',
    component: () =>
      import(
        /* webpackChunkName: "component-card" */ '../views/component/block.vue'
      )
  },
  {
    path: 'contactcard',
    name: 'ContactCard',
    component: () =>
      import(
        /* webpackChunkName: "component-contactcard" */ '../views/component/block.vue'
      )
  },
  {
    path: 'contactedit',
    name: 'ContactEdit',
    component: () =>
      import(
        /* webpackChunkName: "component-contactedit" */ '../views/component/block.vue'
      )
  },
  {
    path: 'contactlist',
    name: 'ContactList',
    component: () =>
      import(
        /* webpackChunkName: "component-contactlist" */ '../views/component/block.vue'
      )
  },
  {
    path: 'coupon',
    name: 'Coupon',
    component: () =>
      import(
        /* webpackChunkName: "component-coupon" */ '../views/component/block.vue'
      )
  },
  {
    path: 'submitbar',
    name: 'SubmitBar',
    component: () =>
      import(
        /* webpackChunkName: "component-submitbar" */ '../views/component/block.vue'
      )
  }
]

export default componentRoutes
