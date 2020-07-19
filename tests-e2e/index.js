import * as React from "react";
import { AppRegistry, View, Text } from "react-native";

const App = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello</Text>
    </View>
  );
};

AppRegistry.registerComponent("storybooknative", () => App);
