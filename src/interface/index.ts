import { Ref } from 'vue'
import { RouteRecordName } from 'vue-router'

export type Menu = {
  id: string
  name: string
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

export interface Props extends Property {
  index: Ref<number>
  varName: Ref<string>
  varValue: Ref<string>
  // [propName: string]: any
  // [propName: number]: any
}

export interface ConsoleComponent {
  model: Ref<string>
  handler: (value: string, id: RouteRecordName | null | undefined) => void
}

export interface Theme {
  id?: number
  name?: string
  update?: number | string
  newTheme?: {
    [propName: string]: number | string | boolean
  }
  oldTheme?: {
    [propName: string]: number | string | boolean
  }
}

export type LocalStorage = Property
