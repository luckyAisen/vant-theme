export const parse = (value: string): string => {
  let newValue;
  try {
    newValue = JSON.parse(value);
  } catch {
    newValue = newValue || null;
  }
  return newValue;
};

export const stringify = (value: unknown): string | null | undefined => {
  let newValue;
  try {
    newValue = JSON.stringify(value);
  } catch {
    newValue = newValue || null;
  }
  return newValue;
};

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

export const setItem = <T>(key: string, value: T) => {
  const newValue = stringify(value);
  window.localStorage.setItem(key, newValue as string);
};

export const removeItem = (key: string) => {
  window.localStorage.removeItem(key);
};

export const clear = () => {
  window.localStorage.clear();
};
