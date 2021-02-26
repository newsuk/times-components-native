import React, { FC } from "react";
import { Text } from "react-native";
import { gqlRgbaToHex } from "@times-components-native/utils";
import styles from "./style";

export type ArticleLabelProps = {
  color?:
    | string
    | {
        alpha: number;
        blue: number;
        green: number;
        red: number;
      };
  title: string;
};

const ArticleLabel: FC<ArticleLabelProps> = ({ color = "black", title }) => (
  <Text style={[styles.title, { color: gqlRgbaToHex(color) || color }]}>
    {title.toUpperCase()}
  </Text>
);

export default ArticleLabel;
