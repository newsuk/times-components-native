import React, { createContext, useContext, ReactNode } from "react";
import PropTypes from "prop-types";

import { useResponsiveContext } from "@times-components-native/responsive";

export const VariantTestingContext = createContext({});

const validateVariant = (variant: string) => {
  if (!variant || !["A", "B", "C"].includes(variant)) {
    return "A";
  }
  return variant;
};

type Props = {
  children: ReactNode;
  variants: Record<string, string>;
};

export const VariantTestingProvider = ({ variants = {}, children }: Props) => {
  const { articleMpuTestVariant, sectionAdTestVariant } = variants;
  const { isTablet } = useResponsiveContext();

  let variantConfig = {};

  if (isTablet) {
    // const validArticleMpuTestVariant = validateVariant(articleMpuTestVariant);
    const validArticleMpuTestVariant = "A";
    const validSectionAdTestVariant = validateVariant(sectionAdTestVariant);
    // const validSectionAdTestVariant = "C";

    variantConfig = {
      ...variantConfig,
      articleMpu: {
        group: validArticleMpuTestVariant,
        slotName: `native-inline-ad-${validArticleMpuTestVariant.toLowerCase()}`,
        ...(validArticleMpuTestVariant !== "A" && {
          adPosition: 5,
          width: 300,
          height: validArticleMpuTestVariant === "B" ? 250 : 600,
        }),
      },
      sectionAd: {
        group: validSectionAdTestVariant,
        ...(validSectionAdTestVariant !== "A" && {
          slotName: "native-inline-ad-a",
          // slotName: `native-section-ad-${validSectionAdTestVariant.toLowerCase()}`,
        }),
      },
    };
  }

  return (
    <VariantTestingContext.Provider value={variantConfig}>
      {children}
    </VariantTestingContext.Provider>
  );
};

VariantTestingProvider.propTypes = {
  children: PropTypes.node,
};

VariantTestingProvider.defaultProps = {
  children: null,
};

export const useVariantTestingContext = () => useContext(VariantTestingContext);
