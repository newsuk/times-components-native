import { fontFactory, spacing } from "@times-components-native/styleguide";

const styles = {
  container: {
    padding: spacing(2),
  },
  headline: {
    ...fontFactory({
      font: "headline",
      fontSize: "tileLeadHeadline",
    }),
    marginBottom: spacing(1),
  },
  strapline: {
    marginBottom: spacing(1),
  },
  summaryContainer: {
    marginBottom: spacing(2),
  },
};

export default styles;
