import React, { Component } from "react";
import { useResponsiveContext } from "@times-components-native/responsive";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { Dimensions, Text, View, TouchableOpacity } from "react-native";
import Image, { ModalImage } from "@times-components-native/image";
import PropTypes from "prop-types";
import styleFactory from "./styles/magazine-styles";
import { getImage } from "./utils";

class MagazineCoverImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModalImage: false,
    };

    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.setState({
      showModalImage: true,
    });
  }

  renderImage(styles) {
    const { showModalImage } = this.state;
    const { cover, breakpoint } = this.props;
    const { ratio, url } = getImage(cover);
    const { width } = Dimensions.get("window");
    const additionalImageStyling =
      breakpoint === editionBreakpoints.small ||
      breakpoint === editionBreakpoints.medium
        ? { width }
        : {};

    return showModalImage ? (
      <ModalImage
        aspectRatio={ratio}
        show
        imageStyles={styles.image}
        uri={url}
      />
    ) : (
      <Image
        aspectRatio={ratio}
        style={[styles.image, additionalImageStyling]}
        uri={url}
      />
    );
  }

  render() {
    const { height } = Dimensions.get("window");
    const imageHeight = height * 0.55;
    const { breakpoint } = this.props;

    const styles = styleFactory(breakpoint);

    return (
      <View style={[styles.container]}>
        <TouchableOpacity
          onPress={this.showModal}
          style={[styles.imageWrapper, { height: imageHeight }]}
        >
          {this.renderImage(styles)}
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>
              Tap image to view full magazine cover
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const MagazineCoverProvider = ({ cover }) => {
  const { editionBreakpoint } = useResponsiveContext();

  return <MagazineCoverImage breakpoint={editionBreakpoint} cover={cover} />;
};

MagazineCoverImage.propTypes = {
  breakpoint: PropTypes.string,
  cover: PropTypes.shape({}).isRequired,
};

MagazineCoverImage.defaultProps = {
  breakpoint: editionBreakpoints.small,
};

MagazineCoverProvider.propTypes = {
  cover: PropTypes.shape({}).isRequired,
};

export default MagazineCoverProvider;
