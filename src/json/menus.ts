const getGlobalMenu = async (v: string, language = "zh-cn") => {
  const lang = language.toLocaleLowerCase();
  const { default: baseMenu } = await import(`./menus/${lang}/base.json`);
  const { default: componentMenu } = await import(`./menus/${lang}/${v}.json`);
  return [baseMenu, ...componentMenu];
};

export default getGlobalMenu;
