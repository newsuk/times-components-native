import React from "react";
import { Dimensions, Text, View } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import { getStyles } from "./styles";

import { ItemsContainer } from "./itemsContainer";
import { Item } from "./item";

export type Link = {
  url: string;
};

export type ArticleLink = {
  articleId: string;
};

export type PuffMainLinkRef = ArticleLink | Link;

export type ItemType = {
  id: string;
  title: string;
  strapline: string;
  mainLink: PuffMainLinkRef;
  onArticlePress: any;
  onLinkPress: any;
};

interface Props {
  items: [ItemType];
}

const text = {
  heading: "IN TODAY'S EDITION",
};

const InTodaysEdition: React.FC<Props> = ({ items }) => {
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
          <Item key={`${item.id}-${index}`} item={item} index={index} />
        ))}
      </ItemsContainer>
    </View>
  );
};

export default InTodaysEdition;
