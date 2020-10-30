import { getMaxSizes, getSlotConfig } from "../../src/utils";

export default () => {
  it("returns the maximum height and width from an array of arrays of sizes", () => {
    const biggestValue = 300;
    const sizes = [
      [100, biggestValue],
      [biggestValue, 200],
      [100, 200],
    ];

    expect(getMaxSizes(sizes)).toEqual({
      height: biggestValue,
      width: biggestValue,
    });
  });

  it("returns zero values if the sizes are falsey", () => {
    const defaultZeroValues = { height: 0, width: 0 };

    expect(getMaxSizes()).toEqual(defaultZeroValues);
    expect(getMaxSizes(null)).toEqual(defaultZeroValues);
    expect(getMaxSizes(undefined)).toEqual(defaultZeroValues);
  });

  it("returns config for slot for portrait only", () => {
    const config = getSlotConfig("native-section-ad-c", 1024, "portrait");
    expect(config.sizes).toEqual([[728, 90]]);
    expect(config.maxSizes).toEqual({ height: 90, width: 728 });
    expect(config.slotName).toEqual("native-section-ad-c");
  });

  it("returns config for slot for landscape only", () => {
    const config = getSlotConfig("native-section-ad-c", 1024, "landscape");
    expect(config.sizes).toEqual([[970, 250]]);
    expect(config.maxSizes).toEqual({ height: 250, width: 970 });
    expect(config.slotName).toEqual("native-section-ad-c");
  });
};
