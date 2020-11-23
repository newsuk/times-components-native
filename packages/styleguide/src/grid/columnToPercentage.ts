import spacing from "../spacing";
import calculateContentWidth from "@times-components-native/utils/src/calculate-content-width";

type Options = {
  numberOfColumns: number;
  numberOfMargins: number;
  totalColumns: number;
};
type GridColToPercentage = (
  orientation: string,
  windowWidth: number,
) => (options: Options) => string;

const gridColToPercentage: GridColToPercentage = (
  orientation,
  windowWidth,
) => ({ numberOfColumns, numberOfMargins = 1, totalColumns = 12 }) => {
  const contentWidth = calculateContentWidth(windowWidth, orientation);

  const gapWidth = spacing(4) + 1;
  const marginWidth = spacing(2);
  const allGapsWidth = (totalColumns - 1) * gapWidth;
  const allColumnsWidth = contentWidth - allGapsWidth;
  const columnWidth = allColumnsWidth / totalColumns;

  const widthOfColumns = numberOfColumns * columnWidth;
  const widthOfGaps = (numberOfColumns - 1) * gapWidth;
  const widthOfMargin = numberOfMargins * marginWidth;

  const totalWidthOfSpecifiedColumns =
    widthOfColumns + widthOfGaps + widthOfMargin;

  const percentage = (totalWidthOfSpecifiedColumns / contentWidth) * 100;

  return `${percentage}%`;
};

export default gridColToPercentage;
