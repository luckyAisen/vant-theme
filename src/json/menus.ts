import baseMenuCN from "./menus/zh-cn/base.json";
import v2MenuCN from "./menus/zh-cn/v2.json";
import v3MenuCN from "./menus/zh-cn/v3.json";
import v4MenuCN from "./menus/zh-cn/v4.json";
import baseMenuUS from "./menus/en-us/base.json";
import v2MenuUS from "./menus/en-us/v2.json";
import v3MenuUS from "./menus/en-us/v3.json";
import v4MenuUS from "./menus/en-us/v4.json";
import type { Version, Language, Menu } from "@/utils/type";

// export const getBasicMenu = async (language: Language): Promise<Menu[]> => {
//   const lang = language.toLocaleLowerCase();
//   const { default: baseMenu } = await import(`./menus/${lang}/base.json`);
//   return baseMenu;
// };

// const getMenu = async (
//   version: Version,
//   language: Language
// ): Promise<Menu[]> => {
//   const v = version;
//   const lang = language.toLocaleLowerCase();
//   const baseMenu = await getBasicMenu(language);
//   const { default: componentMenu } = await import(`./menus/${lang}/${v}.json`);
//   return [baseMenu, ...componentMenu];
// };

const getMenu = (version: Version, language: Language): Menu[] => {
  const v = version;
  const lang = language;
  const baseMap = {
    "zh-CN": baseMenuCN,
    "en-US": baseMenuUS,
  };
  const menuMap = {
    "zh-CN": {
      v2: v2MenuCN,
      v3: v3MenuCN,
      v4: v4MenuCN,
    },
    "en-US": {
      v2: v2MenuUS,
      v3: v3MenuUS,
      v4: v4MenuUS,
    },
  };
  const baseMenu = baseMap[lang];
  const componentMenu = menuMap[lang][v];
  return [baseMenu, ...componentMenu];
};

export default getMenu;
