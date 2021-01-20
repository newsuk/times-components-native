export const getCropByRatio = (ratio: string) => {
  const [ratioWidth, ratioHeight] = ratio.split(":");

  return `crop${ratioWidth}${ratioHeight}`;
};
