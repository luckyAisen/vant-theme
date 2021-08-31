import dayjs from 'dayjs'

import { Style, Attr, AttrsGroup } from '@/constant/interface'

export const doc = document.documentElement

export function getVarStyle(name: string, el = doc): string {
  return getComputedStyle(el).getPropertyValue(name)
}

export function setVarStyle(key: string, value: string, el = doc): void {
  el.style.setProperty(key, value)
}

export function setVarStyleByConfig(
  config: { [propName: string]: string },
  el = doc
): void {
  for (const varName in config) {
    const varValue = config[varName] as string
    setVarStyle(varName, varValue, el)
  }
}

export function getComponentStyle(
  stylesItem: Style = { id: '', styles: [] }
): AttrsGroup {
  const attrsList: AttrsGroup = []
  stylesItem.styles.map(style => {
    const varName = style
    const varValue = getVarStyle(style)
    const obj: Attr = {
      varName,
      varValue
    }
    if (varValue.trim().startsWith('#') || varValue.trim().startsWith('rgba')) {
      obj.component = 'n-color-picker'
    } else {
      obj.component = 'n-input'
      obj.suffix = 'px'
    }
    attrsList.push(obj)
  })
  return attrsList
}

export function getTime(): number {
  return dayjs().valueOf()
}

export function transitionTime(time: number): string {
  return dayjs(time).format('YYYY-MM-DD HH:mm')
}

export function humpToScribe(target: string): string {
  return target.replace(/([A-Z])/g, function (match, p, offset) {
    const lower = match.toLowerCase()
    return offset !== 0 ? '-' + lower : lower
  })
}

export function scribeToHump(
  target: string,
  searchValue = '--van-',
  replaceValue = ''
): string {
  const newValue = target.replace(searchValue, replaceValue)
  return newValue.replace(/-(\w)/g, function (all, letter) {
    return letter.toUpperCase()
  })
}