import React, { FC } from "react";
import Link from "@times-components-native/link";
import { TextStyle } from "react-native";
import { TransformedTile } from "@times-components-native/types";

interface Props {
  onPress: (args: { id: string }) => void;
  style: TextStyle;
  tile: TransformedTile;
}
const TileLink: FC<Props> = ({
  children,
  onPress,
  style = {},
  tile: {
    article: { id },
  },
}) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <Link linkStyle={style} onPress={() => onPress({ id })}>
    {children}
  </Link>
);

export default TileLink;
