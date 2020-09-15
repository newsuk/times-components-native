import React from "react";
import { MockedProvider } from "@times-components-native/provider-test-tools";
import renderArticleSkeleton from "./showcase-helper";
import InlineNewsletterPuff from "@times-components-native/article-skeleton/src/article-body/inline-newsletter-puff";
import {
  getNewsletter,
  subscribeNewsletter as subscribeNewsletterMutation,
} from "@times-components-native/provider-queries";
import Responsive from "@times-components-native/responsive";

const renderNewsletterPuff = () => {
  return (
    <MockedProvider
      mocks={[
        {
          request: {
            query: getNewsletter,
            variables: { code: "some-code" },
          },
          result: {
            data: {
              newsletter: {
                __typename: "getNewsletter",
                id: "some-id",
                isSubscribed: false,
              },
            },
          },
        },
        {
          request: {
            query: subscribeNewsletterMutation,
            variables: { code: "some-code" },
          },
          result: {
            data: {
              subscribeNewsletter: {
                __typename: "subscribeNewsletterMutation",
                id: "some-id",
                isSubscribed: true,
              },
            },
          },
        },
      ]}
    >
      <Responsive>
        <InlineNewsletterPuff
          code={"some-code"}
          analyticsStream={() => null}
          copy={"some copy"}
          headline={"some headline"}
          label={"some label"}
          imageUri={
            "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fb5dbb8cd-eec9-4542-a608-b7fa4e28fd4b.jpg?resize=1001"
          }
        />
      </Responsive>
    </MockedProvider>
  );
};

export default {
  children: [
    {
      // eslint-disable-next-line react/prop-types
      component: ({ boolean, select }, { decorateAction }) => (
        <MockedProvider mocks={[]}>
          {renderArticleSkeleton({
            boolean,
            decorateAction,
            hasScaling: true,
            select,
          })}
        </MockedProvider>
      ),
      name: "Default",
      platform: "native",
      type: "story",
    },
    {
      component: () => renderNewsletterPuff(),
      name: "Inline Newsletter Puff",
      platform: "native",
      type: "story",
    },
  ],
  name: "Composed/Article Skeleton",
};
