import type { Property } from "@/utils/interface";

function parse(value: string): string {
  let newValue;
  try {
    newValue = JSON.parse(value);
  } catch {
    newValue = newValue || null;
  }
  return newValue;
}

function stringify(
  value: string | number | Property
): string | null | undefined {
  let newValue;
  try {
    newValue = JSON.stringify(value);
  } catch {
    newValue = newValue || null;
  }
  return newValue;
}

export default function useLocalStorage(): Property {
  function setItem(key: string, value: string | number | Property) {
    const newValue = stringify(value);
    window.localStorage.setItem(key, newValue as string);
  }

  function getItem(key: string): string | number | Property | null {
    const value = window.localStorage.getItem(key);
    if (value) {
      const newValue = parse(value);
      return newValue;
    }
    return value;
  }

  return {
    setItem,
    getItem,
  };
}
