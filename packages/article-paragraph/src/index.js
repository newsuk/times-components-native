/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import ArticleParagraph from "./article-paragraph";

const ArticleParagraphWrapper = ({
  children,
  height,
  style,
  narrowContent,
  attributes,
}) => {
  // const { children: astChildren } = ast;
  // if (!astChildren || astChildren.length === 0) {
  //   return null;
  // }

  return (
    <ArticleParagraph
      height={height}
      style={style}
      narrowContent={narrowContent}
      attributes={attributes}
      split={attributes?.split ?? false}
    >
      {children}
    </ArticleParagraph>
  );
};

ArticleParagraphWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
  style: PropTypes.object,
  narrowContent: PropTypes.bool,
};

ArticleParagraphWrapper.defaultProps = {
  style: {},
  narrowContent: false,
};

export default ArticleParagraphWrapper;
