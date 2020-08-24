import React from "react";
import { View } from "react-native";
import Responsive from "@times-components-native/responsive";
import {
  mockLeadOneAndOneFrontSlice,
  mockLeadTwoNoPicAndTwoFrontSlice,
  mockLeadOneFrontSlice,
} from "@times-components-native/fixture-generator";
import {
  LeadOneAndOneFrontSlice,
  LeadTwoNoPicAndTwoFrontSlice,
  LeadOneFrontSlice,
} from "./src/slices";

const renderSlice = (Component, data) => () => {
  return (
    <Responsive>
      <View style={{ flex: 1 }}>
        {<Component onPress={() => null} slice={data} />}
      </View>
    </Responsive>
  );
};
const sliceStories = [
  {
    mock: mockLeadTwoNoPicAndTwoFrontSlice(),
    name: "Front Lead Two No Pic And Two",
    Slice: LeadTwoNoPicAndTwoFrontSlice,
  },
  {
    mock: mockLeadOneAndOneFrontSlice(),
    name: "Front Lead One And One",
    Slice: LeadOneAndOneFrontSlice,
  },
  {
    mock: mockLeadOneFrontSlice(),
    name: "Front Lead One",
    Slice: LeadOneFrontSlice,
  },
];

export default {
  children: sliceStories.map(({ mock, name, Slice }) => ({
    component: renderSlice(Slice, mock),
    name,
    type: "story",
    platform: "native",
  })),
  name: "Composed/Edition/Front",
};
