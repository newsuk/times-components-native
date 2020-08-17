interface MeasureParameters {
  columnCount: number;
  containerWidth: number;
  columnGap: number;
}

export const calculateColumnWidth = ({
  columnCount,
  containerWidth,
  columnGap,
}: MeasureParameters) => {
  const totalColumnGap = (columnCount - 1) * columnGap;
  return (containerWidth - totalColumnGap) / columnCount;
};
