/* istanbul ignore file */

import { createContext, useContext } from "react";

import { Action } from "./reducer";

export const InlineMeasurementDispatch = createContext<React.Dispatch<Action>>(
  () => ({}),
);
export const useInlineMeasurementDispatchContext = () =>
  useContext(InlineMeasurementDispatch);
