import React from "react";
import { Dimensions, View, Text } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import { TextLink } from "@times-components-native/link";
import { getStyles } from "./styles";
import { ItemType, Link, ArticleLink } from "./in-todays-edition";

interface Props {
  item: ItemType;
  index: number;
}

const isArticleLink = (link: ArticleLink | Link): link is ArticleLink => {
  // eslint-disable-next-line no-prototype-builtins
  return link.hasOwnProperty("articleId");
};

const renderLink = (item: ItemType, style: any) => {
  const link = item.mainLink;
  const url = isArticleLink(link) ? link.articleId : link.url;

  const linkText = isArticleLink(link)
    ? "Read the full story"
    : "Take me there";

  return (
    <TextLink
      onPress={() => item.onArticlePress}
      onLinkPress={() => item.onLinkPress}
      style={style}
      url={url}
      target={null}
    >
      {linkText}
    </TextLink>
  );
};

export const Item: React.FC<Props> = ({ item, index }) => {
  const { orientation } = useResponsiveContext();
  const windowWidth = Dimensions.get("window").width;
  const styles = getStyles(orientation, windowWidth);
  return (
    <>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemStrapline}>{item.strapline}</Text>
        {renderLink(item, styles.itemLink)}
        {index !== 3 ? <View style={styles.horizontalDivider} /> : null}
      </View>
    </>
  );
};
