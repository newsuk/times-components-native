import React, { FC, PropsWithChildren, useCallback, useState } from "react";
import { Keyboard, TextInput, View } from "react-native";
import { colours } from "@times-components-native/styleguide";
import CancelButton from "./cancelButton";
import XButton from "./xButton";
import Magnifier from "./magnifier";
import Chevron from "./chevron";
import debounce from "lodash.debounce";
import { isIOS } from "@times-components-native/utils/src/platformUtils";
import { styles } from "./styles/searchBarStyles";
import { SearchBoxProvided } from "react-instantsearch-core";

const DEBOUNCE_WAIT = 300;

type SearchBarComponentProps = PropsWithChildren<SearchBoxProvided> & {
  isConnected: boolean | null;
};

export const SearchBarComponent: FC<SearchBarComponentProps> = ({
  currentRefinement,
  refine,
  isConnected,
}) => {
  const [text, setText] = useState(currentRefinement);

  const debouncedRefine = useCallback(
    debounce((nextValue) => refine(nextValue), DEBOUNCE_WAIT),
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
        {isIOS ? (
          <Magnifier
            color={
              !isConnected ? colours.functional.offlineSearchText : undefined
            }
          />
        ) : (
          <Chevron
            onPress={handleCancelSearch}
            color={
              !isConnected ? colours.functional.offlineSearchText : undefined
            }
          />
        )}
        <TextInput
          placeholder="Search our archive"
          style={styles.input}
          defaultValue={currentRefinement}
          onChangeText={handleSetText}
          keyboardType="web-search"
          placeholderTextColor={
            isConnected
              ? colours.functional.searchText
              : colours.functional.offlineSearchText
          }
          value={text}
          autoFocus
          editable={isConnected ? isConnected : false}
        />
        {text && isIOS ? <XButton onPress={handleResetSearch} /> : null}
      </View>
      <CancelButton
        onPress={isIOS ? handleCancelSearch : handleResetSearch}
        isConnected={isConnected}
      />
    </View>
  );
};
