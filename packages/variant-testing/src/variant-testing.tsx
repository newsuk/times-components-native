import React, { createContext, useContext, ReactNode } from "react";
import PropTypes from "prop-types";

export const VariantTestingContext = createContext({});

type Props = {
  children: ReactNode;
  variants: Record<string, string>;
};

export const VariantTestingProvider = ({ variants = {}, children }: Props) => {
  const { articleMpuTestVariant } = variants;

  let variantConfig = {};

  if (articleMpuTestVariant) {
    variantConfig = {
      ...variantConfig,
      articleMpu: {
        group: articleMpuTestVariant,
        ...(articleMpuTestVariant !== "A" && {
          slotName:
            articleMpuTestVariant === "B"
              ? "native-inline-ad-b"
              : "native-inline-ad-c",
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
