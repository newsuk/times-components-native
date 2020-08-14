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
  PuzzleSlice,
  TopSecondaryFourSlice,
} from "./slices";

const config = (NativeModules || {}).ReactConfig;

const { width } = getDimensions();
const isTablet =
  (config && config.breakpoint && config.breakpoint !== "small") ||
  width > tabletWidth;
const SecondaryTwoAndTwoMapper = isTablet
  ? SecondaryTwoNoPicAndTwoSlice
  : SecondaryTwoAndTwoSlice;

const sliceMap = {
  CommentLeadAndCartoonSlice,
  DailyUniversalRegister: DailyRegisterLeadFourSlice,
  LeadersSlice,
  LeadOneAndFourSlice,
  LeadOneAndOneSlice,
  LeadOneFullWidthSlice,
  LeadTwoNoPicAndTwoSlice,
  Puzzle: PuzzleSlice,
  SecondaryFourSlice,
  SecondaryOneAndColumnistSlice,
  SecondaryOneAndFourSlice,
  SecondaryOneSlice,
  SecondaryTwoAndTwoSlice: SecondaryTwoAndTwoMapper,
  SecondaryTwoNoPicAndTwoSlice,
  StandardSlice,
  TwoPicAndSixNoPicSlice: ListTwoAndSixNoPicSlice,
  LeadTwoNoPicandTwoFrontSlice: LeadTwoNoPicAndTwoFrontSlice, // remove once typo has been addressed from TPA
  LeadTwoNoPicAndTwoFrontSlice,
  TopSecondaryTwoAndTwoSlice: TopSecondaryFourSlice,
  TopSecondaryTwoNoPicAndTwoSlice: TopSecondaryFourSlice,
  TopSecondaryFourSlice: TopSecondaryFourSlice,
};

export default sliceMap;
