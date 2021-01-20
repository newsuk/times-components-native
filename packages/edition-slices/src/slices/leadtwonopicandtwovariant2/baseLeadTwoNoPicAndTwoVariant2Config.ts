export const baseLeadTwoNoPicAndTwoVariant2Config = {
  support1: {
    config: {
      base: {
        summary: { length: 800 },
      },
      wide: {
        showImage: true,
        image: { ratio: "3:2", orientation: "landscape" },
      },
      huge: {
        showImage: true,
        image: { ratio: "3:2", orientation: "landscape" },
      },
      medium: {},
    },
  },
  support2: {
    config: {
      image: { ratio: "2:3", orientation: "portrait" },
      showImage: true,
      wide: {},
      huge: {
        showImage: true,
        image: { ratio: "4:5", orientation: "landscape" },
      },
      medium: {},
    },
  },
  lead1: { config: {} },
  lead2: { config: {} },
};
