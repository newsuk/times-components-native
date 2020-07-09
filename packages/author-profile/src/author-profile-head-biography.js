import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import renderTrees, {
  propTypes as treePropTypes
} from "@tcn/markup-forest";
import coreRenderers from "@tcn/markup";
import styles from "./styles";

const AuthorProfileHeadBiography = ({ biography }) => (
  <Text style={styles.biography} testID="author-bio">
    {renderTrees(biography, coreRenderers)}
  </Text>
);

AuthorProfileHeadBiography.propTypes = {
  biography: PropTypes.arrayOf(treePropTypes).isRequired
};

export default AuthorProfileHeadBiography;
