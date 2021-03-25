import React from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";
import Button from "@times-components-native/link";
import styles from "../styles";
import closeImagePath from "../../assets/close-button.png";

const CloseButton = ({ isArticleTablet, onPress }) => (
  <Button
    linkStyle={[
      styles.closeButton,
      isArticleTablet && styles.closeButtonTablet,
    ]}
    onPress={onPress}
  >
    <Image
      resizeMode="contain"
      source={closeImagePath}
      style={styles.closeButtonImage}
    />
  </Button>
);

CloseButton.propTypes = {
  isArticleTablet: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CloseButton;
