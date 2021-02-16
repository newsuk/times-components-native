import React, { useState } from "react";
import { Keyboard, StyleSheet, TextInput, View } from "react-native";
import { connectSearchBox } from "react-instantsearch-native";
import { colours, fontFactory } from "@times-components-native/styleguide";
import CancelButton from "./cancel-button";
import CloseButton from "./close-button";

export const SearchBar = connectSearchBox(({ currentRefinement, refine }) => {
  const [text, setText] = useState(currentRefinement);

  const handleSetText = (val: string) => {
    setText(val);
    refine(val);
  };

  const handlePressX = () => {
    handleSetText("");
  };
  const handlePressCancel = () => {
    handleSetText("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search our archive"
          style={styles.input}
          defaultValue={currentRefinement}
          onChangeText={handleSetText}
          keyboardType="web-search"
          placeholderTextColor={colours.functional.searchText}
          value={text}
        />
        <CloseButton onPress={handlePressX} />
      </View>
      <CancelButton onPress={handlePressCancel} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    backgroundColor: "#01000D",
    flexDirection: "row",
  },
  inputContainer: {
    flex: 1,
    marginLeft: 16,
    marginRight: 8,
    marginVertical: 8,
  },
  input: {
    ...fontFactory({
      font: "supporting",
      fontSize: "body",
    }),
    lineHeight: 22,
    padding: 4,
    paddingLeft: 30,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    color: colours.functional.white,
  },
  cancel: {
    color: colours.functional.white,
    ...fontFactory({
      font: "supporting",
      fontSize: "body",
    }),
    marginTop: 5,
  },
});
