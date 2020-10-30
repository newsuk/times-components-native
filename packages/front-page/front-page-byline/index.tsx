import React from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import ArticleByline from "@times-components-native/article-byline";
import styleFactory from "./styles";
import { Markup } from "@times-components-native/fixture-generator/src/types";

interface Props {
  byline: Markup;
  showKeyline?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}
export const FrontPageByline: React.FC<Props> = ({
  byline,
  showKeyline,
  containerStyle,
}) => {
  const styles = styleFactory();
  return (
    <View
      style={[
        styles.bylineContainer,
        containerStyle,
        showKeyline && styles.withKeyline,
      ]}
    >
      <Text allowFontScaling={false}>
        <ArticleByline ast={byline} bylineStyle={styles.bylineStyle} />
      </Text>
    </View>
  );
};
