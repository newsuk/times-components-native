import React, { FC, Fragment, useState } from "react";
import { ImageProps, Modal, SafeAreaView, StyleProp, View } from "react-native";
import { ResponsiveContext } from "@times-components-native/responsive";
import Button from "@times-components-native/link";
import ImageViewer from "react-native-image-zoom-viewer";
import Url from "url-parse";
import CloseButton from "../close-button";
import ModalCaptionContainer from "../modal-caption-container";
import Image from "../image";
import styles, { captionStyles, tabletCaptionStyles } from "../styles";
import Caption from "@times-components-native/caption";
import { ImageContent } from "@times-components-native/types";

interface ModalImageProps extends ImageProps {
  caption: {
    text: string;
    credits: string;
  } | null;
  onImagePress: (index: number) => void | null;
  show: boolean;
  isSmallImage: boolean;
  accessibilityLabel: string;
  aspectRatio?: number;
  borderRadius: number;
  disablePlaceholder?: boolean;
  rounded?: boolean;
  uri: string;
  index?: number;
  images: ImageContent[];
  styles?: StyleProp<ImageProps>;
  relativeHeight: number;
  relativeWidth: number;
  relativeHorizontalOffset: number;
  relativeVerticalOffset: number;
}

const ModalImage: FC<ModalImageProps> = ({
  show = false,
  caption = null,
  onImagePress = null,
  images = [],
  isSmallImage = false,
  disablePlaceholder = false,
  rounded = false,
  uri = "",
  index = 0,
  styles: imageStyles,
  relativeHeight,
  relativeWidth,
  relativeHorizontalOffset,
  relativeVerticalOffset,
  aspectRatio,
}) => {
  const [showModal, setShowModal] = useState(show || false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const hideModal = () => {
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

  const renderCaption = ({ isTablet }: { isTablet: boolean }) => {
    const style = isTablet ? tabletCaptionStyles : captionStyles;

    if (!caption) {
      return null;
    }

    if (currentIndex === 0) {
      return (
        <Caption style={style} credits={caption.credits} text={caption.text} />
      );
    }

    if (images[currentIndex - 1]?.attributes) {
      return (
        <Caption
          style={style}
          text={images[currentIndex - 1].attributes.caption}
          credits={images[currentIndex - 1].attributes.credits}
        />
      );
    }

    return null;
  };

  if (onImagePress && !isSmallImage) {
    return (
      <Button onPress={() => onImagePress(index)}>
        <Image
          uri={uri}
          disablePlaceholder={disablePlaceholder}
          rounded={rounded}
          aspectRatio={aspectRatio}
          relativeHeight={relativeHeight}
          relativeWidth={relativeWidth}
          relativeHorizontalOffset={relativeHorizontalOffset}
          relativeVerticalOffset={relativeVerticalOffset}
        />
      </Button>
    );
  }

  const mainUrl = new Url(uri, true);
  mainUrl.query.offline = "true";
  const urls = [{ url: mainUrl.toString() }].concat(
    images
      .map((i) => {
        const offlineUrl = new Url(i.attributes.url, true);
        offlineUrl.query.offline = "true";
        return { url: offlineUrl.toString() };
      })
      .filter(({ url }) => url !== mainUrl.toString()),
  );

  const getImagesProps = (): {
    aspectRatio: number;
    relativeHeight: number;
    relativeWidth: number;
    relativeHorizontalOffset: number;
    relativeVerticalOffset: number;
  } => {
    if (currentIndex === 0) {
      return {
        aspectRatio: aspectRatio || 1,
        relativeHeight: relativeHeight,
        relativeWidth: relativeWidth,
        relativeHorizontalOffset: relativeHorizontalOffset,
        relativeVerticalOffset: relativeVerticalOffset,
      };
    }

    const currentImage = images[currentIndex - 1];

    const [ratioWidth, ratioHeight] = currentImage.attributes.ratio.split(":");

    return {
      aspectRatio: Number(ratioWidth) / Number(ratioHeight),
      relativeHeight: currentImage.attributes.relativeHeight,
      relativeWidth: currentImage.attributes.relativeWidth,
      relativeVerticalOffset: currentImage.attributes.relativeVerticalOffset,
      relativeHorizontalOffset:
        currentImage.attributes.relativeHorizontalOffset,
    };
  };

  const renderImage = ({
    source,
  }: {
    source: { uri: string };
    style: StyleProp<ImageProps>;
  }) => {
    const onlineUrl = new Url(source.uri, true);
    delete onlineUrl.query.offline;
    const {
      relativeHorizontalOffset,
      relativeWidth,
      relativeHeight,
      relativeVerticalOffset,
      aspectRatio,
    } = getImagesProps();
    return (
      <View style={styles.modalImageContainer}>
        <Image
          disablePlaceholder={true}
          rounded={rounded}
          uri={onlineUrl.toString()}
          style={isSmallImage ? styles.modalSmallImage : imageStyles}
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
                  enablePreload
                />
                <ModalCaptionContainer
                  pointerEvents="none"
                  style={styles.bottomSafeView}
                >
                  {renderCaption({ isTablet })}
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
          disablePlaceholder={disablePlaceholder}
          rounded={rounded}
        />
      </Button>
    </View>
  );
};

export default ModalImage;
