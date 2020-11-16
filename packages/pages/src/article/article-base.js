import React from "react";
import { NativeModules, Platform } from "react-native";
import Article from "@times-components-native/article";
import {
  ContextProviderWithDefaults,
  defaults,
} from "@times-components-native/context";
import { themeFactory } from "@times-components-native/styleguide";
import { VariantTestingProvider } from "@times-components-native/variant-testing";
import adTargetConfig from "./ad-targeting-config";
import { propTypes, defaultProps } from "./article-prop-types";
import trackArticle from "./track-article";

const { appVersion = "", environment = "prod" } = NativeModules.ReactConfig;

const {
  onArticlePress,
  onAuthorPress,
  onCommentsPress,
  onCommentGuidelinesPress,
  onImagePress,
  onLinkPress,
  onTopicPress,
  onVideoPress,
  onTooltipPresented,
} = NativeModules.ArticleEvents;

const ArticleBase = ({
  adTestMode,
  article,
  devInteractives,
  error,
  isLoading,
  referralUrl,
  refetch,
  omitErrors,
  scale,
  sectionName: pageSection,
  variants,
  tooltips,
}) => {
  const { section: articleSection, template } = article || {};
  const section = pageSection || articleSection || "default";
  const adConfig =
    isLoading || error
      ? {}
      : adTargetConfig({
          adTestMode,
          article,
          sectionName: section,
        });
  const theme = {
    ...themeFactory(section, template),
    scale: scale || defaults.theme.scale,
  };

  const interactiveConfig = {
    dev: devInteractives,
    environment,
    platform: Platform.OS,
    version: appVersion,
  };

  return (
    <ContextProviderWithDefaults value={{ theme }}>
      <VariantTestingProvider variants={variants}>
        <Article
          adConfig={adConfig}
          analyticsStream={trackArticle}
          article={article}
          error={omitErrors ? null : error}
          interactiveConfig={interactiveConfig}
          isLoading={isLoading || (omitErrors && error)}
          onAuthorPress={(event, { slug }) => onAuthorPress(slug)}
          onCommentGuidelinesPress={() => onCommentGuidelinesPress()}
          onCommentsPress={(event, { articleId: id, url }) =>
            onCommentsPress(id, url)
          }
          onImagePress={onImagePress}
          onLinkPress={(event, { type, url }) => {
            if (type === "article") {
              onArticlePress(url);
            } else if (type === "topic") {
              onTopicPress(url);
            } else {
              onLinkPress(url);
            }
          }}
          onRelatedArticlePress={(event, { url }) => onArticlePress(url)}
          onTopicPress={(event, { slug }) => onTopicPress(slug)}
          onTwitterLinkPress={(_, { url }) => onLinkPress(url)}
          onTooltipPresented={onTooltipPresented}
          onVideoPress={(event, info) => onVideoPress(info)}
          pageSection={pageSection}
          referralUrl={referralUrl}
          refetch={refetch}
          tooltips={tooltips}
        />
      </VariantTestingProvider>
    </ContextProviderWithDefaults>
  );
};

ArticleBase.propTypes = propTypes;
ArticleBase.defaultProps = defaultProps;

export default ArticleBase;
