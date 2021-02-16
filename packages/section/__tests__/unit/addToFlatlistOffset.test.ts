import { RefObject } from "react";
import { FlatList } from "react-native";

import {
  addToFlatlistOffset,
  sliceOffsets,
} from "../../src/utils/addToFlatlistOffset";

const scrollToOffsetSpy = jest.fn();
// @ts-ignore
const flatListRef = {
  current: {
    scrollToOffset: scrollToOffsetSpy,
  },
} as RefObject<FlatList>;

describe("addToFlatlistOffset", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("should add slice height to sliceOffsets on first call", () => {
    addToFlatlistOffset(0, 50, 3, flatListRef);

    expect(sliceOffsets).toEqual({ 0: 50 });

    jest.runAllTimers();

    expect(scrollToOffsetSpy).not.toHaveBeenCalled();
  });

  it("should add second slice height to sliceOffsets on second call", () => {
    addToFlatlistOffset(1, 75, 3, flatListRef);

    expect(sliceOffsets).toEqual({ 0: 50, 1: 75 });

    jest.runAllTimers();

    expect(scrollToOffsetSpy).not.toHaveBeenCalled();
  });

  it("should add slice height to sliceOffsets and call scrollToOffset when sufficient slice offsets added", () => {
    addToFlatlistOffset(2, 100, 3, flatListRef);

    expect(sliceOffsets).toEqual({ 0: 50, 1: 75, 2: 100 });

    jest.runAllTimers();

    expect(scrollToOffsetSpy).toHaveBeenCalledWith({ offset: 225 });
    expect(sliceOffsets).toEqual({});
  });
});
