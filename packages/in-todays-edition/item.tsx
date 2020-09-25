import React from "react";
import { View, Text } from "react-native";
import { TextLink } from "@times-components-native/link";
import styleFactory from "./styles";
import { ItemType, Link, ArticleLink } from "./in-todays-edition";

interface Props {
  item: ItemType;
  index: number;
}

const isArticleLink = (link: ArticleLink | Link): link is ArticleLink => {
  // eslint-disable-next-line no-prototype-builtins
  return link.hasOwnProperty("articleId");
};

const renderLink = (item: ItemType) => {
  const styles = styleFactory();
  const link = item.mainLink;
  const url = isArticleLink(link) ? link.articleId : link.url;

  const linkText = isArticleLink(link)
    ? "Read the full story"
    : "Take me there";

  return (
    <TextLink
      onPress={() => item.onPress}
      style={styles.itemLink}
      url={url}
      target={null}
    >
      {linkText}
    </TextLink>
  );
};

export const Item: React.FC<Props> = ({ item, index }) => {
  const styles = styleFactory();
  return (
    <>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemStrapline}>{item.strapline}</Text>
        {renderLink(item)}
        {index !== 3 ? <View style={styles.horizontalDivider} /> : null}
      </View>
    </>
  );
};
