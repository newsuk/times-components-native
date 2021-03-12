import React, { useEffect, useMemo } from "react";
import {
  NativeEventEmitter,
  NativeModules,
  ScrollView,
  View,
} from "react-native";
import PropTypes from "prop-types";
import { withTrackScrollDepth } from "@times-components-native/tracking";
import { Viewport } from "@skele/components";
import { render } from "@times-components-native/markup-forest";
import ArticleExtras from "@times-components-native/article-extras";
import {
  articleSkeletonDefaultProps,
  articleSkeletonPropTypes,
} from "./article-skeleton-prop-types";
import articleTrackingContext from "./tracking/article-tracking-context";
import Gutter, { maxWidth } from "./gutter";
import styles from "./styles/shared";
import getRenderers from "./article-body/article-body-row";
import fixup from "./body-utils";
import ErrorBoundary from "./boundary";
import { useResponsiveContext } from "@times-components-native/responsive";
import {
  getCropByPriority,
  isTemplateWithLeadAssetInGallery,
} from "@times-components-native/utils";

const { ArticleEvents } = NativeModules;
const articleEventEmitter = new NativeEventEmitter(ArticleEvents);

const getAllImages = (template, leadAsset, fixedContent) => {
  if (isTemplateWithLeadAssetInGallery(template, leadAsset)) {
    return [
      {
        attributes: {
          ...getCropByPriority(leadAsset),
          caption: leadAsset.caption,
          credits: leadAsset.credits,
          imageIndex: 0,
        },
      },
      ...fixedContent.filter((node) => node.name === "image"),
    ];
  }

  return fixedContent.filter((node) => node.name === "image");
};

const MemoisedArticle = React.memo((props) => {
  const {
    Header,
    data,
    analyticsStream,
    onCommentGuidelinesPress,
    onCommentsPress,
    onTooltipPresented,
    onRelatedArticlePress,
    onTopicPress,
    isArticleTablet,
    narrowContent,
    tooltips,
  } = props;

  const { windowWidth } = useResponsiveContext();

  const { id, url, content, template, leadAsset } = data;

  const Footer = () => (
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
  );

  const [fixedContent, images] = useMemo(() => {
    const fixedContentMemo = [...fixup(props), { name: "footer" }];
    const imagesMemo = getAllImages(template, leadAsset, fixedContentMemo);
    return [fixedContentMemo, imagesMemo];
  }, [content, isArticleTablet]);

  const renderChild = render(getRenderers({ ...props, images }));

  const Child = ({ item, index }) => (
    <Gutter>
      <ErrorBoundary>
        {item.name === "footer" ? (
          <Footer />
        ) : (
          renderChild(item, index.toString(), index)
        )}
      </ErrorBoundary>
    </Gutter>
  );

  const ContentChild = ({ item, index }) => {
    return narrowContent ? (
      <View style={styles.keylineWrapper}>
        <Child item={item} index={index} />
      </View>
    ) : (
      <Child item={item} index={index} />
    );
  };

  return (
    <>
      <Gutter>
        <Header width={Math.min(maxWidth, windowWidth)} />
      </Gutter>

      {fixedContent.map((item, index) => (
        <ContentChild key={`fixedContent-${index}`} item={item} index={index} />
      ))}
    </>
  );
});

const ArticleWithContent = (props) => {
  const { onArticleRead, data } = props;
  const articleReadTimerDuration = 6000;
  let hasBeenRead = false;
  let articleReadDelay = null;

  const setArticleReadTimeout = (articleId) => {
    if (articleId === data.id && !hasBeenRead) {
      articleReadDelay = setTimeout(() => {
        setArticleRead();
      }, articleReadTimerDuration);
    } else clearTimeout(articleReadDelay);
  };

  useEffect(() => {
    const updateReadArticlesEventsListener = articleEventEmitter.addListener(
      "onArticleFocus",
      setArticleReadTimeout,
    );
    return () => {
      updateReadArticlesEventsListener.remove();
    };
  }, []);

  const setArticleRead = () => {
    if (hasBeenRead) return;
    hasBeenRead = true;
    onArticleRead && onArticleRead(data.id);
  };

  const handleScroll = () => {
    !hasBeenRead && setArticleRead();
  };

  return (
    <View style={styles.articleContainer}>
      <Viewport.Tracker>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          nestedScrollEnabled
          onScroll={handleScroll}
          scrollEventThrottle={400}
        >
          <MemoisedArticle {...props} />
        </ScrollView>
      </Viewport.Tracker>
    </View>
  );
};

ArticleWithContent.propTypes = {
  ...articleSkeletonPropTypes,
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
