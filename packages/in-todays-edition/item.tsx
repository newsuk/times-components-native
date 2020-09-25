import React from "react";
import { View, Text } from "react-native";
import { TextLink } from "@times-components-native/link";
import styleFactory from "./styles";

type ItemType = {
  id: string;
  title: string;
  strapline: string;
  mainLink: string;
  onPress: any;
};

interface Props {
  key: string;
  item: ItemType;
  index: number;
}

export const Item: React.FC<Props> = ({ item, index }) => {
  const styles = styleFactory();
  return (
    <>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemStrapline}>{item.strapline}</Text>
        <TextLink
          allowFontScaling={false}
          onPress={() => item.onPress}
          style={styles.itemLink}
          url={item.mainLink}
        >
          Read the full story
        </TextLink>
        {index !== 3 ? <View style={styles.horizontalDivider} /> : null}
      </View>
    </>
  );
};
