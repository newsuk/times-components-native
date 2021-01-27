import { getDimensions } from "@times-components-native/utils";
import { tabletWidth } from "@times-components-native/styleguide";
import { NativeModules } from "react-native";
import {
  CommentLeadAndCartoonSlice,
  DailyRegisterLeadFourSlice,
  LeadersSlice,
  LeadOneAndFourSlice,
  StandardSlice,
  LeadOneAndOneSlice,
  LeadOneFullWidthSlice,
  LeadTwoNoPicAndTwoSlice,
  ListTwoAndSixNoPicSlice,
  SecondaryFourSlice,
  SecondaryOneAndColumnistSlice,
  SecondaryOneAndFourSlice,
  SecondaryOneSlice,
  SecondaryTwoAndTwoSlice,
  SecondaryTwoNoPicAndTwoSlice,
  LeadTwoFrontSlice,
  LeadOneAndOneFrontSlice,
  LeadOneFullWidthFrontSlice,
  PuzzleSlice,
  TopSecondarySlice,
  SectionAd,
  SupplementLeadOneAndFourSlice,
  SupplementLeadOneAndFourV2Slice,
  SupplementLeadOneAndOneSlice,
  SupplementSecondaryFourSlice,
  SupplementSecondaryOneSlice,
  SupplementSecondaryTwoAndTwoSlice,
} from "./slices";

const config = (NativeModules || {}).ReactConfig;

const { width } = getDimensions();
const isTablet =
  (config && config.breakpoint && config.breakpoint !== "small") ||
  width > tabletWidth;

const sliceMap = (isInSupplement) => {
  const isInTabletSupplement = isInSupplement && isTablet;
  return {
    CommentLeadAndCartoonSlice,
    DailyUniversalRegister: DailyRegisterLeadFourSlice,
    LeadersSlice,
    LeadOneAndFourSlice: isInTabletSupplement
      ? SupplementLeadOneAndFourV2Slice
      : LeadOneAndFourSlice,
    LeadOneAndOneSlice: isInTabletSupplement
      ? SupplementLeadOneAndOneSlice
      : LeadOneAndOneSlice,
    LeadOneFullWidthSlice,
    LeadTwoNoPicAndTwoSlice,
    Puzzle: PuzzleSlice,
    SecondaryFourSlice: isInTabletSupplement
      ? SupplementSecondaryFourSlice
      : SecondaryFourSlice,
    SecondaryOneAndColumnistSlice,
    SecondaryOneAndFourSlice,
    SecondaryOneSlice: isInTabletSupplement
      ? SupplementSecondaryOneSlice
      : SecondaryOneSlice,
    SecondaryTwoAndTwoSlice: isTablet
      ? isInSupplement
        ? SupplementSecondaryTwoAndTwoSlice
        : SecondaryTwoNoPicAndTwoSlice
      : SecondaryTwoAndTwoSlice,
    SecondaryTwoNoPicAndTwoSlice,
    StandardSlice,
    TwoPicAndSixNoPicSlice: ListTwoAndSixNoPicSlice,
    LeadTwoFrontSlice,
    LeadOneAndOneFrontSlice,
    LeadOneFullWidthFrontSlice,
    TopSecondaryTwoAndTwoSlice: TopSecondarySlice,
    TopSecondaryTwoNoPicAndTwoSlice: TopSecondarySlice,
    TopSecondaryFourSlice: TopSecondarySlice,
    SectionAd,
  };
};

export const getSlice = (isInSupplement, sliceName) =>
  sliceMap(isInSupplement)[sliceName];
