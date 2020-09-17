import { getAndroidNavHeight } from "@times-components-native/utils";
import { Dimensions } from "react-native";

describe("getAndroidNavHeight", () => {
  let dimensionsGetMock;
  beforeEach(() => {
    dimensionsGetMock = jest.spyOn(Dimensions, "get");
  });
  afterEach(() => {
    dimensionsGetMock.mockRestore();
  });

  it("returns only app nav height without OS nav bar", () => {
    dimensionsGetMock.mockImplementation(() => ({ width: 1024, height: 768 }));

    const height = getAndroidNavHeight();
    expect(height).toEqual(56);
  });

  it("returns app nav height with OS nav bar", () => {
    dimensionsGetMock.mockImplementation((type) => {
      if (type === "screen") {
        return { width: 1024, height: 778 };
      }
      if (type === "window") {
        return { width: 1024, height: 768 };
      }
    });

    const height = getAndroidNavHeight();
    expect(height).toEqual(66);
  });
});
