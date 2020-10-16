import React from "react";
import { Platform, View } from "react-native";
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
import {
  getAndroidNavHeight,
  getDimensions,
} from "@times-components-native/utils";

const isIOS = Platform.OS === "ios";
const topNavHeight = 178;
const bottomNavHeight = 48;
const renderSlice = (Component, data) => () => {
  const { height } = getDimensions("window");
  const containerHeight = isIOS
    ? height - topNavHeight - bottomNavHeight
    : height - topNavHeight - bottomNavHeight + getAndroidNavHeight(); // on android we add marginBottom to the fronts to align the page above bottom nav bar - this factors that back in
  return (
    <Responsive>
      <View
        style={{
          width: "100%",
          height: containerHeight,
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
