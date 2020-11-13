import React, { createContext, useContext } from "react";
import defaults from "./defaults";
import SectionContext from "./section-context";

const Context = createContext(defaults);

function ContextProviderWithDefaults({ value, ...props }) {
  return <Context.Provider {...props} value={{ ...defaults, ...value }} />;
}

const useAppContext = () => useContext(Context);

export default Context;
export { defaults, SectionContext, ContextProviderWithDefaults, useAppContext };
