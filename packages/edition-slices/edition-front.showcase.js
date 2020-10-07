import React from "react";
import { View } from "react-native";
import Responsive from "@times-components-native/responsive";
import {
  mockLeadOneAndOneFrontSlice,
  mockLeadTwoFrontSlice,
  mockLeadOneFullWidthFrontSlice,
  mockInTodaysEditionSlice,
} from "@times-components-native/fixture-generator";
import {
  LeadOneAndOneFrontSlice,
  LeadTwoFrontSlice,
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
    mock: mockLeadTwoFrontSlice(),
    name: "Front Lead Two",
    Slice: LeadTwoFrontSlice,
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
