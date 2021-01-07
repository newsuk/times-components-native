import React, { Component } from "react";
import { AppState, DeviceEventEmitter, NativeModules } from "react-native";
import PropTypes from "prop-types";

import { SectionContext } from "@times-components-native/context";
import Section from "@times-components-native/section";
import { VariantTestingProvider } from "@times-components-native/variant-testing";
import trackSection from "./track-section";
import adTargetConfig from "./ad-targeting-config";

const {
  getOpenedPuzzleCount,
  getSavedArticles,
  getSectionData,
  onArticlePress: onArticlePressBridge,
  onLinkPress: onLinkPressBridge,
  onPuzzleBarPress = () => null,
  onPuzzlePress: onPuzzlePressBridge,
  onArticleSavePress: onArticleSavePressBridge,
} = NativeModules.SectionEvents || {
  onArticlePress: () => null,
  onLinkPress: () => null,
  onPuzzleBarPress: () => null,
  onPuzzlePress: () => null,
};

const onArticlePress = ({ id, isPuff = false }) =>
  onArticlePressBridge(id, isPuff);
const onLinkPress = ({ url, isExternal = true }) =>
  onLinkPressBridge(url, isExternal);

const onPuzzlePress = ({ id, title, url }) =>
  onPuzzlePressBridge(url, title, id);

class SectionPage extends Component {
  constructor(props) {
    super(props);
    const { section } = this.props;
    this.state = {
      recentlyOpenedPuzzleCount: props ? props.recentlyOpenedPuzzleCount : 0,
      savedArticles: null,
      section,
    };
    this.onAppStateChange = this.onAppStateChange.bind(this);
    this.toggleArticleSaveStatus = this.toggleArticleSaveStatus.bind(this);
    this.syncAppData = this.syncAppData.bind(this);
    this.updateSectionData = this.updateSectionData.bind(this);
    this.onArticleSavePress = this.onArticleSavePress.bind(this);
    this.isSyncing = false;
  }

  componentDidMount() {
    AppState.addEventListener("change", this.onAppStateChange);
    DeviceEventEmitter.addListener("updateSavedArticles", this.syncAppData);
    DeviceEventEmitter.addListener("updateSectionData", this.updateSectionData);
    this.syncAppData();
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.onAppStateChange);
    DeviceEventEmitter.removeListener("updateSavedArticles", this.syncAppData);
    DeviceEventEmitter.removeListener(
      "updateSectionData",
      this.updateSectionData,
    );
  }

  onAppStateChange(nextAppState) {
    if (nextAppState === "active") {
      this.syncAppData();
    }
  }

  onArticleSavePress(save, articleId) {
    this.toggleArticleSaveStatus(save, articleId);

    onArticleSavePressBridge(save, articleId).catch(() => {
      this.toggleArticleSaveStatus(!save, articleId);
    });
  }

  async syncAppData() {
    const {
      section: { name },
    } = this.state;

    if (this.isSyncing) {
      return;
    }

    this.isSyncing = true;

    try {
      if (name === "PuzzleSection" && getOpenedPuzzleCount) {
        const count = await getOpenedPuzzleCount();

        this.setState({ recentlyOpenedPuzzleCount: count });
      }

      if (getSavedArticles) {
        const articleIds = await getSavedArticles();
        const savedArticles = !articleIds
          ? null
          : articleIds.reduce((saved, id) => {
              // eslint-disable-next-line no-param-reassign
              saved[id] = true;

              return saved;
            }, {});

        this.setState({
          savedArticles,
        });
      }
    } finally {
      this.isSyncing = false;
    }
  }

  updateSectionData() {
    const {
      section: { id },
    } = this.props;
    if (getSectionData) {
      getSectionData(id).then((data) => {
        this.setState({ section: JSON.parse(data) });
      });
    }
  }

  toggleArticleSaveStatus(save, articleId) {
    const { savedArticles } = this.state;
    savedArticles[articleId] = save || undefined;
    this.setState({ savedArticles });
  }

  render() {
    const { publicationName, publishedTime, variants } = this.props;
    const { recentlyOpenedPuzzleCount, savedArticles, section } = this.state;

    const adConfig = adTargetConfig({
      sectionName: section.name,
    });

    const readArticles = [
      "703d9a72-4f86-11eb-ad71-ea6bb4a570af",
      "8622019e-36f4-11ea-9e00-2e9f417bebfa",
      "186f16cc-4f4f-11eb-ad71-ea6bb4a570af",
      "9d5c5076-502f-11eb-9824-61a56b05e43d",
      "af28b209-7b7a-4103-9782-c922fb3e8743",
      "4a77e282-503c-11eb-9824-61a56b05e43d",
      "1aa0eaee-5038-11eb-9824-61a56b05e43d",
      "c705d420-4ad9-11eb-9dbc-44d114c9d92d",
      "a4382b7c-5048-11eb-ad71-ea6bb4a570af",
      "9170ea86-505e-11eb-9824-61a56b05e43d",
    ];

    return (
      <SectionContext.Provider
        value={{
          onArticleSavePress: onArticleSavePressBridge
            ? this.onArticleSavePress
            : null,
          publicationName,
          recentlyOpenedPuzzleCount,
          savedArticles,
          readArticles,
        }}
      >
        <VariantTestingProvider variants={variants}>
          <Section
            adConfig={adConfig}
            analyticsStream={trackSection}
            onArticlePress={onArticlePress}
            onLinkPress={onLinkPress}
            onPuzzleBarPress={onPuzzleBarPress}
            onPuzzlePress={onPuzzlePress}
            section={section}
            publicationName={publicationName}
            publishedTime={publishedTime}
          />
        </VariantTestingProvider>
      </SectionContext.Provider>
    );
  }
}

SectionPage.propTypes = {
  publicationName: PropTypes.string,
  recentlyOpenedPuzzleCount: PropTypes.number,
  section: PropTypes.shape({}),
};

SectionPage.defaultProps = {
  publicationName: "TIMES",
  recentlyOpenedPuzzleCount: 0,
  section: null,
};

export default SectionPage;
