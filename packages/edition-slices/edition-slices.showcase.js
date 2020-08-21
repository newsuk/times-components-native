import React from "react";
import { ScrollView } from "react-native";
import {
  mockCommentLeadAndCartoonSlice,
  mockDailyRegisterSlice,
  mockLeadersSlice,
  mockLeadOneAndFourSlice,
  mockLeadOneAndOneSlice,
  mockLeadOneFullWidthSlice,
  mockLeadTwoNoPicAndTwoSlice,
  mockListTwoAndSixNoPicSlice,
  mockSecondaryFourSlice,
  mockSecondaryOneAndColumnistSlice,
  mockSecondaryOneAndFourSlice,
  mockSecondaryOneSlice,
  mockSecondaryTwoAndTwoSlice,
  mockSecondaryTwoNoPicAndTwoSlice,
  mockStandardSlice,
  mockTopSecondaryFourSlice,
} from "@times-components-native/fixture-generator";
import { SectionContext } from "@times-components-native/context";
import Responsive from "@times-components-native/responsive";
import {
  CommentLeadAndCartoonSlice,
  DailyRegisterLeadFourSlice,
  LeadersSlice,
  LeadOneAndFourSlice,
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
  StandardSlice,
  TopSecondarySlice,
} from "./src/slices";

const preventDefaultedAction = (decorateAction) =>
  decorateAction([
    (args) => ["[SyntheticEvent (storybook prevented default)]", ...args],
  ]);

const publications = {
  ST: "SUNDAYTIMES",
  TIMES: "TIMES",
};

const onArticleSavePress = {
  onArticleSavePressNotPresent: null,
  onArticleSavePressPresent: () => null,
};
const savedArticles = {
  savedArticlesNotPresent: null,
  savedArticlesPresent: { 1: true, 2: true },
};

/* eslint-disable react/prop-types */
const renderSlice = (Component, data) => ({ select }, { decorateAction }) => (
  <Responsive>
    <ScrollView>
      <SectionContext.Provider
        value={{
          onArticleSavePress: select(
            "onArticleSavePress:",
            onArticleSavePress,
            null,
          ),
          publicationName: select("Publication:", publications, "TIMES"),
          savedArticles: select("savedArticles:", savedArticles, null),
        }}
      >
        <Component
          onPress={preventDefaultedAction(decorateAction)("onPress")}
          slice={data}
        />
      </SectionContext.Provider>
    </ScrollView>
  </Responsive>
);

const sliceStories = [
  {
    mock: mockDailyRegisterSlice(),
    name: "Daily Register Lead Four (Mobile, Tablet: S,S,S,S)",
    Slice: DailyRegisterLeadFourSlice,
  },
  {
    mock: mockLeadOneAndFourSlice(),
    name: "Lead One And Four (Mobile: I,J,J,J,J, Tablet: AC,AD,AD,AD,AD)",
    Slice: LeadOneAndFourSlice,
  },
  {
    mock: mockStandardSlice(),
    name: "Standard Slice (K*)",
    Slice: StandardSlice,
  },
  {
    mock: mockLeadOneAndOneSlice(),
    name: "Lead One And One (Mobile: A,B, Tablet: U,C, Wide: U,C, Huge:U,AQ)",
    Slice: LeadOneAndOneSlice,
  },
  {
    mock: mockLeadOneFullWidthSlice(),
    name: "Lead One Full Width (Mobile: A, Tablet/Wide/Huge: R)",
    Slice: LeadOneFullWidthSlice,
  },
  {
    mock: mockLeadTwoNoPicAndTwoSlice(),
    name:
      "Lead Two no pic and Two (Mobile: F,B,D,E, Tablet: X,Y,E,D Wide: X,Y,AL,E)",
    Slice: LeadTwoNoPicAndTwoSlice,
  },
  {
    mock: mockSecondaryOneSlice(),
    name: "Secondary One (Mobile:A, Tablet: W)",
    Slice: SecondaryOneSlice,
  },
  {
    mock: mockSecondaryOneAndColumnistSlice(),
    name: "Secondary One and Columnist (Mobile: T,H, Tablet: AA,AB)",
    Slice: SecondaryOneAndColumnistSlice,
  },
  {
    mock: mockSecondaryOneAndFourSlice(),
    name: "Supplement Secondary One And Four (Mobile, Tablet: N,O,O,O,O)",
    Slice: SecondaryOneAndFourSlice,
  },
  {
    mock: mockSecondaryFourSlice(),
    name: "Secondary Four (Mobile: C,C,C,C, Tablet: AR,AR,B,B)",
    Slice: SecondaryFourSlice,
  },
  {
    mock: mockSecondaryTwoAndTwoSlice(),
    name:
      "Secondary Two And Two (Mobile: C,C,G,G, Tablet: V,V,G,G, Wide Tablet/Desktop: AM,AM,AN,AN)",
    Slice: SecondaryTwoAndTwoSlice,
  },
  {
    mock: mockSecondaryTwoNoPicAndTwoSlice(),
    name: "Secondary Two No Pic And Two (Mobile: B,B,G,G - Tablet: AE,AE,G,G)",
    Slice: SecondaryTwoNoPicAndTwoSlice,
  },
  {
    mock: mockListTwoAndSixNoPicSlice(),
    name:
      "List Two And Six No Pic (Mobile: : C,C,L,L,L,L,L,L, Tablet: AS,AS,L,L,L,L,L,L)",
    Slice: ListTwoAndSixNoPicSlice,
  },
  {
    mock: mockLeadersSlice(),
    name: "Leaders (Mobile, Tablet: M,M,M,M)",
    Slice: LeadersSlice,
  },
  {
    mock: mockCommentLeadAndCartoonSlice(),
    name: "Comment Lead And Cartoon (Mobile: P,Q, Tablet: AH, AI)",
    Slice: CommentLeadAndCartoonSlice,
  },
  {
    mock: mockSecondaryFourSlice(),
    name: "Top Secondary (Medium: AS,AV,AV,AV, Wide: AT,AV,AV,AV)",
    Slice: TopSecondarySlice,
  },
];

export default {
  children: sliceStories.map(({ mock, name, Slice, scroll }) => ({
    component: renderSlice(Slice, mock, scroll),
    name,
    type: "story",
    platform: "native",
  })),
  name: "Composed/Edition/Slices",
};
