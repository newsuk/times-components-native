import React from "react";
import PropTypes from "prop-types";
import Context from "@tcn/context";
import { TextLink } from "@tcn/link";
import styleFactory from "../styles/article-body";
import articleLinkTrackingEvents from "./article-link-tracking-events";

const ArticleLink = props => (
  <Context.Consumer>
    {({ theme: { scale } }) => {
      const styles = styleFactory(scale);
      return (
        <TextLink
          allowFontScaling={false}
          onPress={props.onPress}
          style={
            props.style
              ? {
                  ...styles.articleLink,
                  ...props.style
                }
              : styles.articleLink
          }
          url={props.url}
        >
          {props.children}
        </TextLink>
      );
    }}
  </Context.Consumer>
);

ArticleLink.displayName = "ArticleLink";

ArticleLink.defaultProps = {
  ...TextLink.defaultProps,
  linkType: ""
};

ArticleLink.propTypes = {
  ...TextLink.propTypes,
  linkType: PropTypes.string
};
export default articleLinkTrackingEvents(ArticleLink);
