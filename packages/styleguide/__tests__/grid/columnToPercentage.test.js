import { columnToPercentage } from "@times-components-native/styleguide";

describe("columnToPercentage", () => {
  it("calculates percentage from column count", () => {
    const percentage = columnToPercentage({ numberOfColumns: 6 });
    expect(percentage).toEqual("50%");
  });

  it("calculates percentage with 2 margins to factor in", () => {
    const percentage = columnToPercentage({
      numberOfColumns: 2,
      numberOfMargins: 2,
    });
    expect(percentage).toEqual("17%");
  });

  it("calculates percentage with specified total number of columns", () => {
    const percentage = columnToPercentage({
      numberOfColumns: 3,
      numberOfMargins: 0,
      totalColumns: 7,
    });
    expect(percentage).toEqual("40%");
  });
});
