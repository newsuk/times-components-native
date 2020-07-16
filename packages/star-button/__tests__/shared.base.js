import React from "react";
import TestRenderer from "react-test-renderer";
import { iterator } from "@times-components-native/test-utils";
import StarButton from "../src/star-button";

jest.mock("@times-components-native/link", () => "Link");

jest.mock("@times-components-native/icons", () => ({
  IconStar: "IconStar",
}));

export default () => {
  const tests = [
    {
      name: "renders default",
      test: () => {
        const testInstance = TestRenderer.create(
          <StarButton onPress={() => null} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "renders selected",
      test: () => {
        const testInstance = TestRenderer.create(
          <StarButton onPress={() => null} selected />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "renders disabled",
      test: () => {
        const testInstance = TestRenderer.create(
          <StarButton disabled onPress={() => null} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "renders default in dark theme",
      test: () => {
        const testInstance = TestRenderer.create(
          <StarButton isDark onPress={() => null} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "renders selected in dark theme",
      test: () => {
        const testInstance = TestRenderer.create(
          <StarButton isDark onPress={() => null} selected />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
    {
      name: "renders disabled in dark theme",
      test: () => {
        const testInstance = TestRenderer.create(
          <StarButton disabled isDark onPress={() => null} />,
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
