import { setVarStyleByConfig, setVarStyle, clearStyle } from '@/utils'
import {
  MESSAGE_INIT_STYLES,
  MESSAGE_SET_STYLES,
  MESSAGE_CLEAR_STYLES
} from '@/constant'

window.addEventListener('message', event => {
  if (event.data.type === MESSAGE_INIT_STYLES) {
    const theme = JSON.parse(event.data.value)
    setVarStyleByConfig(theme)
  }
  if (event.data.type === MESSAGE_SET_STYLES) {
    const { varName: key, varValue: value } = JSON.parse(event.data.value)
    setVarStyle(key, value)
  }
  if (event.data.type === MESSAGE_CLEAR_STYLES) {
    clearStyle()
  }
})
