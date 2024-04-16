/**
 * 将 JSON 格式字符串转换为对象
 * @param value 值
 * @returns 转换后的对象
 */
export const parse = (value: string): string => {
  let newValue;
  try {
    newValue = JSON.parse(value);
  } catch {
    newValue = value || null;
  }
  return newValue;
};

/**
 * 将对象转换为 JSON 格式字符
 * @param value 值
 * @returns 转换后的 JSON 格式字符
 */
export const stringify = (value: unknown): string | null | undefined => {
  let newValue;
  try {
    newValue = JSON.stringify(value);
  } catch {
    newValue = newValue || null;
  }
  return newValue;
};

/**
 * 从本地存储中获取指定的值
 * @param key 键名
 * @param defaultValue 默认值
 */
export const getItem = <T>(key: string, defaultValue?: T): T => {
  const value = window.localStorage.getItem(key);
  if (value) {
    const newValue = parse(value);
    return newValue as unknown as T;
  } else if (defaultValue) {
    setItem(key, defaultValue);
    return defaultValue;
  }
  return value as unknown as T;
};

/**
 * 设置本地存储中的某个值
 * @param key 键名
 * @param value 键值
 */
export const setItem = <T>(key: string, value: T) => {
  const newValue = stringify(value);
  window.localStorage.setItem(key, newValue as string);
};

/**
 * 设置本地存储中的某个值
 * @param key 键名
 */
export const removeItem = (key: string) => {
  window.localStorage.removeItem(key);
};

/**
 * 清除本地存储
 */
export const clear = () => {
  window.localStorage.clear();
};
