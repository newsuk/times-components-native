import memoizeOne from "memoize-one";

const withIsConsecutive = (slice: any) => ({ ...slice, isConsecutive: true });

// in order to
const consecutivePairs = [
  ["TopSecondaryFourSlice", "SecondaryFourSlice"],
  ["LeadOneAndOneSlice", "SecondaryFourSlice"],
];

const isConsecutivePair = (
  currentName: string,
  previousName: string,
): boolean =>
  consecutivePairs.some(([a, b]) => previousName == a && currentName == b);

export const consecutiveItemsFlagger = memoizeOne((slices: any[]) =>
  slices.reduce((acc, curr, i) => {
    const currentName = curr.name;
    const previousName = acc[i - 1]?.name;
    const previousIsConsecutive = acc[i - 1]?.isConsecutive;

    const isConsecutiveSlices =
      currentName === previousName ||
      isConsecutivePair(currentName, previousName);

    return !previousIsConsecutive && isConsecutiveSlices
      ? [...acc, withIsConsecutive(curr)]
      : [...acc, curr];
  }, []),
);
