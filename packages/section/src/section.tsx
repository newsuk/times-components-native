import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  NativeEventEmitter,
  NativeModules,
  Platform,
  StyleSheet,
  View,
} from "react-native";
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
  createPuzzleData,
  getEmailPuzzlesUrl,
  getSliceIndexByArticleId,
  isSupplementSection,
  prepareSlicesForRender,
} from "./utils";
import { OnArticlePress } from "@times-components-native/types";
import { SectionTitles } from "./utils/sectionConfigs";
import { Orientation } from "@times-components-native/responsive/src/context";

const styles = styleFactory();
const { SectionEvents } = NativeModules;
const sectionEventEmitter = new NativeEventEmitter(SectionEvents);

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
  scrollToArticleId?: string;
}

const Section: FC<Props> = ({
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
  const {
    isTablet,
    editionBreakpoint,
    orientation,
    windowWidth,
    windowHeight,
  } = useResponsiveContext();

  console.log(
    "GHKSLDGHKSDLGHSDLGSDKLGSKLDGSKDLGJDSKJKSDJLKDS22222222233333333444444444",
    isTablet,
    editionBreakpoint,
    orientation,
    windowWidth,
    windowHeight,
  );

  const flatListRef = useRef<FlatList>(null);
  const sliceOffsets = useRef<Record<string, number>>({});

  const emailPuzzlesButtonExtendedWidth = 170;
  const [emailPuzzlesButtonWidth] = useState(
    new Animated.Value(emailPuzzlesButtonExtendedWidth),
  );

  useEffect(() => {
    const sectionEventsListener = sectionEventEmitter.addListener(
      "scrollToArticleId",
      scrollToOffset,
    );
    return () => {
      sectionEventsListener.remove();
    };
  }, []);

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
    console.log("456745685760457605476054764576095qwrewrrwerew", isMagazine);
    if (isPuzzle) return <PuzzleBar onPress={onPuzzleBarPress} />;

    if (isMagazine) return <MagazineCover cover={cover} />;

    return null;
  };

  const renderItem = (isPuzzle: boolean, orientation: Orientation) => ({
    index,
    item: slice,
    inTodaysEditionSlice,
  }: any) => (
    <View
      onLayout={(event) => {
        sliceOffsets.current[index] = event?.nativeEvent?.layout?.height ?? 0;
      }}
      style={sliceStyles.sliceContainer}
    >
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
    </View>
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
    : prepareSlicesForRender(isTablet, sectionTitle, orientation)(slices);

  if (slices) receiveChildList(data);

  const scrollToOffset = (event: { articleId: string }) => {
    const { articleId } = event;
    const sliceIndexFromArticle = articleId
      ? getSliceIndexByArticleId(articleId, data)
      : 0;

    const sliceOffset = Object.entries(sliceOffsets.current).reduce(
      (acc: number, [sliceIndex, sliceHeight]) =>
        parseInt(sliceIndex) < sliceIndexFromArticle ? acc + sliceHeight : acc,
      0,
    );

    if (sliceOffset) {
      flatListRef.current?.scrollToOffset({
        offset: sliceOffset,
      });
    }
  };

  return (
    <>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={
          isTablet && isPuzzle && styles.additionalContainerPadding
        }
        removeClippedSubviews
        data={data}
        ItemSeparatorComponent={(leadingItem) =>
          renderItemSeperator(isPuzzle)(leadingItem, editionBreakpoint)
        }
        keyExtractor={(item) => item.elementId}
        ListHeaderComponent={getHeaderComponent(isPuzzle, isMagazine)}
        nestedScrollEnabled
        onViewableItemsChanged={onViewed ? onViewableItemsChanged : null}
        {...(isPuzzle && { onScrollBeginDrag })}
        renderItem={renderItem(isPuzzle, orientation)}
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

const sliceStyles = StyleSheet.create({
  sliceContainer: {
    flex: 1,
  },
});

export default withTrackingContext(withTrackScrollDepth(Section));
