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
  LeadTwoNoPicAndTwoVariant2Slice,
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
  SupplementLeadOneAndOneSlice,
  SupplementSecondaryFourSlice,
  SupplementSecondaryOneSlice,
  SupplementSecondaryTwoAndTwoSlice,
} from "./slices";
import { sectionConfigs } from "@times-components-native/section/src/utils";

const config = (NativeModules || {}).ReactConfig;

const { width } = getDimensions();
const isTablet =
  (config && config.breakpoint && config.breakpoint !== "small") ||
  width > tabletWidth;

const { sectionTitles } = sectionConfigs;

const sliceMap = (isInSupplement, sectionTitle, orientation) => {
  const isInTabletSupplement = isInSupplement && isTablet;
  return {
    CommentLeadAndCartoonSlice,
    DailyUniversalRegister: DailyRegisterLeadFourSlice,
    LeadersSlice,
    LeadOneAndFourSlice: isInTabletSupplement
      ? SupplementLeadOneAndFourSlice
      : LeadOneAndFourSlice,
    LeadOneAndOneSlice: isInTabletSupplement
      ? SupplementLeadOneAndOneSlice
      : LeadOneAndOneSlice,
    LeadOneFullWidthSlice,
    LeadTwoNoPicAndTwoSlice: renderLeadTwoNoPicAndTwoSlice(
      isTablet,
      sectionTitle,
      orientation,
    ),
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

export const getSlice = (
  isInSupplement,
  sliceName,
  sectionTitle,
  orientation,
) => sliceMap(isInSupplement, sectionTitle, orientation)[sliceName];

const renderLeadTwoNoPicAndTwoSlice = (isTablet, sectionTitle, orientation) =>
  isTablet && sectionTitle === sectionTitles.sport && orientation === "portrait"
    ? LeadTwoNoPicAndTwoVariant2Slice
    : LeadTwoNoPicAndTwoSlice;
