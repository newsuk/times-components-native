import React from "react";
import { View } from "react-native";
import { getStyles } from "./styles";
import {
  HorizontalLayout,
  TabletContentContainer,
} from "@times-components-native/slice-layout";
import { getDimensions } from "@times-components-native/utils";
import InTodaysEdition from "@times-components-native/in-todays-edition";

const FrontLeadOneSlice = ({ orientation, lead, inTodaysEditionItems }) => {
  const { width: windowWidth } = getDimensions();
  const styles = getStyles(orientation, windowWidth);
  const InTodaysEditionComponent = (
    <InTodaysEdition
      items={inTodaysEditionItems}
      onArticlePress={() => null}
      onLinkPress={() => null}
      orientation={orientation}
    />
  );

  if (orientation === "landscape") {
    return (
      <TabletContentContainer>
        <HorizontalLayout
          containerStyle={styles.container}
          tiles={[
            { style: styles.leadContainer, tile: lead },
            {
              style: styles.inTodaysEditionContainer,
              tile: InTodaysEditionComponent,
            },
          ]}
          colSeparatorStyle={styles.colSeparatorStyle}
        />
      </TabletContentContainer>
    );
  }
  return (
    <TabletContentContainer style={styles.container}>
      <View style={styles.leadContainer}>{lead}</View>
      <View style={[styles.inTodaysEditionContainer]}>
        {InTodaysEditionComponent}
      </View>
    </TabletContentContainer>
  );
};

export default FrontLeadOneSlice;
