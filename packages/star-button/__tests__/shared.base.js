import React from "react";
import TestRenderer from "react-test-renderer";
import { iterator } from "@tcn/test-utils";
import StarButton from "../src/star-button";

jest.mock("@tcn/link", () => "Link");

jest.mock("@tcn/icons", () => ({
  IconStar: "IconStar"
}));

export default () => {
  const tests = [
    {
      name: "renders default",
      test: () => {
        const testInstance = TestRenderer.create(
          <StarButton onPress={() => {}} />
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      }
    },
    {
      name: "renders selected",
      test: () => {
        const testInstance = TestRenderer.create(
          <StarButton onPress={() => {}} selected />
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      }
    },
    {
      name: "renders disabled",
      test: () => {
        const testInstance = TestRenderer.create(
          <StarButton disabled onPress={() => {}} />
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      }
    },
    {
      name: "renders default in dark theme",
      test: () => {
        const testInstance = TestRenderer.create(
          <StarButton isDark onPress={() => {}} />
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      }
    },
    {
      name: "renders selected in dark theme",
      test: () => {
        const testInstance = TestRenderer.create(
          <StarButton isDark onPress={() => {}} selected />
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      }
    },
    {
      name: "renders disabled in dark theme",
      test: () => {
        const testInstance = TestRenderer.create(
          <StarButton disabled isDark onPress={() => {}} />
        );

        expect(testInstance.toJSON()).toMatchSnapshot();
      }
    }
  ];

  iterator(tests);
};
