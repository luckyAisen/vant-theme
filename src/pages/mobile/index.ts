import { setVarStyleByConfig, setVarStyle } from '@/utils'

window.addEventListener('message', event => {
  if (event.data.type === 'initStyles') {
    const theme = JSON.parse(event.data.value)
    setVarStyleByConfig(theme)
  }
  if (event.data.type === 'setStyles') {
    const { varName: key, varValue: value } = JSON.parse(event.data.value)
    setVarStyle(key, value)
  }
})
