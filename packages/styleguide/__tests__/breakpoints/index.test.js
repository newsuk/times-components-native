import { getStyleByDeviceSize } from "@times-components-native/styleguide/src/styleguide";

describe("getStyleByDeviceSize", () => {
  const styles = {
    "810": {
      backgroundColor: "amber",
    },
    "768": {
      backgroundColor: "red",
    },
    "1024": {
      backgroundColor: "green",
    },
  };

  it("gets smallest device style", () => {
    expect(getStyleByDeviceSize(styles, 768)).toEqual(styles["768"]);
    expect(getStyleByDeviceSize(styles, 809)).toEqual(styles["768"]);
  });

  it("gets medium device style", () => {
    expect(getStyleByDeviceSize(styles, 810)).toEqual(styles["810"]);
    expect(getStyleByDeviceSize(styles, 1023)).toEqual(styles["810"]);
  });

  it("gets largest device style", () => {
    expect(getStyleByDeviceSize(styles, 1024)).toEqual(styles["1024"]);
    expect(getStyleByDeviceSize(styles, 1366)).toEqual(styles["1024"]);
  });
});
