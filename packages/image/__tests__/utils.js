import { getAspectRatio, getCropByRatio } from "../src/utils";

export default () => {
  describe("getAspectRatio", () => {
    test("should return aspect ratio correctly", () => {
      expect(getAspectRatio("4:2")).toEqual(2);
    });
  });

  describe("getCropByRatio", () => {
    test("should return crop correctly", () => {
      expect(getCropByRatio("3:2")).toEqual("crop32");
    });
  });
};
