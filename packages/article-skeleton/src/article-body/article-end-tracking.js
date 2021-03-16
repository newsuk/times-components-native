import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { Viewport } from "@skele/components";
import articleLinkTrackingEvents from "./article-link-tracking-events";

const ArticleEndTracking = (props) => {
  const ViewportAwareView = Viewport.Aware(View);

  const articleEndViewed = () => {
    console.log("HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  };

  return (
    <ViewportAwareView
      testID="viewportAwareView"
      onViewportEnter={articleEndViewed}
    >
      <ViewportAwareView>
        <Text>Wibble2</Text>
      </ViewportAwareView>
    </ViewportAwareView>
  );
};

ArticleEndTracking.displayName = "ArticleEndTracking";

ArticleEndTracking.defaultProps = {};

ArticleEndTracking.propTypes = {
  linkType: PropTypes.string,
};
export default articleLinkTrackingEvents(ArticleEndTracking);
