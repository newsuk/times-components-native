import React, { FC } from "react";
import Link from "@times-components-native/link";
import { StyleProp, ViewStyle } from "react-native";
import { OnArticlePress } from "@times-components-native/types";
import { Tile } from "@times-components-native/fixture-generator/src/types";

interface Props {
  onPress: OnArticlePress;
  style?: StyleProp<ViewStyle>;
  tile: Tile;
}
const TileLink: FC<Props> = ({
  children,
  onPress,
  style = {},
  tile: {
    article: { id },
  },
}) => (
  <Link linkStyle={style} onPress={() => onPress({ id })}>
    {children}
  </Link>
);

export default TileLink;
