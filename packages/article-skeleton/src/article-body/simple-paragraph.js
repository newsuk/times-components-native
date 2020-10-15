/* eslint-disable react/forbid-prop-types */
import React, { useMemo } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import ArticleParagraphWrapper from "@times-components-native/article-paragraph";

const flatten = (arr) => [].concat.apply([], arr);

const SimpleParagraph = ({
  onLinkPress,
  tree,
  uid,
  children,
  defaultFont,
  LinkComponent,
  narrowContent,
  onParagraphTextLayout,
  attributes,
}) => {
  const { lineHeight } = defaultFont;

  const [textItems, textItemSettings] = useMemo(() => {
    const newTextItems = flatten(
      children.map((child) => child.splitByDifferenceInAttributes()),
    );
    const newTextItemSettings = newTextItems.map((child) =>
      child.collapsedAttributes(0),
    );
    return [newTextItems, newTextItemSettings];
  }, []);

  if (children.length === 0) {
    return null;
  }

  return (
    <ArticleParagraphWrapper
      ast={tree}
      uid={uid}
      narrowContent={narrowContent}
      attributes={attributes}
    >
      <Text
        allowFontScaling={false}
        selectable
        style={{ lineHeight }}
        onTextLayout={(e) => {
          if (onParagraphTextLayout) onParagraphTextLayout(e);
        }}
      >
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
        {`\n`}
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
