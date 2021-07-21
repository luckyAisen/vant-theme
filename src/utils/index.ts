import { StyleItem, AttrsItem, AttrsGroup } from '@/interface'

export function getVarStyle(
  name: string,
  el = document.documentElement
): string {
  return getComputedStyle(el).getPropertyValue(name)
}

export function getAttrsGroup(stylesItem: StyleItem): AttrsGroup {
  const attrsList: AttrsGroup = []
  stylesItem.styles.map(style => {
    const varName = style
    const varValue = getVarStyle(style)
    const obj: AttrsItem = {
      varName,
      varValue
    }
    if (varValue.trim().startsWith('#')) {
      obj.component = 'n-color-picker'
      obj.varValue = varValue.toLocaleUpperCase()
    } else {
      obj.component = 'n-input'
      obj.suffix = 'px'
    }
    attrsList.push(obj)
  })
  return attrsList
}
