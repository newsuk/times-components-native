import calculateContentWidth from "@times-components-native/utils/src/calculate-content-width";

describe("calculate-content-width", () => {
  describe("portrait", () => {
    it("returns the correct content width for windowWidth 1024", () => {
      expect(calculateContentWidth(1024, "portrait")).toEqual(920);
    });

    it("returns the correct content width for windowWidth 810", () => {
      expect(calculateContentWidth(810, "portrait")).toEqual(730);
    });

    it("returns the correct default content width for windowWidth less than 810", () => {
      expect(calculateContentWidth(809, "portrait")).toEqual(688);
    });
  });

  describe("landscape", () => {
    it("returns the correct content width for windowWidth 1366", () => {
      expect(calculateContentWidth(1366, "landscape")).toEqual(1140);
    });

    it("returns the correct content width for windowWidth 1194", () => {
      expect(calculateContentWidth(1194, "landscape")).toEqual(1024);
    });

    it("returns the correct content width for windowWidth 1080", () => {
      expect(calculateContentWidth(1080, "landscape")).toEqual(1000);
    });

    it("returns the correct default content width for windowWidth less than 1080", () => {
      expect(calculateContentWidth(1079, "landscape")).toEqual(944);
    });
  });
});
