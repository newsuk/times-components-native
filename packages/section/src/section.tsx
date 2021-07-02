import React, { FC, useCallback, useEffect, useRef } from "react";
import {
  FlatList,
  NativeEventEmitter,
  NativeModules,
  StyleSheet,
  View,
} from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import { withTrackScrollDepth } from "@times-components-native/tracking";
import SectionItemSeparator from "./section-item-separator";
import withTrackingContext from "./section-tracking-context";
import PuzzleBar from "./puzzle-bar";
import MagazineCover from "./magazine-cover";
import Slice from "./slice";
import styleFactory from "./styles";
import {
  createPuzzleData,
  getSliceIndexByArticleId,
  isSupplementSection,
  prepareSlicesForRender,
} from "./utils";
import { OnArticlePress } from "@times-components-native/types";
import { SectionTitles } from "./utils/sectionConfigs";
import { Orientation } from "@times-components-native/responsive/src/types";
// @ts-ignore
import { Viewport } from "@skele/components";

const styles = styleFactory();
const { SectionEvents } = NativeModules;
const sectionEventEmitter = new NativeEventEmitter(SectionEvents);

interface Props {
  adConfig: any;
  onArticlePress: OnArticlePress;
  onLinkPress: (link: any) => void;
  onPuzzlePress: () => void;
  onPuzzleBarPress: () => void;
  onViewed?: (item: any, slices: any[]) => void;
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
  receiveChildList,
  section,
}) => {
  const { cover, name, slices, title: sectionTitle } = section;
  const { isTablet, editionBreakpoint, orientation } = useResponsiveContext();

  const flatListRef = useRef<FlatList | null>(null);
  const sliceOffsets = useRef<Record<string, number>>({});

  useEffect(() => {
    const sectionEventsListener = sectionEventEmitter.addListener(
      "scrollToArticleId",
      scrollToOffset,
    );
    return () => {
      sectionEventsListener.remove();
    };
  }, []);

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
    <Viewport.Tracker>
      <FlatList
        ref={(ref) => (flatListRef.current = ref)}
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
        renderItem={renderItem(isPuzzle, orientation)}
      />
    </Viewport.Tracker>
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
