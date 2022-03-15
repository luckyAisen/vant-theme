import useLocalStorage from "./useLocalStorage";
import { VANT_THEME_SCHEMECOLOR } from "./constant";
import type { SchemeColor } from "./type";

const storage = useLocalStorage();

export function getDefaultTheme(): SchemeColor {
  const cache = storage.getItem(VANT_THEME_SCHEMECOLOR);
  if (cache) {
    return cache as SchemeColor;
  }
  const useDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return useDark ? "dark" : "light";
}
