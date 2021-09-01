export type Menu = {
  type?: string
  label?: string
  key?: string
  children?: Menu[]
}

export type Style = {
  id: string
  styles: string[]
}

export type Attr = {
  varName: string
  varValue: string
  component?: string
  suffix?: string
  unit?: string
}

export type MenuGroup = Menu[]

export type StyleGroup = Style[]

export type AttrsGroup = Attr[]

export interface Property {
  [propName: string]: any
  [propName: number]: any
}

export interface Theme {
  id?: number
  name?: string
  update?: number | string
  theme?: {
    [propName: string]: number | string | boolean
  }
}

export interface PMessage {
  type: string
  value?: string | null
}

export interface Fn {
  (): void
}
