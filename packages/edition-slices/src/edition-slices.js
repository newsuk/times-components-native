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
  SupplementLeadOneAndFourV2Slice,
  SupplementLeadOneAndOneSlice,
  SupplementSecondaryFourSlice,
  SupplementSecondaryOneSlice,
  SupplementSecondaryTwoAndTwoSlice,
} from "./slices";
import { sectionConfigs } from "@times-components-native/section/src/utils";

const { sectionTitles } = sectionConfigs;

const selectLeadOneAndFourSlice = (isInTabletSupplement) =>
  isInTabletSupplement ? SupplementLeadOneAndFourV2Slice : LeadOneAndFourSlice;

const selectLeadOneAndOneSlice = (isInTabletSupplement) =>
  isInTabletSupplement ? SupplementLeadOneAndOneSlice : LeadOneAndOneSlice;

const selectSecondaryFourSlice = (isInTabletSupplement) =>
  isInTabletSupplement ? SupplementSecondaryFourSlice : SecondaryFourSlice;

const selectSecondaryOneSlice = (isInTabletSupplement) =>
  isInTabletSupplement ? SupplementSecondaryOneSlice : SecondaryOneSlice;

const selectSecondaryTwoAndTwoSlice = (isTablet, isInSupplement) =>
  isTablet
    ? isInSupplement
      ? SupplementSecondaryTwoAndTwoSlice
      : SecondaryTwoNoPicAndTwoSlice
    : SecondaryTwoAndTwoSlice;

const selectLeadTwoNoPicAndTwoSlice = (isTablet, sectionTitle, orientation) =>
  isTablet && sectionTitle === sectionTitles.sport && orientation === "portrait"
    ? LeadTwoNoPicAndTwoVariant2Slice
    : LeadTwoNoPicAndTwoSlice;

const sliceMap = (isInSupplement, sectionTitle, orientation, isTablet) => {
  const isInTabletSupplement = isInSupplement && isTablet;
  return {
    CommentLeadAndCartoonSlice,
    DailyUniversalRegister: DailyRegisterLeadFourSlice,
    LeadersSlice,
    LeadOneAndFourSlice: selectLeadOneAndFourSlice(isInTabletSupplement),
    LeadOneAndOneSlice: selectLeadOneAndOneSlice(isInTabletSupplement),
    LeadOneFullWidthSlice,
    LeadTwoNoPicAndTwoSlice: selectLeadTwoNoPicAndTwoSlice(
      isTablet,
      sectionTitle,
      orientation,
    ),
    Puzzle: PuzzleSlice,
    SecondaryFourSlice: selectSecondaryFourSlice(isInTabletSupplement),
    SecondaryOneAndColumnistSlice,
    SecondaryOneAndFourSlice,
    SecondaryOneSlice: selectSecondaryOneSlice(isInTabletSupplement),
    SecondaryTwoAndTwoSlice: selectSecondaryTwoAndTwoSlice(
      isTablet,
      isInSupplement,
    ),
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
  isTablet,
) => sliceMap(isInSupplement, sectionTitle, orientation, isTablet)[sliceName];
