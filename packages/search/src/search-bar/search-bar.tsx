import React, { useCallback, useState } from "react";
import { Keyboard, Platform, StyleSheet, TextInput, View } from "react-native";
import { connectSearchBox } from "react-instantsearch-native";
import { colours, fontFactory } from "@times-components-native/styleguide";
import CancelButton from "./cancel-button";
import XButton from "./x-button";
import Magnifier from "./magnifier";
import Chevron from "./chevron";
import debounce from "lodash.debounce";

const isIOS = Platform.OS === "ios";

export const SearchBar = connectSearchBox(({ currentRefinement, refine }) => {
  const [text, setText] = useState(currentRefinement);

  const debouncedRefine = useCallback(
    debounce((nextValue) => refine(nextValue), 300),
    [],
  );

  const handleSetText = (val: string) => {
    setText(val);
    debouncedRefine(val);
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
        {isIOS ? <Magnifier /> : <Chevron onPress={handlePressX} />}
        <TextInput
          placeholder="Search our archive"
          style={styles.input}
          defaultValue={currentRefinement}
          onChangeText={handleSetText}
          keyboardType="web-search"
          placeholderTextColor={colours.functional.searchText}
          value={text}
        />
        {text && isIOS ? <XButton onPress={handlePressX} /> : null}
      </View>
      <CancelButton onPress={handlePressCancel} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    backgroundColor: colours.functional.backgroundTertiary,
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
    backgroundColor: isIOS
      ? colours.functional.transparentWhite
      : colours.functional.backgroundTertiary,
    color: colours.functional.white,
  },
});
