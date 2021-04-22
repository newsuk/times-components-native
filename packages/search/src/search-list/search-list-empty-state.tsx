import React from "react";
import { Text, Image, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./styles/search-list-empty-state-styles";
import { ImageIcons } from "@times-components-native/icons/src/icons/imageIcons";

interface SearchListEmptyStateProps {
  message: string;
  title: string;
  icon?: string;
}

const SearchListEmptyState: React.FC<SearchListEmptyStateProps> = ({
  message,
  title,
  icon = "search",
}) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.listEmptyStateContainer}
  >
    <Image
      source={ImageIcons[icon]}
      style={{ width: 200, height: 200, alignSelf: "center" }}
    />
    <Text style={styles.listEmptyTitle}>{title}</Text>
    <Text style={styles.listEmptyMessage}>{message}</Text>
  </KeyboardAvoidingView>
);

export default SearchListEmptyState;
