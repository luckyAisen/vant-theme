interface Dispatch {
  getItem: (key: string) => unknown;
  setItem: (key: string, value: unknown) => void;
}

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

export default function useLocalStorage(): Dispatch {
  function getItem(key: string): unknown {
    const value = window.localStorage.getItem(key);
    if (value) {
      const newValue = parse(value);
      return newValue;
    }
    return value;
  }

  function setItem(key: string, value: unknown) {
    const newValue = stringify(value);
    window.localStorage.setItem(key, newValue as string);
  }

  return {
    getItem,
    setItem,
  };
}
