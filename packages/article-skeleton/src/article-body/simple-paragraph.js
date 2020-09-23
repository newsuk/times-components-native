/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import ArticleParagraphWrapper from "@times-components-native/article-paragraph";

const SimpleParagraph = ({
  onLinkPress,
  tree,
  uid,
  children,
  defaultFont,
  LinkComponent,
  narrowContent,
}) => {
  const [textItems, setTextItems] = useState([]);
  const [textItemSettings, setTextItemSettings] = useState([]);
  const { lineHeight } = defaultFont;

  useEffect(() => {
    const newTextItems = children.flatMap((child) =>
      child.splitByDifferenceInAttributes(),
    );
    const newTextItemSettings = newTextItems.map((child) =>
      child.collapsedAttributes(0),
    );
    setTextItems(newTextItems);
    setTextItemSettings(newTextItemSettings);
  }, []);

  if (children.length === 0) {
    return null;
  }

  return (
    <ArticleParagraphWrapper ast={tree} uid={uid} narrowContent={narrowContent}>
      <Text allowFontScaling={false} selectable style={{ lineHeight }}>
        {textItems.map((nestedChild, index) => {
          const [attribute, href] = textItemSettings[index];
          const style = attribute ? attribute.settings : defaultFont;
          const type = href ? href.type : null;
          const canonicalId = href ? href.canonicalId : null;
          if (href) {
            const { color, ...linkStyle } = style;
            return (
              <LinkComponent
                url={href}
                style={linkStyle}
                key={`${index}`}
                onPress={(e) =>
                  onLinkPress(e, { canonicalId, type, url: href.href })
                }
              >
                {nestedChild.string}
              </LinkComponent>
            );
          }
          return (
            <Text key={index} selectable allowFontScaling={false} style={style}>
              {nestedChild.string}
            </Text>
          );
        })}
      </Text>
    </ArticleParagraphWrapper>
  );
};

SimpleParagraph.propTypes = {
  onLinkPress: PropTypes.func.isRequired,
  tree: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  defaultFont: PropTypes.object.isRequired,
  LinkComponent: PropTypes.func.isRequired,
  narrowContent: PropTypes.bool.isRequired,
};

export default SimpleParagraph;
