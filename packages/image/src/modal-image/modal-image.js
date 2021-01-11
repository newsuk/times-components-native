import React, { Component, Fragment } from "react";
import { Modal, SafeAreaView, View } from "react-native";
import { ResponsiveContext } from "@times-components-native/responsive";
import Button from "@times-components-native/link";
import ImageViewer from "react-native-image-zoom-viewer";
import Url from "url-parse";
import CloseButton from "../close-button";
import ModalCaptionContainer from "../modal-caption-container";
import Image from "../image";
import { modalDefaultProps, modalPropTypes } from "./modal-image-prop-types";
import styles, { captionStyles, tabletCaptionStyles } from "../styles";
import Caption from "@times-components-native/caption";

class ModalImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lowResImageWidth: null,
      showModal: props.show || false,
      currentIndex: 0,
    };
  }

  onLowResLayout = (evt) => {
    this.setState({ lowResImageWidth: evt.nativeEvent.layout.width });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  setCurrentIndex = (index) => {
    this.setState({ currentIndex: index });
  };

  renderCaption({ isTablet }) {
    const { caption, images } = this.props;
    const style = isTablet ? tabletCaptionStyles : captionStyles;

    if (!caption) {
      return null;
    }

    if (this.state.currentIndex === 0) {
      return (
        <Caption style={style} credits={caption.credits} text={caption.text} />
      );
    }

    if (
      images[this.state.currentIndex - 1] &&
      images[this.state.currentIndex - 1].attributes
    ) {
      return (
        <Caption
          style={style}
          text={images[this.state.currentIndex - 1].attributes.caption}
          credits={images[this.state.currentIndex - 1].attributes.credits}
        />
      );
    }

    return null;
  }

  render() {
    const {
      highResSize,
      index,
      onImagePress,
      images = [],
      uri,
      isSmallImage,
    } = this.props;

    if (onImagePress && !isSmallImage) {
      return (
        <Button onPress={() => onImagePress(index)}>
          <Image {...this.props} />
        </Button>
      );
    }
    const { showModal, lowResImageWidth } = this.state;
    const lowResSize = highResSize || lowResImageWidth;
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

    return (
      <View>
        <Modal
          animationType="slide"
          onRequestClose={this.hideModal}
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
                    <CloseButton isTablet={isTablet} onPress={this.hideModal} />
                  </SafeAreaView>
                  <ImageViewer
                    imageUrls={urls}
                    renderIndicator={() => null}
                    enableSwipeDown
                    onChange={this.setCurrentIndex}
                    useNativeDriver
                    renderImage={({ source }) => {
                      const onlineUrl = new Url(source.uri, true);
                      delete onlineUrl.query.offline;
                      return (
                        <View style={styles.modalImageContainer}>
                          <Image
                            {...this.props}
                            uri={onlineUrl.toString()}
                            fill
                            style={
                              isSmallImage
                                ? styles.modalSmallImage
                                : this.props.styles
                            }
                          />
                        </View>
                      );
                    }}
                    captureEvent
                    onSwipeDown={this.hideModal}
                    enablePreload
                  />
                  <ModalCaptionContainer
                    pointerEvents="none"
                    style={styles.bottomSafeView}
                  >
                    {this.renderCaption({ isTablet })}
                  </ModalCaptionContainer>
                </Fragment>
              )}
            </ResponsiveContext.Consumer>
          </View>
        </Modal>
        <Button onPress={this.showModal}>
          <Image
            {...this.props}
            fill
            lowResSize={lowResSize}
            onLayout={this.onLowResLayout}
          />
        </Button>
      </View>
    );
  }
}

ModalImage.propTypes = modalPropTypes;
ModalImage.defaultProps = modalDefaultProps;

export default ModalImage;
