import { mockPuzzleSlice } from "@times-components-native/fixture-generator";

import {
  splitPuzzlesBySlices,
  filterPuzzles,
  createPuzzleData,
} from "../../src/utils/createPuzzleData";
import { editionBreakpoints } from "@times-components-native/styleguide";

describe("createPuzzleData", () => {
  it("should create puzzle data and return 3 rows of puzzles", () => {
    const puzzles = new Array(7).fill(0).map(() => mockPuzzleSlice());
    const data = createPuzzleData(puzzles, editionBreakpoints.small);

    expect(data).toMatchSnapshot();
  });

  it("should create puzzle data and return 2 rows of puzzles", () => {
    const puzzles = new Array(6).fill(0).map(() => mockPuzzleSlice());
    puzzles.push(mockPuzzleSlice(true));
    const data = createPuzzleData(puzzles, editionBreakpoints.small);

    expect(data).toMatchSnapshot();
  });

  it("should create puzzle data and return 3 rows of puzzles on resolution different than small ", () => {
    const puzzles = new Array(6).fill(0).map(() => mockPuzzleSlice());
    puzzles.push(mockPuzzleSlice(true));
    const data = createPuzzleData(puzzles, editionBreakpoints.wide);

    expect(data).toMatchSnapshot();
  });
});

describe("filterPuzzles", () => {
  it("should not filter the puzzles on small resolution and return the same collection", () => {
    const puzzles = new Array(7).fill(0).map(() => mockPuzzleSlice());
    const filteredPuzzles = filterPuzzles(puzzles, editionBreakpoints.small);

    expect(filteredPuzzles.length).toBe(7);
  });

  it("should not filter the puzzles on different resolution than small and return the same collection", () => {
    const puzzles = new Array(6).fill(0).map(() => mockPuzzleSlice());
    puzzles.push(mockPuzzleSlice(true));
    const filteredPuzzles = filterPuzzles(puzzles, editionBreakpoints.wide);

    expect(filteredPuzzles.length).toBe(7);
  });

  it("should filter the puzzles and return array with 6 elements", () => {
    const puzzles = new Array(6).fill(0).map(() => mockPuzzleSlice());
    puzzles.push(mockPuzzleSlice(true));
    const filteredPuzzles = filterPuzzles(puzzles, editionBreakpoints.small);

    expect(filteredPuzzles.length).toBe(6);
  });

  it("should return an empty array if puzzles are is empty", () => {
    const puzzles: any = [];
    const filteredPuzzles = filterPuzzles(puzzles, editionBreakpoints.small);

    expect(filteredPuzzles.length).toBe(0);
  });
});

describe("splitPuzzlesBySlices", () => {
  it("should split 3 puzzles in only one slice", () => {
    const puzzles = new Array(3).fill(0).map(() => mockPuzzleSlice());
    const chunked = splitPuzzlesBySlices(puzzles);

    expect(chunked[0].puzzles.length).toBe(3);
    expect(chunked[1]).not.toBeDefined();
  });

  it("should split puzzles into chunks of 3 by default", () => {
    const puzzles = new Array(5).fill(0).map(() => mockPuzzleSlice());
    const chunked = splitPuzzlesBySlices(puzzles);

    expect(chunked[0].puzzles.length).toBe(3);
    expect(chunked[1].puzzles.length).toBe(2);
  });

  it("can split puzzles into chunks of any passed int", () => {
    const puzzles = new Array(5).fill(0).map(() => mockPuzzleSlice());
    const chunked = splitPuzzlesBySlices(puzzles, 4);

    expect(chunked[0].puzzles.length).toBe(4);
    expect(chunked[1].puzzles.length).toBe(1);
  });

  it("should return an empty array if puzzles are 0", () => {
    const puzzles: any[] = [];
    const chunked = splitPuzzlesBySlices(puzzles);

    expect(chunked.length).toBe(0);
  });
});
