import { StyleGroup } from './interface'
import stylesV3 from '@/json/styles-v3.json'

const BASE_STYLE: StyleGroup = [
  {
    id: 'Base',
    styles: [
      '--van-black',
      '--van-white',
      '--van-gray-1',
      '--van-gray-2',
      '--van-gray-3',
      '--van-gray-4',
      '--van-gray-5',
      '--van-gray-6',
      '--van-gray-7',
      '--van-gray-8',
      '--van-red',
      '--van-blue',
      '--van-orange',
      '--van-orange-dark',
      '--van-orange-light',
      '--van-green',

      '--van-gradient-red',
      '--van-gradient-orange',

      '--van-primary-color',
      '--van-success-color',
      '--van-danger-color',
      '--van-warning-color',
      '--van-text-color',
      '--van-active-color',
      '--van-active-opacity',
      '--van-disabled-opacity',
      '--van-background-color',
      '--van-background-color-light',
      '--van-text-link-color',

      '--van-padding-base',
      '--van-padding-xs',
      '--van-padding-sm',
      '--van-padding-md',
      '--van-padding-lg',
      '--van-padding-xl',

      '--van-font-size-xs',
      '--van-font-size-sm',
      '--van-font-size-md',
      '--van-font-size-lg',

      '--van-font-weight-bold',
      '--van-line-height-xs',
      '--van-line-height-sm',
      '--van-line-height-md',
      '--van-line-height-lg',
      '--van-base-font-family',
      '--van-price-integer-font-family',

      '--van-animation-duration-base',
      '--van-animation-duration-fast',
      '--van-animation-timing-function-enter',
      '--van-animation-timing-function-leave',

      '--van-border-color',
      '--van-border-width-base',
      '--van-border-radius-sm',
      '--van-border-radius-md',
      '--van-border-radius-lg',
      '--van-border-radius-max'
    ]
  }
]

export const APP_STYLE_LIST = [...BASE_STYLE, ...stylesV3]

export const DEFAULT_COLOR = {
  '--van-red': '#ee0a24',
  '--van-blue': '#1989fa',
  '--van-orange': '#ff976a',
  '--van-orange-dark': '#ed6a0c',
  '--van-orange-light': '#fffbe8',
  '--van-green': '#07c160'
}
