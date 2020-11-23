import { columnToPercentage } from "@times-components-native/styleguide";

describe("columnToPercentage", () => {
  it("calculates percentage from column count", () => {
    const percentage = columnToPercentage(
      "landscape",
      1024,
    )({ numberOfColumns: 6 });
    expect(percentage).toEqual("49.94703389830508%");
  });

  it("calculates percentage with 2 margins to factor in", () => {
    const percentage = columnToPercentage(
      "landscape",
      1024,
    )({
      numberOfColumns: 2,
      numberOfMargins: 2,
    });
    expect(percentage).toEqual("16.931497175141242%");
  });

  it("calculates percentage with specified total number of columns", () => {
    const percentage = columnToPercentage(
      "landscape",
      1024,
    )({
      numberOfColumns: 3,
      numberOfMargins: 0,
      totalColumns: 7,
    });
    expect(percentage).toEqual("41.58595641646489%");
  });
});
