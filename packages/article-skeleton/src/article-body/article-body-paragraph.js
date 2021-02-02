/* eslint-disable react/forbid-prop-types */
import React from "react";
import { AttributedString } from "@times-components-native/typeset";
import PropTypes from "prop-types";
import InlineParagraph from "./inline-paragraph";
import SimpleParagraph from "./simple-paragraph";

const ArticleParagraph = ({
  children,
  index,
  tree,
  scale,
  isTablet,
  defaultFont,
  onLinkPress,
  LinkComponent,
  narrowContent,
  onParagraphTextLayout,
  attributes,
}) => {
  const str = AttributedString.join(
    children.filter((child) => child instanceof AttributedString),
  );

  const [inline] = children.filter(
    (child) => !(child instanceof AttributedString),
  );

  if (!inline) {
    return (
      <SimpleParagraph
        tree={tree}
        uid={`${index}`}
        defaultFont={defaultFont}
        onLinkPress={onLinkPress}
        LinkComponent={LinkComponent}
        narrowContent={narrowContent}
        onParagraphTextLayout={onParagraphTextLayout}
        attributes={attributes}
      >
        {children}
      </SimpleParagraph>
    );
  }

  return (
    <InlineParagraph
      isTablet={isTablet}
      str={str}
      scale={scale}
      inline={inline}
      tree={tree}
      uid={`${index}`}
      defaultFont={defaultFont}
      onLinkPress={onLinkPress}
      LinkComponent={LinkComponent}
      narrowContent={narrowContent}
    />
  );
};

ArticleParagraph.propTypes = {
  children: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  tree: PropTypes.object.isRequired,
  scale: PropTypes.string.isRequired,
  isTablet: PropTypes.bool.isRequired,
  defaultFont: PropTypes.object.isRequired,
  onLinkPress: PropTypes.func.isRequired,
  LinkComponent: PropTypes.func.isRequired,
  narrowContent: PropTypes.bool.isRequired,
};

export default ArticleParagraph;
