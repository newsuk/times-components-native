import React from "react";
import { Text } from "react-native";
import TestRenderer from "react-test-renderer";
import { iterator } from "@times-components-native/test-utils";
import Caption from "../src/caption";
import CentredCaption from "../src/centred-caption";

const captionText = "Some caption text goes in here";
const credits = "Just credits";

export default () => {
  const tests = [
    {
      name: "caption without credits",
      test: () => {
        const testInstance = TestRenderer.create(
          <Caption text={captionText} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "caption with credits",
      test: () => {
        const testInstance = TestRenderer.create(
          <Caption credits={credits} text={captionText} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "caption with credits only",
      test: () => {
        const testInstance = TestRenderer.create(<Caption credits={credits} />);

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "caption with child",
      test: () => {
        const testInstance = TestRenderer.create(
          <Caption credits={credits} text={captionText}>
            <Text>Hello world!</Text>
          </Caption>,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "centred caption without credits",
      test: () => {
        const testInstance = TestRenderer.create(
          <CentredCaption text={captionText} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "centred caption caption with credits",
      test: () => {
        const testInstance = TestRenderer.create(
          <CentredCaption credits={credits} text={captionText} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "centred caption caption with credits only",
      test: () => {
        const testInstance = TestRenderer.create(
          <CentredCaption credits={credits} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "centred caption caption with child",
      test: () => {
        const testInstance = TestRenderer.create(
          <CentredCaption credits={credits} text={captionText}>
            <Text>Hello world!</Text>
          </CentredCaption>,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
