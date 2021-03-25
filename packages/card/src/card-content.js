import React, { Component } from "react";
import { View } from "react-native";
import { ResponsiveContext } from "@times-components-native/responsive";
import Image from "@times-components-native/image";
import { cardPropTypes, cardDefaultProps } from "./card-prop-types";
import Loading from "./card-loading";
import styles from "./styles";

class CardContent extends Component {
  shouldComponentUpdate(nextProps) {
    const {
      imageUri,
      lowResQuality,
      lowResSize,
      highResSize,
      isLoading,
    } = this.props;
    return (
      imageUri !== nextProps.imageUri ||
      lowResQuality !== nextProps.lowResQuality ||
      lowResSize !== nextProps.lowResSize ||
      highResSize !== nextProps.highResSize ||
      isLoading !== nextProps.isLoading
    );
  }

  render() {
    const {
      children,
      contentContainerClass,
      fadeImageIn,
      highResSize,
      imageAccessibilityLabel,
      imageContainerClass,
      imageRatio,
      imageStyle,
      imageUri,
      isLoading,
      isReversed,
      lowResQuality,
      lowResSize,
      showImage,
    } = this.props;

    const renderImage = (isArticleTablet) => {
      if (!showImage) return null;

      return (
        <View
          className={imageContainerClass}
          style={[
            isArticleTablet
              ? styles.imageContainerTablet
              : styles.imageContainer,
            imageStyle,
            isReversed ? styles.reversedImageContainer : "",
          ]}
        >
          <Image
            accessibilityLabel={imageAccessibilityLabel}
            aspectRatio={imageRatio}
            fadeImageIn={fadeImageIn}
            highResSize={highResSize}
            lowResQuality={lowResQuality}
            lowResSize={lowResSize}
            uri={imageUri}
          />
        </View>
      );
    };

    return (
      <ResponsiveContext.Consumer>
        {({ isArticleTablet }) => (
          <View
            style={[
              isArticleTablet
                ? styles.cardContainerTablet
                : styles.cardContainer,
              isReversed ? styles.reversedCardContainer : "",
            ]}
          >
            {!isReversed ? renderImage(isArticleTablet) : null}
            <View
              className={contentContainerClass}
              style={[
                isArticleTablet
                  ? styles.contentContainerTablet
                  : styles.contentContainer,
                isReversed ? styles.reversedContentContainer : "",
                isLoading ? styles.loadingContentContainer : "",
              ]}
            >
              {isLoading ? <Loading /> : children}
            </View>
            {isReversed ? renderImage(isArticleTablet) : null}
          </View>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

CardContent.propTypes = cardPropTypes;
CardContent.defaultProps = cardDefaultProps;

export default CardContent;
