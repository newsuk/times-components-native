import React from "react";
import { Text, View } from "react-native";
import { getDimensions } from "@times-components-native/utils";
import { getStyles } from "./styles";
import { Item } from "./item";

export type LinkType = {
  url: string;
};

export type ArticleLinkType = {
  articleId: string;
};

export type PuffMainLinkRef = ArticleLinkType | LinkType;

export type ItemType = {
  id: string;
  title: string;
  strapline: string;
  mainLink: PuffMainLinkRef;
  orientation: string;
};

interface Props {
  items: [ItemType];
  onArticlePress: <T = unknown, R = unknown>(args?: T) => R;
  onLinkPress: <T = unknown, R = unknown>(args?: T) => R;
  orientation: string;
}

const text = {
  heading: "IN TODAY'S EDITION",
};

const InTodaysEdition: React.FC<Props> = ({
  items,
  onArticlePress,
  onLinkPress,
  orientation,
}) => {
  const { width: windowWidth } = getDimensions();
  const styles = getStyles(orientation, windowWidth);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.heading}>{text.heading}</Text>
      </View>
      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
          <Item
            key={`${item.id}-${index}`}
            item={item}
            index={index}
            onArticlePress={onArticlePress}
            onLinkPress={onLinkPress}
            orientation={orientation}
          />
        ))}
      </View>
    </View>
  );
};

export default InTodaysEdition;
