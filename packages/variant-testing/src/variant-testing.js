import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

export const VariantTestingContext = createContext({});

export const VariantTestingProvider = ({ variants = {}, children }) => {
  const { articleMpuTest } = variants;

  let variantConfig = {};

  if (articleMpuTest) {
    variantConfig = {
      articleMpuTest: {
        group: articleMpuTest,
        ...(articleMpuTest !== "A" && {
          adPosition: 5,
          width: 300,
          height: articleMpuTest === "B" ? 250 : 600,
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
