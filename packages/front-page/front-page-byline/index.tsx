import React from "react";
import { Text, View, ViewStyle } from "react-native";
import ArticleByline from "@times-components-native/article-byline";
import styleFactory from "./styles";
import { Markup } from "@times-components-native/fixture-generator/src/types";

interface Props {
  byline: Markup;
  withKeyline: boolean;
  containerStyle?: ViewStyle;
}
export const FrontPageByline: React.FC<Props> = ({
  byline,
  withKeyline,
  containerStyle,
}) => {
  const styles = styleFactory();
  return (
    <View
      style={[
        styles.bylineContainer,
        containerStyle,
        withKeyline && styles.withKeyline,
      ]}
    >
      <Text>
        <ArticleByline ast={byline} bylineStyle={styles.bylineStyle} />
      </Text>
    </View>
  );
};
