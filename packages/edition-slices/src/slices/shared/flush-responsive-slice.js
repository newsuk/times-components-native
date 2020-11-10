import { useResponsiveContext } from "@times-components-native/responsive";
import { editionBreakpoints } from "@times-components-native/styleguide";

const FlushResponsiveSlice = ({
  renderSmall,
  renderMedium,
  renderWide,
  renderHuge,
}) => {
  const { editionBreakpoint, orientation } = useResponsiveContext();
  switch (editionBreakpoint) {
    case editionBreakpoints.small:
      return renderSmall(editionBreakpoint, orientation);
    case editionBreakpoints.medium:
      return renderMedium(editionBreakpoint, orientation);
    case editionBreakpoints.wide:
      return (
        (renderWide && renderWide(editionBreakpoint, orientation)) ||
        (renderMedium && renderMedium(editionBreakpoint, orientation))
      );
    case editionBreakpoints.huge:
      return (
        (renderHuge && renderHuge(editionBreakpoint, orientation)) ||
        (renderWide && renderWide(editionBreakpoint, orientation)) ||
        (renderMedium && renderMedium(editionBreakpoint, orientation))
      );
    default:
      return renderSmall(editionBreakpoint, orientation);
  }
};

export default FlushResponsiveSlice;
