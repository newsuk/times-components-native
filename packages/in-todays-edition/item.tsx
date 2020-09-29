/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Dimensions, View, Text } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import Link from "@times-components-native/link";
import { getStyles } from "./styles";
import { ItemType, LinkType, ArticleLinkType } from "./in-todays-edition";

interface Props {
  item: ItemType;
  index: number;
  onArticlePress: any;
  onLinkPress: any;
}

const isArticleLink = (
  link: ArticleLinkType | LinkType,
): link is ArticleLinkType => {
  // eslint-disable-next-line no-prototype-builtins
  return link.hasOwnProperty("articleId");
};

export const Item: React.FC<Props> = ({
  item,
  index,
  onArticlePress,
  onLinkPress,
}) => {
  // @ts-ignore
  const { orientation } = useResponsiveContext();
  const isPortrait = orientation === "portrait";
  const windowWidth = Dimensions.get("window").width;
  const styles = getStyles(orientation, windowWidth);
  const link = item.mainLink;

  const ctaText = isArticleLink(link) ? "Read the full story" : "Take me there";
  const onPress = isArticleLink(link)
    ? () => onArticlePress(item.mainLink.articleId)
    : () => onLinkPress(item.mainLink.url);

  return (
    <>
      <Link linkStyle={styles.item} key={item.id} onPress={onPress}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemStrapline}>{item.strapline}</Text>
        {isPortrait && <Text style={styles.itemCTA}>{ctaText}</Text>}
      </Link>
      {index !== 3 ? <View style={styles.divider}></View> : null}
    </>
  );
};
