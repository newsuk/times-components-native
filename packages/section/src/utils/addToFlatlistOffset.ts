import { RefObject } from "react";
import { FlatList } from "react-native";

export let sliceOffsets: Record<number, number> = {};

export const addToFlatlistOffset = (
  sliceIndex: number,
  height: number,
  sliceOffsetIndex: number,
  flatListRef: RefObject<FlatList>,
) => {
  sliceOffsets[sliceIndex] = height;
  if (Object.keys(sliceOffsets).length === sliceOffsetIndex) {
    const sliceOffset = Object.values(sliceOffsets).reduce(
      (acc: number, height: number) => acc + height,
      0,
    );
    setTimeout(() => {
      flatListRef.current?.scrollToOffset({ offset: sliceOffset });
      sliceOffsets = {};
    }, 1000);
  }
};
