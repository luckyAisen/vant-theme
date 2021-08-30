import { setVarStyle } from '@/utils'

window.addEventListener('message', event => {
  if (event.data.type === 'setStyles') {
    const { varName: key, varValue: value } = event.data.value
    setVarStyle(key, value)
  }
})
