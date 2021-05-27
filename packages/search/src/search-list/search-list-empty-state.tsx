import React, { useEffect } from "react";
import { NativeModules } from "react-native";
import { Text, Image, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./styles/search-list-empty-state-styles";
import { ImageIcons } from "@times-components-native/icons/src/icons/imageIcons";
import { TTrackingData } from "../types";

const { track } = NativeModules.ReactAnalytics;

interface SearchListEmptyStateProps {
  message: string;
  title: string;
  icon?: string;
  trackingData: TTrackingData;
}

function SearchListEmptyState({
  message,
  title,
  icon = "search",
  trackingData,
}: SearchListEmptyStateProps) {
  useEffect(() => {
    track(trackingData);
  }, []);

  return (
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
}

export default SearchListEmptyState;
