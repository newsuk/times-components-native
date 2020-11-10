import React, { useState } from "react";
import { Linking, Platform, Text, View } from "react-native";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";

import { GetNewsletter } from "@times-components-native/provider";
import { subscribeNewsletter as subscribeNewsletterMutation } from "@times-components-native/provider-queries";
import Image, { Placeholder } from "@times-components-native/image";
import { styleFactory } from "../styles/inline-newsletter-puff";
import NewsletterPuffButton from "./newsletter-puff-button";
import NewsletterPuffLink from "./newsletter-puff-link";
import { useResponsiveContext } from "@times-components-native/responsive";

function onManagePreferencesPress() {
  if (Platform.OS !== "web") {
    const url = "https://home.thetimes.co.uk/myNews";
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          return console.error("Cant open url", url); // eslint-disable-line no-console
        }
        return Linking.openURL(url);
      })
      .catch((err) => console.error("An error occurred", err)); // eslint-disable-line no-console
  }
}

const InlineNewsletterPuff = ({
  analyticsStream,
  code,
  copy,
  headline,
  imageUri,
  label,
}) => {
  const { editionBreakpoint: breakpoint } = useResponsiveContext();
  const [justSubscribed, setJustSubscribed] = useState(false);
  const styles = styleFactory(breakpoint);

  return (
    <GetNewsletter code={code} ssr={false} debounceTimeMs={0}>
      {({ isLoading, error, newsletter }) => {
        if (error) {
          return null;
        }

        if (isLoading || !newsletter) {
          return (
            <View style={[styles.container, { height: 257 }]}>
              <Placeholder />
            </View>
          );
        }

        if (newsletter.isSubscribed && !justSubscribed) {
          return null;
        }

        return (
          <Mutation
            mutation={subscribeNewsletterMutation}
            onCompleted={({ subscribeNewsletter = {} }) => {
              setJustSubscribed(subscribeNewsletter.isSubscribed);
            }}
          >
            {(subscribeNewsletter, { loading: updatingSubscription }) => (
              <View style={styles.container}>
                <View style={styles.imageContainer}>
                  <Image aspectRatio={1.42} uri={imageUri} />
                </View>
                {justSubscribed ? (
                  <View style={styles.subscribedContainer}>
                    <Text style={styles.subscribedHeadline}>
                      {`You’ve successfully signed up to ${newsletter.title}`}
                    </Text>
                    <View style={styles.preferencesContainer}>
                      <NewsletterPuffLink
                        newsletterPuffName={newsletter.title}
                        analyticsStream={analyticsStream}
                        onPress={() => onManagePreferencesPress()}
                      />
                    </View>
                  </View>
                ) : (
                  <View style={styles.signUpContainer}>
                    <Text style={styles.signUpLabel}>{label}</Text>
                    <Text style={styles.signUpHeadline}>{headline}</Text>
                    <Text style={styles.copy}>{copy}</Text>
                    <View style={styles.signUpCTAContainer}>
                      <NewsletterPuffButton
                        newsletterPuffName={newsletter.title}
                        analyticsStream={analyticsStream}
                        updatingSubscription={updatingSubscription}
                        onPress={() => {
                          if (!updatingSubscription) {
                            subscribeNewsletter({ variables: { code } });
                          }
                        }}
                      />
                    </View>
                  </View>
                )}
              </View>
            )}
          </Mutation>
        );
      }}
    </GetNewsletter>
  );
};

export default InlineNewsletterPuff;

InlineNewsletterPuff.propTypes = {
  analyticsStream: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  imageUri: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
