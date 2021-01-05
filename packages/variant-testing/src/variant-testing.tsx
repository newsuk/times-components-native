import React, { createContext, useContext, ReactNode } from "react";
import PropTypes from "prop-types";

export const VariantTestingContext = createContext({});

type Props = {
  children: ReactNode;
  variants: Record<string, string>;
};

export const VariantTestingProvider = ({ variants = {}, children }: Props) => {
  return (
    <VariantTestingContext.Provider value={variants}>
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
