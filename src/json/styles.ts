const getGlobalStyles = async (v: string) => {
  const { default: baseVar } = await import(`./styles/base-${v}.json`);
  const { default: componentVar } = await import(`./styles/${v}.json`);
  return [baseVar, ...componentVar];
};

export default getGlobalStyles;
