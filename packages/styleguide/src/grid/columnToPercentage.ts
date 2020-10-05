import { Dimensions } from "react-native";

import { calculateContentWidth } from "@times-components-native/utils";

type Options = {
  numberOfColumns: number;
  numberOfMargins: number;
  totalColumns: number;
};
type GridColToPercentage = (
  orientation: string,
) => (options: Options) => string;

const gridColToPercentage: GridColToPercentage = (orientation) => ({
  numberOfColumns,
  numberOfMargins = 1,
  totalColumns = 12,
}) => {
  const windowWidth = Dimensions.get("window").width;
  const contentWidth = calculateContentWidth(windowWidth, orientation);

  const gapWidth = 21;
  const marginWidth = 10;
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
