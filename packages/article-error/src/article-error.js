import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import PropTypes from "prop-types";

import Button from "@times-components-native/button";
import styles from "./styles";

const errorImage = require("../assets/article-error.png");

const ArticleError = ({ buttonText, refetch, title, message }) => (
  <ScrollView>
    <View style={styles.errorContainer}>
      <View>
        <Image
          accessibilityLabel="Error Cartoon"
          accessible
          resizeMode="contain"
          source={errorImage}
          style={[styles.errorImageContainer, { height: 270, width: 240 }]}
        />

        <Text style={styles.errorHeading}>{title}</Text>
        <Text style={styles.errorMessage}>{message}</Text>
      </View>

      {refetch && (
        <View style={styles.buttonWrapper}>
          <Button style={styles.button} onPress={refetch} title={buttonText} />
        </View>
      )}
    </View>
  </ScrollView>
);

ArticleError.propTypes = {
  buttonText: PropTypes.string,
  refetch: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
};

ArticleError.defaultProps = {
  buttonText: "Retry",
  title: "Something's gone wrong",
  message: "We can't load the page you have requested.",
};

export default ArticleError;
