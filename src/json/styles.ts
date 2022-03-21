import type { Version, Language, Style } from "@/utils/type";

export const getBasicCssVariables = async (
  version: Version,
  language: Language
): Promise<Style> => {
  const v = version;
  const lang = language.toLocaleLowerCase();
  const { default: baseVar } = await import(`./styles/${lang}/base-${v}.json`);
  return baseVar;
};

const getStyles = async (
  version: Version,
  language: Language
): Promise<Style[]> => {
  const v = version;
  const lang = language.toLocaleLowerCase();
  const baseVar = await getBasicCssVariables(version, language);
  const { default: componentVar } = await import(`./styles/${lang}/${v}.json`);
  return [baseVar, ...componentVar];
};

export default getStyles;
