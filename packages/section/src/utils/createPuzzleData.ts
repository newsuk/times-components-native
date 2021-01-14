import { buildSliceData } from "@times-components-native/section/src/utils/buildSliceData";
import { editionBreakpoints } from "@times-components-native/styleguide";

export const splitPuzzlesBySlices = (
  puzzles: any[],
  numberOfTilesPerSlice = 3,
) =>
  puzzles.reduce((result: any, puzzle: any, index: any) => {
    const slices = result;
    const sliceIndex = Math.floor(index / numberOfTilesPerSlice);
    const { id, name } = puzzle;
    slices[sliceIndex] = slices[sliceIndex] || { id, name };

    slices[sliceIndex].puzzles = [
      ...(slices[sliceIndex].puzzles || []),
      puzzle,
    ];

    return slices;
  }, []);

export const filterPuzzles = (puzzles: any[], editionBreakpoint: string) =>
  editionBreakpoint === editionBreakpoints.small
    ? puzzles.filter((puzzle) => !puzzle.hideOnMobile)
    : puzzles;

export const createPuzzleData = (puzzles: any[], editionBreakpoint: string) => {
  const filteredPuzzles = filterPuzzles(puzzles, editionBreakpoint);
  const splitedPuzzlesBySlices = splitPuzzlesBySlices(filteredPuzzles);
  const sliceData = buildSliceData(splitedPuzzlesBySlices);

  return sliceData;
};
