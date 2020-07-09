/* eslint-disable react/prop-types */
import React from "react";
import articleAdConfig from "@tcn/ad/fixtures/article-ad-config.json";
import {
  ContextProviderWithDefaults,
  defaults
} from "@tcn/context";
import { ArticleProvider } from "@tcn/provider";
import {
  article as makeParams,
  MockFixture,
  MockedProvider
} from "@tcn/provider-test-tools";
import { sections } from "@tcn/storybook";
import { scales, themeFactory } from "@tcn/styleguide";
import Responsive from "@tcn/responsive";
import storybookReporter from "@tcn/tealium-utils";
import Article from "./src/article-main-standard";

const preventDefaultedAction = decorateAction =>
  decorateAction([
    ([e, ...args]) => {
      e.preventDefault();
      return ["[SyntheticEvent (storybook prevented default)]", ...args];
    }
  ]);

const templateName = "mainstandard";

const renderArticle = ({
  adConfig = articleAdConfig,
  analyticsStream,
  decorateAction,
  id,
  scale,
  section
}) => (
  <Responsive>
    <ArticleProvider debounceTimeMs={0} id={id}>
      {({ article, isLoading, error, refetch }) => (
        <ContextProviderWithDefaults
          value={{
            theme: {
              ...themeFactory(section, templateName),
              scale: scale || defaults.theme.scale
            }
          }}
        >
          <Article
            adConfig={adConfig}
            analyticsStream={analyticsStream}
            article={article}
            error={error}
            isLoading={isLoading}
            onAuthorPress={preventDefaultedAction(decorateAction)(
              "onAuthorPress"
            )}
            onCommentGuidelinesPress={preventDefaultedAction(decorateAction)(
              "onCommentGuidelinesPress"
            )}
            onCommentsPress={preventDefaultedAction(decorateAction)(
              "onCommentsPress"
            )}
            onImagePress={preventDefaultedAction(decorateAction)(
              "onImagePress"
            )}
            onLinkPress={preventDefaultedAction(decorateAction)("onLinkPress")}
            onRelatedArticlePress={preventDefaultedAction(decorateAction)(
              "onRelatedArticlePress"
            )}
            onTopicPress={preventDefaultedAction(decorateAction)(
              "onTopicPress"
            )}
            onTwitterLinkPress={preventDefaultedAction(decorateAction)(
              "onTwitterLinkPress"
            )}
            onVideoPress={preventDefaultedAction(decorateAction)(
              "onVideoPress"
            )}
            refetch={refetch}
          />
        </ContextProviderWithDefaults>
      )}
    </ArticleProvider>
  </Responsive>
);

const mockArticle = ({
  adConfig = articleAdConfig,
  analyticsStream = storybookReporter,
  decorateAction,
  id,
  params,
  scale,
  sectionColour
}) => (
  <MockFixture
    params={params}
    render={mocks => (
      <MockedProvider mocks={mocks}>
        {renderArticle({
          adConfig,
          analyticsStream,
          decorateAction,
          id,
          scale,
          sectionColour
        })}
      </MockedProvider>
    )}
  />
);

const selectScales = select => select("Scale", scales, scales.medium);
const selectSection = select => sections[select("Section", sections, "News")];

export default {
  children: [
    {
      component: ({ select }, { decorateAction }) => {
        const id = "198c4b2f-ecec-4f34-be53-c89f83bc1b44";
        const scale = selectScales(select);
        const sectionColour = selectSection(select);

        return mockArticle({
          decorateAction,
          id,
          params: makeParams({
            error: () => new Error("Article error"),
            variables: () => ({
              id
            })
          }),
          scale,
          sectionColour
        });
      },
      name: "Error",
      platform: "native",
      type: "story"
    }
  ],
  name: "Pages/Templates"
};
