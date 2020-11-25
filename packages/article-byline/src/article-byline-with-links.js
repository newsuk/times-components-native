/* eslint-disable react/prop-types, no-sequences, no-unused-expressions */
import React from "react";
import { Text } from "react-native";
import { TextLink } from "@times-components-native/link";
import Tooltip from "@times-components-native/tooltip";
import renderByline from "./render-byline";
import { propTypes, defaultProps } from "./article-byline-prop-types";
import styles from "./styles";
import withTrackEvents from "../tracking/with-track-events";
import hasAuthorData from "./has-author-data";

const AuthorComponent = ({
  centered,
  slug,
  className,
  onAuthorPress,
  children,
}) => {
  const url = `/profile/${slug}`;
  const name = children[0];
  const linkStyle = [styles.link, centered && styles.centered];
  return (
    <TextLink
      className={className}
      onPress={(e) => {
        onAuthorPress(e, { name, slug });
      }}
      style={linkStyle}
      url={url}
    >
      {children}
    </TextLink>
  );
};

const ArticleBylineWithLinks = ({ ast, ...props }) => {
  let {
    centered,
    disableTooltip,
    onTooltipPresented,
    tooltipArrowOffset,
    tooltipOffsetX,
    tooltipOffsetY,
    tooltips,
  } = props;
  tooltips = ["profile"];

  const textStyle = centered ? [styles.text, styles.centered] : styles.text;
  const tooltipType = "profile";
  const showTooltip =
    !disableTooltip && hasAuthorData(ast) && tooltips.includes(tooltipType);

  const byline = renderByline(
    withTrackEvents(AuthorComponent),
    ast,
    textStyle,
    props,
  );

  const bylineWithTooltip = (
    <Tooltip
      content={
        <Text>
          To view all articles from this journalist, just tap their name
        </Text>
      }
      arrowOffset={tooltipArrowOffset}
      offsetX={tooltipOffsetX}
      offsetY={tooltipOffsetY}
      onTooltipPresented={onTooltipPresented}
      type={tooltipType}
      tooltips={tooltips}
      width={236}
    >
      {byline}
    </Tooltip>
  );

  return showTooltip ? bylineWithTooltip : byline;
};

ArticleBylineWithLinks.propTypes = propTypes;
ArticleBylineWithLinks.defaultProps = defaultProps;

export default ArticleBylineWithLinks;
