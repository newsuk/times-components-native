import React from "react";
import { FlatList, View } from "react-native";
import PropTypes from "prop-types";
import { useResponsiveContext } from "@times-components-native/responsive";
import { withTrackScrollDepth } from "@times-components-native/tracking";
import { useVariantTestingContext } from "@times-components-native/variant-testing";
import SectionItemSeparator from "./section-item-separator";
import withTrackingContext from "./section-tracking-context";
import PuzzleBar from "./puzzle-bar";
import MagazineCover from "./magazine-cover";
import Slice from "./slice";
import styleFactory from "./styles";
import {
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
  receiveChildList,
  section,
}) => {
  const { cover, name, slices, title } = section;

  const onViewableItemsChanged = (info) => {
    if (!info.changed.length) return [];

    return info.changed
      .filter((viewableItem) => viewableItem.isViewable)
      .map((viewableItem) => onViewed(viewableItem.item, slices));
  };

  const getHeaderComponent = (isPuzzle, isMagazine) => {
    if (isPuzzle) return <PuzzleBar onPress={onPuzzleBarPress} />;

    if (isMagazine) return <MagazineCover cover={cover} />;

    return null;
  };

  const renderItem = (isPuzzle) => ({
    index,
    item: slice,
    inTodaysEditionSlice,
  }) => (
    <Slice
      index={index}
      length={slices.length}
      onPress={isPuzzle ? onPuzzlePress : onArticlePress}
      onLinkPress={onLinkPress}
      slice={slice}
      isInSupplement={isSupplementSection(title)}
      inTodaysEditionSlice={inTodaysEditionSlice}
      adConfig={adConfig}
    />
  );

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

  const { isTablet, editionBreakpoint } = useResponsiveContext();
  const variants = useVariantTestingContext();

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
      renderItem={renderItem(isPuzzle)}
      windowSize={3}
    />
  );
};

Section.displayName = "Section";

Section.propTypes = {
  onArticlePress: PropTypes.func,
  onLinkPress: PropTypes.func,
  onPuzzleBarPress: PropTypes.func,
  onPuzzlePress: PropTypes.func,
  onViewed: PropTypes.func,
  receiveChildList: PropTypes.func,
  section: PropTypes.shape({}).isRequired,
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
