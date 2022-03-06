export type Language = "zh-cn" | "en-us";

export interface StringProp {
  // [propName: string]: number | string | boolean;
  [propName: string]: string;
}

export type LanguageItem = {
  key: string;
  label: string;
  disabled: boolean;
};

export type Version = "v2" | "v3" | "v4";

export type VersionItem = {
  key: string;
  label: string;
  remarks: string;
  disabled: boolean;
};

export type Menu = {
  type?: string;
  label?: string;
  key?: string;
  children?: Menu[];
};

export type Style = {
  id: string;
  styles: string[];
};

export type Theme = {
  id?: number;
  name?: string;
  update?: number | string;
  theme?: StringProp;
};

export type ThemeList = {
  v2?: Theme[];
  v3?: Theme[];
  v4?: Theme[];
};

export type Preview = StringProp;

export type Attr = {
  varName: string;
  varValue: string;
  component?: string;
  suffix?: string;
  unit?: string;
};

export interface PMessage {
  type?: string;
  value?: string;
}

export type DefaultColor =
  | "--van-red"
  | "--van-blue"
  | "--van-orange"
  | "--van-orange-dark"
  | "--van-orange-light"
  | "--van-green";
