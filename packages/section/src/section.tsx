import React, { FC, useCallback, useRef, useState } from "react";
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
  scrollToArticleId,
}) => {
  const { cover, name, slices, title: sectionTitle } = section;
  const { isTablet, editionBreakpoint, orientation } = useResponsiveContext();

  const flatListRef = useRef<FlatList>(null);

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

  let sliceOffset = 0;
  let addToOffsetCount = 0;
  const addToOffset = (height: number, sliceOffsetIndex: number) => {
    sliceOffset += height;
    addToOffsetCount++;
    if (addToOffsetCount === sliceOffsetIndex) {
      setTimeout(() => {
        flatListRef.current?.scrollToOffset({ offset: sliceOffset });
        sliceOffset = 0;
      }, 1000);
    }
  };

  const renderItem = (
    isPuzzle: boolean,
    orientation: Orientation,
    sliceOffsetIndex: number,
  ) => ({ index, item: slice, inTodaysEditionSlice }: any) => (
    <View
      style={{ flex: 1 }}
      onLayout={(event) => {
        if (!sliceOffsetIndex || index > sliceOffsetIndex) return;
        console.log(
          "FDSJFKLSDJFKLDSJFKLSDJFLKSDJFLKSDJFKLDS",
          sectionTitle,
          index,
        );
        if (index < sliceOffsetIndex && addToOffsetCount < sliceOffsetIndex) {
          console.log(
            "FDSJFKLSDJFKLDSJFKLSDJFLKSDJFLKSDJFKLDS2222222222",
            sectionTitle,
            index,
          );
          // if (index < sliceOffsetIndex) {
          const height = event?.nativeEvent?.layout?.height ?? 0;
          addToOffset(height, sliceOffsetIndex);
        }
      }}
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
      0,
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

  scrollToArticleId =
    sectionTitle === "News"
      ? "eb796c0a-6f9f-11eb-811f-f64a7b4cb430"
      : undefined;
  // scrollToArticleId = "cd1cd32c-6ef6-11eb-bd2f-f33f509764cd";

  const sliceIndexFromArticle = scrollToArticleId
    ? getSliceIndexByArticleId(scrollToArticleId, data)
    : 0;

  // const sliceIndexFromArticle = sectionTitle === "News" ? 3 : 0;

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
        renderItem={renderItem(isPuzzle, orientation, sliceIndexFromArticle)}
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
