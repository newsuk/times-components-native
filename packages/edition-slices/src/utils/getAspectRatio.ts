export default (ratio: string) => {
  const [ratioWidth, ratioHeight] = ratio.split(":");

  return Number(ratioWidth) / Number(ratioHeight);
};
