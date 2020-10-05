import React from "react";
import TestRenderer from "react-test-renderer";
import { editionBreakpointWidths } from "@times-components-native/styleguide";
import { iterator } from "@times-components-native/test-utils";
import { getDimensions } from "@times-components-native/utils";
import {
  mockCommentLeadAndCartoonSlice,
  mockDailyRegisterSlice,
  mockLeadersSlice,
  mockLeadOneAndOneSlice,
  mockLeadOneFullWidthSlice,
  mockLeadTwoNoPicAndTwoSlice,
  mockSecondaryOneSlice,
  mockSecondaryFourSlice,
  mockLeadOneAndFourSlice,
  mockSecondaryTwoNoPicAndTwoSlice,
  mockSecondaryOneAndColumnistSlice,
  mockSecondaryTwoAndTwoSlice,
  mockStandardSlice,
  getPuzzleSlices,
  mockSecondaryOneAndFourSlice,
  mockListTwoAndSixNoPicSlice,
  mockLeadTwoFrontSlice,
  mockLeadOneAndOneFrontSlice,
  mockLeadTwoNoPicAndTwoFrontSlice,
  mockLeadOneFullWidthFrontSlice,
  mockInTodaysEditionSlice,
} from "@times-components-native/fixture-generator";
import Responsive from "@times-components-native/responsive";
import "./mocks";
import {
  CommentLeadAndCartoonSlice,
  DailyRegisterLeadFourSlice,
  LeadOneAndOneSlice,
  LeadOneFullWidthSlice,
  LeadersSlice,
  LeadOneAndFourSlice,
  LeadTwoNoPicAndTwoSlice,
  PuzzleSlice,
  SecondaryOneAndFourSlice,
  SecondaryOneSlice,
  SecondaryFourSlice,
  SecondaryTwoNoPicAndTwoSlice,
  SecondaryOneAndColumnistSlice,
  SecondaryTwoAndTwoSlice,
  StandardSlice,
  ListTwoAndSixNoPicSlice,
  LeadTwoFrontSlice,
  LeadTwoNoPicAndTwoFrontSlice,
  LeadOneAndOneFrontSlice,
  LeadOneFullWidthFrontSlice,
  TopSecondarySlice,
  SupplementLeadOneAndOneSlice,
  SupplementLeadOneAndFourSlice,
  SupplementSecondaryFourSlice,
  SupplementSecondaryOneSlice,
  SupplementSecondaryTwoAndTwoSlice,
} from "../src/slices";

const slices = [
  {
    mock: mockCommentLeadAndCartoonSlice(),
    name: "comment lead and cartoon",
    Slice: CommentLeadAndCartoonSlice,
  },
  {
    mock: mockDailyRegisterSlice(),
    name: "daily universal register",
    Slice: DailyRegisterLeadFourSlice,
  },
  {
    mock: mockLeadOneAndOneSlice(),
    name: "lead one and one",
    Slice: LeadOneAndOneSlice,
  },
  {
    mock: mockLeadOneAndOneSlice(),
    name: "lead one and one - supplement",
    Slice: SupplementLeadOneAndOneSlice,
  },
  {
    mock: mockLeadOneFullWidthSlice(),
    name: "lead one full width",
    Slice: LeadOneFullWidthSlice,
  },
  {
    mock: mockLeadTwoNoPicAndTwoSlice(),
    name: "lead two no pic and two",
    Slice: LeadTwoNoPicAndTwoSlice,
  },
  {
    mock: mockLeadersSlice(),
    name: "leaders slice",
    Slice: LeadersSlice,
  },
  {
    mock: mockSecondaryOneAndFourSlice(),
    name: "secondary one and four",
    Slice: SecondaryOneAndFourSlice,
  },
  {
    mock: mockSecondaryOneSlice(),
    name: "secondary one",
    Slice: SecondaryOneSlice,
  },
  {
    mock: mockSecondaryOneSlice(),
    name: "supplement secondary one",
    Slice: SupplementSecondaryOneSlice,
  },
  {
    mock: mockSecondaryFourSlice(),
    name: "secondary four",
    Slice: SecondaryFourSlice,
  },
  {
    mock: mockSecondaryFourSlice(),
    name: "secondary four - supplement",
    Slice: SupplementSecondaryFourSlice,
  },
  {
    mock: mockSecondaryOneAndColumnistSlice(),
    name: "secondary one and columnist",
    Slice: SecondaryOneAndColumnistSlice,
  },
  {
    mock: mockSecondaryTwoAndTwoSlice(),
    name: "secondary two and two",
    Slice: SecondaryTwoAndTwoSlice,
  },
  {
    mock: mockSecondaryTwoAndTwoSlice(),
    name: "supplement secondary two and two",
    Slice: SupplementSecondaryTwoAndTwoSlice,
  },
  {
    mock: mockLeadOneAndFourSlice(),
    name: "lead one and four slice",
    Slice: LeadOneAndFourSlice,
  },
  {
    mock: mockLeadOneAndFourSlice(),
    name: "supplement lead one and four slice",
    Slice: SupplementLeadOneAndFourSlice,
  },
  {
    mock: mockStandardSlice(),
    name: "standard slice",
    Slice: StandardSlice,
  },
  {
    mock: mockSecondaryTwoNoPicAndTwoSlice(),
    name: "secondary two no pic and two",
    Slice: SecondaryTwoNoPicAndTwoSlice,
  },
  {
    mock: mockListTwoAndSixNoPicSlice(),
    name: "list two and six no pic",
    Slice: ListTwoAndSixNoPicSlice,
  },
  {
    mock: { puzzles: getPuzzleSlices(3) },
    name: "puzzle",
    Slice: PuzzleSlice,
  },
  {
    mock: mockLeadTwoFrontSlice(),
    name: "front lead two - portrait",
    Slice: LeadTwoFrontSlice,
    orientation: "portrait",
    sliceProps: {
      inTodaysEditionSlice: mockInTodaysEditionSlice(),
    },
  },
  {
    mock: mockLeadTwoFrontSlice(),
    name: "front lead two - landscape",
    Slice: LeadTwoFrontSlice,
    orientation: "landscape",
    sliceProps: {
      inTodaysEditionSlice: mockInTodaysEditionSlice(),
    },
  },
  {
    mock: mockLeadTwoNoPicAndTwoFrontSlice(),
    name: "front lead two no pic and two - landscape",
    Slice: LeadTwoNoPicAndTwoFrontSlice,
    orientation: "landscape",
  },
  {
    mock: mockLeadTwoNoPicAndTwoFrontSlice(),
    name: "front lead two no pic and two - portrait",
    Slice: LeadTwoNoPicAndTwoFrontSlice,
    orientation: "portrait",
  },
  {
    mock: mockLeadOneAndOneFrontSlice(),
    name: "front lead one and one - portrait",
    Slice: LeadOneAndOneFrontSlice,
    orientation: "portrait",
  },
  {
    mock: mockLeadOneAndOneFrontSlice(),
    name: "front lead one and one - landscape",
    Slice: LeadOneAndOneFrontSlice,
    orientation: "landscape",
  },
  {
    mock: mockLeadOneFullWidthFrontSlice(),
    name: "front lead one - portrait",
    Slice: LeadOneFullWidthFrontSlice,
    orientation: "portrait",
    sliceProps: {
      inTodaysEditionSlice: mockInTodaysEditionSlice(),
    },
  },
  {
    mock: mockLeadOneFullWidthFrontSlice(),
    name: "front lead one - landscape",
    Slice: LeadOneFullWidthFrontSlice,
    orientation: "landscape",
    sliceProps: {
      inTodaysEditionSlice: mockInTodaysEditionSlice(),
    },
  },
  {
    mock: mockSecondaryFourSlice(),
    name: "top secondary landscape (from TopSecondaryFourSlice)",
    Slice: TopSecondarySlice,
    orientation: "landscape",
  },
  {
    mock: mockSecondaryFourSlice(),
    name: "top secondary portrait (from TopSecondaryFourSlice)",
    Slice: TopSecondarySlice,
    orientation: "portrait",
  },
  {
    mock: mockSecondaryTwoAndTwoSlice(),
    name: "top secondary landscape (from TopSecondaryTwoAndTwoSlice)",
    Slice: TopSecondarySlice,
    orientation: "landscape",
  },
  {
    mock: mockSecondaryTwoAndTwoSlice(),
    name: "top secondary portrait (from TopSecondaryTwoAndTwoSlice)",
    Slice: TopSecondarySlice,
    orientation: "portrait",
  },
  {
    mock: mockSecondaryTwoNoPicAndTwoSlice(),
    name: "top secondary landscape (from TopSecondaryTwoNoPicAndTwoSlice)",
    Slice: TopSecondarySlice,
    orientation: "landscape",
  },
  {
    mock: mockSecondaryTwoNoPicAndTwoSlice(),
    name: "top secondary portrait (from TopSecondaryTwoNoPicAndTwoSlice)",
    Slice: TopSecondarySlice,
    orientation: "portrait",
  },
];

jest.mock("@times-components-native/utils", () => {
  // eslint-disable-next-line global-require
  const actualUtils = jest.requireActual("../../utils");

  return {
    ...actualUtils,
    getDimensions: jest.fn(),
  };
});

const tabletTester = (type) =>
  slices.map(({ mock, name, Slice, orientation, sliceProps }) => ({
    name: `${name} - ${type}`,
    test: () => {
      let width = editionBreakpointWidths[type];
      getDimensions.mockImplementation(() => ({
        width,
        height: orientation === "landscape" ? width / 2 : width * 2,
      }));
      const output = TestRenderer.create(
        <Responsive>
          <Slice onPress={() => null} slice={mock} {...sliceProps} />
        </Responsive>,
      );

      expect(output).toMatchSnapshot();
    },
  }));

export default () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const tests = [
    ...tabletTester("medium"),
    ...tabletTester("wide"),
    ...tabletTester("huge"),
  ];

  iterator(tests);
};
