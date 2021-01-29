/* eslint-disable react/forbid-prop-types */
import React, { useMemo, useState } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styleguide, {
  tabletWidth,
  getNarrowArticleBreakpoint,
} from "@times-components-native/styleguide";
import {
  TextContainer,
  LayoutManager,
  BoxExclusion,
} from "@times-components-native/typeset";
import ArticleParagraphWrapper from "@times-components-native/article-paragraph";
import { useResponsiveContext } from "@times-components-native/responsive";

const InlineParagraph = ({
  onLinkPress,
  isTablet,
  str,
  scale,
  inline,
  tree,
  uid,
  defaultFont,
  LinkComponent,
  narrowContent,
}) => {
  const { spacing } = styleguide({ scale });
  const [inlineExclusion, setInlineExclusion] = useState(false);
  const { orientation, windowWidth } = useResponsiveContext();

  const contentWidth = Math.min(
    windowWidth,
    narrowContent
      ? getNarrowArticleBreakpoint(windowWidth).content
      : tabletWidth,
  );

  const gutters = (windowWidth - contentWidth) / 2 + spacing(2);

  const container = new TextContainer(
    (isTablet ? contentWidth : windowWidth) - spacing(4),
    Infinity,
    0,
    0,
    [],
  );

  const [positionedTextItems, positionTextItemSettings] = useMemo(() => {
    const manager = new LayoutManager(
      str,
      [container],
      inlineExclusion ? [inlineExclusion.exclusion] : [],
    );

    const newPositionedTextItems = manager.layout();
    const newPositionItemSettings = newPositionedTextItems.map((p) =>
      p.text.collapsedAttributes(0),
    );
    return [newPositionedTextItems, newPositionItemSettings];
  }, [inlineExclusion, orientation]);

  if (!str.length) {
    return null;
  }

  const inlineContentWidth = contentWidth * 0.35;

  return [
    inline && (
      <View
        key={`${uid}:inline-paragraph`}
        style={{
          left: narrowContent ? 0 : gutters,
          position: "absolute",
          width: inlineContentWidth,
          zIndex: 1000,
        }}
        onLayout={(e) => {
          const { height } = e.nativeEvent.layout;
          if (!inlineExclusion) {
            setInlineExclusion({
              exclusion: new BoxExclusion(
                0,
                0,
                inlineContentWidth + spacing(2),
                height + spacing(2),
              ),
              height,
            });
          }
        }}
      >
        {inline}
      </View>
    ),
    <ArticleParagraphWrapper
      ast={tree}
      uid={uid}
      key={`${uid}:paragraph-wrapper`}
      height={Math.max(
        !positionedTextItems.length
          ? 0
          : positionedTextItems[positionedTextItems.length - 1].position.y +
              defaultFont.lineHeight,
        inlineExclusion ? inlineExclusion.height : 0,
      )}
      narrowContent={narrowContent}
    >
      {positionedTextItems.map((p, i) => {
        const [attribute, href] = positionTextItemSettings[i];
        const style = attribute ? attribute.settings : defaultFont;
        const type = href ? href.type : null;
        const canonicalId = href ? href.canonicalId : null;
        if (href) {
          const { color, ...linkStyle } = style;
          return (
            <LinkComponent
              url={href}
              key={i}
              onPress={(e) =>
                onLinkPress(e, { canonicalId, type, url: href.href })
              }
              style={{
                ...linkStyle,
                position: "absolute",
                left: p.position.x,
                top: p.position.y,
              }}
            >
              {p.text.string}
            </LinkComponent>
          );
        }
        return (
          <Text
            key={i}
            allowFontScaling={false}
            selectable
            numberOfLines={1}
            style={[
              {
                position: "absolute",
                left: p.position.x,
                top: p.position.y,
              },
              style,
            ]}
          >
            {p.text.string}
          </Text>
        );
      })}
    </ArticleParagraphWrapper>,
  ];
};

InlineParagraph.propTypes = {
  onLinkPress: PropTypes.func.isRequired,
  isTablet: PropTypes.bool.isRequired,
  str: PropTypes.object.isRequired,
  scale: PropTypes.string.isRequired,
  inline: PropTypes.object.isRequired,
  tree: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
  defaultFont: PropTypes.object.isRequired,
  LinkComponent: PropTypes.func.isRequired,
};

export default InlineParagraph;
