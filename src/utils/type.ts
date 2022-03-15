export type AppHeaderLinks = {
  url: string;
  lightLogo: string;
  darkLogo: string;
};

export type SchemeColor = "light" | "dark";

export type Version = "v2" | "v3" | "v4";

export type VersionInfo = {
  key: Version;
  title: string;
  subtitle: string;
  disabled?: boolean;
  dark?: boolean;
};

export type Language = "zh-CN" | "en-US";

export type LanguageInfo = {
  key: string;
  label: string;
  disabled: boolean;
};

export type UserConfig = {
  [keyof in Version]: Theme[];
};

export type Theme = {
  version?: Version;
  id?: number;
  name?: string;
  describe?: string;
  config?: StringProp;
  create?: number | string;
  update?: number | string;
};

export interface StringProp {
  [propName: string]: string;
}

export type ModalValue = {
  name: string;
  describe: string;
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

export type Color =
  | "--van-red"
  | "--van-blue"
  | "--van-orange"
  | "--van-orange-dark"
  | "--van-orange-light"
  | "--van-green";

export type DefauleColor = {
  [keyof in Color]: string;
};
