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

interface ModalImageProps {
  aspectRatio?: number;
  caption?: {
    text: string;
    credits: string;
  } | null;
  images?: ImageContent[];
  index?: number;
  isSmallImage?: boolean;
  onImagePress?: (index: number) => void | null;
  relativeHeight?: number;
  relativeHorizontalOffset?: number;
  relativeVerticalOffset?: number;
  relativeWidth?: number;
  rounded?: boolean;
  show?: boolean;
  imageStyles?: StyleProp<ImageProps>;
  uri: string;
}

const ModalImage: FC<ModalImageProps> = ({
  aspectRatio,
  caption,
  images = [],
  index = 0,
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const hideModal = () => {
    setCurrentIndex(0);
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

  if (onImagePress && !isSmallImage) {
    return (
      <Button onPress={() => onImagePress(index)}>
        <Image
          uri={uri}
          rounded={rounded}
          aspectRatio={aspectRatio}
          relativeHeight={relativeHeight}
          relativeWidth={relativeWidth}
          relativeHorizontalOffset={relativeHorizontalOffset}
          relativeVerticalOffset={relativeVerticalOffset}
          style={imageStyles}
        />
      </Button>
    );
  }

  const mainUrl = new Url(uri, true);
  mainUrl.query.offline = "true";
  const urls = [
    {
      url: mainUrl.toString(),
      credits: caption?.credits,
      caption: caption?.text,
      aspectRatio: aspectRatio || 1,
      relativeHeight: relativeHeight,
      relativeWidth: relativeWidth,
      relativeHorizontalOffset: relativeHorizontalOffset,
      relativeVerticalOffset: relativeVerticalOffset,
    },
  ].concat(
    images
      .map((i) => {
        const offlineUrl = new Url(i.attributes.url, true);
        offlineUrl.query.offline = "true";
        const [ratioWidth, ratioHeight] = i.attributes.ratio.split(":");

        return {
          url: offlineUrl.toString(),
          credits: i.attributes.credits,
          caption: i.attributes.caption,
          aspectRatio: Number(ratioWidth) / Number(ratioHeight) || 1,
          relativeHeight: i.attributes.relativeHeight,
          relativeWidth: i.attributes.relativeWidth,
          relativeHorizontalOffset: i.attributes.relativeHorizontalOffset,
          relativeVerticalOffset: i.attributes.relativeVerticalOffset,
        };
      })
      .filter(({ url }) => url !== mainUrl.toString()),
  );

  const renderImage = ({
    source,
  }: {
    source: { uri: string };
    style: StyleProp<ImageProps>;
  }) => {
    const onlineUrl = new Url(source.uri, true);
    delete onlineUrl.query.offline;

    return (
      <View style={styles.modalImageContainer}>
        <Image
          rounded={rounded}
          uri={onlineUrl.toString()}
          style={[
            styles.modalImage,
            isSmallImage ? styles.modalSmallImage : imageStyles,
          ]}
          relativeWidth={urls[currentIndex].relativeWidth}
          relativeHeight={urls[currentIndex].relativeHeight}
          relativeVerticalOffset={urls[currentIndex].relativeVerticalOffset}
          relativeHorizontalOffset={urls[currentIndex].relativeHorizontalOffset}
          aspectRatio={urls[currentIndex].aspectRatio}
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
            {({ isTablet }) => (
              <Fragment>
                <SafeAreaView
                  style={[
                    styles.buttonContainer,
                    isTablet && styles.buttonContainerTablet,
                  ]}
                >
                  <CloseButton isTablet={isTablet} onPress={hideModal} />
                </SafeAreaView>
                <ImageViewer
                  imageUrls={urls}
                  renderIndicator={() => <View />}
                  enableSwipeDown
                  onChange={handleSetCurrentIndex}
                  useNativeDriver
                  renderImage={renderImage}
                  onSwipeDown={hideModal}
                  saveToLocalByLongPress={false}
                  enablePreload
                />
                <ModalCaptionContainer
                  pointerEvents="none"
                  style={styles.bottomSafeView}
                >
                  <ModalCaption
                    isTablet={isTablet}
                    text={urls[currentIndex].caption || ""}
                    credits={urls[currentIndex].credits || ""}
                  />
                </ModalCaptionContainer>
              </Fragment>
            )}
          </ResponsiveContext.Consumer>
        </View>
      </Modal>
      <Button onPress={handleShowModal}>
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
