import { columnToPercentage } from "@times-components-native/styleguide";
import { Dimensions } from "react-native";

describe("columnToPercentage", () => {
  let dimensionsGetMock;
  beforeEach(() => {
    dimensionsGetMock = jest.spyOn(Dimensions, "get");
    dimensionsGetMock.mockImplementation(() => ({ width: 1024, height: 768 }));
  });
  afterEach(() => {
    dimensionsGetMock.mockRestore();
  });

  it("calculates percentage from column count", () => {
    const percentage = columnToPercentage("landscape")({ numberOfColumns: 6 });
    expect(percentage).toEqual("49.94703389830508%");
  });

  it("calculates percentage with 2 margins to factor in", () => {
    const percentage = columnToPercentage("landscape")({
      numberOfColumns: 2,
      numberOfMargins: 2,
    });
    expect(percentage).toEqual("16.931497175141242%");
  });

  it("calculates percentage with specified total number of columns", () => {
    const percentage = columnToPercentage("landscape")({
      numberOfColumns: 3,
      numberOfMargins: 0,
      totalColumns: 7,
    });
    expect(percentage).toEqual("41.58595641646489%");
  });
});
