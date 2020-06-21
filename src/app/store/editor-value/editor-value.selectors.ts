import { createSelector } from "@reduxjs/toolkit";

import { EditorValueState, featureKey } from "./editor-value.states";

const selector = (state: { [featureKey]: EditorValueState }) =>
  state[featureKey];

export const translate1Selector = createSelector(
  selector,
  (state) => state.translate1
);

export const translate2Selector = createSelector(
  selector,
  (state) => state.translate2
);
