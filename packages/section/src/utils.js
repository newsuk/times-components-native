/* eslint-disable no-param-reassign */
import memoizeOne from "memoize-one";
import format from "date-fns/format";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { pipe } from "@times-components-native/utils/src/pipe";

const withIgnoredSeperator = (slice) => ({ ...slice, ignoreSeparator: true });

const withIsConsecutive = (slice) => ({ ...slice, isConsecutive: true });

const shouldIgnoreSeperator = ({ name }) =>
  name === "LeadersSlice" || name === "DailyUniversalRegister";

const splitPuzzlesBySlices = (puzzles, numberOfTilesPerSlice = 3) =>
  puzzles.reduce((result, puzzle, index) => {
    const slices = result;
    const sliceIndex = Math.floor(index / numberOfTilesPerSlice);
    const { id, name } = puzzle;
    slices[sliceIndex] = slices[sliceIndex] || { id, name };

    slices[sliceIndex].puzzles = [
      ...(slices[sliceIndex].puzzles || []),
      puzzle,
    ];

    return slices;
  }, []);

const buildSliceData = memoizeOne((data) =>
  data.reduce((newSlices, oldSlice, idx) => {
    const nextSlice = data[idx + 1];

    if (nextSlice && shouldIgnoreSeperator(nextSlice)) {
      newSlices[idx] = withIgnoredSeperator(oldSlice);
      newSlices[idx + 1] = withIgnoredSeperator(nextSlice);
    } else if (!newSlices[idx]) {
      newSlices[idx] = oldSlice;
    }

    const currentSlice = newSlices[idx];
    let generatedId = currentSlice.id;
    Object.keys(currentSlice).forEach((key) => {
      if (currentSlice[key].article) {
        generatedId += currentSlice[key].article.id;
      }
    });

    newSlices[idx] = {
      ...currentSlice,
      elementId: `${generatedId}.${idx}`,
    };

    return newSlices;
  }, []),
);

const consecutiveItemsFlagger = memoizeOne((slices) =>
  slices.reduce(
    (acc, curr, i) =>
      acc.length > 0 &&
      curr.name &&
      acc[i - 1].name &&
      curr.name === acc[i - 1].name
        ? [...acc, withIsConsecutive(curr)]
        : [...acc, curr],
    [],
  ),
);

const insertSectionAd = (isTablet, variants) => (slices) => {
  const adSlotIndex = 3; // 0 based index

  if (
    !isTablet ||
    slices.length <= adSlotIndex ||
    !variants ||
    !Object.keys(variants).length
  )
    return slices;

  const { sectionAd } = variants;

  if (!sectionAd) return slices;

  const { group, slotName } = sectionAd;

  if (group === "A") return slices;

  return [
    ...slices.slice(0, adSlotIndex),
    {
      name: "SectionAd",
      slotName,
    },
    ...slices.slice(adSlotIndex),
  ];
};

const prepareSlicesForRender = (isTablet, variants) =>
  pipe(
    buildSliceData,
    consecutiveItemsFlagger,
    insertSectionAd(isTablet, variants),
  );

const getRatio = (ratio) => {
  const ratios = ratio.split(":").map((num) => parseInt(num, 10));

  return ratios[0] / ratios[1];
};

const getImage = ({ crops = [] }) => {
  if (crops.length === 0) {
    return {};
  }

  return {
    ratio: getRatio(crops[0].ratio),
    url: crops[0].url,
  };
};

const filterPuzzles = (puzzles, editionBreakpoint) =>
  editionBreakpoint === editionBreakpoints.small
    ? puzzles.filter((puzzle) => !puzzle.hideOnMobile)
    : puzzles;

const createPuzzleData = (puzzles, editionBreakpoint) => {
  const filteredPuzzles = filterPuzzles(puzzles, editionBreakpoint);
  const splitedPuzzlesBySlices = splitPuzzlesBySlices(filteredPuzzles);
  const sliceData = buildSliceData(splitedPuzzlesBySlices);

  return sliceData;
};

// temporary until EB and TPA support a SupplementType which will allow front-end
// to know which sections are supplements

const isSupplementSection = (sectionTitle) => {
  const knownSupplementSections = [
    "Bricks & Mortar",
    "Style",
    "The Sunday Times Magazine",
    "The Times Magazine",
    "Magazine",
    "Saturday Review",
    "Times2",
    "Travel",
    "Home",
    "Weekend",
    "Culture",
  ];

  return sectionTitle && knownSupplementSections.includes(sectionTitle);
};

const getEmailPuzzlesUrl = (publishedTime) =>
  publishedTime
    ? `https://times.formstack.com/forms/puzzles_${format(
        publishedTime,
        "DD_MM_YYYY",
      )}`
    : ``;

export {
  getEmailPuzzlesUrl,
  prepareSlicesForRender,
  consecutiveItemsFlagger,
  buildSliceData,
  insertSectionAd,
  getImage,
  createPuzzleData,
  splitPuzzlesBySlices,
  filterPuzzles,
  isSupplementSection,
};
