import React, { Fragment } from "react";
import {
  ArticleBylineWithLinks,
  hasBylineData
} from "@times-components-native/article-byline";
import Context from "@times-components-native/context";
import DatePublication from "@times-components-native/date-publication";
import { colours } from "@times-components-native/styleguide";

import metaPropTypes from "./article-meta-prop-types";
import {
  DatePublicationContainer,
  Meta,
  MetaContainer,
  Separator
} from "../styles/responsive.web";
import styles from "../styles";

const ArticleMeta = ({ bylines, publicationName, publishedTime }) => (
  <MetaContainer>
    {hasBylineData(bylines) && (
      <Fragment>
        <Meta style={styles.meta}>
          <Context.Consumer>
            {({ theme: { sectionColour } }) => (
              <ArticleBylineWithLinks
                ast={bylines}
                color={sectionColour || colours.section.default}
              />
            )}
          </Context.Consumer>
        </Meta>
        <Separator />
      </Fragment>
    )}
    <Meta style={styles.meta}>
      <DatePublicationContainer style={styles.datePublication}>
        <DatePublication date={publishedTime} publication={publicationName} />
      </DatePublicationContainer>
    </Meta>
  </MetaContainer>
);

ArticleMeta.propTypes = metaPropTypes;

export default ArticleMeta;
