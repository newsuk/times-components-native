/* istanbul ignore file */

import { createContext, useContext } from "react";

import { Action } from "./reducer";

export const MeasurementDispatch = createContext<React.Dispatch<Action>>(
  () => ({}),
);
export const useMeasurementDispatchContext = () =>
  useContext(MeasurementDispatch);
