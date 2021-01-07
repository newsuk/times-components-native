import React, { useCallback, useEffect, useState } from "react";
import { Animated, FlatList, Platform, View } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import { withTrackScrollDepth } from "@times-components-native/tracking";
import { useVariantTestingContext } from "@times-components-native/variant-testing";
import { IconEmail } from "@times-components-native/icons";
import FloatingActionButton from "@times-components-native/floating-action-button";
import SectionItemSeparator from "./section-item-separator";
import withTrackingContext from "./section-tracking-context";
import PuzzleBar from "./puzzle-bar";
import MagazineCover from "./magazine-cover";
import Slice from "./slice";
import styleFactory from "./styles";
import {
  getSliceIndexByArticleId,
  getEmailPuzzlesUrl,
  prepareSlicesForRender,
  createPuzzleData,
  isSupplementSection,
} from "./utils";

const styles = styleFactory();

const Section = ({
  adConfig,
  onArticlePress,
  onLinkPress,
  onPuzzlePress,
  onPuzzleBarPress,
  onViewed,
  publishedTime,
  receiveChildList,
  section,
}) => {
  const { cover, name, slices, title } = section;
  const { isTablet, editionBreakpoint } = useResponsiveContext();
  const emailPuzzlesButtonExtendedWidth = 170;
  const [emailPuzzlesButtonWidth] = useState(
    new Animated.Value(emailPuzzlesButtonExtendedWidth),
  );

  // slice index 0
  //const lastViewedArticleId = "d2ba9ddc-50dd-11eb-9824-61a56b05e43d";

  // slice index 1
  const lastViewedArticleId = "1d2f7b18-50dd-11eb-9824-61a56b05e43d";

  // slice index 2
  //const lastViewedArticleId = "16bb03f6-5010-11eb-9824-61a56b05e43d";

  const sliceIndexFromArticle = getSliceIndexByArticleId(
    lastViewedArticleId,
    section,
  );
  console.log("sliceIndexFromArticle 2", section.title, sliceIndexFromArticle);

  const [sliceIndex] = useState(sliceIndexFromArticle);

  const variants = useVariantTestingContext();

  const isIOS = Platform.OS === "ios";

  const onEmailPuzzleButtonPress = () =>
    onLinkPress({
      url: getEmailPuzzlesUrl(publishedTime),
      isExternal: false,
    });

  const onScrollBeginDrag = () => {
    Animated.timing(emailPuzzlesButtonWidth, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const onViewableItemsChanged = useCallback((info) => {
    if (!onViewed || !info.changed || !info.changed.length) return [];

    return info.changed
      .filter((viewableItem) => viewableItem.isViewable)
      .map((viewableItem) => onViewed(viewableItem.item, slices));
  }, []);

  const getHeaderComponent = (isPuzzle, isMagazine) => {
    if (isPuzzle) return <PuzzleBar onPress={onPuzzleBarPress} />;

    if (isMagazine) return <MagazineCover cover={cover} />;
    return null;
  };

  const renderItem = (isPuzzle) => ({
    index,
    item: slice,
    inTodaysEditionSlice,
  }) => {
    // console.log("slice", slice.name);

    return (
      <Slice
        index={index}
        id={slice.id}
        length={slices.length}
        onPress={isPuzzle ? onPuzzlePress : onArticlePress}
        onLinkPress={onLinkPress}
        slice={slice}
        isInSupplement={isSupplementSection(title)}
        inTodaysEditionSlice={inTodaysEditionSlice}
        adConfig={adConfig}
      />
    );
  };

  const renderItemSeperator = (isPuzzle) => (
    { leadingItem },
    editionBreakpoint,
  ) => {
    const isIgnored = leadingItem.ignoreSeparator;

    if (isPuzzle || isIgnored) return null;

    return (
      <View style={styles.listItemSeparatorContainer}>
        <SectionItemSeparator breakpoint={editionBreakpoint} />
      </View>
    );
  };

  const isPuzzle = name === "PuzzleSection";
  const isMagazine = name === "MagazineSection";

  if (name === "FrontPageSection") {
    const inTheNewsSlice = slices.find(
      (slice) => slice.name === "InTheNewsSlice",
    );

    const frontSlice = slices.find((slice) => slice.name !== "InTheNewsSlice");

    return renderItem(false)({
      index: 0,
      item: frontSlice || {},
      inTodaysEditionSlice: inTheNewsSlice || {},
    });
  }

  const data = isPuzzle
    ? createPuzzleData(slices, editionBreakpoint)
    : prepareSlicesForRender(isTablet, variants)(slices);

  if (slices) receiveChildList(data);

  return (
    <>
      <FlatList
        contentContainerStyle={
          isTablet && isPuzzle && styles.additionalContainerPadding
        }
        removeClippedSubviews
        data={data}
        initialNumToRender={isTablet ? 5 : 2}
        ItemSeparatorComponent={(leadingItem) =>
          renderItemSeperator(isPuzzle)(leadingItem, editionBreakpoint)
        }
        keyExtractor={(item) => item.elementId}
        ListHeaderComponent={getHeaderComponent(isPuzzle, isMagazine)}
        nestedScrollEnabled
        onViewableItemsChanged={onViewed ? onViewableItemsChanged : null}
        {...(isPuzzle && { onScrollBeginDrag })}
        renderItem={renderItem(isPuzzle)}
        onScrollToIndexFailed={() => null}
        initialScrollIndex={sliceIndex}
        windowSize={3}
      />
      {isPuzzle && isIOS ? (
        <FloatingActionButton
          animatedWidth={emailPuzzlesButtonWidth}
          extendedWidth={emailPuzzlesButtonExtendedWidth}
          text="Email me puzzles"
          icon={<IconEmail width={22} height={23} />}
          onPress={onEmailPuzzleButtonPress}
        />
      ) : null}
    </>
  );
};

Section.defaultProps = {
  onArticlePress: () => null,
  onLinkPress: () => null,
  onPuzzleBarPress: () => null,
  onPuzzlePress: () => null,
  onViewed: () => null,
  receiveChildList: () => null,
};

export default withTrackingContext(withTrackScrollDepth(Section));
