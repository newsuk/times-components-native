import React from "react";
import Responsive, {
  ResponsiveContext,
} from "@times-components-native/responsive";
import Article from "./article";

const ArticleBase = (props) => (
  <Responsive>
    <ResponsiveContext.Consumer>
      {({ isTablet }) => <Article {...props} isTablet={isTablet} />}
    </ResponsiveContext.Consumer>
  </Responsive>
);

export default ArticleBase;
