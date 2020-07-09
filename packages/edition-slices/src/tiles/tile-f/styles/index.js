import { fontFactory, spacing } from "@tcn/styleguide";

const styles = {
  container: {
    padding: spacing(2)
  },
  headline: {
    ...fontFactory({
      font: "headline",
      fontSize: "tileLeadHeadline"
    })
  },
  summaryContainer: {
    marginBottom: spacing(2)
  }
};

export default styles;
