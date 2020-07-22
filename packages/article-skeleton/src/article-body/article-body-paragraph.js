/* eslint-disable react/forbid-prop-types */
import React, { useMemo } from "react";
import { AttributedString } from "@times-components-native/typeset";
import { colours } from "@times-components-native/styleguide";
import PropTypes from "prop-types";
import makeDropCap from "./drop-cap";
import InlineParagraph from "./inline-paragraph";
import SimpleParagraph from "./simple-paragraph";

const ArticleParagraph = ({
  children,
  index,
  tree,
  scale,
  dropcapsDisabled,
  isTablet,
  defaultFont,
  onLinkPress,
  data,
  dropCapFont,
  LinkComponent,
  narrowContent,
}) => {
  const str = AttributedString.join(
    children.filter((child) => child instanceof AttributedString),
  );

  const [inline] = children.filter(
    (child) => !(child instanceof AttributedString),
  );

  const dropCap = useMemo(
    () =>
      !dropcapsDisabled && index === 0
        ? makeDropCap(scale, colours.section[data.section], dropCapFont, str)
        : false,
    [data.section, dropCapFont, dropcapsDisabled, index, scale, str],
  );

  if (!inline && !dropCap) {
    return (
      <SimpleParagraph
        tree={tree}
        uid={`${index}`}
        defaultFont={defaultFont}
        onLinkPress={onLinkPress}
        LinkComponent={LinkComponent}
        narrowContent={narrowContent}
      >
        {children}
      </SimpleParagraph>
    );
  }

  return (
    <InlineParagraph
      isTablet={isTablet}
      dropCap={dropCap}
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
  dropcapsDisabled: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  defaultFont: PropTypes.object.isRequired,
  onLinkPress: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  dropCapFont: PropTypes.string.isRequired,
  LinkComponent: PropTypes.func.isRequired,
  narrowContent: PropTypes.bool.isRequired,
};

export default ArticleParagraph;
