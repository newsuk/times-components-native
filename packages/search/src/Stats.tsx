import React from "react";
import { connectStats } from "react-instantsearch-native";
import { Text, View } from "react-native";

export const Stats = connectStats(({ nbHits }) => {
  if (nbHits === 0) {
    return null;
  }

  return (
    <View>
      <Text>
        Your search returned {nbHits.toLocaleString()} result
        {nbHits === 1 ? "" : "s"}
      </Text>
    </View>
  );
});
