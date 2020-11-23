import React from "react";
import { connectStats } from "react-instantsearch-native";
import { Text, View } from "react-native";

export const Stats = connectStats(({ nbHits }) => {
  if (nbHits === 0) {
    return null;
  }

  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      <Text>
        Your search returned{" "}
        <Text style={{ fontWeight: "bold" }}>{nbHits.toLocaleString()}</Text>{" "}
        result
        {nbHits === 1 ? "" : "s"}
      </Text>
    </View>
  );
});
