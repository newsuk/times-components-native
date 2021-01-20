export const baseLeadTwoNoPicAndTwoVariant2Config = {
  support1: {
    config: {
      wide: {
        summary: { length: 800 },
        showImage: true,
        image: { ratio: "3:2", orientation: "landscape" },
      },
      huge: {
        summary: { length: 800 },
        showImage: true,
        image: { ratio: "3:2", orientation: "landscape" },
      },
      medium: {},
    },
  },
  support2: {
    config: {
      wide: {
        image: { ratio: "2:3", orientation: "portrait" },
        showImage: true,
      },
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
