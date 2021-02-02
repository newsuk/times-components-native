import { NativeModules } from "react-native";
import "./../mock-track";
import trackSection from "@times-components-native/pages/src/section/track-section";

describe("pages - track sections", () => {
  it("section page view tracking calls only onSectionLoaded", () => {
    const {
      SectionEvents: { onSectionLoaded },
      ReactAnalytics: { track },
    } = NativeModules;

    trackSection({
      action: "Viewed",
      attrs: { sectionName: "dummy-section-name" },
      object: "Section",
    });

    expect(onSectionLoaded).toHaveBeenCalled();
    expect(track).not.toHaveBeenCalled();
  });
});
