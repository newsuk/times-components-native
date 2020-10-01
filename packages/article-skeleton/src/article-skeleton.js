import React, { useCallback, useState, useMemo } from "react";
import { View, FlatList, ActivityIndicator, Platform } from "react-native";
import PropTypes from "prop-types";
import { screenWidth } from "@times-components-native/utils";
import { withTrackScrollDepth } from "@times-components-native/tracking";
import { Viewport } from "@skele/components";
import { render } from "@times-components-native/markup-forest";
import ArticleExtras from "@times-components-native/article-extras";
import { useVariantTestingContext } from "@times-components-native/variant-testing";
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
    onCommentGuidelinesPress,
    onCommentsPress,
    onRelatedArticlePress,
    onTopicPress,
    isTablet,
    onViewed,
    narrowContent,
  } = props;
  const variants = useVariantTestingContext();

  const { id, url, content, template } = data;

  const onViewableItemsChanged = useCallback((info) => {
    if (!onViewed || !info.changed || !info.changed.length) return [];

    return info.changed
      .filter((viewableItem) => viewableItem.isViewable)
      .map((viewableItem) => onViewed(viewableItem.item, data));
  }, []);

  const [loading, setLoading] = useState(true);
  const Loading = useCallback(
    () => (
      <Gutter>
        <ActivityIndicator size="large" animating={loading} />
      </Gutter>
    ),
    [loading],
  );

  const onEndReached = () => {
    setLoading(false);
  };

  const header = useMemo(
    () => (
      <Gutter>
        <Header width={Math.min(maxWidth, screenWidth())} />
      </Gutter>
    ),
    [],
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
          onTopicPress={onTopicPress}
          narrowContent={narrowContent}
          template={template}
        />
      </Gutter>
    ),
    [],
  );

  const fixedContent = useMemo(
    () => [...fixup(isTablet, variants, template, content), { name: "footer" }],
    [content, isTablet],
  );
  const images = fixedContent.filter((node) => node.name === "image");

  const dropcapsDisabled = isDropcapsDisabled(data);
  const renderChild = render(renderers({ dropcapsDisabled, ...props, images }));
  // eslint-disable-next-line react/prop-types
  const Child = useCallback(
    ({ item, index }) => (
      <Gutter style={{ overflow: "hidden" }}>
        <ErrorBoundary>
          {item.name === "footer"
            ? footer
            : renderChild(item, index.toString(), index)}
        </ErrorBoundary>
      </Gutter>
    ),
    [footer],
  );

  const renderItem = (item) =>
    narrowContent ? <View style={styles.keylineWrapper}>{item}</View> : item;

  const iosScroller =
    // FIXME: remove this when ios memory leaks are resolved
    useCallback(
      (scrollprops) => (
        <FlatList
          {...scrollprops}
          data={scrollprops.data.map((item, index) => Child({ item, index }))}
          renderItem={({ item }) => renderItem(item)}
        />
      ),
      [Child],
    );

  const Scroller = Platform.OS === "ios" ? iosScroller : FlatList;

  return (
    <View style={styles.articleContainer}>
      <Viewport.Tracker>
        <Scroller
          data={fixedContent}
          extraData={loading}
          ListEmptyComponent={Loading}
          ListHeaderComponent={header}
          ListFooterComponent={Loading}
          onEndReached={onEndReached}
          renderItem={({ item, index }) => renderItem(Child({ item, index }))}
          onViewableItemsChanged={onViewableItemsChanged}
          removeClippedSubviews={false}
          keyExtractor={(item, index) => index.toString()}
          initialNumToRender={4}
          windowSize={3}
          nestedScrollEnabled
          testID="flat-list-article"
          style={styles.scroller}
        />
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
  onTwitterLinkPress: PropTypes.func.isRequired,
  onVideoPress: PropTypes.func.isRequired,
  onImagePress: PropTypes.func.isRequired,
};
ArticleWithContent.defaultProps = {
  ...articleSkeletonDefaultProps,
  interactiveConfig: {},
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
