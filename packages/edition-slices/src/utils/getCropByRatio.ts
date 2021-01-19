export default (ratio: string) => {
  const [ratioWidth, ratioHeight] = ratio.split(":");

  return `crop${ratioWidth}${ratioHeight}`;
};
