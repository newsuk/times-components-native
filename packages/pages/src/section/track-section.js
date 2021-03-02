import { NativeModules } from "react-native";

const { onSectionLoaded } = NativeModules.SectionEvents || {
  onSectionLoaded: () => null,
};

export default (event) => {
  if (event.object === "Section" && event.action === "Viewed") {
    onSectionLoaded(event.attrs.sectionName, event);
  }
};
