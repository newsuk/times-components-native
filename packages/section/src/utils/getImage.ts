const getRatio = (ratio: string) => {
  const ratios = ratio.split(":").map((num) => parseInt(num, 10));

  return ratios[0] / ratios[1];
};

export const getImage = ({ crops = [] }: any) => {
  if (crops.length === 0) {
    return {};
  }

  return {
    ratio: getRatio(crops[0].ratio),
    url: crops[0].url,
  };
};
