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
  SupplementLeadOneAndFourV2Slice,
  SupplementLeadOneAndOneSlice,
  SupplementSecondaryFourSlice,
  SupplementSecondaryOneSlice,
  SupplementSecondaryTwoAndTwoSlice,
} from "./slices";
import { sectionConfigs } from "@times-components-native/section/src/utils";
import { Platform } from "react-native";

const { sectionTitles } = sectionConfigs;

const isIOS = Platform.OS === "ios";

const sliceMap = (isInSupplement, sectionTitle, orientation, isTablet) => {
  const isInTabletSupplement = isInSupplement && isTablet;
  return {
    CommentLeadAndCartoonSlice,
    DailyUniversalRegister: DailyRegisterLeadFourSlice,
    LeadersSlice,
    LeadOneAndFourSlice: isInTabletSupplement
      ? isIOS
        ? SupplementLeadOneAndFourV2Slice
        : SupplementLeadOneAndFourSlice
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
  isTablet,
) => sliceMap(isInSupplement, sectionTitle, orientation, isTablet)[sliceName];

const renderLeadTwoNoPicAndTwoSlice = (isTablet, sectionTitle, orientation) =>
  isTablet && sectionTitle === sectionTitles.sport && orientation === "portrait"
    ? LeadTwoNoPicAndTwoVariant2Slice
    : LeadTwoNoPicAndTwoSlice;
