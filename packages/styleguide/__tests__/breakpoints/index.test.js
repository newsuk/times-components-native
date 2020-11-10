import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

describe("getStyleByDeviceSize", () => {
  const styles = {
    "810": {
      backgroundColor: "amber",
    },
    "768": {
      backgroundColor: "red",
    },
    "834": {
      ratios: {
        0: {
          backgroundColor: "yellow",
        },
        0.5: {
          backgroundColor: "grey",
        },
      },
    },
    "1024": {
      backgroundColor: "green",
    },
  };

  it("gets smallest device style", () => {
    expect(getStyleByDeviceSize(styles, 768, 1500)).toEqual(styles["768"]);
    expect(getStyleByDeviceSize(styles, 809, 1500)).toEqual(styles["768"]);
  });

  it("gets medium device style", () => {
    expect(getStyleByDeviceSize(styles, 810, 1500)).toEqual(styles["810"]);
    expect(getStyleByDeviceSize(styles, 833, 1500)).toEqual(styles["810"]);
  });

  it("gets largest device style", () => {
    expect(getStyleByDeviceSize(styles, 1024, 1500)).toEqual(styles["1024"]);
    expect(getStyleByDeviceSize(styles, 1366, 1500)).toEqual(styles["1024"]);
  });

  it("gets device style with ratio refinement", () => {
    expect(getStyleByDeviceSize(styles, 834, 2000)).toEqual(
      styles["834"].ratios["0"],
    );
    expect(getStyleByDeviceSize(styles, 834, 1000)).toEqual(
      styles["834"].ratios["0.5"],
    );
  });
});
