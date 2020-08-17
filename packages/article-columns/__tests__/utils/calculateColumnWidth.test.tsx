import { calculateColumnWidth } from "../../utils/calculateColumnWidth";

describe("calculateColumnWidth", () => {
  it("calculates column width", () => {
    const width = calculateColumnWidth({
      columnCount: 3,
      containerWidth: 110,
      columnGap: 10,
    });
    expect(width).toEqual(30);
  });
});
