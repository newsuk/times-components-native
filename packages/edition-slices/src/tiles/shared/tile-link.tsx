import React, { FC } from "react";
import Link from "@times-components-native/link";
import { TextStyle } from "react-native";
import { ConfiguredTile, OnArticlePress } from "@times-components-native/types";

interface Props {
  onPress: OnArticlePress;
  style: TextStyle;
  tile: ConfiguredTile;
}
const TileLink: FC<Props> = ({
  children,
  onPress,
  style = {},
  tile: {
    article: { id, url },
  },
}) => (
  // @ts-ignore TODO url prop no longer needed, to be deleted.
  <Link linkStyle={style} onPress={() => onPress({ id })} url={url}>
    {children}
  </Link>
);

export default TileLink;
