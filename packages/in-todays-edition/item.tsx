/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { View, Text } from "react-native";
import Link from "@times-components-native/link";
import { getDimensions } from "@times-components-native/utils";
import { IconForwardArrow } from "@times-components-native/icons";
import { colours } from "@times-components-native/styleguide";
import { getStyles } from "./styles";
import { ItemType, LinkType, ArticleLinkType } from "./in-todays-edition";
import withTrackingEvents from "./tracking-events";

interface Props {
  item: ItemType;
  index: number;
  onArticlePress: <T = unknown, R = unknown>(args?: T) => R;
  onLinkPress: <T = unknown, R = unknown>(args?: T) => R;
  orientation: string;
}

const isArticleLink = (
  link: ArticleLinkType | LinkType,
): link is ArticleLinkType => {
  // @ts-ignore
  return !!link.articleId;
};

const Item: React.FC<Props> = ({
  item,
  index,
  onArticlePress,
  onLinkPress,
  orientation,
}) => {
  const { width: windowWidth } = getDimensions();
  const styles = getStyles(orientation, windowWidth);
  const link = item.mainLink;

  const ctaText = isArticleLink(link) ? "Read the full story" : "Take me there";
  const onPress = isArticleLink(link)
    ? () => onArticlePress((item.mainLink as ArticleLinkType).articleId)
    : () => onLinkPress((item.mainLink as LinkType).url);

  return (
    <>
      <Link
        linkStyle={[styles.item, index === 3 && styles.itemLast]}
        key={item.id}
        onPress={onPress}
      >
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemStrapline}>{item.strapline}</Text>
        <View style={styles.itemCTA}>
          <Text style={styles.itemCTAText}>{ctaText}</Text>
          <View style={styles.itemCTAIconContainer}>
            <IconForwardArrow fillColour={colours.functional.red} height={8} />
          </View>
        </View>
      </Link>
      {index !== 3 && <View style={styles.divider}></View>}
    </>
  );
};

export default withTrackingEvents(Item);
