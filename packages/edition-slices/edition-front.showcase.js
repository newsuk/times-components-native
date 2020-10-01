import React from "react";
import { View } from "react-native";
import Responsive from "@times-components-native/responsive";
import {
  mockLeadOneAndOneFrontSlice,
  mockLeadTwoNoPicAndTwoFrontSlice,
  mockLeadOneFullWidthFrontSlice,
  mockInTodaysEditionSlice,
} from "@times-components-native/fixture-generator";
import {
  LeadOneAndOneFrontSlice,
  LeadTwoNoPicAndTwoFrontSlice,
  LeadOneFullWidthFrontSlice,
} from "./src/slices";

const renderSlice = (Component, data) => () => {
  return (
    <Responsive>
      <View style={{ flex: 1 }}>
        {
          <Component
            onPress={() => null}
            slice={data}
            inTodaysEditionSlice={mockInTodaysEditionSlice()}
          />
        }
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
    mock: mockLeadOneFullWidthFrontSlice(),
    name: "Front Lead One",
    Slice: LeadOneFullWidthFrontSlice,
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
