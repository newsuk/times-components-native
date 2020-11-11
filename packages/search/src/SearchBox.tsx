import React from "react";
import { connectSearchBox } from "react-instantsearch-native";
import { StyleSheet, TextInput, View } from "react-native";
import debounce from "lodash.debounce";

import { Stats } from "./Stats";

export const SearchBox = connectSearchBox(({ currentRefinement, refine }) => {
  const handleChange = React.useCallback(
    debounce((text: string) => {
      refine(text);
    }, 300),
    [],
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        defaultValue={currentRefinement}
        onChangeText={handleChange}
        keyboardType="web-search"
      />

      {!!currentRefinement && <Stats />}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 6,
  },
});
