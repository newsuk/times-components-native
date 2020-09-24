import React from "react";
import PropTypes from "prop-types";
import { useResponsiveContext } from "@times-components-native/responsive";
import { editionBreakpoints } from "@times-components-native/styleguide";
import Gutter from "./gutter";
import ContentWrapper from "./content-wrapper";

const ResponsiveSlice = ({
  renderSmall,
  renderMedium,
  renderWide,
  renderHuge,
  grow = false,
}) => {
  const { editionBreakpoint, orientation } = useResponsiveContext();
  switch (editionBreakpoint) {
    case editionBreakpoints.medium:
      return (
        <Gutter grow={grow}>
          {renderMedium(editionBreakpoint, orientation)}
        </Gutter>
      );
    case editionBreakpoints.wide:
      return (
        <Gutter grow={grow}>
          {(renderWide && renderWide(editionBreakpoint, orientation)) ||
            (renderMedium && renderMedium(editionBreakpoint, orientation))}
        </Gutter>
      );
    case editionBreakpoints.huge:
      return (
        <Gutter grow={grow}>
          <ContentWrapper>
            {(renderHuge && renderHuge(editionBreakpoint, orientation)) ||
              (renderWide && renderWide(editionBreakpoint, orientation)) ||
              (renderMedium && renderMedium(editionBreakpoint, orientation))}
          </ContentWrapper>
        </Gutter>
      );
    case editionBreakpoints.small:
    default:
      return <>{renderSmall(editionBreakpoint, orientation)}</>;
  }
};

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
