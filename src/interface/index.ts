export type MenuItem = {
  id: string
  name: string
  children?: MenuItem[]
}

export type StyleItem = {
  id: string
  styles: string[]
}

export type AttrsItem = {
  varName: string
  varValue: string
  component?: string
  suffix?: string
  unit?: string
}

export type MenuGroup = MenuItem[]

export type StyleGroup = StyleItem[]

export type AttrsGroup = AttrsItem[]

export type ChangeAttr = {
  index: number
  key: string
  value: string
}
