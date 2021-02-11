import React, { useEffect, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
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
import renderers from "./article-body/article-body-row";
import fixup from "./body-utils";
import ErrorBoundary from "./boundary";
import { useResponsiveContext } from "@times-components-native/responsive";

const MemoisedArticle = React.memo((props) => {
  console.log("DomContext ArticleWithContent called", props.data.id);
  const {
    Header,
    data,
    analyticsStream,
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

  const { id, url, content, template } = data;

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
    const imagesMemo = fixedContentMemo.filter((node) => node.name === "image");
    return [fixedContentMemo, imagesMemo];
  }, [content, isTablet]);

  const renderChild = render(renderers({ ...props, images }));

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

  const [hasBeenRead, setHasBeenRead] = useState(false);

  const setArticleRead = () => {
    setHasBeenRead(true);
    onArticleRead && onArticleRead(data.id);
  };

  useEffect(() => {
    if (!hasBeenRead) {
      const delay = setTimeout(() => {
        setArticleRead();
      }, 6000);
      return () => clearTimeout(delay);
    }
  }, [hasBeenRead]);

  const handleScroll = () => {
    !hasBeenRead && setArticleRead();
  };

  return (
    <View style={styles.articleContainer}>
      <Viewport.Tracker>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
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

// ArticleSkeleton.whyDidYouRender = true;
export default articleTrackingContext(withTrackScrollDepth(ArticleSkeleton));
// f.whyDidYouRender = true;
// export default ArticleSkeleton;
