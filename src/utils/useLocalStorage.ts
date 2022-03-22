function parse(value: string): string {
  let newValue;
  try {
    newValue = JSON.parse(value);
  } catch {
    newValue = newValue || null;
  }
  return newValue;
}

function stringify(value: unknown): string | null | undefined {
  let newValue;
  try {
    newValue = JSON.stringify(value);
  } catch {
    newValue = newValue || null;
  }
  return newValue;
}

export default function useLocalStorage() {
  function getItem<T>(key: string): T {
    const value = window.localStorage.getItem(key);
    if (value) {
      const newValue = parse(value);
      return newValue as unknown as T;
    }
    return value as unknown as T;
  }

  function setItem<T>(key: string, value: T) {
    const newValue = stringify(value);
    window.localStorage.setItem(key, newValue as string);
  }

  function removeItem(key: string) {
    window.localStorage.removeItem(key);
  }

  function clear() {
    window.localStorage.clear();
  }

  return {
    getItem,
    setItem,
    removeItem,
    clear,
  };
}
