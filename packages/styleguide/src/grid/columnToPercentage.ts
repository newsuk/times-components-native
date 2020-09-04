type Options = {
  numberOfColumns: number;
  numberOfMargins: number;
  totalColumns: number;
};
type GridColToPercentage = (options: Options) => string;

const gridColToPercentage: GridColToPercentage = ({
  numberOfColumns,
  numberOfMargins = 1,
  totalColumns = 12,
}) => {
  const colWidth = 100;
  const gapWidth = 50;

  const totalWidthOfAllColumns =
    totalColumns * colWidth + (totalColumns - 1) * gapWidth;

  const widthOfColumns = numberOfColumns * colWidth;
  const widthOfGaps = (numberOfColumns - 1) * gapWidth;
  const widthOfMargin = numberOfMargins * (gapWidth / 2);

  const totalWidthOfSpecifiedColumns =
    widthOfColumns + widthOfGaps + widthOfMargin;
  const percentage = Math.floor(
    (totalWidthOfSpecifiedColumns / totalWidthOfAllColumns) * 100,
  );

  return `${percentage}%`;
};

export default gridColToPercentage;
