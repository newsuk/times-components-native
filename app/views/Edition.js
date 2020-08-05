import React from "react";
import { Navigation } from "react-native-navigation";
import { Button, StyleSheet, View } from "react-native";

import { VIEW_ID_STORYBOOK } from "../navigation/ids";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export const EditionView = (props) => {
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
