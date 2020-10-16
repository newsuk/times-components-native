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
import { getDimensions } from "@times-components-native/utils";

const topNavHeight = 178;
const bottomNavHeight = 48;
const renderSlice = (Component, data) => () => {
  const { height } = getDimensions("window");
  return (
    <Responsive>
      <View
        style={{
          width: "100%",
          height: height - topNavHeight - bottomNavHeight,
        }}
      >
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
