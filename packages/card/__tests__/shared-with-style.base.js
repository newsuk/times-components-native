import React from "react";
import { Text } from "react-native";
import { iterator } from "@times-components-native/test-utils";
import Card from "../src/card";
import ResponsiveContext from "@times-components-native/responsive/src/context";
import { calculateResponsiveContext } from "@times-components-native/responsive/src/calculateResponsiveContext";

const props = {
  highResSize: 900,
  imageRatio: 2 / 3,
  imageUri: "https://img.io/img",
  lowResSize: 25,
  showImage: true,
};

const ResponsiveContextForMobile = ({ children }) => (
  <ResponsiveContext.Provider value={calculateResponsiveContext(300, 600, 1)}>
    {children}
  </ResponsiveContext.Provider>
);

export default (renderMethod) => {
  jest.useFakeTimers();

  const tests = [
    {
      name: "card default state",
      test: () => {
        const output = renderMethod(
          <ResponsiveContextForMobile>
            <Card {...props}>
              <Text>A card</Text>
            </Card>
          </ResponsiveContextForMobile>,
        );

        jest.runTimersToTime();

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "card with reversed state",
      test: () => {
        const output = renderMethod(
          <ResponsiveContextForMobile>
            <Card {...props} isReversed>
              <Text>A card in reverse</Text>
            </Card>
          </ResponsiveContextForMobile>,
        );

        jest.runTimersToTime();

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "card loading state",
      test: () => {
        const output = renderMethod(
          <ResponsiveContextForMobile>
            <Card {...props} isLoading>
              <Text>Loading state</Text>
            </Card>
          </ResponsiveContextForMobile>,
        );

        jest.runTimersToTime();

        expect(output).toMatchSnapshot();
      },
    },
    {
      name: "card reversed loading state",
      test: () => {
        const output = renderMethod(
          <ResponsiveContextForMobile>
            <Card {...props} isLoading isReversed>
              <Text>Loading in reverse</Text>
            </Card>
          </ResponsiveContextForMobile>,
        );

        jest.runTimersToTime();

        expect(output).toMatchSnapshot();
      },
    },
  ];

  iterator(tests);
};
