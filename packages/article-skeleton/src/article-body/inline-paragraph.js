/* eslint-disable react/forbid-prop-types */
import React, { useState } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styleguide, {
  tabletWidth,
  getNarrowArticleBreakpoint,
} from "@times-components-native/styleguide";
import { screenWidth } from "@times-components-native/utils";
import {
  TextContainer,
  LayoutManager,
  BoxExclusion,
} from "@times-components-native/typeset";
import ArticleParagraphWrapper from "@times-components-native/article-paragraph";
import { useVariantTestingContext } from "@times-components-native/variant-testing";

const InlineParagraph = ({
  onLinkPress,
  isTablet,
  dropCap,
  str,
  scale,
  inline,
  isInlineAd,
  tree,
  uid,
  defaultFont,
  LinkComponent,
  narrowContent,
}) => {
  const { spacing } = styleguide({ scale });
  const [inlineExclusion, setInlineExclusion] = useState(false);
  const variants = useVariantTestingContext();

  if (!str.length) {
    return null;
  }

  const contentWidth = Math.min(
    screenWidth(),
    narrowContent
      ? getNarrowArticleBreakpoint(screenWidth()).content
      : tabletWidth,
  );
  const gutters = (screenWidth() - contentWidth) / 2 + spacing(2);

  const container = new TextContainer(
    isTablet ? contentWidth : screenWidth() - spacing(4),
    Infinity,
    0,
    0,
    dropCap ? [dropCap.exclusion] : [],
  );

  const slice = str.charAt(1) === " " ? 2 : dropCap.length;

  const manager = new LayoutManager(
    dropCap ? str.slice(slice) : str,
    [container],
    inlineExclusion ? [inlineExclusion.exclusion] : [],
  );

  const positioned = manager.layout();

  const getInlineWidthAndHeight = () => {
    const { articleMpuTest } = variants;

    if (!isInlineAd || !articleMpuTest) return { width: contentWidth * 0.35 };

    return {
      width: articleMpuTest.width,
      height: articleMpuTest.height,
    };
  };

  const dropCapLeftPosition = narrowContent ? 0 : gutters - spacing(2);

  return [
    dropCap && (
      <View key={`${uid}:dropcap`} style={{ left: dropCapLeftPosition }}>
        {dropCap.element}
      </View>
    ),
    inline && (
      <View
        key={`${uid}:inline-paragraph`}
        style={{
          position: "absolute",
          left: narrowContent ? 0 : gutters,
          ...getInlineWidthAndHeight(),
        }}
        onLayout={(e) => {
          const { height } = e.nativeEvent.layout;
          if (!inlineExclusion) {
            const { width } = getInlineWidthAndHeight();
            setInlineExclusion({
              exclusion: new BoxExclusion(
                0,
                0,
                width + spacing(2),
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
        dropCap ? defaultFont.lineHeight * 3 : 0,
        !positioned.length
          ? 0
          : positioned[positioned.length - 1].position.y +
              defaultFont.lineHeight,
        inlineExclusion ? inlineExclusion.height : 0,
      )}
      narrowContent={narrowContent}
    >
      {positioned.map((p, i) => {
        const [attribute, href] = p.text.collapsedAttributes(0);
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
  dropCap: PropTypes.oneOfType([PropTypes.object, PropTypes.boolean]),
  str: PropTypes.object.isRequired,
  scale: PropTypes.string.isRequired,
  inline: PropTypes.object.isRequired,
  isInlineAd: PropTypes.bool.isRequired,
  tree: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
  defaultFont: PropTypes.object.isRequired,
  LinkComponent: PropTypes.func.isRequired,
};

export default InlineParagraph;
