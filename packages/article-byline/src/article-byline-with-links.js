/* eslint-disable react/prop-types, no-sequences, no-unused-expressions */
import React from "react";
import { TextLink } from "@times-components-native/link";
import renderByline from "./render-byline";
import { propTypes, defaultProps } from "./article-byline-prop-types";
import styles from "./styles";
import withTrackEvents from "../tracking/with-track-events";

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
  const { centered } = props;
  const textStyle = centered ? [styles.text, styles.centered] : styles.text;
  return renderByline(withTrackEvents(AuthorComponent), ast, textStyle, props);
};

ArticleBylineWithLinks.displayName = "ArticleBylineWithLinks";

ArticleBylineWithLinks.propTypes = propTypes;
ArticleBylineWithLinks.defaultProps = defaultProps;

export default ArticleBylineWithLinks;
