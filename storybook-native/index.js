import React from "react";
import { Navigation } from "react-native-navigation";
import { Button, StyleSheet, View } from "react-native";

import { FontStorage } from "@times-components-native/typeset";
import { StorybookUIRoot } from "./storybook";
import ttf from "../fonts";

Object.keys(ttf).forEach((fontName) => {
  FontStorage.registerFont(fontName, ttf[fontName]);
});

const VIEW_ID_FIRST_VIEW = "navigation.thetimes.FirstView";
const VIEW_ID_STORYBOOK = "navigation.thetimes.Storybook";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

const FirstView = (props) => {
  const goToStorybook = () => {
    Navigation.push(props.componentId, {
      component: {
        name: VIEW_ID_STORYBOOK,
        options: {
          topBar: {
            title: {
              text: "Storybook",
            },
            backButton: {
              showTitle: false,
            },
          },
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => goToStorybook()} title="View Storybook" />
    </View>
  );
};

Navigation.registerComponent(VIEW_ID_FIRST_VIEW, () => FirstView);
Navigation.registerComponent(VIEW_ID_STORYBOOK, () => StorybookUIRoot);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: VIEW_ID_FIRST_VIEW,
              options: {
                topBar: {
                  // visible: false,
                  largeTitle: {
                    visible: true,
                  },
                  title: {
                    text: "Times Components",
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
