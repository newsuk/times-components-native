import React, { FC, PropsWithChildren, useCallback, useState } from "react";
import { Keyboard, TextInput, View } from "react-native";
import { colours } from "@times-components-native/styleguide";
import CancelButton from "./cancel-button";
import XButton from "./x-button";
import Magnifier from "./magnifier";
import Chevron from "./chevron";
import debounce from "lodash.debounce";
import { isIOS } from "@times-components-native/utils/src/platformUtils";
import { styles } from "./styles/search-bar-styles";
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
  const [hasFocus, setHasFocus] = useState(false);

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

  const handleOnBlur = () => {
    setHasFocus(false);
  };

  const handleOnFocus = () => {
    setHasFocus(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.magnifierTextWrapper}>
          {isIOS ? (
            <Magnifier
              style={styles.iconStyle}
              color={
                !isConnected ? colours.functional.offlineSearchText : undefined
              }
            />
          ) : (
            !!text && (
              <Chevron
                style={styles.chevron}
                onPress={handleCancelSearch}
                color={
                  !isConnected
                    ? colours.functional.offlineSearchText
                    : colours.functional.black
                }
              />
            )
          )}
          <TextInput
            placeholder="Search"
            style={styles.input}
            defaultValue={currentRefinement}
            onChangeText={handleSetText}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
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
        </View>
        {text && isIOS ? <XButton onPress={handleResetSearch} /> : null}
        {!isIOS && (
          <CancelButton
            onPress={isIOS ? handleCancelSearch : handleResetSearch}
            isConnected={isConnected}
          />
        )}
      </View>
      {isIOS && hasFocus && (
        <CancelButton
          onPress={isIOS ? handleCancelSearch : handleResetSearch}
          isConnected={isConnected}
        />
      )}
    </View>
  );
};
