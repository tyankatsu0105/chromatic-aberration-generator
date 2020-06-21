import { configureStore, combineReducers } from "@reduxjs/toolkit";

import * as editorValue from "./editor-value";

/**
 * Reducer
 */
const reducer = combineReducers({
  [editorValue.featureKey]: editorValue.reducer,
});

/**
 * Store
 */
export const store = configureStore({
  reducer,
});

/**
 * Types
 */
export type State = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
