import { ProjectEnum } from '@/enums';
import { getItem, setItem } from './localStorage';

import type {
  AppCompTheme,
  ProjectVersion,
  ProjectVarObject,
  ProjectVarDefault,
  ProjectVarConfig,
  ComponentVarConfig,
  WComponentVarType
} from '@/types';

/**
 * 获取 所有版本 默认的样式变量
 */
export const getAllDV = () => {
  return getItem<ProjectVarDefault>(ProjectEnum.PROJECT_VAR_DEFAULT);
};

/**
 * 获取 指定版本 默认 的样式变量
 * @param version 主题版本
 * @returns 当前版本 默认 的样式变量
 */
export const getVersionDV = (version: ProjectVersion) => {
  return getAllDV()[version];
};

/**
 * 获取 所有版本 自定义的样式变量
 */
export const getAllCV = () => {
  return getItem<ProjectVarConfig>(ProjectEnum.PROJECT_VAR_CONFIG);
};

/**
 * 获取 指定主题 自定义的样式变量
 * @param id 主题 id
 * @param appTheme 系统主题
 * @returns 当前主题 自定义 的样式变量
 */
export const getIdCV = (id: string, appCompTheme: AppCompTheme = 'light') => {
  return getAllCV()[id][appCompTheme];
};

/**
 * 设置 指定主题 自定义的样式变量
 * @param id 主题 id
 * @param appTheme 系统主题
 * @param value 自定义的 样式变量
 */
export const setIdCV = (id: string, appTheme: AppCompTheme, value: ProjectVarObject) => {
  const allCV = getAllCV();
  const cv = allCV[id];
  cv[appTheme] = value;
  allCV[id] = cv;
  setItem(ProjectEnum.PROJECT_VAR_CONFIG, allCV);
};

/**
 * 判断是否为有效的色值
 * @param color 色值
 * @returns true 有效 false 无效
 */
export const isColor = (color: string) => {
  // 利用一个 DOM 元素来进行颜色值的有效性检测
  const s = document.createElement('span');
  s.style.color = color;
  return s.style.color !== '';
};

/**
 * 判断是否为白色
 * @param color 色值
 * @returns true 为白色 false 不是白色
 */
export const isWhite = (color: string) => {
  // 将颜色转换为小写并去除空格
  const value = color.toLowerCase().trim();

  // 当色值为 white 关键字时
  if (value === 'white') {
    return true;
  }

  // 对于HEX颜色值，检查是否以 #fff 或者 #ffffff 开头来判断
  if (value === '#fff' || value === '#ffffff') {
    return true;
  }

  // 检查颜色是否为rgba格式或rgb格式
  if (value.startsWith('rgba')) {
    if (value === 'rgba(255, 255, 255, 1)' || value === 'rgba(255, 255, 255)') {
      return true;
    }
  }

  return false;

  // // 检查颜色是否为hsla格式
  // if (value.startsWith('hsla')) {
  //   // 提取HSLA值
  //   const hsla = value.match(/\d+(\.\d+)?/g).map(Number);
  //   // 判断是否为白色
  //   return hsla[0] === 0 && hsla[1] === 0 && hsla[2] === 100 && hsla[3] === 1;
  // }
};

/**
 * 判断是否为透明色
 * @param color 色值
 * @returns true 为透明色 false 不是透明色
 */
export const isTransparent = (color: string) => {
  // 将颜色转换为小写并去除空格
  const value = color.toLowerCase().trim();

  // 当色值为 transparent 关键字时
  if (value === 'transparent') {
    return true;
  }

  // // 对于HEX颜色值，检查是否以 #00 开头来判断是否为透明
  // if (value === '#000000') {
  //   return true;
  // }

  // 检查颜色是否为 rgba 格式
  if (value.startsWith('rgba')) {
    // 提取透明度值
    const alpha = parseFloat(value.split(',')[3].trim().slice(0, -1));

    if (alpha === 0) return true;
  }

  // 检查颜色是否为 rgb 格式
  if (value.startsWith('rgb')) {
    // 提取透明度值
    const alpha = parseFloat(color.split('/').slice(-1)[0]);

    if (alpha === 0) return true;
  }

  // 检查颜色是否为 hsla 格式
  if (value.startsWith('hsla')) {
    // 提取透明度值
    const alpha = parseFloat(value.split(',')[3].trim().slice(0, -1));

    if (alpha === 0) return true;
  }

  return false;
};

/**
 * 获取 css 样式变量
 * @param name 变量名
 * @returns 变量值
 */
export const getCssVariable = (name: string): string => {
  const el = document.documentElement;
  const style = getComputedStyle(el);
  const value = style.getPropertyValue(name);
  return value;
};

/**
 * 将 组件变量 转换为 WComponentVarType 类型的格式
 * @param componentVar 组件变量
 * @param version 版本
 */
export const transformVarsType = (componentVar: ProjectVarObject, version: ProjectVersion) => {
  const vars: Record<string, WComponentVarType> = {};

  const newComponentVar = componentVar;

  Object.keys(newComponentVar).forEach((key) => {
    const isVar =
      version === ProjectEnum.VERSION_2
        ? newComponentVar[key].startsWith('@')
        : newComponentVar[key].includes('var(--');

    const varLabel = isVar ? newComponentVar[key] : '';

    const name = version === ProjectEnum.VERSION_2 ? key.replace('@', '--van-') : key;

    const value = getCssVariable(name);

    vars[key] = {
      isVar,
      varLabel,
      value
    };
  });

  return vars;
};

/**
 * 生成当前组件样式变量
 * @param dv 当前组件 默认 的样式变量
 * @param cv 当前组件 自定义 的样式变量
 */
export const generateVariable = (vars: Record<string, WComponentVarType>): ComponentVarConfig => {
  const config: ComponentVarConfig = {};

  for (const [key] of Object.entries(vars)) {
    const item = vars[key];
    const type = !isColor(item.value) ? '0' : '1';
    config[key] = {
      ...item,
      type
    };
  }

  return config;
};
