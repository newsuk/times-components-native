import React, { createContext, useContext, ReactNode } from "react";
import PropTypes from "prop-types";

export const VariantTestingContext = createContext({});

type Props = {
  children: ReactNode;
  variants: Record<string, string>;
  isTablet: boolean;
};

export const VariantTestingProvider = ({
  variants = {},
  isTablet,
  children,
}: Props) => {
  let { articleMpuTestVariant } = variants;

  let variantConfig = {};

  if (isTablet) {
    if (
      !articleMpuTestVariant ||
      !["A", "B", "C"].includes(articleMpuTestVariant)
    ) {
      articleMpuTestVariant = "A";
    }

    variantConfig = {
      ...variantConfig,
      articleMpu: {
        group: articleMpuTestVariant,
        slotName: `native-inline-ad-${articleMpuTestVariant.toLowerCase()}`,
        ...(articleMpuTestVariant !== "A" && {
          adPosition: 5,
          width: 300,
          height: articleMpuTestVariant === "B" ? 250 : 600,
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
