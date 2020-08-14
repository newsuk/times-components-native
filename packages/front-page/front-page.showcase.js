/* eslint-disable react/prop-types */
import React from "react";
import FrontArticleSummaryContent from "@times-components-native/front-page/front-article-summary-content";
import MockMarkup from "@times-components-native/fixture-generator/src/mock-markup";
import Responsive from "@times-components-native/responsive";
import { View } from "react-native";

const markup = new MockMarkup().addParagraphs(3).get();
const bylines = new MockMarkup().addBylines().get();

const StoryContainer = ({ children }) => (
  <View
    style={{
      width: 400,
      height: 300,
      borderColor: "red",
      borderWidth: 1,
      marginLeft: 100,
    }}
  >
    {children}
  </View>
);
export default {
  children: [
    {
      component: () => (
        <Responsive>
          <StoryContainer>
            <FrontArticleSummaryContent
              summary={markup}
              bylines={bylines}
              summaryStyle={{
                fontSize: 14,
                lineHeight: 18,
                textAlign: "justify",
              }}
              columnCount={1}
            />
          </StoryContainer>
        </Responsive>
      ),
      name: "Without columns",
      type: "story",
    },
    {
      component: () => (
        <Responsive>
          <StoryContainer>
            <FrontArticleSummaryContent
              summary={markup}
              bylines={bylines}
              summaryStyle={{
                fontSize: 14,
                lineHeight: 18,
                textAlign: "justify",
              }}
              columnCount={2}
            />
          </StoryContainer>
        </Responsive>
      ),
      name: "With columns",
      type: "story",
    },
  ],
  name: "Primitives/FrontArticleSummaryContent",
};
