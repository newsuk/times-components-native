import { getFrontTileConfig } from "../utils/get-front-tile-config";

describe("getFrontTileConfig", () => {
  it("fits headline only", () => {
    const summaryConfig = {
      container: {
        height: 100,
      },
      headline: {
        height: 100,
        marginBottom: 20,
      },
      strapline: {
        height: 100,
        marginTop: 10,
        marginBottom: 15,
      },
      bylines: {
        height: 100,
        marginBottom: 20,
      },
      content: {
        lineHeight: 20,
      },
    };
    const config = getFrontTileConfig(summaryConfig);
    expect(config).toEqual({
      headline: {
        marginBottom: 0,
        show: true,
      },
      byline: {
        marginBottom: 0,
        show: false,
      },
      content: {
        marginBottom: 0,
        numberOfLines: 0,
        show: false,
      },
      strapline: {
        marginBottom: 0,
        show: false,
      },
    });
  });

  it("fits headline and strapline", () => {
    const summaryConfig = {
      container: {
        height: 200,
      },
      headline: {
        height: 100,
        marginBottom: 20,
      },
      strapline: {
        height: 80,
        marginTop: 10,
        marginBottom: 15,
      },
      bylines: {
        height: 100,
        marginBottom: 20,
      },
      content: {
        lineHeight: 20,
      },
    };
    const config = getFrontTileConfig(summaryConfig);
    expect(config).toEqual({
      headline: {
        marginBottom: 10,
        show: true,
      },
      byline: {
        marginBottom: 0,
        show: false,
      },
      content: {
        marginBottom: 0,
        numberOfLines: 0,
        show: false,
      },
      strapline: {
        marginBottom: 0,
        show: true,
      },
    });
  });

  it("fits headline, strapline and byline", () => {
    const summaryConfig = {
      container: {
        height: 100,
      },
      headline: {
        height: 40,
        marginBottom: 20,
      },
      strapline: {
        height: 20,
        marginTop: 10,
        marginBottom: 10,
      },
      bylines: {
        height: 20,
        marginBottom: 20,
      },
      content: {
        lineHeight: 20,
      },
    };
    const config = getFrontTileConfig(summaryConfig);
    expect(config).toEqual({
      headline: {
        marginBottom: 10,
        show: true,
      },
      byline: {
        marginBottom: 0,
        show: true,
      },
      strapline: {
        marginBottom: 10,
        show: true,
      },
      content: {
        marginBottom: 0,
        numberOfLines: 0,
        show: false,
      },
    });
  });

  it("fits headline, strapline, byline and 2 lines of content", () => {
    const summaryConfig = {
      container: {
        height: 340,
      },
      headline: {
        height: 80,
        marginBottom: 20,
      },
      strapline: {
        height: 80,
        marginTop: 10,
        marginBottom: 15,
      },
      bylines: {
        height: 80,
        marginBottom: 20,
      },
      content: {
        lineHeight: 20,
      },
    };
    const config = getFrontTileConfig(summaryConfig);
    expect(config).toEqual({
      headline: {
        marginBottom: 10,
        show: true,
      },
      byline: {
        marginBottom: 20,
        show: true,
      },
      strapline: {
        marginBottom: 15,
        show: true,
      },
      content: {
        marginBottom: 0,
        numberOfLines: 2,
        show: true,
      },
    });
  });

  it("fits headline and 2 lines of content if there is no room for headline/byline and content", () => {
    const summaryConfig = {
      container: {
        height: 100,
      },
      headline: {
        height: 20,
        marginBottom: 20,
      },
      strapline: {
        height: 0,
        marginTop: 10,
        marginBottom: 15,
      },
      bylines: {
        height: 40,
        marginBottom: 20,
      },
      content: {
        lineHeight: 20,
      },
    };
    const config = getFrontTileConfig(summaryConfig);
    expect(config).toEqual({
      headline: {
        marginBottom: 20,
        show: true,
      },
      byline: {
        marginBottom: 0,
        show: false,
      },
      strapline: {
        marginBottom: 0,
        show: false,
      },
      content: {
        marginBottom: 0,
        numberOfLines: 3,
        show: true,
      },
    });
  });

  it("fits headline, strapline, byline and hides content if only 1 line fits", () => {
    const summaryConfig = {
      container: {
        height: 100,
      },
      headline: {
        height: 20,
        marginBottom: 20,
      },
      strapline: {
        height: 10,
        marginTop: 10,
        marginBottom: 10,
      },
      bylines: {
        height: 40,
        marginBottom: 20,
      },
      content: {
        lineHeight: 40,
      },
    };
    const config = getFrontTileConfig(summaryConfig);
    expect(config).toEqual({
      headline: {
        marginBottom: 10,
        show: true,
      },
      byline: {
        marginBottom: 0,
        show: true,
      },
      strapline: {
        marginBottom: 10,
        show: true,
      },
      content: {
        marginBottom: 0,
        numberOfLines: 0,
        show: false,
      },
    });
  });

  it("fits headline and byline (when strapline is missing)", () => {
    const summaryConfig = {
      container: {
        height: 100,
      },
      headline: {
        height: 60,
        marginBottom: 20,
      },
      strapline: {
        height: 0,
        marginTop: 10,
        marginBottom: 25,
      },
      bylines: {
        height: 20,
        marginBottom: 20,
      },
      content: {
        lineHeight: 20,
      },
    };
    const config = getFrontTileConfig(summaryConfig);
    expect(config).toEqual({
      headline: {
        marginBottom: 20,
        show: true,
      },
      byline: {
        marginBottom: 0,
        show: true,
      },
      strapline: {
        marginBottom: 0,
        show: false,
      },
      content: {
        marginBottom: 0,
        numberOfLines: 0,
        show: false,
      },
    });
  });

  it("fits headline and content (when strapline and byline are missing)", () => {
    const summaryConfig = {
      container: {
        height: 200,
      },
      headline: {
        height: 80,
        marginBottom: 20,
      },
      strapline: {
        height: 0,
        marginTop: 20,
        marginBottom: 20,
      },
      bylines: {
        height: 0,
        marginBottom: 20,
      },
      content: {
        lineHeight: 20,
      },
    };
    const config = getFrontTileConfig(summaryConfig);
    expect(config).toEqual({
      headline: {
        marginBottom: 20,
        show: true,
      },
      byline: {
        marginBottom: 0,
        show: false,
      },
      strapline: {
        marginBottom: 0,
        show: false,
      },
      content: {
        marginBottom: 0,
        numberOfLines: 5,
        show: true,
      },
    });
  });
});
