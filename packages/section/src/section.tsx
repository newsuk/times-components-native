import React, { useCallback, useState } from "react";
import { Animated, FlatList, Platform, View } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import { withTrackScrollDepth } from "@times-components-native/tracking";
import { IconEmail } from "@times-components-native/icons";
import FloatingActionButton from "@times-components-native/floating-action-button";
import SectionItemSeparator from "./section-item-separator";
import withTrackingContext from "./section-tracking-context";
import PuzzleBar from "./puzzle-bar";
import MagazineCover from "./magazine-cover";
import Slice from "./slice";
import styleFactory from "./styles";
import {
  getEmailPuzzlesUrl,
  prepareSlicesForRender,
  createPuzzleData,
  isSupplementSection,
} from "./utils";
import { OnArticlePress } from "@times-components-native/types";
import { SectionTitles } from "./utils/sectionConfigs";
import { Orientation } from "@times-components-native/responsive/src/context";

const styles = styleFactory();

interface Props {
  adConfig: any;
  onArticlePress: OnArticlePress;
  onLinkPress: (link: any) => void;
  onPuzzlePress: () => void;
  onPuzzleBarPress: () => void;
  onViewed: (item: any, slices: any[]) => void;
  publishedTime: string;
  receiveChildList: (childList: any) => void;
  section: {
    title: SectionTitles;
    cover: any;
    name: string;
    slices: any;
  };
}

const Section: React.FC<Props> = ({
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
  const { cover, name, slices, title: sectionTitle } = section;
  const { isTablet, editionBreakpoint, orientation } = useResponsiveContext();

  const emailPuzzlesButtonExtendedWidth = 170;
  const [emailPuzzlesButtonWidth] = useState(
    new Animated.Value(emailPuzzlesButtonExtendedWidth),
  );

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
      .filter((viewableItem: any) => viewableItem.isViewable)
      .map((viewableItem: any) => onViewed(viewableItem.item, slices));
  }, []);

  const getHeaderComponent = (isPuzzle: boolean, isMagazine: boolean) => {
    if (isPuzzle) return <PuzzleBar onPress={onPuzzleBarPress} />;

    if (isMagazine) return <MagazineCover cover={cover} />;

    return null;
  };

  const renderItem = (isPuzzle: boolean, orientation: Orientation) => ({
    index,
    item: slice,
    inTodaysEditionSlice,
  }: any) => (
    <Slice
      index={index}
      length={slices.length}
      onPress={isPuzzle ? onPuzzlePress : onArticlePress}
      onLinkPress={onLinkPress}
      slice={slice}
      isInSupplement={isSupplementSection(sectionTitle)}
      inTodaysEditionSlice={inTodaysEditionSlice}
      adConfig={adConfig}
      sectionTitle={sectionTitle}
      orientation={orientation}
      isTablet={isTablet}
    />
  );

  const renderItemSeperator = (isPuzzle: boolean) => (
    { leadingItem }: any,
    editionBreakpoint: string,
  ) => {
    const isIgnored = leadingItem.ignoreSeparator;

    if (isPuzzle || isIgnored) return null;

    return (
      <View>
        <SectionItemSeparator breakpoint={editionBreakpoint} />
      </View>
    );
  };

  const isPuzzle = name === "PuzzleSection";
  const isMagazine = name === "MagazineSection";

  if (name === "FrontPageSection") {
    const inTheNewsSlice = slices.find(
      (slice: any) => slice.name === "InTheNewsSlice",
    );

    const frontSlice = slices.find(
      (slice: any) => slice.name !== "InTheNewsSlice",
    );

    return renderItem(
      false,
      orientation,
    )({
      index: 0,
      item: frontSlice || {},
      inTodaysEditionSlice: inTheNewsSlice || {},
    });
  }

  const data = isPuzzle
    ? createPuzzleData(isTablet, sectionTitle)(slices, editionBreakpoint)
    : prepareSlicesForRender(isTablet, sectionTitle)(slices);

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
        renderItem={renderItem(isPuzzle, orientation)}
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

Section.displayName = "Section";

Section.defaultProps = {
  onArticlePress: () => null,
  onLinkPress: () => null,
  onPuzzleBarPress: () => null,
  onPuzzlePress: () => null,
  onViewed: () => null,
  receiveChildList: () => null,
};

export default withTrackingContext(withTrackScrollDepth(Section));
