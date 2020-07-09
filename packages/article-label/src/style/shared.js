import styleguide from "@tcn/styleguide";

const { fontFactory } = styleguide();
const styles = {
  title: {
    ...fontFactory({
      font: "supporting",
      fontSize: "cardMetaMobile"
    }),
    fontWeight: "400",
    lineHeight: 11,
    marginBottom: 0,
    marginTop: -1,
    paddingTop: 1
  }
};

export default styles;
