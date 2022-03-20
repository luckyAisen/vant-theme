import type { Version, Language, Menu } from "@/utils/type";

export const getBasicMenu = async (language: Language): Promise<Menu[]> => {
  const lang = language.toLocaleLowerCase();
  const { default: baseMenu } = await import(`./menus/${lang}/base.json`);
  return baseMenu;
};

const getMenu = async (
  version: Version,
  language: Language
): Promise<Menu[]> => {
  const v = version;
  const lang = language.toLocaleLowerCase();
  const baseMenu = await getBasicMenu(language);
  const { default: componentMenu } = await import(`./menus/${lang}/${v}.json`);
  return [baseMenu, ...componentMenu];
};

export default getMenu;
