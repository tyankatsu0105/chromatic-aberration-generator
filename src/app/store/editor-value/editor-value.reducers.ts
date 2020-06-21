import { createReducer } from "@reduxjs/toolkit";

import { initialState } from "./editor-value.states";
import { updateTranslate1, updateTranslate2 } from "./editor-value.actions";

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateTranslate1, (state) => {
      console.log(state);
    })
    .addCase(updateTranslate2, (state) => {
      console.log(state);
    });
});
