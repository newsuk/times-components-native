import React, { FC, Fragment, useState } from "react";
import { ImageProps, Modal, SafeAreaView, StyleProp, View } from "react-native";
import Url from "url-parse";
import ImageViewer from "react-native-image-zoom-viewer";
import Button from "@times-components-native/link";
import { ResponsiveContext } from "@times-components-native/responsive";
import { ImageContent } from "@times-components-native/types";
import CloseButton from "../close-button";
import ModalCaptionContainer from "../modal-caption-container";
import Image from "../image";
import styles from "../styles";
import ModalCaption from "./modal-caption";

interface MainImage {
  uri: string;
  relativeHeight?: number;
  relativeHorizontalOffset?: number;
  relativeVerticalOffset?: number;
  relativeWidth?: number;
  aspectRatio?: number;
  caption?: {
    text: string;
    credits: string;
  } | null;
}

interface ModalImageProps extends MainImage {
  images?: ImageContent[];
  index?: number;
  isSmallImage?: boolean;
  onImagePress?: (index: number) => void | null;
  rounded?: boolean;
  show?: boolean;
  imageStyles?: StyleProp<ImageProps>;
  testIDProp?: ImageProps["testID"];
}

const computeAspectRatio = (ratio?: number | string) => {
  if (!ratio) {
    return 1;
  }

  if (typeof ratio === "string") {
    const [ratioWidth, ratioHeight] = ratio.split(":");
    return Number(ratioWidth) / Number(ratioHeight);
  }
  return ratio;
};

const getUrls = (images: ImageContent[], mainImage: MainImage) => {
  if (!images.length) {
    const offlineUrl = new Url(mainImage.uri, true);
    offlineUrl.query.offline = "true";
    return [
      {
        ...mainImage,
        url: offlineUrl.toString(),
        imageIndex: 0,
        caption: mainImage.caption?.text,
        credits: mainImage.caption?.credits,
      },
    ];
  }

  return images.map((image) => {
    const offlineUrl = new Url(image.attributes.url, true);
    offlineUrl.query.offline = "true";

    return {
      ...image.attributes,
      url: offlineUrl.toString(),
      aspectRatio: computeAspectRatio(image.attributes.ratio),
    };
  });
};

const ModalImage: FC<ModalImageProps> = ({
  testIDProp,
  aspectRatio,
  images: initialImages = [],
  caption,
  index: initialIndex = 0,
  isSmallImage = false,
  onImagePress = null,
  relativeHeight,
  relativeHorizontalOffset,
  relativeVerticalOffset,
  relativeWidth,
  rounded = false,
  show = false,
  imageStyles = {},
  uri = "",
}) => {
  const [showModal, setShowModal] = useState(show || false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const hideModal = () => {
    setCurrentIndex(initialIndex);
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleSetCurrentIndex = (index?: number) => {
    if (index || index === 0) {
      setCurrentIndex(index);
    }
  };

  const images = getUrls(initialImages, {
    uri,
    aspectRatio,
    relativeHeight,
    relativeWidth,
    relativeHorizontalOffset,
    relativeVerticalOffset,
    caption,
  });

  if (onImagePress && !isSmallImage) {
    return (
      <Button
        onPress={() => onImagePress(currentIndex)}
        testIDProp={testIDProp}
      >
        <Image
          uri={uri}
          rounded={rounded}
          aspectRatio={aspectRatio}
          relativeHeight={relativeHeight}
          relativeWidth={relativeWidth}
          relativeHorizontalOffset={relativeHorizontalOffset}
          relativeVerticalOffset={relativeVerticalOffset}
          style={imageStyles}
          captionText={caption && caption.text ? caption.text : ""}
        />
      </Button>
    );
  }

  const renderImage = ({
    source,
  }: {
    source: { uri: string };
    style: StyleProp<ImageProps>;
  }) => {
    const onlineUrl = new Url(source.uri, true);
    delete onlineUrl.query.offline;

    const {
      relativeWidth,
      relativeHeight,
      relativeVerticalOffset,
      relativeHorizontalOffset,
      aspectRatio,
      caption,
    } = images[currentIndex];

    return (
      <View style={styles.modalImageContainer}>
        <Image
          captionText={caption}
          rounded={rounded}
          uri={onlineUrl.toString()}
          style={[
            styles.modalImage,
            isSmallImage ? styles.modalSmallImage : imageStyles,
          ]}
          relativeWidth={relativeWidth}
          relativeHeight={relativeHeight}
          relativeVerticalOffset={relativeVerticalOffset}
          relativeHorizontalOffset={relativeHorizontalOffset}
          aspectRatio={aspectRatio}
        />
      </View>
    );
  };

  return (
    <View>
      <Modal
        animationType="slide"
        onRequestClose={hideModal}
        presentationStyle="fullScreen"
        supportedOrientations={["portrait", "landscape"]}
        visible={showModal}
      >
        <View style={styles.modal}>
          <ResponsiveContext.Consumer>
            {({ isArticleTablet }) => (
              <Fragment>
                <SafeAreaView
                  style={[
                    styles.buttonContainer,
                    isArticleTablet && styles.buttonContainerTablet,
                  ]}
                >
                  <CloseButton
                    isArticleTablet={isArticleTablet}
                    onPress={hideModal}
                  />
                </SafeAreaView>
                <ImageViewer
                  imageUrls={images}
                  renderIndicator={() => <View />}
                  enableSwipeDown
                  onChange={handleSetCurrentIndex}
                  useNativeDriver
                  renderImage={renderImage}
                  onSwipeDown={hideModal}
                  saveToLocalByLongPress={false}
                  enablePreload
                  index={currentIndex}
                />
                <ModalCaptionContainer
                  pointerEvents="none"
                  style={styles.bottomSafeView}
                >
                  <ModalCaption
                    isArticleTablet={isArticleTablet}
                    text={images[currentIndex]?.caption || ""}
                    credits={images[currentIndex]?.credits || ""}
                  />
                </ModalCaptionContainer>
              </Fragment>
            )}
          </ResponsiveContext.Consumer>
        </View>
      </Modal>
      <Button onPress={handleShowModal} testIDProp={testIDProp}>
        <Image
          aspectRatio={aspectRatio}
          relativeHeight={relativeHeight}
          relativeWidth={relativeWidth}
          relativeHorizontalOffset={relativeHorizontalOffset}
          relativeVerticalOffset={relativeVerticalOffset}
          uri={uri}
          rounded={rounded}
          style={imageStyles}
        />
      </Button>
    </View>
  );
};

export default ModalImage;
