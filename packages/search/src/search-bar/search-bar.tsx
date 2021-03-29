import React, { useCallback, useState } from "react";
import { Keyboard, Platform, StyleSheet, TextInput, View } from "react-native";
import { connectSearchBox } from "react-instantsearch-native";
import {
  colours,
  fontFactory,
  spacing,
} from "@times-components-native/styleguide";
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

  const handleResetSearch = () => {
    handleSetText("");
  };

  const handleCancelSearch = () => {
    handleSetText("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {isIOS ? <Magnifier /> : <Chevron onPress={handleCancelSearch} />}
        <TextInput
          placeholder="Search our archive"
          style={styles.input}
          defaultValue={currentRefinement}
          onChangeText={handleSetText}
          keyboardType="web-search"
          placeholderTextColor={colours.functional.lightGreyText}
          value={text}
          autoFocus
        />
        {text && isIOS ? <XButton onPress={handleResetSearch} /> : null}
      </View>
      <CancelButton onPress={isIOS ? handleCancelSearch : handleResetSearch} />
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
    marginLeft: spacing(3),
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
    paddingLeft: spacing(6),
    backgroundColor: isIOS
      ? colours.functional.transparentWhite
      : colours.functional.backgroundTertiary,
    color: colours.functional.white,
  },
});
