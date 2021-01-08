import React from "react";
import { View } from "react-native";

import { TabletContentContainer } from "../shared";
import HorizontalLayout from "../horizontallayout";
import { getStyles } from "./styles";
import { useResponsiveContext } from "@times-components-native/responsive";

const baseWindowWidth = 1024;

const baseWindowHeight = 768;
const baseContentWidth = baseWindowWidth - 40 * 2;
const baseContentHeight = 520;
const baseAspectRatio = baseContentWidth / baseContentHeight;

// will eventually compare the passed in aspect ratio with a list of supported aspect ratio - and will return the closest match
function findClosestAspectRatio(_aspectRatio) {
  return baseAspectRatio;
}

export const FrontPageContext = React.createContext({ multiplier: 1 });

const FrontLeadTwoSlice = ({ orientation, lead1, lead2, inTodaysEdition }) => {
  const { windowWidth, windowHeight } = useResponsiveContext();
  const styles = getStyles(orientation, windowWidth, windowHeight);

  const heightAvailable = windowHeight - 248;

  const currentAspectRatio = windowWidth / windowHeight;
  const aspectRatioToUse = findClosestAspectRatio(currentAspectRatio);

  const width = heightAvailable * aspectRatioToUse;
  const multiplier = heightAvailable / baseContentHeight;

  if (orientation === "landscape") {
    return (
      <FrontPageContext.Provider value={{ multiplier }}>
        <TabletContentContainer
          orientation={orientation}
          windowWidth={width}
          style={styles.container}
        >
          <HorizontalLayout
            containerStyle={styles.horizontalContainer}
            tiles={[
              { style: styles.lead1Container, tile: lead1 },
              { style: styles.lead2Container, tile: lead2 },
              {
                style: styles.inTodaysEditionContainer,
                tile: inTodaysEdition,
              },
            ]}
            colSeparatorStyle={styles.colSeparatorStyle}
          />
        </TabletContentContainer>
      </FrontPageContext.Provider>
    );
  }
  return (
    <TabletContentContainer
      orientation={orientation}
      windowWidth={windowWidth}
      style={styles.container}
    >
      <HorizontalLayout
        containerStyle={styles.horizontalContainer}
        tiles={[
          { style: styles.lead1Container, tile: lead1 },
          { style: styles.lead2Container, tile: lead2 },
        ]}
        colSeparatorStyle={styles.colSeparatorStyle}
      />
      <View style={[styles.inTodaysEditionContainer]}>{inTodaysEdition}</View>
    </TabletContentContainer>
  );
};

export default FrontLeadTwoSlice;
