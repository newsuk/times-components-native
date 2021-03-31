import React, { FC } from "react";
import Caption from "@times-components-native/caption";
import { captionStyles, tabletCaptionStyles } from "../styles";

export interface ModalCaptionProps {
  isArticleTablet: boolean;
  credits: string;
  text: string;
}

const ModalCaption: FC<ModalCaptionProps> = ({
  isArticleTablet,
  text,
  credits,
}) => {
  const style = isArticleTablet ? tabletCaptionStyles : captionStyles;

  if (!text && !credits) {
    return null;
  }

  return <Caption style={style} credits={credits} text={text} />;
};

export default ModalCaption;
