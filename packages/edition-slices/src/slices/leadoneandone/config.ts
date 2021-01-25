const leadBaseConfig = {
  image: {
    ratio: "16:9",
  },
  headline: {
    fontSize: 30,
  },
  test: {
    aron: true,
  },
};

const supportBaseConfig = {
  headline: {
    fontSize: 20,
  },
  summary: {
    length: 800,
  },
};

export const leadOneAndOneSliceConfig = {
  lead: {
    config: {
      medium: { ...leadBaseConfig },
      wide: { ...leadBaseConfig },
      huge: { ...leadBaseConfig },
    },
  },
  support: {
    config: {
      medium: { ...supportBaseConfig },
      wide: { ...supportBaseConfig },
      huge: {
        ...supportBaseConfig,
        headline: {
          fontSize: 22,
        },
      },
    },
  },
};
