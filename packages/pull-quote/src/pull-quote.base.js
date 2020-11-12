import React from "react";
import { Text, View } from "react-native";

import { useAppContext } from "@times-components-native/context";
import { useResponsiveContext } from "@times-components-native/responsive";
import { colours, tabletWidth } from "@times-components-native/styleguide";
import PullQuoteContent from "./pull-quote-content";
import PullQuoteTwitterLink from "./pull-quote-twitter-link";
import { propTypes, defaultProps } from "./pull-quote-prop-types";
import styles from "./styles";
import quoteStyleFactory from "./styles/quotes";

const PullQuotes = ({
  caption,
  children,
  onTwitterLinkPress,
  text,
  twitter,
}) => {
  const { isTablet, windowWidth } = useResponsiveContext();
  const {
    theme: { pullQuoteFont, sectionColour = colours.section.default },
  } = useAppContext();
  const contentWidth = Math.min(windowWidth, tabletWidth);

  return (
    <View
      style={[styles.container, isTablet && { width: contentWidth * 0.35 }]}
    >
      <Text
        style={[quoteStyleFactory(pullQuoteFont), { color: sectionColour }]}
      >
        &ldquo;
      </Text>
      <PullQuoteContent>{children}</PullQuoteContent>
      <View style={styles.captionContainer}>
        <Text style={[styles.caption]}>{caption}</Text>
        <Text style={styles.text}>{caption && text ? `, ${text}` : text}</Text>
        <PullQuoteTwitterLink
          onTwitterLinkPress={onTwitterLinkPress}
          twitter={twitter}
        />
      </View>
    </View>
  );
};

PullQuotes.propTypes = propTypes;
PullQuotes.defaultProps = defaultProps;

export default PullQuotes;
