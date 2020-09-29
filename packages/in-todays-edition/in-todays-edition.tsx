import React from "react";
import { Dimensions, Text, View } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import { getStyles } from "./styles";
import { ItemsContainer } from "./itemsContainer";
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
};

interface Props {
  items: [ItemType];
  onArticlePress: <T = unknown, R = unknown>(args?: T) => R;
  onLinkPress: <T = unknown, R = unknown>(args?: T) => R;
}

const text = {
  heading: "IN TODAY'S EDITION",
};

const InTodaysEdition: React.FC<Props> = ({
  items,
  onArticlePress,
  onLinkPress,
}) => {
  // @ts-ignore
  const { orientation } = useResponsiveContext();
  const windowWidth = Dimensions.get("window").width;
  const styles = getStyles(orientation, windowWidth);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.heading}>{text.heading}</Text>
      </View>
      <ItemsContainer>
        {items.map((item, index) => (
          <Item
            key={`${item.id}-${index}`}
            item={item}
            index={index}
            onArticlePress={onArticlePress}
            onLinkPress={onLinkPress}
          />
        ))}
      </ItemsContainer>
    </View>
  );
};

export default InTodaysEdition;
