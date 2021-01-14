import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { withTrackScrollDepth } from "@times-components-native/tracking";
import { Viewport } from "@skele/components";
import { render } from "@times-components-native/markup-forest";
import ArticleExtras from "@times-components-native/article-extras";
import {
  articleSkeletonPropTypes,
  articleSkeletonDefaultProps,
} from "./article-skeleton-prop-types";
import articleTrackingContext from "./tracking/article-tracking-context";
import Gutter, { maxWidth } from "./gutter";
import styles from "./styles/shared";
import renderers from "./article-body/article-body-row";
import fixup from "./body-utils";
import ErrorBoundary from "./boundary";
import { useResponsiveContext } from "@times-components-native/responsive";

const templateWithDropCaps = [
  "indepth",
  "maincomment",
  "magazinestandard",
  "magazinecomment",
];

const isDropcapsDisabled = ({ template, dropcapsDisabled }) => {
  if (dropcapsDisabled) {
    return true;
  }
  return !templateWithDropCaps.includes(template);
};

const ArticleWithContent = (props) => {
  const {
    Header,
    data,
    analyticsStream,
    onArticleRead,
    onCommentGuidelinesPress,
    onCommentsPress,
    onTooltipPresented,
    onRelatedArticlePress,
    onTopicPress,
    isTablet,
    narrowContent,
    tooltips,
  } = props;

  const { windowWidth } = useResponsiveContext();

  const [hasBeenRead, setHasBeenRead] = useState(false);

  const { id, url, content, template } = data;

  const setArticleRead = () => {
    setHasBeenRead(true);
    onArticleRead && onArticleRead(id);
  };

  useEffect(() => {
    if (!hasBeenRead) {
      const delay = setTimeout(() => {
        setArticleRead();
      }, 6000);
      return () => clearTimeout(delay);
    }
  }, [hasBeenRead]);

  const onScroll = () => {
    !hasBeenRead && setArticleRead();
  };

  const header = useMemo(
    () => (
      <Gutter>
        <Header width={Math.min(maxWidth, windowWidth)} />
      </Gutter>
    ),
    [windowWidth],
  );

  const footer = useMemo(
    () => (
      <Gutter>
        <ArticleExtras
          analyticsStream={analyticsStream}
          articleId={id}
          articleUrl={url}
          onCommentGuidelinesPress={onCommentGuidelinesPress}
          onCommentsPress={onCommentsPress}
          onRelatedArticlePress={onRelatedArticlePress}
          onTooltipPresented={onTooltipPresented}
          onTopicPress={onTopicPress}
          narrowContent={narrowContent}
          template={template}
          tooltips={tooltips}
        />
      </Gutter>
    ),
    [],
  );

  const fixedContent = useMemo(() => [...fixup(props), { name: "footer" }], [
    content,
    isTablet,
  ]);

  const images = fixedContent.filter((node) => node.name === "image");

  const dropcapsDisabled = isDropcapsDisabled(data);
  const renderChild = render(renderers({ dropcapsDisabled, ...props, images }));
  // eslint-disable-next-line react/prop-types
  const Child = useCallback(
    ({ item, index }) => (
      <Gutter>
        <ErrorBoundary>
          {item.name === "footer"
            ? footer
            : renderChild(item, index.toString(), index)}
        </ErrorBoundary>
      </Gutter>
    ),
    [footer],
  );

  const renderItem = (item, index) => {
    const toRender = Child({ item, index });
    return narrowContent ? (
      <View style={styles.keylineWrapper}>{toRender}</View>
    ) : (
      toRender
    );
  };

  const processedContent = fixedContent.map(renderItem);

  return (
    <View style={styles.articleContainer}>
      <Viewport.Tracker>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          onScroll={onScroll}
          scrollEventThrottle={400}
        >
          {header}
          {processedContent}
        </ScrollView>
      </Viewport.Tracker>
    </View>
  );
};

ArticleWithContent.propTypes = {
  ...articleSkeletonPropTypes,
  interactiveConfig: PropTypes.shape({}),
  onCommentGuidelinesPress: PropTypes.func.isRequired,
  onCommentsPress: PropTypes.func.isRequired,
  onLinkPress: PropTypes.func.isRequired,
  onRelatedArticlePress: PropTypes.func.isRequired,
  onTooltipPresented: PropTypes.func,
  onTwitterLinkPress: PropTypes.func.isRequired,
  onVideoPress: PropTypes.func.isRequired,
  onImagePress: PropTypes.func.isRequired,
  tooltips: PropTypes.array,
};
ArticleWithContent.defaultProps = {
  ...articleSkeletonDefaultProps,
  interactiveConfig: {},
  onTooltipPresented: () => null,
  tooltips: [],
};

const ArticleSkeleton = (props) => {
  const { data } = props;

  if (!data) {
    return null;
  }

  const { content } = data;

  if (!content) {
    return null;
  }

  return <ArticleWithContent {...props} />;
};

ArticleSkeleton.displayName = "ArticleSkeleton";

ArticleSkeleton.propTypes = {
  ...articleSkeletonPropTypes,
  interactiveConfig: PropTypes.shape({}),
  onCommentGuidelinesPress: PropTypes.func.isRequired,
  onCommentsPress: PropTypes.func.isRequired,
  onLinkPress: PropTypes.func.isRequired,
  onRelatedArticlePress: PropTypes.func.isRequired,
  onTwitterLinkPress: PropTypes.func.isRequired,
  onVideoPress: PropTypes.func.isRequired,
  onImagePress: PropTypes.func.isRequired,
};
ArticleSkeleton.defaultProps = {
  ...articleSkeletonDefaultProps,
  interactiveConfig: {},
};

export default articleTrackingContext(withTrackScrollDepth(ArticleSkeleton));
