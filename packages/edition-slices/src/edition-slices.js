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
  LeadTwoNoPicAndTwoFrontSlice,
  LeadOneAndOneFrontSlice,
  LeadOneFullWidthFrontSlice,
  PuzzleSlice,
  TopSecondarySlice,
} from "./slices";

const config = (NativeModules || {}).ReactConfig;

const { width } = getDimensions();
const isTablet =
  (config && config.breakpoint && config.breakpoint !== "small") ||
  width > tabletWidth;

const getSlice = (isInSupplement, sliceName) => {
  const isInTabletSupplement = isInSupplement && isTablet;
  const sliceMap = {
    CommentLeadAndCartoonSlice,
    DailyUniversalRegister: DailyRegisterLeadFourSlice,
    LeadersSlice,
    LeadOneAndFourSlice: isInTabletSupplement
      ? LeadOneAndFourSlice
      : LeadOneAndFourSlice,
    LeadOneAndOneSlice,
    LeadOneFullWidthSlice,
    LeadTwoNoPicAndTwoSlice,
    Puzzle: PuzzleSlice,
    SecondaryFourSlice,
    SecondaryOneAndColumnistSlice,
    SecondaryOneAndFourSlice,
    SecondaryOneSlice,
    SecondaryTwoAndTwoSlice: isTablet
      ? SecondaryTwoNoPicAndTwoSlice
      : SecondaryTwoAndTwoSlice,
    SecondaryTwoNoPicAndTwoSlice,
    StandardSlice,
    TwoPicAndSixNoPicSlice: ListTwoAndSixNoPicSlice,
    LeadTwoNoPicAndTwoFrontSlice,
    LeadOneAndOneFrontSlice,
    LeadOneFullWidthFrontSlice,
    TopSecondaryTwoAndTwoSlice: TopSecondarySlice,
    TopSecondaryTwoNoPicAndTwoSlice: TopSecondarySlice,
    TopSecondaryFourSlice: TopSecondarySlice,
  };

  return sliceMap[sliceName];
};

export default getSlice;
