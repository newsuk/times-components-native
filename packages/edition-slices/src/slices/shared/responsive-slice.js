import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContext } from "@times-components-native/responsive";
import { editionBreakpoints } from "@times-components-native/styleguide";
import Gutter from "./gutter";
import ContentWrapper from "./content-wrapper";

const ResponsiveSlice = ({
  renderSmall,
  renderMedium,
  renderWide,
  renderHuge,
  grow = false,
}) => (
  <ResponsiveContext.Consumer>
    {({ editionBreakpoint }) => {
      switch (editionBreakpoint) {
        case editionBreakpoints.small:
          return renderSmall(editionBreakpoint);
        case editionBreakpoints.medium:
          return <Gutter grow={grow}>{renderMedium(editionBreakpoint)}</Gutter>;
        case editionBreakpoints.wide:
          return (
            <Gutter grow={grow}>
              {(renderWide && renderWide(editionBreakpoint)) ||
                (renderMedium && renderMedium(editionBreakpoint))}
            </Gutter>
          );
        case editionBreakpoints.huge:
          return (
            <Gutter grow={grow}>
              <ContentWrapper>
                {(renderHuge && renderHuge(editionBreakpoint)) ||
                  (renderWide && renderWide(editionBreakpoint)) ||
                  (renderMedium && renderMedium(editionBreakpoint))}
              </ContentWrapper>
            </Gutter>
          );
        default:
          return renderSmall(editionBreakpoint);
      }
    }}
  </ResponsiveContext.Consumer>
);

ResponsiveSlice.propTypes = {
  renderSmall: PropTypes.func.isRequired,
  renderMedium: PropTypes.func.isRequired,
  renderWide: PropTypes.func,
  renderHuge: PropTypes.func,
};

ResponsiveSlice.defaultProps = {
  renderWide: null,
  renderHuge: null,
};

export default ResponsiveSlice;
