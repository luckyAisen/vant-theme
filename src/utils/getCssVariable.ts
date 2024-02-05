export const getCssVariable = (name: string): string => {
  const el = document.documentElement;
  const style = getComputedStyle(el);
  const value = style.getPropertyValue(name);
  return value;
};
