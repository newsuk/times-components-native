import React from "react";
import { iterator } from "../index";
import { Text } from "react-native";
import renderer from "react-test-renderer";

const exampleTest = (ordinal) => {
  const TextComponent = <Text>This is the {ordinal} test</Text>;
  const wrapper = renderer.create(TextComponent);
  expect(wrapper).toMatchSnapshot();
};

const exampleTests = [
  {
    name: "test example one",
    test: () => exampleTest("first"),
  },
  {
    name: "text example two",
    test: () => exampleTest("second"),
  },
  {
    name: "ALL TEST NAMES SHOULD BE LOWERCASE",
    test: () => exampleTest("third"),
  },
];

iterator(exampleTests);
