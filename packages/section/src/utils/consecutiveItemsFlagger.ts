import memoizeOne from "memoize-one";
import { SliceName } from "@times-components-native/types";
import { Orientation } from "@times-components-native/responsive/src/context";

const withIsConsecutive = (slice: any) => ({ ...slice, isConsecutive: true });

type Pair = [SliceName, SliceName];

const consecutivePairsOnPortrait: Pair[] = [
  ["LeadOneAndOneSlice", "SecondaryFourSlice"],
];

const consecutivePairs: Pair[] = [
  ["TopSecondaryFourSlice", "SecondaryFourSlice"],
];

const doesListIncludePair = (
  pairs: Pair[],
  previousName: string,
  currentName: string,
) => consecutivePairs.some(([a, b]) => previousName == a && currentName == b);

const isConsecutivePair = (
  currentName: string,
  previousName: string,
  orientation: string,
): boolean =>
  doesListIncludePair(consecutivePairs, previousName, currentName) ||
  (orientation === Orientation.PORTRAIT &&
    doesListIncludePair(consecutivePairsOnPortrait, previousName, currentName));

export const consecutiveItemsFlagger = memoizeOne(
  (orientation: string) => (slices: any[]) =>
    slices.reduce((acc, curr, i) => {
      const currentName = curr.name;
      const previousName = acc[i - 1]?.name;
      const previousIsConsecutive = acc[i - 1]?.isConsecutive;

      const isConsecutiveSlices =
        currentName === previousName ||
        isConsecutivePair(currentName, previousName, orientation);

      return !previousIsConsecutive && isConsecutiveSlices
        ? [...acc, withIsConsecutive(curr)]
        : [...acc, curr];
    }, []),
);
