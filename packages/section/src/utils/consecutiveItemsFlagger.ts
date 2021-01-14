import memoizeOne from "memoize-one";

const withIsConsecutive = (slice: any) => ({ ...slice, isConsecutive: true });

export const consecutiveItemsFlagger = memoizeOne((slices: any[]) =>
  slices.reduce(
    (acc, curr, i) =>
      acc.length > 0 &&
      curr.name &&
      acc[i - 1].name &&
      curr.name === acc[i - 1].name
        ? [...acc, withIsConsecutive(curr)]
        : [...acc, curr],
    [],
  ),
);
